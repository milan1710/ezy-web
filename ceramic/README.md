# Ezy Digital — Ceramic Business Growth presentation

A standalone React + Vite micro-site deployed at `https://ezydigital.in/ceramic/`.
The main route is a premium, animated, single-page ceramic business presentation built
from the approved seven-page Ezy Digital Ceramic Business Catalogue.

## Run locally

```powershell
cd ceramic
npm install
npm run dev
```

Open `http://localhost:5174/ceramic/`.

The `/ceramic/` path matters: `vite.config.js` sets `base: '/ceramic/'` and
`src/main.jsx` uses `BrowserRouter basename="/ceramic"`.

## Production build

```powershell
cd ceramic
npm run build
npm run preview
```

Deploy the contents of `dist/` under `/ceramic/`. `public/.htaccess` and
`public/_redirects` provide SPA fallback on Apache and Netlify.

## Single-page sections

The presentation at `/ceramic/` contains all sections on one page with smooth scrolling:

- `#home` — cinematic hero
- `#about` — about, mission, vision, values, industries, approach
- `#services` — eight service cards
- `#solutions` — ceramic growth solutions, tracking and free audit CTA
- `#packages` — the five approved Ceramic Growth Packages
- `#process` — six-stage process timeline
- `#contact` — terms, audit form and verified contact details

Navigation is sticky, keyboard accessible and updates the active section while scrolling.

## Package pricing

`src/data/ceramicPackages.js` is the only source of truth for ceramic package prices,
inquiry estimates, deliverables and WhatsApp messages:

- Ceramic Starter — ₹1,00,000 / month — 200–500 estimated inquiries
- Market Expansion — ₹2,50,000 / month — 500–1,250 estimated inquiries
- Ceramic Growth Pro — ₹5,00,000 / month — 1,000–2,500 estimated inquiries
- Ceramic Export Growth — ₹7,50,000 / month — 1,500–3,750 estimated inquiries
- Ceramic Market Leadership — ₹10,00,000 / month — 2,000–5,000 estimated inquiries

All prices are monthly and GST is extra. Inquiry figures are planning estimates, not
guaranteed results. Package CTAs build a URL-encoded WhatsApp message for the selected
package.

## Forms, CRM and lead counting

Both ceramic forms (the presentation audit form and the legacy `/contact` inquiry form):

1. Validate required fields and format locally.
2. Submit the lead to the Perfex CRM web-to-lead endpoint configured in
   `src/config/ceramicSite.js` (`crm.formUrl` / `crm.formKey`).
3. Map standard Perfex lead columns (`name`, `company`, `email`, `website`,
   `phonenumber`) and put every extra answer (business type, target market,
   growth goal, product, budget, requirement and source page) into
   `description`, so no submitted detail is lost.
4. Redirect to `/thank-you` after the request is delivered.

The CRM request uses `mode: 'no-cors'` because the Perfex endpoint does not send
CORS headers. CSRF protection is excluded by Perfex for `forms/wtl/{key}`, so
the public form key is enough.

The floating WhatsApp button has been replaced by two fixed buttons: **Fill
Form** (scrolls to the audit form, or opens `/contact` on legacy routes) and
**Call** (`tel:+919512648085`). All phone-link clicks are counted as Meta
`Lead` events.

## Meta Pixel

`src/utils/analytics.js` loads pixel `2673882233043263` (override with
`VITE_FB_PIXEL_ID` if needed) and tracks:

- `PageView` on first load and every in-app route change.
- `Lead` when any `tel:` link is clicked.
- `Lead` once on the thank-you page after a successful form submission. A
  per-submission id in `sessionStorage` prevents double counting on refresh or
  React StrictMode remounts. Direct visits to `/thank-you` do not count.

No personal form data is sent to Meta; only the event name and generic button /
page labels.

## Images and branding

- Original logo: `public/images/ezy-digital-logo.png` (used unchanged on a white plate).
- All photographs are local files in `public/images/`, mapped centrally in
  `src/data/ceramicImages.js`.
- `src/data/presentationContent.js` contains the presentation asset map and section content.
- Images are illustrative and do not depict Ezy Digital clients or specific factories.

## Other routes

The existing solution, pricing, demo and legal routes remain available for deep links and
use the legacy header/footer. They are not part of the single-page presentation:

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

## Verification performed

- Production build completed successfully with Vite.
- Presentation and legacy routes rendered in headless Edge with no React error overlay or
  console errors.
- No horizontal overflow at 360, 390, 430, 768, 1024, 1366 or 1440 px.
- All 36 in-page links resolve to existing section IDs.
- Mobile menu opens, locks body scroll, closes on selection and scrolls to the section.
- All five package WhatsApp messages include the correct package name and price.
- Audit form validation, CRM payload mapping, thank-you redirect and reduced-motion fallback verified.

To re-run the browser smoke test, start the preview and a debugging browser, then run
`node scripts/cdp-check.mjs`:

```powershell
npm run preview -- --port 4173

# in a second terminal
& "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new `
  --remote-debugging-port=9223 --user-data-dir=.\.edge-verify about:blank

# in a third terminal
node scripts/cdp-check.mjs
```


## Central files

- `src/data/ceramicPackages.js` — approved packages and package notes
- `src/data/presentationContent.js` — navigation, services, solutions, process, terms, form options
- `src/data/ceramicImages.js` — image URLs, alt text, dimensions and credits
- `src/config/ceramicSite.js` — phone, WhatsApp, CRM endpoint, canonical URLs and general messages
- `src/utils/crm.js` — Perfex lead mapping and submission
- `src/utils/analytics.js` — Meta Pixel loader and `Lead` / `PageView` tracking
- `src/pages/ThankYou.jsx` — post-submission thank-you page and form `Lead` event
- `src/components/presentation/` — reusable presentation components
- `src/styles/presentation.css` — presentation design system (plain CSS, no Tailwind)
