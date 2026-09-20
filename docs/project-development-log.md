# Project Development Log

## Project

Repository:
https://github.com/FranckDomingues/Clonando-la-interfaz-WEB-con-Next.js-y-React

Project:
Airbnb-inspired interface clone using Next.js and React.

The project will reproduce three views:

- Home — `/`
- Catalog / Search Results — `/catalog`
- Room Detail — `/rooms/[id]`

---

## Stage 01 — Project Initialization

### Objective

This stage established the technical foundation only, without implementing Airbnb UI.

### Technical Stack

- Next.js 16.3.5
- React 19.2.8
- TypeScript 5.9.3
- Tailwind CSS 4.3.3
- ESLint 9.39.5
- npm
- App Router
- Turbopack development server

### Project Structure Established

The project structure established:

- `/app`
- `/components`
- `/types`
- `@/*` import alias
- no `/src`
- existing Git repository preserved

`components/.gitkeep` and `types/.gitkeep` were used so the empty required directories could be tracked by Git.

### Verification

The following checks passed:

- development server started successfully
- `npm run lint`
- `npm run build`

### Scope Control

No Airbnb Navbar, listing cards, search UI, or other application components were implemented in this stage.

### Commit

`6b04a31 chore: initialize Next.js 16 Airbnb UI clone`

---

## Stage 02 — Initial Project Context

### Objective

`context.md` was created before UI implementation to document:

- project goal
- target user
- three required routes
- likely major components
- mobile-first strategy
- navigation model
- implementation constraints

### Responsive Baseline

- mobile-first
- initial viewport: 375px
- desktop adaptation begins at 768px

### Navigation Requirements

- Home -> Room Detail
- Catalog -> Room Detail
- Room Detail -> Catalog
- internal navigation must use Next.js `Link`

### Architecture Constraints

- functional React components
- reusable components
- `/components`
- `/types`
- no component libraries
- no inline style objects
- one responsibility per component
- approximately 80 lines maximum before considering splitting

### Verification

`context.md` passed the requirements audit before commit.

### Commit

`84bea30 docs: add initial project context`

---

## Stage 03 — Home Vision-to-Specification — 375px

### Objective

The actual Airbnb mobile Home screenshot at 375px was used as the visual source of truth before implementation.

The workflow was:

Screenshot
-> visual analysis
-> component identification
-> data/props analysis
-> layout relationships
-> reviewed specification
-> persisted documentation

### Observed Home Structure

The approved visual structure includes:

- mobile search control
- horizontal category navigation
- category items with icon and label
- two vertically stacked listing sections
- horizontal listing carousels
- reusable ListingCard
- circular section navigation controls
- floating pricing notice
- bottom mobile navigation

`Todo` appears visually active, and `Explorar` appears visually active. Exact visual tokens and desktop behavior remain undetermined.

### Component Architecture Identified

The approved component candidates are:

- MobileSearch
- CategoryNavigation
- CategoryItem
- ListingSection
- SectionHeader
- SectionNavigationButton
- ListingCarousel
- ListingCard
- PriceNotice
- MobileBottomNav
- MobileBottomNavItem

These are specification-level component candidates and had not yet been implemented at the end of this stage.

### ListingCard Visible Data

The visible information requirements are:

- unique listing identity
- image
- title/location
- price
- stay/pricing qualifier
- rating
- optional guest-favorite badge
- favorite state/control
- destination or identifier for selection

No TypeScript interfaces were created in this document.

### Evidence

The detailed approved specification is stored in:

`docs/home-visual-spec-375.md`

The concise Home visual summary was added to:

`context.md`

### Scope Control

- no React components were created
- `app/page.tsx` was not changed
- no packages were installed
- implementation had not started yet

### Commit

`d1c0aa5 docs: add Home 375px visual specification`

---

## Stage 04A — Static Mobile Home Implementation

### Objective

The approved 375px Home visual specification was converted into a static React
component structure before adding state or effects.

### Components Implemented

- MobileSearch
- CategoryNavigation
- CategoryItem
- ListingSection
- SectionHeader
- ListingCarousel
- ListingCard
- PriceNotice
- MobileBottomNav
- MobileBottomNavItem

### Types

`types/listing.ts` was created with minimal types for:

- Listing
- Category
- NavigationItem

### Implementation Scope

- `app/page.tsx` now composes the static Home page
- static representative listing data is used
- mobile-first layout was implemented
- horizontal category/listing overflow is present
- two listing sections are rendered
- PriceNotice and MobileBottomNav remain in normal document flow
- no desktop-specific >=768px layout was implemented yet

### Deferred Functionality

Stage 04A intentionally did NOT implement:

- useState
- useEffect
- search filtering
- category state
- favorite behavior
- loading behavior
- real carousel logic
- API calls
- dynamic fetching
- Catalog
- Room Detail

### Verification

- 375px visual checkpoint passed
- `npm run lint` passed
- `npm run build` passed
- components remained focused and under approximately 80 lines

### Commit

`747a6e1 feat: build static mobile Home structure`

---

## Stage 04B — Home Functionality and Responsive Completion

### Functionality completed

- Home search implemented with useState
- real-time case-insensitive listing filtering
- selected category implemented with useState
- Todo is the initial selected category
- Experiencias supports an empty state when no mock data exists
- simulated initial loading implemented with useEffect
- timeout cleanup implemented
- ListingCard uses Next.js Link to `/rooms/[id]`
- LoadingIndicator component added

### Responsive completion

- 375px mobile structure preserved
- section headings/descriptions wrap correctly
- horizontal carousel overflow remains scoped to the carousel
- desktop adaptation begins at >=768px
- desktop layout remains restrained and centered
- no unsupported desktop Navbar was introduced

### Validation

- `npm run lint` passed
- `npm run build` passed
- no packages added
- Catalog and Room Detail were intentionally not implemented during this stage

### Commit

`9f487a0 feat: complete Home interactions and responsive behavior`

---

## Stage 05A — Catalog Vision-to-Specification

- Catalog Results 375px screenshot reviewed
- Search Overlay screenshot reviewed as secondary evidence
- primary results-page component hierarchy identified
- shared ListingCard reuse planned
- screenshot-vs-project map-placement conflict explicitly documented
- result count and price sorting recognized as requirement-driven features
- no implementation was performed

## Stage 05B — Catalog Implementation

### Functionality completed

- `/catalog` route implemented
- six representative static listings added
- result count derived from listing data
- price sorting implemented with `useState`
- sorting options:
  - Recommended
  - Price: Low to High
  - Price: High to Low
- sorting does not mutate the original listing array
- existing shared `ListingCard` reused
- Catalog cards navigate to `/rooms/[id]`
- Catalog header includes back navigation, search summary, and filter control
- "Prices include all fees" notice included
- static MapPlaceholder implemented without external map dependencies

### Responsive behavior

- mobile uses a single-column results layout
- mobile map placeholder appears below results
- desktop >=768px places results on the left and map on the right
- no unsupported desktop Navbar was introduced

### Validation

- 375px visual checkpoint passed
- desktop visual checkpoint passed
- `npm run lint` passed
- `npm run build` passed
- no packages added
- Room Detail was intentionally not implemented during this stage

### Commit

`98d8956 feat: implement Catalog results and price sorting`

### Current Status

Completed:

- Home
- Catalog visual specification
- Catalog implementation

Still pending:

- Room Detail visual specification
- Room Detail implementation
- final navigation/integration review
- final README/documentation

## Current Project Status

### Completed

- project initialization
- initial project context
- Home 375px visual analysis
- Home visual specification documentation
- Home static implementation (Stage 04A)
- Home functionality and responsive completion (Stage 04B)
- Home
- Catalog 375px visual specification
- Catalog implementation

### Still pending

- Room Detail visual specification
- Room Detail implementation
- final navigation/integration review
- final README/documentation

---

## Documentation Strategy

Documentation is being produced progressively.

- `context.md` contains product and architecture context.
- Files under `docs/` preserve detailed development and specification evidence.
- This development log tracks chronological progress.
- `README.md` will be consolidated and finalized after the implementation is complete.

Unfinished functionality is not claimed as implemented.
