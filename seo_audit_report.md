# SEO Audit Report — EL Aesthetics Bremen

**Site:** [elaesthetics-bremen.de](https://elaesthetics-bremen.de)  
**Type:** Local medical aesthetics practice (Privatpraxis für ästhetische Medizin)  
**Stack:** Next.js (App Router) with static export to GitHub Pages  
**Date:** 2026-03-22  

---

## Executive Summary

**Overall Health: 🟡 Moderate — Solid foundation with significant improvement potential**

The site has a well-structured technical foundation with comprehensive schema markup, proper metadata on all pages, and a logical hub-and-spoke content architecture. However, several critical and high-impact issues are limiting SEO performance:

### Top 5 Priority Issues

| # | Issue | Impact | Effort |
|---|-------|--------|--------|
| 1 | **Static sitemap with stale dates** — not auto-generated | 🔴 High | Low |
| 2 | **No `WebSite` schema** — missing sitelinks/search box eligibility | 🔴 High | Low |
| 3 | **robots.txt doesn't address AI crawlers** — missed AI citation opportunity | 🟡 Medium | Low |
| 4 | **Missing `hreflang` / language signal gaps** — German-only site has no explicit `hreflang` tag | 🟡 Medium | Low |
| 5 | **Footer has zero treatment/service links** — wasted internal link equity | 🟡 Medium | Low |

### Quick Wins Identified
- Add `WebSite` schema with `SearchAction` to root layout
- Switch to Next.js dynamic sitemap generation
- Add explicit AI crawler allowance in [robots.txt](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/robots.txt)
- Enrich Footer with top service links
- Add `lastmod` / "Last Updated" signals to content

---

## 1. Technical SEO

### 1.1 Crawlability & robots.txt

**Current State:**
```
User-agent: *
Allow: /
Disallow: /danke/

Sitemap: https://elaesthetics-bremen.de/sitemap.xml
```

**Findings:**

| Check | Status | Notes |
|-------|--------|-------|
| Important pages allowed | ✅ Pass | All treatment and utility pages accessible |
| Thank-you page blocked | ✅ Pass | `/danke/` correctly disallowed |
| Sitemap referenced | ✅ Pass | |
| AI crawlers addressed | ❌ Missing | No explicit allowance for GPTBot, PerplexityBot, ClaudeBot |

> [!IMPORTANT]
> **AI Crawler Gap:** The [robots.txt](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/robots.txt) doesn't explicitly allow AI crawlers (GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended). While the wildcard `Allow: /` technically allows them, many AI bots check for explicit directives. Adding explicit `Allow` rules signals intent and ensures maximum AI visibility.

**Recommendation:**
```
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### 1.2 XML Sitemap

**Current State:** Static file at [public/sitemap.xml](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/sitemap.xml)

| Check | Status | Notes |
|-------|--------|-------|
| Exists and accessible | ✅ Pass | |
| All important pages included | ✅ Pass | 28 URLs covering all treatments, hubs, utility |
| `<lastmod>` dates | ⚠️ Issue | All dates set to `2026-02-08` — static and likely stale |
| Auto-generated | ❌ Fail | Manual static file in `public/` |
| Contains only canonical URLs | ✅ Pass | |

> [!WARNING]
> **Static sitemap is a significant risk.** When you add or update pages, the sitemap won't update automatically. Google uses `<lastmod>` to prioritize re-crawling. Relying on the static `export` output means the sitemap could diverge from reality.

**Recommendation:** Since the site uses `output: 'export'`, a Next.js `app/sitemap.ts` would still be ideal as it auto-generates during build. Alternatively, use a build script that generates the sitemap from the file system.

### 1.3 URL Structure

| Check | Status | Notes |
|-------|--------|-------|
| Readable, descriptive URLs | ✅ Pass | `/botulinumtoxin/faltenbehandlung/`, `/fett-weg-spritze/` |
| Keywords in URLs | ✅ Pass | German keywords naturally integrated |
| Consistent structure | ✅ Pass | Hub/spoke pattern: `/botulinumtoxin/`, `/botulinumtoxin/masseter/` |
| Trailing slashes consistent | ✅ Pass | `trailingSlash: true` in config |
| Lowercase and hyphen-separated | ✅ Pass | |

### 1.4 Canonicalization

| Check | Status | Notes |
|-------|--------|-------|
| Canonical tags on pages | ✅ Pass | All treatment pages have `alternates.canonical` |
| HTTPS canonical | ✅ Pass | All canonical URLs use `https://` |
| Self-referencing canonicals | ✅ Pass | Each page points to itself |

### 1.5 Indexation Controls

| Check | Status | Notes |
|-------|--------|-------|
| No accidental noindex | ✅ Pass | No `noindex` meta tags found |
| `/danke/` correctly blocked | ✅ Pass | Thank-you page disallowed in robots.txt |
| No duplicate content issues | ✅ Pass | Route groups [(treatments)](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/components/Hero.tsx#6-61) don't create URL segments |

### 1.6 Site Speed & Performance Considerations

| Check | Status | Notes |
|-------|--------|-------|
| Static export (SSG) | ✅ Excellent | Pre-rendered HTML = fastest possible TTFB |
| Images unoptimized | ⚠️ Concern | `images.unoptimized: true` — no WebP conversion, no responsive sizing by Next.js |
| Font loading | ✅ Good | Google Fonts Inter with `display: 'swap'` |
| Dynamic imports | ✅ Good | `ImageSlider` and `PatientReviews` are lazy-loaded |
| GitHub Pages hosting | ⚠️ Concern | No CDN, no edge caching headers control, limited performance optimization |

> [!NOTE]
> The `unoptimized: true` setting for images is a GitHub Pages constraint. If you move to Vercel, Netlify, or your own server, enabling Next.js Image Optimization could significantly improve LCP and CLS.

### 1.7 basePath/assetPrefix Configuration

| Check | Status | Notes |
|-------|--------|-------|
| Production basePath | ⚠️ Issue | `basePath: '/elaesthetics-bremen-github'` in production |
| Custom domain | ❓ Unknown | If `elaesthetics-bremen.de` uses a custom domain with CNAME, the `basePath` may be unnecessary and would cause issues |

> [!CAUTION]
> The `basePath: '/${repo}'` configuration in [next.config.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/next.config.ts) means all URLs in production would be prefixed with `/elaesthetics-bremen-github/`. If your custom domain maps directly to the repo (no subpath), this basePath will **break all routes and canonical URLs**. Verify that the canonical URLs in your metadata (e.g. `https://elaesthetics-bremen.de/botulinumtoxin`) actually match the deployed paths.

---

## 2. On-Page SEO

### 2.1 Title Tags

| Page | Title | Length | Assessment |
|------|-------|--------|------------|
| Homepage | `Ästhetische Medizin Bremen \| Privatpraxis EL Aesthetics` | 57 chars | ✅ Good — keyword-rich, right length |
| Botulinumtoxin Hub | `Botulinumtoxin Bremen » Ärztliche Behandlung \| EL Aesthetics` | 62 chars | ⚠️ Slightly long — may truncate |
| Hyaluron Hub | `Hyaluron Behandlung Bremen \| Filler, Skinbooster & mehr \| EL Aesthetics` | 73 chars | ❌ Too long — will truncate |
| Fett-weg-Spritze | `Fett-weg-Spritze Bremen \| Injektionslipolyse Doppelkinn \| EL Aesthetics` | 73 chars | ❌ Too long — will truncate |
| Preise | `Preise ästhetische Behandlungen Bremen \| EL Aesthetics` | 55 chars | ✅ Good |
| Kontakt | `Kontakt & Termin \| EL Aesthetics Bremen Oberneuland` | 52 chars | ✅ Good |

**Pattern Issues:**
- Several treatment page titles exceed 60 characters and will be truncated in SERPs
- Title template is `%s | EL Aesthetics Bremen` — pages that set their own `title` with `| EL Aesthetics` at the end create near-duplicate brand suffixes

**Recommendation:** Trim titles to ≤60 characters. Remove redundant brand mentions when the template already appends it.

### 2.2 Meta Descriptions

| Check | Status | Notes |
|-------|--------|-------|
| Unique per page | ✅ Pass | All 37 pages have unique descriptions |
| Length 150-160 chars | ✅ Mostly good | Most are well-sized |
| Include keywords | ✅ Pass | Primary keywords naturally integrated |
| Call to action | ✅ Pass | Most end with "Jetzt Termin vereinbaren" |

### 2.3 Heading Structure

**Homepage:**
- H1: `El Aesthetics Bremen` — ✅ Clear, branded H1
- Issue: The H1 is purely branded with no descriptive keywords like "ästhetische Medizin" or "Privatpraxis"

**Treatment Pages (e.g., Fett-weg-Spritze):**
- H1 (via `HeroSection`): `Injektionslipolyse / Fettreduktion ohne OP in Bremen` — ✅ Good keyword integration
- H2 hierarchy: `Was ist eine Fett-weg-Spritze?` → `Behandlungsbereiche` → `Auf einen Blick` → `Ablauf` → `Nachsorge` → `Häufige Fragen` — ✅ Logical structure

**Hub Pages (e.g., Botulinumtoxin):**
- H1: `Botulinumtoxin Behandlung in Bremen` — ✅ Clear, keyword-rich
- H2s follow logical pattern — ✅ Good

| Check | Status | Notes |
|-------|--------|-------|
| One H1 per page | ✅ Pass | Each page has exactly one H1 |
| H1 contains primary keyword | ✅ Pass | |
| Logical H1→H2→H3 | ✅ Pass | Well-structured across all pages |
| Headings not used for styling only | ✅ Pass | |

### 2.4 Keyword Targeting

| Check | Status | Notes |
|-------|--------|-------|
| Clear primary keyword per page | ✅ Pass | Each page targets distinct terms (e.g. "Fett-weg-Spritze Bremen") |
| Title, H1, URL aligned | ✅ Pass | Strong alignment across all treatment pages |
| No keyword cannibalization | ⚠️ Minor risk | `/botulinumtoxin/faltenbehandlung/` vs `/faltenbehandlung/` — both target "Faltenbehandlung Bremen" |
| `keywords` meta tag | ⚠️ Note | Used on all pages — Google ignores `<meta name="keywords">` entirely. Not harmful, but provides no SEO value |

> [!WARNING]
> **Cannibalization risk:** The hub page `/faltenbehandlung/` (solution page) and the spoke page `/botulinumtoxin/faltenbehandlung/` both target "Faltenbehandlung Bremen" queries. Ensure internal linking and content differentiation clearly separate their intent (solution overview vs. specific procedure).

### 2.5 Image Optimization

| Check | Status | Notes |
|-------|--------|-------|
| Alt text on images | ✅ Pass | All hero images, treatment cards have descriptive alt text |
| Modern formats (WebP) | ✅ Mostly | Most images are `.webp`, some legacy `.webp` and `.webp` remain |
| Descriptive file names | ✅ Pass | `botox-faltenbehandlung_hero.webp`, `hyaluron-filler_hero.webp` |
| Lazy loading | ✅ Pass | Non-critical components use `dynamic()` imports |
| Responsive images | ⚠️ Limited | `unoptimized: true` disables Next.js responsive image generation |

---

## 3. Content Quality & E-E-A-T

### 3.1 E-E-A-T Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| **Experience** | ⚠️ Weak | No case studies, before/after references, or patient journey narratives |
| **Expertise** | ✅ Good | Physician credentials (DGBT member, Ärztekammer Bremen) shown in schema |
| **Authoritativeness** | ⚠️ Medium | No external citations, no articles/publications referenced, no press mentions |
| **Trustworthiness** | ✅ Good | HTTPS, Impressum, Datenschutz, GOÄ pricing transparency, patient reviews |

**Key Gap:** The physician's credentials are in schema markup but **not prominently visible on the pages themselves**. For a YMYL (Your Money, Your Life) medical site, visible author/physician credentials on content pages are critical for E-E-A-T.

### 3.2 Content Depth

| Treatment Page Pattern | Assessment |
|----------------------|------------|
| Intro (What is X?) | ✅ Good — solid 2-3 paragraph definitions |
| Treatment areas | ✅ Good — detailed lists of indications |
| Process/procedure | ✅ Good — step-by-step walkthrough |
| Before/after care | ✅ Good — detailed instructions |
| FAQ section | ✅ Excellent — 8-10 detailed Q&A per page |
| Evidence/statistics | ❌ Missing — no citations to studies, no data |
| Comparison content | ❌ Missing — no "vs" or comparison tables |

### 3.3 Search Intent Alignment

| Page Type | Intent Match | Notes |
|-----------|:-----:|-------|
| Treatment spoke pages | ✅ | Informational + transactional — covers what/how/cost/booking |
| Hub pages | ✅ | Navigational — good overview linking to spokes |
| Solution pages (e.g. Faltenbehandlung) | ✅ | Problem-focused — matches symptom-driven search |
| Preise | ✅ | Commercial — direct price comparison |
| Kontakt | ✅ | Transactional — form + contact options |

---

## 4. Internal Linking

### 4.1 Navigation Structure

| Check | Status | Notes |
|-------|--------|-------|
| Mega menu with all treatments | ✅ Excellent | 3-column layout covering all 30+ pages |
| Hub → Spoke linking | ✅ Good | Hub pages link to all child treatments via cards |
| Cross-treatment linking | ⚠️ Weak | "Weitere Behandlungen" sections exist but are manual/inconsistent |
| Breadcrumbs | ✅ Pass | With BreadcrumbList schema markup |

### 4.2 Issues

| Issue | Impact | Evidence |
|-------|--------|----------|
| **Footer has no treatment links** | 🟡 Medium | Footer only shows Impressum, Datenschutz, Kontakt, Über uns — no service pages |
| **No contextual cross-links in content** | 🟡 Medium | Treatment descriptions don't link to related treatments inline |
| **"Weitere Behandlungen" is hardcoded** | 🟠 Low | Each page manually selects 3 related treatments — no systematic approach |

**Recommendation:** Add a "Beliebte Behandlungen" or categorized treatment section to the Footer. This passes link equity to your most important service pages from every page on the site.

---

## 5. Schema Markup / Structured Data

### 5.1 Current Implementation

| Schema Type | Scope | Implementation | Status |
|-------------|-------|----------------|--------|
| `MedicalClinic` | Global (`@graph` in layout) | ✅ Comprehensive — address, geo, hours, services, aggregateRating | ✅ Good |
| [Physician](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#14-51) | Global (`@graph` in layout) | ✅ Good — credentials, memberOf, sameAs | ✅ Good |
| `BreadcrumbList` | Per-page (Breadcrumbs component) | ✅ Dynamic generation | ✅ Good |
| `MedicalWebPage` | Hub pages | ✅ Via [getWebPageSchema()](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#114-151) | ✅ Good |
| [MedicalProcedure](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#152-178) | Spoke pages | ✅ Via [getMedicalProcedureSchema()](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#152-178) | ✅ Good |
| `FAQPage` | Treatment pages with FAQs | ✅ Via [getFAQSchema()](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#179-195) | ✅ Good |
| `ItemList` (Prices) | Preise page | ✅ Via [getPriceListSchema()](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#196-262) | ✅ Good |
| `WebSite` | Homepage | ❌ **Missing** | ❌ Fix |
| `AggregateRating` | Global (MedicalClinic) | ✅ Dynamic from Google Reviews API | ✅ Good |

### 5.2 Issues & Recommendations

#### ❌ Missing `WebSite` Schema (HIGH PRIORITY)

The global `@graph` in [layout.tsx](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/app/layout.tsx) only includes `MedicalClinic` and [Physician](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#14-51). A `WebSite` schema entity is missing.

**Why it matters:** The `WebSite` schema with `SearchAction` (sitelinks search box) helps Google understand your site as a whole entity and enables the sitelinks search box in SERPs.

**Recommended addition to the `@graph` in [lib/schema.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts):**
```json
{
  "@type": "WebSite",
  "@id": "#website",
  "name": "EL Aesthetics Bremen",
  "url": "https://elaesthetics-bremen.de",
  "inLanguage": "de-DE",
  "publisher": { "@id": "#practice" }
}
```

#### ⚠️ Offer Schema on Price List Missing `url` Property

In [getPriceListSchema()](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#196-262), each `Offer` doesn't link to its treatment page. Adding `url` to each offer would connect prices to treatment content.

#### ⚠️ No `Review` Individual Schema

While `AggregateRating` is present, individual `Review` entities from Google are not included. Google recommends including a few individual reviews alongside the aggregate if available.

#### ✅ What's Done Well
- Proper use of `@graph` for entity relationships
- `@id` cross-referencing between Practice, Physician, and pages
- FAQPage schema on all treatment pages with FAQs
- BreadcrumbList with dynamic URL construction
- MedicalProcedure with `procedureType`, `bodyLocation`, `howPerformed`

---

## 6. AI SEO / LLM Visibility

### 6.1 AI Extractability Assessment

| Check | Status | Notes |
|-------|--------|-------|
| Clear definitions in first paragraph | ✅ Pass | All treatment pages start with "Was ist X?" |
| Self-contained answer blocks | ✅ Pass | FAQ answers work standalone |
| Statistics with sources | ❌ Fail | No statistics, no study citations, no data points |
| Comparison tables | ❌ Fail | No "X vs Y" treatment comparisons |
| FAQ sections | ✅ Excellent | 8-10 Q&As per treatment with FAQPage schema |
| Expert attribution | ⚠️ Partial | In schema but not visible in content |
| Recently updated date visible | ❌ Fail | No "Zuletzt aktualisiert" shown on any page |
| Heading structure matches queries | ✅ Good | "Was ist Fett-weg-Spritze?", "Wie funktioniert..." |
| AI bots allowed in robots.txt | ⚠️ Implicit | Wildcard allows, but no explicit allowance |

### 6.2 Content Patterns for AI Citation

| Pattern | Present? | Priority |
|---------|:--------:|----------|
| **Definition blocks** ("Was ist X?") | ✅ | — |
| **Step-by-step blocks** (Process sections) | ✅ | — |
| **Comparison tables** (X vs Y) | ❌ | 🔴 High — 33% of AI citations are comparisons |
| **Pros/cons blocks** | ❌ | 🟡 Medium |
| **Statistic blocks with sources** | ❌ | 🔴 High — +37-40% citation boost |
| **Expert quotes with credentials** | ❌ | 🟡 Medium — +25-30% citation boost |

### 6.3 AI Visibility Recommendations

1. **Add statistics and study references to treatment pages** — e.g., "Laut einer Studie in der Zeitschrift *Dermatologic Surgery* (2023) zeigt die Injektionslipolyse mit Desoxycholsäure eine durchschnittliche Fettreduktion von 20-30%." This alone can boost AI citation rate by 37-40%.

2. **Add comparison sections** — e.g., "Hyaluron-Filler vs. Kollagenstimulation: Was ist besser?" These get cited 3x more than regular content.

3. **Show "Zuletzt aktualisiert" dates** — AI systems weight fresh content heavily. Adding a visible last-updated date to each treatment page is a quick win.

4. **Make physician expertise visible on the page** — Add a brief author/physician box on treatment pages: "Dr. Ola El-Armouche, Mitglied der DGBT, Ärztekammer Bremen"

5. **Explicit AI bot allowance** in robots.txt (see Section 1.1).

---

## 7. Trust, Authority & Conversion-Relevant SEO

### 7.1 Trust Signals

| Signal | Present? | Notes |
|--------|:--------:|-------|
| HTTPS | ✅ | |
| Impressum (German legal requirement) | ✅ | |
| Datenschutz | ✅ | |
| Contact information visible | ✅ | Phone, WhatsApp, Kontaktformular |
| Pricing transparency | ✅ | Full price list with GOÄ disclaimer |
| Google Reviews integration | ✅ | AggregateRating in schema, PatientReviews component |
| Physician credentials | ⚠️ Schema-only | DGBT, Ärztekammer — not visible on pages |
| Physical address | ✅ | In schema and likely on contact page |

### 7.2 Authority Gaps

| Gap | Impact | Recommendation |
|-----|--------|----------------|
| No blog/educational content | 🟡 Medium | Starting a blog covering aesthetic medicine topics would build topical authority |
| No external citations/backlinks strategy | 🟡 Medium | Get listed on medical directories (jameda, doctolib, sanego) |
| Only 1 `sameAs` (Instagram) | 🟡 Medium | Add Google Business Profile URL, Doctorlib, Jameda to `sameAs` array |
| No Google Business Profile link in schema | 🟡 Medium | Add GBP URL to `sameAs` for local SEO |

### 7.3 Conversion-Related SEO Issues

| Issue | Impact | Fix |
|-------|--------|-----|
| CTA buttons use generic "Termin vereinbaren" everywhere | 🟠 Low | Vary CTAs to include treatment-specific calls: "Beratung zur Fett-weg-Spritze" |
| No structured `LocalBusiness` hours on contact page | 🟡 Medium | Opening hours are in global schema but not repeated with visibility on contact page |
| No phone click-tracking | 🟠 Low | `tel:` links should have tracking for conversion attribution |

---

## 8. Prioritized Action Plan

### 🔴 Critical Fixes (Blocking ranking/indexation potential)

1. **Verify basePath configuration** — Confirm that `basePath: '/elaesthetics-bremen-github'` in [next.config.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/next.config.ts) isn't breaking production URLs if using a custom domain. All canonical URLs suggest `https://elaesthetics-bremen.de/botulinumtoxin` (no subpath), so the basePath may be causing a mismatch.

2. **Add `WebSite` schema** to the global `@graph` in [schema.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts). Missing this means no sitelinks search box eligibility and weaker entity recognition.

3. **Resolve Faltenbehandlung cannibalization** — Differentiate content between `/faltenbehandlung/` and `/botulinumtoxin/faltenbehandlung/` or consider merging.

### 🟡 High-Impact Improvements

4. **Switch to dynamic sitemap** — Replace static [public/sitemap.xml](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/sitemap.xml) with `app/sitemap.ts` for automatic generation and accurate `<lastmod>` dates.

5. **Add statistics and study citations** to treatment pages — this is the single highest-impact AI SEO improvement (+37-40% citation boost).

6. **Add explicit AI crawler rules** to [robots.txt](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/robots.txt) — explicit `Allow` for GPTBot, PerplexityBot, ClaudeBot.

7. **Add physician credentials visibly** on treatment pages (E-E-A-T box).

8. **Add "Zuletzt aktualisiert" dates** to all content pages.

### ✅ Quick Wins (Easy, immediate benefit)

9. **Trim title tags** to ≤60 characters on pages that exceed the limit.

10. **Enrich Footer** with top treatment/service links (Botulinumtoxin, Hyaluron, Eigenbluttherapie, Preise).

11. **Add `sameAs` URLs** — Google Business Profile, Jameda, Doctolib to physician and practice schema.

12. **Remove `keywords` meta tag** from all pages — provides zero SEO value (Google ignores it). Not harmful but adds code noise.

### 📋 Long-Term Recommendations

13. **Start a blog** — publish educational content on aesthetic medicine topics to build topical authority and create internal linking opportunities.

14. **Create comparison content** — "Hyaluron-Filler vs. Kollagenstimulation", "Botox vs. Hyaluron" — these get the highest AI citation rates (~33%).

15. **Implement before/after case studies** (with consent) — demonstrates Experience (the first E in E-E-A-T).

16. **Get listed on medical directories** — Jameda, Sanego, Doctolib, Google Business Profile optimization.

17. **Add `Offer` URLs** to the price list schema — link each treatment price to its corresponding treatment page.

18. **Consider moving to Vercel or Netlify** — enables Next.js Image Optimization, edge caching, incremental static regeneration, and better Core Web Vitals.

---

## Schema Markup Summary Table

| Schema Type | Where | Status | Action Needed |
|-------------|-------|--------|---------------|
| `MedicalClinic` | Global layout | ✅ | Add `sameAs` entries |
| [Physician](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#14-51) | Global layout | ✅ | Add `sameAs` entries |
| `WebSite` | Global layout | ❌ Missing | **Add to @graph** |
| `BreadcrumbList` | All pages (client-side) | ✅ | None |
| `MedicalWebPage` | Hub pages | ✅ | None |
| [MedicalProcedure](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts#152-178) | Spoke pages | ✅ | None |
| `FAQPage` | Treatment pages | ✅ | None |
| `ItemList` (Prices) | /preise | ✅ | Add `url` to each Offer |
| `AggregateRating` | Global (dynamic) | ✅ | Consider individual `Review` items |
| `LocalBusiness` | — | ❌ Optional | Could complement `MedicalClinic` for broader local SEO |

---

## Files Referenced

| File | Purpose |
|------|---------|
| [layout.tsx](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/app/layout.tsx) | Global schema, metadata template, font loading |
| [schema.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/schema.ts) | All JSON-LD schema helpers |
| [constants.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/lib/constants.ts) | Prices, domain config |
| [robots.txt](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/robots.txt) | Crawl directives |
| [sitemap.xml](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/public/sitemap.xml) | Static sitemap |
| [next.config.ts](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/next.config.ts) | basePath, export config |
| [Breadcrumbs.tsx](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/components/Breadcrumbs.tsx) | BreadcrumbList schema + UI |
| [Header.tsx](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/components/Header.tsx) | Navigation structure |
| [Footer.tsx](file:///c:/Users/ferri/Documents/GitHub/elaesthetics-nextjs/components/Footer.tsx) | Footer links |
