# Developer Guide — DevGuild Website Rebuild

## Prerequisites

- **Node.js:** v18.0.0+ (v20+ recommended)
- **npm:** v9.0.0+

---

## Getting Started

```bash
# 1. Install dependencies
npm ci

# 2. Launch Vite dev server
npm run dev

# 3. Test linter
npm run lint

# 4. Production build check
npm run build
```

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `VITE_CHATBOT_API_URL` | *(empty)* | Optional URL to backend AI endpoint (`POST /api/chat`). If unset or unreachable, the chatbot automatically falls back to client-side knowledge matching. |

---

## Coding Standards

1. **JSDoc `@ts-check`:** Include `// @ts-check` at the top of all `.jsx` files.
2. **Linting:** Zero warnings and errors on `npm run lint` (using `oxlint`).
3. **CSS Modules:** Style components using `[Component].module.css` and use semantic CSS tokens from `src/styles/variables.css`.
4. **Accessibility:** Ensure all buttons have `aria-label` or accessible text, and all interactive controls support keyboard navigation.
