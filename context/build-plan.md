# Build & Implementation Plan: Hotel Itagi Square

This implementation plan outlines the engineering roadmap to build the Hotel Itagi Square website. The project is divided into logical, testable phases.

---

## Phase 1: Foundation, Asset Pipeline & Design Tokens

### Objectives
- Set up assets, typography, and design tokens to create a solid development baseline.

### Tasks
1. **Asset Migration & Organization**:
   - Create directories: `public/images/hero`, `public/images/rooms`, `public/images/dining`, `public/images/experiences`, `public/icons`.
   - Copy and crop the source imagery from `context/` (`Desktop - 1.png`, `Desktop - 3.png`, `Frame 36.png`, `Frame 39.png`) into optimized web formats.
2. **Typography Setup in `app/layout.tsx`**:
   - Configure `next/font/google` with `Cormorant Garamond` (luxury serif headings) and `Inter` (sans-serif body).
   - Define CSS variables `--font-cormorant` and `--font-inter`.
3. **Tailwind CSS v4 `@theme` Configuration**:
   - Update `app/globals.css` with the design tokens defined in `ui-tokens.md` (Imperial Purple `#481454`, Warm Sand `#F4F0E8`, Powder Blue `#ADCDEE`, Peach Ticket `#F7E5D4`).
4. **Utility Functions**:
   - Install `clsx` and `tailwind-merge` if required, or configure lightweight `cn()` helper in `lib/utils.ts`.

---

## Phase 2: Design System Primitives & Atomic Components

### Objectives
- Build clean, reusable primitives matching the visual design.

### Tasks
1. **Button Primitives (`components/ui/button.tsx`)**:
   - Implement `hero-pill` (powder sky blue `#ADCDEE`, dark bold text).
   - Implement `purple-pill` (imperial purple `#481454`, white text).
   - Implement `vintage-ticket` (peach background, scalloped border, purple outline).
   - Implement `icon-circle` (circular purple button with centered SVG arrow).
2. **Underlined Input Primitives (`components/ui/underline-input.tsx`)**:
   - Underlined inputs with purple focus transitions for the contact form.
3. **Room Spec Badges (`components/ui/room-spec-badge.tsx`)**:
   - Square meter, Bed type, and Guest capacity line icon badges.
4. **Vintage Botanical Divider SVG (`components/ui/vintage-divider.tsx`)**:
   - Clean SVG representation of the engraved botanical rosehip flower for the postcard form.

---

## Phase 3: Static Data Layer & TypeScript Contracts

### Objectives
- Create strictly typed data models and datasets so content remains maintainable and decoupled.

### Tasks
1. Define types in `types/`:
   - `room.ts`: `RoomData`
   - `experience.ts`: `ExperiencePillar`
   - `culinary.ts`: `CulinaryItem`
   - `guide.ts`: `PolicyGroup`, `AmenityGroup`
   - `contact.ts`: `ReservationInquiry`
2. Populate data modules in `data/`:
   - `rooms.ts`: Suite Room, Executive Suite, Executive Room details.
   - `experiences.ts`: Unwind, Dine, Explore, Connect definitions.
   - `culinary.ts`: Indo-Arabic dining highlights and photos.
   - `policies.ts`: Check-in times, payment methods, nearby attractions.
   - `amenities.ts`: Hotel, Dining, Fitness, Rooms amenities lists.

---

## Phase 4: Hero Section & Frosted Navigation

### Objectives
- Deliver the commanding luxury first impression seen in `Desktop - 1.png`.

### Tasks
1. **Frosted Glass Navbar (`components/sections/navbar.tsx`)**:
   - Fixed header with dynamic background blur on scroll.
   - Brand logo and navigation links with wide tracking.
   - Sky blue "BOOK NOW" pill CTA.
   - Responsive mobile slide-out drawer with hamburger toggle.
2. **Hero Section (`components/sections/hero-section.tsx`)**:
   - Fullscreen background image of Hotel Itagi Square entrance.
   - Gradient overlay ensuring high text readability.
   - Centered monumental serif headline: "HOTEL ITAGI SQUARE".

---

## Phase 5: Rooms & Suites Interactive Carousel

### Objectives
- Recreate the accommodations showcase from `Desktop - 3.png`.

### Tasks
1. **Two-Tone Room Card (`components/molecules/room-card.tsx`)**:
   - Image header, warm sand card body, purple framing wrapper.
   - Uppercase serif title, description, spec badges, and "EXPLORE ITAGI" button.
2. **Carousel Slider (`components/sections/rooms-suites-section.tsx`)**:
   - Section title "ROOMS AND SUITES" + subtitle.
   - Left (`<`) and right (`>`) purple circular navigation controls.
   - Smooth animated transitions between slides with touch swipe support on mobile devices.

---

## Phase 6: "More Than A Stay" Experience Pillars

### Objectives
- Build the 4-column lifestyle grid from `Frame 36.png`.

### Tasks
1. **Pillar Card Component (`components/molecules/pillar-card.tsx`)**:
   - Portrait aspect ratio with smooth hover zoom.
   - Dark gradient bottom overlay.
   - Serif title (`UNWIND`, `DINE`, `EXPLORE`, `CONNECT`) and circular arrow button (`→`).
2. **Section Assembly (`components/sections/more-than-a-stay-section.tsx`)**:
   - 4-column responsive grid on sand background.

---

## Phase 7: "Good Food. Good Moments." Curvilinear Ribbon

### Objectives
- Implement the signature architectural arc gallery from `Frame 39.png`.

### Tasks
1. **Curved Arc Gallery (`components/molecules/curved-ribbon-gallery.tsx`)**:
   - Create concave upper curve and convex lower curve mask using SVG/CSS `clip-path`.
   - Multi-photo horizontal showcase of Indo-Arabic gourmet dishes.
2. **Section Wrapper (`components/sections/culinary-showcase-section.tsx`)**:
   - Title "GOOD FOOD. GOOD MOMENTS." and subtitle.
   - Centered "EXPLORE ITAGI" purple pill CTA.

---

## Phase 8: Guest Guide & Amenities Editorial Grid

### Objectives
- Implement the comprehensive editorial columns from `Frame 72.png`.

### Tasks
1. **"Before You Arrive" Section**:
   - 4-column editorial table: Policy Rundown, Contact Information, In Close Proximity To, Hotel Essentials.
   - Hairline dividers and structured bullet points.
2. **"Amenities" Section**:
   - 4-column structured checklist: Hotel, Dining, Fitness, Rooms.

---

## Phase 9: Vintage Postcard Contact & Reservation Form

### Objectives
- Craft the vintage editorial postcard inquiry card from `Frame 41.png`.

### Tasks
1. **Postcard Container (`components/sections/contact-postcard-section.tsx`)**:
   - Postcard border frame on parchment background.
   - Split layout: Left message box, center botanical flower engraving divider, right underlined inputs.
2. **Form State & Submission**:
   - Interactive controlled inputs (Name, Surname, Check-In, Check-Out, Guests, Rooms, Email, Mobile).
   - Scalloped peach ticket button ("SEND ⇒") with submission loading and success confirmation modal.

---

## Phase 10: Royal Purple Brand Footer

### Objectives
- Construct the imperial purple footer from `Frame 42.png`.

### Tasks
1. **Footer Layout (`components/sections/brand-footer.tsx`)**:
   - Gradient background (`#2B0736` to `#1A0322`).
   - Booking contacts, customer support, quick links.
   - Newsletter subscription pill component.
   - Monumental brand logotype: "ITAGI Hospitalities & Retails".
   - Legal copyright & "KINGPIN Vision Forge" agency credit.

---

## Phase 11: Verification, Performance & Quality Assurance

### Objectives
- Ensure flawless operation across devices and browsers.

### Tasks
1. **Responsive Testing**:
   - Validate on Mobile (iPhone 14/15, 390px), Tablet (iPad, 768px), and Desktop (1440px).
2. **Build & Type Check**:
   - Run `npm run build` and `npm run lint` to verify zero compile or type errors.
3. **Core Web Vitals & Accessibility Check**:
   - Validate color contrast, alt text, ARIA attributes, and image preloading.
