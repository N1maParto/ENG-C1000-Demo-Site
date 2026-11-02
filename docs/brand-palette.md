# WorkFuel brand guide

**Fuel your day. Protect tomorrow**

The visual direction takes cues from a neighborhood workwear shop: charcoal metal, warm tan accents, grounded greens, and simple, practical typography. Mountain photography remains on Home and About; product colors retain sage, forest, oat, and sand.

| Role | Hex | CSS token |
| --- | --- | --- |
| Charcoal green background | `#191D19` | `--bg` |
| Dark olive section background | `#242B24` | `--surface` |
| Raised green surface | `#343C30` | `--surface-raised` |
| Warm ivory primary text | `#F4EDDC` | `--text` |
| Warm stone secondary text | `#C9C8B4` | `--muted` |
| Tan accent / button fill | `#D2B48C` | `--accent` |
| Light tan hover | `#E2C9A6` | `--accent-hover` |
| Dark button text | `#1B231A` | `--ink` |
| Warm focus ring | `#D2B48C` | `--gold` |
| Sage control border | `#8B947C` | `--border` |

## Typography and slides

All page and section titles share bold Arial/Helvetica with the WorkFuel wordmark, using mixed-case lettering and close spacing inspired by the product reference. Page-specific wording remains unchanged. The wordmark is warm ivory; title emphasis uses tan. Use DM Sans for body text. The shared `--title-font` token keeps heading and wordmark typography consistent. All lettering, including product labels, is sans-serif; emphasized headings are upright, not italic.

For slides, use charcoal backgrounds, ivory titles, and stone body text. Reserve tan for short callouts, key figures, and actions. Use at least 24 pt body text and 36–48 pt headings; keep paragraphs short and left aligned. Avoid text over busy photographs. Check the actual projector for legibility and do not rely on color alone to communicate meaning.

The website uses shared CSS tokens in `src/style.css`. Products and illustrations live in `src/products.js`; the four products are Bottle, Lunchbox, Thermos, and Thermos Cleaner. The Bottle's sage finish and steel cup cap/foot complement its side handle. The cleaner has a twisted-wire shaft, dense bristles, and a reusable grip.
