# ТОҚ BURGER — landing page

One-page site for TOK burger (Almaty). Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Lucide.
The page's only job is to turn visitors (mostly from Instagram) into WhatsApp orders.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

## Environment variables

Create `.env.local` (or set them in your hosting dashboard):

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | yes, before launch | Real domain, e.g. `https://tokburger.kz`. Used for canonical, sitemap, robots, Open Graph and JSON-LD. The default `https://tokburger.kz` is a placeholder — **the domain was not verified**. |
| `NEXT_PUBLIC_GA_ID` | optional | GA4 measurement ID (`G-XXXXXXX`). If empty, no Google script loads. |

## Where to edit content

Everything lives in **`src/content/site.ts`**:

- `brand.order` — ordering WhatsApp number and prefilled message (verified from the Instagram bio link `share.kz/wa3oq`).
- `branches` — 5 branches with addresses, hours, phones, WhatsApp numbers, coordinates, 2GIS ratings.
- `reviews` — verbatim 2GIS review excerpts (each links to its source).
- `menu` — categories. **Items and prices are empty because no verified source was available.** Add items like:
  ```ts
  { name: "…", description: "…", price: 2990, image: "/images/menu/burger.jpg" }
  ```
  Product cards, prices and Menu JSON-LD appear automatically once items exist.
- `offers` — empty → the offers section is hidden. Add only real, current promotions.
- `brand.heroImage` — set to an official photo path (e.g. `/images/hero.jpg`) to replace the illustrated mark in the hero.
- `instagramPosts` — shortcodes of official posts embedded in the "Ас үйден тікелей" section.

Put official photos in `public/images/` (JPG/PNG/WebP; Next.js serves them as AVIF/WebP with responsive sizes).

### What was verified and what was not (2026-11-08)

| Data | Status | Source |
|---|---|---|
| Logo colours (`#F76103` + white), slogan «Дәммен қуаттан!» | verified | Instagram avatar & bio |
| WhatsApp ordering number +7 708 365 99 41 | verified | Instagram bio link → wa.me |
| 5 branches, addresses, hours, phones, WhatsApp, ratings | verified | 2GIS |
| Reviews | verified, excerpts | 2GIS (per-review stars/dates were not available) |
| Menu items, prices, ingredients | **not available** | 2GIS menu tab empty; Instagram captions need login |
| Promotions / combos | **not available** | — |
| Official food photos | **not available** | Instagram images require login; no stock photos were used |
| Delivery apps (Wolt/Glovo/Yandex Eda) | **not listed** officially | — |
| Official vector logo | **not available** | `BoltBun` in `src/components/icons.tsx` is a redraw from the 150px avatar — replace with the brand file |

## Analytics

`src/lib/analytics.ts` + `src/components/AnalyticsListener.tsx` (one delegated click listener).
Events go to `window.dataLayer` (GTM-ready) and to GA4 if `NEXT_PUBLIC_GA_ID` is set:

| Event | Fires on |
|---|---|
| `order_button_click` | any "Тапсырыс беру" button (`label` = header / hero / final / sticky_mobile / …) |
| `whatsapp_click` | any `wa.me` link |
| `phone_click` | any `tel:` link |
| `menu_view` | menu section 30% visible (once) |
| `product_click` | category "Бағасын сұрау" or product order button |
| `instagram_click` | Instagram links |
| `map_click` | 2GIS / route links |

To track a new element add `data-track="event_name" data-track-label="…"`.
In GA4 mark `order_button_click`, `whatsapp_click` and `phone_click` as key events.

## SEO

- Title/description target «бургер Алматы», «бургерная Алматы», «заказать бургер Алматы», «ТОҚ Burger».
- `src/lib/schema.ts` — JSON-LD: Organization + one `Restaurant` per dine-in branch (address, geo, hours, phone, 2GIS rating); `Menu` is added automatically when menu items exist.
- `robots.txt`, `sitemap.xml`, Open Graph/Twitter image are generated from `src/app/`.
- Page language is Kazakh (`lang="kk"`); meta tags are Russian for search demand. A separate `/ru` version would be the next SEO step.

## Deployment

**Vercel (recommended):** import the repo → set `NEXT_PUBLIC_SITE_URL` (and `NEXT_PUBLIC_GA_ID`) → Deploy. Attach the domain in Project → Domains.

**Any Node host:** `npm ci && npm run build && npm start` (Node 20+, port via `PORT`).

After launch: submit `https://<domain>/sitemap.xml` in Google Search Console and Yandex Webmaster; add the site URL to the 2GIS company card and Instagram bio.
