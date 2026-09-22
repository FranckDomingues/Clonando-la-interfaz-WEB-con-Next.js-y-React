# Airbnb Interface Clone — Next.js & React

## Overview

This project is a responsive Airbnb-inspired interface built from screenshot-driven visual specifications. It demonstrates a mobile-first React implementation with static representative data, reusable components, and App Router navigation.

The project intentionally focuses on the interface experience. It does not implement real APIs, payments, checkout, date selection, maps, or external gallery services.

## Implemented Views

- `/` — Home discovery view with search, categories, listing sections, loading behavior, and mobile navigation.
- `/catalog` — Catalog results view with result count, price sorting, shared listing cards, and a responsive map placeholder.
- `/rooms/[id]` — Dynamic Room Detail view with loading and not-found states, gallery controls, property information, amenities, reviews, host details, and booking controls.

## Key Features

- Mobile-first responsive layouts targeting 375px, with desktop adaptation from 768px.
- Shared `ListingCard` navigation from Home and Catalog to Room Detail ids.
- Next.js `Link` for internal navigation.
- Local React state for search, categories, sorting, gallery navigation, and guest count.
- Simulated loading effects with cleanup.
- Compact persistent mobile booking access and a full desktop booking panel.
- Static typed room and listing data with no package additions beyond the project foundation.

## React Requirements Demonstrated

- Functional components with focused responsibilities.
- `useState` for interactive UI state.
- `useEffect` for simulated loading behavior and timeout cleanup.
- `useMemo` for derived Home and Catalog data.
- Reusable props-driven components and TypeScript interfaces.
- Responsive rendering with mobile and desktop layout variants.

## Project Structure

```text
app/                 App Router pages and global styles
	page.tsx           Home
	catalog/page.tsx   Catalog results
	rooms/[id]/        Dynamic Room Detail
components/          Reusable interface components
data/                Static room data
types/               Shared TypeScript types
docs/                Visual specifications and development log
```

## Visual Specification Workflow

Each major view was analyzed from its 375px visual reference before implementation. The resulting specifications are preserved in:

- `docs/home-visual-spec-375.md`
- `docs/catalog-visual-spec-375.md`
- `docs/room-detail-visual-spec-375.md`

The chronological implementation record is maintained in `docs/project-development-log.md`.

## Running the Project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Technology

- Next.js 16.3.5 with App Router and Turbopack
- React 19.2.8
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Notes

Validation for the completed implementation includes linting, production build checks, and HTTP route checks for Home, Catalog, and representative Room Detail ids. The project is a UI clone for demonstration and learning purposes, not a production booking application.
