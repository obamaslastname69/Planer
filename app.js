"use strict";
/* ── Icons: lucide-Pfade, lokal eingebettet ── */
const ICONS = { "ChevronLeft": "<path d=\"m15 18-6-6 6-6\"/>", "ChevronRight": "<path d=\"m9 18 6-6-6-6\"/>", "Plus": "<path d=\"M5 12h14\"/><path d=\"M12 5v14\"/>", "Check": "<path d=\"M20 6 9 17l-5-5\"/>", "X": "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>", "ArrowRight": "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>", "Trash2": "<path d=\"M3 6h18\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><path d=\"M10 11v6\"/><path d=\"M14 11v6\"/>", "RefreshCw": "<path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/>", "Calendar": "<rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M16 2v4\"/><path d=\"M8 2v4\"/><path d=\"M3 10h18\"/>", "List": "<path d=\"M8 6h13\"/><path d=\"M8 12h13\"/><path d=\"M8 18h13\"/><path d=\"M3 6h.01\"/><path d=\"M3 12h.01\"/><path d=\"M3 18h.01\"/>", "Repeat": "<path d=\"m17 2 4 4-4 4\"/><path d=\"M3 11v-1a4 4 0 0 1 4-4h14\"/><path d=\"m7 22-4-4 4-4\"/><path d=\"M21 13v1a4 4 0 0 1-4 4H3\"/>", "UploadCloud": "<path d=\"M12 13v8\"/><path d=\"M4 14.9A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.24\"/><path d=\"m8 17 4-4 4 4\"/>", "AlertCircle": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4\"/><path d=\"M12 16h.01\"/>", "LayoutGrid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"/><rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"/>", "Target": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><circle cx=\"12\" cy=\"12\" r=\"6\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/>", "Undo2": "<path d=\"M9 14 4 9l5-5\"/><path d=\"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11\"/>", "Timer": "<circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 9v4l2 2\"/><path d=\"M9 2h6\"/>", "Flame": "<path d=\"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5z\"/>" };
function mkIcon(name) {
    return function Icon(props) {
        const p = props || {};
        return React.createElement("svg", {
            width: p.size || 16, height: p.size || 16, viewBox: "0 0 24 24", fill: "none",
            stroke: p.color || "currentColor", strokeWidth: 2,
            strokeLinecap: "round", strokeLinejoin: "round",
            className: p.className || "", style: p.style || {},
            dangerouslySetInnerHTML: { __html: ICONS[name] },
        });
    };
}
const ChevronLeft = mkIcon("ChevronLeft");
const ChevronRight = mkIcon("ChevronRight");
const Plus = mkIcon("Plus");
const Check = mkIcon("Check");
const X = mkIcon("X");
const ArrowRight = mkIcon("ArrowRight");
const Trash2 = mkIcon("Trash2");
const RefreshCw = mkIcon("RefreshCw");
const Calendar = mkIcon("Calendar");
const List = mkIcon("List");
const Repeat = mkIcon("Repeat");
const UploadCloud = mkIcon("UploadCloud");
const AlertCircle = mkIcon("AlertCircle");
const LayoutGrid = mkIcon("LayoutGrid");
const Target = mkIcon("Target");
const Flame = mkIcon("Flame");
const Undo2 = mkIcon("Undo2");
const Timer = mkIcon("Timer");
const { useState, useEffect, useRef, useMemo, useCallback } = React;
/* ────────────────────────────────────────────────────────────
   Design-Tokens
   Kalk & Tinte: kühles Kalkgrau-Papier, Tannentinte, Kategorie-
   farben tragen die Information. Zeiten immer in Mono (Messwert-
   Logik), Titel in Space Grotesk.
──────────────────────────────────────────────────────────── */
const DEFAULT_CATS = {
    uni: { label: "Uni", color: "#2B4B8F" },
    fokus: { label: "Lernen", color: "#5B3FA0" },
    arbeit: { label: "Arbeit", color: "#8A4E1C" },
    training: { label: "Training", color: "#1E6E5A" },
    privat: { label: "Privat", color: "#A03A5E" },
    glaube: { label: "Glauben", color: "#12657F" },
};
/* Wird beim Laden aus den gespeicherten Daten befüllt */
let CATS = { ...DEFAULT_CATS };
let CAT_KEYS = Object.keys(CATS);
function applyCats(custom) {
    CATS = custom && Object.keys(custom).length ? { ...custom } : { ...DEFAULT_CATS };
    CAT_KEYS = Object.keys(CATS);
}
/* Farbpalette zur Auswahl */
const PALETTE = [
    "#2B4B8F", "#3F51B5", "#5B3FA0", "#7A3F9E", "#A03A5E", "#C2185B",
    "#B3261E", "#D14343", "#C2410C", "#8A4E1C", "#A8761A", "#8C7211",
    "#5E7A1E", "#3F8A1E", "#1E6E5A", "#0F7A6C", "#12657F", "#0B6E8F",
    "#546E7A", "#5D4037", "#6D4C6E", "#37474F", "#7A5C3E", "#4A5D23",
];
const DAY_START = 6; // 06:00
const DAY_END = 23; // 23:00
const SLOT = 15; // Minuten-Raster
const STORE_KEY = "planner:v1";
const TIMER_KEY = "planer:timer";
const FOCUS_MIN = 25;
const BREAK_MIN = 5;
/* localStorage hinter derselben Schnittstelle wie im Artifact */
window.storage = {
    async get(key) {
        const v = localStorage.getItem(key);
        if (v === null)
            throw new Error("not found");
        return { key: key, value: v };
    },
    async set(key, value) { localStorage.setItem(key, value); return { key: key, value: value }; },
    async delete(key) { localStorage.removeItem(key); return { key: key, deleted: true }; },
    async list(prefix) {
        const p = prefix || "";
        return { keys: Object.keys(localStorage).filter((k) => k.indexOf(p) === 0), prefix: p };
    },
};
const MCP_CALENDAR = "https://calendarmcp.googleapis.com/mcp/v1";
const DAY_NAMES = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
/* ── Zeit-Helfer ───────────────────────────────────────────── */
const pad = (n) => String(n).padStart(2, "0");
const dayKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const minsToLabel = (m) => `${pad(Math.floor(m / 60))}:${pad(m % 60)}`;
const durLabel = (m) => (m >= 60 ? `${Math.floor(m / 60)}h${m % 60 ? pad(m % 60) : ""}` : `${m} min`);
function mondayOf(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const shift = (d.getDay() + 6) % 7;
    d.setDate(d.getDate() - shift);
    return d;
}
function addDays(date, n) {
    const d = new Date(date);
    d.setDate(d.getDate() + n);
    return d;
}
function isoWeek(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yStart) / 86400000 + 1) / 7);
}
function localISO(dateObj, minutes) {
    const d = new Date(dateObj);
    d.setHours(Math.floor(minutes / 60), minutes % 60, 0, 0);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:00`;
}
const uid = () => Math.random().toString(36).slice(2, 10);
/* Farbe eines Blocks: eigene Kategorie oder die Farbe aus Google */
function blockColor(b) {
    if (b.external)
        return b.color || "#6F7A72";
    return (CATS[b.cat] && CATS[b.cat].color) || "#6F7A72";
}
/* ── Haptik & Serien ───────────────────────────────────────── */
const buzz = (ms = 12) => {
    var _a;
    try {
        (_a = navigator.vibrate) === null || _a === void 0 ? void 0 : _a.call(navigator, ms);
    }
    catch { /* nicht überall verfügbar */ }
};
const MILESTONES = [10, 25, 50, 100, 200];
/* Tage am Stück, rückwärts ab heute. Ein noch offener heutiger Tag bricht nichts. */
function dayStreak(routineId, checks, today) {
    let d = new Date(today);
    if (!(checks[dayKey(d)] || []).includes(routineId))
        d = addDays(d, -1);
    let n = 0;
    for (let i = 0; i < 400; i++) {
        if (!(checks[dayKey(d)] || []).includes(routineId))
            break;
        n++;
        d = addDays(d, -1);
    }
    return n;
}
/* Wochen am Stück mit erreichtem Soll. Ein Joker pro Serie, laufende Woche zählt nie als Bruch. */
function weekStreak(routine, checks, refWeekStart) {
    var _a;
    const target = (_a = routine.weekTarget) !== null && _a !== void 0 ? _a : 2;
    let n = 0, joker = 1, jokerUsed = false;
    for (let i = 0; i < 104; i++) {
        const ws = addDays(refWeekStart, -7 * i);
        const hits = Array.from({ length: 7 }, (_, d) => dayKey(addDays(ws, d)))
            .filter((k) => (checks[k] || []).includes(routine.id)).length;
        if (hits >= target) {
            n++;
            continue;
        }
        if (i === 0)
            continue;
        if (joker > 0) {
            joker--;
            jokerUsed = true;
            continue;
        }
        break;
    }
    return { weeks: n, jokerUsed };
}
function weekHits(routine, checks, weekStartDate) {
    return Array.from({ length: 7 }, (_, d) => dayKey(addDays(weekStartDate, d)))
        .filter((k) => (checks[k] || []).includes(routine.id)).length;
}
/* ── Google Calendar über OAuth ────────────────────────────
   Client-ID unten eintragen — Anleitung in SETUP.md.
   Ohne ID läuft alles außer der Kalenderanbindung.
──────────────────────────────────────────────────────────── */
/* Wird aus config.js gelesen, damit Updates sie nicht überschreiben */
const GOOGLE_CLIENT_ID = (typeof window !== "undefined" && window.PLANER_CLIENT_ID) || "";
const GC_SCOPE = "https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/drive.appdata";
const GC_API = "https://www.googleapis.com/calendar/v3/calendars/primary/events";
const GC_TOKEN_KEY = "planer:gctoken";
let gcToken = null, gcExpiry = 0;
const gcConfigured = () => GOOGLE_CLIENT_ID.length > 0;
/* Anmeldung überdauert das Neuladen: Token bis zum Ablauf merken */
(function restoreToken() {
    try {
        const raw = localStorage.getItem(GC_TOKEN_KEY);
        if (!raw)
            return;
        const t = JSON.parse(raw);
        if (t && t.token && t.expiry > Date.now() + 120000) {
            gcToken = t.token;
            gcExpiry = t.expiry;
        }
    }
    catch (e) { /* kaputter Eintrag wird einfach ignoriert */ }
})();
function gcStoreToken(token, expiresIn) {
    gcToken = token;
    gcExpiry = Date.now() + (expiresIn || 3600) * 1000;
    try {
        localStorage.setItem(GC_TOKEN_KEY, JSON.stringify({ token: gcToken, expiry: gcExpiry }));
    }
    catch (e) { /* Speicher voll oder gesperrt */ }
}
function gcClearToken() {
    gcToken = null;
    gcExpiry = 0;
    try {
        localStorage.removeItem(GC_TOKEN_KEY);
    }
    catch (e) { }
}
/* Gibt es gerade ein gültiges Token? Prüft ohne Anmeldefenster zu öffnen. */
const gcHasToken = () => !!gcToken && Date.now() < gcExpiry - 120000;
/* silent = true versucht die Verlängerung ohne sichtbares Fenster */
function gcAuth(silent) {
    return new Promise((resolve, reject) => {
        if (!gcConfigured())
            return reject(new Error("keine Client-ID hinterlegt"));
        if (gcToken && Date.now() < gcExpiry - 120000)
            return resolve(gcToken);
        if (!(window.google && window.google.accounts && window.google.accounts.oauth2))
            return reject(new Error("Google-Bibliothek nicht geladen"));
        const client = window.google.accounts.oauth2.initTokenClient({
            client_id: GOOGLE_CLIENT_ID,
            scope: GC_SCOPE,
            prompt: "",
            callback: (res) => {
                if (res.error)
                    return reject(new Error(res.error));
                gcStoreToken(res.access_token, res.expires_in);
                resolve(gcToken);
            },
            error_callback: (e) => reject(new Error((e && e.type) || "Anmeldung abgebrochen")),
        });
        client.requestAccessToken();
    });
}
async function gcFetch(url, opts, retried) {
    const o = opts || {};
    const token = await gcAuth();
    const res = await fetch(url, Object.assign({}, o, {
        headers: Object.assign({ Authorization: "Bearer " + token, "Content-Type": "application/json" }, o.headers || {}),
    }));
    if (res.status === 401) {
        gcClearToken();
        if (!retried)
            return gcFetch(url, o, true);
        throw new Error("Anmeldung abgelaufen");
    }
    if (res.status === 403)
        throw new Error("Zugriff verweigert (403) — Drive-API aktiviert?");
    if (!res.ok)
        throw new Error("Google " + res.status);
    return res.json();
}
async function loadCalendar(weekStart) {
    const from = new Date(weekStart);
    from.setHours(0, 0, 0, 0);
    const to = addDays(from, 7);
    const q = new URLSearchParams({
        timeMin: from.toISOString(), timeMax: to.toISOString(),
        singleEvents: "true", orderBy: "startTime", maxResults: "250",
    });
    const data = await gcFetch(GC_API + "?" + q);
    const out = [];
    for (const ev of data.items || []) {
        const color = GC_COLORS[ev.colorId] || null;
        const title = ev.summary || "Termin";
        const base = { title: title, cat: "extern", color: color, external: true };
        /* Ganztägig: end.date ist der Tag NACH dem letzten Tag */
        if (ev.start && ev.start.date) {
            let d = new Date(ev.start.date + "T00:00:00");
            const last = new Date(((ev.end && ev.end.date) || ev.start.date) + "T00:00:00");
            let guard = 0;
            while (d < last && guard++ < 60) {
                out.push({ ...base, id: "gc-" + (ev.id || uid()) + "-" + dayKey(d), day: dayKey(d), allDay: true, start: 0, dur: 0 });
                d = addDays(d, 1);
            }
            if (guard === 0)
                out.push({ ...base, id: "gc-" + (ev.id || uid()), day: dayKey(d), allDay: true, start: 0, dur: 0 });
            continue;
        }
        /* Mit Uhrzeit: über Mitternacht hinweg in Tagesstücke schneiden */
        const s0 = new Date(ev.start && ev.start.dateTime);
        const e0 = new Date(ev.end && ev.end.dateTime);
        if (isNaN(s0))
            continue;
        const end = isNaN(e0) || e0 <= s0 ? new Date(s0.getTime() + 3600000) : e0;
        let cur = new Date(s0);
        let guard = 0;
        while (cur < end && guard++ < 30) {
            const midnight = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate() + 1);
            const segEnd = end < midnight ? end : midnight;
            const dayBase = new Date(cur.getFullYear(), cur.getMonth(), cur.getDate());
            const startMin = Math.max(DAY_START * 60, Math.round((cur - dayBase) / 60000));
            const endMin = Math.min(DAY_END * 60, Math.round((segEnd - dayBase) / 60000));
            if (endMin > startMin) {
                out.push({
                    ...base,
                    id: "gc-" + (ev.id || uid()) + "-" + dayKey(cur),
                    day: dayKey(cur), start: startMin, dur: endMin - startMin,
                    allDay: false,
                    cont: cur > s0, // läuft von gestern herein
                    goesOn: segEnd < end, // läuft morgen weiter
                });
            }
            cur = midnight;
        }
    }
    return out;
}
async function pushToCalendar(block) {
    const date = new Date(block.day + "T00:00:00");
    const s = new Date(date);
    s.setMinutes(block.start);
    const e = new Date(date);
    e.setMinutes(block.start + block.dur);
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Vienna";
    await gcFetch(GC_API, {
        method: "POST",
        body: JSON.stringify({
            summary: block.title,
            start: { dateTime: s.toISOString(), timeZone: tz },
            end: { dateTime: e.toISOString(), timeZone: tz },
            reminders: { useDefault: false, overrides: [{ method: "popup", minutes: 15 }] },
        }),
    });
    return true;
}
/* ── Todoist ───────────────────────────────────────────────
   Token liegt nur im Browser des Geräts, nie im Repository.
──────────────────────────────────────────────────────────── */
const TD_API = "https://api.todoist.com/api/v1";
const TD_KEY = "planer:todoist";
function tdToken() {
    try {
        return localStorage.getItem(TD_KEY) || "";
    }
    catch (e) {
        return "";
    }
}
function tdSetToken(v) {
    try {
        v ? localStorage.setItem(TD_KEY, v.trim()) : localStorage.removeItem(TD_KEY);
    }
    catch (e) { }
}
async function tdFetch(path, opts) {
    const o = opts || {};
    const token = tdToken();
    if (!token)
        throw new Error("kein Todoist-Token hinterlegt");
    const res = await fetch(TD_API + path, Object.assign({}, o, {
        headers: Object.assign({ Authorization: "Bearer " + token, "Content-Type": "application/json" }, o.headers || {}),
    }));
    if (res.status === 401 || res.status === 403)
        throw new Error("Token ungültig");
    if (!res.ok)
        throw new Error("Todoist " + res.status);
    if (res.status === 204)
        return null;
    const text = await res.text();
    return text ? JSON.parse(text) : null;
}
/* Offene Aufgaben holen (erste Seite reicht für den Alltag) */
async function tdLoadTasks() {
    const data = await tdFetch("/tasks");
    const items = (data && data.results) || data || [];
    return items.map((t) => {
        let est = 60;
        if (t.duration && t.duration.amount) {
            est = t.duration.unit === "day" ? 8 * 60 : t.duration.amount;
        }
        return {
            todoistId: String(t.id),
            title: t.content,
            est: Math.max(15, Math.min(8 * 60, est)),
            due: (t.due && t.due.date) || null,
            priority: t.priority || 1,
        };
    });
}
async function tdCloseTask(id) {
    await tdFetch("/tasks/" + id + "/close", { method: "POST" });
    return true;
}
/* ── Abgleich über Google Drive ────────────────────────────
   Speichert im versteckten appDataFolder: nur diese App sieht ihn.
──────────────────────────────────────────────────────────── */
/* Farbpalette der Google-Termine (colorId 1-11) */
const GC_COLORS = {
    "1": "#7986CB", "2": "#33B679", "3": "#8E24AA", "4": "#E67C73",
    "5": "#F6BF26", "6": "#F4511E", "7": "#039BE5", "8": "#616161",
    "9": "#3F51B5", "10": "#0B8043", "11": "#D50000",
};
const DRIVE_FILE = "planer-daten.json";
const DRIVE_API = "https://www.googleapis.com/drive/v3/files";
const DRIVE_UPLOAD = "https://www.googleapis.com/upload/drive/v3/files";
let driveFileId = null;
async function driveFindFile() {
    if (driveFileId)
        return driveFileId;
    const q = new URLSearchParams({
        spaces: "appDataFolder",
        q: "name='" + DRIVE_FILE + "'",
        fields: "files(id)",
        pageSize: "1",
    });
    const data = await gcFetch(DRIVE_API + "?" + q);
    driveFileId = data.files && data.files[0] ? data.files[0].id : null;
    return driveFileId;
}
async function driveLoad() {
    const id = await driveFindFile();
    if (!id)
        return null;
    const token = await gcAuth();
    const res = await fetch(DRIVE_API + "/" + id + "?alt=media", {
        headers: { Authorization: "Bearer " + token },
    });
    if (!res.ok)
        throw new Error("Laden fehlgeschlagen (" + res.status + ")");
    return res.json();
}
async function driveSave(data) {
    let id = await driveFindFile();
    if (!id) {
        const created = await gcFetch(DRIVE_API, {
            method: "POST",
            body: JSON.stringify({ name: DRIVE_FILE, parents: ["appDataFolder"] }),
        });
        id = created.id;
        driveFileId = id;
    }
    const token = await gcAuth();
    const res = await fetch(DRIVE_UPLOAD + "/" + id + "?uploadType=media", {
        method: "PATCH",
        headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok)
        throw new Error("Speichern fehlgeschlagen (" + res.status + ")");
    return true;
}
/* ── Lernplan Restprüfungen 4. Semester ────────────────────── */
const STUDY_EXAMS = [
    { id: "ex1", title: "Molekularbiologie 2", date: "2026-09-23" },
    { id: "ex2", title: "Biochemie & Diätetik", date: "2026-09-28" },
];
const SUBJECTS = {
    orga: { short: "Orga", title: "Organisation & LEVIS" },
    molbio: { short: "MolBio", title: "Molekularbiologie 2",
        note: "Priorität 1 · 27.09. · Mechanismen verstehen + Faktenmenge. Themenlandkarte zuerst, Mechanismuskarten aus dem Kopf, Karteikarten nur für echte Faktenlast. Letzte 10 Tage kein neuer Stoff." },
    thermo: { short: "Thermo", title: "Technische Thermodynamik",
        note: "Strategisch wichtigstes Fach. Fertigkeit, kein Wissen — wächst nur durch Wiederholung. Aufgabentypen katalogisieren (meist 6–10), eigene Formelsammlung schreiben, immer mit Einheiten rechnen. Grundlage für Verfahrenstechnik thermisch im 5. Semester." },
    prozess: { short: "Prozess", title: "Lebensmittelprozesstechnik & Analytik",
        note: "Direkt nach Thermo lernen, solange Bilanzen und Wärmeübertragung frisch sitzen. Pro Grundoperation eine Seite im selben Raster: Zweck, Prinzip, Apparat, Kenngrößen, Anwendung, Grenze." },
    allergien: { short: "Allergien", title: "Allergien & Unverträglichkeiten",
        note: "Effizientestes Fach, gut in 20–30-Minuten-Fenstern lernbar. Erst Systematik (Allergie/Intoleranz/Autoimmun, Reaktionstypen I–IV), dann Einzelbilder. Raster je Krankheitsbild: Mechanismus, Auslöser, Symptomatik, Diagnostik, Ernährungstherapie, Kennzeichnung." },
};
const STUDY_RULES = [
    "Rückwärts von der Altklausur lernen, nicht vorwärts von Folie 1.",
    "Abrufen statt lesen — nach jedem Block leeres Blatt, dann erst vergleichen.",
    "Verteilen statt bündeln: 4 × 90 min schlagen 1 × 6 Stunden am Sonntag.",
    "Fehlerlogbuch für Thermo, immer mit Grund für den Fehler.",
    "Ein Hauptfach, ein Nebenfach, der Rest wartet.",
    "ECTS sind nicht gleich Aufwand — Thermo ist klein und trotzdem der größte Hebel.",
];
const STUDY_NOTES = [
    "Drei Antritte, der dritte ist kommissionell vor einem Senat.",
    "Nicht antreten verbraucht einen Antritt. Bei Krankheit sofort Attest.",
    "Abmelden nur beim ersten Termin, bis 23:59 am dritten Werktag davor.",
    "80 % Anwesenheit bei Übungen und Laborübungen — lässt sich nicht nachlernen.",
];
const STUDY_WEEKS = [
    { n: 0, from: "2026-08-05", to: "2026-08-09", title: "Klarheit schaffen",
        must: [
            { t: "LEVIS: offene LVs und Antrittszahlen je Fach prüfen", m: 30, s: "orga" },
            { t: "Vergessenes fünftes Fach identifizieren", m: 15, s: "orga" },
            { t: "Alle Prüfungstermine aus dem Terminplan sammeln", m: 30, s: "orga" },
            { t: "Prüfungsformat je Fach klären", m: 30, s: "orga" },
            { t: "Hilfsmittel klären: Formelsammlung, Taschenrechner", m: 15, s: "orga" },
            { t: "Semesterstart in der Studienjahreseinteilung prüfen", m: 15, s: "orga" },
            { t: "Material sortieren: Ordner je Fach", m: 45, s: "orga" },
        ],
        extra: [
            { t: "Altklausur MolBio ansehen, Themen markieren", m: 45, s: "molbio" },
            { t: "Altklausur Thermo ansehen, Themen markieren", m: 45, s: "thermo" },
            { t: "Lernslots für 7 Wochen in den Kalender legen", m: 30, s: "orga" },
        ] },
    { n: 1, from: "2026-08-10", to: "2026-08-16", title: "Fundament legen",
        must: [
            { t: "MolBio: Themenlandkarte bauen", m: 90, s: "molbio" },
            { t: "MolBio: Kapitel 1–2 mit Mechanismuskarten", m: 120, s: "molbio" },
            { t: "Thermo: Aufgabentypen aus Altklausuren katalogisieren", m: 60, s: "thermo" },
            { t: "Thermo: Typ 1 rechnen", m: 30, s: "thermo" },
        ],
        extra: [
            { t: "MolBio: Kapitel 3", m: 90, s: "molbio" },
            { t: "Thermo: Typ 2", m: 45, s: "thermo" },
            { t: "Karteikarten für die reinen Faktenteile", m: 45, s: "molbio" },
        ] },
    { n: 2, from: "2026-08-17", to: "2026-08-23", title: "Stoff aufbauen",
        must: [
            { t: "MolBio: Kapitel 3–4", m: 210, s: "molbio" },
            { t: "Abruf Woche 1 aus dem Kopf", m: 30, s: "molbio" },
            { t: "Thermo: Typ 2–3 rechnen", m: 60, s: "thermo" },
            { t: "Thermo: Formelsammlung Teil 1 schreiben", m: 30, s: "thermo" },
        ],
        extra: [
            { t: "MolBio: Kapitel 5", m: 90, s: "molbio" },
            { t: "Thermo: Typ 4", m: 45, s: "thermo" },
            { t: "Fehlerlogbuch anlegen", m: 20, s: "thermo" },
        ] },
    { n: 3, from: "2026-08-24", to: "2026-08-30", title: "Mitte des Stoffs",
        must: [
            { t: "MolBio: Kapitel 5–6", m: 210, s: "molbio" },
            { t: "Abruf Kapitel 1–4", m: 30, s: "molbio" },
            { t: "Thermo: Typ 4–5 rechnen", m: 90, s: "thermo" },
        ],
        extra: [
            { t: "Halbzeit-Kontrolle: Altklausur MolBio überfliegen", m: 45, s: "molbio" },
        ] },
    { n: 4, from: "2026-08-31", to: "2026-09-06", title: "Stoff schließen",
        must: [
            { t: "MolBio: restliche Kapitel abschließen", m: 240, s: "molbio" },
            { t: "Thermo: gemischte Aufgaben über alle Typen", m: 90, s: "thermo" },
        ],
        extra: [
            { t: "Erste vollständige MolBio-Altklausur unter Zeitdruck", m: 120, s: "molbio" },
        ] },
    { n: 5, from: "2026-09-07", to: "2026-09-13", title: "Lücken schließen",
        must: [
            { t: "MolBio: gezielt die Lücken aus der Altklausur", m: 240, s: "molbio" },
            { t: "Thermo: Fehlerlogbuch durchgehen und Typen wiederholen", m: 90, s: "thermo" },
        ],
        extra: [
            { t: "Zweite MolBio-Altklausur", m: 120, s: "molbio" },
            { t: "Alle Mechanismuskarten aus dem Kopf nachzeichnen", m: 60, s: "molbio" },
        ] },
    { n: 6, from: "2026-09-14", to: "2026-09-20", title: "Nur noch abrufen",
        must: [
            { t: "MolBio: Themenlandkarte komplett aus dem Kopf", m: 90, s: "molbio" },
            { t: "MolBio: Mechanismen zeichnen und laut erklären", m: 120, s: "molbio" },
            { t: "MolBio: weitere Abrufrunde", m: 90, s: "molbio" },
        ],
        extra: [
            { t: "Dritte Altklausur unter echten Prüfungsbedingungen", m: 150, s: "molbio" },
        ] },
    { n: 7, from: "2026-09-21", to: "2026-09-27", title: "Endspurt & Prüfung",
        must: [
            { t: "Mo: Durchgang Themenlandkarte, schwächste 20 %", m: 90, s: "molbio" },
            { t: "Di: Durchgang Themenlandkarte, schwächste 20 %", m: 90, s: "molbio" },
            { t: "Mi: Durchgang Themenlandkarte, schwächste 20 %", m: 90, s: "molbio" },
            { t: "Do: Durchgang Themenlandkarte, schwächste 20 %", m: 90, s: "molbio" },
            { t: "Fr: letzte Altklausur unter Prüfungsbedingungen", m: 150, s: "molbio" },
            { t: "Sa: leichte Wiederholung, Weg und Sachen klären", m: 60, s: "molbio" },
        ],
        extra: [] },
];
function initStudy() {
    return {
        exams: STUDY_EXAMS.map((e) => ({ ...e })),
        weeks: STUDY_WEEKS.map((w) => ({
            n: w.n, from: w.from, to: w.to, title: w.title,
            must: w.must.map((t, i) => ({ id: "w" + w.n + "-must-" + i, t: t.t, m: t.m, s: t.s })),
            extra: w.extra.map((t, i) => ({ id: "w" + w.n + "-extra-" + i, t: t.t, m: t.m, s: t.s })),
        })),
    };
}
const DEFAULT_STATE = {
    blocks: [],
    todos: [],
    routines: [
        { id: "r1", title: "Bouldern", cat: "training" },
        { id: "r2", title: "Krafttraining", cat: "training" },
        { id: "r3", title: "Lernblock", cat: "fokus" },
        { id: "r4", title: "Lesen", cat: "privat" },
    ],
    checks: {},
    template: [],
    materialized: {},
    projects: [],
    studyDone: {},
    study: null,
    updatedAt: 0,
};
/* ════════════════════════════════════════════════════════════
   Hauptkomponente
════════════════════════════════════════════════════════════ */
function PlannerApp() {
    var _a, _b;
    const today = useMemo(() => new Date(), []);
    const [weekStart, setWeekStart] = useState(() => mondayOf(new Date()));
    const [selectedDay, setSelectedDay] = useState(() => dayKey(new Date()));
    const [state, setState] = useState(DEFAULT_STATE);
    const [loaded, setLoaded] = useState(false);
    const [external, setExternal] = useState([]);
    const [sync, setSync] = useState({ status: "idle", msg: "" });
    const [view, setView] = useState("heute");
    const [weekIdx, setWeekIdx] = useState(() => {
        const t = dayKey(new Date());
        const i = STUDY_WEEKS.findIndex((w) => t >= w.from && t <= w.to);
        return i === -1 ? (t < STUDY_WEEKS[0].from ? 0 : STUDY_WEEKS.length - 1) : i;
    });
    const [slide, setSlide] = useState(null);
    const touchRef = useRef(null);
    const suppressClick = useRef(false);
    const [panel, setPanel] = useState("todos");
    const [editor, setEditor] = useState(null);
    const [pendingTodo, setPendingTodo] = useState(null);
    const [celebration, setCelebration] = useState(null);
    const [manualPick, setManualPick] = useState(null);
    const [detailId, setDetailId] = useState(null);
    const [cloud, setCloud] = useState({ state: "off", msg: "" });
    const cloudRef = useRef({ armed: false, timer: null });
    const undoRef = useRef([]);
    const [canUndo, setCanUndo] = useState(false);
    const [timer, setTimer] = useState(() => {
        try {
            const raw = localStorage.getItem(TIMER_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch (e) {
            return null;
        }
    });
    const [beat, setBeat] = useState(0);
    const [zoom, setZoom] = useState("fit");
    const [cols, setCols] = useState(() => (typeof window !== "undefined" && window.innerWidth >= 900 ? 7 : 5));
    const [viewH, setViewH] = useState(() => (typeof window !== "undefined" ? window.innerHeight : 800));
    const [now, setNow] = useState(new Date());
    const gridRef = useRef(null);
    const days = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)), [weekStart]);
    const todayKey = dayKey(today);
    /* Uhr */
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(t);
    }, []);
    /* Bildschirmhöhe für die Maßstabsberechnung */
    useEffect(() => {
        const on = () => setViewH(window.innerHeight);
        window.addEventListener("resize", on);
        return () => window.removeEventListener("resize", on);
    }, []);
    const visibleDays = useMemo(() => {
        if (cols === 7)
            return days;
        const from = new Date(selectedDay + "T00:00:00");
        return Array.from({ length: cols }, (_, i) => addDays(from, i));
    }, [cols, days, selectedDay]);
    const totalDayMin = (DAY_END - DAY_START) * 60;
    const fitPpm = Math.max(0.24, (viewH * 0.5) / totalDayMin);
    const ppm = zoom === "fit" ? fitPpm : zoom === "mid" ? 0.8 : 1.4;
    const gridMaxH = zoom === "fit" ? totalDayMin * ppm + 4 : Math.round(viewH * 0.62);
    /* Laden */
    useEffect(() => {
        (async () => {
            try {
                const r = await window.storage.get(STORE_KEY);
                if (r === null || r === void 0 ? void 0 : r.value) {
                    const loaded = { ...DEFAULT_STATE, ...JSON.parse(r.value) };
                    if (!loaded.study)
                        loaded.study = initStudy();
                    applyCats(loaded.cats);
                    setState(loaded);
                }
                else {
                    setState({ ...DEFAULT_STATE, study: initStudy() });
                }
            }
            catch {
                setState({ ...DEFAULT_STATE, study: initStudy() });
            }
            setLoaded(true);
        })();
    }, []);
    /* Speichern */
    const undo = () => {
        const prev = undoRef.current.pop();
        if (!prev) {
            setCanUndo(false);
            return;
        }
        setState(prev);
        window.storage.set(STORE_KEY, JSON.stringify(prev)).catch(() => { });
        setCanUndo(undoRef.current.length > 0);
        buzz(10);
    };
    /* Nur lokal sichern - ohne Rückspielen in die Cloud */
    const persistLocal = useCallback((next) => {
        setState(next);
        window.storage.set(STORE_KEY, JSON.stringify(next)).catch(() => { });
    }, []);
    const persist = useCallback((nextOrFn) => {
        setState((prev) => {
            undoRef.current.push(prev);
            if (undoRef.current.length > 25)
                undoRef.current.shift();
            setCanUndo(true);
            const base = typeof nextOrFn === "function" ? nextOrFn(prev) : nextOrFn;
            const next = { ...base, updatedAt: Date.now() };
            window.storage.set(STORE_KEY, JSON.stringify(next)).catch(() => { });
            if (cloudRef.current.armed) {
                clearTimeout(cloudRef.current.timer);
                cloudRef.current.timer = setTimeout(() => {
                    driveSave(next)
                        .then(() => setCloud({ state: "ok", msg: "gesichert " + new Date().toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" }) }))
                        .catch((e) => setCloud({ state: "error", msg: e.message }));
                }, 4000);
            }
            return next;
        });
    }, []);
    /* Kalender holen */
    const fetchCal = useCallback(async () => {
        setSync({ status: "loading", msg: "Kalender wird gelesen…" });
        try {
            const evs = await loadCalendar(weekStart);
            setExternal(evs);
            setSync({
                status: "ok",
                msg: evs.length ? `${evs.length} Termine geladen` : "Keine Termine in dieser Woche",
            });
            cloudRef.current.armed = true;
        }
        catch (err) {
            setSync({ status: "error", msg: gcConfigured() ? ("Kalender: " + err.message) : "Keine Google-Client-ID hinterlegt — siehe SETUP.md" });
        }
    }, [weekStart]);
    useEffect(() => {
        const keys = Array.from({ length: 7 }, (_, i) => dayKey(addDays(weekStart, i)));
        setSelectedDay((cur) => (keys.includes(cur) ? cur : keys.includes(todayKey) ? todayKey : keys[0]));
    }, [weekStart, todayKey]);
    /* Kalender selbsttätig laden, solange die Anmeldung gilt.
       Ohne gültiges Token passiert nichts - sonst ginge beim Start ein Fenster auf. */
    useEffect(() => {
        if (!loaded || !gcConfigured())
            return;
        if (!gcHasToken()) {
            setExternal([]);
            return;
        }
        let abgebrochen = false;
        setSync({ status: "loading", msg: "Kalender wird gelesen…" });
        loadCalendar(weekStart)
            .then((evs) => {
            if (abgebrochen)
                return;
            setExternal(evs);
            setSync({ status: "ok", msg: evs.length ? `${evs.length} Termine` : "keine Termine" });
            cloudRef.current.armed = true;
        })
            .catch(() => { if (!abgebrochen)
            setSync({ status: "idle", msg: "" }); });
        return () => { abgebrochen = true; };
    }, [loaded, weekStart]);
    /* Vorlage: automatische Einträge einmal pro Woche anlegen */
    useEffect(() => {
        var _a;
        if (!loaded)
            return;
        const wk = dayKey(weekStart);
        if ((_a = state.materialized) === null || _a === void 0 ? void 0 : _a[wk])
            return;
        const auto = (state.template || []).filter((t) => t.auto);
        if (auto.length === 0)
            return;
        const fresh = auto
            .map((t) => ({
            id: uid(),
            day: dayKey(addDays(weekStart, t.weekday)),
            start: t.start, dur: t.dur, title: t.title, cat: t.cat,
            tplId: t.id, synced: false,
        }))
            .filter((b) => !state.blocks.some((x) => x.day === b.day && x.tplId === b.tplId));
        persist({
            ...state,
            blocks: [...state.blocks, ...fresh],
            materialized: { ...state.materialized, [wk]: true },
        });
    }, [loaded, weekStart, state, persist]);
    const weekKeys = useMemo(() => Array.from({ length: 7 }, (_, i) => dayKey(addDays(weekStart, i))), [weekStart]);
    const applyTemplate = () => {
        const fresh = (state.template || [])
            .map((t) => ({
            id: uid(), day: weekKeys[t.weekday],
            start: t.start, dur: t.dur, title: t.title, cat: t.cat,
            tplId: t.id, synced: false,
        }))
            .filter((b) => !state.blocks.some((x) => x.day === b.day && x.tplId === b.tplId));
        if (fresh.length === 0) {
            setSync({ status: "ok", msg: "Vorlage steht schon in dieser Woche" });
            return;
        }
        persist({
            ...state,
            blocks: [...state.blocks, ...fresh],
            materialized: { ...state.materialized, [dayKey(weekStart)]: true },
        });
        setSync({ status: "ok", msg: `${fresh.length} Blöcke aus der Vorlage übernommen` });
    };
    const saveWeekAsTemplate = () => {
        const mine = state.blocks.filter((b) => weekKeys.includes(b.day) && b.title);
        if (mine.length === 0) {
            setSync({ status: "error", msg: "Diese Woche enthält keine eigenen Blöcke" });
            return;
        }
        const tpl = mine.map((b) => ({
            id: uid(),
            weekday: weekKeys.indexOf(b.day),
            start: b.start, dur: b.dur, title: b.title, cat: b.cat,
            auto: true,
        }));
        const linked = state.blocks.map((b) => {
            const i = mine.findIndex((m) => m.id === b.id);
            return i === -1 ? b : { ...b, tplId: tpl[i].id };
        });
        persist({
            ...state, template: tpl, blocks: linked,
            materialized: { ...state.materialized, [dayKey(weekStart)]: true },
        });
        setSync({ status: "ok", msg: `Vorlage aus ${tpl.length} Blöcken gesichert` });
    };
    const removeTemplateEntry = (id) => persist({ ...state, template: state.template.filter((t) => t.id !== id) });
    const toggleTemplateAuto = (id) => persist({
        ...state,
        template: state.template.map((t) => (t.id === id ? { ...t, auto: !t.auto } : t)),
    });
    /* Block als wöchentlich markieren / lösen */
    const toggleRepeat = (block) => {
        const existing = block.tplId && state.template.find((t) => t.id === block.tplId);
        if (existing) {
            persist({
                ...state,
                template: state.template.filter((t) => t.id !== block.tplId),
                blocks: state.blocks.map((b) => (b.id === block.id ? { ...b, tplId: null } : b)),
            });
            setEditor((e) => (e ? { ...e, tplId: null } : e));
            return;
        }
        const tid = uid();
        const entry = {
            id: tid, weekday: Math.max(0, weekKeys.indexOf(block.day)),
            start: block.start, dur: block.dur,
            title: block.title || "Ohne Titel", cat: block.cat, auto: true,
        };
        persist({
            ...state,
            template: [...state.template, entry],
            blocks: state.blocks.map((b) => (b.id === block.id ? { ...b, tplId: tid } : b)),
        });
        setEditor((e) => (e ? { ...e, tplId: tid } : e));
    };
    /* Ganze Woche in den Kalender schreiben */
    const syncWeek = async () => {
        const open = state.blocks.filter((b) => weekKeys.includes(b.day) && b.title && !b.synced);
        if (open.length === 0) {
            setSync({ status: "ok", msg: "Alles schon im Kalender" });
            return;
        }
        let ok = 0;
        const done = [];
        for (let i = 0; i < open.length; i++) {
            setSync({ status: "loading", msg: `Schreibe ${i + 1} von ${open.length}…` });
            try {
                await pushToCalendar(open[i]);
                done.push(open[i].id);
                ok++;
            }
            catch {
                /* einzelner Fehler stoppt den Rest nicht */
            }
        }
        persist((prev) => ({
            ...prev,
            blocks: prev.blocks.map((b) => (done.includes(b.id) ? { ...b, synced: true } : b)),
        }));
        setSync(ok === open.length
            ? { status: "ok", msg: `${ok} Blöcke im Kalender` }
            : { status: "error", msg: `${ok} von ${open.length} geschrieben. Rest nochmal versuchen.` });
    };
    /* Projekte */
    const addProject = (title, cat, target) => persist((prev) => ({
        ...prev,
        projects: [...(prev.projects || []), { id: uid(), title, cat, target }],
    }));
    const removeProject = (id) => persist((prev) => ({
        ...prev,
        projects: (prev.projects || []).filter((p) => p.id !== id),
        blocks: prev.blocks.map((b) => (b.projectId === id ? { ...b, projectId: null } : b)),
    }));
    const setProjectTarget = (id, target) => persist((prev) => ({
        ...prev,
        projects: (prev.projects || []).map((p) => (p.id === id ? { ...p, target } : p)),
    }));
    const projectStats = useMemo(() => {
        const map = {};
        for (const p of state.projects || [])
            map[p.id] = { planned: 0, done: 0 };
        for (const b of state.blocks) {
            if (!weekKeys.includes(b.day) || !b.projectId || !map[b.projectId])
                continue;
            map[b.projectId].planned += b.dur;
            if (b.status === "done")
                map[b.projectId].done += b.dur;
        }
        return map;
    }, [state.projects, state.blocks, weekKeys]);
    const detailBlock = useMemo(() => {
        if (!detailId)
            return null;
        return state.blocks.find((b) => b.id === detailId)
            || external.find((b) => b.id === detailId) || null;
    }, [detailId, state.blocks, external]);
    /* Kumulierte Projektstunden über alle Wochen */
    const projectTotals = useMemo(() => {
        const map = {};
        for (const b of state.blocks) {
            if (!b.projectId || b.status !== "done")
                continue;
            map[b.projectId] = (map[b.projectId] || 0) + b.dur;
        }
        return map;
    }, [state.blocks]);
    /* Meilensteine feiern, jeden nur einmal */
    useEffect(() => {
        var _a;
        if (!loaded)
            return;
        const reached = state.reached || {};
        let hit = null;
        for (const p of state.projects || []) {
            const h = Math.floor((projectTotals[p.id] || 0) / 60);
            const already = reached[p.id] || [];
            const fresh = MILESTONES.filter((m) => h >= m && !already.includes(m));
            if (fresh.length) {
                hit = { project: p, m: Math.max(...fresh), fresh };
                break;
            }
        }
        if (!hit)
            return;
        persist((prev) => ({
            ...prev,
            reached: { ...(prev.reached || {}), [hit.project.id]: [...((prev.reached || {})[hit.project.id] || []), ...hit.fresh] },
        }));
        setCelebration({ id: uid(), title: `${hit.m} Stunden`, sub: hit.project.title, color: (_a = CATS[hit.project.cat]) === null || _a === void 0 ? void 0 : _a.color });
        buzz([18, 60, 25]);
    }, [loaded, projectTotals, state.projects, state.reached, persist]);
    /* Jahresraster: 52 Wochen rückwärts, Quote je Woche */
    const yearGrid = useMemo(() => {
        const buckets = {};
        for (const b of state.blocks) {
            if (!b.title)
                continue;
            const ws = dayKey(mondayOf(new Date(b.day + "T00:00:00")));
            if (!buckets[ws])
                buckets[ws] = { planned: 0, done: 0 };
            buckets[ws].planned += b.dur;
            if (b.status === "done")
                buckets[ws].done += b.dur;
        }
        return Array.from({ length: 52 }, (_, i) => {
            const ws = addDays(weekStart, -7 * (51 - i));
            const k = dayKey(ws);
            const d = buckets[k];
            return {
                key: k, date: ws,
                quote: d && d.planned ? d.done / d.planned : null,
                hours: d ? d.done / 60 : 0,
                isCurrent: k === dayKey(weekStart),
            };
        });
    }, [state.blocks, weekStart]);
    /* Lernplan bearbeiten */
    const studyWeeks = (state.study && state.study.weeks) || [];
    const studyExams = (state.study && state.study.exams)
        || (state.study && state.study.exam ? [{ id: "ex1", ...state.study.exam }] : STUDY_EXAMS);
    const updateStudy = (fn) => persist((prev) => {
        const st = prev.study || initStudy();
        return { ...prev, study: fn(st) };
    });
    const setWeekField = (idx, field, value) => updateStudy((st) => ({
        ...st,
        weeks: st.weeks.map((w, i) => (i === idx ? { ...w, [field]: value } : w)),
    }));
    const addStudyTask = (idx, kind) => updateStudy((st) => ({
        ...st,
        weeks: st.weeks.map((w, i) => i === idx ? { ...w, [kind]: [...w[kind], { id: uid(), t: "", m: 60, s: "molbio" }] } : w),
    }));
    const editStudyTask = (idx, kind, id, patch) => updateStudy((st) => ({
        ...st,
        weeks: st.weeks.map((w, i) => i === idx ? { ...w, [kind]: w[kind].map((t) => (t.id === id ? { ...t, ...patch } : t)) } : w),
    }));
    const deleteStudyTask = (idx, kind, id) => updateStudy((st) => ({
        ...st,
        weeks: st.weeks.map((w, i) => i === idx ? { ...w, [kind]: w[kind].filter((t) => t.id !== id) } : w),
    }));
    const setExamField = (id, field, value) => updateStudy((st) => ({
        ...st,
        exams: (st.exams || []).map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
    const addExam = () => updateStudy((st) => ({
        ...st,
        exams: [...(st.exams || []), { id: uid(), title: "Neue Prüfung", date: dayKey(addDays(new Date(), 30)) }],
    }));
    const deleteExam = (id) => updateStudy((st) => ({ ...st, exams: (st.exams || []).filter((e) => e.id !== id) }));
    const resetStudyPlan = () => persist((prev) => ({ ...prev, study: initStudy() }));
    /* Ausprobieren */
    const loadDemo = () => {
        persist(makeDemoState());
        setSync({ status: "ok", msg: "Beispieldaten geladen" });
    };
    const resetAll = () => {
        persist({ ...DEFAULT_STATE });
        setExternal([]);
        setSync({ status: "ok", msg: "Alles zurückgesetzt" });
    };
    const testConfetti = () => {
        buzz([18, 60, 25]);
        setCelebration({ id: uid(), title: "25 Stunden", sub: "Testlauf", color: CATS.training.color });
    };
    /* Wochenbilanz */
    const weekStats = useMemo(() => {
        const mine = state.blocks.filter((b) => weekKeys.includes(b.day) && b.title);
        const endOf = (b) => new Date(b.day + "T00:00:00").getTime() + (b.start + b.dur) * 60000;
        const byCat = {};
        let planned = 0, done = 0, skipped = 0, moved = 0;
        for (const b of mine) {
            planned += b.dur;
            if (b.status === "done")
                done += b.dur;
            if (b.status === "skipped")
                skipped += b.dur;
            if (b.status === "moved")
                moved += b.dur;
            if (!byCat[b.cat])
                byCat[b.cat] = { planned: 0, done: 0 };
            byCat[b.cat].planned += b.dur;
            if (b.status === "done")
                byCat[b.cat].done += b.dur;
        }
        const pending = mine
            .filter((b) => !b.status && endOf(b) < now.getTime())
            .sort((a, b) => endOf(a) - endOf(b));
        const routineCount = {};
        for (const r of state.routines) {
            routineCount[r.id] = weekKeys.filter((k) => (state.checks[k] || []).includes(r.id)).length;
        }
        return { planned, done, skipped, moved, byCat, pending, routineCount };
    }, [state.blocks, state.routines, state.checks, weekKeys, now]);
    /* Blöcke pro Tag */
    const blocksFor = useCallback((key) => [
        ...state.blocks.filter((b) => b.day === key),
        ...external.filter((b) => b.day === key),
    ].sort((a, b) => a.start - b.start), [state.blocks, external]);
    const plannedMinutes = useCallback((key) => blocksFor(key).reduce((s, b) => s + b.dur, 0), [blocksFor]);
    /* Freie Lücken eines Tages */
    const gapsFor = useCallback((key) => {
        const bs = blocksFor(key);
        const out = [];
        let cursor = DAY_START * 60;
        for (const b of bs) {
            if (b.start > cursor)
                out.push({ start: cursor, dur: b.start - cursor });
            cursor = Math.max(cursor, b.start + b.dur);
        }
        if (cursor < DAY_END * 60)
            out.push({ start: cursor, dur: DAY_END * 60 - cursor });
        return out.filter((g) => g.dur >= 30);
    }, [blocksFor]);
    /* ── Aktionen ── */
    const addBlock = (day, start, patch = {}) => {
        const b = {
            id: uid(), day, start,
            dur: patch.dur || 60,
            title: patch.title || "",
            cat: patch.cat || "fokus",
            todoId: patch.todoId || null,
            projectId: patch.projectId || null,
            studyKey: patch.studyKey || null,
            status: null,
            synced: false,
        };
        persist((prev) => ({ ...prev, blocks: [...prev.blocks, b] }));
        setDetailId(b.id);
    };
    const updateBlock = (id, patch) => persist((prev) => ({
        ...prev,
        blocks: prev.blocks.map((b) => (b.id === id ? { ...b, ...patch } : b)),
    }));
    const setBlockStatus = (id, status) => persist((prev) => {
        const b = prev.blocks.find((x) => x.id === id);
        const next = {
            ...prev,
            blocks: prev.blocks.map((x) => (x.id === id ? { ...x, status } : x)),
        };
        if (b === null || b === void 0 ? void 0 : b.studyKey) {
            next.studyDone = { ...(prev.studyDone || {}), [b.studyKey]: status === "done" };
        }
        return next;
    });
    /* ── Fokus-Timer ─────────────────────────────────────────
       Runden ergeben sich aus der Blockdauer: 25 min Fokus + 5 min Pause. */
    const startFocus = (block) => {
        const rounds = Math.max(1, Math.round(block.dur / 30));
        const t = {
            blockId: block.id, title: block.title, cat: block.cat, blockDur: block.dur,
            rounds: rounds, round: 1, phase: "focus",
            endsAt: Date.now() + FOCUS_MIN * 60000, focused: 0, paused: false, remain: 0,
        };
        setTimer(t);
        try {
            localStorage.setItem(TIMER_KEY, JSON.stringify(t));
        }
        catch (e) { }
        buzz(14);
    };
    const stopFocus = (fertig) => {
        const t = timer;
        setTimer(null);
        try {
            localStorage.removeItem(TIMER_KEY);
        }
        catch (e) { }
        if (!t)
            return;
        const min = t.focused;
        if (min > 0) {
            persist((prev) => ({
                ...prev,
                blocks: prev.blocks.map((b) => (b.id === t.blockId ? { ...b, focused: (b.focused || 0) + min } : b)),
            }));
        }
        if (fertig && min >= t.blockDur * 0.7)
            setBlockStatus(t.blockId, "done");
    };
    const advanceFocus = useCallback(() => {
        setTimer((t) => {
            if (!t)
                return t;
            const war = t.phase;
            const focused = war === "focus" ? t.focused + FOCUS_MIN : t.focused;
            buzz([20, 80, 20]);
            if (war === "focus" && t.round >= t.rounds) {
                const fertig = { ...t, phase: "done", focused: focused, remain: 0 };
                try {
                    localStorage.setItem(TIMER_KEY, JSON.stringify(fertig));
                }
                catch (e) { }
                return fertig;
            }
            const next = war === "focus"
                ? { ...t, phase: "break", focused: focused, endsAt: Date.now() + BREAK_MIN * 60000 }
                : { ...t, phase: "focus", round: t.round + 1, endsAt: Date.now() + FOCUS_MIN * 60000 };
            try {
                localStorage.setItem(TIMER_KEY, JSON.stringify(next));
            }
            catch (e) { }
            return next;
        });
    }, []);
    const pauseFocus = () => setTimer((t) => {
        if (!t)
            return t;
        const n = t.paused
            ? { ...t, paused: false, endsAt: Date.now() + t.remain }
            : { ...t, paused: true, remain: Math.max(0, t.endsAt - Date.now()) };
        try {
            localStorage.setItem(TIMER_KEY, JSON.stringify(n));
        }
        catch (e) { }
        return n;
    });
    /* Sekundentakt, nur solange ein Timer läuft */
    useEffect(() => {
        if (!timer || timer.phase === "done" || timer.paused)
            return;
        const i = setInterval(() => setBeat((b) => b + 1), 1000);
        return () => clearInterval(i);
    }, [timer]);
    useEffect(() => {
        if (!timer || timer.phase === "done" || timer.paused)
            return;
        if (timer.endsAt - Date.now() <= 0)
            advanceFocus();
    }, [beat, timer, advanceFocus]);
    const moveBlock = (id, day, start) => persist((prev) => ({
        ...prev,
        blocks: prev.blocks.map((b) => (b.id === id ? { ...b, day: day, start: start, synced: false } : b)),
    }));
    const removeBlock = (id) => persist({ ...state, blocks: state.blocks.filter((b) => b.id !== id) });
    const handleSlotClick = (day, minutes) => {
        if (manualPick) {
            const t = manualPick;
            addBlock(day, minutes, {
                title: t.title, cat: t.cat, dur: t.est,
                todoId: t.todoId || null, projectId: t.projectId || null, studyKey: t.studyKey || null,
            });
            setManualPick(null);
            buzz(10);
            return;
        }
        addBlock(day, minutes);
    };
    /* Wischen zwischen den Ansichten */
    const VIEWS = ["heute", "woche", "lernen", "auswerten"];
    const goView = (k, dir) => {
        if (k === view)
            return;
        setView(k);
        if (k === "heute")
            setSelectedDay(todayKey);
        if (dir) {
            setSlide(dir);
            setTimeout(() => setSlide(null), 300);
        }
    };
    const onTouchStart = (e) => {
        if (e.touches.length !== 1)
            return;
        touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, moved: false };
    };
    const onTouchMove = (e) => {
        const t0 = touchRef.current;
        if (!t0 || e.touches.length !== 1)
            return;
        const dx = e.touches[0].clientX - t0.x;
        const dy = e.touches[0].clientY - t0.y;
        if (Math.abs(dx) > 14 && Math.abs(dx) > Math.abs(dy) * 1.4)
            t0.moved = true;
    };
    const onTouchEnd = (e) => {
        const t0 = touchRef.current;
        touchRef.current = null;
        if (!t0)
            return;
        if (t0.moved) {
            suppressClick.current = true;
            setTimeout(() => { suppressClick.current = false; }, 400);
        }
        const t = e.changedTouches[0];
        const dx = t.clientX - t0.x;
        const dy = t.clientY - t0.y;
        if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.4)
            return;
        const i = VIEWS.indexOf(view);
        const ni = dx < 0 ? Math.min(VIEWS.length - 1, i + 1) : Math.max(0, i - 1);
        if (ni === i)
            return;
        buzz(8);
        goView(VIEWS[ni], dx < 0 ? "l" : "r");
    };
    const onClickCapture = (e) => {
        if (!suppressClick.current)
            return;
        suppressClick.current = false;
        e.stopPropagation();
        e.preventDefault();
    };
    const toggleStudyTask = (k) => persist((prev) => ({
        ...prev,
        studyDone: { ...(prev.studyDone || {}), [k]: !(prev.studyDone || {})[k] },
    }));
    const planStudyTask = (task) => startPlacing({
        title: (SUBJECTS[task.s] ? SUBJECTS[task.s].short + ": " : "") + task.t,
        cat: "uni", est: task.m, studyKey: task.id,
    });
    /* Abgleich mit Google Drive: der neuere Stand gewinnt */
    const syncCloud = useCallback(async (silent) => {
        if (!gcConfigured()) {
            if (!silent)
                setCloud({ state: "error", msg: "keine Google-Client-ID hinterlegt" });
            return;
        }
        setCloud({ state: "busy", msg: "Abgleich läuft…" });
        try {
            const remote = await driveLoad();
            const localAt = state.updatedAt || 0;
            const remoteAt = (remote && remote.updatedAt) || 0;
            if (remote && remoteAt > localAt) {
                persistLocal({ ...DEFAULT_STATE, ...remote });
                setCloud({ state: "ok", msg: "neuerer Stand geladen" });
            }
            else if (localAt > remoteAt) {
                await driveSave({ ...state, updatedAt: localAt });
                setCloud({ state: "ok", msg: "hochgeladen" });
            }
            else {
                setCloud({ state: "ok", msg: "alles auf demselben Stand" });
            }
            cloudRef.current.armed = true;
        }
        catch (e) {
            setCloud({ state: "error", msg: e.message });
        }
    }, [state, persistLocal]);
    /* Beim Start einmal die Geräte abgleichen, wenn die Anmeldung noch gilt */
    useEffect(() => {
        if (!loaded || !gcConfigured() || !gcHasToken())
            return;
        syncCloud(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loaded]);
    /* Einplanen: direkt ins Wochenraster, Sheet bleibt als Alternative */
    const startPlacing = (item) => {
        if (!item) {
            setManualPick(null);
            return;
        }
        setPendingTodo(null);
        setDetailId(null);
        setManualPick({ ...item, est: item.est || 60 });
        setView("woche");
    };
    const addTerminHere = () => {
        const isToday = selectedDay === todayKey;
        const earliest = isToday
            ? Math.min(DAY_END * 60 - 60, Math.max(DAY_START * 60, Math.ceil((now.getHours() * 60 + now.getMinutes()) / SLOT) * SLOT))
            : 9 * 60;
        const g = gapsFor(selectedDay).find((x) => x.start + x.dur - Math.max(x.start, earliest) >= 60);
        const start = g ? Math.max(g.start, earliest) : earliest;
        addBlock(selectedDay, Math.min(start, DAY_END * 60 - 60));
    };
    const confirmSchedule = (day, minutes, dur) => {
        const t = pendingTodo;
        addBlock(day, minutes, {
            title: t.title, cat: t.cat, dur,
            todoId: t.todoId || null, projectId: t.projectId || null, studyKey: t.studyKey || null,
        });
        setPendingTodo(null);
        setWeekStart(mondayOf(new Date(day + "T00:00:00")));
        setSelectedDay(day);
        buzz(12);
    };
    const syncBlock = async (block) => {
        setSync({ status: "loading", msg: `„${block.title}" wird gespeichert…` });
        try {
            await pushToCalendar(block);
            updateBlock(block.id, { synced: true });
            setSync({ status: "ok", msg: "In Google Calendar gespeichert" });
            setEditor((e) => (e && e.id === block.id ? { ...e, synced: true } : e));
        }
        catch {
            setSync({ status: "error", msg: "Speichern fehlgeschlagen. Nochmal versuchen." });
        }
    };
    /* To-dos */
    const addTodo = (title, cat, est) => persist({ ...state, todos: [...state.todos, { id: uid(), title, cat, est, done: false }] });
    /* Todoist-Aufgaben übernehmen: vorhandene aktualisieren, neue anlegen */
    const importTodoist = useCallback(async () => {
        setSync({ status: "loading", msg: "Todoist wird gelesen…" });
        try {
            const remote = await tdLoadTasks();
            persist((prev) => {
                const byId = {};
                for (const t of prev.todos)
                    if (t.todoistId)
                        byId[t.todoistId] = t;
                const kept = prev.todos.filter((t) => !t.todoistId || remote.some((r) => r.todoistId === t.todoistId));
                const merged = kept.map((t) => {
                    if (!t.todoistId)
                        return t;
                    const r = remote.find((x) => x.todoistId === t.todoistId);
                    return r ? { ...t, title: r.title } : t;
                });
                const neu = remote
                    .filter((r) => !byId[r.todoistId])
                    .map((r) => ({
                    id: uid(), title: r.title, cat: "arbeit", est: r.est,
                    done: false, todoistId: r.todoistId,
                }));
                return { ...prev, todos: [...merged, ...neu] };
            });
            setSync({ status: "ok", msg: `${remote.length} Aufgaben aus Todoist` });
        }
        catch (e) {
            setSync({ status: "error", msg: e.message });
        }
    }, [persist]);
    const toggleTodo = (id) => {
        const t = state.todos.find((x) => x.id === id);
        if (t && t.todoistId && !t.done) {
            tdCloseTask(t.todoistId)
                .then(() => setSync({ status: "ok", msg: "in Todoist erledigt" }))
                .catch((e) => setSync({ status: "error", msg: "Todoist: " + e.message }));
        }
        persist((prev) => ({
            ...prev,
            todos: prev.todos.map((x) => (x.id === id ? { ...x, done: !x.done } : x)),
        }));
    };
    const removeTodo = (id) => persist({ ...state, todos: state.todos.filter((t) => t.id !== id) });
    /* Routinen */
    const addRoutine = (title, cat) => persist({ ...state, routines: [...state.routines, { id: uid(), title, cat }] });
    const catsNow = state.cats || DEFAULT_CATS;
    const saveCats = (next) => {
        applyCats(next);
        persist((prev) => ({ ...prev, cats: next }));
    };
    const setCatField = (key, field, value) => saveCats({ ...catsNow, [key]: { ...catsNow[key], [field]: value } });
    const addCat = (label, color) => saveCats({ ...catsNow, ["c" + uid()]: { label: label, color: color } });
    const removeCat = (key) => {
        const next = { ...catsNow };
        delete next[key];
        if (Object.keys(next).length === 0)
            return;
        saveCats(next);
    };
    const setRoutineTarget = (id, weekTarget) => persist((prev) => ({
        ...prev,
        routines: prev.routines.map((r) => (r.id === id ? { ...r, weekTarget } : r)),
    }));
    const removeRoutine = (id) => persist({ ...state, routines: state.routines.filter((r) => r.id !== id) });
    const toggleCheck = (routineId, key) => {
        const cur = state.checks[key] || [];
        const next = cur.includes(routineId) ? cur.filter((x) => x !== routineId) : [...cur, routineId];
        persist({ ...state, checks: { ...state.checks, [key]: next } });
    };
    /* ── Render ── */
    const weekLabel = `${weekStart.getDate()}.${pad(weekStart.getMonth() + 1)}. – ${addDays(weekStart, 6).getDate()}.${pad(addDays(weekStart, 6).getMonth() + 1)}.`;
    if (!loaded) {
        return (React.createElement("div", { className: "pl-root flex items-center justify-center", style: { minHeight: "100vh" } },
            React.createElement("span", { className: "mono text-sm pl-muted" }, "Plan wird geladen\u2026")));
    }
    return (React.createElement("div", { className: "pl-root" },
        React.createElement("style", null, `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .pl-root{
          --paper:#E4E6E1; --card:#FAFAF8; --ink:#191D1A; --muted:#6F7A72;
          --line:#CBD0C9; --line-soft:#DDE0DA;
          background:var(--paper); color:var(--ink); min-height:100vh;
          font-family:'Space Grotesk',ui-sans-serif,system-ui,sans-serif;
          -webkit-font-smoothing:antialiased;
        }
        .pl-root *{box-sizing:border-box;}
        .mono{font-family:'IBM Plex Mono',ui-monospace,monospace;font-variant-numeric:tabular-nums;}
        .pl-muted{color:var(--muted);}
        .pl-card{background:var(--card);border:1px solid var(--line);}
        .pl-hair{border-color:var(--line-soft);}
        .pl-btn{border:1px solid var(--line);background:var(--card);color:var(--ink);
          transition:background .12s ease,border-color .12s ease;}
        .pl-btn:hover{background:#F0F1EE;border-color:var(--muted);}
        .pl-btn:focus-visible,.pl-tap:focus-visible{outline:2px solid #2B4B8F;outline-offset:2px;}
        .pl-slot{transition:background .1s ease;}
        .pl-slot:hover{background:rgba(43,75,143,.07);}
        .pl-arm .pl-slot:hover{background:rgba(30,110,90,.14);}
        .pl-block{border-radius:3px;overflow:hidden;text-align:left;width:100%;
          transition:filter .12s ease;}
        .pl-block:hover{filter:brightness(.96);}
        .pl-ext{background-image:repeating-linear-gradient(135deg,transparent 0 5px,rgba(255,255,255,.5) 5px 6px);}
        .pl-scroll{scrollbar-width:thin;}
        .pl-input{background:var(--card);border:1px solid var(--line);color:var(--ink);width:100%;}
        .pl-input:focus{outline:2px solid #2B4B8F;outline-offset:-1px;}
        .pl-sheet{background:var(--card);border:1px solid var(--ink);
          box-shadow:0 18px 40px -12px rgba(25,29,26,.35);}
        @media (prefers-reduced-motion:reduce){.pl-root *{transition:none!important;animation:none!important;}}

        /* Bewegung */
        .pl-bar{transition:width .5s cubic-bezier(.2,.8,.2,1);}
        @keyframes pl-pop{0%{transform:scale(1)}40%{transform:scale(1.32)}100%{transform:scale(1)}}
        .pl-pop{animation:pl-pop .32s cubic-bezier(.34,1.56,.64,1);}
        @keyframes pl-sweep{from{transform:translateX(-100%)}to{transform:translateX(120%)}}
        .pl-sweep::after{content:"";position:absolute;inset:0;pointer-events:none;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.8),transparent);
          animation:pl-sweep .55s ease-out;}
        @keyframes pl-rise{0%{opacity:0;transform:translateY(6px)}100%{opacity:1;transform:translateY(0)}}
        .pl-rise{animation:pl-rise .3s ease-out;}
        @keyframes pl-fall{
          0%{opacity:1;transform:translate3d(0,0,0) rotate(0deg)}
          100%{opacity:0;transform:translate3d(var(--dx),102vh,0) rotate(var(--rot))}}
        .pl-confetti{position:fixed;top:-14px;z-index:100;pointer-events:none;
          animation:pl-fall linear forwards;}
        @keyframes pl-glow{0%,100%{box-shadow:0 0 0 0 rgba(30,110,90,0)}
          45%{box-shadow:0 0 0 6px rgba(30,110,90,.20)}}
        .pl-glow{animation:pl-glow 1.2s ease-out;}
        @keyframes pl-in-l{from{opacity:.35;transform:translateX(26px)}to{opacity:1;transform:none}}
        @keyframes pl-in-r{from{opacity:.35;transform:translateX(-26px)}to{opacity:1;transform:none}}
        .pl-in-l{animation:pl-in-l .26s cubic-bezier(.2,.8,.2,1);}
        .pl-in-r{animation:pl-in-r .26s cubic-bezier(.2,.8,.2,1);}
        @keyframes pl-zoom{from{opacity:0;transform:scale(.9) translateY(10px)}
          to{opacity:1;transform:scale(1) translateY(0)}}
        .pl-zoom{animation:pl-zoom .24s cubic-bezier(.2,.9,.3,1);}
        @keyframes pl-pulse{0%,100%{opacity:1}50%{opacity:.25}}
        .pl-pulse{animation:pl-pulse 1.6s ease-in-out infinite;}
        .pl-digits{display:inline-block;overflow:hidden;height:1.35em;line-height:1.35em;}
        .pl-digits > span{display:inline-block;}
        @keyframes pl-roll-up{from{transform:translateY(105%);opacity:0}to{transform:translateY(0);opacity:1}}
        @keyframes pl-roll-down{from{transform:translateY(-105%);opacity:0}to{transform:translateY(0);opacity:1}}
        .pl-roll-up{animation:pl-roll-up .2s cubic-bezier(.2,.9,.3,1);}
        .pl-roll-down{animation:pl-roll-down .2s cubic-bezier(.2,.9,.3,1);}
      `),
        React.createElement("div", { className: "px-4 pt-4 pb-2 md:px-6" },
            React.createElement("div", { className: "flex gap-1" }, [["heute", "Heute"], ["woche", "Woche"], ["lernen", "Lernen"], ["auswerten", "Bilanz"]].map(([k, lbl]) => (React.createElement("button", { key: k, onClick: () => goView(k), className: "flex-1 py-2.5 rounded mono text-xs", style: view === k
                    ? { background: "var(--ink)", color: "var(--paper)", border: "1px solid var(--ink)" }
                    : { background: "var(--card)", color: "var(--ink)", border: "1px solid var(--line)" } },
                lbl,
                k === "auswerten" && weekStats.pending.length > 0 && (React.createElement("span", { className: "ml-1.5", style: { color: view === k ? "#F0B429" : "#A03A5E" } }, weekStats.pending.length)))))),
            React.createElement("div", { className: "mt-2 flex items-center gap-2" },
                canUndo && (React.createElement("button", { onClick: undo, className: "pl-btn px-2.5 py-1 rounded flex items-center gap-1.5 mono text-xs" },
                    React.createElement(Undo2, { size: 12 }),
                    " R\u00FCckg\u00E4ngig")),
                React.createElement("button", { onClick: () => syncCloud(false), disabled: cloud.state === "busy", className: "pl-btn px-2.5 py-1 rounded flex items-center gap-1.5 mono text-xs" },
                    React.createElement(RefreshCw, { size: 12, className: cloud.state === "busy" ? "animate-spin" : "" }),
                    "Ger\u00E4te abgleichen"),
                cloud.msg && (React.createElement("span", { className: "mono text-xs truncate", style: { color: cloud.state === "error" ? "#A03A5E" : cloud.state === "ok" ? "#1E6E5A" : "var(--muted)" } }, cloud.msg))),
            sync.msg && (React.createElement("div", { className: "mt-2 mono text-xs flex items-center gap-2", style: { color: sync.status === "error" ? "#A03A5E" : "var(--muted)" } },
                sync.status === "error" && React.createElement(AlertCircle, { size: 13 }),
                sync.msg))),
        React.createElement("div", { onTouchStart: onTouchStart, onTouchMove: onTouchMove, onTouchEnd: onTouchEnd, onClickCapture: onClickCapture, className: slide === "l" ? "pl-in-l" : slide === "r" ? "pl-in-r" : "" },
            view === "heute" && (React.createElement("div", { className: "px-4 md:px-6 pb-6 md:max-w-2xl md:mx-auto" },
                React.createElement(TodayView, { dayK: selectedDay, blocks: blocksFor(selectedDay), now: now, isToday: selectedDay === todayKey, routines: state.routines, checks: state.checks, onToggleCheck: toggleCheck, onBlock: (b) => setDetailId(b.id), onStatus: setBlockStatus, onAdd: addTerminHere, onSlot: handleSlotClick, ppm: ppm, onShiftDay: (dir) => {
                        const nd = addDays(new Date(selectedDay + "T00:00:00"), dir);
                        setSelectedDay(dayKey(nd));
                        setWeekStart(mondayOf(nd));
                    }, onBackToToday: () => { setSelectedDay(todayKey); setWeekStart(mondayOf(new Date())); } }))),
            view === "woche" && (React.createElement(React.Fragment, null,
                React.createElement("header", { className: "px-4 pb-3 md:px-6" },
                    React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("button", { onClick: () => setWeekStart(addDays(weekStart, -7)), className: "pl-btn p-2 rounded", "aria-label": "Woche zur\u00FCck" },
                                React.createElement(ChevronLeft, { size: 16 })),
                            React.createElement("div", null,
                                React.createElement("div", { className: "mono text-xs pl-muted" },
                                    "KW ",
                                    isoWeek(weekStart)),
                                React.createElement("div", { className: "mono text-sm font-medium" }, weekLabel)),
                            React.createElement("button", { onClick: () => setWeekStart(addDays(weekStart, 7)), className: "pl-btn p-2 rounded", "aria-label": "Woche vor" },
                                React.createElement(ChevronRight, { size: 16 }))),
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("button", { onClick: fetchCal, disabled: sync.status === "loading", className: "pl-btn px-3 py-2 rounded flex items-center gap-2 mono text-xs" },
                                React.createElement(RefreshCw, { size: 14, className: sync.status === "loading" ? "animate-spin" : "" }),
                                "Kalender"),
                            React.createElement("button", { onClick: syncWeek, disabled: sync.status === "loading", className: "pl-btn px-3 py-2 rounded flex items-center gap-2 mono text-xs" },
                                React.createElement(UploadCloud, { size: 14 }),
                                "sichern"))),
                    manualPick && (React.createElement("div", { className: "pl-rise mt-2 px-3 py-2.5 rounded flex flex-col gap-2", style: { background: hexA(((_a = CATS[manualPick.cat]) === null || _a === void 0 ? void 0 : _a.color) || "#6F7A72", 0.14) } },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement("span", { className: "text-sm font-medium truncate flex-1", style: { color: (_b = CATS[manualPick.cat]) === null || _b === void 0 ? void 0 : _b.color } }, manualPick.title),
                            React.createElement("button", { onClick: () => setManualPick(null), className: "pl-btn px-2 py-1 rounded mono text-xs" }, "Abbrechen")),
                        React.createElement("div", { className: "flex items-center gap-1" },
                            React.createElement("span", { className: "mono text-xs pl-muted shrink-0" }, "Dauer"),
                            [30, 60, 90, 120, 180].map((m) => {
                                var _a, _b;
                                return (React.createElement("button", { key: m, onClick: () => setManualPick({ ...manualPick, est: m }), className: "pl-btn flex-1 py-1 rounded mono text-xs", style: manualPick.est === m
                                        ? { background: (_a = CATS[manualPick.cat]) === null || _a === void 0 ? void 0 : _a.color, color: "#FFF", borderColor: (_b = CATS[manualPick.cat]) === null || _b === void 0 ? void 0 : _b.color }
                                        : {} }, m >= 60 ? `${m / 60}h` : `${m}m`));
                            })),
                        React.createElement("span", { className: "mono text-xs pl-muted" }, "Tippe jetzt die Startzeit im Raster an")))),
                React.createElement("div", { className: "px-4 md:px-6" },
                    React.createElement("div", { className: "grid grid-cols-7 gap-1" }, days.map((d, i) => {
                        const k = dayKey(d);
                        const fill = Math.min(100, (plannedMinutes(k) / ((DAY_END - DAY_START) * 60)) * 100);
                        const isSel = k === selectedDay;
                        const isToday = k === todayKey;
                        return (React.createElement("button", { key: k, onClick: () => setSelectedDay(k), className: "pl-tap px-1 py-2 rounded text-center", style: {
                                background: isSel ? "var(--card)" : "transparent",
                                border: `1px solid ${isSel ? "var(--ink)" : "transparent"}`,
                            } },
                            React.createElement("div", { className: "mono text-xs pl-muted" }, DAY_NAMES[i]),
                            React.createElement("div", { className: "mono text-base font-medium", style: { color: isToday ? "#2B4B8F" : "var(--ink)" } }, d.getDate()),
                            React.createElement("div", { className: "mt-1 h-1 rounded-full", style: { background: "var(--line)" } },
                                React.createElement("div", { className: "h-1 rounded-full pl-bar", style: { width: `${fill}%`, background: isToday ? "#2B4B8F" : "var(--muted)" } }))));
                    }))),
                React.createElement("div", { className: "px-4 md:px-6 py-3 flex flex-col lg:flex-row gap-4" },
                    React.createElement("div", { className: "flex-1 min-w-0" },
                        React.createElement("div", { className: "flex items-center gap-1 mb-1" },
                            [[1, "1 Tag"], [5, "5 Tage"], [7, "Woche"]].map(([k, lbl]) => (React.createElement("button", { key: k, onClick: () => setCols(k), className: "pl-btn px-2 py-1 rounded mono text-xs", style: cols === k ? { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" } : {} }, lbl))),
                            React.createElement("button", { onClick: () => setZoom(zoom === "fit" ? "mid" : zoom === "mid" ? "big" : "fit"), className: "pl-btn px-2 py-1 rounded mono text-xs", title: "H\u00F6he des Rasters umschalten" }, zoom === "fit" ? "ganzer Tag" : zoom === "mid" ? "mittel" : "groß"),
                            React.createElement("button", { onClick: addTerminHere, className: "ml-auto px-3 py-1 rounded flex items-center gap-1.5 mono text-xs", style: { background: "var(--ink)", color: "var(--paper)" } },
                                React.createElement(Plus, { size: 13 }),
                                " Termin")),
                        React.createElement("div", { className: `pl-card rounded ${manualPick ? "pl-arm" : ""}` },
                            React.createElement(Grid, { visibleDays: visibleDays, todayKey: todayKey, now: now, blocksFor: blocksFor, onSlot: handleSlotClick, onBlock: (b) => setDetailId(b.id), onMove: moveBlock, gridRef: gridRef, ppm: ppm, maxH: gridMaxH }))),
                    React.createElement("aside", { className: "lg:w-80 shrink-0 flex flex-col gap-3" },
                        React.createElement("div", { className: "flex gap-1" },
                            React.createElement(TabBtn, { active: panel === "todos", onClick: () => setPanel("todos"), icon: List, label: "To-dos" }),
                            React.createElement(TabBtn, { active: panel === "projekte", onClick: () => setPanel("projekte"), icon: Target, label: "Projekte" }),
                            React.createElement(TabBtn, { active: panel === "vorlage", onClick: () => setPanel("vorlage"), icon: LayoutGrid, label: "Vorlage" })),
                        panel === "todos" && (React.createElement(TodoPanel, { todos: state.todos, onAdd: addTodo, onToggle: toggleTodo, onRemove: removeTodo, onPlan: startPlacing, pending: pendingTodo, onImportTodoist: importTodoist })),
                        panel === "projekte" && (React.createElement(ProjectPanel, { projects: state.projects || [], stats: projectStats, onAdd: addProject, onRemove: removeProject, onTarget: setProjectTarget, onPlan: startPlacing })),
                        panel === "vorlage" && (React.createElement(TemplatePanel, { template: state.template || [], onApply: applyTemplate, onSaveWeek: saveWeekAsTemplate, onRemove: removeTemplateEntry, onToggleAuto: toggleTemplateAuto })))))),
            view === "lernen" && (React.createElement("div", { className: "px-4 md:px-6 pb-6 md:max-w-2xl md:mx-auto" },
                React.createElement(LearnView, { weeks: studyWeeks, exams: studyExams, done: state.studyDone || {}, onToggleTask: toggleStudyTask, onPlanTask: planStudyTask, weekIdx: Math.min(weekIdx, Math.max(0, studyWeeks.length - 1)), setWeekIdx: setWeekIdx, today: today, onWeekField: setWeekField, onAddTask: addStudyTask, onEditTask: editStudyTask, onDeleteTask: deleteStudyTask, onExamField: setExamField, onAddExam: addExam, onDeleteExam: deleteExam, onReset: resetStudyPlan }))),
            view === "auswerten" && (React.createElement("div", { className: "px-4 md:px-6 pb-6 flex flex-col gap-3 md:max-w-2xl md:mx-auto" },
                React.createElement("div", { className: "flex items-center justify-center gap-2" },
                    React.createElement("button", { onClick: () => setWeekStart(addDays(weekStart, -7)), className: "pl-btn p-2 rounded", "aria-label": "Woche zur\u00FCck" },
                        React.createElement(ChevronLeft, { size: 16 })),
                    React.createElement("span", { className: "mono text-sm" },
                        "KW ",
                        isoWeek(weekStart),
                        " \u00B7 ",
                        weekLabel),
                    React.createElement("button", { onClick: () => setWeekStart(addDays(weekStart, 7)), className: "pl-btn p-2 rounded", "aria-label": "Woche vor" },
                        React.createElement(ChevronRight, { size: 16 }))),
                React.createElement(ReviewPanel, { stats: weekStats, routines: state.routines, yearGrid: yearGrid, onPickWeek: (d) => setWeekStart(mondayOf(d)), onDemo: loadDemo, onReset: resetAll, onConfetti: testConfetti, onStatus: setBlockStatus }),
                React.createElement(ProjectPanel, { projects: state.projects || [], stats: projectStats, onAdd: addProject, onRemove: removeProject, onTarget: setProjectTarget, onPlan: startPlacing }),
                React.createElement(CatPanel, { cats: catsNow, onField: setCatField, onAdd: addCat, onRemove: removeCat }),
                React.createElement(RoutinePanel, { routines: state.routines, checks: state.checks, days: days, weekStart: weekStart, today: today, onAdd: addRoutine, onRemove: removeRoutine, onToggle: toggleCheck, onTarget: setRoutineTarget, onPlan: (r) => startPlacing({ title: r.title, cat: r.cat, est: 60 }) })))),
        timer && (React.createElement(FocusTimer, { timer: timer, beat: beat, onPause: pauseFocus, onSkip: advanceFocus, onStop: () => stopFocus(false), onDone: () => stopFocus(true) })),
        React.createElement(Confetti, { trigger: celebration === null || celebration === void 0 ? void 0 : celebration.id }),
        celebration && (React.createElement("button", { onClick: () => setCelebration(null), className: "fixed inset-0 z-50 flex items-center justify-center p-6", style: { background: "rgba(25,29,26,.28)" } },
            React.createElement("div", { className: "pl-sheet pl-rise rounded-lg px-8 py-6 text-center" },
                React.createElement("div", { className: "mono text-xs pl-muted uppercase tracking-widest mb-1" }, "geschafft"),
                React.createElement("div", { className: "text-4xl font-semibold", style: { color: celebration.color } }, celebration.title),
                React.createElement("div", { className: "text-sm pl-muted mt-1" }, celebration.sub)))),
        detailBlock && (React.createElement(BlockDetail, { block: detailBlock, now: now, projects: state.projects || [], onClose: () => setDetailId(null), onEdit: () => { setEditor(detailBlock); setDetailId(null); }, onStatus: (st) => setBlockStatus(detailBlock.id, st), onSave: (patch) => updateBlock(detailBlock.id, patch), onFocus: (b) => { startFocus(b); setDetailId(null); }, onDelete: () => { removeBlock(detailBlock.id); setDetailId(null); }, onSync: () => syncBlock(detailBlock), syncing: sync.status === "loading" })),
        editor && (React.createElement(BlockEditor, { block: editor, onClose: () => setEditor(null), onSave: (patch) => { updateBlock(editor.id, patch); setEditor({ ...editor, ...patch }); }, onDelete: () => { removeBlock(editor.id); setEditor(null); }, onSync: () => syncBlock(editor), onRepeat: toggleRepeat, projects: state.projects || [], syncing: sync.status === "loading" }))));
}
/* ════════════════ Raster ════════════════ */
function Grid({ visibleDays, todayKey, now, blocksFor, onSlot, onBlock, onMove, gridRef, ppm, maxH }) {
    const totalMin = (DAY_END - DAY_START) * 60;
    const height = totalMin * ppm;
    const hours = Array.from({ length: DAY_END - DAY_START + 1 }, (_, i) => DAY_START + i);
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const showNow = nowMin >= DAY_START * 60 && nowMin <= DAY_END * 60;
    const labelEvery = ppm < 0.42 ? 2 : 1;
    const n = visibleDays.length;
    const compact = n >= 5;
    const tpl = `${compact ? 26 : 38}px repeat(${n},1fr)`;
    /* Ziehen zum Verschieben: erst ab 4px Bewegung, sonst gilt es als Tippen */
    const dragRef = useRef(null);
    const areaRef = useRef(null);
    const [drag, setDrag] = useState(null);
    const beginDrag = (e, b) => {
        if (b.external || b.allDay || !onMove)
            return;
        dragRef.current = {
            id: b.id, day: b.day, start: b.start, dur: b.dur,
            x0: e.clientX, y0: e.clientY, moved: false,
        };
    };
    const onAreaMove = (e) => {
        const d = dragRef.current;
        if (!d)
            return;
        const dx = e.clientX - d.x0, dy = e.clientY - d.y0;
        if (!d.moved && Math.abs(dx) < 4 && Math.abs(dy) < 4)
            return;
        d.moved = true;
        const rect = areaRef.current && areaRef.current.getBoundingClientRect();
        if (!rect)
            return;
        const railW = compact ? 26 : 38;
        const colW = (rect.width - railW) / n;
        const colShift = colW > 0 ? Math.round(dx / colW) : 0;
        const idx = visibleDays.findIndex((x) => dayKey(x) === d.day);
        const target = Math.max(0, Math.min(n - 1, idx + colShift));
        const minuteShift = Math.round(dy / ppm / SLOT) * SLOT;
        const start = Math.max(DAY_START * 60, Math.min(DAY_END * 60 - d.dur, d.start + minuteShift));
        setDrag({ id: d.id, day: dayKey(visibleDays[target]), start: start, dur: d.dur });
    };
    const endDrag = () => {
        const d = dragRef.current;
        dragRef.current = null;
        const preview = drag;
        setDrag(null);
        if (!d || !d.moved || !preview)
            return;
        if (preview.day !== d.day || preview.start !== d.start) {
            onMove(d.id, preview.day, preview.start);
            buzz(10);
        }
    };
    const handleClick = (e, day) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const raw = DAY_START * 60 + (e.clientY - rect.top) / ppm;
        const snapped = Math.round(raw / SLOT) * SLOT;
        onSlot(day, Math.max(DAY_START * 60, Math.min(DAY_END * 60 - 30, snapped)));
    };
    /* Ganztägige Termine gehören nicht ins Zeitraster */
    const allDayRows = Math.max(0, ...visibleDays.map((d) => blocksFor(dayKey(d)).filter((b) => b.allDay).length));
    return (React.createElement("div", null,
        n > 1 && (React.createElement("div", { className: "grid border-b pl-hair", style: { gridTemplateColumns: tpl } },
            React.createElement("div", null),
            visibleDays.map((d) => {
                const k = dayKey(d);
                const isToday = k === todayKey;
                return (React.createElement("div", { key: k, className: "px-1 py-1.5 border-l pl-hair text-center" },
                    React.createElement("div", { className: "mono text-xs pl-muted" }, DAY_NAMES[(d.getDay() + 6) % 7]),
                    React.createElement("div", { className: "mono text-sm font-medium", style: { color: isToday ? "#2B4B8F" : "var(--ink)" } }, d.getDate())));
            }))),
        allDayRows > 0 && (React.createElement("div", { className: "grid border-b pl-hair", style: { gridTemplateColumns: tpl } },
            React.createElement("div", { className: "mono pl-muted flex items-center justify-end pr-1 overflow-hidden", style: { fontSize: 9 } }, compact ? "" : "ganztags"),
            visibleDays.map((d) => {
                const k = dayKey(d);
                const items = blocksFor(k).filter((b) => b.allDay);
                return (React.createElement("div", { key: k, className: "border-l pl-hair p-0.5 flex flex-col gap-0.5", style: { minHeight: allDayRows * 17 + 4 } }, items.map((b) => {
                    const c = blockColor(b);
                    return (React.createElement("button", { key: b.id, onClick: () => onBlock(b), className: "pl-block pl-ext rounded-sm text-left truncate", style: {
                            background: hexA(c, 0.16), borderLeft: `2px solid ${c}`,
                            padding: "1px 3px", fontSize: compact ? 9 : 10, lineHeight: "13px", color: c,
                        } }, b.title));
                })));
            }))),
        React.createElement("div", { ref: gridRef, className: "pl-scroll overflow-y-auto", style: { maxHeight: maxH } },
            React.createElement("div", { className: "grid", ref: areaRef, style: { gridTemplateColumns: tpl, touchAction: "pan-y" }, onPointerMove: onAreaMove, onPointerUp: endDrag, onPointerLeave: endDrag },
                React.createElement(HourRail, { hours: hours, ppm: ppm, every: labelEvery, compact: compact }),
                visibleDays.map((d) => {
                    const k = dayKey(d);
                    let blocks = blocksFor(k).filter((b) => !b.allDay);
                    if (drag) {
                        blocks = blocks.filter((b) => b.id !== drag.id);
                        if (drag.day === k) {
                            const orig = visibleDays
                                .map((dd) => blocksFor(dayKey(dd)).find((x) => x.id === drag.id))
                                .find(Boolean);
                            if (orig)
                                blocks = [...blocks, { ...orig, day: k, start: drag.start }];
                        }
                    }
                    return (React.createElement("div", { key: k, className: "relative border-l pl-hair", style: { height } },
                        React.createElement("div", { className: "pl-slot absolute inset-0 cursor-copy", onClick: (e) => handleClick(e, k) }),
                        hours.map((h) => (React.createElement("div", { key: h, className: "absolute left-0 right-0 border-t pl-hair pointer-events-none", style: { top: (h - DAY_START) * 60 * ppm } }))),
                        blocks.map((b) => {
                            const c = blockColor(b);
                            const fill = b.status === "done" ? 0.3 : b.status === "skipped" ? 0.06 : b.status === "moved" ? 0.1 : 0.16;
                            const h = Math.max(b.dur * ppm - 1, 16);
                            const roomy = !compact && h >= 36;
                            const flat = h < 24; // zu flach für zwei Zeilen
                            const fs = h >= 36 ? 12 : h >= 24 ? 11 : h >= 18 ? 10 : 9;
                            const dragged = drag && drag.id === b.id && drag.day === k ? drag : null;
                            return (React.createElement("button", { key: b.id, onPointerDown: (e) => beginDrag(e, b), onClick: (e) => {
                                    e.stopPropagation();
                                    if (dragRef.current && dragRef.current.moved)
                                        return;
                                    onBlock(b);
                                }, className: `pl-block absolute ${b.external ? "pl-ext cursor-default" : ""}`, style: {
                                    top: (b.start - DAY_START * 60) * ppm,
                                    height: h, left: 2, right: 2,
                                    cursor: b.external || b.allDay ? "default" : "grab",
                                    zIndex: dragged ? 20 : undefined,
                                    boxShadow: dragged ? "0 6px 16px -4px rgba(25,29,26,.4)" : undefined,
                                    background: hexA(c, b.external ? 0.1 : fill),
                                    borderLeft: `${compact ? 2 : 3}px ${b.status === "skipped" ? "dashed" : "solid"} ${c}`,
                                    opacity: b.status === "skipped" ? 0.55 : 1,
                                } },
                                React.createElement("div", { className: "text-left overflow-hidden", style: {
                                        paddingLeft: 3, paddingRight: 2,
                                        paddingTop: roomy ? 2 : 0,
                                        height: "100%",
                                        display: flat ? "flex" : "block",
                                        alignItems: flat ? "center" : undefined,
                                    } },
                                    React.createElement("div", { style: { minWidth: 0, width: "100%" } },
                                        roomy && React.createElement("div", { className: "mono text-xs pl-muted" }, minsToLabel(b.start)),
                                        React.createElement("div", { className: "font-medium truncate", style: {
                                                fontSize: fs,
                                                lineHeight: flat ? fs + 1 + "px" : fs + 3 + "px",
                                                color: c,
                                                textDecoration: b.status === "skipped" ? "line-through" : "none",
                                            } },
                                            b.cont ? "▸" : "",
                                            b.title || "—",
                                            b.goesOn ? "▸" : "")))));
                        }),
                        k === todayKey && showNow && (React.createElement("div", { className: "absolute left-0 right-0 pointer-events-none z-10", style: { top: (nowMin - DAY_START * 60) * ppm } },
                            React.createElement("div", { style: { height: 1.5, background: "#C2410C" } })))));
                })))));
}
function HourRail({ hours, ppm, every = 1, compact = false }) {
    return (React.createElement("div", { className: "relative", style: { height: (DAY_END - DAY_START) * 60 * ppm } }, hours.map((h, i) => (i % every === 0 ? (React.createElement("div", { key: h, className: "absolute mono pl-muted", style: { right: compact ? 3 : 6, top: (h - DAY_START) * 60 * ppm - 6, fontSize: compact ? 9 : 11 } }, compact ? h : pad(h))) : null))));
}
function TodayView({ dayK, blocks, now, isToday, routines, checks, onToggleCheck, onBlock, onStatus, onAdd, onShiftDay, onBackToToday, onSlot, onMove, ppm }) {
    var _a, _b;
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const d = new Date(dayK + "T00:00:00");
    const running = isToday
        ? blocks.find((b) => !b.external && nowMin >= b.start && nowMin < b.start + b.dur)
        : null;
    const next = blocks.find((b) => b.start > (isToday ? nowMin : -1));
    const pending = blocks.filter((b) => !b.external && !b.status && b.start + b.dur <= (isToday ? nowMin : 24 * 60));
    return (React.createElement("div", { className: "flex flex-col gap-4" },
        React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("button", { onClick: () => onShiftDay(-1), className: "pl-btn p-2 rounded", "aria-label": "Tag zur\u00FCck" },
                React.createElement(ChevronLeft, { size: 16 })),
            React.createElement("div", { className: "flex-1 text-center" },
                React.createElement("div", { className: "mono text-xs pl-muted" }, isToday ? "heute" : DAY_NAMES[(d.getDay() + 6) % 7]),
                React.createElement("div", { className: "text-xl font-semibold leading-tight" },
                    d.getDate(),
                    ". ",
                    ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"][d.getMonth()])),
            React.createElement("button", { onClick: () => onShiftDay(1), className: "pl-btn p-2 rounded", "aria-label": "Tag vor" },
                React.createElement(ChevronRight, { size: 16 }))),
        !isToday && (React.createElement("button", { onClick: onBackToToday, className: "pl-btn px-3 py-1.5 rounded mono text-xs self-center" }, "zur\u00FCck zu heute")),
        isToday && (React.createElement("div", { className: "pl-card rounded p-4" },
            running ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "l\u00E4uft gerade"),
                React.createElement("div", { className: "text-2xl font-semibold leading-tight", style: { color: (_a = CATS[running.cat]) === null || _a === void 0 ? void 0 : _a.color } }, running.title),
                React.createElement("div", { className: "mono text-sm pl-muted mt-1" },
                    minsToLabel(running.start),
                    "\u2013",
                    minsToLabel(running.start + running.dur),
                    " \u00B7 noch",
                    " ",
                    durLabel(running.start + running.dur - nowMin)),
                React.createElement("div", { className: "h-1.5 rounded-full mt-3", style: { background: "var(--line)" } },
                    React.createElement("div", { className: "h-1.5 rounded-full pl-bar", style: {
                            width: `${((nowMin - running.start) / running.dur) * 100}%`,
                            background: (_b = CATS[running.cat]) === null || _b === void 0 ? void 0 : _b.color,
                        } })))) : (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "gerade nichts geplant"),
                React.createElement("div", { className: "text-lg" }, next
                    ? `Als Nächstes um ${minsToLabel(next.start)}: ${next.title}`
                    : "Für heute steht nichts mehr an."))),
            running && next && (React.createElement("div", { className: "mono text-xs pl-muted mt-3 pt-3 border-t pl-hair" },
                "danach ",
                minsToLabel(next.start),
                " \u00B7 ",
                next.title)))),
        pending.length > 0 && (React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" },
                "Wie ist es gelaufen? (",
                pending.length,
                ")"),
            React.createElement("div", { className: "flex flex-col gap-2" }, pending.map((b) => (React.createElement("div", { key: b.id, className: "flex items-center gap-2" },
                React.createElement("span", { className: "mono text-xs pl-muted shrink-0" }, minsToLabel(b.start)),
                React.createElement("span", { className: "text-sm truncate flex-1" }, b.title),
                React.createElement(StatusButtons, { current: b.status, onPick: (s) => onStatus(b.id, s) }))))))),
        React.createElement("div", null,
            React.createElement("div", { className: "flex items-center justify-between mb-1" },
                React.createElement("span", { className: "mono text-xs pl-muted" },
                    "Tagesplan \u00B7 ",
                    DAY_START,
                    "\u2013",
                    DAY_END,
                    " Uhr"),
                React.createElement("button", { onClick: onAdd, className: "px-2.5 py-1 rounded flex items-center gap-1 mono text-xs", style: { background: "var(--ink)", color: "var(--paper)" } },
                    React.createElement(Plus, { size: 12 }),
                    " Termin")),
            React.createElement("div", { className: "pl-card rounded" },
                React.createElement(Grid, { visibleDays: [new Date(dayK + "T00:00:00")], todayKey: isToday ? dayK : "-", now: now, blocksFor: () => blocks, onSlot: onSlot, onBlock: onBlock, ppm: ppm, maxH: ppm * (DAY_END - DAY_START) * 60 + 4 }))),
        React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "Als Liste"),
            blocks.length === 0 ? (React.createElement("p", { className: "mono text-xs pl-muted py-3" }, "Nichts eingetragen. \u00DCber \u201ETermin\" oder die Wochenansicht f\u00FCllst du den Tag.")) : (React.createElement("div", { className: "flex flex-col" }, blocks.map((b) => {
                const c = blockColor(b);
                const past = isToday && b.start + b.dur <= nowMin;
                const isRunning = running && running.id === b.id;
                return (React.createElement("button", { key: b.id, onClick: () => !b.external && onBlock(b), className: "flex items-center gap-3 py-2 border-b pl-hair text-left", style: { opacity: b.status === "skipped" ? 0.5 : past && !isRunning ? 0.75 : 1 } },
                    React.createElement("span", { className: "mono text-xs pl-muted w-10 shrink-0" }, minsToLabel(b.start)),
                    React.createElement("span", { className: "w-1 self-stretch rounded-full shrink-0", style: { background: c } }),
                    React.createElement("span", { className: "flex-1 min-w-0" },
                        React.createElement("span", { className: "text-sm block truncate", style: { textDecoration: b.status === "skipped" ? "line-through" : "none" } }, b.title || "Ohne Titel"),
                        React.createElement("span", { className: "mono text-xs pl-muted" },
                            durLabel(b.dur),
                            b.external ? " · Kalender" : "",
                            isRunning ? " · läuft" : "")),
                    b.status === "done" && React.createElement(Check, { size: 14, style: { color: "#1E6E5A" } }),
                    b.status === "moved" && React.createElement(ArrowRight, { size: 14, style: { color: "#8A4E1C" } }),
                    b.status === "skipped" && React.createElement(X, { size: 14, style: { color: "#A03A5E" } })));
            })))),
        routines.length > 0 && (React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "Routinen"),
            React.createElement("div", { className: "flex flex-wrap gap-1.5" }, routines.map((r) => {
                var _a;
                const on = (checks[dayK] || []).includes(r.id);
                const c = ((_a = CATS[r.cat]) === null || _a === void 0 ? void 0 : _a.color) || "#6F7A72";
                return (React.createElement("button", { key: r.id, onClick: () => { if (!on)
                        buzz(12); onToggleCheck(r.id, dayK); }, className: `px-3 py-2 rounded flex items-center gap-1.5 text-sm ${on ? "pl-pop" : ""}`, style: {
                        background: on ? c : "transparent",
                        color: on ? "#FFF" : "var(--ink)",
                        border: `1px solid ${on ? c : "var(--line)"}`,
                    } },
                    on && React.createElement(Check, { size: 13 }),
                    r.title));
            }))))));
}
function LearnView({ weeks, exams: examsRaw, done, onToggleTask, onPlanTask, weekIdx, setWeekIdx, today, onWeekField, onAddTask, onEditTask, onDeleteTask, onExamField, onAddExam, onDeleteExam, onReset }) {
    const [openSubject, setOpenSubject] = useState(null);
    const [showInfo, setShowInfo] = useState(false);
    const [edit, setEdit] = useState(false);
    const [confirmReset, setConfirmReset] = useState(false);
    const wk = weeks[weekIdx];
    if (!wk)
        return React.createElement("p", { className: "mono text-xs pl-muted" }, "Kein Lernplan vorhanden.");
    const exams = [...(examsRaw || [])].sort((a, b) => (a.date < b.date ? -1 : 1));
    const mustDone = wk.must.filter((t) => done[t.id]).length;
    const mustMin = wk.must.reduce((s, t) => s + t.m, 0);
    const doneMin = wk.must.reduce((s, t) => s + (done[t.id] ? t.m : 0), 0);
    const pct = mustMin ? (doneMin / mustMin) * 100 : 0;
    const Row = ({ task, kind }) => {
        const on = !!done[task.id];
        const c = kind === "must" ? "#2B4B8F" : "#6F7A72";
        if (edit) {
            return (React.createElement("div", { className: "flex items-start gap-2 py-1.5" },
                React.createElement("div", { className: "flex-1 min-w-0 flex flex-col gap-1" },
                    React.createElement("input", { value: task.t, placeholder: "Aufgabe", onChange: (e) => onEditTask(weekIdx, kind, task.id, { t: e.target.value }), className: "pl-input px-2 py-1 rounded text-sm" }),
                    React.createElement("div", { className: "flex items-center gap-1 flex-wrap" },
                        React.createElement("button", { onClick: () => onEditTask(weekIdx, kind, task.id, { m: Math.max(15, task.m - 15) }), className: "pl-btn px-2 py-1 rounded-l mono text-xs" }, "\u2212"),
                        React.createElement("span", { className: "mono text-xs px-2 py-1 border-t border-b", style: { borderColor: "var(--line)", minWidth: 58, textAlign: "center" } }, durLabel(task.m)),
                        React.createElement("button", { onClick: () => onEditTask(weekIdx, kind, task.id, { m: Math.min(360, task.m + 15) }), className: "pl-btn px-2 py-1 rounded-r mono text-xs" }, "+"),
                        React.createElement("select", { value: task.s, onChange: (e) => onEditTask(weekIdx, kind, task.id, { s: e.target.value }), className: "pl-input px-1 py-1 rounded mono text-xs", style: { width: "auto" } }, Object.keys(SUBJECTS).map((k) => (React.createElement("option", { key: k, value: k }, SUBJECTS[k].short)))),
                        React.createElement("button", { onClick: () => onDeleteTask(weekIdx, kind, task.id), className: "pl-btn px-2 py-1 rounded ml-auto", style: { color: "#A03A5E" }, "aria-label": "L\u00F6schen" },
                            React.createElement(Trash2, { size: 12 }))))));
        }
        return (React.createElement("div", { className: "flex items-start gap-2 py-1.5" },
            React.createElement("button", { onClick: () => { if (!on)
                    buzz(12); onToggleTask(task.id); }, className: `w-5 h-5 rounded-sm shrink-0 flex items-center justify-center mt-0.5 ${on ? "pl-pop" : ""}`, style: { background: on ? c : "transparent", border: `1.5px solid ${on ? c : "var(--line)"}` }, "aria-label": "Erledigt" }, on && React.createElement(Check, { size: 13, color: "#FFF" })),
            React.createElement("div", { className: "flex-1 min-w-0" },
                React.createElement("div", { className: "text-sm leading-snug", style: { textDecoration: on ? "line-through" : "none", opacity: on ? 0.55 : 1 } }, task.t || "(ohne Titel)"),
                React.createElement("div", { className: "mono text-xs pl-muted" },
                    SUBJECTS[task.s] ? SUBJECTS[task.s].short : task.s,
                    " \u00B7 ",
                    durLabel(task.m))),
            !on && task.t && (React.createElement("button", { onClick: () => onPlanTask(task), className: "pl-btn mono text-xs px-2 py-1 rounded shrink-0" }, "einplanen"))));
    };
    return (React.createElement("div", { className: "flex flex-col gap-3" },
        React.createElement("div", { className: "pl-card rounded p-4 flex flex-col gap-3" },
            exams.length === 0 && (React.createElement("p", { className: "mono text-xs pl-muted" }, "Keine Pr\u00FCfung eingetragen.")),
            exams.map((ex, idx) => {
                const d = new Date(ex.date + "T00:00:00");
                const left = Math.ceil((d - new Date(dayKey(today) + "T00:00:00")) / 86400000);
                const naechste = idx === 0;
                return (React.createElement("div", { key: ex.id, className: idx > 0 ? "border-t pl-hair pt-3" : "" },
                    React.createElement("div", { className: "flex items-end justify-between gap-3" },
                        React.createElement("div", { className: "min-w-0 flex-1" },
                            React.createElement("div", { className: "mono text-xs pl-muted" }, naechste ? "nächste Prüfung" : "danach"),
                            edit ? (React.createElement("div", { className: "flex flex-col gap-1 mt-1" },
                                React.createElement("input", { value: ex.title, onChange: (e) => onExamField(ex.id, "title", e.target.value), className: "pl-input px-2 py-1 rounded text-sm", placeholder: "Fach" }),
                                React.createElement("div", { className: "flex gap-2" },
                                    React.createElement("input", { type: "date", value: ex.date, onChange: (e) => onExamField(ex.id, "date", e.target.value), className: "pl-input px-2 py-1 rounded mono text-xs flex-1" }),
                                    React.createElement("button", { onClick: () => onDeleteExam(ex.id), className: "pl-btn px-2 rounded", style: { color: "#A03A5E", borderColor: "#A03A5E" }, "aria-label": "Pr\u00FCfung l\u00F6schen" },
                                        React.createElement(Trash2, { size: 13 }))))) : (React.createElement(React.Fragment, null,
                                React.createElement("div", { className: naechste ? "text-lg font-semibold leading-tight" : "text-sm font-medium leading-tight" }, ex.title),
                                React.createElement("div", { className: "mono text-xs pl-muted mt-0.5" }, d.toLocaleDateString("de-AT", { weekday: "short", day: "numeric", month: "long" }))))),
                        React.createElement("div", { className: "text-right shrink-0" },
                            React.createElement("div", { className: naechste ? "mono text-4xl font-semibold leading-none" : "mono text-2xl font-medium leading-none", style: { color: left <= 14 ? "#A03A5E" : left <= 30 ? "#8A4E1C" : "#2B4B8F" } }, left),
                            React.createElement("div", { className: "mono text-xs pl-muted" }, "Tage")))));
            }),
            edit && (React.createElement("button", { onClick: onAddExam, className: "pl-btn px-3 py-1.5 rounded mono text-xs self-start" }, "+ Pr\u00FCfung"))),
        React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("button", { onClick: () => setEdit(!edit), className: "pl-btn px-3 py-1.5 rounded mono text-xs", style: edit ? { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" } : {} }, edit ? "Fertig" : "Plan bearbeiten"),
            edit && (React.createElement("button", { onClick: () => { if (confirmReset) {
                    onReset();
                    setConfirmReset(false);
                    setEdit(false);
                }
                else
                    setConfirmReset(true); }, className: "pl-btn px-3 py-1.5 rounded mono text-xs ml-auto", style: confirmReset
                    ? { background: "#A03A5E", color: "#FFF", borderColor: "#A03A5E" }
                    : { color: "#A03A5E", borderColor: "#A03A5E" } }, confirmReset ? "wirklich? alles zurück" : "Ursprungsplan"))),
        React.createElement("div", { className: "flex items-center gap-2" },
            React.createElement("button", { onClick: () => setWeekIdx(Math.max(0, weekIdx - 1)), className: "pl-btn p-2 rounded", "aria-label": "Woche zur\u00FCck" },
                React.createElement(ChevronLeft, { size: 16 })),
            React.createElement("div", { className: "flex-1 text-center" },
                React.createElement("div", { className: "mono text-xs pl-muted" },
                    "Lernwoche ",
                    wk.n,
                    " \u00B7 ",
                    wk.from.slice(8),
                    ".",
                    wk.from.slice(5, 7),
                    ". \u2013 ",
                    wk.to.slice(8),
                    ".",
                    wk.to.slice(5, 7),
                    "."),
                edit ? (React.createElement("input", { value: wk.title, onChange: (e) => onWeekField(weekIdx, "title", e.target.value), className: "pl-input px-2 py-1 rounded text-sm mt-1", placeholder: "Titel der Woche" })) : (React.createElement("div", { className: "text-base font-medium leading-tight" }, wk.title))),
            React.createElement("button", { onClick: () => setWeekIdx(Math.min(weeks.length - 1, weekIdx + 1)), className: "pl-btn p-2 rounded", "aria-label": "Woche vor" },
                React.createElement(ChevronRight, { size: 16 }))),
        edit && (React.createElement("div", { className: "pl-card rounded p-3 flex items-center gap-2" },
            React.createElement("span", { className: "mono text-xs pl-muted" }, "Zeitraum"),
            React.createElement("input", { type: "date", value: wk.from, onChange: (e) => onWeekField(weekIdx, "from", e.target.value), className: "pl-input px-2 py-1 rounded mono text-xs" }),
            React.createElement("input", { type: "date", value: wk.to, onChange: (e) => onWeekField(weekIdx, "to", e.target.value), className: "pl-input px-2 py-1 rounded mono text-xs" }))),
        !edit && (React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "flex items-baseline justify-between mb-2" },
                React.createElement("span", { className: "mono text-xs pl-muted" }, "Pflichtprogramm"),
                React.createElement("span", { className: "mono text-sm" },
                    mustDone,
                    "/",
                    wk.must.length,
                    " \u00B7 ",
                    durLabel(doneMin),
                    " von ",
                    durLabel(mustMin))),
            React.createElement("div", { className: "h-2 rounded-full overflow-hidden", style: { background: hexA("#2B4B8F", 0.15) } },
                React.createElement("div", { className: "h-2 rounded-full pl-bar", style: { width: `${pct}%`, background: "#2B4B8F" } })))),
        React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs mb-1", style: { color: "#2B4B8F" } }, "Muss \u2014 auch in einer schlechten Woche"),
            React.createElement("div", { className: "divide-y", style: { borderColor: "var(--line-soft)" } }, wk.must.map((t) => React.createElement(Row, { key: t.id, task: t, kind: "must" }))),
            edit && (React.createElement("button", { onClick: () => onAddTask(weekIdx, "must"), className: "pl-btn mt-2 px-2 py-1 rounded mono text-xs flex items-center gap-1" },
                React.createElement(Plus, { size: 12 }),
                " Aufgabe"))),
        (wk.extra.length > 0 || edit) && (React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Wenn Zeit \u2014 Aufbau auf 8\u201310 h"),
            React.createElement("div", { className: "divide-y", style: { borderColor: "var(--line-soft)" } }, wk.extra.map((t) => React.createElement(Row, { key: t.id, task: t, kind: "extra" }))),
            edit && (React.createElement("button", { onClick: () => onAddTask(weekIdx, "extra"), className: "pl-btn mt-2 px-2 py-1 rounded mono text-xs flex items-center gap-1" },
                React.createElement(Plus, { size: 12 }),
                " Aufgabe")))),
        !edit && (React.createElement("div", { className: "pl-card rounded p-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "F\u00E4cher"),
            React.createElement("div", { className: "flex flex-col" }, ["molbio", "thermo", "prozess", "allergien"].map((id) => {
                const sub = SUBJECTS[id];
                const open = openSubject === id;
                return (React.createElement("div", { key: id, className: "border-b pl-hair last:border-0" },
                    React.createElement("button", { onClick: () => setOpenSubject(open ? null : id), className: "w-full flex items-center gap-2 py-2 text-left" },
                        React.createElement("span", { className: "w-1.5 h-1.5 rounded-full shrink-0", style: { background: CATS.uni.color } }),
                        React.createElement("span", { className: "text-sm flex-1" }, sub.title),
                        React.createElement(ChevronRight, { size: 14, className: "pl-muted", style: { transform: open ? "rotate(90deg)" : "none", transition: "transform .18s" } })),
                    open && React.createElement("p", { className: "pl-rise text-sm pl-muted leading-relaxed pb-3 pl-3.5" }, sub.note)));
            })))),
        !edit && (React.createElement("button", { onClick: () => setShowInfo(!showInfo), className: "pl-btn px-3 py-2 rounded mono text-xs" }, showInfo ? "Regeln ausblenden" : "Lernregeln & FH-Fristen")),
        showInfo && !edit && (React.createElement("div", { className: "pl-card pl-rise rounded p-3 flex flex-col gap-3" },
            React.createElement("div", null,
                React.createElement("div", { className: "mono text-xs pl-muted mb-1.5" }, "Sechs Regeln"),
                React.createElement("ol", { className: "flex flex-col gap-1.5" }, STUDY_RULES.map((r, i) => (React.createElement("li", { key: i, className: "text-sm flex gap-2" },
                    React.createElement("span", { className: "mono text-xs pl-muted shrink-0" }, i + 1),
                    r))))),
            React.createElement("div", { className: "border-t pl-hair pt-3" },
                React.createElement("div", { className: "mono text-xs mb-1.5", style: { color: "#A03A5E" } }, "FH-Pr\u00FCfungsordnung"),
                React.createElement("ul", { className: "flex flex-col gap-1.5" }, STUDY_NOTES.map((r, i) => (React.createElement("li", { key: i, className: "text-sm flex gap-2" },
                    React.createElement("span", { className: "pl-muted shrink-0" }, "\u00B7"),
                    r)))))))));
}
/* ════════════════ Panels ════════════════ */
function TabBtn({ active, onClick, icon: Icon, label }) {
    return (React.createElement("button", { onClick: onClick, className: "pl-btn flex-1 px-2 py-2 rounded flex items-center justify-center gap-1.5 mono text-xs", style: { background: active ? "var(--ink)" : "var(--card)", color: active ? "var(--paper)" : "var(--ink)", borderColor: active ? "var(--ink)" : "var(--line)" } },
        React.createElement(Icon, { size: 13 }),
        " ",
        label));
}
function CatPicker({ value, onChange }) {
    return (React.createElement("div", { className: "flex flex-wrap gap-1" }, CAT_KEYS.map((k) => (React.createElement("button", { key: k, onClick: () => onChange(k), className: "px-2 py-1 rounded mono text-xs", style: {
            background: value === k ? CATS[k].color : "transparent",
            color: value === k ? "#FFF" : CATS[k].color,
            border: `1px solid ${CATS[k].color}`,
        } }, CATS[k].label)))));
}
function TodoPanel({ todos, onAdd, onToggle, onRemove, onPlan, pending, onImportTodoist }) {
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("fokus");
    const [est, setEst] = useState(60);
    const [tdOpen, setTdOpen] = useState(false);
    const [tdDraft, setTdDraft] = useState("");
    const hasToken = !!tdToken();
    const submit = () => {
        if (!title.trim())
            return;
        onAdd(title.trim(), cat, est);
        setTitle("");
    };
    const open = todos.filter((t) => !t.done);
    const done = todos.filter((t) => t.done);
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-3" },
        React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), onKeyDown: (e) => e.key === "Enter" && submit(), placeholder: "Was steht an?", className: "pl-input px-2 py-1.5 rounded text-sm" }),
            React.createElement(CatPicker, { value: cat, onChange: setCat }),
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("div", { className: "flex items-center gap-1" }, [30, 60, 90, 120].map((m) => (React.createElement("button", { key: m, onClick: () => setEst(m), className: "pl-btn px-2 py-1 rounded mono text-xs", style: est === m ? { background: "var(--ink)", color: "var(--paper)", borderColor: "var(--ink)" } : {} }, m)))),
                React.createElement("button", { onClick: submit, className: "pl-btn ml-auto px-2.5 py-1 rounded flex items-center gap-1 mono text-xs" },
                    React.createElement(Plus, { size: 13 }),
                    " Anlegen"))),
        React.createElement("div", { className: "border-t pl-hair pt-2 flex items-center gap-2" },
            React.createElement("span", { className: "mono text-xs pl-muted flex-1" }, "Todoist"),
            hasToken ? (React.createElement(React.Fragment, null,
                React.createElement("button", { onClick: onImportTodoist, className: "pl-btn px-2 py-1 rounded mono text-xs" }, "Aufgaben holen"),
                React.createElement("button", { onClick: () => { tdSetToken(""); setTdOpen(false); setTdDraft(""); }, className: "mono text-xs pl-muted px-1" }, "trennen"))) : (React.createElement("button", { onClick: () => setTdOpen(!tdOpen), className: "pl-btn px-2 py-1 rounded mono text-xs" }, "verbinden"))),
        tdOpen && !hasToken && (React.createElement("div", { className: "pl-rise flex flex-col gap-2" },
            React.createElement("p", { className: "mono text-xs pl-muted leading-relaxed" }, "Token in Todoist unter Einstellungen \u2192 Integrationen \u2192 Entwickler kopieren. Es bleibt nur auf diesem Ger\u00E4t gespeichert."),
            React.createElement("div", { className: "flex gap-2" },
                React.createElement("input", { value: tdDraft, onChange: (e) => setTdDraft(e.target.value), placeholder: "API-Token einf\u00FCgen", className: "pl-input px-2 py-1.5 rounded text-sm flex-1" }),
                React.createElement("button", { onClick: () => { if (tdDraft.trim()) {
                        tdSetToken(tdDraft);
                        setTdOpen(false);
                        onImportTodoist();
                    } }, className: "px-3 py-1.5 rounded mono text-xs", style: { background: "var(--ink)", color: "var(--paper)" } }, "Sichern")))),
        React.createElement("div", { className: "border-t pl-hair pt-2 flex flex-col gap-1.5" },
            open.length === 0 && done.length === 0 && (React.createElement("p", { className: "mono text-xs pl-muted py-2" }, "Noch keine Aufgaben. Leg eine an \u2014 danach kannst du sie direkt in eine freie Zeit ziehen.")),
            open.map((t) => {
                var _a, _b, _c;
                return (React.createElement("div", { key: t.id, className: "flex items-center gap-2 group" },
                    React.createElement("button", { onClick: () => onToggle(t.id), className: "w-4 h-4 rounded-sm shrink-0", style: { border: `1.5px solid ${((_a = CATS[t.cat]) === null || _a === void 0 ? void 0 : _a.color) || "#6F7A72"}` }, "aria-label": "Erledigt" }),
                    React.createElement("span", { className: "text-sm truncate flex-1" }, t.title),
                    t.todoistId && React.createElement("span", { className: "mono text-xs pl-muted", title: "aus Todoist" }, "\u2197"),
                    React.createElement("span", { className: "mono text-xs pl-muted" }, durLabel(t.est)),
                    React.createElement("button", { onClick: () => onPlan((pending === null || pending === void 0 ? void 0 : pending.todoId) === t.id ? null : { title: t.title, cat: t.cat, est: t.est, todoId: t.id }), className: "mono text-xs px-1.5 py-0.5 rounded", style: {
                            border: `1px solid ${(pending === null || pending === void 0 ? void 0 : pending.todoId) === t.id ? (_b = CATS[t.cat]) === null || _b === void 0 ? void 0 : _b.color : "var(--line)"}`,
                            color: (pending === null || pending === void 0 ? void 0 : pending.todoId) === t.id ? "#FFF" : "var(--muted)",
                            background: (pending === null || pending === void 0 ? void 0 : pending.todoId) === t.id ? (_c = CATS[t.cat]) === null || _c === void 0 ? void 0 : _c.color : "transparent",
                        } }, "einplanen"),
                    React.createElement("button", { onClick: () => onRemove(t.id), className: "pl-muted opacity-0 group-hover:opacity-100", "aria-label": "L\u00F6schen" },
                        React.createElement(Trash2, { size: 13 }))));
            }),
            done.length > 0 && (React.createElement("div", { className: "mt-1 pt-2 border-t pl-hair flex flex-col gap-1" }, done.map((t) => (React.createElement("div", { key: t.id, className: "flex items-center gap-2 group" },
                React.createElement("button", { onClick: () => onToggle(t.id), className: "w-4 h-4 rounded-sm shrink-0 flex items-center justify-center", style: { background: "var(--muted)" }, "aria-label": "Wieder \u00F6ffnen" },
                    React.createElement(Check, { size: 11, color: "#FAFAF8" })),
                React.createElement("span", { className: "text-sm truncate flex-1 line-through pl-muted" }, t.title),
                React.createElement("button", { onClick: () => onRemove(t.id), className: "pl-muted opacity-0 group-hover:opacity-100", "aria-label": "L\u00F6schen" },
                    React.createElement(Trash2, { size: 13 }))))))))));
}
function RoutinePanel({ routines, checks, days, weekStart, today, onAdd, onRemove, onToggle, onTarget, onPlan }) {
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("training");
    const [popped, setPopped] = useState(null);
    const hit = (routineId, key) => {
        const wasOn = (checks[key] || []).includes(routineId);
        onToggle(routineId, key);
        if (!wasOn) {
            buzz(12);
            setPopped(routineId + key);
            setTimeout(() => setPopped(null), 340);
        }
    };
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-3" },
        React.createElement("div", { className: "flex gap-2" },
            React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), onKeyDown: (e) => { if (e.key === "Enter" && title.trim()) {
                    onAdd(title.trim(), cat);
                    setTitle("");
                } }, placeholder: "Neue Routine", className: "pl-input px-2 py-1.5 rounded text-sm flex-1" }),
            React.createElement("button", { onClick: () => { if (title.trim()) {
                    onAdd(title.trim(), cat);
                    setTitle("");
                } }, className: "pl-btn px-2 rounded", "aria-label": "Routine anlegen" },
                React.createElement(Plus, { size: 14 }))),
        React.createElement(CatPicker, { value: cat, onChange: setCat }),
        React.createElement("div", { className: "border-t pl-hair pt-2 flex flex-col gap-3" },
            routines.length === 0 && (React.createElement("p", { className: "mono text-xs pl-muted" }, "Keine Routinen. Leg oben eine an.")),
            routines.map((r) => {
                var _a, _b;
                const target = (_a = r.weekTarget) !== null && _a !== void 0 ? _a : 2;
                const hits = weekHits(r, checks, weekStart);
                const ds = dayStreak(r.id, checks, today);
                const ws = weekStreak(r, checks, weekStart);
                const c = ((_b = CATS[r.cat]) === null || _b === void 0 ? void 0 : _b.color) || "#6F7A72";
                const reached = hits >= target;
                return (React.createElement("div", { key: r.id, className: "group" },
                    React.createElement("div", { className: "flex items-center gap-1.5 mb-1" },
                        React.createElement("span", { className: "w-1.5 h-1.5 rounded-full shrink-0", style: { background: c } }),
                        React.createElement("span", { className: "text-sm truncate flex-1" }, r.title),
                        React.createElement("span", { className: "mono text-xs", style: reached ? { color: c } : { color: "var(--muted)" } },
                            hits,
                            "/",
                            target),
                        React.createElement("div", { className: "flex items-center opacity-0 group-hover:opacity-100" },
                            React.createElement("button", { onClick: () => onTarget(r.id, Math.max(1, target - 1)), className: "mono text-xs px-1 pl-muted", "aria-label": "Soll senken" }, "\u2212"),
                            React.createElement("button", { onClick: () => onTarget(r.id, Math.min(7, target + 1)), className: "mono text-xs px-1 pl-muted", "aria-label": "Soll erh\u00F6hen" }, "+"),
                            React.createElement("button", { onClick: () => onPlan(r), className: "mono text-xs px-1 pl-muted" }, "einplanen"),
                            React.createElement("button", { onClick: () => onRemove(r.id), className: "pl-muted px-1", "aria-label": "L\u00F6schen" },
                                React.createElement(Trash2, { size: 12 })))),
                    React.createElement("div", { className: "flex items-center gap-1 mb-1" }, days.map((d) => {
                        const k = dayKey(d);
                        const on = (checks[k] || []).includes(r.id);
                        return (React.createElement("button", { key: k, onClick: () => hit(r.id, k), className: `rounded-sm flex-1 flex items-center justify-center ${popped === r.id + k ? "pl-pop" : ""}`, style: {
                                height: 22,
                                background: on ? c : "transparent",
                                border: `1px solid ${on ? c : "var(--line)"}`,
                            }, "aria-label": `${r.title} abhaken` }, on && React.createElement(Check, { size: 12, color: "#FFF" })));
                    })),
                    React.createElement("div", { className: "flex items-center gap-3 mono text-xs pl-muted" },
                        React.createElement("span", { className: "flex items-center gap-1", style: ws.weeks > 0 ? { color: c } : {} },
                            React.createElement(Flame, { size: 11 }),
                            " ",
                            ws.weeks,
                            " ",
                            ws.weeks === 1 ? "Woche" : "Wochen"),
                        React.createElement("span", null,
                            ds,
                            " ",
                            ds === 1 ? "Tag" : "Tage",
                            " am St\u00FCck"),
                        ws.jokerUsed && React.createElement("span", null, "Joker"))));
            }))));
}
function TemplatePanel({ template, onApply, onSaveWeek, onRemove, onToggleAuto }) {
    const byDay = DAY_NAMES.map((_, i) => template.filter((t) => t.weekday === i).sort((a, b) => a.start - b.start));
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-3" },
        React.createElement("p", { className: "mono text-xs pl-muted leading-relaxed" }, "Dein Wochenger\u00FCst. Eintr\u00E4ge mit Haken erscheinen automatisch in jeder neuen Woche."),
        React.createElement("div", { className: "flex gap-2" },
            React.createElement("button", { onClick: onSaveWeek, className: "pl-btn flex-1 px-2 py-1.5 rounded mono text-xs" }, "Diese Woche sichern"),
            React.createElement("button", { onClick: onApply, className: "flex-1 px-2 py-1.5 rounded mono text-xs", style: { background: "var(--ink)", color: "var(--paper)" } }, "Jetzt anwenden")),
        template.length === 0 ? (React.createElement("p", { className: "mono text-xs pl-muted border-t pl-hair pt-2" }, "Noch keine Vorlage. Plane eine Woche so, wie sie normalerweise aussehen soll, und tippe auf \u201EDiese Woche sichern\".")) : (React.createElement("div", { className: "border-t pl-hair pt-2 flex flex-col gap-2" }, byDay.map((entries, i) => entries.length === 0 ? null : (React.createElement("div", { key: i },
            React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, DAY_NAMES[i]),
            React.createElement("div", { className: "flex flex-col gap-1" }, entries.map((t) => {
                var _a, _b;
                return (React.createElement("div", { key: t.id, className: "flex items-center gap-2 group" },
                    React.createElement("button", { onClick: () => onToggleAuto(t.id), className: "w-4 h-4 rounded-sm shrink-0 flex items-center justify-center", style: {
                            background: t.auto ? (_a = CATS[t.cat]) === null || _a === void 0 ? void 0 : _a.color : "transparent",
                            border: `1px solid ${t.auto ? (_b = CATS[t.cat]) === null || _b === void 0 ? void 0 : _b.color : "var(--line)"}`,
                        }, "aria-label": "Automatisch \u00FCbernehmen" }, t.auto && React.createElement(Check, { size: 11, color: "#FFF" })),
                    React.createElement("span", { className: "mono text-xs pl-muted shrink-0" }, minsToLabel(t.start)),
                    React.createElement("span", { className: "text-sm truncate flex-1" }, t.title),
                    React.createElement("span", { className: "mono text-xs pl-muted" }, durLabel(t.dur)),
                    React.createElement("button", { onClick: () => onRemove(t.id), className: "pl-muted opacity-0 group-hover:opacity-100", "aria-label": "Aus Vorlage entfernen" },
                        React.createElement(Trash2, { size: 12 }))));
            })))))))));
}
function ProjectPanel({ projects, stats, onAdd, onRemove, onTarget, onPlan }) {
    const [title, setTitle] = useState("");
    const [cat, setCat] = useState("arbeit");
    const [target, setTarget] = useState(240);
    const submit = () => {
        if (!title.trim())
            return;
        onAdd(title.trim(), cat, target);
        setTitle("");
    };
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-3" },
        React.createElement("p", { className: "mono text-xs pl-muted leading-relaxed" }, "F\u00FCr Vorhaben, die nie \u201Efertig\" sind. Setz ein Wochenziel \u2014 dann siehst du, was liegen bleibt."),
        React.createElement("div", { className: "flex flex-col gap-2" },
            React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), onKeyDown: (e) => e.key === "Enter" && submit(), placeholder: "z. B. Tutoring aufbauen", className: "pl-input px-2 py-1.5 rounded text-sm" }),
            React.createElement(CatPicker, { value: cat, onChange: setCat }),
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("span", { className: "mono text-xs pl-muted" }, "Ziel/Woche"),
                React.createElement("div", { className: "flex items-center" },
                    React.createElement("button", { onClick: () => setTarget(Math.max(60, target - 60)), className: "pl-btn px-2 py-1 rounded-l" }, "\u2212"),
                    React.createElement("span", { className: "mono text-xs px-2 py-1 border-t border-b", style: { borderColor: "var(--line)", background: "var(--card)" } }, durLabel(target)),
                    React.createElement("button", { onClick: () => setTarget(Math.min(40 * 60, target + 60)), className: "pl-btn px-2 py-1 rounded-r" }, "+")),
                React.createElement("button", { onClick: submit, className: "pl-btn ml-auto px-2.5 py-1 rounded flex items-center gap-1 mono text-xs" },
                    React.createElement(Plus, { size: 13 }),
                    " Anlegen"))),
        React.createElement("div", { className: "border-t pl-hair pt-3 flex flex-col gap-3" },
            projects.length === 0 && (React.createElement("p", { className: "mono text-xs pl-muted" }, "Noch keine Projekte. Gute Kandidaten: Sachen, die du \u00FCber Wochen verfolgst und bei denen eine einzelne Aufgabe nicht reicht.")),
            projects.map((p) => {
                var _a;
                const st = stats[p.id] || { planned: 0, done: 0 };
                const c = ((_a = CATS[p.cat]) === null || _a === void 0 ? void 0 : _a.color) || "#6F7A72";
                const donePct = Math.min(100, (st.done / p.target) * 100);
                const planPct = Math.min(100, (st.planned / p.target) * 100);
                const rest = Math.max(0, p.target - st.planned);
                return (React.createElement("div", { key: p.id, className: "group" },
                    React.createElement("div", { className: "flex items-baseline gap-2 mb-1" },
                        React.createElement("span", { className: "w-1.5 h-1.5 rounded-full shrink-0", style: { background: c } }),
                        React.createElement("span", { className: "text-sm truncate flex-1" }, p.title),
                        React.createElement("span", { className: "mono text-xs pl-muted" },
                            durLabel(st.done),
                            " / ",
                            durLabel(p.target))),
                    React.createElement("div", { className: "h-2.5 rounded-full relative overflow-hidden mb-1", style: { background: hexA(c, 0.12) } },
                        React.createElement("div", { className: "absolute inset-y-0 left-0 rounded-full pl-bar", style: { width: `${planPct}%`, background: hexA(c, 0.4) } }),
                        React.createElement("div", { className: "absolute inset-y-0 left-0 rounded-full pl-bar", style: { width: `${donePct}%`, background: c } })),
                    React.createElement("div", { className: "flex items-center gap-2" },
                        React.createElement("span", { className: "mono text-xs pl-muted flex-1" }, rest > 0 ? `${durLabel(rest)} noch nicht verplant` : "Ziel verplant"),
                        React.createElement("div", { className: "flex items-center opacity-60 group-hover:opacity-100" },
                            React.createElement("button", { onClick: () => onTarget(p.id, Math.max(60, p.target - 60)), className: "mono text-xs px-1.5 pl-muted", "aria-label": "Ziel senken" }, "\u2212"),
                            React.createElement("button", { onClick: () => onTarget(p.id, p.target + 60), className: "mono text-xs px-1.5 pl-muted", "aria-label": "Ziel erh\u00F6hen" }, "+")),
                        React.createElement("button", { onClick: () => onPlan({ title: p.title, cat: p.cat, est: 90, projectId: p.id }), className: "pl-btn mono text-xs px-1.5 py-0.5 rounded" }, "einplanen"),
                        React.createElement("button", { onClick: () => onRemove(p.id), className: "pl-muted opacity-0 group-hover:opacity-100", "aria-label": "Projekt l\u00F6schen" },
                            React.createElement(Trash2, { size: 12 })))));
            }))));
}
function YearGrid({ weeks, onPick }) {
    const shade = (q) => {
        if (q === null)
            return "#DCE0DA";
        if (q >= 0.85)
            return "#1E6E5A";
        if (q >= 0.6)
            return "#3F8A6E";
        if (q >= 0.35)
            return "#7FA894";
        if (q > 0)
            return "#B6C7BC";
        return "#DCE0DA";
    };
    const rows = [0, 1, 2, 3].map((r) => weeks.slice(r * 13, r * 13 + 13));
    return (React.createElement("div", null,
        React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "Letzte 52 Wochen"),
        React.createElement("div", { className: "flex flex-col gap-1" }, rows.map((row, ri) => (React.createElement("div", { key: ri, className: "flex items-center gap-1" },
            React.createElement("span", { className: "mono text-xs pl-muted w-10 shrink-0" }, row[0] ? `${pad(row[0].date.getDate())}.${pad(row[0].date.getMonth() + 1)}` : ""),
            row.map((w) => (React.createElement("button", { key: w.key, onClick: () => onPick(w.date), className: "flex-1 rounded-sm", title: `${pad(w.date.getDate())}.${pad(w.date.getMonth() + 1)} · ${w.quote === null ? "nichts geplant" : Math.round(w.quote * 100) + "%"}`, style: {
                    height: 15,
                    background: shade(w.quote),
                    border: w.isCurrent ? "1.5px solid var(--ink)" : "1px solid transparent",
                }, "aria-label": `Woche vom ${w.key}` }))))))),
        React.createElement("div", { className: "flex items-center gap-1.5 mt-2 mono text-xs pl-muted" },
            React.createElement("span", null, "wenig"),
            [null, 0.2, 0.5, 0.7, 0.95].map((q, i) => (React.createElement("span", { key: i, className: "rounded-sm", style: { width: 11, height: 11, background: shade(q) } }))),
            React.createElement("span", null, "viel"))));
}
function CatPanel({ cats, onField, onAdd, onRemove }) {
    const [neu, setNeu] = useState("");
    const [farbe, setFarbe] = useState(PALETTE[0]);
    const [offen, setOffen] = useState(null);
    const keys = Object.keys(cats);
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-3" },
        React.createElement("div", { className: "mono text-xs pl-muted" }, "Kategorien"),
        React.createElement("div", { className: "flex flex-col gap-2" }, keys.map((k) => (React.createElement("div", { key: k },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("button", { onClick: () => setOffen(offen === k ? null : k), className: "w-6 h-6 rounded-sm shrink-0", style: { background: cats[k].color, border: "1px solid rgba(0,0,0,.15)" }, "aria-label": "Farbe \u00E4ndern" }),
                React.createElement("input", { value: cats[k].label, onChange: (e) => onField(k, "label", e.target.value), className: "pl-input px-2 py-1 rounded text-sm flex-1" }),
                keys.length > 1 && (React.createElement("button", { onClick: () => onRemove(k), className: "pl-muted px-1", "aria-label": "Kategorie l\u00F6schen" },
                    React.createElement(Trash2, { size: 13 })))),
            offen === k && (React.createElement("div", { className: "pl-rise grid gap-1 mt-2 pl-8", style: { gridTemplateColumns: "repeat(8,1fr)" } }, PALETTE.map((c) => (React.createElement("button", { key: c, onClick: () => { onField(k, "color", c); setOffen(null); }, className: "rounded-sm", style: {
                    height: 22, background: c,
                    border: cats[k].color === c ? "2px solid var(--ink)" : "1px solid rgba(0,0,0,.12)",
                }, "aria-label": c }))))))))),
        React.createElement("div", { className: "border-t pl-hair pt-2 flex flex-col gap-2" },
            React.createElement("div", { className: "flex items-center gap-2" },
                React.createElement("span", { className: "w-6 h-6 rounded-sm shrink-0", style: { background: farbe, border: "1px solid rgba(0,0,0,.15)" } }),
                React.createElement("input", { value: neu, onChange: (e) => setNeu(e.target.value), onKeyDown: (e) => { if (e.key === "Enter" && neu.trim()) {
                        onAdd(neu.trim(), farbe);
                        setNeu("");
                    } }, placeholder: "Neue Kategorie", className: "pl-input px-2 py-1 rounded text-sm flex-1" }),
                React.createElement("button", { onClick: () => { if (neu.trim()) {
                        onAdd(neu.trim(), farbe);
                        setNeu("");
                    } }, className: "pl-btn px-2 rounded", "aria-label": "Anlegen" },
                    React.createElement(Plus, { size: 14 }))),
            React.createElement("div", { className: "grid gap-1", style: { gridTemplateColumns: "repeat(12,1fr)" } }, PALETTE.map((c) => (React.createElement("button", { key: c, onClick: () => setFarbe(c), className: "rounded-sm", style: {
                    height: 18, background: c,
                    border: farbe === c ? "2px solid var(--ink)" : "1px solid rgba(0,0,0,.12)",
                }, "aria-label": c })))))));
}
function StatusButtons({ onPick, current, size = "sm" }) {
    const opts = [
        { k: "done", icon: Check, color: "#1E6E5A", label: "gemacht" },
        { k: "moved", icon: ArrowRight, color: "#8A4E1C", label: "verschoben" },
        { k: "skipped", icon: X, color: "#A03A5E", label: "ausgefallen" },
    ];
    const pick = (k) => {
        if (k === "done")
            buzz(14);
        else if (k)
            buzz(8);
        onPick(k);
    };
    return (React.createElement("div", { className: "flex gap-1" }, opts.map((o) => {
        const on = current === o.k;
        return (React.createElement("button", { key: o.k, onClick: () => pick(on ? null : o.k), className: `pl-btn rounded flex items-center justify-center gap-1 mono text-xs ${size === "sm" ? "px-1.5 py-1" : "px-2.5 py-1.5 flex-1"} ${on && o.k === "done" ? "pl-glow" : ""}`, style: on ? { background: o.color, color: "#FFF", borderColor: o.color } : { color: o.color, borderColor: "var(--line)" }, "aria-label": o.label },
            React.createElement(o.icon, { size: 13 }),
            size === "lg" && o.label));
    })));
}
function Metric({ label, value, color }) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "mono text-xs pl-muted" }, label),
        React.createElement("div", { className: "mono text-sm font-medium", style: color ? { color } : {} }, value)));
}
function ReviewPanel({ stats, routines, yearGrid = [], onPickWeek, onStatus, onDemo, onReset, onConfetti }) {
    const [confirm, setConfirm] = useState(null);
    const { planned, done, skipped, byCat, pending, routineCount } = stats;
    const quote = planned ? Math.round((done / planned) * 100) : 0;
    const cats = Object.keys(byCat).sort((a, b) => byCat[b].planned - byCat[a].planned);
    return (React.createElement("div", { className: "pl-card rounded p-3 flex flex-col gap-4" },
        pending.length > 0 && (React.createElement("div", null,
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" },
                "Warten auf R\u00FCckmeldung (",
                pending.length,
                ")"),
            React.createElement("div", { className: "flex flex-col gap-1.5" }, pending.slice(0, 8).map((b) => {
                var _a;
                return (React.createElement("div", { key: b.id, className: "flex items-center gap-2" },
                    React.createElement("span", { className: "w-1.5 h-1.5 rounded-full shrink-0", style: { background: (_a = CATS[b.cat]) === null || _a === void 0 ? void 0 : _a.color } }),
                    React.createElement("span", { className: "mono text-xs pl-muted shrink-0" },
                        DAY_NAMES[(new Date(b.day + "T00:00:00").getDay() + 6) % 7],
                        " ",
                        minsToLabel(b.start)),
                    React.createElement("span", { className: "text-sm truncate flex-1" }, b.title),
                    React.createElement(StatusButtons, { current: b.status, onPick: (s) => onStatus(b.id, s) })));
            })))),
        React.createElement("div", { className: pending.length > 0 ? "border-t pl-hair pt-3" : "" },
            React.createElement("div", { className: "flex items-baseline justify-between mb-2" },
                React.createElement("span", { className: "mono text-xs pl-muted" }, "Diese Woche"),
                React.createElement("span", { className: "mono text-2xl font-medium", style: { color: quote >= 70 ? "#1E6E5A" : quote >= 40 ? "#8A4E1C" : "#A03A5E" } },
                    quote,
                    "%")),
            React.createElement("div", { className: "grid grid-cols-3 gap-2 mb-3" },
                React.createElement(Metric, { label: "geplant", value: durLabel(planned) }),
                React.createElement(Metric, { label: "gemacht", value: durLabel(done), color: "#1E6E5A" }),
                React.createElement(Metric, { label: "ausgefallen", value: durLabel(skipped), color: "#A03A5E" })),
            cats.length === 0 ? (React.createElement("p", { className: "mono text-xs pl-muted" }, "Noch nichts geplant. Sobald Bl\u00F6cke im Raster stehen, siehst du hier, wie viel davon wirklich passiert ist.")) : (React.createElement("div", { className: "flex flex-col gap-2" }, cats.map((c) => {
                var _a, _b, _c;
                const p = byCat[c].planned, d = byCat[c].done;
                return (React.createElement("div", { key: c },
                    React.createElement("div", { className: "flex items-baseline justify-between mb-1" },
                        React.createElement("span", { className: "text-sm" }, ((_a = CATS[c]) === null || _a === void 0 ? void 0 : _a.label) || c),
                        React.createElement("span", { className: "mono text-xs pl-muted" },
                            durLabel(d),
                            " / ",
                            durLabel(p))),
                    React.createElement("div", { className: "h-2 rounded-full overflow-hidden", style: { background: hexA(((_b = CATS[c]) === null || _b === void 0 ? void 0 : _b.color) || "#6F7A72", 0.16) } },
                        React.createElement("div", { className: "h-2 rounded-full pl-bar", style: { width: `${p ? (d / p) * 100 : 0}%`, background: (_c = CATS[c]) === null || _c === void 0 ? void 0 : _c.color } }))));
            })))),
        yearGrid.length > 0 && (React.createElement("div", { className: "border-t pl-hair pt-3" },
            React.createElement(YearGrid, { weeks: yearGrid, onPick: onPickWeek }))),
        routines.length > 0 && (React.createElement("div", { className: "border-t pl-hair pt-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "Routinen"),
            React.createElement("div", { className: "flex flex-col gap-1" }, routines.map((r) => {
                var _a;
                return (React.createElement("div", { key: r.id, className: "flex items-center gap-2" },
                    React.createElement("span", { className: "w-1.5 h-1.5 rounded-full shrink-0", style: { background: (_a = CATS[r.cat]) === null || _a === void 0 ? void 0 : _a.color } }),
                    React.createElement("span", { className: "text-sm truncate flex-1" }, r.title),
                    React.createElement("div", { className: "flex gap-0.5" }, Array.from({ length: 7 }, (_, i) => {
                        var _a;
                        return (React.createElement("span", { key: i, className: "w-1.5 h-1.5 rounded-full", style: { background: i < (routineCount[r.id] || 0) ? (_a = CATS[r.cat]) === null || _a === void 0 ? void 0 : _a.color : "var(--line)" } }));
                    })),
                    React.createElement("span", { className: "mono text-xs pl-muted w-6 text-right" },
                        routineCount[r.id] || 0,
                        "\u00D7")));
            })))),
        React.createElement("div", { className: "border-t pl-hair pt-3" },
            React.createElement("div", { className: "mono text-xs pl-muted mb-2" }, "Ausprobieren"),
            React.createElement("div", { className: "flex flex-wrap gap-1" },
                React.createElement("button", { onClick: onConfetti, className: "pl-btn px-2 py-1 rounded mono text-xs" }, "Konfetti"),
                React.createElement("button", { onClick: () => setConfirm(confirm === "demo" ? null : "demo"), className: "pl-btn px-2 py-1 rounded mono text-xs" }, "Beispieldaten"),
                React.createElement("button", { onClick: () => setConfirm(confirm === "reset" ? null : "reset"), className: "pl-btn px-2 py-1 rounded mono text-xs", style: { color: "#A03A5E" } }, "Zur\u00FCcksetzen")),
            confirm && (React.createElement("div", { className: "pl-rise mt-2 flex items-center gap-2" },
                React.createElement("span", { className: "mono text-xs flex-1", style: { color: "#A03A5E" } }, confirm === "demo"
                    ? "Ersetzt alles, was du bisher eingetragen hast."
                    : "Löscht alle Blöcke, Projekte, Routinen und Vorlagen."),
                React.createElement("button", { onClick: () => { if (confirm === "demo") {
                        onDemo();
                    }
                    else {
                        onReset();
                    } setConfirm(null); }, className: "px-2 py-1 rounded mono text-xs", style: { background: "#A03A5E", color: "#FFF" } }, "Ja, machen"),
                React.createElement("button", { onClick: () => setConfirm(null), className: "pl-btn px-2 py-1 rounded mono text-xs" }, "Abbrechen"))))));
}
/* ════════════════ Einplanen ════════════════ */
function slotSuggestions(gaps, dur) {
    const out = [];
    for (const g of gaps) {
        const end = g.start + g.dur;
        if (g.dur < dur)
            continue;
        let t = g.start;
        while (t + dur <= end) {
            out.push({ start: t, gapEnd: end });
            t = t % 30 === 0 ? t + 30 : Math.ceil(t / 30) * 30;
        }
    }
    return out.sort((a, b) => a.start - b.start);
}
function ScheduleSheet({ item, weekStart: initialWeek, todayKey, gapsFor, blocksFor, onConfirm, onManual, onClose }) {
    var _a, _b, _c;
    const [dur, setDur] = useState(item.est || 60);
    const [week, setWeek] = useState(initialWeek);
    const [day, setDay] = useState(() => {
        const keys = Array.from({ length: 7 }, (_, i) => dayKey(addDays(initialWeek, i)));
        return keys.includes(todayKey) ? todayKey : keys[0];
    });
    const [showAll, setShowAll] = useState(false);
    const [custom, setCustom] = useState(null);
    const days = useMemo(() => Array.from({ length: 7 }, (_, i) => addDays(week, i)), [week]);
    const suggestions = useMemo(() => slotSuggestions(gapsFor(day), dur), [day, dur, gapsFor]);
    const shown = showAll ? suggestions : suggestions.slice(0, 8);
    const c = ((_a = CATS[item.cat]) === null || _a === void 0 ? void 0 : _a.color) || "#6F7A72";
    const jumpWeek = (dir) => {
        const nw = addDays(week, dir * 7);
        setWeek(nw);
        setDay(dayKey(addDays(nw, (new Date(day + "T00:00:00").getDay() + 6) % 7)));
        setShowAll(false);
        setCustom(null);
    };
    const customStart = custom !== null && custom !== void 0 ? custom : ((_c = (_b = suggestions[0]) === null || _b === void 0 ? void 0 : _b.start) !== null && _c !== void 0 ? _c : 9 * 60);
    const conflict = useMemo(() => blocksFor(day).some((b) => customStart < b.start + b.dur && customStart + dur > b.start), [blocksFor, day, customStart, dur]);
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, []);
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6", style: { background: "rgba(25,29,26,.4)" }, onClick: onClose },
        React.createElement("div", { className: "pl-sheet pl-rise w-full md:max-w-md rounded-t-lg md:rounded-lg flex flex-col", style: { maxHeight: "90vh" }, onClick: (e) => e.stopPropagation() },
            React.createElement("div", { className: "shrink-0 p-4 pb-3 flex flex-col gap-3" },
                React.createElement("div", { className: "flex items-start justify-between gap-2" },
                    React.createElement("div", { className: "min-w-0" },
                        React.createElement("div", { className: "mono text-xs pl-muted" }, "Einplanen"),
                        React.createElement("div", { className: "text-lg font-medium truncate", style: { color: c } }, item.title)),
                    React.createElement("button", { onClick: onClose, className: "pl-muted shrink-0 p-1", "aria-label": "Schlie\u00DFen" },
                        React.createElement(X, { size: 18 }))),
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement("span", { className: "mono text-xs pl-muted" }, "Dauer"),
                    React.createElement("div", { className: "flex gap-1 flex-1" }, [30, 60, 90, 120, 180].map((m) => (React.createElement("button", { key: m, onClick: () => { setDur(m); setShowAll(false); }, className: "pl-btn flex-1 py-1.5 rounded mono text-xs", style: dur === m ? { background: c, color: "#FFF", borderColor: c } : {} }, m >= 60 ? `${m / 60}h` : `${m}m`))))),
                React.createElement("div", null,
                    React.createElement("div", { className: "flex items-center justify-between mb-1" },
                        React.createElement("button", { onClick: () => jumpWeek(-1), className: "pl-btn px-2 py-1 rounded", "aria-label": "Woche zur\u00FCck" },
                            React.createElement(ChevronLeft, { size: 14 })),
                        React.createElement("span", { className: "mono text-xs pl-muted" },
                            "KW ",
                            isoWeek(week),
                            " \u00B7 ",
                            week.getDate(),
                            ".",
                            pad(week.getMonth() + 1),
                            "."),
                        React.createElement("button", { onClick: () => jumpWeek(1), className: "pl-btn px-2 py-1 rounded", "aria-label": "Woche vor" },
                            React.createElement(ChevronRight, { size: 14 }))),
                    React.createElement("div", { className: "grid grid-cols-7 gap-1" }, days.map((d, i) => {
                        const k = dayKey(d);
                        const on = k === day;
                        const free = slotSuggestions(gapsFor(k), dur).length;
                        return (React.createElement("button", { key: k, onClick: () => { setDay(k); setShowAll(false); setCustom(null); }, className: "py-1.5 rounded text-center", style: {
                                background: on ? c : "transparent",
                                color: on ? "#FFF" : free ? "var(--ink)" : "var(--muted)",
                                border: `1px solid ${on ? c : k === todayKey ? "var(--muted)" : "var(--line)"}`,
                                opacity: free ? 1 : 0.45,
                            } },
                            React.createElement("div", { className: "mono text-xs" }, DAY_NAMES[i]),
                            React.createElement("div", { className: "mono text-sm" }, d.getDate())));
                    })))),
            React.createElement("div", { className: "pl-scroll overscroll-contain flex-1 min-h-0 overflow-y-auto px-4" },
                React.createElement("div", { className: "mono text-xs pl-muted mb-1" },
                    "Freie Startzeiten ",
                    suggestions.length > 0 && `(${suggestions.length})`),
                suggestions.length === 0 ? (React.createElement("p", { className: "mono text-xs pl-muted py-2" },
                    "An diesem Tag ist kein Fenster von ",
                    durLabel(dur),
                    " frei. W\u00E4hl einen anderen Tag oder eine k\u00FCrzere Dauer \u2014 oder stell unten eine Zeit von Hand ein.")) : (React.createElement("div", { className: "grid grid-cols-2 gap-1 pb-1" },
                    shown.map((s) => (React.createElement("button", { key: s.start, onClick: () => onConfirm(day, s.start, dur), className: "pl-btn px-2 py-2 rounded text-left shrink-0" },
                        React.createElement("div", { className: "mono text-sm font-medium" }, minsToLabel(s.start)),
                        React.createElement("div", { className: "mono text-xs pl-muted" },
                            "bis ",
                            minsToLabel(s.start + dur))))),
                    suggestions.length > shown.length && (React.createElement("button", { onClick: () => setShowAll(true), className: "mono text-xs pl-muted py-2 col-span-2" },
                        suggestions.length - shown.length,
                        " weitere anzeigen"))))),
            React.createElement("div", { className: "shrink-0 p-4 pt-3 border-t pl-hair flex flex-col gap-2" },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(TimeField, { value: customStart, onChange: setCustom, color: c }),
                    React.createElement("button", { onClick: () => onConfirm(day, customStart, dur), className: "ml-auto px-4 py-2 rounded mono text-xs", style: { background: c, color: "#FFF" } }, "Setzen")),
                React.createElement("div", { className: "mono text-xs pl-muted" }, "Zeit antippen und direkt eintippen, z. B. 1430"),
                conflict && (React.createElement("div", { className: "mono text-xs", style: { color: "#8A4E1C" } }, "\u00DCberschneidet sich mit etwas \u2014 geht trotzdem, liegt dann \u00FCbereinander.")),
                React.createElement("button", { onClick: () => onManual(dur), className: "pl-btn w-full px-3 py-2 rounded mono text-xs" }, "Lieber selbst ins Raster tippen")))));
}
/* ════════════════ Zeitfeld ════════════════ */
function parseTime(raw) {
    const t = String(raw).trim().replace(/[.,\s]/g, ":");
    let h, m;
    if (t.includes(":")) {
        const [a, b] = t.split(":");
        h = parseInt(a, 10);
        m = parseInt(b || "0", 10);
    }
    else if (/^\d{3,4}$/.test(t)) {
        h = parseInt(t.slice(0, t.length - 2), 10);
        m = parseInt(t.slice(-2), 10);
    }
    else if (/^\d{1,2}$/.test(t)) {
        h = parseInt(t, 10);
        m = 0;
    }
    else
        return null;
    if (isNaN(h) || isNaN(m) || h < 0 || h > 23 || m < 0 || m > 59)
        return null;
    return h * 60 + m;
}
function TimeField({ value, onChange, color = "var(--ink)", step = SLOT }) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState("");
    const [dir, setDir] = useState("up");
    const inputRef = useRef(null);
    useEffect(() => { var _a; if (editing)
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }, [editing]);
    const bump = (delta) => {
        setDir(delta > 0 ? "up" : "down");
        onChange(Math.max(0, Math.min(23 * 60 + 45, value + delta)));
        buzz(6);
    };
    const finish = () => {
        const parsed = parseTime(draft);
        if (parsed !== null) {
            setDir(parsed >= value ? "up" : "down");
            onChange(parsed);
            buzz(10);
        }
        setEditing(false);
    };
    const hh = pad(Math.floor(value / 60));
    const mm = pad(value % 60);
    const roll = dir === "up" ? "pl-roll-up" : "pl-roll-down";
    return (React.createElement("div", { className: "flex items-center" },
        React.createElement("button", { onClick: () => bump(-step), className: "pl-btn px-2.5 py-2 rounded-l", "aria-label": "fr\u00FCher" }, "\u2212"),
        editing ? (React.createElement("input", { ref: inputRef, value: draft, inputMode: "numeric", onChange: (e) => setDraft(e.target.value), onBlur: finish, onKeyDown: (e) => { if (e.key === "Enter")
                finish(); if (e.key === "Escape")
                setEditing(false); }, placeholder: "14:30", className: "mono text-lg text-center border-t border-b", style: {
                width: 96, padding: "6px 0", background: "var(--card)",
                borderColor: color, color, outline: "none",
            } })) : (React.createElement("button", { onClick: () => { setDraft(`${hh}:${mm}`); setEditing(true); }, className: "mono text-lg border-t border-b flex items-center justify-center gap-0.5", style: {
                width: 96, padding: "6px 0", background: "var(--card)",
                borderColor: "var(--line)", color,
            }, title: "Antippen zum Eingeben" },
            React.createElement("span", { className: "pl-digits" },
                React.createElement("span", { key: hh, className: roll }, hh)),
            React.createElement("span", { className: "pl-muted" }, ":"),
            React.createElement("span", { className: "pl-digits" },
                React.createElement("span", { key: mm, className: roll }, mm)))),
        React.createElement("button", { onClick: () => bump(step), className: "pl-btn px-2.5 py-2 rounded-r", "aria-label": "sp\u00E4ter" }, "+")));
}
/* ════════════════ Termin-Detail ════════════════ */
function relTime(block, now) {
    const base = new Date(block.day + "T00:00:00");
    const start = new Date(base);
    start.setMinutes(block.start);
    const end = new Date(base);
    end.setMinutes(block.start + block.dur);
    const ms = start - now;
    if (now >= start && now < end) {
        return { label: `läuft · noch ${durLabel(Math.round((end - now) / 60000))}`, live: true };
    }
    if (ms > 0) {
        const m = Math.round(ms / 60000);
        if (m < 60)
            return { label: `beginnt in ${m} min` };
        if (m < 60 * 24)
            return { label: `beginnt in ${durLabel(m)}` };
        return { label: `in ${Math.round(m / 60 / 24)} Tagen` };
    }
    const m = Math.round((now - end) / 60000);
    if (m < 60)
        return { label: `vor ${m} min vorbei`, past: true };
    if (m < 60 * 24)
        return { label: `vor ${durLabel(m)} vorbei`, past: true };
    return { label: `vor ${Math.round(m / 60 / 24)} Tagen`, past: true };
}
function BlockDetail({ block, now, projects, onClose, onEdit, onStatus, onDelete, onSync, onSave, onFocus, syncing }) {
    var _a, _b, _c;
    const [confirmDel, setConfirmDel] = useState(false);
    const c = blockColor(block);
    const d = new Date(block.day + "T00:00:00");
    const rel = relTime(block, now);
    const project = projects.find((p) => p.id === block.projectId);
    const MONTHS = ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, []);
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6", style: { background: "rgba(25,29,26,.42)" }, onClick: onClose },
        React.createElement("div", { className: "pl-sheet pl-zoom pl-scroll overscroll-contain w-full md:max-w-md rounded-t-lg md:rounded-lg overflow-y-auto", style: { maxHeight: "88vh" }, onClick: (e) => e.stopPropagation() },
            React.createElement("div", { style: { background: hexA(c, 0.14), borderBottom: `2px solid ${c}` }, className: "px-5 pt-4 pb-4" },
                React.createElement("div", { className: "flex items-start justify-between gap-3" },
                    React.createElement("div", { className: "min-w-0" },
                        React.createElement("div", { className: "mono text-xs uppercase tracking-widest", style: { color: c } }, block.external ? "aus Google Kalender" : (_a = CATS[block.cat]) === null || _a === void 0 ? void 0 : _a.label),
                        React.createElement("h2", { className: "text-2xl font-semibold leading-tight mt-0.5 break-words" }, block.title || "Ohne Titel")),
                    React.createElement("button", { onClick: onClose, className: "pl-muted shrink-0 p-1", "aria-label": "Schlie\u00DFen" },
                        React.createElement(X, { size: 20 }))),
                block.external ? (React.createElement("div", { className: "mono text-3xl font-medium mt-3", style: { color: c } }, block.allDay ? "ganztägig"
                    : React.createElement(React.Fragment, null,
                        minsToLabel(block.start),
                        React.createElement("span", { className: "pl-muted" }, " \u2013 "),
                        minsToLabel(block.start + block.dur)))) : (React.createElement("div", { className: "mt-3 flex flex-wrap items-end gap-3" },
                    React.createElement("div", null,
                        React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Beginn"),
                        React.createElement(TimeField, { value: block.start, onChange: (v) => onSave({ start: v }), color: c })),
                    React.createElement("div", null,
                        React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Dauer"),
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("button", { onClick: () => onSave({ dur: Math.max(15, block.dur - SLOT) }), className: "pl-btn px-2.5 py-2 rounded-l", "aria-label": "k\u00FCrzer" }, "\u2212"),
                            React.createElement("span", { className: "mono text-lg border-t border-b flex items-center justify-center", style: { width: 76, padding: "6px 0", background: "var(--card)", borderColor: "var(--line)" } }, durLabel(block.dur)),
                            React.createElement("button", { onClick: () => onSave({ dur: Math.min(8 * 60, block.dur + SLOT) }), className: "pl-btn px-2.5 py-2 rounded-r", "aria-label": "l\u00E4nger" }, "+"))))),
                React.createElement("div", { className: "mono text-xs pl-muted mt-2" },
                    DAY_NAMES[(d.getDay() + 6) % 7],
                    ", ",
                    d.getDate(),
                    ". ",
                    MONTHS[d.getMonth()],
                    block.external || block.allDay ? "" : " · endet " + minsToLabel(block.start + block.dur)),
                React.createElement("div", { className: "mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mono text-xs", style: {
                        background: rel.live ? c : "var(--card)",
                        color: rel.live ? "#FFF" : "var(--muted)",
                        border: `1px solid ${rel.live ? c : "var(--line)"}`,
                    } },
                    rel.live && React.createElement("span", { className: "pl-pulse w-1.5 h-1.5 rounded-full", style: { background: "#FFF" } }),
                    rel.label)),
            React.createElement("div", { className: "p-5 flex flex-col gap-4" },
                (project || block.tplId || block.synced || block.external) && (React.createElement("div", { className: "flex flex-wrap gap-1.5" },
                    project && (React.createElement("span", { className: "px-2 py-1 rounded mono text-xs", style: { border: `1px solid ${(_b = CATS[project.cat]) === null || _b === void 0 ? void 0 : _b.color}`, color: (_c = CATS[project.cat]) === null || _c === void 0 ? void 0 : _c.color } }, project.title)),
                    block.tplId && (React.createElement("span", { className: "pl-btn px-2 py-1 rounded mono text-xs flex items-center gap-1" },
                        React.createElement(Repeat, { size: 11 }),
                        " jede Woche")),
                    block.synced && (React.createElement("span", { className: "px-2 py-1 rounded mono text-xs flex items-center gap-1", style: { border: "1px solid #1E6E5A", color: "#1E6E5A" } },
                        React.createElement(Check, { size: 11 }),
                        " im Kalender")))),
                !block.external && (React.createElement(React.Fragment, null,
                    React.createElement("div", null,
                        React.createElement("div", { className: "mono text-xs pl-muted mb-1.5" }, "Wie ist es gelaufen?"),
                        React.createElement(StatusButtons, { current: block.status, size: "lg", onPick: (s) => onStatus(s) })),
                    React.createElement("div", { className: "flex items-center gap-2 pt-1" },
                        onFocus && (React.createElement("button", { onClick: () => onFocus(block), className: "px-3 py-2.5 rounded mono text-xs flex items-center gap-1.5", style: { background: c, color: "#FFF" } },
                            React.createElement(Timer, { size: 13 }),
                            " Fokus")),
                        React.createElement("button", { onClick: onEdit, className: "flex-1 px-3 py-2.5 rounded mono text-xs", style: block.title
                                ? { background: "var(--ink)", color: "var(--paper)" }
                                : { background: c, color: "#FFF" } }, block.title ? "Titel & Kategorie" : "Titel eintragen"),
                        React.createElement("button", { onClick: onSync, disabled: syncing || block.synced, className: "pl-btn px-3 py-2.5 rounded flex items-center gap-1.5 mono text-xs", style: block.synced ? { color: "#1E6E5A", borderColor: "#1E6E5A" } : {} },
                            React.createElement(UploadCloud, { size: 13 }),
                            block.synced ? "gesichert" : "Kalender"),
                        React.createElement("button", { onClick: () => { if (confirmDel) {
                                onDelete();
                            }
                            else {
                                setConfirmDel(true);
                            } }, className: "pl-btn px-3 py-2.5 rounded flex items-center gap-1.5 mono text-xs", style: confirmDel
                                ? { background: "#A03A5E", color: "#FFF", borderColor: "#A03A5E" }
                                : { color: "#A03A5E", borderColor: "#A03A5E" } },
                            React.createElement(Trash2, { size: 13 }),
                            confirmDel && "sicher?")))),
                block.external && (React.createElement("p", { className: "mono text-xs pl-muted" }, "Dieser Termin kommt aus deinem Google Kalender und l\u00E4sst sich hier nicht \u00E4ndern."))))));
}
/* ════════════════ Block-Editor ════════════════ */
function BlockEditor({ block, onClose, onSave, onDelete, onSync, onRepeat, projects = [], syncing }) {
    var _a;
    const [title, setTitle] = useState(block.title || "");
    const [cat, setCat] = useState(block.cat || "fokus");
    const [start, setStart] = useState(block.start);
    const [dur, setDur] = useState(block.dur);
    /* Alles wird sofort gesichert - Schliessen darf nichts verlieren */
    const saveTitle = () => onSave({ title: title.trim() || "Ohne Titel" });
    const setCatLive = (v) => { setCat(v); onSave({ cat: v }); };
    const setStartLive = (v) => { setStart(v); onSave({ start: v }); };
    const setDurLive = (v) => { setDur(v); onSave({ dur: v }); };
    const commit = () => { saveTitle(); onClose(); };
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, []);
    return (React.createElement("div", { className: "fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6", style: { background: "rgba(25,29,26,.4)" }, onClick: commit },
        React.createElement("div", { className: "pl-sheet pl-scroll overscroll-contain w-full md:max-w-md rounded-t-lg md:rounded-lg p-4 flex flex-col gap-3 overflow-y-auto", style: { maxHeight: "88vh" }, onClick: (e) => e.stopPropagation() },
            React.createElement("div", { className: "flex items-start justify-between gap-2" },
                React.createElement("div", { className: "mono text-xs pl-muted" },
                    block.day,
                    " \u00B7 ",
                    minsToLabel(start),
                    "\u2013",
                    minsToLabel(start + dur)),
                React.createElement("button", { onClick: commit, className: "pl-muted p-1", "aria-label": "Schlie\u00DFen" },
                    React.createElement(X, { size: 18 }))),
            React.createElement("input", { value: title, onChange: (e) => setTitle(e.target.value), onBlur: saveTitle, onKeyDown: (e) => e.key === "Enter" && commit(), placeholder: "Titel eingeben", className: "pl-input px-2 py-2 rounded text-base" }),
            React.createElement(CatPicker, { value: cat, onChange: setCatLive }),
            projects.length > 0 && (React.createElement("div", null,
                React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Geh\u00F6rt zu Projekt"),
                React.createElement("div", { className: "flex flex-wrap gap-1" }, projects.map((p) => {
                    var _a, _b;
                    const on = block.projectId === p.id;
                    return (React.createElement("button", { key: p.id, onClick: () => onSave({ projectId: on ? null : p.id }), className: "px-2 py-1 rounded mono text-xs", style: {
                            background: on ? (_a = CATS[p.cat]) === null || _a === void 0 ? void 0 : _a.color : "transparent",
                            color: on ? "#FFF" : "var(--muted)",
                            border: `1px solid ${on ? (_b = CATS[p.cat]) === null || _b === void 0 ? void 0 : _b.color : "var(--line)"}`,
                        } }, p.title));
                })))),
            React.createElement("div", { className: "flex flex-wrap items-end gap-4" },
                React.createElement("div", null,
                    React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Beginn"),
                    React.createElement(TimeField, { value: start, onChange: setStartLive, color: (_a = CATS[cat]) === null || _a === void 0 ? void 0 : _a.color })),
                React.createElement("div", { className: "flex-1 min-w-0" },
                    React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Dauer"),
                    React.createElement(Stepper, { value: durLabel(dur), onMinus: () => setDurLive(Math.max(15, dur - SLOT)), onPlus: () => setDurLive(Math.min(8 * 60, dur + SLOT)) }))),
            React.createElement("div", null,
                React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, "Wie ist es gelaufen?"),
                React.createElement(StatusButtons, { current: block.status, size: "lg", onPick: (s) => { onSave({ status: s }); } })),
            React.createElement("button", { onClick: () => onRepeat({ ...block, title: title.trim() || "Ohne Titel", cat, start, dur }), className: "pl-btn px-3 py-2 rounded flex items-center gap-2 mono text-xs", style: block.tplId ? { color: "#1E6E5A", borderColor: "#1E6E5A" } : {} },
                React.createElement(Repeat, { size: 13 }),
                block.tplId ? "Jede Woche — in der Vorlage" : "Jede Woche wiederholen"),
            React.createElement("div", { className: "flex items-center gap-2 pt-1" },
                React.createElement("button", { onClick: onDelete, className: "pl-btn px-3 py-2 rounded flex items-center gap-1.5 mono text-xs", style: { color: "#A03A5E", borderColor: "#A03A5E" } },
                    React.createElement(Trash2, { size: 13 }),
                    " L\u00F6schen"),
                React.createElement("button", { onClick: onSync, disabled: syncing || block.synced, className: "pl-btn px-3 py-2 rounded flex items-center gap-1.5 mono text-xs ml-auto", style: block.synced ? { color: "#1E6E5A", borderColor: "#1E6E5A" } : {} },
                    block.synced ? React.createElement(Check, { size: 13 }) : React.createElement(UploadCloud, { size: 13 }),
                    block.synced ? "Im Kalender" : "In Kalender"),
                React.createElement("button", { onClick: commit, className: "px-4 py-2 rounded mono text-xs", style: { background: "var(--ink)", color: "var(--paper)" } }, "Fertig")))));
}
function Stepper({ label, value, onMinus, onPlus }) {
    return (React.createElement("div", null,
        label && React.createElement("div", { className: "mono text-xs pl-muted mb-1" }, label),
        React.createElement("div", { className: "flex items-center" },
            React.createElement("button", { onClick: onMinus, className: "pl-btn px-2 py-1.5 rounded-l" }, "\u2212"),
            React.createElement("div", { className: "mono text-sm flex-1 text-center py-1.5 border-t border-b", style: { borderColor: "var(--line)", background: "var(--card)" } }, value),
            React.createElement("button", { onClick: onPlus, className: "pl-btn px-2 py-1.5 rounded-r" }, "+"))));
}
/* Farbe mit Alpha */
function hexA(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}
/* ── Beispieldaten zum Ausprobieren ────────────────────────── */
function makeDemoState() {
    const thisMonday = mondayOf(new Date());
    const projects = [
        { id: "demo-p1", title: "Tutoring aufbauen", cat: "arbeit", target: 240 },
        { id: "demo-p2", title: "Semestervorbereitung", cat: "uni", target: 180 },
    ];
    const routines = [
        { id: "demo-r1", title: "Bouldern", cat: "training", weekTarget: 2 },
        { id: "demo-r2", title: "Krafttraining", cat: "training", weekTarget: 2 },
        { id: "demo-r3", title: "Stille Zeit", cat: "glaube", weekTarget: 5 },
        { id: "demo-r4", title: "Lesen", cat: "privat", weekTarget: 3 },
    ];
    const pool = [
        { t: "Lernblock", c: "fokus", d: 90, p: null },
        { t: "Bewerbungen schreiben", c: "arbeit", d: 60, p: "demo-p1" },
        { t: "Probestunde vorbereiten", c: "arbeit", d: 90, p: "demo-p1" },
        { t: "Skript durchgehen", c: "uni", d: 120, p: "demo-p2" },
        { t: "Bouldern", c: "training", d: 120, p: null },
        { t: "Krafttraining", c: "training", d: 75, p: null },
        { t: "Stille Zeit", c: "glaube", d: 30, p: null },
        { t: "Lesen", c: "privat", d: 60, p: null },
    ];
    const blocks = [];
    const checks = {};
    for (let w = 13; w >= 0; w--) {
        const ws = addDays(thisMonday, -7 * w);
        const quality = 0.45 + Math.random() * 0.5;
        const perWeek = 5 + Math.floor(Math.random() * 5);
        for (let i = 0; i < perWeek; i++) {
            const src = pool[Math.floor(Math.random() * pool.length)];
            const day = addDays(ws, Math.floor(Math.random() * 6));
            if (day > new Date())
                continue;
            const start = (8 + Math.floor(Math.random() * 10)) * 60;
            const r = Math.random();
            blocks.push({
                id: uid(), day: dayKey(day), start, dur: src.d,
                title: src.t, cat: src.c, projectId: src.p,
                status: r < quality ? "done" : r < quality + 0.15 ? "moved" : "skipped",
                synced: false, todoId: null,
            });
        }
        for (const r of routines) {
            const n = Math.random() < 0.78 ? r.weekTarget + (Math.random() < 0.3 ? 1 : 0) : r.weekTarget - 1;
            const picked = new Set();
            while (picked.size < Math.max(0, n))
                picked.add(Math.floor(Math.random() * 7));
            for (const d of picked) {
                const day = addDays(ws, d);
                if (day > new Date())
                    continue;
                const k = dayKey(day);
                checks[k] = [...(checks[k] || []), r.id];
            }
        }
    }
    return {
        ...DEFAULT_STATE,
        blocks, checks, routines, projects,
        todos: [
            { id: uid(), title: "CV an zwei Betriebe schicken", cat: "arbeit", est: 60, done: false },
            { id: uid(), title: "Superprof-Profil fertig machen", cat: "arbeit", est: 90, done: false },
        ],
        reached: {},
    };
}
/* ════════════════ Fokus-Timer ════════════════ */
function FocusTimer({ timer, beat, onPause, onSkip, onStop, onDone }) {
    const [gross, setGross] = useState(false);
    const c = (CATS[timer.cat] && CATS[timer.cat].color) || "#5B3FA0";
    const pause = timer.phase === "break";
    const fertig = timer.phase === "done";
    const farbe = fertig ? "#1E6E5A" : pause ? "#8A4E1C" : c;
    const ganz = (pause ? BREAK_MIN : FOCUS_MIN) * 60000;
    const rest = fertig ? 0 : Math.max(0, timer.paused ? timer.remain : timer.endsAt - Date.now());
    const sek = Math.ceil(rest / 1000);
    const uhr = pad(Math.floor(sek / 60)) + ":" + pad(sek % 60);
    const anteil = fertig ? 1 : 1 - rest / ganz;
    const R = 54, U = 2 * Math.PI * R;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: () => setGross(true), className: "fixed flex items-center gap-2 px-3 py-2 rounded-full", style: {
                left: "50%", transform: "translateX(-50%)", bottom: 16, zIndex: 40,
                background: farbe, color: "#FFF",
                boxShadow: "0 6px 20px -6px rgba(25,29,26,.5)",
            } },
            React.createElement(Timer, { size: 14 }),
            React.createElement("span", { className: "mono text-sm font-medium" }, uhr),
            React.createElement("span", { className: "mono text-xs", style: { opacity: 0.85 } }, fertig ? "fertig" : pause ? "Pause" : `${timer.round}/${timer.rounds}`)),
        gross && (React.createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-6", style: { background: "rgba(25,29,26,.55)" }, onClick: () => setGross(false) },
            React.createElement("div", { className: "pl-sheet pl-zoom rounded-lg p-6 flex flex-col items-center gap-4", style: { minWidth: 280 }, onClick: (e) => e.stopPropagation() },
                React.createElement("div", { className: "text-center" },
                    React.createElement("div", { className: "mono text-xs pl-muted uppercase tracking-widest" }, fertig ? "geschafft" : pause ? "Pause" : "Fokus"),
                    React.createElement("div", { className: "text-lg font-medium leading-tight mt-0.5" }, timer.title || "Lernblock")),
                React.createElement("div", { className: "relative", style: { width: 140, height: 140 } },
                    React.createElement("svg", { width: "140", height: "140", viewBox: "0 0 140 140" },
                        React.createElement("circle", { cx: "70", cy: "70", r: R, fill: "none", stroke: "var(--line)", strokeWidth: "9" }),
                        React.createElement("circle", { cx: "70", cy: "70", r: R, fill: "none", stroke: farbe, strokeWidth: "9", strokeLinecap: "round", strokeDasharray: U, strokeDashoffset: U * (1 - anteil), transform: "rotate(-90 70 70)", style: { transition: "stroke-dashoffset .9s linear" } })),
                    React.createElement("div", { className: "absolute inset-0 flex flex-col items-center justify-center" },
                        React.createElement("span", { className: "mono text-3xl font-semibold", style: { color: farbe } }, uhr),
                        React.createElement("span", { className: "mono text-xs pl-muted" },
                            "Runde ",
                            timer.round,
                            " von ",
                            timer.rounds))),
                React.createElement("div", { className: "mono text-xs pl-muted" },
                    timer.focused,
                    " von ",
                    timer.blockDur,
                    " min fokussiert"),
                fertig ? (React.createElement("div", { className: "flex gap-2 w-full" },
                    React.createElement("button", { onClick: onDone, className: "flex-1 px-3 py-2.5 rounded mono text-xs", style: { background: "#1E6E5A", color: "#FFF" } }, "Erledigt"),
                    React.createElement("button", { onClick: onStop, className: "pl-btn px-3 py-2.5 rounded mono text-xs" }, "Nur schlie\u00DFen"))) : (React.createElement("div", { className: "flex gap-2 w-full" },
                    React.createElement("button", { onClick: onPause, className: "pl-btn flex-1 px-3 py-2.5 rounded mono text-xs" }, timer.paused ? "Weiter" : "Anhalten"),
                    React.createElement("button", { onClick: onSkip, className: "pl-btn px-3 py-2.5 rounded mono text-xs" }, "\u00DCberspringen"),
                    React.createElement("button", { onClick: onStop, className: "pl-btn px-3 py-2.5 rounded mono text-xs", style: { color: "#A03A5E", borderColor: "#A03A5E" } }, "Beenden"))))))));
}
/* ════════════════ Konfetti ════════════════ */
function Confetti({ trigger }) {
    const [pieces, setPieces] = useState([]);
    useEffect(() => {
        if (!trigger)
            return;
        const colors = CAT_KEYS.map((k) => CATS[k].color);
        const next = Array.from({ length: 46 }, (_, i) => ({
            id: `${trigger}-${i}`,
            left: Math.random() * 100,
            dx: `${(Math.random() - 0.5) * 260}px`,
            rot: `${Math.random() * 900 - 450}deg`,
            dur: 1.5 + Math.random() * 1.3,
            delay: Math.random() * 0.35,
            color: colors[i % colors.length],
            w: 5 + Math.random() * 5,
            h: 8 + Math.random() * 8,
            round: Math.random() > 0.65,
        }));
        setPieces(next);
        const t = setTimeout(() => setPieces([]), 3200);
        return () => clearTimeout(t);
    }, [trigger]);
    if (pieces.length === 0)
        return null;
    return (React.createElement("div", { "aria-hidden": "true" }, pieces.map((p) => (React.createElement("span", { key: p.id, className: "pl-confetti", style: {
            left: `${p.left}%`, width: p.w, height: p.h, background: p.color,
            borderRadius: p.round ? "50%" : 1,
            animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s`,
            "--dx": p.dx, "--rot": p.rot,
        } })))));
}
/* ════════════════ Fehlerabfangung ════════════════ */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }
    static getDerivedStateFromError(error) {
        return { error };
    }
    render() {
        var _a;
        if (this.state.error) {
            return (React.createElement("div", { style: { minHeight: "100vh", background: "#E4E6E1", color: "#191D1A", padding: 24 } },
                React.createElement("div", { style: {
                        maxWidth: 560, margin: "0 auto", background: "#FAFAF8",
                        border: "1px solid #191D1A", borderRadius: 4, padding: 20,
                    } },
                    React.createElement("h2", { style: { fontSize: 18, fontWeight: 600, marginBottom: 8 } }, "Der Planer ist abgest\u00FCrzt"),
                    React.createElement("p", { style: { fontSize: 14, color: "#6F7A72", marginBottom: 12 } }, "Schick mir den folgenden Text, dann finde ich die Ursache sofort:"),
                    React.createElement("pre", { style: {
                            fontFamily: "ui-monospace, monospace", fontSize: 12, whiteSpace: "pre-wrap",
                            background: "#EDEEEA", padding: 12, borderRadius: 3, overflowX: "auto",
                        } }, String(((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || this.state.error)),
                    React.createElement("button", { onClick: () => this.setState({ error: null }), style: {
                            marginTop: 12, padding: "8px 14px", borderRadius: 3,
                            background: "#191D1A", color: "#E4E6E1", border: "none",
                            fontFamily: "ui-monospace, monospace", fontSize: 12, cursor: "pointer",
                        } }, "Nochmal versuchen"))));
        }
        return this.props.children;
    }
}
function Wochenplaner() {
    return (React.createElement(ErrorBoundary, null,
        React.createElement(PlannerApp, null)));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(Wochenplaner));
