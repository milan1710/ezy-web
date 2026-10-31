# Ezy Digital - Website

Production marketing website for **Ezy Digital** (owner: **Milan Soni**), a website development,
e-commerce, Meta Ads and video editing studio based in Upleta, Gujarat, India.

Built with **React 19 + Vite 6 + Tailwind CSS 4**, Lucide icons, Framer Motion and React Router.

---

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the main site **and** the ceramic micro-site. Main: `http://localhost:5173/`; ceramic: `http://localhost:5173/ceramic/` |
| `npm run dev:main` | Start only the main Ezy Digital dev server on `http://localhost:5173/` |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally (default `http://localhost:4173`) |
| `npm run verify` | Runs 195 configuration checks (phone/tel wiring, approved prices, service catalogue, lead-form validation and CRM mapping, service dropdown, instant form modal + sticky CTA, campaign attribution, Meta Pixel single-instance wiring, Google Analytics tag, Thank You route, removed WhatsApp button, Perfex proxy, canonical URLs) |
| `npm run dev:ceramic` | Start the standalone ceramic micro-site dev server (`http://localhost:5174/ceramic/`) |
| `npm run build:ceramic` | Build the standalone ceramic micro-site into `ceramic/dist/` |
| `npm run build:all` | Build the main site, build the ceramic micro-site, then copy it into `dist/ceramic/` |
| `npm run preview:all` | Preview the combined `dist/` output at `http://localhost:4180/` |
| `node scripts/capture-screenshots.mjs` | Capture the design-review screenshots into `screenshots/` (needs `npm run preview -- --port 4173` and Chrome with `--remote-debugging-port=9223`) |

---

## Ceramic micro-site (`/ceramic/`)

A separate React + Vite application lives in `ceramic/`. It has its own `index.html`,
metadata, Open Graph tags, local images and plain-CSS design system, and is deployed
under **https://ezydigital.in/ceramic/**. All SEO stays on the single `ezydigital.in`
domain, and every ceramic route is included in the main `public/sitemap.xml`.

```powershell
npm run dev             # both sites → http://localhost:5173/ceramic/
npm run dev:ceramic     # ceramic only → http://localhost:5174/ceramic/
npm run dev:main        # main site only → http://localhost:5173/
npm run build:all       # production: dist/ (main site) + dist/ceramic/ (ceramic site)
npm run preview:all     # verify the combined output locally
```

Deploy the root `dist/` folder. Deep ceramic routes require the SPA fallback included in
`ceramic/public/.htaccess` (Apache) or the host equivalent. See `ceramic/README.md` for
the full ceramic site documentation, image credits and form behaviour.

---

## Before you deploy - required edits

1. **Production domain.** Set `domain` in `src/config/siteConfig.js` to the confirmed live domain.
   The same domain is hardcoded in `index.html` (canonical, Open Graph, JSON-LD) and in
   `public/robots.txt` and `public/sitemap.xml`. Update all of them together.
2. **Business email.** `siteConfig.contact.email` currently uses the placeholder
   `hello@ezydigital.in` - change it to the real inbox.
3. **Meta Pixel id.** `VITE_FB_PIXEL_ID` lives in `.env` (see "Analytics" below). It is committed
   because the id is public; override it in the hosting dashboard if needed. The site loads only
   that one pixel - to install a new pixel id, replace the value and rebuild.
4. **PHP for the lead form.** The lead form posts to `/api/lead.php`, which forwards leads to the
   Perfex CRM server-side. The host must execute PHP (with cURL). Verify after deploying with
   `curl https://ezydigital.in/api/lead.php` - it must return the JSON health check, not the
   SPA `index.html`.
5. **Legal review.** The Privacy Policy and Terms pages are written to be accurate for how this
   website actually works, but they are not legal advice. Have them reviewed if required.

---

## Project structure

```
images/                          Original supplied brand assets (left untouched)
public/
  images/ezy-digital-logo.png    Official logo (copy of the original, served at /images/...)
  api/lead.php                   Same-origin lead proxy -> Perfex CRM (server-side)
  robots.txt  sitemap.xml        Technical SEO files
scripts/verify-config.mjs        Configuration checks (npm run verify)
src/
  components/
    Navbar.jsx Footer.jsx Hero.jsx TrustBar.jsx TrustSection.jsx Honesty.jsx
    PrimaryServices.jsx Services.jsx ServiceCard.jsx Portfolio.jsx
    Pricing.jsx PricingConditions.jsx MetaAdsPricing.jsx VideoPricing.jsx
    AdditionalServices.jsx PackageSpotlight.jsx LeadForm.jsx LeadSection.jsx
    PageHeader.jsx PackageFinder.jsx PackageMatrix.jsx Process.jsx TechStack.jsx
    About.jsx FAQ.jsx Contact.jsx FinalCTA.jsx LegalLayout.jsx
    FloatingCallButton.jsx FloatingActions.jsx
    ScrollManager.jsx
    common/Logo.jsx
    mockups/BrowserFrame.jsx MockupApp.jsx
    ui/Button.jsx Icon.jsx Reveal.jsx SectionHeading.jsx
  config/siteConfig.js           Business details, phone, domain, WhatsApp, CRM endpoint
  data/                          central pricing catalogue (website, Meta Ads, video,
                                 add-ons), primary services, services, lead-form services,
                                 portfolio, process, techStack, faqs, trust, estimator
  hooks/                         useSeo, useActiveSection, useScrolled, useAnalytics
  pages/                         Home, PricingPage, WebsiteDevelopment, WebsiteDevelopmentPricing,
                                 EcommerceWebsiteDevelopment, CustomWebApplications,
                                 MetaAdsManagement, VideoEditing, SocialMediaManagement,
                                 AdditionalDigitalServices, PortfolioPage, AboutPage,
                                 ContactPage, PrivacyPolicy, Terms, ThankYou, NotFound
  utils/scroll.js  utils/analytics.js  utils/leadForm.js
  App.jsx  main.jsx  index.css
.env.example                     Template for local environment variables (.env is gitignored)
```

---

## Design system (2026 refresh)

The whole public site shares one visual system, defined in `src/index.css`:

- **Colour** - signal red (`brand-*`, `#E53935`), charcoal (`ink-*`, `#111111` - `#303030`) and
  cloud whites/greys (`#FFFFFF`, `#F5F5F5`). The token names are unchanged from the previous build,
  so every component kept working while the values, contrast and depth were upgraded.
- **Typography** - `Plus Jakarta Sans` for headings (`font-display`) and `Inter` for body copy, both
  loaded from Google Fonts in `index.html`. `Noto Sans Gujarati` remains for `/service-price`.
- **Primitives** - `ui/Button` (primary / dark / outline / light / ghost / whatsapp), 
  `ui/SectionHeading` (eyebrow + display heading + optional actions), `ui/Reveal` (scroll reveal with
  reduced-motion and no-JS safety), `PageHeader`, `LegalLayout` and `FloatingCallButton`.
- **Surfaces** - `.container-page`, `.surface-grid`, `.glow-red`, `.glass-*`, `.shadow-soft`,
  `.shadow-lift`, `.mask-fade-x` and `.eyebrow` utilities keep spacing, texture and lighting
  consistent on every page.
- **Motion** - one reveal per block, 200-300 ms hover states and light float/marquee accents only.
  Everything is disabled automatically under `prefers-reduced-motion`.

Every route uses the same system: homepage, service pages, pricing, portfolio, about, contact,
thank-you, 404 and the legal pages.

Design-review screenshots (regenerate with `scripts/capture-screenshots.mjs`):

| File | Contents |
| --- | --- |
| `screenshots/homepage-desktop.png` | Hero + navigation at 1440px |
| `screenshots/homepage-mobile.png` | Hero at 390px |
| `screenshots/mobile-action-bar.png` | Fixed Fill Form + Call Now bar at 390px |
| `screenshots/lead-modal.png` | The instant lead form modal |
| `screenshots/desktop-fill-form.png` | Floating Fill Form + Call Now on desktop |
| `screenshots/services-section.png` | Three primary service cards |
| `screenshots/contact-section.png` | Homepage lead capture band |
| `screenshots/footer.png` | Final CTA + footer |
| `screenshots/pricing-page.png`, `contact-page.png`, `thank-you-page.png` | Inner pages |

---

## Tracking (Meta Pixel + Google Analytics)

Two independent tools are installed, and neither one duplicates the other:

| Tool | Where it is installed | Purpose |
| --- | --- | --- |
| Meta Pixel | `src/utils/analytics.js` (loaded once from `src/App.jsx`) | `PageView` + `Lead` events |
| Google Analytics 4 (`G-NLVGK5BQ3D`) | `index.html` `<head>` | page visits and traffic reporting |

### Meta Pixel id

The pixel id is read from the environment, so a new pixel can be installed without editing a
component:

```
# .env  (committed - see the deployment note below)
VITE_FB_PIXEL_ID=2673882233043263
```

**Changing the id:** edit `.env`, rebuild, and confirm with Meta Pixel Helper that only the new id
is initialised. **Disabling tracking:** leave the value empty - every analytics call then no-ops
safely.

> **Deployment note.** `.env` **is committed** on purpose, because its only value is the public Meta
> Pixel id (which is visible in any page source anyway). **Never add real secrets to `.env`** - put
> private values in `.env.local` (gitignored) or in your hosting dashboard's environment variables.

### What is tracked

| User action | Meta event | Parameters |
| --- | --- | --- |
| Page visit / in-app route change | `PageView` | page path |
| Lead form submitted **and confirmed by the CRM** | `Lead` | `lead_source: 'website_form'`, `content_name: 'Lead form - <service>'`, `content_category: 'Form'` |
| Click on any Call Now (`tel:`) link | `Lead` | `lead_source: 'call_click'`, `content_name: 'Call Now button'`, `content_category: 'Call'` |

The pricing/service CTAs still send the existing custom events (`PricingInquiry`,
`ServiceCTAClick`) - those are not Lead events.

A Call Now click only proves that the call action was started. It cannot prove the call connected.

### How it is implemented

- `src/utils/analytics.js` - the single pixel loader (`ensureFbq` + one guarded `fbq('init')`),
  `track()`, `trackPageView()`, `trackCustomEvent()`, `trackLead()`, `trackFormLead()`,
  `trackCallLead()` and the pure `isCallLink()` classifier. Duplicate call clicks on the same link
  inside `CALL_DEDUPE_WINDOW_MS` are swallowed.
- `src/hooks/useAnalytics.js` - initialises the pixel, sends route-change PageViews, and installs
  **one delegated click/aux-click listener** on the document, so every current and future Call Now
  button is counted. `tel:` links are handled with capture phase and never blocked.
- `src/components/LeadForm.jsx` - fires `trackFormLead()` only after the proxy returned
  `success: true` (i.e. the CRM confirmed the lead), then redirects to `/thank-you/`.
- `src/pages/ThankYou.jsx` - sends no `Lead` event at all, so opening the URL directly is never
  counted as a submission.

### Google Analytics

`index.html` loads the exact Google tag for `G-NLVGK5BQ3D` in `<head>`, once, for every page of the
SPA. There is no second GA snippet anywhere. `npm run verify` fails if the id appears more than
twice (script URL + `gtag('config', ...)`) or if a second Meta pixel init is added.

### Privacy

The pixel sets cookies (including `_fbp`) and sends Meta the pages viewed, the lead source, the
selected service name, and standard device/IP data. Google Analytics sets its own cookies. **No
name, mobile number or city is ever sent to Meta or Google** - those values go only to our own lead
proxy and the CRM. Section 6 of the **Privacy Policy** documents this and how visitors can limit it.
Advertising cookies may require a consent banner in some jurisdictions.

---

## Lead generation form, CRM and Thank You page

### Instant capture: sticky button + modal (built for Meta Ads traffic)

Paid traffic should never have to hunt for the form, so it is reachable in one tap from every page:

- **Mobile / tablet:** a fixed bottom bar with **Fill Form** (opens the modal) and **Call Now** (`tel:`).
- **Desktop:** the same two actions stacked bottom-right, Fill Form first.
- **CTA buttons:** navbar "Get a Quote", hero "Get Started", final CTA "Let's Talk" and every page
  header "Get a Quote" open the same modal (page headers preselect the service).
- **Ad-ready URL:** `https://ezydigital.in/?form=1` opens the form automatically on load - use it as a
  Meta ad final URL when you want the form immediately.
- **One form only:** the modal renders the exact `LeadForm` component used on `/contact`, so there is a
  single validation/CRM/tracking path (`LeadModal` → `LeadForm` → `/api/lead.php` → Perfex).

`LeadModal` is accessible (`role="dialog"`, `aria-modal`, Escape to close, focus trap, body scroll
lock) and remembers where the visitor opened it.

### Campaign attribution

Form submissions also carry non-personal campaign data so the team can see which ad produced the lead:

- `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` are read from the URL and kept
  for the session, so a landing on `/?utm_source=facebook...` still attributes a submission made later.
- `fbclid` is recorded as **present / absent** only (the click id itself is not stored).
- These values are appended to the CRM lead description (`Campaign: facebook / paid / metro-leads`,
  `Meta ad click: yes`, `Form opened from: mobile_bar`). No personal data is sent to Meta/Google.

**The form** (`src/components/LeadForm.jsx`, rendered on `/contact`) collects exactly four required
fields: **Full Name**, **Mobile Number**, **City** and **Service Required**. The dropdown is generated
from the service catalogue in `src/data/services.js` (grouped by tier) with the placeholder
*Select Your Required Service*; nothing is invented and nothing is removed. `?service=` deep links
from pricing and service pages preselect the matching service via
`src/data/leadFormServices.js`.

**Validation** happens twice: in the browser (`src/utils/leadForm.js` - Indian mobile numbers must be
10 digits starting 6-9, names/cities are limited and sanitised) and again in the proxy. The submit
button shows a loading state, is disabled while sending, and a ref guard plus a honeypot field block
double submissions and simple bots.

**Submission flow:**

```
Browser (LeadForm)
  -> POST /api/lead.php            (same origin, JSON)
     -> POST https://crm.ezydigital.in/forms/wtl/51cdbcdc72722ab5de415e9cdace0b74
        fields: key, name, phonenumber (+91...), city, description
     <- Perfex answers 302 (accepted) or 200 + form HTML (rejected)
  <- { success: true } ONLY when the CRM accepted the lead
  -> fbq('track', 'Lead', { lead_source: 'website_form', ... })
  -> window.location.assign('/thank-you/')
```

**Why a proxy:** the Perfex web-to-lead endpoint returns no `Access-Control-Allow-Origin` header, so
a browser cannot read the CRM's answer. Posting directly from the browser (with `mode: 'no-cors'`)
would mean guessing the result - the form would have to show success even when the CRM rejected the
lead. `public/api/lead.php` makes the request server-side, reads the real status and only then answers
`success: true`. The CRM form key stays on the server; no private credentials are used or exposed.

Field mapping:

| Form field | CRM field | Notes |
| --- | --- | --- |
| Full Name | `name` | trimmed, max 80 chars |
| Mobile Number | `phonenumber` | normalised to `+91XXXXXXXXXX` |
| City | `city` | trimmed, max 60 chars |
| Service Required | `description` | `Service required: <label>` plus city and source page |

**Thank You page** (`src/pages/ThankYou.jsx`, route `/thank-you`, reached as
`https://ezydigital.in/thank-you/`): headline "Thank You for Contacting Ezy Digital!", the required
confirmation message, a Call Now button, a link back to the site, and `noindex`. It deliberately fires
**no** Lead event, so visiting the URL directly is never counted as a submission.

**Testing the form locally:** `npm run dev:main` includes a development-only middleware in
`vite.config.js` that mirrors the PHP proxy (same CRM URL, same validation, same success rule), so the
whole flow can be tested without PHP. Both implementations must stay in sync -
`npm run verify` checks that they point at the same form key.

---

## How the important pieces work

**Call Now button.** `FloatingActions` renders only `FloatingCallButton` as a fixed pill at the
bottom-right of every route, using `tel:+919512648085` from `siteConfig`. The previous static
floating WhatsApp button (`WhatsAppButton.jsx`) has been removed. WhatsApp links elsewhere in the
content are unchanged.

**Contact.** `Contact` renders the direct channels - call, WhatsApp, email and website - from a
single `contactMethods` array, plus a "what to tell us" checklist. The phone channel uses
`tel:+919512648085`, WhatsApp uses a URL-encoded prefilled message, and email uses `mailto:`. The
contact page adds `LeadForm` (see above), which submits to the CRM and never shows a success state
unless the CRM confirmed the lead. The Privacy Policy describes this behaviour.

**Trust, without fabrication.** There are no invented reviews, ratings, client counts, awards or
statistics anywhere on this site - `scripts/verify-config.mjs` actively fails if such claims are
introduced into the data files. Instead, credibility is built from four honest devices:

1. `TrustBar` - concrete process and ownership promises under the hero.
2. `Honesty` - a "Straight talk" section that states plainly what is *not* on the website and why.
3. `PackageMatrix` - a full feature-by-feature comparison of every package, using the same table we
   quote from, so scope is never vague.
4. `PackageFinder` - an interactive scope guide that recommends the smallest package matching the
   visitor's answers and sends the requirement to WhatsApp. It is deliberately **not** a price
   calculator: it shows the published starting price of the recommended package and states that the
   final figure comes from a written quotation. Recommendation rules live in `src/data/estimator.js`
   and are unit-checked by `npm run verify`.

**Portfolio previews.** `MockupApp` renders eight original mini-layouts (business, e-commerce,
dashboard, restaurant, real estate, education, healthcare, internal web app) with HTML and CSS only.
The artwork scales with the window because the browser frame sets up a CSS container and all inner
sizing uses `cqw` units. No stock photography is used, and every preview is labelled
"Concept Design" or "Demo Project" - they are not presented as delivered client work.

**Pricing.** All packages and prices live in `src/data/pricing.js`. Each card's CTA opens WhatsApp
with a message naming the selected package.

**SEO.** `useSeo` sets the document title, meta description, canonical URL, Open Graph and Twitter
tags per route, and injects FAQ structured data on the home page. The ProfessionalService JSON-LD
in `index.html` contains only verified business information - no ratings, reviews or opening hours.

**Accessibility.** Semantic landmarks, a skip link, visible focus rings, `aria-current` on the active
nav item, `aria-expanded`/`Escape` support in the mobile menu, `aria-live` regions and full
`prefers-reduced-motion` support (all entrance animations are skipped, content renders immediately).

---

## Deployment

The build output is a static SPA in `dist/`, plus one PHP endpoint (`dist/api/lead.php`) that the lead
form needs. Because routes are client-side, configure the host to fall back to `index.html` for
unknown paths (`/privacy-policy`, `/terms`, `/thank-you`, `/thank-you/` and the 404 page).

- **Nginx (current host):** keep `try_files $uri $uri/ /index.html;` for the SPA and add a PHP handler
  so `/api/lead.php` executes:

  ```nginx
  location ~ \.php$ {
      include fastcgi_params;
      fastcgi_pass unix:/run/php/php8.2-fpm.sock;   # adjust to the installed version
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
  }
  ```

  Without the PHP handler the request falls back to `index.html`; the form then shows an error (never
  a false success) and no lead is stored. Verify after deploying:
  `curl https://ezydigital.in/api/lead.php` must return
  `{"success":true,"service":"ezy-digital-lead-proxy",...}`.
- **Apache:** add a rewrite to `/index.html` for non-file requests; PHP runs natively.
- **Netlify / Vercel / static-only hosts:** PHP does not run. The form would fail - an equivalent
  serverless function must be added at `/api/lead.php` with the same JSON contract
  (`{ success: boolean, message: string }`).

Domain, hosting, paid plugins/themes, premium APIs, payment gateway charges and taxes are billed
separately to the client, as stated on the pricing section and in the Terms page.
