# Luxury RentCar UI Revamp Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp the public RentCar website into a consistent luxury editorial car rental interface while preserving the existing black, yellow, and neutral color palette.

**Architecture:** Keep existing React routing, component boundaries, data context, and WhatsApp behavior. Update global styling utilities first, then shared components, then page-level composition so every public page uses the same visual language.

**Tech Stack:** Vite, React, React Router, Tailwind CSS v4, existing JSON/Supabase car data flow.

---

### Task 1: Global Styling Foundation

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

- [ ] **Step 1: Update global typography and reusable utilities**

Use the existing color tokens. Add refined body background, smooth rendering, section spacing, container helpers, button classes, surface classes, and form control classes.

- [ ] **Step 2: Verify CSS compiles**

Run: `npm run build`
Expected: Vite build exits with code 0.

### Task 2: Shared Shell Components

**Files:**
- Modify: `src/components/Navbar.jsx`
- Modify: `src/components/Footer.jsx`
- Modify: `src/components/WhatsAppButton.jsx`

- [ ] **Step 1: Revamp navbar**

Keep all links and route behavior. Add premium dark styling, active underline, desktop WhatsApp CTA, and polished mobile menu.

- [ ] **Step 2: Revamp footer**

Keep Indonesian content and links. Align footer with luxury dark visual system and stronger brand block.

- [ ] **Step 3: Check build**

Run: `npm run build`
Expected: Vite build exits with code 0.

### Task 3: Shared Content Components

**Files:**
- Modify: `src/components/CarCard.jsx`
- Modify: `src/components/ServiceCard.jsx`
- Modify: `src/components/FilterBar.jsx`
- Modify: `src/components/CarDetailModal.jsx`
- Modify: `src/components/TestimonialSlider.jsx`
- Modify: `src/components/TestimonialGrid.jsx`
- Modify: `src/components/ContactInfo.jsx`
- Modify: `src/components/ContactForm.jsx`
- Modify: `src/components/ContactMap.jsx`
- Modify: `src/components/LocationMap.jsx`
- Modify: `src/components/AdvantageGrid.jsx`

- [ ] **Step 1: Revamp cards, filters, forms, modal, and supporting panels**

Preserve props, state, accessibility roles, modal behavior, filtering, image fallback, and WhatsApp submit behavior. Update classes and Indonesian copy only where needed for clarity.

- [ ] **Step 2: Check build**

Run: `npm run build`
Expected: Vite build exits with code 0.

### Task 4: Public Pages

**Files:**
- Modify: `src/components/HeroSection.jsx`
- Modify: `src/pages/Home.jsx`
- Modify: `src/pages/Catalog.jsx`
- Modify: `src/pages/About.jsx`
- Modify: `src/pages/Contact.jsx`

- [ ] **Step 1: Revamp page composition**

Create a luxury full-bleed home hero, consistent dark page headers for catalog/contact, and aligned section hierarchy across home/about/contact/catalog. Keep all visible copy in Indonesian.

- [ ] **Step 2: Final build verification**

Run: `npm run build`
Expected: Vite build exits with code 0.

- [ ] **Step 3: Start dev server for review**

Run: `npm run dev -- --host 127.0.0.1`
Expected: Vite prints a local URL that the user can open.
