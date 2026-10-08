# Al-Quds restaurant page

Reference: https://belisa-fluid-demo.squarespace.com/

Implemented on 2026-10-06 at `/alquds`. The requested single restaurant homepage replaces the route placeholder. The hotel homepage and shared hotel chrome remain independent.

## Page sequence

1. Full-bleed food hero with centered wordmark, anchor navigation, italic heading, and cuisine link.
2. Restaurant introduction with an angled oval image.
3. Cuisine highlights with round photos and category filters.
4. Online ordering section with Zomato and Swiggy destinations driven by `data/alquds.ts`.
5. Typographic dining invitation.
6. Location and visit disclosures with directions and phone links.
7. Dining enquiry call-to-action and restaurant footer with return to the hotel.

## Content still required

- Owner-approved complete menu, prices, dietary details, and actual food photos. Currently reuses the three editorial dishes already present in `data/culinary.ts`; these are highlights, not a claimed complete menu.
- Exact restaurant Zomato and Swiggy listing URLs. Both are null, with visible coming-soon states, until supplied. A non-null URL renders the external order button.
- Confirm restaurant-specific opening hours and reservation contact. Currently uses the existing hotel's phone and address and asks guests to call for hours.

## Verification

Production build, TypeScript, ESLint, and diff whitespace checks passed. Chromium checks covered 320, 390, 768, and 1440px widths without horizontal overflow; menu filters (one category and reset); image loading; a single h1; native visit disclosures; keyboard skip-link focus; and reduced-motion behavior. Desktop and mobile screenshots were visually reviewed. The first sandboxed build stalled; the same build succeeded outside the sandbox. No deployment performed.

## Visual direction

Belisa-inspired cream and burgundy color blocks, Cormorant Garamond italic headings, full-width photography, oval and round photo crops, flat square controls. The supplied reference supersedes the earlier emerald proposal. Existing hotel font consolidation is preserved. Motion is limited to a short hero entrance and button feedback with reduced-motion support.

## Generated asset

Built-in image generation produced `public/images/alquds/feast.webp` (1536 × 1024, about 306 KiB). This is illustrative photography, not verified restaurant photography. Original PNG retained in the generation output directory.

Prompt: Use case: photorealistic-natural. Create one landscape 1536x1024 editorial food photograph for the hero of Al-Quds, an Indo-Arabic restaurant. Rich cinematic tabletop still life, burgundy velvet curtain background, muted olive green table linen, aged brass serving platter of fragrant saffron biryani on right, small platter of coriander-green charcoal grilled skewers lower left, small bowls of yogurt and herbs, brass cutlery, clear water glasses. Warm directional afternoon light, deep natural shadows, analog film texture, luxury restaurant editorial photographed with 50mm lens. Composition has breathing room in the central upper half for a cream italic headline to be added in code; food remains visibly appetizing around edges and lower third. Full bleed photo only, no text, no typography, no logos, no frames. No alcohol. This is illustrative cuisine photography, not an actual restaurant interior.
