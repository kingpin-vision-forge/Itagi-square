# UI Rules & Design Guidelines: Hotel Itagi Square

These UI rules are mandatory design principles and layout constraints to guarantee visual fidelity, luxury feel, and brand integrity across all screen sizes.

---

## 1. Golden Aesthetic Principles

1. **Luxury Editorial Hierarchy**: Use high-contrast serif typography for headings with generous letter tracking (`letter-spacing: 0.08em - 0.15em`). Always pair with a clean, understated sans-serif for descriptive copy and metrics.
2. **Harmonious Palette Contrast**: Never use generic primary colors. Use only the designated **Imperial Purple** (`#481454`), **Warm Sand/Parchment** (`#E8E2D5`, `#DDD3C3`), and **Powder Sky Blue** (`#ADCDEE`).
3. **Architectural & Vintage Detailing**: Incorporate physical hotel design cues—arches, curves, and botanical engraving accents—into digital UI surfaces.
4. **No Empty Placeholders**: Use real curated imagery reflecting Hotel Itagi Square's architecture, rooms, and cuisine. Never use grey placeholder boxes or dummy generic vectors.

---

## 2. Section Composition Guidelines

### 2.1 Hero Section (`Desktop - 1.png`)
- **Background**: Full-bleed architectural photograph of Hotel Itagi Square entrance. Must have an ambient dark gradient overlay (`rgba(0,0,0,0.35)` to `rgba(0,0,0,0.55)`) to guarantee 4.5:1 text contrast for white text.
- **Navbar**: Floating frosted-glass header with `backdrop-filter: blur(12px)`.
  - Left: "LOGO" brandmark.
  - Center/Right: "ROOMS & SUITES", "DINING", "MORE" in uppercase serif/clean sans with wide tracking.
  - CTA: "BOOK NOW" button styled in powder sky blue (`#ADCDEE`) with dark typography.
- **Hero Title**: "HOTEL ITAGI SQUARE" centered in massive serif display font, pure white, tracked out (`letter-spacing: 0.15em`).

### 2.2 Rooms & Suites Section (`Desktop - 3.png`)
- **Background**: Warm sand neutral canvas (`#F4F0E8`).
- **Heading**: Centered "ROOMS AND SUITES" with subtitle "Thoughtfully designed spaces where contemporary comfort meets effortless relaxation."
- **Controls**: Circular purple navigation buttons (`#481454`) with white chevrons positioned on the left and right flanks.
- **Two-Tone Room Cards**:
  - Top Half: Room photo with 16:10 or 4:3 aspect ratio.
  - Lower Half: Warm sand card face (`#DDD3C3`) framed inside an imperial purple backing (`#481454`).
  - Title: Uppercase serif in purple.
  - Key Specs: 3-column metric row with line icons (Square meters, Bed type, Max guest count).
  - CTA: "EXPLORE ITAGI" pill button in solid purple with white text.

### 2.3 "More Than A Stay" Pillars (`Frame 36.png`)
- **Layout**: 4-column responsive grid (4 columns on desktop, 2 on tablet, 1 on mobile).
- **Cards**:
  - Tall portrait cards (`aspect-ratio: 3/4` or `4/5`) with `rounded-2xl` or `rounded-3xl`.
  - High-res photography showing `UNWIND`, `DINE`, `EXPLORE`, `CONNECT`.
  - Bottom Bar Overlay: Serif title in dark/contrast text on subtle gradient, accompanied by a circular right-arrow button (`→`).
  - Hover Effect: Image scale to `1.04` with smooth 400ms transition.

### 2.4 "Good Food. Good Moments." Curvilinear Arc Ribbon (`Frame 39.png`)
- **Layout**: Architectural panoramic ribbon.
- **Curved Arc Viewport**: The gallery must feature a curved concave top border and convex bottom border (using CSS `clip-path` or SVG mask) reminiscent of grand dining archways.
- **Image Ribbon**: Multi-item horizontal culinary showcase (Indo-Arabic specialties, tandoor platters, sizzlers, desserts).
- **CTA**: Centered "EXPLORE ITAGI" pill button placed directly below the curved ribbon.

### 2.5 "Before You Arrive" & "Amenities" Editorial Columns (`Frame 72.png`)
- **Layout**: Clean 4-column editorial grid separated by delicate hairline divider borders (`#CFC2AE`).
- **Headings**: Serif uppercase (`BEFORE YOU ARRIVE.`, `AMENITIES`, `POLICY RUNDOWN`, `CONTACT INFORMATION`, `IN CLOSE PROXIMITY TO`, `HOTEL ESSENTIALS`, etc.).
- **Typography**: Clean sans-serif items with consistent line height (`leading-relaxed`).

### 2.6 Vintage Postcard Reservation Form (`Frame 41.png`)
- **Container**: Framed postcard container with an outer hairline border (`#481454`) on warm parchment canvas.
- **Split Layout**:
  - Left: "CONTACT US" heading with large framed "Message" textarea.
  - Center: Vertical hairline dividing rule featuring a vintage botanical rosehip floral engraving in the center.
  - Right: Minimalist underlined inputs (Name, Surname, Check-In, Check-Out, Guests, Rooms, Email, Mobile). Underlines are crisp purple hairlines.
- **Submit Button**: Scalloped vintage ticket button with "SEND ⇒" text on soft peach background (`#F7E5D4`) with purple border and shadow.

### 2.7 Brand Footer (`Frame 42.png`)
- **Background**: Deep imperial purple gradient (`#2B0736` to `#1A0322`).
- **Structure**:
  - Top: Logo, Socials, Booking Contacts, Quick Links, Newsletter subscription pill (`input` + `Subscribe` button).
  - Center: Huge monumental "ITAGI" brand serif wordmark + "Hospitalities & Retails" script signature.
  - Bottom: Copyright notice, legal links, and agency attribution (`KINGPIN Vision Forge`).

---

## 3. Typography Rules

- **Heading Rule**: All major section headings must be uppercase serif with wide letter spacing:
  ```css
  font-family: var(--font-serif);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  ```
- **Line Length Rule**: Paragraphs and descriptive body text must never exceed 65 characters per line for optimal readability.
- **Contrast Rule**: Text on light sand backgrounds must use `#1D161F` or `#481454`. Text on purple or image overlays must be `#FFFFFF` or `#F4F0E8`.

---

## 4. Button & Interactive Rules

| Button Variant | Background | Border | Text | Hover State |
| :--- | :--- | :--- | :--- | :--- |
| **Hero "BOOK NOW"** | `#ADCDEE` | None | `#1D161F` (Bold) | `#96BFEC`, slight upward lift (`-2px`) |
| **Pill "EXPLORE ITAGI"** | `#481454` | None | `#FFFFFF` | `#5B1C69`, scale `1.02` |
| **Ticket "SEND ⇒"** | `#F7E5D4` | 1px solid `#481454` | `#481454` | `#F2DAC4`, shadow elevation |
| **Icon Circle (`<`, `>`, `→`)** | `#481454` | None | `#FFFFFF` | `#5B1C69`, icon shifts 2px |

---

## 5. Responsive Breakpoint Rules

- **Mobile (< 640px)**:
  - Hero title scales from 72px down to 36px.
  - Rooms carousel displays 1 card at a time with swipe touch support.
  - "More Than A Stay" pillars stack into 1 column.
  - "Before You Arrive" & "Amenities" stack into 1 column per topic.
  - Contact postcard stacks into vertical layout (Message textarea first, followed by inputs).
- **Tablet (640px - 1024px)**:
  - Rooms carousel displays 2 cards.
  - Experience pillars display 2x2 grid.
  - Amenities display 2 columns.
- **Desktop (1024px+)**:
  - Full desktop mockups with 3 room cards, 4 experience pillars, 4-column editorial tables, and side-by-side postcard contact form.

---

## 6. Accessibility (WCAG 2.2 AA) Standards

- **Color Contrast**: Minimum 4.5:1 for normal text, 3:1 for large headings (18pt+ / 24px+).
- **Focus Rings**: All interactive elements (buttons, inputs, links) must have visible focus indicators (`outline: 2px solid #742985; outline-offset: 2px`).
- **Semantic HTML**: Mandatory `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` elements.
- **Alt Text**: Every image must provide descriptive, contextual alt text (e.g., "Spacious Suite Room with contemporary furnishings at Hotel Itagi Square").
