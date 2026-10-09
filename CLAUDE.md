# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build to `dist/`
- `npm run lint` — ESLint (flat config, TS + react-hooks + react-refresh)
- `npm run preview` — serve the built `dist/`
- `npm run deploy` — publish `dist/` to GitHub Pages via `gh-pages` (run `build` first). Custom domain `ponsadvento.com` comes from `public/CNAME`.

There is no test suite. Verify changes with `npm run build` and `npm run lint`.

Formatting is Prettier (`prettier.config.cjs`): double quotes, semicolons, trailing commas, 100-col width, with `prettier-plugin-tailwindcss` sorting class names.

## Architecture

Single-page portfolio: React 19 + TypeScript + Vite + Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config`; theme tokens and custom variants live in `src/index.css`). Animations use `framer-motion`, icons use `lucide-react`. `react-router` is installed but unused; navigation is in-page anchors (`#top`, `#services`, `#why-me`, `#projects`, `#contact`) defined by the section components.

`src/App.tsx` stacks the sections in a fixed client-facing order: Navbar → Hero (who I am) → Services (what I do) → WhyMe (benefits + process) → Projects (proof) → Footer (contact). Copy is written inline in JSX, and the owner wants it kept short.

### One screen per section

Every section is `min-h-dvh` with its content vertically centred, and is designed to fit within one viewport from ~375×667 phones up to desktops. The exception is Projects, which spans several screens: one `min-h-dvh` screen per project, each of which must fit the viewport. Keep it that way when editing:
- Vertical spacing and headline sizes scale with height through `clamp(..., Ndvh, ...)` arbitrary values rather than fixed margins.
- `short:` (custom variant in `index.css`, `max-height: 700px`) hides secondary details and tightens padding on short screens; `max-sm:short:` targets short phones only.
- Top padding (`pt-24`, `short:pt-20`) clears the fixed navbar.
- Verify by measuring each section's and each project screen's (`#project-<id>`) `offsetHeight` against `innerHeight` at several viewport sizes, and check that no project card's content is clipped.

`SectionHeader.tsx` is the shared eyebrow + headline used by Services, WhyMe and Projects.

`TechMarquee.tsx` (inside Services) is the scrolling tech-stack strip. Logos are SVGs in `src/assets/tech/` (from Simple Icons, CC0, and Devicon, MIT) loaded with `import.meta.glob` and drawn as CSS masks so they take the text colour. To add a technology, drop `<slug>.svg` there and add `{ name, icon: icon("<slug>") }` to `stack`; omit `icon` for a name-only pill. The `animate-marquee` keyframes live in `index.css`.

### Projects section

`Projects.tsx` holds a `projects` data array and renders each entry as its own screen inside `#projects`. The first screen carries the section headline; later screens show only the eyebrow and an `NN / NN` counter, and the image side alternates. To add a project, append an entry:
- Screenshots go in `src/assets/images/` as `<project>-<n>.png`, are imported at the top of the file, and are passed as `images`, with per-image alt text in `alts`.
- `overlay` is an optional decorative ReactNode drawn over the image (hidden on phones and short screens). Keep it at `bottom-14` or higher so it clears the carousel dots.
- `featured` switches to the gold-bordered style (used by E-Notary).
- All project repositories are private; don't add repo links.

`ProjectCarousel.tsx` is an auto-advancing carousel (pause on hover, prev/next, dots). E-Notary has no screenshots yet and uses a placehold.co title image.

### Styling

Styling is inline Tailwind utility classes with arbitrary values. Colors are hard-coded hex values rather than theme tokens: gold accent `#B88746` / `#C79A5B` / `#D1A96D`, light background `#FAF9F7`, dark sections `#171717`. Fonts (Inter, Geist) load from Google Fonts in `index.html`.
