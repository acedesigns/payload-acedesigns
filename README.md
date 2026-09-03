# Portfolio Site

A Next.js portfolio site with a [Payload CMS](https://payloadcms.com) backend, so every section of the landing page (hero, about, stats, skills, resume, services, contact) and site-wide settings (nav, social links, footer) can be edited from an admin panel instead of hardcoded JSX.

## Tech stack

- **Next.js 16** (App Router, React 19)
- **Payload CMS 3** — headless CMS, mounted inside the Next.js app
- **MongoDB** via `@payloadcms/db-mongodb` — Payload's data store
- **TypeScript** (strict)
- **AOS** for scroll animations, **typed.js** for the hero typing effect

## Prerequisites

- Node.js 20+ (repo was built against `v20.19.1`)
- npm
- A MongoDB instance — local (`mongod` on `127.0.0.1:27017`) or a hosted cluster (e.g. MongoDB Atlas)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment variables**

   Create a `.env` file in the project root:

   ```bash
   DATABASE_URL=mongodb://127.0.0.1/payload-acedesigns
   PAYLOAD_SECRET=some-long-random-string
   ```

   - `DATABASE_URL` — MongoDB connection string, read in `src/payload.config.ts`.
   - `PAYLOAD_SECRET` — used by Payload to sign/encrypt auth tokens. Generate one with e.g. `openssl rand -base64 32`.

3. **Run the dev server**

   ```bash
   npm run dev
   ```

   - Site: [http://localhost:3000](http://localhost:3000)
   - Payload admin: [http://localhost:3000/admin](http://localhost:3000/admin)

4. **Create the first admin user**

   On first visit to `/admin`, Payload prompts you to create a user (backed by the `Users` collection). Use this to log in and manage content going forward.

5. **Save the Landing Page global at least once**

   The site's home page reads its content from the `landing-page` global via `getLandingPage()` (`src/lib/payload.ts`). Field-level `defaultValue`s in `src/globals/LandingPage.ts` are only a fallback for *unsaved* fields — until you open `/admin` → **Globals → Landing Page** and hit **Save** at least once, no document exists in MongoDB for it, and the page renders entirely from those defaults. Same applies to **Site Settings**.

## Content model

Content lives in MongoDB, database name taken from `DATABASE_URL` (`payload-acedesigns` by default). Payload stores all **globals** as individual documents in a single `globals` collection, keyed by `globalType`; **collections** each get their own MongoDB collection.

### Globals (`src/globals/`)

- **`landing-page`** — everything rendered on the home page, organized as tabs:
  - `hero` — heading, hero image, typed strings
  - `about` — heading, intro paragraphs, subheading, tagline, info list, closing paragraph
  - `stats` — icon/value/label items
  - `skills` — heading, subheading, name/percent items
  - `resume` — heading, intro, summary, and a list of experience entries (role, company, dateRange, location, bullets)
  - `services` — heading, icon/title/description/link items
  - `contact` — heading, info items, map embed URL
- **`site-settings`** — site name, profile image, nav items, social links, footer copyright name

### Collections (`src/collections/`)

- **`Users`** — Payload admin auth
- **`Media`** — uploads (used by hero image, profile image, etc.)

### Reading content in the app

`src/lib/payload.ts` exposes `getLandingPage()` and `getSiteSettings()`, both cached per-request via React's `cache()`. They call `payload.findGlobal()` and normalize optional/array fields (`?? []`) before handing typed data to the page components in `src/components/`.

## Scripts

```bash
npm run dev     # start the dev server (Next.js + Payload)
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Project structure

```
src/
  app/
    (app)/            # public site routes (home, contact, ...)
    (payload)/         # Payload admin UI + REST/GraphQL API routes
  collections/          # Payload collection configs (Users, Media)
  globals/              # Payload global configs (LandingPage, SiteSettings)
  components/            # React components, incl. components/sections/*
  hooks/                 # custom React hooks (e.g. preloader)
  lib/                   # payload.ts — typed data-fetching helpers
  styles/                # global styles, fonts
  payload.config.ts      # Payload config (db adapter, collections, globals)
```

## Deployment

Any host that can run a persistent Node.js server works (Payload's admin/API routes are not compatible with static export). Make sure the deployment environment has `DATABASE_URL` and `PAYLOAD_SECRET` set, and that the MongoDB instance is reachable from it.
