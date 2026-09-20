# Catalog Visual Specification — 375px

## 1. Source Scope

Two screenshots were reviewed:

1. Catalog Results state — primary implementation reference
2. Search Overlay state — secondary interaction reference

This specification records only what is visually supported by those references. It does not infer unsupported behavior or implementation details.

## 2. Catalog Results Visible Structure

The primary Catalog Results screenshot shows the following hierarchy from top to bottom:

- A white Catalog header with a back arrow on the left, a centered rounded search-summary pill, and a filter/sliders icon on the right.
- The search-summary pill contains the primary text `Homes nearby` and the secondary text `Any week · Add guests`.
- A map region appears directly below the header and fills the available mobile width. It contains multiple white rounded price markers, including `$800`, `$860`, `$1,721`, `$1,349`, `$1,045`, and `$1,159`, along with visible road/place labels in the reference. This project requires a visual map placeholder rather than a real map.
- A white results surface begins below the map with rounded upper corners.
- A small centered drag-handle-like indicator appears at the top edge of the results surface. The screenshot does not prove draggable behavior.
- Inside the results surface, a price notice shows a price-tag-like icon and `Prices include all fees`.
- A large listing card image is visible with a `Guest favorite` badge in the upper-left area and a heart/favorite icon in the upper-right area.
- The listing title is `Home in High Springs`, with `4.98 (206)` shown in the same information area and additional descriptive text continuing below, only partially visible.
- A black rounded control overlaps near the lower portion of the listing image/content boundary. It reads `Map` and includes a map-style icon. Its positioning behavior is not inferred from the screenshot.

## 3. Proposed Component Tree

```text
CatalogPage
├── CatalogHeader
│   ├── BackButton
│   ├── SearchSummary
│   └── FilterButton
├── CatalogResultsLayout
│   ├── MapPlaceholder
│   └── CatalogResultsPanel
│       ├── ResultsHandle
│       ├── CatalogPriceNotice
│       ├── CatalogControls
│       ├── CatalogListingList
│       │   └── ListingCard
│       └── MapToggleButton
```

`ListingCard` is the existing shared component. A small variant prop may be introduced if a different Catalog presentation is necessary; a second unrelated listing-card component should not be created.

## 4. Component Specifications

### CatalogPage

Composes the Catalog results experience. It owns the page-level result presentation and requirement-driven sorting state when implementation begins.

### CatalogHeader

Displays the white top header, back control, centered search-summary pill, and filter/sliders control. The screenshot supports the visual arrangement but does not establish all control behavior.

### BackButton

Displays the left back arrow in the Catalog header. Returning behavior is an interaction candidate, not a behavior proven by the screenshot.

### SearchSummary

Displays the centered rounded summary pill with `Homes nearby` and `Any week · Add guests`. It is a candidate control for opening the search experience.

### FilterButton

Displays the right-side filter/sliders icon. The screenshot does not establish the filter set or interaction behavior.

### CatalogResultsLayout

Groups the map placeholder and the results presentation. Responsive placement must reconcile the screenshot evidence with the explicit project requirements documented below.

### MapPlaceholder

Represents the visual map region without a real map provider. It may show static visual markers for fidelity, but real map behavior and technology are not specified.

### CatalogResultsPanel

Contains the results surface, including its rounded upper edge as visually observed, the price notice, controls, listing list, and map toggle. No draggable or fixed behavior is inferred.

### ResultsHandle

Displays the small centered handle-like indicator at the top edge of the results surface. It is visual only unless later requirements define interaction.

### CatalogPriceNotice

Displays a price-tag-like icon and `Prices include all fees` within the results surface.

### CatalogControls

Reserves the area for requirement-driven result count and price sorting. These controls are not visible in the supplied Catalog screenshot.

### CatalogListingList

Displays Catalog results using the shared `ListingCard` component. The list should remain within the narrow mobile composition.

### MapToggleButton

Displays the black rounded `Map` control with a map-style icon observed overlapping the lower listing region. The screenshot does not establish whether this control is fixed, sticky, absolute, or in normal flow.

## 5. ListingCard Catalog Anatomy

The Catalog card is expected to reuse the existing shared `ListingCard` component. Its screenshot-supported anatomy includes:

- large rounded listing image
- `Guest favorite` badge in the upper-left area
- heart/favorite icon in the upper-right area
- title, including the observed `Home in High Springs`
- rating and review count, including the observed `4.98 (206)`
- additional supporting listing metadata, partially visible in the reference

A price may be included when the project data requires it. Price and other fields required by the project must be distinguished from fields directly visible in the screenshot. Catalog should not create a second unrelated card component.

## 6. Search Overlay Reference

The secondary screenshot documents a Catalog search overlay reference. It contains:

- top tabs: `Homes`, `Experiences`, and `Services`, with `Homes` selected
- a circular close button with `X`
- a large rounded `Where?` card
- a search input showing `Nearby`
- `Suggested destinations`
- `Nearby` with `Find what’s around you`
- `Orlando, FL` with `For sights like Walt Disney World Resort`
- a further partially visible destination
- a `When` row with `Add dates`
- a `Who` row with `Add guests`
- bottom actions `Clear all` and emphasized `Search`

The full overlay is deferred from the base Catalog implementation unless it is later required.

## 7. Mobile Layout Behavior

The observed mobile composition uses:

- a single-column layout
- the header above the map
- the map above the results panel
- a results panel with rounded upper corners
- large listing media
- content contained within the narrow mobile viewport

The screenshot does not prove fixed, sticky, or draggable behavior. Those behaviors must not be claimed without later evidence or requirements.

## 8. Project Requirement Reconciliation

The screenshot evidence and assignment requirements differ in map placement:

### Screenshot evidence

- the mobile map appears above the listing results

### Project implementation requirement

- Catalog must include a map placeholder
- desktop layout should place the map to the right of the results
- the current mobile project requirement specifies the map below the results

The screenshot is preserved as visual evidence and must not be rewritten. Where the screenshot conflicts with the explicit project requirement, implementation must follow the project requirement. Therefore, mobile map placement below the results is a requirement-driven adaptation, not a screenshot-derived decision.

The project also requires:

- a result count
- price sorting controlled with `useState`
- reuse of the shared `ListingCard`
- a map placeholder rather than a real map

Result count and price sorting are requirement-driven functionality, not visible evidence from the supplied screenshot.

## 9. Interaction Candidates

The following are likely interactions, but are not all proven by the screenshot:

- back control
- search-summary control
- filter control
- sort control
- listing navigation
- favorite control
- map/list toggle

Observed visual evidence does not establish the exact behavior of these controls.

## 10. Unknowns / Not Yet Determined

- exact desktop visual design
- exact desktop map dimensions
- exact result count placement
- exact sort-control styling
- whether the map toggle is fixed, sticky, or in normal flow
- whether the result sheet is draggable
- exact search-overlay behavior
- exact favorite behavior
- exact real map technology
- exact date-picker behavior
- exact visual tokens, spacing, and control behavior not supported by the references
