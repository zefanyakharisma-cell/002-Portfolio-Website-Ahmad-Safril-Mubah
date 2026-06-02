# Ahmad Safril Mubah — Academic Portfolio

Bilingual (EN/ID), light/dark academic portfolio for **Ahmad Safril Mubah, S.IP., M.Hub.Int., Ph.D.** — Vice Dean & Lecturer, Department of International Relations, FISIP, Universitas Airlangga.

Public site presents the bio, research themes, publications, teaching, media commentary, CV download, and contact. A password-protected admin panel manages the dynamic content.

## Stack

- **Next.js 15** (App Router, server components, server actions)
- **Supabase** — Postgres + Auth + Storage, with Row-Level Security
- **next-intl** — `/en` and `/id` locale routing
- **Tailwind CSS v3** — semantic CSS-variable tokens for light/dark
- **next-themes** — class-based day/night toggle
- **Framer Motion** — subtle scroll reveals
- **lucide-react** — icons

## Getting started

### 1. Install

```bash
npm install
```

### 2. Create a Supabase project

In the Supabase **SQL editor**, run, in order:

1. `supabase/schema.sql` — tables, RLS policies, storage buckets
2. `supabase/seed.sql` — research themes + publications seed data

### 3. Create the admin user

Supabase Dashboard → **Authentication → Users → Add user** (email + password).
Use Safril's institutional email. This is the only login; there is no public sign-up.

### 4. Environment variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key>
SUPABASE_SERVICE_ROLE_KEY=<service role key>   # server-only: CV signed URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> The site builds and renders without these (dynamic sections fall back to
> empty states), so you can preview the design before wiring Supabase.

### 5. Run

```bash
npm run dev      # http://localhost:3000  → redirects to /en
```

## Routes

| Path | Description |
|------|-------------|
| `/en`, `/id` | Public portfolio (locale-prefixed) |
| `/en/admin/login` | Admin sign-in |
| `/en/admin/dashboard` | Overview stats |
| `/en/admin/publications` | Publications CRUD |
| `/en/admin/research` | Research themes CRUD (drag to reorder) |
| `/en/admin/media` | Media items CRUD |
| `/en/admin/cv` | Upload / replace CV PDF |
| `/api/cv` | Redirects to a 1-hour signed CV download URL |
| `/api/revalidate` | On-demand ISR revalidation (called after admin saves) |

## Content model

- **Dynamic** (Supabase, editable in admin): publications, research themes, media items, CV PDF.
- **Static** (translation files `messages/en.json` / `messages/id.json`): bio, education, metrics, teaching courses, contact copy, all UI strings.

To edit the bio or teaching cards, update both message files.

## CV management

- Admin uploads a PDF at `/admin/cv`; it is stored as `documents/cv.pdf` (private bucket, overwrites previous).
- Public "Download CV" buttons hit `/api/cv`, which mints a short-lived signed URL via the service-role key.

## Deploy (Vercel)

1. Push to a Git repo and import into Vercel.
2. Add the four environment variables in the Vercel project settings.
3. Deploy. The public pages use ISR (`revalidate = 3600`) and are refreshed on demand after each admin save.

## Notes

- The admin panel is always dark, independent of the public theme toggle.
- Author names containing "Mubah" are bolded in publication cards.
- Profile photo is loaded from `scholar.unair.ac.id`; swap to a Supabase `avatars` upload by changing `PROFILE.photoUrl` in `lib/constants.ts`.
