# Portfolio Website — Prashant Singh Chauhan

A 5-page editorial portfolio inspired by the Aurelian reference (large display type, generous whitespace, asymmetric layouts, subtle scroll reveals) but recolored to the PRD's professional navy/blue palette suited for Canadian BI/Data Analyst recruiters.

## Design System

- **Palette** (from PRD §3.2): Primary Navy `#1E3A5F`, Accent Blue `#2563EB`, Light Blue Tint `#EEF2FF`, Soft Sky `#F0F9FF`, Body `#111827`, Muted `#6B7280`, White, Border `#BFDBFE`. Encoded as oklch semantic tokens in `src/styles.css`.
- **Typography**: Editorial display via **Bodoni Moda** (serif, large headlines) paired with **Hanken Grotesk** (body) — keeps the Aurelian editorial feel while staying professional. JetBrains Mono for metric/code accents.
- **Motion**: Subtle Motion-for-React fade/translate on scroll; restrained — no bouncy animations.

## Site Architecture (TanStack Router file routes)

```
src/routes/
  __root.tsx           shared <Header/> + <Footer/>, base meta
  index.tsx            / Home
  about.tsx            /about
  projects.tsx         /projects (filter + grid + expandable detail)
  skills.tsx           /skills (skills matrix + certs + resume CTA)
  contact.tsx          /contact (form + socials)
```

Each route sets its own `head()` with unique title/description/og tags using the template "Prashant Chauhan | Data Analyst | Toronto | [Page]".

## Page-by-Page (PRD §5, cross-checked with resume)

**Home (/)**

- Hero: editorial headline "From 1,200 Daily Transactions to $3M Insights" + subhead, primary CTA "View Projects", secondary "Download Resume".
- Stats strip: 5+ Years • $3M Revenue Insights • 12% Waste Reduction • 79% Model Accuracy.
- Featured Projects (2-up): Telecom Churn + Financial Dashboard.
- Mini About strip with headshot placeholder + hospitality→data pivot blurb.
- Certifications marquee: IBM, HackerRank, General Assembly, SHMS Master's.

**About (/about)**

- Display headline "From Hospitality to Data — A Different Kind of Analyst".
- Story section (narrative arc).
- Career timeline (vertical): Edvora (2020–22) → Four Seasons (2022–23) → Tim Hortons (2023–25) → GA Bootcamp (2026).
- Education cards: General Assembly, Swiss Hotel Management School, PSIT.
- Values / working principles.

**Projects (/projects)**

- Tag filter bar: All / Power BI / SQL / Python / Tableau / ML.
- Card grid (3/2/1 col responsive) with title, abstract data graphic, tech tags, problem 1-liner, key metric.
- Click → expandable detail (in-page accordion/section) with Problem, Data & Tools, Methodology, Outcome, Visuals placeholder.
- Seeded with the two resume projects; layout supports adding more.

**Skills (/skills)**

- Grouped matrix per PRD §5.4: Languages & Querying, BI & Visualization, Data Science / ML, Cloud & Databases, BI Concepts, Productivity. Skill chips with proficiency dots.
- Certifications list (IBM Jan 2026, HackerRank Apr 2026, GA May 2026).
- Education recap.
- Prominent "Download Resume (PDF)" + "View LinkedIn" CTAs.

**Contact (/contact)**

- Editorial split layout: left = intro + availability signal "Open to Data Analyst roles in Canada"; right = contact form (name, email, message, honeypot).
- Direct: [Prashantch.94@gmail.com](mailto:Prashantch.94@gmail.com), +1 (437) 665-0895, Toronto ON, LinkedIn, GitHub.
- Form submit handled client-side stub (mailto fallback) — wire to Resend/Formspree later as PRD §1.4 allows.

## Shared Components

`Header` (logo wordmark "PSC" + nav + Resume CTA), `Footer` (socials + © + location), `SectionHeading`, `StatCard`, `ProjectCard`, `SkillChip`, `TimelineItem`, `Marquee`, `Reveal` (motion wrapper).

## Technical Notes

- Stack: TanStack Start + React 19 + Tailwind v4 + Motion. (PRD mentions Next.js, but project is locked to TanStack Start — equivalent capabilities, noted in delivery.)
- Semantic tokens only; no hardcoded colors in components.
- SEO: per-route `head()`, Person JSON-LD on home, semantic H1s, alt text.
- Accessibility: AA contrast, focus-visible rings, keyboard nav for filters/accordion.
- Resume PDF: place at `public/prashant-chauhan-resume.pdf` (user can replace; copying the uploaded `ga_prashant.pdf` as the initial file).
- Performance: lazy-load below-fold images, system-font fallback while Google Fonts load.

## Out of Scope for v1

- Real backend form delivery (stub now, wire Resend later).
- CMS — content is hardcoded from the resume/PRD; easy to extract to a data file later.
- Dark mode (PRD specifies light editorial palette).