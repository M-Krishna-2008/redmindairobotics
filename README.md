# RedMind AI Robotics

A high-performance, interactive multi-page web application built for **RedMind AI Robotics**, featuring liquid glassmorphic design aesthetics, a 210-frame interactive background scroll animation, smooth momentum scrolling, and integrated WhatsApp business dispatch forms.

---

## 🚀 Key Functions & Features

### 1. 🎬 210-Frame Interactive Canvas Animation Sequence
- **Preloading Engine**: Preloads a sequence of 210 high-resolution background frames (`background pics/ezgif-frame-001.jpg` to `210.jpg`) with a real-time progress loader.
- **Scroll Sync & Lerp**: Uses Linear Interpolation (lerp algorithm) combined with `requestAnimationFrame` to seamlessly map scrolling progress to canvas frame updates.
- **DPI & Aspect Ratio Cover Math**: Automatically adjusts to retina/high-DPI screens using `devicePixelRatio` and calculates object-cover geometry so the canvas stays crisp on all screen resolutions.

### 2. 🌊 Lenis Smooth Scroll Integration
- **Momentum Scrolling**: Powered by `@studio-freight/lenis` to deliver ultra-smooth, fluid scrolling mechanics across desktop and mobile devices.
- **Event Synchronization**: Continuously feeds scroll position and limits into the canvas animation engine and dynamic header handlers.

### 3. 💎 Dynamic Liquid Glass Navigation Header
- **Adaptive Header Transition**: Dynamically switches background opacity, backdrop blur, padding, and subtle glass borders as the user scrolls past 40px down the page.
- **Translucent Halo Logo Effect**: Custom radial glow surrounding the brand logo without harsh frosted boundaries.

### 4. 📲 Direct WhatsApp Business Dispatch System
- **Contact Form Integration (`contact.html`)**: Captures Name, Work Email, Company, and Deployment Goal, automatically formatting the details into a pre-structured WhatsApp message sent to `+91 88707 34003`.
- **Advisory Form Integration (`consulting.html`)**: Captures Name/Title, Work Email, Industry, Consultation Goal, and Operational Context for feasibility study inquiries, dispatched directly via WhatsApp.

### 5. 🏢 Multi-Page Architecture
- **Home Page (`index.html`)**: Enterprise introduction, mission, core robotics overview, and interactive showcase.
- **Products Page (`products.html`)**: Deep dive into AI robotics platforms, autonomous systems, and core software suites.
- **Services Page (`services.html`)**: Breakdown of robotic deployment, AI integration, maintenance, and engineering advisory.
- **Industries Page (`industries.html`)**: Sector-specific robotics implementations across Manufacturing, Healthcare, Logistics, Energy, and Defense.
- **Consulting Page (`consulting.html`)**: Strategic advisory intake and feasibility evaluation services.
- **Contact Page (`contact.html`)**: Direct channel for project inquiries and advisory requests.

---

## 🛠️ Technologies Used

| Technology / Library | Purpose / Usage |
| :--- | :--- |
| **HTML5** | Semantic structure for multi-page application routing |
| **CSS3 & Tailwind CSS v4** | Modern utility-first styling (`@tailwindcss/vite`), custom liquid glassmorphism, radial glow, backdrop filters, and custom dark theme (`#030305`) |
| **JavaScript (ES Modules)** | Modular application logic, event listeners, frame calculation, and DOM management |
| **Vite (v5.4.2)** | Next-generation frontend build tool configured for Multi-Page Application (MPA) bundling |
| **Lenis (`@studio-freight/lenis`)** | Hardware-accelerated smooth scrolling library |
| **HTML5 Canvas 2D Context** | High-speed frame rendering for sequence animations |
| **GitHub Actions** | Automated CI/CD pipeline for building and deploying static bundles to GitHub Pages |

---

## 📁 Project Structure

```text
redmind-ai-robotics/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages automated deployment workflow
├── background pics/            # 210-frame image sequence (ezgif-frame-001.jpg to 210.jpg)
├── src/
│   ├── canvasRenderer.js       # Frame preloader, canvas cover calculations, lerp animation loop
│   ├── main.js                 # Lenis scroll setup, RAF loop, header scroll listener, form handlers
│   └── style.css               # Tailwind CSS v4 import, glassmorphism UI classes, custom keyframes
├── index.html                  # Main Landing Page
├── products.html               # AI Robotics Products Page
├── services.html               # Integration & Engineering Services Page
├── industries.html             # Target Industry Solutions Page
├── consulting.html             # Strategic Advisory Intake Page
├── contact.html                # Contact & WhatsApp Inquiry Page
├── vite.config.js              # Vite multi-page Rollup input configuration
├── package.json                # Project dependencies and scripts
└── README.md                   # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher recommended) and **npm** installed.

### Installation
1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   cd redmind-ai-robotics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server
Run the local development server with hot-module replacement (HMR):
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
Build the static distribution files into the `dist/` directory:
```bash
npm run build
```

To preview the built production site locally:
```bash
npm run preview
```

---

## 🚢 Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`). Any push to the `main` or `master` branch automatically triggers a Vite build and deploys the static files to **GitHub Pages**.
