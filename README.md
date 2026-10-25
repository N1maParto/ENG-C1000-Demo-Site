# Everday

A responsive concept storefront for customizable, reusable everyday essentials.

## Development

Requires Node.js 20.19+ or 22.12+. Run `npm ci` then `npm run dev`. If the default npm cache is unavailable in the cloud workspace, use `npm ci --cache /tmp/everday-npm-cache`.

`npm run build` creates the production output in `dist`; `npm run preview` serves that build. Pages use hash routes (`/#/about` and `/#/products`), so refresh and direct links work on static hosts without server rewrite rules.

## Structure

- `src/products.js`: catalog data and original SVG product illustrations. Add catalog entries here; update category filters in `src/main.js` when introducing a new category.
- `src/main.js`: page rendering, shared header/footer, routing, filtering, customization dialog and demo bag.
- `src/style.css`: shared design tokens, layouts and responsive styling.

The bag is in memory and resets on refresh. Checkout, inventory, newsletter delivery, and personalization fulfillment are mock features; no payment or personal data is submitted. Product and sustainability details are illustrative. Fonts use Google Fonts with local system fallbacks.

## GitHub Pages deployment

In the repository, open Settings → Pages → Build and deployment and select **GitHub Actions** as the source. Open Actions → Deploy website to GitHub Pages → Run workflow (branch: main). Subsequent pushes to main deploy automatically. After the workflow succeeds, the site is available at https://n1maparto.github.io/ENG-C1000-Demo-Site/ . The deployment job also shows the published URL.

If Actions is disabled, enable it in Settings → Actions → General (repository or organization policy may require an administrator). If Pages is unavailable for a private repository on your plan, use an eligible plan or change visibility only if you intend to make the code public.
