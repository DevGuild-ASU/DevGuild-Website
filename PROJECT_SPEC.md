# DevGuild DG — Project Specification

> **Version:** 1.0  
> **Date:** September 4, 2026  
> **Status:** Active — Single Source of Truth  
> **Organization:** DevGuild - ASU

---

## 1. Product Overview

### What Is This?

**DevGuild DG** is the official website for DevGuild, a student developer community at Aklan State University (ASU). The site serves as the public-facing hub for the guild — explaining what DevGuild is, showcasing projects, documenting events, and providing an AI-powered assistant for visitors.

### Purpose

1. **Recruit new members** — explain what the guild offers and how to join
2. **Showcase work** — highlight guild projects (AQUANONS, TABANG, HANDA 360) with stories and photo albums
3. **Communicate values** — present the guild's vision, mission, and strategic goals
4. **Provide resources** — link to tools, learning tracks, and community programs
5. **Answer questions** — via FAQ section and an AI chatbot assistant

### Target Audience

- Students and aspiring developers at ASU (and beyond)
- Beginners with no coding experience through experienced builders
- Potential partners and collaborators

---

## 2. Technical Profile

### Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | React | 19.2.8 |
| Build Tool | Vite | 8.2.0 |
| Routing | react-router-dom | 7.18.2 |
| Linting | oxlint | 1.75.0 |
| Type Checking | `@ts-check` annotations (JSDoc) | — |
| Package Manager | npm | — |

### Project Structure

```
DevGuild-Website/
├── index.html              ← Vite entry point
├── package.json            ← React app dependencies
├── vite.config.js          ← Vite configuration
├── .oxlintrc.json          ← Linter config (React rules)
├── PROJECT_SPEC.md         ← This file
├── DEVELOPER.md            ← Quick-start guide
├── README.md               ← Project overview
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── photos/             ← (migrate from web/photos/)
├── src/
│   ├── main.jsx            ← App entry, BrowserRouter
│   ├── App.jsx             ← Route definitions
│   ├── components/         ← Shared components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Chatbot.jsx
│   │   ├── Slider.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Explore.jsx
│   │   ├── Album.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Privacy.jsx
│   └── styles/             ← CSS approach (see §6)
└── web/                    ← LEGACY site (reference only, remove after migration)
```

### Routes

| Path | Component | Notes |
|---|---|---|
| `/` | `Home` | Root route — must exist |
| `/explore` | `Explore` | |
| `/album` | `Album` | |
| `/about` | `About` | Scrolls to or contains vision/mission content |
| `/contact` | `Contact` | Contact form — currently unbuilt in legacy |
| `/privacy` | `Privacy` | Full privacy policy |
| `*` | `NotFound` | 404 catch-all |

---

## 3. Pages — Content Specification

Each page below documents the **exact content** that must be implemented. Text copy comes directly from the legacy site and is the source of truth.

---

### 3.1 Home Page (`/`)

**Title:** `DevGuild DG — Build without limits`  
**Description:** `DevGuild DG helps ambitious builders learn, collaborate, and launch better products.`

#### Sections

**A. Page Loader**
- Full-screen overlay with DevGuild logo (`devguild-logo.png`)
- Pulsing border animation + gentle logo rocking
- Shows on first visit and hard refresh (tracked via `sessionStorage`)
- Hides after 4-second delay with fade-out transition

**B. Hero**
- Eyebrow: `A community for the age of AI`
- Heading (H1): `Build for the future of technology.`
- Copy: `Learn by building real projects, collaborate with ambitious people, and turn your ideas into useful technology with DevGuild DG.`
- Primary CTA: `Start building for free ↗` → scrolls to Join section
- Secondary CTA: `Explore the Guild →` → navigates to `/explore`
- Note: `Open to beginners, curious learners, and experienced builders.`
- Social proof: `★★★★★ Learn together. Build with purpose.`
- Visual device mockup: phone/device with DevGuild logo, green glow, and 3 floating badge cards:
  - `< />` (code badge)
  - `AI` (AI badge)
  - `BUILD TOGETHER` (community badge)

**C. Purpose & Foundation** (`#vision-mission`)
- Eyebrow: `Our foundation`
- Heading (H2): `Built with purpose. Designed to last.`
- Subheading: `DevGuild DG develops people, practices, and technology with a long-term commitment to responsible innovation.`
- **Vision card:**
  - H3: `A forge for developers who build a better world.`
  - Copy: *DevGuild DG aspires to be a forge of ethical, collaborative, and technically excellent developers who create lasting value through technology. We seek to build a durable legacy of knowledge and community that equips future generations to lead with skill, integrity, and imagination.*
  - Copy 2: *Our vision reaches beyond code. It is grounded in lifelong learning, civic responsibility, and the stewardship of technology as a means of advancing human flourishing.*
- **Mission card:**
  - H3: `Turning potential into meaningful contribution.`
  - Copy: *DevGuild DG complements academic learning by cultivating a community where students and aspiring developers grow into capable, responsible, and professional practitioners through mentorship, hands-on projects, and a shared commitment to ethical practice.*
  - Copy 2: *We transform theoretical knowledge into practical wisdom and ensure that every member, regardless of starting point, has a clear pathway to contribution, confidence, and continuous growth.*
- **Strategic Goals (4 cards):**
  1. `Professional and technical excellence` — Bridge theory and industry practice; structured progression from Apprentice to Senior Developer; continuous feedback and reflective practice.
  2. `A collaborative and inclusive community` — Safe and welcoming environment; mentorship as core practice; diverse perspectives and open dialogue.
  3. `Technology for the common good` — Projects contribute positively to society; refuse exploitative technology; transparent decision-making with impact reviews.
  4. `Long-term sustainability and legacy` — Culture of documentation and continuity; governance through the Council; succession planning.

**D. Why DevGuild DG** (`#benefits`)
- Eyebrow: `Why DevGuild DG`
- Heading (H2): `Less noise. More momentum.`
- Subheading: `Everything you need to keep learning, shipping, and finding your people.`
- 3 Feature Cards:
  1. `01 Learn by building` — *Short workshops, guided projects, and real feedback make every lesson useful beyond the screen.*
  2. `02 Find your people` — *Meet collaborators who are generous with context, honest about the hard parts, and ready to help.*
  3. `03 Ship with confidence` — *From first commit to launch day, build habits that turn unfinished ideas into durable products.*

**E. Programs** (`#programs`)
- Eyebrow: `Programs`
- Heading (H2): `Choose your next move.`
- Subheading: `Meet yourself where you are, then take one useful step forward.`
- 3 Program Tracks:
  1. `Foundations` (Start here) — *A friendly path through web basics, Git, collaboration, and developer workflow.* CTA: `Explore track ↗`
  2. `Build nights` (Make things) — *Low-pressure sessions where small teams turn a prompt into a working prototype.* CTA: `See upcoming sessions ↗`
  3. `Guild projects` (Go further) — *Work with a cross-functional crew on products that solve problems people actually have.* CTA: `View project teams ↗`

**F. FAQ** (`#faq`)
- Eyebrow: `Questions, answered`
- Heading (H2): `Frequently asked questions.`
- 8 Accordion items (use `<details>/<summary>`):
  1. *Who is DevGuild DG for?* — Anyone who wants to build with technology...
  2. *Do I need to be an expert?* — No. We care more about curiosity...
  3. *What happens in a build night?* — We start with a short prompt...
  4. *How can I participate?* — Join a session, offer a workshop...
  5. *What is the Dev Guild?* — A community for students and aspiring developers...
  6. *Who can join?* — Anyone interested in technology...
  7. *Do I need coding experience?* — No. You can join even as a complete beginner...
  8. *What can I learn here?* — Web/mobile dev, backend/databases, UI/UX, Git/GitHub, cloud, AI, cybersecurity, and more.

**G. Requirements** (`#requirements`)
- Eyebrow: `Membership and requirements`
- Heading (H2): `Ready to grow with the guild?`
- Subheading: `From August to October, new members are expected to complete a practical learning milestone.`
- 3 Milestone Cards:
  1. `01` — 5 certificates or badges
  2. `02` — 1 learning project
  3. `03` — Set up GitHub account
- Note: *Certificates do not need to come from a specific platform. Online learning platforms and government-sponsored workshops are accepted.*

**H. Join CTA** (`#join`)
- Eyebrow: `Your next chapter starts here`
- Heading (H2): `Ready to build without limits?`
- Copy: `Join DevGuild DG and find a community that helps you keep moving.`
- CTA: `Join the guild ↗` → `mailto:hello@devguild.dg`

---

### 3.2 Explore Page (`/explore`)

**Title:** `Explore — DevGuild DG`  
**Description:** `Explore DevGuild DG — discover programs, characters, series, affiliates, and how to support the community.`

#### Layout

Two-column layout (left column wider, right column ~380px sidebar). Collapses to single column on mobile.

#### Left Column

**A. Welcome Panel**
- Banner image: `acquaintance-party.png`
- Sub-nav links: Library, New Drops, Categories, Contact
- Copy: *DevGuild DG offers a vast collection of high-quality programs and resources for builders to explore and grow...*

**B. Projects Panel**
- 6 project cards in a grid:
  1. **Aquanons** — image `aquanons.png`, links to `#aquanons-story`
  2. **BFUR64/HANDA 360** — image `handa.webp`
  3. **TABANG** — image `tabang.png`
  4. **SIGMANHWA** — image `sigmanhwa.png`
  5. **GURU.AI** — emoji 🌱
  6. **LETSCHECK** — emoji ⭐

**C. Tools Panel**
- 9 tool badges: GitHub (GH), Figma (FG), VS Code (VS), Discord (DC), Notion (NT), Vercel (VL), LinkedIn (LI), YouTube (YT), Slack (SL)

#### Right Column

**D. Series Panel** — DevGuild logo + community description  
**E. Covers Panel** — Image slider with 2 featured cover photos + pagination  
**F. Support Panel** — CTA to create account + contact us  
**G. More Panel** — 4 small cards linking to: Meet the Guild, Learning Library, Got Questions?, Get in Touch

#### Project Stories Section

**Article 01 — AQUANONS** (`#aquanons-story`)
- Image: `aquanons-project.jpg`
- Copy: Detailed story about the AQUANONS team winning 2nd Place at AI Fest 2026 AI Hackathon
- Team members: Arnold R. Paghunasan, Daniel Joseph R. Orlina, Doreen Kay P. Lachica, Jade N. Salvador, Lenard Angelo A. Olajay
- Coaches: Miquel Von Oquendo, Edward Gumban
- External link: `View full project on GitHub ↗` → `https://github.com/Aquanons/AIHackathon2026_Aquanons_AqOne.git`

---

### 3.3 Album Page (`/album`)

**Title:** `Album — DevGuild DG`

#### Sections

**A. Featured Cover Carousel**
- 3 slides: `featured-cover.jpg`, `featured-cover-2.jpg`, `featured-cover-3.jpg`
- Prev/next arrows + pagination dots

**B. Album Library Grid**
- Heading: `Album library.`
- 7 photo cards (3-column grid, aspect-ratio 3/4 with dark gradient overlay):
  - Community sessions, Project showcases, Milestones, Build days, Partners and events, Guild memories, Handa 360 (links to `#handa-album`)

**C. AQUANONS Album**
- Heading: `AQUANONS` (styled blue `#1689c9`)
- 9-photo slider with team/event photos from AI Fest 2026

**D. TABANG Album**
- Heading: `TABANG` (styled green)
- 4-photo slider from Komsai HackReady 2026

**E. HANDA 360 Album** (`#handa-album`)
- Heading: `HANDA 360`
- 3-photo slider from the Handa 360 event

---

### 3.4 About Page (`/about`)

> **Note:** The legacy `about.html` is empty (0 bytes). Navigation links bypass it entirely and point to `index.html#vision-mission`. In the React app, this route should either:
> - Render the Vision/Mission/Strategic Goals content (same as Home §C), or
> - Redirect to `/#vision-mission`
>
> **Decision needed from team.**

---

### 3.5 Contact Page (`/contact`)

> **Note:** The legacy `contact.html` is empty (0 bytes), but it is linked from every page header, footer, explore support panel, and the privacy policy. A contact page needs to be designed and built.
>
> **Minimum requirements based on references throughout the site:**
> - Contact email: `hello@devguild.dg`
> - Social links: Telegram, WhatsApp, Facebook, Messenger
> - A contact form (name, email, message)
> - Response SLA from privacy policy: acknowledgment within 3 business days, substantive response within 30 business days

---

### 3.6 Privacy Page (`/privacy`)

**Title:** `Privacy Policy — DevGuild DG`  
**Description:** `Privacy Policy for DevGuild DG — Learn how we collect, use, and protect your information.`

**Effective date:** August 18, 2026

#### Structure

- Hero with eyebrow `Legal`, heading `Privacy policy.`
- Table of contents (11 sections, linked anchors)
- Full policy sections:
  1. Information we collect (directly provided + automatically collected + what we do NOT collect)
  2. How we use your information (community ops, communication, improvement & security)
  3. Cookies and local storage (`devguild-theme` in localStorage only; NO analytics/ads)
  4. When we share information (consent, service providers, legal, emergency)
  5. Data security (HTTPS/TLS, DDoS protection, encrypted DB, least privilege, 72-hour breach notification)
  6. Data retention (active membership, 12-month inactive purge, 24-month form purge, 90-day log rotation)
  7. Your rights and choices (access, correct, delete, restrict, portability, withdraw consent, object)
  8. Children's privacy (minimum age 13)
  9. Third-party links
  10. Changes to this policy (14-day notice for material changes)
  11. Contact us (`hello@devguild.dg`)
- Bottom navigation: ← Back Home, Next → Contact Us

---

## 4. Shared Components

### 4.1 Header / Navigation

- Logo: DevGuild logo image + text `DevGuild DG` → links to `/`
- Nav links: Home, Explore, Album, About, Contact, Privacy
- Active link indicator (use `NavLink` with `aria-current="page"`)
- AI chatbot trigger button: `✦ AI`
- **Mobile (≤860px):** Hamburger menu (`☰` / `✕` toggle), full-width dropdown overlay
- Fixed height: standardize to one value (legacy has conflicts between 82px/100px)

### 4.2 Footer

- Title: `DevGuild DG` (Oswald font)
- Social icons: Telegram, WhatsApp, Facebook, Messenger (placeholder links for now)
- Note: *Click the icons above if you have any issues...*
- Nav links: Home, Explore, Album/About, Contact, Privacy
- Copyright: `© 2026 DevGuild DG — Built with curiosity.`

### 4.3 AI Chatbot

- Floating modal, injected into DOM, toggled via header trigger
- Heading: `DEVGUILD AI` / `How can we build together?`
- Welcome message: *Hi! I'm the DevGuild assistant. Ask me about membership, projects, learning, or our mission.*
- Quick prompts: `Who can join?`, `What can I learn?`, `Tell me about projects`
- Input form with submit
- Close via `×` button or `Escape` key
- **Backend:** `POST /api/chat` with `{ message: string }`
  - If `OPENAI_API_KEY` set: uses OpenAI API (`gpt-5` model) with guild-specific system prompt
  - Fallback: keyword-based local responses (both client-side and server-side)
  - Backend server: Node.js HTTP, port 3000, CORS configured for frontend origin
- **Chatbot API URL must be configurable** (not hardcoded to `127.0.0.1:3000`)

### 4.4 Image Slider

Reusable slider component supporting:
- Prev/next arrow navigation with wrap-around
- Pagination dots
- Touch swipe gestures (40-45px threshold)
- Autoplay with 4-second interval
- Pause on hover, resume on mouse leave
- Dynamic aspect-ratio fitting based on image dimensions (album sliders)
- Crossfade transition between slides

---

## 5. Design System

### 5.1 Color Palette

> **Important:** Legacy CSS uses `--red` variable names for green values. The React app should use correct semantic names.

#### Dark Theme (Default)

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#118b36` | Brand green, buttons, accents |
| `--color-primary-dark` | `#086323` | Hover states, darker green |
| `--color-primary-glow` | `rgba(17,139,54,.55)` | Glow effects, shadows |
| `--color-bg` | `#0d0d0d` | Page background |
| `--color-bg-elevated` | `#111111` | Header, cards, panels |
| `--color-bg-deep` | `#161616` | Deeper neutral surface |
| `--color-card` | `#0a0a0a` | Component surfaces |
| `--color-border` | `#1e1e1e` | Borders, dividers |
| `--color-text` | `#e8e8e8` | Primary body text |
| `--color-muted` | `#888888` | Secondary/muted text |
| `--color-line` | `#222222` | Horizontal rules |

#### Light Theme (`html.light`)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#f5f2e9` | Warm off-white background |
| `--color-bg-elevated` | `#fffdf7` | Card/header surfaces |
| `--color-bg-deep` | `#eeeae0` | Subtle container |
| `--color-card` | `#fffdf7` | Component surfaces |
| `--color-border` | `#d5d0c5` | Borders |
| `--color-text` | `#172521` | Dark slate text |
| `--color-muted` | `#64716b` | Muted slate gray |
| `--color-line` | `#d5d0c5` | Dividers |

#### Accent Colors

| Color | Value | Usage |
|---|---|---|
| Bright green | `#35c76a` | Highlights, active states |
| Accent green | `#55d77d` | Secondary highlights |
| Light green | `#aaffbe`, `#bfffd0` | Glow, subtle accents |
| Blue | `#1689c9` | AQUANONS album heading |
| Bright blue | `#0078ff` | Links, Messenger gradient |

#### Social Brand Colors

| Platform | Color |
|---|---|
| Telegram | `#229ed9` |
| WhatsApp | `#25d366` |
| Facebook | `#1877f2` |
| Messenger | `linear-gradient(135deg, #0078ff, #9b59b6)` |

### 5.2 Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Primary / Body | `DM Sans` | 400, 600, 700, 800, 900 | All body text, buttons, nav |
| Display / Headings | `Oswald` | 600, 700 | Section titles, pill headers, footer logo, uppercase tags |
| Editorial | `Georgia, serif` | — | Italic emphasis in H1/H2, quotes |

Google Fonts import:
```
DM Sans: ital,wght@0,400;0,600;0,700;0,800;0,900;1,400
Oswald: wght@600;700
```

### 5.3 Breakpoints

| Name | Value | Behavior |
|---|---|---|
| Desktop | >1280px | Full layouts |
| Tablet | ≤860px | Hamburger nav, single-column stacking, grids collapse |
| Mobile | ≤560px | Full-width buttons, tighter padding, device visual shrinks |
| Compact | ≤380px | Minimal grids (2-col tools, 1-col project cards) |

### 5.4 Layout Patterns

| Pattern | CSS | Where Used |
|---|---|---|
| Section container | `max-width: 1280px; margin: 0 auto; padding-inline: clamp(24px, 5vw, 74px)` | All sections |
| Hero grid | `grid: minmax(0, .9fr) minmax(420px, 1.1fr)` | Home hero |
| Two-column equal | `grid: repeat(2, 1fr)` | Vision/mission |
| Three-column cards | `grid: repeat(3, minmax(0, 1fr))` | Features, programs |
| Explore layout | `grid: 1fr 380px` | Explore page |
| Album grid | `grid: repeat(3, 1fr)` | Album library |

### 5.5 Animation & Motion

| Animation | Details | Respects `prefers-reduced-motion` |
|---|---|---|
| Page loader pulse | 1.7s ease-in-out infinite, scale 0.96–1.04 | — |
| Page loader spin | 2.8s ease-in-out infinite, rotate -5deg to +5deg | — |
| Logo text shimmer | Multi-stop gradient, 2.8s cubic-bezier clip animation | ✅ Yes |
| Scroll reveal | `opacity: 0 → 1`, `translateY(20px) → none`, 0.6s ease | Should respect |
| Hover lift | `translateY(-3px)`, intensified green box-shadow | — |
| Image hover zoom | `scale(1.02–1.08)`, 0.45s ease | — |
| Slide crossfade | opacity transition between slides | — |

---

## 6. CSS Strategy

### Decision Required

The legacy site uses vanilla CSS with custom properties. For the React rebuild, choose one:

| Option | Pros | Cons |
|---|---|---|
| **CSS Modules** (recommended) | Scoped by default, no build config, works with Vite | Verbose class imports |
| **Vanilla CSS imports** | Simple, familiar, matches legacy | Global scope collisions |
| **Tailwind CSS** | Rapid prototyping, utility-first | Departs from legacy design, learning curve |

### Guidelines (regardless of choice)

1. Define all design tokens as CSS custom properties in a single `variables.css` file
2. Use the semantic token names from §5.1 (not the legacy `--red` names)
3. Keep responsive styles mobile-first where possible
4. Implement dark/light theme via a class on `<html>` (e.g., `html.light`)
5. Theme preference stored in `localStorage` key `devguild-theme`

---

## 7. Theme System

- Default: **dark** theme
- Toggle: Button in header (legacy uses `☾`/`☼` icons with labels "Dark mode"/"Light mode")
- Storage: `localStorage.getItem('devguild-theme')` — values: `'dark'` or `'light'`
- Mechanism: Toggle `light` class on `<html>` element
- Accessibility: `aria-pressed`, `aria-label` attributes on toggle button

---

## 8. Image Assets

### Location

All images should be migrated from `web/photos/` to `public/photos/` for Vite to serve them.

### Inventory

| File/Directory | Size | Description |
|---|---|---|
| `devguild-logo.png` | 213 KB | DevGuild DG logo (used everywhere) |
| `acquaintance-party.png` | **4.8 MB** | ⚠ Needs optimization |
| `featured-cover.jpg` | 459 KB | Featured cover photo |
| `featured-cover-2.jpg` | 196 KB | Featured cover 2 |
| `featured-cover-3.jpg` | 194 KB | Featured cover 3 |
| `aquanons.png` | 93 KB | AQUANONS project icon |
| `aquanons-project.jpg` | 459 KB | AQUANONS team at AI Fest |
| `handa.webp` | 24 KB | HANDA 360 icon |
| `tabang.png` | 896 KB | TABANG project icon |
| `sigmanhwa.png` | 1.5 MB | ⚠ Needs optimization |
| `aquanons/` | 9 photos | AQUANONS album photos |
| `tabang/` | 4 photos | TABANG album photos |
| `handa/` | 3 photos | HANDA 360 album photos |
| `handa360/` | — | Additional HANDA 360 photos |

### Optimization Requirements

- Convert large PNGs to WebP (especially `acquaintance-party.png` at 4.8 MB and `sigmanhwa.png` at 1.5 MB)
- Add `loading="lazy"` to all below-the-fold images
- Consider responsive image `srcset` for different viewport sizes

---

## 9. AI Chatbot — Technical Requirements

### Client Component (`Chatbot.jsx`)

- Renders as a floating modal anchored to bottom-right
- Trigger button in header: `✦ AI`
- Keyboard: `Escape` to close
- Auto-focus input field on open
- Quick-prompt buttons for common questions
- Message bubbles: user (right-aligned) and AI (left-aligned)
- Graceful degradation: if API is unreachable, fall back to client-side keyword matching

### Backend (`server.js`)

| Aspect | Detail |
|---|---|
| Runtime | Node.js (native `http` module, no Express) |
| Port | Configurable via `PORT` env var (default: `3000`) |
| CORS | Configurable via `FRONTEND_ORIGIN` env var |
| Endpoint | `POST /api/chat` |
| Payload | `{ "message": string }` (max 2000 chars) |
| AI Provider | OpenAI — model: `gpt-5` |
| API Key | `OPENAI_API_KEY` env var |
| Offline mode | If no API key or API failure → local keyword matching |
| System prompt | Guild-specific context about membership, projects, learning tracks |

### Fallback Response Topics

The local fallback must handle questions about:
- Who can join / membership criteria
- Coding experience requirements
- Learning topics (web, mobile, backend, UI/UX, Git, cloud, AI, cybersecurity)
- Membership requirements (5 certs, 1 project, GitHub setup)
- Projects (AQUANONS, TABANG, HANDA 360)
- Vision and mission
- Contact information

---

## 10. Deployment

### Target

> **Decision needed:** GitHub Pages, Vercel, or Netlify.

### Configuration

- **Vite base path:** Must match deployment target (currently `/my-app` — needs to be changed)
- **BrowserRouter basename:** Must match Vite base path
- If GitHub Pages: base path = `/<repo-name>/`; may need hash router for SPA support
- If Vercel/Netlify: base path = `/`; add SPA rewrite rules

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OPENAI_API_KEY` | Optional | Enables AI chatbot (graceful fallback without it) |
| `PORT` | Optional | Chatbot backend port (default: 3000) |
| `FRONTEND_ORIGIN` | Optional | CORS origin for chatbot API |

---

## 11. Contribution Guidelines

### Getting Started

```bash
npm ci
npm run dev
```

### Code Conventions

1. **All `.jsx` files must have `// @ts-check` at the top** — this is already established
2. **Component naming:** PascalCase for components, camelCase for utilities
3. **File naming:** Component files match their export name (e.g., `Home.jsx` exports `Home`)
4. **Linting:** Run `npm run lint` before committing — uses oxlint with React rules
5. **No unused imports or variables** — oxlint will catch these
6. **Accessibility:** Every interactive element needs proper `aria-*` attributes (the legacy site sets a good example)

### Commit Convention

Use conventional commits:
```
feat: add Home page hero section
fix: correct nav link paths
style: update color tokens for dark theme
docs: update PROJECT_SPEC with deployment info
```

### Migration Workflow

When migrating a page from legacy to React:
1. Read this spec for the page's content requirements
2. Reference the legacy HTML in `web/html/<page>.html` for structure
3. Reference the legacy CSS in `web/css/<page>.css` for styling
4. Build the React component with proper semantic HTML
5. Apply styles using the chosen CSS strategy (§6)
6. Test responsive behavior at all breakpoints (§5.3)
7. Verify accessibility (keyboard navigation, screen reader, ARIA)

---

## 12. Migration Checklist

| # | Task | Status |
|---|---|---|
| 1 | Fix Nav.jsx — add correct `to` paths | ⬜ |
| 2 | Add root `/` route and `*` catch-all route | ⬜ |
| 3 | Fix Vite base path (change from `/my-app`) | ⬜ |
| 4 | Set proper `<title>` and `<meta description>` in index.html | ⬜ |
| 5 | Create shared Header component | ⬜ |
| 6 | Create shared Footer component | ⬜ |
| 7 | Set up CSS strategy and design tokens | ⬜ |
| 8 | Implement dark/light theme system | ⬜ |
| 9 | Migrate photos to `public/photos/` and optimize | ⬜ |
| 10 | Build Home page (all 8 sections) | ⬜ |
| 11 | Build Explore page (two-column layout + project stories) | ⬜ |
| 12 | Build Album page (featured slider + library grid + project albums) | ⬜ |
| 13 | Build About page (decide: standalone or redirect) | ⬜ |
| 14 | Build Contact page (new — form + social links) | ⬜ |
| 15 | Build Privacy page (full policy) | ⬜ |
| 16 | Build reusable Slider component | ⬜ |
| 17 | Build Chatbot component | ⬜ |
| 18 | Build page loader component | ⬜ |
| 19 | Implement scroll-reveal animations | ⬜ |
| 20 | Add 404 Not Found page | ⬜ |
| 21 | Set up Layout route with `<Outlet>` (Header + Footer wrapper) | ⬜ |
| 22 | Remove legacy `web/` directory | ⬜ |
| 23 | Write README with setup/architecture/deployment | ⬜ |
| 24 | Set up CI (build + lint on PRs) | ⬜ |

---

## 13. Known Issues from Legacy Site

These should be **fixed** during migration, not carried over:

1. **CSS variable naming:** `--red` variables contain green values — use semantic names instead
2. **Empty pages:** `about.html` and `contact.html` are 0 bytes — need actual content
3. **Dead social links:** All footer social icons point to `#` — need real URLs
4. **Hardcoded ports:** Chatbot API URL and CORS origin are hardcoded — make configurable
5. **Duplicate chatbot scripts:** `chatbot.js` and `chatbot-v2.js` differ by 2 bytes — keep only v2
6. **Header height conflicts:** Three different CSS files override `.site-header` height — standardize
7. **Legacy class names:** Explore page uses `.chars-grid` (characters) and `.aff-grid` (affiliates) — rename to semantic names
8. **Unoptimized images:** Multiple assets >1MB — compress and convert to WebP
9. **4-second artificial loader delay:** Consider reducing or removing for returning visitors

---

*This spec is the single source of truth for the DevGuild website rebuild. Update it as decisions are made and features are completed.*
