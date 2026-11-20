# Adding real handbag photography

The site ships with built-in illustrated handbags, so it runs and looks complete with no image files.
To switch to real photography:

1. Add your images to this folder (see file names below).
2. Open `src/config.js` and set `USE_PHOTOS = true`.

If any single file is missing, that spot automatically falls back to the illustration.

## File names

- `hero.jpg` — hero image, square or portrait crop, around 1200 × 1200 px
- `products/aurelia-tote.jpg`
- `products/marisol-shoulder.jpg`
- `products/vesper-crossbody.jpg`
- `products/noir-clutch.jpg`
- `products/cassia-weekender.jpg`
- `products/solenne-mini.jpg`
- `products/oriel-tote.jpg`
- `products/ivoire-clutch.jpg`
- `products/halden-duffle.jpg`
- `products/elara-half-moon.jpg`

Product images should be 4:5 portrait (for example 800 × 1000 px).

## Optimisation tips

- Export as JPG or WebP at 70–80% quality; aim for under 150 KB per product image.
- Tools: Squoosh (squoosh.app), or `npx @squoosh/cli`.
- Keep the same file names, or update the `image` field in `src/data/products.js`.

## Where to get photography (free or licensed)

- Your own brand shoot or a licensed stock library.
- Free libraries such as Unsplash or Pexels allow commercial use, but always check the licence on each image and keep any required credit.
- Do not use photos of real branded products (other companies' bags) for a fictional brand.
