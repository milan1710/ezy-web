# Ezy Digital — Ceramic Business Growth micro-site

This is a **standalone React + Vite app** that is deployed separately from the main
Ezy Digital website at `https://ezydigital.in/ceramic/`.

It has its own `index.html`, title tags, Open Graph metadata, image folder and design
system. SEO is still centralized on the single `ezydigital.in` domain: canonical tags,
Open Graph URLs and JSON-LD all use that domain, and every ceramic route is included in
the one root sitemap at `public/sitemap.xml`.

## Local development

```powershell
cd ceramic
npm install
npm run dev
```

Open the URL printed by Vite, normally:

```
http://localhost:5174/ceramic/
```

The `/ceramic/` path is important: `vite.config.js` sets `base: '/ceramic/'` and
`src/main.jsx` sets `BrowserRouter basename="/ceramic"`.

## Production build

```powershell
cd ceramic
npm run build
```

Output: `ceramic/dist/`

Deploy the **contents of `ceramic/dist`** so that the application is reachable at
`https://ezydigital.in/ceramic/` (for example, copy it to a `/ceramic/` subdirectory in
the main site's web root, or configure a host rewrite from `/ceramic/*` to this app).

Server-side routing is required for deep links such as `/ceramic/solutions/export-growth`.

- Apache: `public/.htaccess` is copied into the build and provides the fallback rewrite.
- Netlify: `public/_redirects` is copied into the build.
- Other hosts: configure a rewrite/fallback so `/ceramic/*` serves `/ceramic/index.html`
  when the requested file does not exist.

Do not deploy this build at the domain root. All asset URLs are prefixed with `/ceramic/`.

### Combined build with the main Ezy Digital site

From the repository root:

```powershell
npm run build:all
npm run preview:all
```

`build:all` builds the main site, builds this ceramic app and copies `ceramic/dist` into
`dist/ceramic`. Deploy the root `dist/` folder. `preview:all` serves the combined output
at `http://localhost:4180/ceramic/` and verifies the static sub-path setup.

## Verification

The ceramic app was verified with a headless Chrome smoke test covering all 13 routes,
titles, canonical URLs, broken images, mobile overflow, dropdown/mobile navigation,
catalogue filtering and the full inquiry-form validation/WhatsApp handoff.

To re-run it locally:

```powershell
# terminal 1 — preview the ceramic build
cd ceramic
npm run preview -- --port 4173

# terminal 2 — Chrome with debugging enabled
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new `
  --remote-debugging-port=9223 --user-data-dir=.\ceramic\.chrome-test about:blank

# terminal 3 — run the checks
cd ceramic
node scripts/cdp-check.mjs
```


## Inquiry form behaviour

There is **no backend** in this project. The contact form:

1. Validates all required fields locally.
2. Builds a prefilled WhatsApp message in the browser.
3. Shows a clear "ready" state with an explicit **Open WhatsApp** action.
4. Does not save the submission on this website and does not claim that it has been saved.

The visitor must press Send inside WhatsApp to deliver the inquiry. No secrets or API keys
are used in the frontend.

If a backend or CRM is added later, update the form and the privacy policy before launch.

## Images

All photographs are stored locally in `public/images/` and referenced through
`src/data/ceramicImages.js`.

- Source: Pexels (free-to-use Pexels license).
- They are **illustrative** and do not depict Ezy Digital clients, projects or Morbi factories.
- Photo IDs are recorded in `src/data/ceramicImages.js` (`imageCredits`).
- Replace an image by keeping the filename or updating the central image configuration.

The official Ezy Digital logo is stored at `public/images/ezy-digital-logo.png`.

## Routes

- `/` — Homepage
- `/solutions`
- `/solutions/dealer-distributor-growth`
- `/solutions/export-growth`
- `/solutions/buyer-lead-generation`
- `/solutions/ceramic-website`
- `/solutions/digital-marketing`
- `/pricing`
- `/ceramic-demo`
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms`

## Central configuration

- `src/config/ceramicSite.js` — brand, phone, WhatsApp, canonical URLs
- `src/data/navigation.js` — header, mobile and footer navigation
- `src/data/pricing.js` — every displayed price and pricing note
- `src/data/solutions.js` — service content
- `src/data/ceramicImages.js` — image URLs, alt text and credits
- `src/data/demoProducts.js` — illustrative demo products
- `src/styles/` — plain CSS design system (no Tailwind)
