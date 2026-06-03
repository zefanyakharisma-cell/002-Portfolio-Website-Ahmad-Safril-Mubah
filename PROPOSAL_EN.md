# Project Proposal

## Academic Portfolio Website
### Building a Digital Presence That Matches Your Academic Standing

**Prepared for:** Ahmad Safril Mubah, S.IP., M.Hub.Int., Ph.D.
Lecturer · Vice Dean of FISIP · Department of International Relations — Universitas Airlangga

**Date:** 3 June 2026
**Valid for:** 30 days from the proposal date

---

## 1. Hero Section

> # One Link for Your Entire Academic & Leadership Legacy
>
> ### A bilingual (EN/ID) portfolio website that unifies your research, publications, institutional roles, and media coverage into a single digital identity — professional, fast, and easy to update yourself.

---

## 2. Personalized Greeting

Dear **Dr. Safril Mubah**,

As a scholar active in international relations research — while also serving as Vice Dean of FISIP and a lecturer in the Department of International Relations — your contributions are spread across many places: Google Scholar, international journals, media channels, and faculty pages. Yet there is no single meeting point that captures it all coherently, especially for international collaborators, journalists, and graduate students who want to understand your work.

We prepared this proposal to give your body of work **one digital home** — an academic portfolio in both English and Indonesian that reflects your global capacity, while remaining something you can manage yourself without technical dependence. Allow us to share what we found and what we propose.

---

## 3. Audit Findings — Problems We Identified

Based on a review of academic digital presence in general and your profile in particular, here are the problems each website feature directly addresses:

| # | Identified Problem | Impact | Solved By |
|---|--------------------|--------|-----------|
| 1 | **Footprint scattered across platforms** (Scholar, journals, media, faculty pages) — no single official link. | Collaborators & journalists struggle to verify your profile; partnership opportunities are lost. | Centralized portfolio with one canonical URL (e.g. `safrilmubah.com`). |
| 2 | **No equivalent English version** for international audiences. | As a scholar engaged in cross-border collaboration, international credibility is under-supported. | Full **bilingual EN/ID** site with `/en` and `/id` routing. |
| 3 | **Publication list is hard to browse** and quickly goes stale. | Recent research stays invisible; visitors can't filter by year/theme. | Filterable **Publications** module + CMS for self-updates. |
| 4 | **Institutional & leadership roles aren't documented** in one narrative. | Your capacity as Vice Dean & department leader is underrepresented. | Structured **Institutional Roles** and **About** sections. |
| 5 | **Media coverage & public commentary are scattered.** | Your authority as an expert source on global affairs is hard to trace. | A curated **Media & Commentary** module. |
| 6 | **Dependence on technical staff for every change.** | Updates are slow, costly, and obstructive. | Secure **Admin Panel (CMS)** to manage content yourself. |
| 7 | **No trusted professional contact channel.** | Emails get mixed up; collaboration opportunities slip away. | **Contact form** with automatic email notifications. |
| 8 | **Profile is hard to find & looks poor** when shared on search engines / social media. | Low visibility and click-through. | **SEO + Open Graph + Schema.org `Person`** per language. |
| 9 | **Performance & accessibility** of academic pages are often slow on mobile. | Poor experience, lower ranking. | **Next.js 15** — fast, responsive, light/dark mode. |

---

## 4. Proposed Features

**Public Site**
- **Hero & About** — a professional introduction with a summary of expertise and profile photo.
- **Research Themes** — your core international relations research themes, neatly organized.
- **Publications (filterable)** — a publication list filterable by year/theme, with links.
- **Projects (tabbed)** — research & engagement projects in a tabbed view.
- **Institutional Roles** — leadership and structural positions.
- **Media & Commentary** — curated media coverage and public opinion pieces.
- **Teaching** — courses and teaching activities.
- **CV Download** — a single, always-current CV PDF managed from the admin panel.
- **Contact Form** — contact form with email notifications (Resend).

**Experience & Technology**
- **Bilingual EN/ID** — `/en` & `/id` routing via next-intl, paired dynamic content.
- **Light/Dark Mode** — auto-saved, respects system preference, no flash on load.
- **Complete SEO** — Open Graph metadata per language & JSON-LD `Person`.
- **Responsive & Fast** — built with Next.js 15, TypeScript, Tailwind CSS.

**Admin Panel (CMS)**
- Secure email/password login (Supabase Auth).
- Dashboard + **full CRUD** for Publications, Research Themes, Media, and CV.
- Manage bilingual content yourself — no code required.

**Infrastructure**
- **Supabase** (Postgres + Auth + Storage) for the database & files, with Row-Level Security.
- **Deployed on Vercel** — global CDN, automatic HTTPS, high uptime, on-demand ISR.
- **Graceful fallback** — the site still renders even if the database connection is disrupted.

---

## 5. Packages & Pricing

All prices in Indonesian Rupiah (IDR), a one-time project fee unless stated otherwise. Excludes third-party domain & annual hosting subscriptions (estimated separately, ±IDR 500k–1.5M/year).

| | **Starter** | **Professional** ⭐ | **Premium** | **Institutional** |
|---|---|---|---|---|
| **Price** | **IDR 6,500,000** | **IDR 12,500,000** | **IDR 19,500,000** | **IDR 32,000,000** |
| **Best for** | A quick, concise online profile | A complete academic portfolio (recommended) | Portfolio + full self-management | Institutional scale & advanced integration |
| Portfolio pages (Hero, About, Research) | ✓ | ✓ | ✓ | ✓ |
| Bilingual EN/ID | — | ✓ | ✓ | ✓ |
| Publications module (filterable) | Static | ✓ | ✓ | ✓ |
| Projects, Roles, Media, Teaching | 1 section | ✓ All | ✓ All | ✓ All |
| Contact form + email notification | ✓ | ✓ | ✓ | ✓ |
| Light/dark mode | ✓ | ✓ | ✓ | ✓ |
| SEO + Open Graph + Schema | Basic | ✓ Full | ✓ Full | ✓ Full + audit |
| Admin Panel (CMS) self-update | — | ✓ | ✓ | ✓ |
| Initial publication data migration | — | Up to 15 entries | Up to 40 entries | Unlimited |
| Domain setup + Vercel deploy | ✓ | ✓ | ✓ | ✓ |
| Performance & accessibility optimization | Basic | Standard | Advanced | Full audit |
| Usage training (sessions) | — | 1 session | 2 sessions | 3 sessions + documentation |
| Post-launch support | 14 days | 30 days | 60 days | 90 days |
| Design revisions | 1x | 2x | 3x | Unlimited (reasonable) |

> **Our recommendation:** The **Professional** package offers the best balance of bilingual feature completeness and investment value for your current academic needs. If you want to update publications & media yourself without technical help, **Premium** is the most fitting choice.

---

## 6. Project Timeline

Estimated total **4–6 weeks** from agreement & down-payment settlement (for Professional package and above).

| Phase | Activities | Duration |
|-------|-----------|----------|
| **1. Discovery & Content** | Kickoff, material gathering (CV, publications, photo, bilingual text), finalize structure. | Week 1 |
| **2. Design & Approval** | Layout mockups, color palette, typography — revisions — approval. | Week 2 |
| **3. Development** | Build the public site, modules, CMS, bilingual support, Supabase integration. | Weeks 3–4 |
| **4. Content & QA** | Data entry/migration, cross-device & cross-language testing, SEO, accessibility. | Week 5 |
| **5. Launch & Training** | Deploy to Vercel, connect domain, CMS training session, handover. | Week 6 |

*The schedule can be accelerated for the Starter package (±2–3 weeks).*

---

## 7. Call to Action

> ## Ready to Make Your Academic Profile Discoverable Worldwide?
>
> Let's start with a brief 30-minute discussion to align on your needs and choose the package that fits best. No commitment — just a conversation about how your work deserves to be presented.

### 📅 **[ Schedule a Free Consultation ]**

Or reply to this proposal with your chosen package, and we'll send the work contract and down-payment details within 1×24 hours.

---

*Thank you for your time and trust. We're excited to help bring you a digital presence that matches your academic and leadership reputation.*
