/**
 * TEMPORARY "Launching Shortly" mode for kaskatech.com  (holding page)
 * ---------------------------------------------------------------------------
 * WHAT THIS IS
 * A Cloudflare Pages Advanced-mode worker. When a file named `_worker.js` sits at
 * the root of the build output, Pages hands ALL routing to it and stops serving
 * static assets on its own. This file answers every request with the holding page
 * below and never reaches for the built site, so no existing route, asset, image
 * or PDF is publicly reachable while it is in place.
 *
 * WHY IT WAS DONE THIS WAY
 * It is additive. Not one line of the existing website was changed: every page,
 * component, image and document is still in the repository and still builds. The
 * whole holding mode is this single file.
 *
 * HOW TO RESTORE THE FULL WEBSITE
 *   1. delete public/_worker.js
 *   2. commit and push to `main`
 * Cloudflare Pages rebuilds, finds no `_worker.js`, returns to normal static
 * serving, and the complete site is live again. Nothing else has to be undone.
 *
 * NOTES
 * - The page is entirely self-contained: inline CSS, system fonts, no images and
 *   no network requests, so it cannot produce a console error or a broken asset.
 * - `noindex` is set so search engines do not replace the real site's listing with
 *   "Launching Shortly". Remove it with this file when the site returns.
 * - Served as 200. If the hold runs long and search ranking matters more than a
 *   clean status, a 503 with `Retry-After` is the alternative — see RESPONSE below.
 */

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kaska — Launching Shortly</title>
<meta name="description" content="Kaska. Cyber Risk &amp; Resilience, Reimagined. Launching shortly.">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#0A0D12">
<link rel="icon" href="data:,">
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    background: #0A0D12;   /* --ground, the site's own tone */
    color: #E7EBF2;        /* --ink */
    font-family: Georgia, 'Times New Roman', 'Iowan Old Style', serif;
    -webkit-font-smoothing: antialiased;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 24px;
  }
  main {
    width: 100%;
    max-width: 640px;
    text-align: center;
  }
  .brand {
    margin: 0;
    font-size: clamp(38px, 11vw, 76px);
    font-weight: 600;
    letter-spacing: 0.16em;
    text-indent: 0.16em;      /* balances the trailing letter-space so it sits centred */
    line-height: 1.05;
    color: #E7EBF2;
  }
  .tagline {
    margin: 18px 0 0;
    font-size: clamp(15px, 3.4vw, 19px);
    line-height: 1.5;
    color: #8A94A7;        /* --muted */
  }
  .rule {
    width: 52px;
    height: 1px;
    margin: 34px auto;
    border: 0;
    background: #C89B45;   /* --brass */
  }
  .status {
    margin: 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: clamp(11px, 2.6vw, 12px);
    font-weight: 600;
    letter-spacing: 0.22em;
    text-indent: 0.22em;
    text-transform: uppercase;
    color: #C89B45;        /* --brass */
  }
  .note {
    margin: 20px 0 0;
    font-size: clamp(14px, 3.2vw, 16px);
    line-height: 1.7;
    color: #8A94A7;
  }
  .legal {
    margin: 56px 0 0;
    font-family: system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 1.6;
    color: #525C6E;        /* --faint */
  }
  @media (max-width: 380px) {
    .brand { letter-spacing: 0.1em; text-indent: 0.1em; }
  }
  /* ONE tone, matching the main site exactly — kaskatech.com is dark-only, so the
     holding page uses its own tokens (--ground #0A0D12, --ink #E7EBF2, --muted
     #8A94A7, --faint #525C6E, --brass #C89B45) rather than a second palette. Every
     colour is set explicitly and no prefers-color-scheme rule is used, so the page
     looks the same for every visitor instead of shifting with their OS. */
</style>
</head>
<body>
  <main>
    <h1 class="brand">KASKA</h1>
    <p class="tagline">Cyber Risk &amp; Resilience, Reimagined.</p>
    <hr class="rule">
    <p class="status">Launching Shortly</p>
    <p class="note">We are preparing something new.<br>Please check back soon.</p>
    <p class="legal">&copy; Kaska Technologies &amp; Services Pvt. Ltd.</p>
  </main>
</body>
</html>`;

export default {
  async fetch(request) {
    // HEAD must not carry a body; everything else gets the page. Every path, every
    // method, every host (apex and www alike) resolves here — that is the point.
    const body = request.method === "HEAD" ? null : HTML;

    return new Response(body, {
      // 200 keeps the page a normal, cacheable "coming soon". For a long hold where
      // search ranking matters more, swap to: status: 503 + "Retry-After": "86400".
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
        // Short cache so restoring the site is visible quickly rather than being
        // held stale at the edge or in a visitor's browser.
        "cache-control": "public, max-age=60",
        "x-robots-tag": "noindex, nofollow",
        "x-content-type-options": "nosniff",
        "x-frame-options": "DENY",
        "referrer-policy": "no-referrer",
      },
    });
  },
};
