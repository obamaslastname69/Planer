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

    /** Die volle Adresse inklusive allem hinter dem Rautezeichen */
    private String adresseAusIntent(Intent absicht) {
        if (absicht != null && absicht.getData() != null) {
            Uri d = absicht.getData();
            if (HOST.equals(d.getHost())) return d.toString();
        }
        return START;
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
