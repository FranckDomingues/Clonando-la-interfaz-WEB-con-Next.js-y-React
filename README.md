# Airbnb UI Clone

Responsive Airbnb-inspired interface built with Next.js, React, TypeScript, and Tailwind CSS.

## Routes

- `/` — Home discovery experience with search, categories, loading state, listing sections, and mobile navigation.
- `/catalog` — Catalog results with result count, price sorting, shared listing cards, and a responsive map placeholder.
- `/rooms/[id]` — Room Detail with simulated loading, gallery controls, property information, reviews, amenities, host details, and booking controls.

## Implemented functionality

- Mobile-first responsive layouts targeting 375px and desktop layouts from 768px.
- Shared `ListingCard` navigation from Home and Catalog to existing Room Detail ids.
- Room Detail gallery with local state and Previous / Next controls.
- Guest count controls with a minimum of one guest.
- Compact persistent mobile booking summary and desktop booking panel.
- Internal navigation with Next.js `Link`.
- Static representative data only; no external APIs, map services, payment flow, or date picker.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npm run build
```

Both checks pass for the completed Home, Catalog, and Room Detail implementation.
