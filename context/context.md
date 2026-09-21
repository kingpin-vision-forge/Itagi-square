# Hotel Itagi Square — Complete Project Context

This document consolidates the complete context, design specifications, architecture, tokens, and execution guidelines for the **Hotel Itagi Square** website.

---

## Table of Contents
1. [Project Overview & Brand Identity](#1-project-overview--brand-identity)
2. [Visual Design Analysis of Figma Mockups](#2-visual-design-analysis-of-figma-mockups)
3. [UI Design Tokens](#3-ui-design-tokens)
4. [UI Rules & Layout Guidelines](#4-ui-rules--layout-guidelines)
5. [UI Component Registry](#5-ui-component-registry)
6. [System Architecture & Data Models](#6-system-architecture--data-models)
7. [Engineering & Code Standards](#7-engineering--code-standards)
8. [Build Plan & Implementation Roadmap](#8-build-plan--implementation-roadmap)
9. [Progress Tracker](#9-progress-tracker)

---

## 1. Project Overview & Brand Identity

**Hotel Itagi Square** is a luxury hospitality destination offering accommodations, authentic Indo-Arabic fine dining, refined banquet spaces, and wellness experiences. This platform serves as the premier digital gateway for the hotel.

- **Brand Spirit**: Grand architectural heritage with modern boutique comforts.
- **Architectural Cues**: Grand arches, warm amber illumination, palatial pillars, and regal imperial purple.
- **Key Audiences**: Luxury travelers, business executives, culinary connoisseurs, event and wedding planners.
- **Technology Foundation**: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4, Lucide React icons.

---

## 2. Visual Design Analysis of Figma Mockups

The site design is derived directly from the mockups in the `context/` directory:

1. **`Desktop - 1.png` (Hero & Navigation)**:
   - Fullscreen hotel entrance facade framed by lush palms and warm ambient lights.
   - Frosted glass navbar with backdrop blur (`backdrop-blur-md`).
   - Links: `ROOMS & SUITES`, `DINING`, `MORE`.
   - Action CTA: Powder sky-blue pill button (`BOOK NOW`).
   - Hero Headline: Centered, monumental serif all-caps `HOTEL ITAGI SQUARE`.

2. **`Desktop - 3.png` (Rooms & Suites Showcase)**:
   - Header: `ROOMS AND SUITES` with descriptive subtitle.
   - Interactive carousel flanked by circular imperial purple navigation buttons (`<`, `>`).
   - 3 two-tone accommodation cards: `SUITE ROOM`, `EXECUTIVE SUITE`, `EXECUTIVE ROOM`.
   - Card structure: Room photo top, warm sand card face, imperial purple backing frame.
   - Specs: 21 sq m, King Bed, Up to 3 guests.
   - Card CTA: Pill button `EXPLORE ITAGI` in solid purple.

3. **`Frame 36.png` ("More Than A Stay" Pillars)**:
   - 4 tall portrait cards with rounded corners: `UNWIND`, `DINE`, `EXPLORE`, `CONNECT`.
   - High-contrast typography with circular arrow buttons (`→`).

4. **`Frame 39.png` ("Good Food. Good Moments." Curvilinear Ribbon)**:
   - Header: `GOOD FOOD. GOOD MOMENTS.` with subtitle.
   - Unique architectural arc ribbon featuring concave top and convex bottom curves framing Indo-Arabic specialties.
   - Centered `EXPLORE ITAGI` pill CTA below the gallery.

5. **`Frame 72.png` (Guest Guide & Amenities)**:
   - **Before You Arrive**: 4-column editorial layout (Policy Rundown, Contact Information, Proximity Landmarks, Hotel Essentials).
   - **Amenities**: 4-column structured checklist (Hotel, Dining, Fitness, Rooms).

6. **`Frame 41.png` (Vintage Postcard Contact Form)**:
   - Postcard container with hairline border on parchment canvas.
   - Left: `CONTACT US` header + framed message textarea.
   - Center: Hairline dividing rule with botanical rosehip flower engraving.
   - Right: Underlined inputs (Name, Surname, Check-In, Check-Out, Guests, Rooms, Email, Mobile).
   - Action Button: Scalloped peach ticket button `SEND ⇒`.

7. **`Frame 42.png` (Royal Purple Brand Footer)**:
   - Deep imperial purple gradient (`#2B0736` to `#1A0322`).
   - Contact numbers, quick links, newsletter subscription pill.
   - Monumental `ITAGI` brand logotype with `Hospitalities & Retails` signature.
   - Copyright, legal policy links, and agency attribution (`KINGPIN Vision Forge`).

---

## 3. UI Design Tokens

### Color Palette
- **Imperial Purple**:
  - `purple-950`: `#1A0322` (Footer darkest tone)
  - `purple-900`: `#2B0736` (Footer base / Dark overlays)
  - `purple-800`: `#3A0D47` (Footer mid-tone)
  - `purple-700`: `#481454` (**Primary Brand Purple**: Buttons, Card wrapper, Nav arrows)
  - `purple-600`: `#5B1C69` (Hover state)
  - `purple-500`: `#742985` (Active accent)
- **Warm Sand & Stone**:
  - `sand-50`: `#FAF8F5` (Card highlight)
  - `sand-100`: `#F4F0E8` (Primary section canvas)
  - `sand-200`: `#E8E2D5` (Secondary section canvas)
  - `sand-300`: `#DDD3C3` (Room card face)
  - `sand-400`: `#CFC2AE` (Dividers & borders)
  - `sand-500`: `#8F7E71` (Form hairlines)
- **Accent Colors**:
  - `sky-blue`: `#ADCDEE` (Hero CTA "BOOK NOW")
  - `sky-blue-hover`: `#96BFEC`
  - `ticket-peach`: `#F7E5D4` (Postcard "SEND ⇒" button)
  - `gold-accent`: `#C79D58` (Luxury motifs)

### Typography & Fonts
- **Serif Display**: `'Cormorant Garamond'`, `'Playfair Display'`, `Georgia`, `serif`
- **Sans-Serif Body**: `'Inter'`, `system-ui`, `-apple-system`, `sans-serif`
- **Letter Spacing**:
  - `tracking-widest` (`0.15em` - `0.20em`) for `HOTEL ITAGI SQUARE`, section headers, and footer wordmark.
  - `tracking-wider` (`0.08em` - `0.10em`) for card titles, nav links, and button labels.

### Border Radius
- `rounded-full`: Pill buttons (`BOOK NOW`, `EXPLORE ITAGI`, `Subscribe`, circle arrows `<` `>` `→`).
- `rounded-2xl` / `rounded-3xl`: Experience pillar cards (`Frame 36.png`).
- `rounded-none`: Postcard outer border, underlined form inputs.

---

## 4. UI Rules & Layout Guidelines

1. **Aesthetic Tone**: Crisp luxury editorial. Avoid plain generic elements.
2. **Text Contrast**: Maintain minimum 4.5:1 ratio. On sand backgrounds use `#1D161F` or `#481454`. On purple use `#FFFFFF` or `#F4F0E8`.
3. **Buttons**:
   - Hero button: Powder blue pill with dark bold text.
   - Section buttons: Royal purple pill with white text.
   - Postcard button: Scalloped peach ticket button with purple outline and drop shadow.
4. **Imagery**: Use real high-res photography with subtle hover transforms (`scale-102` or `scale-104`).
5. **Responsiveness**: Mobile-first fluid scaling from 375px up to 1440px+.

---

## 5. UI Component Registry

- **Primitives (`components/ui/`)**:
  - `button.tsx`: Variants `hero-pill`, `purple-pill`, `vintage-ticket`, `icon-circle`.
  - `underline-input.tsx`: Minimalist underlined text inputs with floating label/placeholder.
  - `room-spec-badge.tsx`: Spec badge pairing line icons with text metrics.
  - `vintage-divider.tsx`: Engraved rosehip botanical flower SVG.
- **Molecules (`components/molecules/`)**:
  - `room-card.tsx`: Two-tone room presentation card.
  - `pillar-card.tsx`: Experience portrait card with bottom title & arrow button.
  - `curved-ribbon-gallery.tsx`: Concave/convex architectural arc gallery.
  - `policy-column.tsx` & `amenity-column.tsx`: Structured editorial columns.
  - `newsletter-form.tsx`: Pill subscription form.
- **Sections (`components/sections/`)**:
  - `navbar.tsx`, `hero-section.tsx`, `rooms-suites-section.tsx`, `more-than-a-stay-section.tsx`, `culinary-showcase-section.tsx`, `guest-guide-section.tsx`, `contact-postcard-section.tsx`, `brand-footer.tsx`.

---

## 6. System Architecture & Data Models

- **Framework**: Next.js 16 (App Router) + React 19.
- **Server Components**: Used for static sections (`layout.tsx`, `page.tsx`, `HeroSection`, `GuestGuideSection`, `BrandFooter`).
- **Client Components**: Used where browser interaction is required (`Navbar` for scroll/drawer, `RoomsSuitesCarousel` for slide animation/touch, `ContactPostcardSection` for form validation).
- **Type-Safe Data**: Separated into `data/` modules (`rooms.ts`, `experiences.ts`, `culinary.ts`, `policies.ts`, `amenities.ts`).

---

## 7. Engineering & Code Standards

- **TypeScript**: Strict mode, interfaces for objects/props, absolute imports `@/...`.
- **CSS**: Tailwind CSS v4 CSS-first configuration via `@theme` in `app/globals.css`.
- **Class Merging**: `cn()` utility using `clsx` and `tailwind-merge`.
- **Images**: Next.js `<Image>` with explicit dimensions or `fill`, `priority` for above-the-fold hero image.
- **Accessibility**: Semantic HTML5 elements, ARIA labels for icon-only buttons, valid form labels.

---

## 8. Build Plan & Implementation Roadmap

- **Phase 1: Foundation, Asset Pipeline & Design Tokens** (In Progress)
  - Copy and optimize photography into `public/images/`.
  - Configure fonts in `app/layout.tsx`.
  - Add Tailwind v4 `@theme` design tokens in `app/globals.css`.
  - Install dependencies (`clsx`, `tailwind-merge`, `lucide-react`) and create `lib/utils.ts`.
- **Phase 2**: Primitives & UI Atoms (`Button`, `UnderlineInput`, `RoomSpecBadge`, `VintageDivider`).
- **Phase 3**: TypeScript Contracts & Static Data Layer.
- **Phase 4**: Navbar & Hero Section.
- **Phase 5**: Rooms & Suites Carousel.
- **Phase 6**: "More Than A Stay" Experience Pillars.
- **Phase 7**: "Good Food. Good Moments." Curvilinear Ribbon.
- **Phase 8**: Guest Guide & Amenities Editorial Tables.
- **Phase 9**: Vintage Postcard Contact Form.
- **Phase 10**: Royal Purple Brand Footer.
- **Phase 11**: Verification, Responsiveness, Lighthouse & QA.

---

## 9. Progress Tracker

| Milestone | Target | Status |
| :--- | :--- | :--- |
| **Milestone 0** | Specs & Documentation | **Completed** |
| **Milestone 1** | Foundation, Tokens & Assets (Phase 1) | **Completed** |
| **Milestone 2** | Design System Primitives (Phase 2) | **In Progress** |
| **Milestone 3** | Above the Fold Experience (Phase 4) | Pending |
| **Milestone 4** | Core Features & Galleries (Phase 5, 6, 7) | Pending |
| **Milestone 5** | Guest Information & Booking (Phase 8, 9) | Pending |
| **Milestone 6** | Brand Footer & Polish (Phase 10, 11) | Pending |
