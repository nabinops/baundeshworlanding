# Baundeshwor Public Portal

This repository contains the static, high-performance, public-facing landing portal for **Baundeshwor Udhyog Pvt. Ltd.** It serves as the primary marketing and customer acquisition channel, showcasing premium water supply services, branded bottle products, and a direct enquiry system.

## 🚀 Features

- **Blazing Fast Performance:** Pure HTML, CSS (Tailwind via CDN), and vanilla JavaScript. No heavy frameworks, ensuring instant load times and perfect SEO scores.
- **Dynamic Water Aesthetic:** Custom CSS keyframes and radial gradients create a unique "bubbling water" effect in the hero section to reinforce the brand identity.
- **Responsive Design:** Fully responsive layout with a mobile-first approach, including a smooth off-canvas mobile navigation menu.
- **ScrollSpy Navigation:** Desktop navigation automatically highlights the active section based on the user's scroll position.
- **Touch-Enabled Sliders:** Handcrafted touch and mouse-drag events for the testimonial slider, mimicking native app behaviors.
- **Trusted Partners Marquee:** A visually striking, infinite-scrolling marquee highlighting elite hospitality clients with dynamic monograms and frosted glass UI elements.
- **Integrated API Enquiry Form:** A fully mapped AJAX contact form that directly interfaces with the backend `/api/enquiry` endpoint, utilizing the exact `EnquiryRequestDto` model structure.

## 📁 Directory Structure

```text
baundeshwor-public/
├── index.html            # Main landing page
├── privacy-policy.html   # Privacy policy document
├── terms-of-service.html # Terms of service document
├── css/
│   └── styles.css        # Custom styles, animations, and marquee UI
├── js/
│   ├── main.js           # Navigation, scrollspy, mobile menu, and animations
│   └── enquiry.js        # API integration for the contact form
└── assets/               # Images, logos, and placeholders
```

## 🛠️ Tech Stack

- **Structure:** HTML5
- **Styling:** Tailwind CSS (via CDN) + Custom CSS (`styles.css`)
- **Interactivity:** Vanilla JavaScript (`main.js`, `enquiry.js`)
- **Icons:** FontAwesome 6

## 🔌 API Integrations

The portal relies on the backend infrastructure for lead generation. The `js/enquiry.js` file handles the form submission by mapping the HTML form inputs to the strict `EnquiryRequestDto` expected by the API:

- **Endpoint:** `POST /api/enquiry`
- **Content-Type:** `application/json`
- **Default Payloads:** Injects static enumerations automatically (`source: 'WEBSITE'`, `priority: 'LOW'`).

## 🚀 Development & Usage

Because this is a static site without Node.js dependencies or build steps, development is extremely simple:

1. **Serve Locally:** You can use any static file server to run the project.
   ```bash
   # Using Python
   python3 -m http.server 8000
   
   # Using Node/npx
   npx serve .
   ```
2. **View:** Open `http://localhost:8000` in your browser.

## 📦 Deployment

This portal is designed to be served efficiently via Nginx or any static hosting provider (e.g., Vercel, Netlify, AWS S3). 

For production Nginx deployment, ensure that the `/api` route is properly reverse-proxied to your backend application server to allow the enquiry form to function without CORS issues.
