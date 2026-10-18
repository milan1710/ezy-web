# Ezy Digital - Website

Production marketing website for **Ezy Digital** (owner: **Milan Soni**), a website development,
e-commerce and Meta Ads management studio based in Upleta, Gujarat, India.

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
| `npm run verify` | Runs 100 configuration checks (phone, WhatsApp, website/Meta Ads prices, additional services, service-price page content, enquiry validation, finder logic, comparison matrix, trust copy, Meta Pixel wiring, canonical URLs) |
| `npm run dev:ceramic` | Start the standalone ceramic micro-site dev server (`http://localhost:5174/ceramic/`) |
| `npm run build:ceramic` | Build the standalone ceramic micro-site into `ceramic/dist/` |
| `npm run build:all` | Build the main site, build the ceramic micro-site, then copy it into `dist/ceramic/` |
| `npm run preview:all` | Preview the combined `dist/` output at `http://localhost:4180/` |

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
   because the id is public; override it in the hosting dashboard if needed.
4. **Legal review.** The Privacy Policy and Terms pages are written to be accurate for how this
   website actually works, but they are not legal advice. Have them reviewed if required.

---

## Project structure

```
images/                          Original supplied brand assets (left untouched)
public/
  images/ezy-digital-logo.png    Official logo (copy of the original, served at /images/...)
  robots.txt  sitemap.xml        Technical SEO files
  __layout-check.html            TEMPORARY dev-only layout harness - delete before deploy
  __section-check.html           TEMPORARY dev-only layout harness - delete before deploy
scripts/verify-config.mjs        Configuration checks (npm run verify)
src/
  components/
    Navbar.jsx Footer.jsx Hero.jsx TrustBar.jsx TrustSection.jsx Honesty.jsx
    Services.jsx ServiceCard.jsx Portfolio.jsx Pricing.jsx PricingConditions.jsx
    MetaAdsPricing.jsx AdditionalServices.jsx PackageSpotlight.jsx EnquiryForm.jsx
    PageHeader.jsx PackageFinder.jsx PackageMatrix.jsx Process.jsx TechStack.jsx
    About.jsx FAQ.jsx Contact.jsx FinalCTA.jsx LegalLayout.jsx
    FloatingCallButton.jsx WhatsAppButton.jsx FloatingActions.jsx
    ScrollManager.jsx
    common/Logo.jsx
    mockups/BrowserFrame.jsx MockupApp.jsx
    ui/Button.jsx Icon.jsx Reveal.jsx SectionHeading.jsx
  config/siteConfig.js           Business details, phone, domain, WhatsApp, email
  data/                          central pricing catalogue (website, Meta Ads, add-ons),
                                 services, portfolio, process, techStack, faqs, trust, estimator
  hooks/                         useSeo, useActiveSection, useScrolled, useAnalytics
  pages/                         Home, WebsiteDevelopment, WebsiteDevelopmentPricing,
                                 EcommerceWebsiteDevelopment, CustomWebApplications,
                                 MetaAdsManagement, SocialMediaManagement,
                                 AdditionalDigitalServices, PortfolioPage, AboutPage,
                                 ContactPage, PrivacyPolicy, Terms, NotFound
  utils/scroll.js  utils/analytics.js
  App.jsx  main.jsx  index.css
.env.example                     Template for local environment variables (.env is gitignored)
```

---

## Analytics (Meta / Facebook Pixel)

The pixel id is kept out of the code and read from the environment, so it can be changed at any time
without editing a single component:

```
# .env  (not committed - see .env.example)
VITE_FB_PIXEL_ID=2673882233043263
```

**Changing the id:** edit `.env` locally, and set the same variable in your hosting dashboard for
production (Netlify / Vercel / cPanel environment variables). Rebuild after changing it.
**Disabling tracking:** leave the value empty - every analytics call then no-ops safely.

> **Deployment note.** `.env` **is committed** on purpose, because its only value is the public Meta
> Pixel id (which is visible in any page source anyway). That way the pixel keeps working when the
> site is built straight from the repository. **Never add real secrets to `.env`** - put private
> values in `.env.local` (gitignored) or in your hosting dashboard's environment variables, and
> override `VITE_FB_PIXEL_ID` there if you ever want a different pixel per environment.

### What is tracked

| Event | When it fires |
| --- | --- |
| `PageView` | Once on first load, and again on **every in-app route change** (the site is a single page app, so route changes would otherwise be invisible) |
| `Lead` | When a visitor clicks a **phone** (`tel:`), **WhatsApp** (`wa.me`) or **email** (`mailto:`) link - i.e. whenever someone actually tries to get in touch |

Lead events carry useful breakdown values so Meta's Events Manager shows which button converted:

```js
{ content_name: 'Phone call button',  content_category: 'Call',     source: 'call' }
{ content_name: 'WhatsApp button',    content_category: 'WhatsApp', source: 'whatsapp' }
{ content_name: 'Email link',         content_category: 'Email',    source: 'email' }
```

### How it is implemented

- `src/utils/analytics.js` - pixel loader plus `track()`, `trackPageView()`, `trackLead()` and a
  pure `describeLink()` classifier. Returns safely when no pixel id is configured.
- `src/hooks/useAnalytics.js` - initialises the pixel, sends route-change PageViews, and installs
  **one delegated click/aux-click listener** on the document. Because the listener is delegated at
  the document level, every current *and future* call/WhatsApp/email CTA is counted automatically -
  the floating buttons, header phone icon, hero, pricing cards, package finder, enquiry links and
  footer alike. New buttons need no extra tracking code.
- Called once from `src/App.jsx`.

### Privacy

The pixel sets cookies (including `_fbp`) and sends Meta the pages viewed, the fact that a call or
WhatsApp button was clicked, and standard device/IP data. No name, phone number, email address or
project detail is ever sent, because this website has no form and collects no such data. Section 6 of
the **Privacy Policy** describes this in full and explains how visitors can limit it. Keep that page
up to date if you change what is tracked - and note that advertising cookies may require a consent
banner in some jurisdictions.

`npm run verify` checks that the pixel id is present and correctly formed in `.env`, that call,
WhatsApp and email links are classified as leads, that ordinary links are not, and that the hook is
actually wired up in `App.jsx`.

---

## How the important pieces work

**Mandatory call button.** `FloatingActions` renders `WhatsAppButton` and `FloatingCallButton` as a
fixed stack at the bottom-right of every route, using
`tel:+919512648085` and `https://wa.me/919512648085?text=<url-encoded message>`.
Both come from `siteConfig`, so the number exists in exactly one place.

**Contact.** `Contact` renders the direct channels - call, WhatsApp, email and website - from a
single `contactMethods` array, plus a "what to tell us" checklist. The phone channel uses
`tel:+919512648085`, WhatsApp uses a URL-encoded prefilled message, and email uses `mailto:`.
The contact page adds `EnquiryForm`, which validates the fields in the browser and opens WhatsApp
with the enquiry prefilled. It does **not** submit to a server or store visitor data, and it does not
show a fake success state. The Privacy Policy describes this behaviour.

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

The build output is a static SPA in `dist/`. Because routes are client-side, configure the host to
fall back to `index.html` for unknown paths (`/privacy-policy`, `/terms`, and the 404 page).

- **Netlify / Vercel:** SPA fallback is on by default; build command `npm run build`, publish `dist`.
- **Apache:** add a rewrite to `/index.html` for non-file requests.
- **Nginx:** use `try_files $uri $uri/ /index.html;`.

Domain, hosting, paid plugins/themes, premium APIs, payment gateway charges and taxes are billed
separately to the client, as stated on the pricing section and in the Terms page.
