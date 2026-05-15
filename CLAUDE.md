# CLAUDE.md — Jaegyoon Lee Portfolio

This file is the source of truth for AI-assisted updates to this portfolio. Read it before making any change.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 + Vite |
| Styling | TailwindCSS v3 + inline styles (no CSS modules) |
| Animation | framer-motion (`motion.*`, `AnimatePresence`, `useScroll`, `useTransform`) |
| Smooth Scroll | Lenis (`src/hooks/useLenis.js`) — do NOT add `scroll-behavior: smooth` to CSS |
| Routing | react-router-dom v6 (`Routes`, `Route`, `useNavigate`, `useParams`) |
| Font | JetBrains Mono (monospace labels/metadata), Inter (body) |

---

## Project Structure

```
src/
  data/          ← Content lives here. Edit these to add projects / achievements / skills.
    projects.js
    achievements.js
    skills.js
    contact.js
  sections/      ← Homepage sections (Hero, About, Projects, Skills, Achievements, Contact)
  pages/         ← Route pages (HomePage, ProjectDetail, AchievementDetail)
  components/    ← Shared components (Navbar, Footer, Marquee, IntroLoader)
  hooks/         ← useLenis.js, useActiveSection.js, useScrollReveal.js
  index.css      ← Global styles and shared utility classes
public/
  intro.mp4      ← Intro loader background video
  jae-photo.jpeg ← Profile photo used in About section
  projects/      ← Project thumbnail images (e.g. otv.jpg)
  favicon.svg
```

---

## Design System

### Color Palette
- **Background**: `#0d0d0d` (all sections, pages)
- **Primary text**: `#ffffff`
- **Body text**: `rgba(255,255,255,0.7)`
- **Subdued text**: `rgba(255,255,255,0.5)` → `0.38` → `0.28` → `0.22` (progressively dimmer)
- **Labels / metadata**: `rgba(255,255,255,0.35)` with JetBrains Mono
- **Borders**: `rgba(255,255,255,0.07)` (subtle) / `rgba(255,255,255,0.08)` (section dividers)
- **Card hover bg**: `rgba(255,255,255,0.03)`
- **No accent colors** — the palette is strictly monochrome white-on-black

### Typography Scale
- **Hero name**: `clamp(52px, 7vw, 96px)`, weight 800, `letterSpacing: '-3.5px'`, uppercase
  - "Jaegyoon" → solid white
  - "Lee" → outlined: `color: transparent`, `WebkitTextStroke: '1.5px rgba(255,255,255,0.5)'`
- **Section h2**: `clamp(28px, 4vw, 48px)`, weight 700, `letterSpacing: '-1.5px'`
- **Project/card title**: `clamp(15px, 1.8vw, 20px)`, weight 600, `letterSpacing: '-0.4px'`
- **Body text**: 14–15px, weight 400, `lineHeight: 1.75`
- **Monospace labels**: 10–11px, `letterSpacing: '0.18em'`, uppercase, JetBrains Mono
- **Spec values**: 12–13px, JetBrains Mono, `rgba(255,255,255,0.85)`

### Shared CSS Classes (defined in `src/index.css`)
- `.section-container` — standard section wrapper: `max-w-6xl mx-auto px-8 md:px-14`, `padding: 96px`
- `.btn-ghost` — outline button: transparent bg, `1px solid rgba(255,255,255,0.3)`, uppercase
- `.tag` — small bordered pill: `1px solid rgba(255,255,255,0.15)`, 10px font
- `.spec-label` — metadata label: 10px mono, uppercase, `0.35` opacity
- `.input-technical` — underline-only input field
- `.rule` — `1px solid rgba(255,255,255,0.08)` horizontal rule

### Section Header Pattern
Every section uses the same numbered label above the heading. Never deviate from this:

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
  <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>02</span>
  <div style={{ height: 1, width: 28, background: 'rgba(255,255,255,0.2)' }} />
  <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', fontFamily: 'JetBrains Mono, monospace' }}>About</span>
</div>
```

Section numbers: 01 Hero · 02 About · 03 Projects · 04 Skills · 05 Achievements · 06 Contact

### Animation Conventions
- **Entrance**: `initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- **Ease**: `[0.16, 1, 0.3, 1]` (spring-like ease-out) for hero/headings; `easeOut` for smaller elements
- **Duration**: 0.7s headings, 0.55s cards, 0.5s list items
- **Stagger**: `delay: index * 0.06` for lists/grids
- **Hero name reveal** (clip-path style): wrap each line in `overflow: hidden`, animate `y: '108%' → '0%'`
- **Hover**: `whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)', x: 3 }}` for project rows
- Lenis runs globally via `useLenis()` in `App.jsx` — framer-motion's `useScroll` stays in sync automatically

---

## Adding a New Project

### 1. Add to `src/data/projects.js`

Copy an existing entry and fill in all fields:

```js
{
  slug: 'your-project-slug',       // kebab-case, unique, used in URL: /projects/your-project-slug
  title: 'Project Title',
  shortDesc: 'One-sentence summary shown on the homepage card.',
  description: 'Full paragraph description shown on the detail page.',
  tags: ['Tag1', 'Tag2'],          // Topic tags shown in detail sidebar
  tech: ['Tool1', 'Tool2'],        // Tech stack tags shown in detail sidebar
  github: 'https://github.com/...', // or null
  live: 'https://...',             // or null if no live demo
  period: 'Jan 2025 – Mar 2025',
  highlights: [                    // 3–5 bullet points for the detail page
    'Accomplishment or technical detail',
    'Another highlight',
  ],
  bgColor: '#2563eb',              // Unused visually but keep for future use
  image: '/projects/filename.jpg', // Optional — place image in /public/projects/
}
```

### 2. Add category label and tech string to `src/sections/Projects.jsx`

In `categoryLabel` and `techLabel` objects at the top of the file:

```js
const categoryLabel = {
  // existing...
  'your-project-slug': 'CATEGORY NAME',  // e.g. 'MACHINE LEARNING', 'ROBOTICS', 'FULL STACK'
}

const techLabel = {
  // existing...
  'your-project-slug': 'Tool · Tool · Tool',  // Short tech string shown under each card
}
```

### 3. (Optional) Add a thumbnail image

Place a `.jpg` or `.png` in `/public/projects/your-image.jpg` and reference it in the project data as `image: '/projects/your-image.jpg'`. Recommended aspect ratio: **4:3**.

That's it — the project row on the homepage and the detail page (`/projects/your-project-slug`) are generated automatically.

---

## Adding a New Achievement

Edit `src/data/achievements.js`:

```js
{
  slug: 'unique-slug',
  year: 'MAY 2026',              // Shown as uppercase label
  title: 'Achievement Title',
  issuer: 'Issuing Organization',
  category: 'Award',             // e.g. 'Award', 'Academic Award', 'Certification'
  description: 'Short one-line description shown in the list.',
  details: 'Full paragraph shown on the detail page.',
  certificateUrl: 'https://...',  // or null
  iconColor: '#0ea5e9',           // Accent color for the detail page icon (only place color is used)
}
```

The achievement appears in the list automatically. Detail page is at `/achievements/unique-slug`.

---

## Updating Skills

Edit `src/data/skills.js`. Each category has:

```js
{
  id: 'unique-id',
  icon: '>_',          // Short text icon displayed above the category
  title: 'Category Name',
  skills: ['Skill1', 'Skill2', 'Skill3'],
}
```

Add or remove skills within existing categories, or add a new category object. The Skills section renders all categories in a grid automatically.

---

## Updating Personal Info / Contact

Edit `src/data/contact.js`:

```js
export const contactInfo = {
  name: 'Jaegyoon Lee',
  title: 'Engineer & Researcher',
  email: 'jae.lee9802@gmail.com',
  phone: null,
  location: 'Seattle, WA, USA',
  github: 'https://github.com/Jae-Lee-Tho',
  linkedin: 'https://linkedin.com/in/jaegyoon-lee',
  resumeUrl: 'https://drive.google.com/...',
}
```

This object is imported by Hero, About, Contact, and Navbar — changing it here updates everywhere.

---

## Page Layout Patterns

### Detail Pages (`ProjectDetail`, `AchievementDetail`)
Both follow this structure:
1. Navbar (fixed, 52px height → `paddingTop: 52` on main)
2. Doc header strip: left label + right ID code (e.g. `PRJ-01`, `ACH-01`)
3. Banner with section number label + `<h1>` title
4. Main content: `2fr 1fr` grid (main left, sidebar right)
5. Footer

### Hero Section
- Has its own wider container: `max-w-7xl`
- All other sections use: `max-w-6xl` (`.section-container`)
- Doc header strip + metadata strip above the fold
- Name: clip-path word reveal (y slide up from overflow:hidden container)
- Right panel: `DroneBlueprintSVG` with framer-motion `pathLength` draw-in animation

### Marquee
`<Marquee />` sits between Hero and About in `HomePage.jsx`. To update the keywords, edit the `ITEMS` array in `src/components/Marquee.jsx`.

---

## Intro Loader

`src/components/IntroLoader.jsx` — plays once per browser session (`sessionStorage` key: `intro-seen`).

- Background video: `/public/intro.mp4`
- Text lines defined in `LINES` array — edit to change the intro copy
- Auto-dismisses at 4.2s, calls `onComplete` at 5s
- To disable intro entirely: remove `{!introDone && <IntroLoader ... />}` from `App.jsx`

---

## Theme Rules — Never Break These

1. **No accent colors** on any interactive element. Hover states use white opacity shifts only.
2. **No border-radius** on cards or panels — corners are always sharp (0) or use the `.tag` pill with `0px` radius.
3. **JetBrains Mono** for all metadata, labels, numbers, and code-adjacent text. Inter for body copy.
4. **No shadows** — depth is created through border opacity and background contrast alone.
5. **Borders are always** `1px solid rgba(255,255,255,0.07–0.18)` — never solid white or colored.
6. **`#0d0d0d` background everywhere** — do not introduce off-black variants like `#111` or `#0a0a0a`.
7. **Lenis handles all scrolling** — never fight it with `overflow: scroll` on `body` or `html`, and never add CSS `scroll-behavior: smooth`.
8. **framer-motion `viewport={{ once: true }}`** on all `whileInView` animations — elements animate in once and stay visible.

---

## Git Branches

- `main` — production branch (served by GitHub Pages if configured)
- `Jimins-perfect-work` — active development branch

Always develop on `Jimins-perfect-work` and merge to `main` when ready to publish.
