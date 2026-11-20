# LUXORA BAGS — Portfolio Demo

A premium single-page website for a **fictional** luxury handbag brand, built by **AVYRONIX DIGITAL** to showcase the ₹10,000 Professional Website package.

> LUXORA BAGS is not a real store. There is no checkout, no payment, and no order processing. The contact form is a front-end demo and sends nothing.

## Stack

React 18 · Vite 5 · Framer Motion · Lucide React · plain CSS3. No paid APIs or services.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Build and preview production output:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repo.
3. Vercel auto-detects Vite (`vercel.json` already sets build command `npm run build` and output `dist`).
4. Optional: add the environment variable `VITE_WHATSAPP_NUMBER` (see below), then deploy.

Or from the CLI: `npx vercel --prod`.

## Configuration

Everything you will want to change is in `src/config.js`:

| Setting | What it does |
| --- | --- |
| `BRAND` | Email, address and hours shown in the contact section |
| `VITE_WHATSAPP_NUMBER` | Env variable, digits only with country code (e.g. `919876543210`). Copy `.env.example` to `.env`. If empty, WhatsApp opens with a contact chooser. |
| `MAP_QUERY` | Place shown in the Google Maps embed (no API key needed) |
| `USE_PHOTOS` | `false` = built-in illustrations, `true` = real photos from `public/images` |
| `SOCIALS` | Footer social links (currently point to platform home pages) |

Products live in `src/data/products.js`.

## Adding photography

See `public/images/README.md` for file names, sizes and optimisation tips.

## Project structure

```
src/
  App.jsx               page assembly + lazy-loaded modal
  config.js             brand, WhatsApp, map, image switch
  data/products.js      sample products and categories
  components/
    Navbar, Hero, Intro, Featured, Gallery,
    WhyChoose, Story, Banner, Contact, Footer,
    ProductModal, ProductImage, BagArt, Reveal
  index.css             all styles (design tokens at the top)
```

## Performance and accessibility notes

- Vendor and Framer Motion code are split into separate chunks; the quick-view modal is lazy-loaded.
- Images are lazy-loaded with explicit dimensions; the built-in illustrations are lightweight SVG.
- Respects `prefers-reduced-motion`; keyboard focus styles, skip link, labelled dialog and form errors announced to screen readers.

## Before using for a real client

- Replace the sample copy, products and prices.
- Connect the contact form to a real service (for example Formspree, EmailJS or your own API).
- Replace the sample address, map location and social links.
