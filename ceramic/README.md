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

## Package service charges

`src/data/ceramicPackages.js` is the only source of truth for ceramic package
service charges, deliverables and WhatsApp messages:

- Starter — ₹30,000 / month
- Growth — ₹75,000 / month
- Advanced — ₹1,50,000 / month
- Premium — ₹2,25,000 / month
- Enterprise — ₹3,00,000 / month

All service charges are monthly. Advertising budget is separate from the service
charge and is paid directly to the advertising platform. GST is extra wherever
applicable. No specific number of inquiries, leads or sales is guaranteed. Package
CTAs build a URL-encoded WhatsApp message containing the selected package name and
its updated monthly service charge.

## Forms, CRM and lead counting

Both ceramic forms (the presentation audit form and the legacy `/contact` inquiry form), plus the
popup audit form:

1. Validate required fields and format locally.
2. Submit the lead to the Perfex CRM web-to-lead endpoint configured in
   `src/config/ceramicSite.js` (`crm.formUrl` / `crm.formKey`).
3. Map standard Perfex lead columns (`name`, `company`, `email`, `website`,
   `phonenumber`) and put every extra answer (business type, target market,
   growth goal, product, budget, requirement and source page) into
   `description`, so no submitted detail is lost.
4. Redirect to `/thank-you` after the request is delivered.

The `/contact` form asks only four required fields (name, company, phone and business
type). Email, website, product category, primary goal, geography, budget and a
free-text note are kept in the collapsed **Add more details (optional)** section.
The presentation form keeps email and website in an optional section as well.
No consent checkbox is used; the submit button is the contact request.

`src/components/FormPopup.jsx` renders the full **AuditForm** in a modal. It appears
a few seconds after every full page load or reload, and never on `/thank-you`,
`/privacy-policy` or `/terms`. Closing it hides it for the current page view only,
so it shows again on the next reload.

The CRM request uses `mode: 'no-cors'` because the Perfex endpoint does not send
CORS headers. CSRF protection is excluded by Perfex for `forms/wtl/{key}`, so
the public form key is enough.

The floating WhatsApp button has been replaced by two fixed buttons: **Fill
Form** (scrolls to the audit form, or opens `/contact` on legacy routes) and
**Call** (`tel:+919512648085`). All phone-link clicks send a custom `CallClick`
event - never a `Lead`.

## Meta Pixel

`src/utils/analytics.js` loads only the ceramic pixel `1679588473838138` (override
with `VITE_FB_PIXEL_ID` if needed) and tracks:

- `PageView` on first load and every in-app route change.
- `CallClick` (custom event, not `Lead`) when any `tel:` link is clicked, so call
  clicks never inflate the Lead count in Meta Ads Manager.
- `Lead` once on the thank-you page after a successful ceramic form submission.
  Only the `ceramic-audit` and `ceramic-inquiry` form ids can fire it, a
  per-submission `sessionStorage` key blocks duplicate Leads, and the submission
  flag is removed from history after firing so refreshing `/thank-you` cannot
  replay the event. Direct visits to `/thank-you` never count.

A global pixel registry (`window.__EZY_CERAMIC_PIXELS__`) guarantees that
`fbq('init', ...)` runs only once per page load, even if the module is evaluated
twice or the app is remounted under React StrictMode.

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
- All five package WhatsApp messages include the selected package name and its
  updated monthly service charge, plus the separate advertising budget and GST note.
- Audit form validation, CRM payload mapping, thank-you redirect and reduced-motion fallback verified.
- Pixel `1679588473838138` initialised exactly once; `PageView` on load and `Lead`
  exactly once after a successful submission, with no Lead on validation errors,
  direct thank-you visits or thank-you refreshes.

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
