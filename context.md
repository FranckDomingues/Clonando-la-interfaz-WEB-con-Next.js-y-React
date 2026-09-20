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
