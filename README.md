<h1 align="center">
  Agung Hermawan — Interactive 3D Portfolio
</h1>

<p align="center">
  <a href="https://portfolio.niskalahub.com"><strong>portfolio.niskalahub.com</strong></a>
</p>

<p align="center">
  A premium, high-performance portfolio built with <strong>Next.js 16+</strong>, featuring <strong>React Three Fiber</strong> for immersive 3D experiences, kinetic typography with <strong>GSAP</strong>, and a meticulously optimized <strong>zero-latency SSG architecture</strong> tailored for the Vercel Hobby Tier.
</p>

---

## ✨ Key Features

- **Immersive 3D Experience:** Real-time WebGL rendering powered by **React Three Fiber** and **Spline**, dynamically loaded (`next/dynamic`) to completely bypass server hydration bottlenecks.
- **Kinetic Typography & Smooth Scrolling:** Enterprise-grade animations orchestrated using **GSAP** and **ScrollTrigger**, ensuring native 60FPS fluid transitions with zero layout shift.
- **Zero-Latency Static Site Generation (SSG):** Designed as pure Server Components. Interactive logic is heavily isolated into tiny 'Client Components' (leaf boundaries), ensuring massive JS bundles stay off the main thread.
- **Custom PDF Generator:** On-the-fly resume rendering using `jspdf` to export customized, professional CVs directly from the browser.
- **Vercel Free-Tier Optimized (`keep-alive` API):** Includes a strategic `/api/keep-alive` endpoint. When pinged by an external uptime monitor (e.g., UptimeRobot), it actively warms up Vercel's Node.js Serverless Functions to prevent cold starts on the Contact Form API without burning through monthly compute limits.
- **Dynamic SEO & Analytics:** Automated `sitemap.xml`, high-resolution programmatic Open Graph generating (`og:image`), metadata targeting, and built-in Google Analytics.

## 🛠️ Technology Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first)
- **3D Engine:** Three.js, React Three Fiber (R3F), Drei, Spline
- **Animation:** GSAP, ScrollTrigger, Lenis (Smooth Scroll)
- **Deployment:** Vercel

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/contact/        # Serverless Route for Contact Email
│   ├── api/keep-alive/     # Uptime Worker (Prevents Cold Starts)
│   ├── globals.css         # Tailwind & Base Styles
│   ├── layout.tsx          # Root Layout & SEO Meta
│   ├── opengraph-image.tsx # Dynamic OG Image Generator
│   ├── page.tsx            # Pure Server Component (Entry)
│   └── sitemap.ts          # Auto-generated Sitemap
├── components/
│   ├── features/           # Reusable Features
│   │   ├── 3d/             # WebGL / Canvas Components (Lazy Loaded)
│   │   ├── ContactForm.tsx # Client Form Handling
│   │   └── ResumeDownloadButton.tsx
│   └── layout/             # UI Skeletons
│       ├── CustomCursor.tsx
│       ├── Navbar.tsx
│       ├── PortfolioAnimator.tsx # GSAP Wrapper
│       ├── PortfolioView.tsx     # The Main SSG UI View
│       └── SmoothScroller.tsx    # Lenis Integration
├── data/
│   └── portfolio.ts        # Single-Source-of-Truth Static Data
└── lib/
    └── generateResume.ts   # PDF Generation Logic
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/niskalahub/portfolio-niskala.git
   cd portfolio-niskala
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn / pnpm / bun
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📞 Contact

- **Website:** [portfolio.niskalahub.com](https://portfolio.niskalahub.com)
- **Email:** emailkerja.agung@gmail.com

---

<p align="center">
  <i>Developed with precision and a touch of luxury.</i>
</p>
<h1 align="center">
  Agung Hermawan — Interactive 3D Portfolio
</h1>

<p align="center">
  <a href="https://portfolio.niskalahub.com"><strong>portfolio.niskalahub.com</strong></a>
</p>

<p align="center">
  A premium, high-performance portfolio built with <strong>Next.js 16+</strong>, featuring <strong>React Three Fiber</strong> for immersive 3D experiences, kinetic typography with <strong>GSAP</strong>, and a meticulously optimized <strong>zero-latency SSG architecture</strong> tailored for the Vercel Hobby Tier.
</p>

---

## ✨ Key Features

- **Immersive 3D Experience:** Real-time WebGL rendering powered by **React Three Fiber** and **Spline**, dynamically loaded (`next/dynamic`) to completely bypass server hydration bottlenecks.
- **Kinetic Typography & Smooth Scrolling:** Enterprise-grade animations orchestrated using **GSAP** and **ScrollTrigger**, ensuring native 60FPS fluid transitions with zero layout shift.
- **Zero-Latency Static Site Generation (SSG):** Designed as pure Server Components. Interactive logic is heavily isolated into tiny 'Client Components' (leaf boundaries), ensuring massive JS bundles stay off the main thread.
- **Custom PDF Generator:** On-the-fly resume rendering using `jspdf` to export customized, professional CVs directly from the browser.
- **Vercel Free-Tier Optimized (`keep-alive` API):** Includes a strategic `/api/keep-alive` endpoint. When pinged by an external uptime monitor (e.g., UptimeRobot), it actively warms up Vercel's Node.js Serverless Functions to prevent cold starts on the Contact Form API without burning through monthly compute limits.
- **Dynamic SEO & Analytics:** Automated `sitemap.xml`, high-resolution programmatic Open Graph generating (`og:image`), metadata targeting, and built-in Google Analytics.

## 🛠️ Technology Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first)
- **3D Engine:** Three.js, React Three Fiber (R3F), Drei, Spline
- **Animation:** GSAP, ScrollTrigger, Lenis (Smooth Scroll)
- **Deployment:** Vercel

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/contact/        # Serverless Route for Contact Email
│   ├── api/keep-alive/     # Uptime Worker (Prevents Cold Starts)
│   ├── globals.css         # Tailwind & Base Styles
│   ├── layout.tsx          # Root Layout & SEO Meta
│   ├── opengraph-image.tsx # Dynamic OG Image Generator
│   ├── page.tsx            # Pure Server Component (Entry)
│   └── sitemap.ts          # Auto-generated Sitemap
├── components/
│   ├── features/           # Reusable Features
│   │   ├── 3d/             # WebGL / Canvas Components (Lazy Loaded)
│   │   ├── ContactForm.tsx # Client Form Handling
│   │   └── ResumeDownloadButton.tsx
│   └── layout/             # UI Skeletons
│       ├── CustomCursor.tsx
│       ├── Navbar.tsx
│       ├── PortfolioAnimator.tsx # GSAP Wrapper
│       ├── PortfolioView.tsx     # The Main SSG UI View
│       └── SmoothScroller.tsx    # Lenis Integration
├── data/
│   └── portfolio.ts        # Single-Source-of-Truth Static Data
└── lib/
    └── generateResume.ts   # PDF Generation Logic
```

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/niskalahub/portfolio-niskala.git
   cd portfolio-niskala
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn / pnpm / bun
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📞 Contact

- **Website:** [portfolio.niskalahub.com](https://portfolio.niskalahub.com)
- **Email:** emailkerja.agung@gmail.com

---

<p align="center">
  <i>Developed with precision and a touch of luxury.</i>
</p>