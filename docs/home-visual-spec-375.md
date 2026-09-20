# Home Page Visual Specification — 375px

## 1. Visible Page Structure

From top to bottom, the mobile Home page visibly contains:

1. A top search control with:
   - Search icon
   - Text: **“Comienza a explorar”**
2. A horizontally scrollable category navigation.
3. Category items containing an icon and text label, including:
   - Todo
   - Alojamientos
   - Experiencias
4. A first listing section titled:
   - **“Alojamientos populares en Orlando”**
5. A circular right-arrow navigation control for the first section.
6. A horizontal accommodation listing carousel.
7. Listing cards containing:
   - Listing image
   - Optional **“Favorito entre huéspedes”** badge
   - Favorite heart control
   - Listing title or location text
   - Price
   - Visible stay or pricing qualifier, such as **“por 2 noches”**
   - Rating
8. A second listing section titled:
   - **“Hoteles excelentes para tu próximo viaje”**
9. Supporting descriptive text for the second section.
10. A circular right-arrow navigation control for the second section.
11. A second horizontal accommodation listing carousel.
12. A floating pricing notice containing:
   - Tag or label-style icon
   - Text: **“Los precios incluyen todas las tarifas”**
13. Bottom mobile navigation visible at the bottom of the viewport, with:
   - Icon and label for Explorar
   - Icon and label for Favoritos
   - Icon and label for Iniciar sesión

The page is composed of vertically stacked sections. Category items and listing cards overflow horizontally within their respective areas.

## 2. Component Tree

```text
HomePage
├── MobileSearch
├── CategoryNavigation
│   └── CategoryItem
├── ListingSection
│   ├── SectionHeader
│   │   └── SectionNavigationButton
│   └── ListingCarousel
│       └── ListingCard
├── ListingSection
│   ├── SectionHeader
│   │   └── SectionNavigationButton
│   └── ListingCarousel
│       └── ListingCard
├── PriceNotice
└── MobileBottomNav
    └── MobileBottomNavItem
```

The component tree does not include a loading component because no loading state is visible in the screenshot.

## 3. Component Specifications

### HomePage

**Responsibility:**  
Compose the visible mobile Home page structure in its observed vertical order.

**Visible content:**  
Search control, category navigation, two listing sections, floating pricing notice, and bottom mobile navigation.

**Likely props:**  
No props are currently justified.

**Parent:**  
Application route `/`.

**Children:**

- `MobileSearch`
- `CategoryNavigation`
- Two `ListingSection` instances
- `PriceNotice`
- `MobileBottomNav`

**Layout relationship:**  
Provides the overall vertical page structure. The pricing notice and bottom navigation are visually separate from the listing sections.

**Mobile behavior:**  
The content is organized for a 375px viewport. Category items and listing cards use horizontal overflow while the sections stack vertically.

**Reusable:**  
No. It is specific to the Home route.

### MobileSearch

**Responsibility:**  
Provide the visible mobile search entry point.

**Visible content:**

- Search icon
- Text: **“Comienza a explorar”**

**Likely props:**

- Search label or placeholder
- Optional activation handler

No icon library or implementation is specified.

**Parent:**  
`HomePage`.

**Children:**  
Search icon and text content.

**Layout relationship:**  
Appears near the top of the page, above the category navigation.

**Mobile behavior:**  
Occupies the top mobile area as the primary search entry point.

**Reusable:**  
Possibly. Similar search functionality may be useful on other pages.

### CategoryNavigation

**Responsibility:**  
Display the available categories in a horizontal navigation area.

**Visible content:**  
Category items with icons and labels, including:

- Todo
- Alojamientos
- Experiencias

**Likely props:**

- Category items
- Selected category
- Optional category selection handler

**Parent:**  
`HomePage`.

**Children:**  
Multiple `CategoryItem` components.

**Layout relationship:**  
Appears below the search control and above the first listing section.

**Mobile behavior:**  
Items extend horizontally and overflow beyond the initial viewport.

**Reusable:**  
Possibly.

### CategoryItem

**Responsibility:**  
Represent one category option with its icon and text label.

**Visible content:**

- Icon
- Text label

Visible examples include:

- Todo
- Alojamientos
- Experiencias

**Likely props:**

- Label
- Icon representation
- Selected state
- Optional selection handler

The actual icon assets, icon library, and selected-state implementation are not determined.

**Parent:**  
`CategoryNavigation`.

**Children:**  
An icon and a text label.

**Layout relationship:**  
Displayed as one item in the horizontally arranged category sequence.

**Mobile behavior:**  
Remains within the horizontally overflowing category navigation.

**Reusable:**  
Yes, within category navigation structures.

**Observed state:**  
“Todo” appears visually selected or highlighted in the screenshot. The exact styling and implementation of that state are not determined.

### ListingSection

**Responsibility:**  
Group one listing collection with its title, optional description, section navigation control, and carousel.

**Visible content:**

First section:

- Title: **“Alojamientos populares en Orlando”**
- Circular right-arrow navigation control
- Horizontal listing carousel

Second section:

- Title: **“Hoteles excelentes para tu próximo viaje”**
- Supporting descriptive text
- Circular right-arrow navigation control
- Horizontal listing carousel

**Likely props:**

- Section title
- Optional description
- Listings
- Section navigation control
- Optional navigation handler

**Parent:**  
`HomePage`.

**Children:**

- `SectionHeader`
- `ListingCarousel`

**Layout relationship:**  
Sections are stacked vertically. Each header precedes its associated horizontal carousel.

**Mobile behavior:**  
Each section has its own horizontally scrolling listing area. The sections themselves remain vertically arranged.

**Reusable:**  
Yes.

### SectionHeader

**Responsibility:**  
Display the title, optional description, and navigation control for a listing section.

**Visible content:**

First section:

- **“Alojamientos populares en Orlando”**
- Circular right-arrow navigation control

Second section:

- **“Hoteles excelentes para tu próximo viaje”**
- Supporting descriptive text
- Circular right-arrow navigation control

**Likely props:**

- Title
- Optional description
- Optional navigation control

**Parent:**  
`ListingSection`.

**Children:**

- Title text
- Optional description text
- `SectionNavigationButton`

**Layout relationship:**  
Appears above the corresponding listing carousel.

**Mobile behavior:**  
Must fit within the mobile section width while the listing content below can overflow horizontally.

**Reusable:**  
Yes.

### SectionNavigationButton

**Responsibility:**  
Represent the circular right-arrow control visible in each listing section header.

**Visible content:**

- Circular control
- Right-arrow symbol

**Likely props:**

- Optional action handler
- Optional accessible label

The result of clicking the control is not defined.

**Parent:**  
`SectionHeader`.

**Children:**  
Right-arrow visual content.

**Layout relationship:**  
Appears alongside or near the corresponding section heading.

**Mobile behavior:**  
Visible in both listing section headers.

**Reusable:**  
Yes.

### ListingCarousel

**Responsibility:**  
Display listing cards in a horizontal scrolling arrangement.

**Visible content:**  
Multiple accommodation cards, including cards that are partially visible at the viewport edge.

**Likely props:**

- Listings
- Optional carousel navigation state
- Optional navigation handler

**Parent:**  
`ListingSection`.

**Children:**  
Multiple `ListingCard` components.

**Layout relationship:**  
Appears below its associated section header.

**Mobile behavior:**  
Cards are arranged horizontally and can be scrolled. Multiple cards are visible or partially visible within the 375px viewport.

**Reusable:**  
Yes.

### ListingCard

**Responsibility:**  
Present the visible summary of one accommodation listing.

**Visible content:**

- Listing image
- Optional guest-favorite badge
- Favorite heart control
- Listing title or location text
- Price
- Visible stay or pricing qualifier
- Rating

**Likely props:**

- Listing image
- Title or location
- Price
- Stay or pricing qualifier
- Rating
- Optional guest-favorite state
- Favorite state or favorite action
- Listing destination or identifier

**Parent:**  
`ListingCarousel`.

**Children:**  
Image content, optional badge, favorite control, text content, pricing content, and rating.

**Layout relationship:**  
Cards appear side by side in a horizontal carousel. Cards may be partially visible at the viewport edge.

**Mobile behavior:**  
Cards remain horizontally arranged rather than becoming a single vertical list.

**Reusable:**  
Yes. It is reused by both visible sections and is likely applicable to the Catalog page.

### PriceNotice

**Responsibility:**  
Display the pricing clarification notice.

**Visible content:**

- Tag or label-style icon
- Text: **“Los precios incluyen todas las tarifas”**

**Likely props:**

- Notice text
- Tag or label icon representation

The icon library and implementation are not determined.

**Parent:**  
`HomePage`.

**Children:**  
Icon and text content.

**Layout relationship:**  
Floats above or overlays the page content, separate from the normal listing section flow.

**Mobile behavior:**  
Visible within the mobile viewport. Its exact positioning and scrolling behavior are not determined.

**Reusable:**  
Possibly.

### MobileBottomNav

**Responsibility:**  
Provide the visible mobile navigation destinations.

**Visible content:**  
Three navigation items:

- Explorar
- Favoritos
- Iniciar sesión

Each item includes an icon and a label.

**Likely props:**

- Navigation items
- Active item
- Destinations
- Optional navigation handlers

**Parent:**  
`HomePage` or a shared application layout.

**Children:**  
Multiple `MobileBottomNavItem` components.

**Layout relationship:**  
Visible at the bottom of the captured viewport.

**Mobile behavior:**  
Shown as a mobile navigation region. The screenshot does not establish whether it is fixed, sticky, or part of normal document flow.

**Reusable:**  
Possibly. It may be shared across mobile views.

### MobileBottomNavItem

**Responsibility:**  
Represent one destination within the mobile bottom navigation.

**Visible content:**

- Icon
- Label

Visible destinations:

- Explorar
- Favoritos
- Iniciar sesión

**Likely props:**

- Label
- Icon representation
- Destination
- Active state
- Optional navigation handler

The exact icon assets and active-state implementation are not determined.

**Parent:**  
`MobileBottomNav`.

**Children:**  
An icon and a text label.

**Layout relationship:**  
Items are arranged together within the bottom mobile navigation region.

**Mobile behavior:**  
Displayed at the bottom of the captured mobile viewport.

**Reusable:**  
Yes, within mobile navigation structures.

**Observed state:**  
**Explorar** appears visually active in this screenshot. The exact active-state color or styling is not determined.

## 4. ListingCard Visible Anatomy

The visible parts of a listing card are:

- **Image:** Main visual content of the listing.
- **Guest-favorite badge:** Optional badge reading **“Favorito entre huéspedes”** where applicable.
- **Favorite heart control:** A control associated with saving or favoriting the listing.
- **Listing title or location text:** Identifies the accommodation or its location.
- **Price:** The visible price amount.
- **Stay or pricing qualifier:** Additional visible pricing context, such as **“por 2 noches”**.
- **Rating:** The visible rating value or rating presentation.

Optional elements include:

- Guest-favorite badge
- Favorite state
- Exact title or location wording
- Stay or pricing qualifier format, depending on the listing data

The screenshot does not establish additional fields such as host name, amenities, distance, review count, or guest capacity.

## 5. Minimum Listing Data Requirements

The minimum data required to represent the visible listing cards is:

- Unique listing identifier
- Listing image
- Listing title or location text
- Price
- Visible stay or pricing qualifier
- Rating
- Whether the guest-favorite badge is displayed
- Favorite state, if represented
- Listing destination or identifier for selection

The final TypeScript data model is not defined yet.

## 6. Section Data Requirements

A reusable listing section would likely need:

- Section title
- Optional supporting description
- Collection of listings
- Circular section navigation control
- Optional navigation action or destination

Both visible sections include a circular right-arrow navigation control. The screenshot does not determine what happens when either control is clicked.

## 7. Observed Mobile Layout Behavior

The following behavior can be inferred from the 375px screenshot:

- Category navigation is horizontally arranged and overflows beyond the initial viewport.
- Category items contain both icons and labels.
- Listing cards are displayed in horizontal carousels.
- Multiple cards are visible or partially visible across the viewport.
- Listing sections are vertically stacked.
- Both listing sections show circular right-arrow navigation controls.
- The pricing notice floats above or overlays the page content.
- Bottom mobile navigation is visible at the bottom of the captured viewport.
- The bottom navigation includes icons and labels.
- “Explorar” appears visually active.
- The screenshot does not establish whether the bottom navigation is fixed, sticky, or in normal document flow.
- The screenshot represents a mobile layout only; desktop behavior remains unknown.

Exact measurements, spacing, card dimensions, typography, colors, and scrolling mechanics are not determined.

## 8. Interaction Candidates

The screenshot suggests the following interaction candidates:

- Activating the search control.
- Selecting a category.
- Scrolling the category navigation horizontally.
- Scrolling each listing carousel horizontally.
- Activating the circular section navigation control.
- Selecting a listing card to open room details.
- Toggling the favorite heart control.
- Selecting a bottom navigation item.
- Navigating to:
  - Explorar
  - Favoritos
  - Iniciar sesión

These are interaction candidates only. Their behavior, state management, and navigation destinations are not implemented or finalized.

## 9. Unknowns / Not Yet Determined

The screenshot cannot determine:

- Desktop layout and desktop breakpoint behavior.
- Whether the bottom navigation is fixed, sticky, or part of normal document flow.
- Whether the search control opens an expanded search view, modal, or another route.
- The complete search flow and search fields.
- The complete list of categories.
- The exact selected-state styling for “Todo”.
- The exact category icon assets or icon library.
- The exact carousel scrolling mechanism.
- The behavior of either circular right-arrow control.
- The exact number of listings in each carousel.
- Exact card dimensions, spacing, and image aspect ratio.
- Exact price formatting beyond the visible price and stay qualifier.
- Whether ratings include review counts or other metadata.
- Favorite persistence and favorite-state behavior.
- Whether listing data is static, asynchronous, or API-driven.
- The appearance of loading states. A loading state is required elsewhere by the project specification, but it is not visible in this screenshot.
- The exact position, anchoring, and dismissal behavior of the pricing notice.
- The exact tag or label icon used by the pricing notice.
- The exact icons used by the search control, category items, and bottom navigation.
- The exact active-state styling for “Explorar”.
- Typography, colors, shadows, borders, border radii, and other visual tokens.
- Accessibility labels and keyboard behavior.
- Catalog page behavior.
- Room Detail page behavior.
- Error and empty states.
- Booking interactions.
- Responsive behavior at widths other than 375px and 768px.
