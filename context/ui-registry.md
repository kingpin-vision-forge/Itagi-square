# UI Component Registry: Hotel Itagi Square

This registry catalogues all UI components built for Hotel Itagi Square, specifying their visual role, props contracts, variants, and interactive states.

---

## 1. Component Hierarchy Overview

```mermaid
graph TD
    App[page.tsx] --> Nav[Navbar]
    App --> Hero[HeroSection]
    App --> Rooms[RoomsSuitesCarousel]
    App --> Exp[ExperiencePillars]
    App --> Food[CulinaryRibbonSection]
    App --> Guide[GuestGuideSection]
    App --> Contact[ContactPostcardSection]
    App --> Foot[BrandFooter]

    Rooms --> RoomCard[RoomCard]
    RoomCard --> SpecBadge[RoomSpecBadge]
    RoomCard --> PurpleBtn[PurpleButton]

    Exp --> PillarCard[PillarCard]
    Food --> RibbonGallery[CurvedRibbonGallery]
    Guide --> PolicyCol[PolicyColumn]
    Guide --> AmenityCol[AmenityColumn]
    Contact --> UnderlineInput[UnderlineInput]
    Contact --> TicketBtn[VintageTicketButton]
    Foot --> Newsletter[NewsletterForm]
```

---

## 2. Atomic Components

### 2.1 `Button`
Versatile button component implementing all primary luxury variants.

- **File Path**: `components/ui/button.tsx`
- **Variants**:
  - `hero-pill`: Powder sky blue pill (`#ADCDEE`) with dark typography.
  - `purple-pill`: Solid imperial purple (`#481454`) with white typography.
  - `vintage-ticket`: Scalloped peach ticket (`#F7E5D4`) with purple outline and drop shadow.
  - `icon-circle`: Circular purple button (`#481454`) with centered white SVG icon.
- **Props Interface**:
  ```typescript
  interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'hero-pill' | 'purple-pill' | 'vintage-ticket' | 'icon-circle';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
  }
  ```
- **States**: Default, Hover, Focus, Active, Disabled, Loading.

### 2.2 `UnderlineInput`
Minimalist input field featuring an elegant bottom underline accent used in the vintage contact postcard.

- **File Path**: `components/ui/underline-input.tsx`
- **Props Interface**:
  ```typescript
  interface UnderlineInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
  }
  ```
- **States**: Default (subtle hairline `#8F7E71`), Focus (deep purple `#481454` with 2px underline), Error (crimson alert `#B91C1C`).

### 2.3 `RoomSpecBadge`
Composite indicator pairing a clean line icon with room metric data (area, bed, guests).

- **File Path**: `components/ui/room-spec-badge.tsx`
- **Props Interface**:
  ```typescript
  interface RoomSpecBadgeProps {
    icon: 'grid' | 'bed' | 'users';
    label: string;
    className?: string;
  }
  ```

---

## 3. Molecular Components

### 3.1 `RoomCard`
Two-tone accommodation presentation card.

- **File Path**: `components/molecules/room-card.tsx`
- **Design Reference**: `Desktop - 3.png`
- **Visual Composition**:
  - Top: High-resolution room image.
  - Bottom: Warm sand card face framed by an imperial purple base and side accents.
  - Room title in uppercase purple serif.
  - Description paragraph.
  - 3-item spec badge row.
  - "EXPLORE ITAGI" pill CTA.
- **Props Interface**:
  ```typescript
  export interface RoomData {
    id: string;
    title: string;
    description: string;
    image: string;
    area: string; // e.g. "21 sq m"
    bedType: string; // e.g. "King Bed"
    maxGuests: string; // e.g. "Up to 3 guests"
    link?: string;
  }

  interface RoomCardProps {
    room: RoomData;
    onExplore?: (id: string) => void;
  }
  ```

### 3.2 `PillarCard`
Tall portrait experience card featuring an edge-to-edge photo, bottom gradient, serif title, and circular arrow button.

- **File Path**: `components/molecules/pillar-card.tsx`
- **Design Reference**: `Frame 36.png`
- **Props Interface**:
  ```typescript
  export interface ExperiencePillar {
    id: string;
    title: 'UNWIND' | 'DINE' | 'EXPLORE' | 'CONNECT' | string;
    image: string;
    alt: string;
    href: string;
  }

  interface PillarCardProps {
    pillar: ExperiencePillar;
  }
  ```

### 3.3 `CurvedRibbonGallery`
Architectural arc ribbon displaying culinary specialties with concave top and convex bottom curves.

- **File Path**: `components/molecules/curved-ribbon-gallery.tsx`
- **Design Reference**: `Frame 39.png`
- **Visual Composition**:
  - CSS/SVG masked container clipping image items into a graceful horizontal arch.
  - High-res dish closeups (kebabs, wok delicacies, sizzlers, curries).
  - Hover zoom on individual dishes.

### 3.4 `NewsletterForm`
Pill-shaped inline subscription component.

- **File Path**: `components/molecules/newsletter-form.tsx`
- **Design Reference**: `Frame 42.png`
- **Props Interface**:
  ```typescript
  interface NewsletterFormProps {
    onSubmit?: (email: string) => Promise<void>;
  }
  ```

---

## 4. Section Organisms

### 4.1 `Navbar`
- **File Path**: `components/sections/navbar.tsx`
- **Design Reference**: `Desktop - 1.png`
- **Features**: Frosted glassmorphism (`backdrop-blur-md`), brand logo, links (`ROOMS & SUITES`, `DINING`, `MORE`), mobile hamburger toggle, powder blue `BOOK NOW` CTA.

### 4.2 `HeroSection`
- **File Path**: `components/sections/hero-section.tsx`
- **Design Reference**: `Desktop - 1.png`
- **Features**: Full-bleed hotel entrance image, dark gradient overlay for contrast, monumental serif headline "HOTEL ITAGI SQUARE".

### 4.2.1 `BrandIntro`
- **File Path**: `components/sections/brand-intro.tsx` and `brand-intro.module.css`.
- **Visuals**: Full-screen sand (`#F4F0E8`) with a centered Uncial Antiqua ITAGI wordmark in purple (`#481454`). The ink fades into an SVG cutout of the actual hero; the cutout expands to reveal the page.
- **Motion**: Native Web Animations API; 1.95-second sequence after a bounded wait for the hero/font. Expansion uses `cubic-bezier(0.77, 0, 0.175, 1)`; ink and exit use `cubic-bezier(0.23, 1, 0.32, 1)`.
- **Behavior**: Home page only, on every full page load and refresh. Inline activation runs before first paint, with no session-storage limit. Remains hidden without JavaScript. Keyboard input dismisses immediately; reduced motion uses a 200ms fade. An independent 4.5-second timeout uncovers the page even if hydration fails.

### 4.3 `RoomsSuitesSection`
- **File Path**: `components/sections/rooms-suites-section.tsx`
- **Design Reference**: `Desktop - 3.png`
- **Features**: Section heading, descriptive subtitle, client carousel with swipe & circular purple prev/next controls (`<`, `>`), room cards.

### 4.4 `MoreThanAStaySection`
- **File Path**: `components/sections/more-than-a-stay-section.tsx`
- **Design Reference**: `Frame 36.png`
- **Features**: Section heading, 4 experience pillars (`UNWIND`, `DINE`, `EXPLORE`, `CONNECT`) with hover interactions.

### 4.5 `CulinaryShowcaseSection`
- **File Path**: `components/sections/culinary-showcase-section.tsx`
- **Design Reference**: `Frame 39.png`
- **Features**: Section heading "GOOD FOOD. GOOD MOMENTS.", subtitle, architectural curved arc ribbon gallery, centered "EXPLORE ITAGI" pill CTA.

### 4.6 `GuestGuideSection`
- **File Path**: `components/sections/guest-guide-section.tsx`
- **Design Reference**: `Frame 72.png`
- **Features**:
  - Part 1: "BEFORE YOU ARRIVE." 4-column editorial grid (Policies, Contact, Proximity landmarks, Hotel essentials).
  - Part 2: "AMENITIES" 4-column checklist (Hotel, Dining, Fitness, Rooms).

### 4.7 `ContactPostcardSection`
- **File Path**: `components/sections/contact-postcard-section.tsx`
- **Design Reference**: `Frame 41.png`
- **Features**:
  - Vintage postcard framed container.
  - Left: "CONTACT US" + message textarea.
  - Center: Botanical floral divider engraving.
  - Right: Underlined form fields (Name, Surname, Check-In, Check-Out, Guests, Rooms, Email, Mobile).
  - Scalloped ticket "SEND ⇒" button with validation & submit handling.

### 4.8 `BrandFooter`
- **File Path**: `components/sections/brand-footer.tsx`
- **Design Reference**: `Frame 42.png`
- **Features**: Deep royal purple background, booking contacts, support email, quick links, newsletter subscription, monumental "ITAGI Hospitalities & Retails" logotype, legal links, and Kingpin Vision Forge credit.
