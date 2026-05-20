# Luxury RentCar UI Revamp Design

## Scope

Revamp the public RentCar website so every visible page feels consistent with a luxury car website reference while preserving the existing brand colors: black primary, yellow accent, and neutral light backgrounds. The revamp covers:

- Navbar and footer
- Home page
- Catalog page
- About page
- Contact page
- Shared components such as car cards, service cards, filter bar, testimonials, contact panels, and car detail modal

Admin functionality is not part of this visual revamp unless a shared style change affects it indirectly.

## Visual Direction

The site will use a luxury editorial style: strong dark hero sections, large vehicle imagery, restrained spacing, thin borders, refined cards, and clear yellow calls to action. The existing palette remains:

- Primary: `#000000`
- Secondary: `#FFC107`
- Neutral light: `#F5F5F5`
- Supporting grays from the existing Tailwind palette

The layout should feel premium and practical, not like a marketing-only landing page. The first screen remains useful immediately: clear rental positioning, WhatsApp CTA, and supporting proof points.

## Copywriting

All visible copy stays in Indonesian. Text can be tightened or made more premium, but it must remain clear for a local rental car service. English labels should be avoided unless already part of a brand name or technical/social platform name.

## Page Design

### Navbar

The navbar keeps a dark background and becomes more polished:

- Stronger brand treatment
- Active navigation indication with the yellow accent
- Desktop CTA for WhatsApp consultation
- Mobile menu remains simple and accessible

### Home

The home page becomes the main luxury showcase:

- Full-bleed hero with the current car image, darker overlay, large Indonesian headline, CTA, and supporting stats
- Service advantages presented as refined panels instead of generic cards
- Popular cars shown as showroom-style cards
- Testimonials and final CTA restyled to match the dark/yellow system

### Catalog

The catalog gets a premium page header and more refined browsing surface:

- Dark header with concise Indonesian explanation
- Filter bar styled as a polished control panel
- Car cards reused from the shared revamped design
- Empty, loading, and error states remain clear

### About

The About page becomes more consistent with the home page:

- Dark editorial hero with stats
- Advantage grid styled with thin borders and yellow detail accents
- Existing location and testimonial sections visually aligned with the new system

### Contact

The Contact page should feel direct and operational:

- Dark page header
- Contact info, map, and form panels share the same border, radius, spacing, and focus states
- Form fields keep clear labels/placeholders and submit via WhatsApp

## Component System

Shared UI changes:

- Cards use subtle borders, restrained shadows, and small radius values
- Buttons use consistent primary dark and yellow accent variants
- Form controls use consistent focus rings and border colors
- Section headers use consistent eyebrow/title/description hierarchy
- Modal detail layout is refined without changing its behavior

## Behavior

No data flow changes are planned. Existing React state, routing, Supabase/data context, filters, modal opening, and WhatsApp actions remain intact.

## Testing

Verification should include:

- `npm run build`
- Manual visual check in a local browser through the Vite dev server
- Responsive sanity check for home, catalog, about, and contact at mobile and desktop widths

## Out of Scope

- New backend features
- Admin dashboard redesign
- New vehicle data fields
- Replacing the current hero/car image assets unless the existing assets fail to support the design
