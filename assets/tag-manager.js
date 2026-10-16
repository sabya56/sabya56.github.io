// Google Tag Manager with Consent Mode v2, loaded first in every page's <head>.
// Put the container ID here; while it's empty nothing is loaded and nothing is tracked.
var GTM_ID = "GTM-TQ2BSM6C";

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// No analytics cookies in the EU/EEA, UK or Switzerland (cookieless pings only).
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "denied",
  region: [
    "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT",
    "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO",
    "GB", "CH"
  ]
});

// Everywhere else: analytics allowed. Ad storage stays denied, as the site shows no ads.
gtag("consent", "default", {
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: "granted"
});

// Play Store button clicks, sent to GTM as a "play_store_click" event naming the app and the
// page section the button sits in (e.g. "hero", "cta", "featured", "apps").
var PLAY_APPS = {
  "com.nitcart.dashcam": "DashCam",
  "com.nitcart.screenoffrecorder": "Screen Off Recorder",
  "com.nitcart.expensetracker": "Expense Tracker & Budget"
};

function trackPlayStoreClick(e) {
  if (e.type === "auxclick" && e.button !== 1) return;
  var a = e.target.closest && e.target.closest('a[href*="play.google.com/store/apps/details"]');
  if (!a) return;
  var appId = new URL(a.href).searchParams.get("id") || "";
  var section = a.closest("section");
  dataLayer.push({
    event: "play_store_click",
    app_id: appId,
    app_name: PLAY_APPS[appId] || appId,
    link_location: section ? section.id || section.classList[0] || "" : ""
  });
}
document.addEventListener("click", trackPlayStoreClick, true);
document.addEventListener("auxclick", trackPlayStoreClick, true); // middle-click

if (GTM_ID) {
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", GTM_ID);
}
