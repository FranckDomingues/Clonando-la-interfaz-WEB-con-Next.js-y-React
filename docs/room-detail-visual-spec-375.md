# Room Detail Visual Specification — 375px

## Source scope

Four supplied 375px Room Detail screenshots were reviewed, covering:

1. Property summary and host summary
2. Guest-favorite / reviews section
3. Amenities section
4. Detailed host section

The screenshots show different scroll positions of the same Room Detail page. The image gallery is **not visible** in the supplied screenshots. Gallery behavior is therefore project-requirement-driven, not screenshot-derived.

## Property summary — observed

Visible property title:

> 15 recámaras / 16.5 baños / Sonoma Resort (4061 Sb)

Supporting text:

> Alojamiento entero: residencia en Kissimmee, Florida, Estados Unidos

Capacity and details:

> Más de 16 huéspedes · 15 habitaciones · 14 camas · 16.5 baños

Visible summary metrics:

- 4.83 rating
- Favorito entre huéspedes
- 6 Evaluaciones

Visible host summary:

> Anfitrión: Rodrigo (Master Vacation Homes)

Supporting text:

> SuperAnfitrión · 10 años de experiencia

Visible location highlight:

> En Kissimmee, cerca de Disney y SeaWorld

Additional supporting location text is partially visible. Missing copy is not inferred.

## Reviews / Guest Favorite section — observed

Large rating:

> 4.83

Heading:

> Favorito entre huéspedes

Supporting text indicates that the accommodation is one of Airbnb's favorites based on ratings, reviews, and reliability.

Visible link-like text:

> Cómo funcionan las evaluaciones

Below:

> Las evaluaciones de los huéspedes mencionan

Visible topic chips include:

- Familiar 4
- Hospitalidad 4

A further chip is partially visible; its label is not inferred.

## Amenities section — observed

Heading:

> Lo que ofrece este lugar

Visible amenities:

- Frente al agua
- Cocina
- Wifi
- Área para trabajar
- Alberca

Visible action:

> Mostrar las 24 amenidades

Following heading:

> Dónde vas a estar

The actual location/map content is not visible in the supplied screenshot. No map details are inferred.

## Host detail section — observed

Heading:

> Conoce a tu anfitrión

The visible host card includes:

- host image
- Rodrigo (Master Vacation Home...)
- Superanfitrión indicator

Visible host statistics:

- 10,000+ Evaluaciones
- 4.73 Calificación
- 10 Años de experiencia

Visible profile details:

> Mi trabajo: Alojamientos vacacionales principales

> Mi habilidad menos útil: Puedo escribir al revés y al revés.

A host biography begins:

> ¡Hola, me llamo Rodrigo! Soy el propietario de Master Vacation Homes...

The remainder is not fully visible and is not inferred.

## Booking bar — observed across screenshots

A booking area appears at the bottom of every supplied screenshot. Visible pricing and content:

- Original price: **$3,347 USD**
- Current price: **$3,096 USD**
- Supporting text: **Por 2 noches · 2–4 de oct**
- Benefit: **Cancelación gratuita**
- Primary CTA: **Reservar**

Because this booking area appears in the same lower viewport region across multiple different scroll positions, the screenshots strongly support a persistent mobile booking bar. The exact CSS implementation is not claimed, and this specification does not state whether Airbnb uses fixed or sticky positioning internally. The implementation may reproduce the observed persistent behavior using an appropriate mobile layout technique.

## Requirement-driven gallery

The project explicitly requires the Room Detail route `/rooms/[id]`, gallery state using `useState`, and previous / next gallery controls. The gallery is not visible in the supplied screenshots.

Expected implementation responsibility:

- display representative property images or placeholders
- maintain the active image index with `useState`
- provide previous / next controls
- use no external gallery library

Gallery styling must not be described as screenshot-derived.

## Requirement-driven data loading

Room Detail must use `useEffect` to simulate loading property data based on the route id. Requirement-driven behavior includes:

- receive the room id from `/rooms/[id]`
- simulate initial loading
- display a simple loading state
- select the matching static room data
- provide effect cleanup where applicable

This behavior is project-required functionality, not visual evidence.

## Proposed component tree

```text
RoomDetailPage
├── RoomGallery
├── RoomOverview
│   ├── PropertyTitle
│   ├── PropertyMetadata
│   └── RatingSummary
├── HostSummary
├── LocationHighlight
├── AmenitiesSection
├── ReviewsSection
├── HostProfileSection
└── BookingPanel
```

The final implementation must contain at least five meaningful Room Detail sections. The hierarchy remains restrained and should not introduce unnecessary wrapper components.

## Booking panel requirements

The project requires booking interaction state. Requirement-driven fields include:

- displayed price
- guest count
- Reserve CTA

The user must be able to change guest count using `useState`. Real booking and payment behavior are out of scope. Date-picker logic is not required unless explicitly requested later.

## Shared data and navigation

- Home and Catalog already link to `/rooms/[id]`.
- Room Detail should support navigation back toward `/catalog`.
- Internal navigation must use Next.js `Link`.
- Property ids should match existing static listing ids where practical.

No external destinations are invented.

## Mobile layout behavior

Observed mobile characteristics:

- single-column content
- strong section separation
- large readable headings
- horizontal dividers between major sections
- card-like host profile surface
- booking bar remains visually accessible while viewing different content sections
- content fits the narrow mobile viewport

Exact pixel spacing, shadows, and radii are not inferred.

## Desktop adaptation

No desktop Room Detail screenshot was supplied. Desktop behavior is therefore requirement-driven only. A restrained adaptation may:

- use a centered max-width container
- allow main content and booking panel to share horizontal space
- preserve the same section hierarchy
- avoid inventing a complex desktop Airbnb Navbar
- avoid oversized typography

Desktop design is not claimed as screenshot-derived.

## Interaction candidates

### Screenshot-supported

- Reserve CTA
- Show all amenities
- evaluation information link-like text

### Project-required

- gallery previous / next
- guest count state
- navigation back to Catalog

No interactions are implemented during this documentation stage.

## Unknowns / not yet determined

- exact gallery appearance
- exact number of gallery images
- exact desktop layout
- exact desktop booking-panel placement
- exact host image asset
- exact amenity icons
- exact location/map treatment
- exact behavior of “Mostrar las 24 amenidades”
- exact review-topic interaction
- exact booking-bar CSS positioning mechanism
