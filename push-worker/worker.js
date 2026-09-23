/* Push-Dienst für den Wochenplaner
   ---------------------------------
   Weckt die App auch dann, wenn sie geschlossen ist. Läuft als Cloudflare
   Worker mit Cron-Auslöser.

   Bewusst sparsam: Der Dienst bekommt NUR Zeitpunkte, zu denen geweckt
   werden soll — keine Titel, keine Orte, keinen Inhalt. Was ansteht, liest
   der Service Worker im Browser aus dem lokalen Speicher. Wer diesen Dienst
   also einsieht, erfährt bestenfalls, DASS um 14:45 etwas ansteht, nie was.

   Die Push-Nachricht selbst ist leer. Das erspart die Verschlüsselung nach
   RFC 8291 und ist hier ausreichend, weil ohnehin nichts zu übertragen ist. */

const b64url = (bytes) => btoa(String.fromCharCode(...new Uint8Array(bytes)))
  .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const textB64url = (s) => b64url(new TextEncoder().encode(s));

/* VAPID-Nachweis: belegt gegenüber dem Push-Dienst des Browsers, dass die
   Nachricht von uns stammt. Gilt zwölf Stunden. */
async function vapidToken(aud, jwkText, subject) {
  const jwk = JSON.parse(jwkText);
  const kopf = textB64url(JSON.stringify({ typ: "JWT", alg: "ES256" }));
  const rumpf = textB64url(JSON.stringify({
    aud,
    exp: Math.floor(Date.now() / 1000) + 12 * 3600,
    sub: subject || "mailto:planer@example.com",
  }));
  const schluessel = await crypto.subtle.importKey(
    "jwk", { ...jwk, key_ops: ["sign"], ext: true },
    { name: "ECDSA", namedCurve: "P-256" }, false, ["sign"]);
  const signatur = await crypto.subtle.sign(
    { name: "ECDSA", hash: "SHA-256" },
    schluessel, new TextEncoder().encode(`${kopf}.${rumpf}`));
  return `${kopf}.${rumpf}.${b64url(signatur)}`;
}

async function pushSenden(endpoint, env) {
  const aud = new URL(endpoint).origin;
  const token = await vapidToken(aud, env.VAPID_JWK, env.VAPID_SUBJECT);
  return fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `vapid t=${token}, k=${env.VAPID_PUBLIC}`,
      TTL: "180",
      "Content-Length": "0",
    },
  });
}

/* Kurzer Name für einen Endpunkt — dient als Schlüssel im Speicher */
async function kennung(endpoint) {
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(endpoint));
  return b64url(hash).slice(0, 24);
}

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export default {
  async fetch(anfrage, env) {
    if (anfrage.method === "OPTIONS")
      return new Response(null, { headers: cors });

    const pfad = new URL(anfrage.url).pathname;

    if (pfad === "/anmelden" && anfrage.method === "POST") {
      let daten;
      try {
        daten = await anfrage.json();
      } catch (e) {
        return new Response("Ungültige Anfrage", { status: 400, headers: cors });
      }
      const sub = daten && daten.subscription;
      if (!sub || !sub.endpoint)
        return new Response("Keine Anmeldung übergeben", { status: 400, headers: cors });

      /* Nur Zahlen übernehmen und deckeln — hier darf nichts anderes ankommen */
      const zeiten = (Array.isArray(daten.weckzeiten) ? daten.weckzeiten : [])
        .filter((z) => typeof z === "number" && isFinite(z))
        .filter((z) => z > Date.now() - 60000 && z < Date.now() + 60 * 86400000)
        .sort((a, b) => a - b)
        .slice(0, 200);

      const id = await kennung(sub.endpoint);
      await env.PLANER.put(id, JSON.stringify({
        endpoint: sub.endpoint,
        zeiten,
        gesehen: Date.now(),
      }), { expirationTtl: 60 * 86400 });
      return new Response(JSON.stringify({ ok: true, gemerkt: zeiten.length }),
        { headers: { ...cors, "content-type": "application/json" } });
    }

    if (pfad === "/abmelden" && anfrage.method === "POST") {
      const daten = await anfrage.json().catch(() => null);
      if (daten && daten.endpoint)
        await env.PLANER.delete(await kennung(daten.endpoint));
      return new Response(JSON.stringify({ ok: true }),
        { headers: { ...cors, "content-type": "application/json" } });
    }

    /* Auskunft zur Fehlersuche. Verrät bewusst keine Endpunkte — die sind
       so gut wie ein Schlüssel: wer sie hat, kann Nachrichten schicken.
       Die wichtigste Zeile ist "cronLaeuft": steht dort false, wurde der
       Cron-Auslöser nie eingerichtet, und dann kann nie etwas ankommen. */
    if (pfad === "/status") {
      const liste = await env.PLANER.list();
      const geraete = liste.keys.filter((k) => !k.name.startsWith("_"));
      let offeneZeiten = 0;
      let naechste = null;
      for (const eintrag of geraete) {
        const roh = await env.PLANER.get(eintrag.name);
        if (!roh) continue;
        let satz;
        try { satz = JSON.parse(roh); } catch (e) { continue; }
        const zeiten = satz.zeiten || [];
        offeneZeiten += zeiten.length;
        for (const z of zeiten)
          if (z > Date.now() && (naechste === null || z < naechste)) naechste = z;
      }
      const letzterLauf = Number(await env.PLANER.get("_letzterLauf")) || 0;
      const her = letzterLauf ? Math.round((Date.now() - letzterLauf) / 1000) : null;
      return new Response(JSON.stringify({
        angemeldeteGeraete: geraete.length,
        offeneWeckzeiten: offeneZeiten,
        naechsteWeckzeitIn: naechste ? Math.round((naechste - Date.now()) / 60000) + " Minuten" : null,
        cronLaeuft: her !== null && her < 300,
        letzterCronLaufVorSekunden: her,
        schluesselHinterlegt: !!env.VAPID_JWK,
        oeffentlicherSchluesselHinterlegt: !!env.VAPID_PUBLIC,
      }, null, 2), { headers: { ...cors, "content-type": "application/json" } });
    }

    /* Sofort eine Nachricht schicken, ohne auf eine Weckzeit zu warten.
       Verlangt den eigenen Endpunkt — nur wer ihn kennt, also das Gerät
       selbst, kann sich damit eine Nachricht schicken. */
    if (pfad === "/test" && anfrage.method === "POST") {
      const daten = await anfrage.json().catch(() => null);
      if (!daten || !daten.endpoint)
        return new Response("Endpunkt fehlt", { status: 400, headers: cors });
      const id = await kennung(daten.endpoint);
      if (!(await env.PLANER.get(id)))
        return new Response(JSON.stringify({ ok: false, grund: "Dieses Gerät ist nicht angemeldet" }),
          { status: 404, headers: { ...cors, "content-type": "application/json" } });
      let antwort;
      try {
        antwort = await pushSenden(daten.endpoint, env);
      } catch (e) {
        return new Response(JSON.stringify({ ok: false, grund: String(e && e.message || e) }),
          { status: 500, headers: { ...cors, "content-type": "application/json" } });
      }
      return new Response(JSON.stringify({ ok: antwort.ok, status: antwort.status }),
        { headers: { ...cors, "content-type": "application/json" } });
    }

    return new Response("Push-Dienst des Wochenplaners", { headers: cors });
  },

  /* Läuft laut wrangler.toml jede Minute */
  async scheduled(ereignis, env, ctx) {
    ctx.waitUntil((async () => {
      const jetzt = Date.now();
      /* Festhalten, dass der Cron läuft — sonst lässt sich von außen nicht
         unterscheiden, ob nichts fällig war oder ob nie jemand nachsieht. */
      await env.PLANER.put("_letzterLauf", String(jetzt), { expirationTtl: 7 * 86400 });
      const liste = await env.PLANER.list();
      for (const eintrag of liste.keys) {
        if (eintrag.name.startsWith("_")) continue; /* Verwaltungseinträge */
        const roh = await env.PLANER.get(eintrag.name);
        if (!roh) continue;
        let satz;
        try {
          satz = JSON.parse(roh);
        } catch (e) { continue; }

        /* Fällig ist alles, was gerade dran ist oder knapp verpasst wurde —
           ein Cron-Lauf kann sich um eine Minute verspäten. */
        const faellig = (satz.zeiten || []).filter((z) => z <= jetzt + 30000 && z > jetzt - 180000);
        if (!faellig.length) continue;

        const antwort = await pushSenden(satz.endpoint, env);
        /* 404/410: Der Browser kennt diese Anmeldung nicht mehr */
        if (antwort.status === 404 || antwort.status === 410) {
          await env.PLANER.delete(eintrag.name);
          continue;
        }
        const rest = (satz.zeiten || []).filter((z) => z > jetzt + 30000);
        await env.PLANER.put(eintrag.name, JSON.stringify({ ...satz, zeiten: rest }),
          { expirationTtl: 60 * 86400 });
      }
    })());
  },
};
