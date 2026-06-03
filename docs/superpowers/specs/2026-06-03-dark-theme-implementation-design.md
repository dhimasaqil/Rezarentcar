# Dark Theme Implementation Design

**Date:** 2026-06-03  
**Project:** RezaRentCar Website  
**Objective:** Convert all white backgrounds to black while maintaining card backgrounds as white, ensuring optimal text contrast and readability across all pages.

## Requirements

- Change all white/light backgrounds to black (#000000)
- Keep card components (CarCard, ServiceCard, FilterBar, Modals) with white backgrounds
- Maintain existing black sections (Navbar, Footer, Hero sections) unchanged
- Ensure text readability with proper contrast:
  - Headings: white (#ffffff)
  - Body text: medium gray (#a3a3a3, #9ca3af)
  - Muted text: darker gray (#6b7280)
- Apply changes across all pages: Home, About, Catalog, Contact, Admin

## Approach: Global CSS Override

Using a centralized CSS approach with systematic component updates. This provides consistency, maintainability, and good performance without conditional rendering complexity.

## Design Details

### 1. Global Styling Changes

**File: `src/index.css`**

Update base styles:
- Body background: `#fafaf8` → `#000000`
- Default text color: `#111827` → `#ffffff`
- Scrollbar colors adjusted for dark theme
- Add utility class `.bg-dark-primary` for primary black backgrounds
- Add utility class `.bg-dark-secondary` for gradient black backgrounds
- Update `.bg-editorial` to dark theme variant with radial gradient on black base

Typography on black backgrounds:
- Headings: `#ffffff` (white)
- Body text: `#a3a3a3` or `#9ca3af` (medium gray for balanced readability)
- Muted text: `#6b7280` (darker gray)

### 2. Component-Level Changes

**Pages to update:**
- `Home.jsx`: Update sections from `bg-neutral-light` and `bg-white` → `bg-black`
- `Catalog.jsx`: Main background from `bg-neutral-light` → `bg-black`
- `About.jsx`: Wrapper div background → `bg-black`
- `Contact.jsx`: Section backgrounds → `bg-black`
- `Admin.jsx`: Check and update if needed

**Cards (remain white):**
- `CarCard.jsx`: Keep `bg-white` (no changes)
- `ServiceCard.jsx`: Keep `bg-white` (no changes)
- `FilterBar.jsx`: Keep `bg-white` (no changes)
- `CarDetailModal.jsx`: Modal content keeps `bg-white` (no changes)

**Sections with existing black backgrounds (no changes):**
- `HeroSection.jsx`: Already black, leave as-is
- `AboutHero.jsx`: Already black, leave as-is
- `Navbar.jsx`: Already black with `bg-primary/95`, leave as-is
- `Footer.jsx`: Already black with `bg-editorial-dark`, leave as-is

**Other components to update:**
- `LocationInfo.jsx`: Update section background → black
- `LocationMap.jsx`: Update section background → black
- `TestimonialGrid.jsx`: Update section background → black
- `TestimonialSlider.jsx`: Update section background → black
- `AdvantageGrid.jsx`: Update section background → black
- `ContactForm.jsx`: Check form container backgrounds
- `ContactMap.jsx`: Check section backgrounds
- `ContactInfo.jsx`: Check section backgrounds

**Text color adjustments in components:**
- All headings on black background: `text-white`
- Body text on black background: `text-gray-400` or `text-gray-300`
- Eyebrow labels: Keep `text-secondary` (yellow #FFC107)
- Section descriptions: `text-gray-400`

### 3. Specific Color Mapping

**Background color replacements:**
- `bg-neutral-light` (#F5F5F5) → `bg-black`
- `bg-neutral-soft` (#FAFAF8) → `bg-black`
- `bg-white` → `bg-black` (except for card components)
- `bg-editorial` → `bg-editorial-dark` or create new dark variant

**Text color replacements (on black backgrounds):**
- `text-primary` (#000000) → `text-white`
- `text-gray-600` → `text-gray-400`
- `text-gray-700` → `text-gray-300`
- `text-neutral-dark` (#424242) → `text-gray-300`
- `text-neutral-medium` (#9E9E9E) → `text-gray-400`

**Elements unchanged:**
- Navbar: Already dark with `bg-primary/95`
- Footer: Already dark with `bg-editorial-dark`
- Buttons: `btn-gold`, `btn-dark`, `btn-outline` stay the same
- Cards: All card components keep `bg-white`
- Secondary/accent color: #FFC107 (yellow) remains unchanged

**Border adjustments:**
- Borders using `border-black/6` or `border-black/8` → `border-white/10`
- Dividers on black backgrounds → `border-white/8`
- Card borders may need slight adjustment for visibility on black

### 4. Testing Strategy

**Manual verification checklist:**

1. **Visual consistency:**
   - Open all pages (Home, About, Catalog, Contact, Admin)
   - Verify main backgrounds are black
   - Verify cards remain white with clear contrast
   - Check that text is readable on all sections

2. **Contrast verification:**
   - Headings (white) clearly visible on black
   - Body text (gray-400) readable without eye strain
   - Eyebrow labels (yellow) visible as accents
   - No color combinations below WCAG AA standards

3. **Component interactions:**
   - Card hover states work with visible shadows
   - Button hover states clearly visible
   - Modal/detail views readable
   - Filter bar in Catalog functions properly
   - Form inputs maintain proper contrast

4. **Cross-page consistency:**
   - All pages use consistent color scheme
   - Smooth transitions between pages
   - No background color "flashing" during navigation

**Files to be modified:**
- `src/index.css` (1 file - global styles)
- Component files: ~8-10 files (.jsx)
- Page files: 4-5 files (.jsx)

## Implementation Notes

- Start with `index.css` to establish base theme
- Update pages first to see overall effect
- Update individual components systematically
- Test after each major component update
- Use browser dev tools to verify contrast ratios
- Run local dev server to check all pages

## Success Criteria

- All non-card backgrounds are black
- All card components maintain white backgrounds
- Text contrast meets readability standards
- No visual regressions in existing functionality
- Consistent appearance across all pages
- Smooth user experience with no jarring transitions
