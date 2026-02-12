# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

German-language website for an aesthetic medicine clinic (EL Aesthetics Bremen). Built as a statically exported Next.js site deployed to GitHub Pages.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static export build (outputs to `out/`)
- `npm run preview` — serve the exported `out/` directory locally
- `npm run gh:export` — production build for GitHub Pages (sets NODE_ENV=production, creates .nojekyll)
- `npm run lint` — ESLint

## Architecture

**Stack**: Next.js 15 (App Router, static export), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (new-york style)

**Deployment**: Static export to GitHub Pages. In production (`NODE_ENV=production`), `basePath` is set to `/elaesthetics-bremen-github` and images are unoptimized. This affects all asset paths.

**Routing**: Uses App Router with a `(treatments)` route group so treatment pages appear at root-level URLs (e.g., `/botulinumtoxin/faltenbehandlung` not `/treatments/botulinumtoxin/...`). Each treatment category has its own directory under `app/(treatments)/`.

**Reusable Treatment Page Components**: `components/TreatmentPageComponents.tsx` exports modular sections (HeroSection, IntroSection, TreatmentsSection, QuickInfoSection, ProcessSection, FAQSection, ConsultationSection, CTASection) used across all treatment pages for consistent layout.

**Data Layer**:
- `data/treatments.ts` — Treatment definitions (image, title, description, URL) exported individually and as grouped arrays
- `lib/constants.ts` — Centralized pricing (all prices in one `PRICES` object), domain config, API keys, phone/email

**Styling**: Tailwind v4 with CSS-first config in `app/globals.css` using `@theme` directive. Custom colors: accent (`#ebcd8c` gold), accent-dark (`#836c28`), detail (`#920000` burgundy). Custom animations: `ken-burns`, `fade-up`, `shimmer`. Uses `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge).

**External Integrations**:
- Google Places API v1 for reviews (`lib/googleReviews.ts`), requires `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in `.env.local`
- Embedded Google Maps component

**UI Components**: shadcn/ui primitives in `components/ui/` (button, card, carousel, avatar). Carousel uses Embla. Icons from Lucide React.

## Key Patterns

- Treatment pages follow a consistent structure: hero → intro → treatments grid → quick info → process steps → FAQ → CTA. Use `TreatmentPageComponents.tsx` exports.
- All prices must be updated in `lib/constants.ts`, not hardcoded in pages.
- The `basePath` handling in `next.config.ts` means image paths in components may need to account for the prefix in production.
- Content is entirely in German. Medical terminology should be accurate.
- SEO metadata with Open Graph, Twitter cards, and `MedicalWebPage` schema markup is used on treatment pages.
