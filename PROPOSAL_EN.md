# Ahmad Safril Mubah — Academic Portfolio Website Proposal

**Prepared by:** CroissantsMoon · Zefanya Kharisma
**Date:** 3 June 2026
**Valid for:** 30 days from the proposal date

---

## Hero Section

**Headline:** One Link for Your Entire Academic & Leadership Legacy

**Subheadline:** A bilingual (EN/ID) academic portfolio website for Dr. Ahmad Safril Mubah — one professional, self-managed digital home that unifies your research, publications, institutional roles, and media coverage into a single identity built for international credibility.

---

## A Personalized Greeting

Dear **Dr. Ahmad Safril Mubah**,

As a lecturer and Vice Dean of FISIP at Universitas Airlangga — active in international relations research, cross-border collaboration, and institutional leadership — your contributions are substantial and wide-ranging. Yet today, that body of work is spread across Google Scholar, international journals, media channels, and faculty pages, with no single meeting point that captures it all coherently.

What we noticed is that your *digital* presence hasn't yet caught up with the depth of your academic and leadership standing. A journalist looking for an expert comment, a foreign university scoping a collaboration partner, or a graduate student exploring supervisors — all of them face the same friction: there is no one authoritative place to find you, understand your work, and reach out. This proposal lays out a website designed to fix exactly that: a fast, bilingual academic portfolio that brings your research agenda, publications, institutional roles, and media presence into a single digital home you can manage yourself.

Warm regards,
**CroissantsMoon · Zefanya Kharisma**

---

## Audit Findings

What we found about your current digital presence — and the feature in this project that answers each.

| What we found | Why it matters | How this project answers it |
|---|---|---|
| Academic footprint is scattered across Google Scholar, journals, media, and faculty pages — no single official link | Collaborators and journalists struggle to verify your profile; partnership opportunities are lost before they start | A centralized portfolio at one canonical URL (e.g. `safrilmubah.com`) |
| No English-language equivalent of your profile for international audiences | As a scholar engaged in cross-border collaboration, your international credibility is under-supported | Full **bilingual EN/ID** site with `/en` and `/id` routing via next-intl |
| Publication list is hard to browse and quickly goes stale | Recent research stays invisible; visitors can't filter by year or theme | A filterable **Publications** module + CMS for self-updates |
| Institutional and leadership roles aren't documented in one narrative | Your capacity as Vice Dean and department leader is underrepresented to external audiences | Structured **Institutional Roles** and **About** sections |
| Media coverage and public commentary are scattered across outlets | Your authority as an expert source on global affairs is hard to trace or share | A curated **Media & Commentary** module filterable by coverage type |
| Content updates depend on technical staff | Updates are slow, costly, and obstructive | A secure **Admin Panel (CMS)** to manage all content yourself — no code required |
| No trusted professional contact channel | Emails get mixed up; collaboration opportunities slip away | A structured **Contact Form** with automatic email notifications |
| Profile is hard to find and looks generic when shared on search or social media | Low visibility and poor click-through from shared links | Full **SEO + Open Graph + Schema.org `Person`** per language |
| Academic pages are often slow and poor on mobile | Visitors leave before reading; ranking suffers | Built on **Next.js 15** — fast, responsive, with light/dark mode |

---

## Redesign Concept

**Direction.** A clean, authoritative academic portfolio that reads like a scholar-leader's curated professional record — not a generic faculty page. Clear typographic hierarchy, purposeful whitespace, and restrained motion (scroll reveals, smooth section transitions) guide visitors down a deliberate story: *who Dr. Safril is → what he researches → where he leads → what he's published → how to reach him.*

**Tone.** Precise, credible, and quietly commanding — the voice of someone equally at home in a journal article and a press interview. Copy works in both Indonesian and English without one feeling like a translation of the other.

**Key ideas.**
- **Research and leadership in one frame.** The portfolio doesn't separate the scholar from the institutional leader — both identities are present, coherent, and mutually reinforcing.
- **Clean-modern, light-first.** A professional palette with measured depth — light backgrounds, strong typographic contrast, and a one-tap dark mode for evening reading — signals credibility without ornamentation.
- **Typography with authority.** A serif/sans pairing signals academic rigour while remaining legible and fast on any screen.
- **Every path leads to a conversation.** Whether a collaborator needs to make contact, a journalist wants an expert quote, or a prospective student is scoping supervisors — the layout always surfaces one clear next step.

---

## Proposed Features

Features built into this website to answer the problems above.

- **Hero & About** — a professional introduction with a summary of expertise, key positions, and profile photo.
- **Research Themes** — core international relations research themes, organized and linked to related publications.
- **Publications module (filterable)** — a publication list filterable by year and theme, each entry with a detail page, abstract, and external link.
- **Projects (tabbed)** — research and engagement projects presented in a clean tabbed view.
- **Institutional Roles** — leadership and structural positions documented in one place.
- **Media & Commentary** — curated media coverage and public opinion pieces, filterable by type.
- **Teaching** — courses and teaching activities across affiliated institutions.
- **CV Download** — a single, always-current CV PDF managed directly from the admin panel.
- **Contact Form** — a professional contact channel with automatic email notifications (Resend-ready).
- **Bilingual EN/ID routing** — `/en` and `/id` paths via next-intl, with paired dynamic content and an instant in-page language toggle, preference saved across visits.
- **Light/dark mode** — auto-saved, respects system preference, no flash on load.
- **Complete SEO suite** — per-page titles/descriptions, canonical URLs, Open Graph metadata per language, and JSON-LD `Person` schema.
- **Social share optimization** — branded Open Graph image for clean link previews on WhatsApp, LinkedIn, and email.
- **Self-service CMS (admin panel)** — secure email/password login (Supabase Auth); full CRUD dashboard for Publications, Research Themes, Media, Projects, and CV; bilingual content management with no code required.
- **Mobile-first, accessible, fast** — built on Next.js 15, TypeScript, and Tailwind CSS; deployed on Vercel with global CDN, automatic HTTPS, on-demand ISR, and graceful database fallback.

---

## Infrastructure Options

Three ways to host and run the site. All three serve the same fast, bilingual front-end; they differ mainly in whether the self-service CMS is active and what running costs you take on.

| Option | What you get | Hosting | CMS / database | Best for | Indicative annual cost |
|---|---|---|---|---|---|
| **A. Static (lite)** | The full portfolio with content updated by us on request | Vercel free tier | None — content is hard-coded | Lowest cost, simplest setup, infrequent updates | Free–minimal |
| **B. Static + CMS (recommended)** | Everything in A **plus** the self-service admin panel so you update publications, roles, and media yourself | Vercel front-end | Supabase (Postgres + Auth + Storage) free or Pro tier | Academics who want to keep their publication list and coverage current without technical help | Free tier to start; ~Supabase Pro if you outgrow it |
| **C. Custom domain + managed** | Everything in B with a branded domain (e.g. `safrilmubah.com`), email forwarding, analytics, and ongoing managed updates | Vercel Pro + domain | Supabase Pro | A polished, fully owned, hands-off setup | Domain (~Rp 200–300k/yr) + Supabase Pro + optional retainer |

> Recommendation: **Option B** to launch — it keeps running costs near zero while giving you full control over your content. Move to **Option C** once collaboration enquiries, media requests, and publication volume justify the managed extras.

---

## Timeline

A focused four-to-six week build from kickoff to launch (for the Professional package and above).

- **Week 1 — Discovery & Content.** Kickoff, material gathering (CV, publications list, headshot, bilingual text), and finalizing site structure.
- **Week 2 — Design & Approval.** Layout mockups, color palette, typography — revisions — design sign-off.
- **Weeks 3–4 — Development.** Public site build, all modules, CMS, bilingual support, and Supabase integration.
- **Week 5 — Content & QA.** Data entry and publication migration, cross-device and cross-language testing, SEO, and accessibility checks.
- **Week 6 — Launch & Training.** Vercel deployment, domain connection, CMS training session, and project handover.

---

## Pricing

| Phase | Aspect | Brief explanation |
|---|---|---|
| Week 1 | Discovery & Content | Kickoff workshop, material and asset collection, CV and publications review, and finalized site structure. |
| Week 2 | Design & Approval | Color system, typography, layout mockups per language, and approved design sign-off. |
| Weeks 3–4 | Development | Next.js 15 build — public pages, all feature modules (Publications, Projects, Roles, Media, Teaching, CV), bilingual routing, and Supabase CMS integration. |
| Week 5 | Content & QA | Publication data migration, bilingual copy load-in, cross-device and accessibility testing, and full SEO implementation. |
| Week 6 | Launch & Training | Vercel deployment, custom domain setup, CMS training session, and project handover documentation. |

> A detailed quotation per package is provided below and can be tailored to the scope you choose. A 50% deposit starts the project; the balance is due at launch.

### Package Price Tiers

Four tiers to match your scope and budget. Each tier includes everything in the tier before it, then adds more.

---

#### Tier 1 — Starter · **IDR 6,500,000**
*A quick, concise online profile to establish a real academic presence.*

- ✅ Core portfolio pages: Hero, About, Research Themes
- ✅ Contact form + email notification
- ✅ Light/dark mode
- ✅ Basic SEO (title, description, sitemap, robots.txt)
- ✅ Domain setup + Vercel deployment
- ✅ 14 days post-launch support · 1 design revision
- ⚙️ Publications module is static (content updated by us on request)
- ⚙️ Bilingual not included · No admin panel

---

#### Tier 2 — Professional ⭐ · **IDR 12,500,000**
*A complete academic portfolio — the recommended choice.*

*Everything in Starter, plus:*
- ✅ Full bilingual EN/ID routing (next-intl)
- ✅ Full Publications module (filterable by year/theme, individual detail pages)
- ✅ Projects, Institutional Roles, Media & Commentary, and Teaching sections
- ✅ Full SEO: per-page meta, canonical URLs, JSON-LD `Person` schema, Open Graph per language
- ✅ Self-service CMS admin panel (Supabase-powered)
- ✅ Up to 15 publications migrated at launch
- ✅ 1 CMS training session
- ✅ 30 days post-launch support · 2 design revisions

---

#### Tier 3 — Premium *(most capable)* · **IDR 19,500,000**
*Everything above, plus the power to manage it all yourself — indefinitely.*

*Everything in Professional, plus:*
- ✅ CV Download (admin-managed PDF)
- ✅ Up to 40 publications migrated at launch
- ✅ Advanced performance and accessibility optimization
- ✅ Analytics integration (visitor & content insights)
- ✅ 2 CMS training sessions + written handover documentation
- ✅ 60 days post-launch support · 3 design revisions

---

#### Tier 4 — Institutional · **IDR 32,000,000**
*A fully hands-off, institutionally scaled solution.*

*Everything in Premium, plus:*
- ✅ Unlimited publication migration
- ✅ Full SEO audit + structured data for institutional affiliation and leadership roles
- ✅ Advanced integrations (e.g. SINTA, Scopus, or Google Scholar sync)
- ✅ 3 CMS training sessions + full documentation
- ✅ 90 days post-launch support · Unlimited reasonable design revisions
- ✅ Performance & uptime monitoring

---

#### Tier Comparison at a Glance

| Feature | Starter | Professional | Premium | Institutional |
|---|:---:|:---:|:---:|:---:|
| Core portfolio pages (Hero, About, Research) | ✅ | ✅ | ✅ | ✅ |
| Contact form + email notification | ✅ | ✅ | ✅ | ✅ |
| Light/dark mode | ✅ | ✅ | ✅ | ✅ |
| Basic SEO + Vercel deploy | ✅ | ✅ | ✅ | ✅ |
| Bilingual EN/ID routing | — | ✅ | ✅ | ✅ |
| Publications module (filterable) | Static | ✅ | ✅ | ✅ |
| Projects, Roles, Media, Teaching | — | ✅ All | ✅ All | ✅ All |
| Full SEO + Open Graph + Schema.org `Person` | — | ✅ Full | ✅ Full | ✅ Full + audit |
| Self-service CMS admin panel | — | ✅ | ✅ | ✅ |
| CV Download (admin-managed) | — | — | ✅ | ✅ |
| Publication migration at launch | — | Up to 15 | Up to 40 | Unlimited |
| Analytics integration | — | — | ✅ | ✅ |
| Advanced performance & accessibility | — | Standard | Advanced | Full audit |
| Institutional integrations (SINTA, Scopus) | — | — | — | ✅ |
| Uptime monitoring | — | — | — | ✅ |
| Training sessions | — | 1 session | 2 sessions | 3 sessions + docs |
| Post-launch support | 14 days | 30 days | 60 days | 90 days |
| Design revisions | 1x | 2x | 3x | Unlimited |
| **Price (IDR)** | **6,500,000** | **12,500,000** | **19,500,000** | **32,000,000** |

> Prices are one-time project fees and exclude third-party domain and annual hosting subscriptions (estimated ±IDR 500k–1.5M/year). The **Professional** package offers the best balance of feature completeness and investment value for your current academic profile. If you want to update publications and media yourself without any technical help, **Premium** is the most fitting choice.

---

## Call to Action

### Ready to make your academic profile discoverable worldwide?

Let's start with a brief 30-minute discussion to align on your needs and choose the package that fits best — no commitment, just a conversation about how your work deserves to be presented.

**[ Schedule a Free Consultation → ]**

Or reply to this proposal with your chosen package, and we'll send the work contract and down-payment details within 1×24 hours.
