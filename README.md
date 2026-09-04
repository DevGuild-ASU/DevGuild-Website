# DevGuild DG — Official Website

Official website for **DevGuild DG**, a student developer community at Aklan State University (ASU). Built with React 19, Vite, React Router v7, and CSS Modules.

> **Live Deployment:** [https://devguild-asu.github.io/DevGuild-Website/](https://devguild-asu.github.io/DevGuild-Website/)

---

## ⚡ Quick Start

```bash
# Install dependencies
npm ci

# Start local development server
npm run dev

# Run oxlint linter
npm run lint

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 Architecture & Structure

```
DevGuild-Website/
├── .github/workflows/deploy.yml   # GitHub Actions automated deployment workflow
├── index.html                     # Vite HTML entry with fonts & SPA redirect script
├── package.json                   # React 19, React Router, Vite, Oxlint
├── vite.config.js                 # Vite base path configuration (/DevGuild-Website/)
├── public/
│   ├── 404.html                   # SPA redirect for GitHub Pages routing
│   ├── favicon.svg                # DevGuild icon
│   └── photos/                    # Migrated and optimized project and community photos
└── src/
    ├── main.jsx                   # Entry point with BrowserRouter & global CSS tokens
    ├── App.jsx                    # Nested route definitions inside Layout
    ├── styles/
    │   ├── variables.css          # Semantic design tokens (dark & light themes)
    │   └── reset.css              # Reset, typography, accessibility skip-to-content
    ├── components/
    │   ├── Layout.jsx             # Layout shell (Header, Footer, Chatbot, PageLoader)
    │   ├── Header.jsx             # Sticky navigation, logo shimmer, hamburger, AI trigger
    │   ├── Footer.jsx             # Social links, site navigation, copyright
    │   ├── ThemeToggle.jsx        # Dark/Light theme switcher with localStorage persistence
    │   ├── PageLoader.jsx         # Smooth intro animation (sessionStorage-aware)
    │   ├── Chatbot.jsx            # Floating AI assistant with offline knowledge fallback
    │   └── Slider.jsx             # Touch/swipe/keyboard responsive carousel component
    └── pages/
        ├── Home.jsx               # Landing page (Hero, Purpose, Features, Programs, FAQ, Join)
        ├── Explore.jsx            # Two-column layout (Projects, Tools, Series, AQUANONS story)
        ├── Album.jsx              # Featured carousel, photo library, project sliders
        ├── About.jsx              # Mission, Vision, Strategic Goals
        ├── Contact.jsx            # Contact form, social channels, response SLAs
        ├── Privacy.jsx            # 11-section privacy policy with anchor table of contents
        └── NotFound.jsx           # 404 fallback page
```

---

## 🎨 Design System

- **Themes:** Dark theme default with instant light theme toggle (`html.light`), persisted in `localStorage` under `devguild-theme`.
- **Typography:** DM Sans (Body, buttons), Oswald (Headings, tags), Georgia (Italic editorial accents).
- **CSS Strategy:** CSS Modules for component-level isolation + semantic tokens in `variables.css`.

---

## 🚢 Deployment

Automated via GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. SPA routing on GitHub Pages is handled via `public/404.html` and script decode in `index.html`.
