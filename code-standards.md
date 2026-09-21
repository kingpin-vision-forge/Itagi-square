# Engineering & Code Standards: Hotel Itagi Square

This document outlines the engineering conventions, style guidelines, and quality standards for all development in the `itagi-square` codebase.

---

## 1. General TypeScript Guidelines

- **Strict Typing**: TypeScript `strict` mode is enabled in `tsconfig.json`. Explicitly type all component props, function returns, and API payloads.
- **No `any`**: Do not use `any`. Use `unknown` with type guards if the type is truly dynamic.
- **Interfaces for Data Contracts**: Use `interface` for object shapes, props, and data models. Use `type` for unions, intersections, and primitive aliases.
- **Explicit Imports**: Use absolute imports via the `@/` path alias configured in `tsconfig.json`:
  ```typescript
  // Preferred
  import { Button } from '@/components/ui/button';
  import { RoomData } from '@/types/room';

  // Avoid
  import { Button } from '../../../components/ui/button';
  ```

---

## 2. React 19 & Next.js 16 App Router Conventions

### 2.1 Server Component Default
- Every component is a Server Component unless interactive state, event listeners (`onClick`, `onChange`), or browser APIs (`window`, `localStorage`, hooks) are strictly required.
- Isolate `"use client"` to the smallest possible leaf component. Do not mark an entire page or large layout as `"use client"`.

### 2.2 React 19 Patterns
- Leverage React 19 features such as `useActionState` or server actions for form handling where applicable.
- Avoid unnecessary `useEffect` hooks for derived state; compute derived values during render.

### 2.3 Component Anatomy Standard
Structure all React component files with uniform organization:

```typescript
// 1. Client directive (if needed)
'use client';

// 2. Standard library & Next imports
import React, { useState } from 'react';
import Image from 'next/image';

// 3. Third-party library imports
import { ChevronLeft, ChevronRight } from 'lucide-react';

// 4. Internal component & utility imports
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { RoomData } from '@/types/room';

// 5. Component Props Interface
export interface RoomsCarouselProps {
  rooms: RoomData[];
  initialIndex?: number;
  className?: string;
}

// 6. Main Component
export function RoomsCarousel({ rooms, initialIndex = 0, className }: RoomsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));
  };

  // Render
  return (
    <div className={cn('relative w-full', className)}>
      {/* Component JSX */}
    </div>
  );
}
```

---

## 3. Tailwind CSS v4 Standards

### 3.1 CSS-First Theme Integration
- In Tailwind CSS v4, styling tokens are declared directly in CSS via `@theme` in `app/globals.css`.
- Always consume design tokens via standard utility classes (`bg-purple-700`, `text-sand-100`, `font-serif`, etc.) rather than hardcoding ad-hoc hex values.

### 3.2 Responsive Utility Ordering
Maintain consistent class ordering:
1. Display & Position (`relative`, `flex`, `grid`, `absolute`, `z-10`)
2. Box Model & Dimensions (`w-full`, `max-w-4xl`, `h-auto`, `p-6`, `m-auto`)
3. Typography (`font-serif`, `text-2xl`, `tracking-wider`, `text-purple-900`)
4. Visual Appearance (`bg-sand-100`, `rounded-2xl`, `border`, `shadow-md`)
5. Interactive & Pseudo-classes (`hover:scale-105`, `focus:ring-2`, `active:opacity-90`)
6. Responsive Breakpoints (`sm:`, `md:`, `lg:`, `xl:`) in ascending order.

### 3.3 Class Merging
Always use the `cn()` utility (`clsx` + `tailwind-merge`) when accepting custom `className` props:
```typescript
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## 4. Naming Conventions

| Item Type | Convention | Example |
| :--- | :--- | :--- |
| **Component Files** | `kebab-case.tsx` | `room-card.tsx`, `navbar.tsx` |
| **Component Names** | `PascalCase` | `RoomCard`, `Navbar`, `RoomsCarousel` |
| **Hooks** | `camelCase` prefixed with `use` | `useScrollPosition.ts` |
| **Utilities & Data** | `kebab-case.ts` | `rooms.ts`, `format-date.ts` |
| **Types / Interfaces** | `PascalCase` | `RoomData`, `ReservationInquiry` |
| **CSS Variables** | `--kebab-case` | `--color-purple-700` |
| **Constants** | `SCREAMING_SNAKE_CASE` | `MAX_GUESTS_PER_ROOM = 4` |

---

## 5. Performance & Image Guidelines

- **Always use `next/image`**: Never use raw `<img>` tags.
- **Explicit Dimensions & Aspect Ratios**: Always set `width` and `height`, or use `fill` with a parent element having a defined `aspect-ratio`.
- **Above the Fold Optimization**: The Hero entrance image must include:
  ```tsx
  <Image
    src="/images/hero-entrance.png"
    alt="Hotel Itagi Square Grand Entrance"
    fill
    priority
    quality={90}
    sizes="100vw"
    className="object-cover object-center"
  />
  ```
- **Lazy Loading**: All imagery below the fold (`Rooms`, `Dining`, `Experiences`) must load lazily by default.

---

## 6. Accessibility (A11y) & SEO Standards

- **Semantic HTML**: Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`, `<button>`, `<label>`.
- **Labels on Form Controls**: Every input in the contact postcard must have an associated `<label>` or explicit `aria-label`.
- **Interactive Buttons**: Do not use `<div>` with `onClick` handlers. Always use `<button type="button">` or Next.js `<Link>`.
- **Color Contrast**: Verify all text against its background to ensure compliance with WCAG 2.2 Level AA.
- **Document Outline**: Every page must have exactly one `<h1>` (in the Hero section) followed by logical `<h2>` and `<h3>` tags.
