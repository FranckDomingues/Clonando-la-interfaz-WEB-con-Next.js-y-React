# Project Context

## 1. Project Goal

The purpose of this project is to recreate three Airbnb-style views in Next.js in order to practice component architecture, reusable UI, state management, responsive design, and navigation.

## 2. Target User

The target user is a traveler looking for accommodation. They want to browse available rooms, search and review listings, inspect the details of a selected room, and navigate through the platform to make an informed booking decision.

## 3. Home Page — /

The Home page will provide the main entry point for discovering available accommodations. It should allow users to start a search, browse categories, and explore a grid of listings.

Likely UI regions and reusable components include:

- Navbar for brand identity, navigation, and account actions.
- Search bar for entering the main search criteria.
- User menu area for account-related actions.
- Category filters for narrowing or organizing listing results.
- Listing grid for displaying available accommodations.
- Listing card for presenting a concise summary of each accommodation.
- Loading state while listing data is being retrieved.

Final component props will be defined during implementation when the data requirements are clear.

## 4. Catalog Page — /catalog

The Catalog page will display search results in a dedicated browsing experience. It should help users understand the current result set, refine or sort it, and select a listing to inspect its details.

Likely UI regions and reusable components include:

- Results header with the current search context and result information.
- Sort control for changing the order of the results.
- Listing results using the reusable ListingCard component.
- Map placeholder representing a possible map-based results area.
- Responsive desktop/mobile layout that adapts the results presentation to the available space.

## 5. Room Detail Page — /rooms/[id]

The Room Detail page will present the complete information for a selected accommodation identified by its dynamic route parameter. It should give users enough context to evaluate the room and continue toward booking.

Likely UI regions and reusable components include:

- Back navigation or breadcrumb for returning to the previous browsing context.
- Photo gallery for viewing images of the room and property.
- Room header with the main identification information.
- Rating and reviews section.
- Location information.
- Host information.
- Amenities section.
- Booking card with the main reservation actions and information.
- Guest counter for selecting the number of guests.
- Loading state while room data is being retrieved.

## 6. Shared Components

The following components are likely to be reused across multiple pages:

- Navbar, shared by the main application views for consistent navigation and user actions.
- ListingCard, shared by the Home page and Catalog page to present listing summaries consistently.
- LoadingIndicator, shared wherever asynchronous listing or room data requires a loading state.

## 7. Responsive Strategy

The implementation must be mobile-first. The design should first be developed for a 375px viewport and then adapted for desktop layouts starting at 768px.

## 8. Navigation Model

The expected navigation flow is:

- Home -> Room Detail
- Catalog -> Room Detail
- Room Detail -> Catalog

Internal navigation must use Next.js `Link`.

## 9. Implementation Constraints

The implementation must follow these constraints:

- Next.js 16.
- TypeScript.
- Tailwind CSS.
- App Router.
- Functional React components.
- Components stored in `/components`.
- Types and interfaces stored in `/types`.
- No component libraries.
- No inline style objects.
- Reusable components.
- One responsibility per component.
- Approximately 80 lines maximum per component before considering splitting it.

Visual specifications must not be invented before the screenshot analysis phase. Visual details will be added later after the screenshots have been analyzed.

## Home Visual Specification — 375px

The mobile Home page at a 375px viewport contains a top search control with a search icon and the text **“Comienza a explorar”**, followed by horizontally overflowing category items. Each category item includes an icon and label; visible examples are **Todo**, **Alojamientos**, and **Experiencias**. **Todo** appears visually selected in the screenshot, but its exact selected-state styling is not determined.

The page contains two vertically stacked listing sections. The first is titled **“Alojamientos populares en Orlando”** and the second **“Hoteles excelentes para tu próximo viaje”**. Both sections show a circular right-arrow navigation control. The second section also includes supporting descriptive text.

Each section contains a horizontal listing carousel. Cards may be partially visible at the viewport edge and visibly include an image, an optional **“Favorito entre huéspedes”** badge, a favorite heart control, listing title or location text, price, a stay or pricing qualifier such as **“por 2 noches”**, and a rating.

A floating pricing notice contains a tag or label-style icon and the text **“Los precios incluyen todas las tarifas”**. Bottom mobile navigation is visible at the bottom of the viewport and includes an icon and label for **Explorar**, **Favoritos**, and **Iniciar sesión**. **Explorar** appears visually active in the screenshot.

The specification is limited to the observed 375px mobile structure. Desktop behavior, exact visual tokens, icon assets, interaction details, loading-state appearance, data interfaces, and implementation choices remain undetermined.

## Vision-to-Specification Record

Visual analysis was completed before implementation for each principal view. Detailed records remain in `docs/`, with the following consolidated evidence of the component, data, and layout decisions.

### Home — 375px

- Detailed specification: `docs/home-visual-spec-375.md`
- Specification commit: `d1c0aa5 docs: add Home 375px visual specification`
- Components/data: search control, category filters, reusable `ListingCard`, listing sections, price notice, and mobile navigation using listing, category, and navigation data.
- Layout relationship: vertically stacked mobile sections with category navigation and listings adapted from the mobile baseline at desktop breakpoints.

### Catalog — 375px

- Detailed specification: `docs/catalog-visual-spec-375.md`
- Specification commit: `369cf20 docs: add Catalog visual specification`
- This specification existed before Catalog implementation commit `98d8956 feat: implement Catalog results and price sorting`.
- Components/data: catalog header and controls, shared `ListingCard`, static listing results, sorting state, fee notice, and map placeholder.
- Layout relationship: one-column mobile results with the map below; desktop results and map are placed in adjacent columns.

### Room Detail — 375px

- Detailed specification: `docs/room-detail-visual-spec-375.md`
- Specification commit: `8333fee docs: add Room Detail visual specification`
- This specification existed before Room implementation commit `a2ca1f0 feat: implement Room Detail experience`.
- Components/data: `RoomGallery`, `RoomOverview`, host summary/profile, location, amenities, reviews, `BookingPanel`, and typed `RoomData`.
- Layout relationship: mobile single-column detail content with persistent booking access; desktop separates detail content from the booking panel.
