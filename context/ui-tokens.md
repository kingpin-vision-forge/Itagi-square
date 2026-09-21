# UI Design Tokens: Hotel Itagi Square

This document defines the core visual design tokens extracted directly from the Figma design frames (`context/`). These tokens form the single source of truth for all styling across the website.

---

## 1. Color Palette

The color system is anchored by regal imperial purple, warm parchment/sand tones, and soft powder blue accents.

### 1.1 Primary & Brand Colors (Imperial Purple)
Used for brand highlights, card wrappers, primary CTAs, icon circles, and the luxury footer.

| Token Name | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| `color-purple-950` | `#1A0322` | `284°, 83%, 7%` | Darkest footer shade / deepest contrast |
| `color-purple-900` | `#2B0736` | `285°, 77%, 12%` | Footer base / Dark overlay gradient |
| `color-purple-800` | `#3A0D47` | `286°, 69%, 17%` | Footer mid-tone |
| `color-purple-700` | `#481454` | `288°, 62%, 21%` | **Main Brand Purple**: Buttons, Card wrapper |
| `color-purple-600` | `#5B1C69` | `289°, 58%, 26%` | Hover state for purple buttons |
| `color-purple-500` | `#742985` | `289°, 53%, 34%` | Accent purple / Interactive hover |
| `color-purple-300` | `#B986C8` | `287°, 40%, 66%` | Subdued purple / borders on dark |
| `color-purple-100` | `#EEDBEE` | `295°, 38%, 90%` | Tinted background highlight |

### 1.2 Neutral & Canvas Colors (Warm Sand & Stone)
Used for page backgrounds, section backdrops, and card faces.

| Token Name | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| `color-sand-50` | `#FAF8F5` | `36°, 33%, 97%` | Ultra-light card highlight |
| `color-sand-100` | `#F4F0E8` | `38°, 32%, 93%` | Primary canvas background (Amenities, Policies) |
| `color-sand-200` | `#E8E2D5` | `39°, 28%, 87%` | Section background ("More Than A Stay", Dining) |
| `color-sand-300` | `#DDD3C3` | `38°, 25%, 81%` | Room card body background |
| `color-sand-400` | `#CFC2AE` | `36°, 24%, 75%` | Card border & dividers |
| `color-sand-500` | `#B3A38C` | `35°, 20%, 63%` | Muted decorative lines |

### 1.3 Accent Colors
| Token Name | Hex Code | HSL Value | Description / Usage |
| :--- | :--- | :--- | :--- |
| `color-sky-blue` | `#ADCDEE` | `211°, 67%, 81%` | **Hero CTA ("BOOK NOW")** |
| `color-sky-blue-hover` | `#96BFEC` | `211°, 72%, 75%` | Hero CTA hover state |
| `color-ticket-peach` | `#F7E5D4` | `29°, 73%, 90%` | Postcard "SEND ⇒" button background |
| `color-ticket-hover` | `#F2DAC4` | `29°, 64%, 86%` | Postcard "SEND ⇒" button hover |
| `color-gold-accent` | `#C79D58` | `37°, 50%, 56%` | Subtle luxury ornaments / chandeliers |

### 1.4 Typography Colors
| Token Name | Hex Code | Description / Usage |
| :--- | :--- | :--- |
| `text-primary-dark` | `#1D161F` | High-contrast dark headings & body on sand |
| `text-muted-dark` | `#5C5260` | Secondary descriptions and policy details |
| `text-purple-heading` | `#481454` | Editorial section titles and card titles |
| `text-inverse-white` | `#FFFFFF` | Hero headline, button text, footer titles |
| `text-inverse-muted` | `#D5C4DB` | Footer links and secondary copyright info |

---

## 2. Typography Tokens

### 2.1 Font Families
- **Display & Headings (Serif)**: `'Cormorant Garamond'`, `'Playfair Display'`, `Georgia`, `serif`
  - High-contrast, editorial elegance with classical serif shapes.
- **Body & Controls (Sans-Serif)**: `'Inter'`, `'Plus Jakarta Sans'`, `system-ui`, `-apple-system`, `sans-serif`
  - Clean, neutral readability for descriptions, metrics, inputs, and form controls.

### 2.2 Type Scale

| Scale Token | Size (rem / px) | Line Height | Tracking (Letter Spacing) | Usage Example |
| :--- | :--- | :--- | :--- | :--- |
| `text-hero` | `4.5rem` / `72px` | `1.1` | `0.15em` (`tracking-widest`) | "HOTEL ITAGI SQUARE" Hero Title |
| `text-brand-display` | `3.75rem` / `60px` | `1.1` | `0.18em` | "ITAGI" in Footer Banner |
| `text-section-title` | `2.5rem` / `40px` | `1.2` | `0.10em` | "ROOMS AND SUITES", "BEFORE YOU ARRIVE." |
| `text-section-subtitle`| `1.125rem` / `18px` | `1.6` | `0.02em` | Subtitles below section titles |
| `text-card-title` | `1.25rem` / `20px` | `1.3` | `0.08em` | "SUITE ROOM", "EXECUTIVE ROOM" |
| `text-nav-link` | `0.875rem` / `14px` | `1.0` | `0.10em` | "ROOMS & SUITES", "DINING", "MORE" |
| `text-btn-pill` | `0.875rem` / `14px` | `1.0` | `0.08em` | "EXPLORE ITAGI", "BOOK NOW" |
| `text-body-regular` | `0.9375rem` / `15px` | `1.6` | `0.01em` | Room cards, amenities, policies |
| `text-caption` | `0.8125rem` / `13px` | `1.5` | `0.02em` | Spec badges, copyright, fine print |

---

## 3. Spacing & Container Tokens

### 3.1 Container Max Widths
- `container-narrow`: `896px` (`56rem`) - Contact postcard form
- `container-default`: `1200px` (`75rem`) - Content sections
- `container-wide`: `1360px` (`85rem`) - Rooms carousel, experience grid
- `container-full`: `100%` - Hero, Footer, Panoramic Dining Ribbon

### 3.2 Vertical Section Padding
- `section-padding-sm`: `3rem` (`48px`)
- `section-padding-md`: `5rem` (`80px`)
- `section-padding-lg`: `7rem` (`112px`)

---

## 4. Border Radius Tokens

| Token Name | Value | Applicable Components |
| :--- | :--- | :--- |
| `radius-full` | `9999px` | "BOOK NOW" pill, "EXPLORE ITAGI" pill, Nav circle arrows (`<`, `>`, `→`) |
| `radius-3xl` | `1.5rem` (`24px`) | "MORE THAN A STAY" image cards |
| `radius-2xl` | `1rem` (`16px`) | Rooms card containers |
| `radius-sm` | `0.25rem` (`4px`) | Contact postcard message textarea |
| `radius-none` | `0px` | Postcard outer border, underlined form inputs |

---

## 5. Elevation & Glassmorphism

| Token Name | CSS Value | Usage |
| :--- | :--- | :--- |
| `glass-nav` | `background: rgba(255, 255, 255, 0.45); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.25);` | Hero top navigation bar |
| `shadow-card` | `0 12px 30px -8px rgba(32, 10, 38, 0.12)` | Room cards hover lift |
| `shadow-ticket` | `0 4px 12px rgba(72, 20, 84, 0.15)` | Vintage ticket "SEND ⇒" button |
| `shadow-pill` | `0 4px 14px rgba(72, 20, 84, 0.25)` | Purple CTA buttons |

---

## 6. Transitions & Micro-Animations

- **Button Hover**: `transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`
- **Card Zoom**: `transform: scale(1.02); transition: transform 0.4s ease-out`
- **Arrow Shift**: `transform: translateX(4px); transition: transform 0.2s ease`
- **Carousel Slide**: `transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)`

---

## 7. Tailwind CSS v4 Integration Snippet

Add into `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  --color-purple-950: #1A0322;
  --color-purple-900: #2B0736;
  --color-purple-800: #3A0D47;
  --color-purple-700: #481454;
  --color-purple-600: #5B1C69;
  --color-purple-500: #742985;
  
  --color-sand-50: #FAF8F5;
  --color-sand-100: #F4F0E8;
  --color-sand-200: #E8E2D5;
  --color-sand-300: #DDD3C3;
  --color-sand-400: #CFC2AE;
  
  --color-sky-blue: #ADCDEE;
  --color-sky-blue-hover: #96BFEC;
  --color-ticket-peach: #F7E5D4;
  
  --font-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}
```
