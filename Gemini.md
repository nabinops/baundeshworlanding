# Baundeshwor Public Portal - AI Context Memory

This document serves as the contextual memory and knowledge base for AI assistants working on the `baundeshwor-public` project. It tracks the architectural decisions, design aesthetics, and technical constraints of this specific module.

## 🎯 Project Identity
- **Name:** Baundeshwor Public Portal
- **Type:** Static Landing Page / Public Facing Site
- **Goal:** Drive customer acquisition, highlight premium water supply services, and capture leads via an integrated enquiry form.
- **Vibe & Design:** Clean, modern, "glassmorphism", vibrant, highly responsive, and heavily utilizing "water" aesthetics (e.g., custom bubbling animations, blue/teal gradients, smooth scrolling).

## 🏗️ Architectural Decisions & Constraints

1. **Strictly Static (No Build Step):**
   - **Rule:** Do NOT introduce npm, Webpack, Vite, React, Angular, or any build tools into this specific directory.
   - **Why:** This portal is designed for raw performance, immediate loading, and simplest possible deployment alongside the main monolith.
   - **Tech:** Vanilla HTML5, Tailwind CSS via CDN, Vanilla JavaScript.

2. **Tailwind via CDN:**
   - **Rule:** Tailwind utility classes are heavily utilized directly in HTML. 
   - **Constraint:** We do not have a `tailwind.config.js` active here. Any custom keyframes, complex gradients, or highly specific UI styles (like `.trusted-partner-card` or `.bubble`) MUST be written manually in `css/styles.css`.

3. **Vanilla JS for Interactivity:**
   - **Rule:** Do not use jQuery or frontend frameworks.
   - **Key Features Implemented:**
     - `main.js`: ScrollSpy navigation, Back-to-Top visibility, custom touch/mouse dragging for the testimonial slider, mobile drawer toggles.
     - `enquiry.js`: Form submission to `/api/enquiry`.

## 🧠 Key Features & Workarounds Implemented

### 1. Water Bubble Animation (`css/styles.css`)
- **How it works:** We use absolute positioned `<div>` elements with `.bubble` class. They utilize radial gradients to look like transparent water bubbles with white borders/glows, and use infinite CSS `floatUp` keyframes to simulate bubbles rising from the bottom of the hero section.

### 2. Testimonial Slider (`index.html` & `main.js`)
- **Problem:** We needed a responsive slider that auto-played but also supported native-feeling manual swipe/drag interactions without a third-party library.
- **Solution:** Vanilla JS handles `touchstart`, `touchmove`, `touchend`, `mousedown`, `mousemove`, and `mouseup`. The auto-slider is cleared on interaction and resumes gracefully afterward.

### 3. Trusted Partners Marquee (`index.html` & `css/styles.css`)
- **Design:** Frosted glass cards (`.trusted-partner-card`) with glowing background tints.
- **Constraint:** Since we have no looping mechanism (like Angular's `@for`), the HTML structure hardcodes 11 partner nodes, duplicated twice (total 22 nodes) inside a flex container to achieve a seamless, infinite CSS-based `translate-x` marquee animation.
- **Updates:** Grayscale filters were removed to ensure logos and colored monograms instantly pop and look vibrant.

### 4. API Form Integration (`enquiry.js`)
- **Constraint:** The backend expects a strict `EnquiryRequestDto` payload.
- **Solution:** The vanilla JS form handler extracts `FormData` and explicitly maps it:
  - `name` -> `fullName`
  - `company` -> `companyName`
  - Injects required statics: `source: 'WEBSITE'`, `priority: 'LOW'`
  - Injects explicit nulls for optional DTO fields: `preferredDeliveryTime: null`, `deliveryAddress: null`, `quantity: null`.

## 🔄 Future Work & Instructions for AI
- When updating styles, always check if a Tailwind class exists natively first. If it's a complex animation or gradient masking, use `css/styles.css`.
- When updating the contact form, ensure ANY new fields are explicitly mapped in `enquiry.js` and conform to the backend DTO definitions in the monolith. 
- Do not attempt to link this static site to Angular routing. They are separate entities deployed together via Nginx.
