# Everday

A responsive concept storefront for customizable, reusable everyday essentials.

## Development

Requires Node.js 20.19+ or 22.12+. Run `npm ci` then `npm run dev`. If the default npm cache is unavailable in the cloud workspace, use `npm ci --cache /tmp/everday-npm-cache`.

`npm run build` creates the production output in `dist`; `npm run preview` serves that build. Configure production hosting to serve `index.html` for client-side routes (`/about` and `/products`).

## Structure

- `src/products.js`: catalog data and original SVG product illustrations. Add catalog entries here; update category filters in `src/main.js` when introducing a new category.
- `src/main.js`: page rendering, shared header/footer, routing, filtering, customization dialog and demo bag.
- `src/style.css`: shared design tokens, layouts and responsive styling.

The bag is in memory and resets on refresh. Checkout, inventory, newsletter delivery, and personalization fulfillment are mock features; no payment or personal data is submitted. Product and sustainability details are illustrative. Fonts use Google Fonts with local system fallbacks.
