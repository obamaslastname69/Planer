package io.github.obamaslastname69.twa;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

/**
 * Der Wochenplaner als eigenstaendige App.
 *
 * Bewusst KEINE TWA: Eine TWA leiht sich den Motor eines grossen Browsers,
 * und genau der steht auf diesem Geraet nicht zur Verfuegung. Diese App
 * bringt ihren Motor ueber die Android System WebView selbst mit - die ist
 * ein Systembaustein und auch dann da, wenn Chrome fehlt.
 *
 * Zwei Dinge sind dabei heikel und deshalb hier besonders behandelt:
 *
 * 1. Die Google-Anmeldung. Google verweigert sie grundsaetzlich in
 *    eingebetteten Ansichten. Deshalb wird alles, was nicht zum Planer
 *    gehoert, nach draussen in den Browser gereicht. Google leitet danach
 *    auf die Planer-Adresse zurueck, und weil die Adresse in der
 *    assetlinks.json als zu dieser App gehoerend bestaetigt ist, gibt
 *    Android die Rueckkehr direkt an uns statt an den Browser.
 *
 * 2. Der Zugangsschluessel steht in der Rueckkehr-Adresse hinter dem
 *    Rautezeichen. Deshalb wird die Adresse des Intents immer vollstaendig
 *    weitergereicht - wer hier nur Pfad und Abfrage nimmt, verliert ihn.
 */
public class MainActivity extends Activity {

    private static final String START = "https://obamaslastname69.github.io/Planer/";
    private static final String HOST = "obamaslastname69.github.io";

    private WebView web;

    @Override
    protected void onCreate(Bundle zustand) {
        super.onCreate(zustand);

        web = new WebView(this);
        web.setLayoutParams(new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        /* localStorage - ohne das waere der gesamte Planer nach jedem Start leer */
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setSupportZoom(false);
        s.setBuiltInZoomControls(false);
        /* Der Weckton soll ohne vorheriges Antippen kommen duerfen */
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        /* Kennzeichen, an dem die Seite merkt, dass sie in dieser App laeuft.
           Noetig, weil eine WebView sich nicht als "standalone" meldet: Ohne
           das hielte der Planer sich fuer eine Webseite und wuerde die
           Anmeldung ueber ein Popup-Fenster versuchen. Popups gibt es hier
           nicht - das Ergebnis war eine weisse Seite. */
        s.setUserAgentString(s.getUserAgentString() + " PlanerApp/1");

        CookieManager.getInstance().setAcceptCookie(true);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            CookieManager.getInstance().setAcceptThirdPartyCookies(web, true);
        }

        web.setWebChromeClient(new WebChromeClient());
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView ansicht, WebResourceRequest anfrage) {
                return nachDraussen(anfrage.getUrl());
            }

            @SuppressWarnings("deprecation")
            @Override
            public boolean shouldOverrideUrlLoading(WebView ansicht, String adresse) {
                return nachDraussen(Uri.parse(adresse));
            }

            /* Statt einer weissen Flaeche sagen, was nicht ging. Eine leere
               Seite ohne Hinweis ist das Schlimmste, was eine App tun kann. */
            @Override
            public void onReceivedError(WebView ansicht, WebResourceRequest anfrage,
                                        android.webkit.WebResourceError fehler) {
                if (anfrage != null && !anfrage.isForMainFrame()) return;
                String text = fehler != null ? String.valueOf(fehler.getDescription()) : "unbekannt";
                zeigeFehler(text, anfrage != null ? anfrage.getUrl().toString() : "");
            }

            @SuppressWarnings("deprecation")
            @Override
            public void onReceivedError(WebView ansicht, int code, String beschreibung, String adresse) {
                zeigeFehler(beschreibung, adresse);
            }
        });

        setContentView(web);

        if (zustand != null) {
            web.restoreState(zustand);
        } else {
            web.loadUrl(adresseAusIntent(getIntent()));
        }
    }

    /**
     * Alles, was nicht zum Planer gehoert, gehoert in den Browser - allen
     * voran die Google-Anmeldung, die hier drin scheitern wuerde.
     */
    private boolean nachDraussen(Uri ziel) {
        if (ziel == null) return false;
        if (HOST.equals(ziel.getHost())) return false;
        try {
            startActivity(new Intent(Intent.ACTION_VIEW, ziel));
        } catch (Exception e) {
            /* Kein Browser da, der das oeffnen koennte: dann lieber hier
               anzeigen als gar nichts tun. */
            return false;
        }
        return true;
    }

    /**
     * Die volle Adresse inklusive allem hinter dem Rautezeichen.
     *
     * Kommt die Anmeldung zurueck, geschieht das ueber planer://auth#...
     * und nicht ueber die normale Adresse: Google schickt die Antwort an
     * eine gewoehnliche https-Adresse, die im Browser landet, und ein
     * fremder Browser reicht so eine Adresse nicht an uns weiter. Ein
     * eigenes Schema dagegen reicht er weiter - deshalb bringt die Seite
     * das Token auf diesem Weg zu uns.
     */
    private String adresseAusIntent(Intent absicht) {
        if (absicht == null || absicht.getData() == null) return START;
        Uri d = absicht.getData();
        if ("planer".equals(d.getScheme())) {
            String rest = d.getEncodedFragment();
            return (rest == null || rest.isEmpty()) ? START : START + "#" + rest;
        }
        if (HOST.equals(d.getHost())) return d.toString();
        return START;
    }

    /** Eine lesbare Seite statt weisser Leere */
    private void zeigeFehler(String grund, String adresse) {
        String html = "<!DOCTYPE html><html lang=de><meta charset=utf-8>"
                + "<meta name=viewport content='width=device-width,initial-scale=1'>"
                + "<body style=\"background:#E4E6E1;color:#191D1A;margin:0;padding:24px;"
                + "font-family:ui-monospace,monospace;font-size:13px;line-height:1.6\">"
                + "<div style=\"max-width:40ch;margin:0 auto;background:#FAFAF8;"
                + "border:1px solid #191D1A;border-radius:6px;padding:18px\">"
                + "<div style=\"font-weight:600;font-size:15px;margin-bottom:8px\">"
                + "Die Seite konnte nicht geladen werden</div>"
                + "<p>Meist fehlt nur das Netz. Der Planer selbst ist nicht kaputt — "
                + "deine Daten liegen auf dem Gerät.</p>"
                + "<pre style=\"white-space:pre-wrap;background:#EDEEEA;padding:10px;"
                + "border-radius:4px;font-size:12px\">" + escape(grund) + "\n" + escape(adresse) + "</pre>"
                + "<p><a href=\"" + START + "\" style=\"color:#12657F\">Nochmal versuchen</a></p>"
                + "</div></body></html>";
        if (web != null) web.loadDataWithBaseURL(START, html, "text/html", "utf-8", null);
    }

    private static String escape(String s) {
        if (s == null) return "";
        return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
    }

    /** Rueckkehr von der Google-Anmeldung */
    @Override
    protected void onNewIntent(Intent absicht) {
        super.onNewIntent(absicht);
        setIntent(absicht);
        if (web != null && absicht != null && absicht.getData() != null) {
            web.loadUrl(adresseAusIntent(absicht));
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle zustand) {
        super.onSaveInstanceState(zustand);
        if (web != null) web.saveState(zustand);
    }

    @Override
    public void onBackPressed() {
        if (web != null && web.canGoBack()) {
            web.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
