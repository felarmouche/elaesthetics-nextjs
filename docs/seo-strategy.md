# SEO-Strategie: EL Aesthetics Bremen

> **Single Source of Truth** für Content, Technical SEO und lokale Sichtbarkeit.
> Stand: 2026 · Optimiert für SGE / AI Overviews, HWG-Konformität & Next.js Static Export.

---

## 1 — Search Reality 2026: SGE & AI Overviews

### 1.1 Paradigmenwechsel

Google AI Overviews (ehem. SGE) generieren zusammenfassende Antworten direkt in den SERPs. Zero-Click-Rate bei medizinischen Informationssuchen liegt 2026 bei > 60 %. Die Strategie muss daher auf **zwei Ebenen** funktionieren:

| Ebene | Ziel | Taktik |
|---|---|---|
| **AI-Snippet-Quelle** | Als Quelle für AI Overviews zitiert werden | Strukturierte Daten, klare Definitionen, FAQ-Markup, kurze Antwort-Absätze (40–60 Wörter) direkt nach H2/H3 |
| **Click-Through** | Trotz AI Overview Klicks generieren | Unique Value Proposition im Meta-Title, Preistransparenz, lokaler CTA ("Jetzt Termin in Bremen") |

### 1.2 Content-Formate für AI Overviews

Jede Behandlungsseite muss folgende **Snippet-optimierte Blöcke** enthalten:

1. **Definitions-Absatz** (direkt nach H1): 1–2 Sätze, die die Behandlung erklären. Beginnt mit dem Behandlungsnamen. Wird bevorzugt von AI Overviews extrahiert.
2. **"Auf einen Blick"-Box**: Stichpunkte mit Dauer, Ausfallzeit, Wirkdauer, Preis-ab. Wird als Featured-Snippet-Kandidat indexiert.
3. **FAQ-Sektion**: Jede Frage als eigenständige H3 mit präziser Antwort (max. 80 Wörter). JSON-LD `FAQPage`-Markup obligatorisch.

### 1.3 Visual Search & Bildersuche

| Regel | Umsetzung |
|---|---|
| Alt-Tags | Beschreibend + Keyword: `"Faltenbehandlung mit Botulinumtoxin an der Stirn – EL Aesthetics Bremen"` |
| Dateinamen | Kebab-Case mit Keyword: `faltenbehandlung-botulinumtoxin-stirn.webp` |
| OG-Images | Jede Behandlungsseite bekommt ein eigenes OG-Image (1200×630). Kein generisches Praxisbild. |
| WebP-Format | Alle Bilder als `.webp` ausliefern. Fallback auf `.webp` nur wenn nötig. |
| Keine Vorher-Nachher | Gemäß HWG §11 Abs. 1 Nr. 5: Keine Vorher-Nachher-Bilder von Patienten. Stattdessen: Illustrationen, Schema-Zeichnungen, Praxis-/Behandlungsraum-Aufnahmen. |

---

## 2 — HWG-Compliance & E-E-A-T Wording-Regeln

### 2.1 Verbotene Formulierungen (Heilmittelwerbegesetz)

| ❌ Verboten | ✅ Erlaubte Alternative |
|---|---|
| "Garantiert faltenfrei" | "Kann zur Glättung mimischer Falten beitragen" |
| "Vorher-Nachher-Ergebnisse" | "Behandlungsbereiche und Anwendungstechnik" |
| "Schmerzfrei" | "In der Regel gut verträglich" |
| "Sofortige Ergebnisse" | "Erste Effekte können sich nach wenigen Tagen zeigen" |
| "Heilt Migräne" | "Kann zur Prophylaxe chronischer Migräne eingesetzt werden" |
| "100% sicher" | "Risikoarmes Verfahren bei ärztlicher Durchführung" |
| "Verjüngung" (als Versprechen) | "Kann das Erscheinungsbild der Haut verbessern" |
| Patientenzitate mit Heilversprechen | Neutrale Erfahrungsberichte ohne Wirkversprechen |

### 2.2 E-E-A-T Signale maximieren

| Signal | Umsetzung |
|---|---|
| **Experience** | Praxisbilder, Behandlungsraum-Aufnahmen, Team-Seite mit Vita |
| **Expertise** | Ärztliche Qualifikation auf jeder Seite sichtbar. Schema `Physician` + `medicalSpecialty`. Fachterminologie verwenden, aber laienverständlich erklären. |
| **Authoritativeness** | Ärztekammer-Mitgliedschaft nennen. GOÄ-basierte Abrechnung als Qualitätsmerkmal positionieren. Keine Heilpraktikerleistungen. |
| **Trustworthiness** | Impressum vollständig. Datenschutz DSGVO-konform. Google-Bewertungen einbinden (nur Sterne, keine medizinischen Aussagen). SSL. |

### 2.3 Wording-Templates

**Einleitung einer Behandlungsseite:**
> [Behandlungsname] ist ein [minimal-invasives/nicht-chirurgisches] Verfahren der ästhetischen Medizin. Bei EL Aesthetics in Bremen führt Ärztin Ola El‑Armouche diese Behandlung unter Berücksichtigung individueller anatomischer Gegebenheiten durch.

**Preis-Kommunikation:**
> Die Kosten richten sich nach dem individuellen Befund und der verwendeten Menge. Die Abrechnung erfolgt nach der Gebührenordnung für Ärzte (GOÄ). Orientierungspreise finden Sie auf unserer [Preisseite](/preise) und bei konkreten Behandlungsseiten unter den Quick Infos.

**Risiko-Absatz (obligatorisch auf jeder Behandlungsseite in FAQ):**
> Wie bei jedem medizinischen Eingriff können Nebenwirkungen auftreten. Zu den häufigsten zählen [behandlungsspezifisch]. In einem persönlichen Beratungsgespräch klären wir Sie umfassend über Risiken, Kontraindikationen und realistische Erwartungen auf.

---

## 3 — Local SEO: Dominanz in Bremen

### 3.1 NAP-Konsistenz (Name, Address, Phone)

Exakte Schreibweise auf **allen** Seiten, Schema-Markups und externen Verzeichnissen:

```
EL Aesthetics
Ola El-Armouche · Ärztin
Richtepad 14
28355 Bremen
+49 155 66919635
info@elaesthetics-bremen.de
```

### 3.2 Lokale Entitäten in Content einbauen

Jede Behandlungsseite muss mindestens **3 lokale Signale** enthalten:

1. **H1**: Immer mit "in Bremen" (bereits umgesetzt ✓)
2. **Fließtext**: Mindestens 1× "Bremen Oberneuland" oder "Bremen" im Einleitungsabsatz
3. **Schema.org**: `addressLocality: "Bremen"`, `addressRegion: "HB"` in jedem JSON-LD

Zusätzliche lokale Entitäten für natürliche Einbindung:
- "Privatpraxis in Bremen Oberneuland"
- "Hansestadt Bremen"
- "Bremer Patienten"
- "Praxis nahe Borgfeld / Horn-Lehe / Schwachhausen" (Einzugsgebiet)
> Dabei Keywordstuffing vermeiden

## 4 — Technical SEO: Next.js Static Export

### 4.1 Einschränkungen durch `output: 'export'`

| Feature | Status | Lösung |
|---|---|---|
| Server-Side Rendering | ❌ Nicht verfügbar | Alle Inhalte werden zur Build-Zeit generiert |
| Dynamic Metadata | ❌ Keine Runtime-Fetches | Metadata muss statisch in `page.tsx` exportiert werden |
| Sitemap-Generierung | ⚠️ Manuell | `next-sitemap` als Post-Build-Script oder statische `sitemap.xml` in `public/` |
| robots.txt | ⚠️ Manuell | Statisch in `public/robots.txt` |
| Redirects | ❌ Nicht via next.config | Via Hosting-Provider (GitHub Pages: keine nativen Redirects) |
| Trailing Slash | ✅ Konfiguriert | `trailingSlash: true` in `next.config.ts` |

### 4.2 Metadata-Template für Behandlungsseiten

```typescript
// app/(treatments)/[behandlung]/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '[Behandlung] Bremen | [USP/Qualifier] | EL Aesthetics',
  description: '[Behandlung] in Bremen: [1 Satz Nutzen]. Ärztliche Beratung zu Ablauf, Kosten & Risiken. Jetzt Termin vereinbaren.',
  keywords: ['[Primary KW] Bremen', '[Secondary KW] Bremen', '[Long-Tail KW]'],
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/[route]',
  },
  openGraph: {
    title: '[Behandlung] in Bremen – EL Aesthetics',
    description: '[Kurzbeschreibung mit CTA]',
    url: 'https://elaesthetics-bremen.de/[route]',
    siteName: 'EL Aesthetics Bremen',
    locale: 'de_DE',
    type: 'website',
    images: [{
      url: '/assets/[behandlung]/og-image.webp',
      width: 1200,
      height: 630,
      alt: '[Behandlung] bei EL Aesthetics Bremen',
    }],
  },
}
```

### 4.3 JSON-LD Schema Templates

#### Template A: Behandlungs-Hub (z. B. `/botulinumtoxin`, `/hyaluron`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "name": "[Hub-Titel]",
      "description": "[Meta Description]",
      "url": "https://elaesthetics-bremen.de/[route]",
      "inLanguage": "de-DE",
      "isPartOf": {
        "@type": "WebSite",
        "name": "EL Aesthetics Bremen",
        "url": "https://elaesthetics-bremen.de"
      },
      "about": {
        "@type": "MedicalTherapy",
        "name": "[Wirkstoff/Kategorie]",
        "medicineSystem": "WesternConventional",
        "relevantSpecialty": {
          "@type": "MedicalSpecialty",
          "name": "Dermatology"
        }
      },
      "provider": {
        "@type": "MedicalBusiness",
        "@id": "#practice",
        "name": "EL Aesthetics",
        "medicalSpecialty": "Dermatology",
        "telephone": "+4915566919635",
        "email": "info@elaesthetics-bremen.de",
        "url": "https://elaesthetics-bremen.de",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Richtepad 14",
          "addressLocality": "Bremen",
          "addressRegion": "HB",
          "postalCode": "28355",
          "addressCountry": "DE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 53.1057,
          "longitude": 8.9006
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "€€",
        "physician": {
          "@type": "Physician",
          "name": "Ola El-Armouche",
          "medicalSpecialty": "Dermatology",
          "memberOf": {
            "@type": "MedicalOrganization",
            "name": "Ärztekammer Bremen"
          }
        }
      }
    }
  ]
}
```

#### Template B: Einzelne Behandlung (z. B. `/botulinumtoxin/faltenbehandlung`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "name": "[Seitentitel]",
      "url": "https://elaesthetics-bremen.de/[route]",
      "provider": { "@id": "#practice" }
    },
    {
      "@type": "MedicalProcedure",
      "name": "[Behandlungsname]",
      "procedureType": "NoninvasiveProcedure",
      "bodyLocation": "[Körperbereich]",
      "description": "[Kurzbeschreibung ohne Heilversprechen]",
      "howPerformed": "[Applikationsart, z. B. Injektion]",
      "preparation": "Individuelles Beratungsgespräch und Anamnese",
      "status": "https://schema.org/EventScheduled",
      "study": [],
      "recognizingAuthority": {
        "@type": "MedicalOrganization",
        "name": "Ärztekammer Bremen"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "[Frage]",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "[Antwort]"
          }
        }
      ]
    }
  ]
}
```

#### Template C: Preisseite

```json
{
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Preise ästhetischer Behandlungen",
  "url": "https://elaesthetics-bremen.de/preise",
  "provider": { "@id": "#practice" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "[Behandlungsname]",
        "price": "[Ab-Preis]",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "[Ab-Preis]",
          "priceCurrency": "EUR",
          "description": "Ab-Preis, individuelle Kosten nach GOÄ"
        }
      }
    ]
  }
}
```

### 4.4 Fehlende technische Assets (Action Items)

| Asset | Status | Priorität |
|---|---|---|
| `public/sitemap.xml` | ❌ Fehlt | **KRITISCH** — Muss erstellt werden |
| `public/robots.txt` | ❌ Fehlt | **KRITISCH** — Muss erstellt werden |
| `FAQPage` JSON-LD auf Behandlungsseiten | ⚠️ Teilweise | HOCH — Auf allen Seiten mit FAQ-Sektion ergänzen |
| Canonical-URLs auf allen Seiten | ⚠️ Teilweise | HOCH — Auf Kontakt, Danke, Datenschutz ergänzen |
| OG-Images pro Behandlung | ⚠️ Nur generisches Bild | MITTEL — Individuelle OG-Images erstellen |
| `hreflang` | Nicht nötig | Nur deutsche Seite, kein Multilingual |

### 4.5 robots.txt (Vorlage)

```
User-agent: *
Allow: /
Disallow: /danke/

Sitemap: https://elaesthetics-bremen.de/sitemap.xml
```

### 4.6 sitemap.xml (Struktur)

Alle Routen mit `<lastmod>`, `<changefreq>` und `<priority>`:
- Homepage: priority 1.0
- Hub-Seiten (Botulinumtoxin, Hyaluron, etc.): priority 0.9
- Behandlungsseiten: priority 0.8
- Preise: priority 0.7
- Kontakt: priority 0.6
- Impressum, Datenschutz: priority 0.2
- Danke: nicht in Sitemap aufnehmen

---

## 5 — Master Keyword Map & Cluster-Strategie

### 5.1 Hub & Spoke Architektur

```
                        ┌─────────────────┐
                        │    HOMEPAGE      │
                        │ "Ästhetische     │
                        │  Medizin Bremen" │
                        └────────┬────────┘
              ┌──────────────────┼──────────────────┐
              │                  │                   │
    ┌─────────▼──────┐  ┌───────▼────────┐  ┌──────▼───────────┐
    │  INJEKTIONEN   │  │ HAUTQUALITÄT   │  │ LÖSUNGEN/KÖRPER  │
    │   & MEDIZIN    │  │ & REGENERATION │  │                  │
    └───────┬────────┘  └───────┬────────┘  └──────┬───────────┘
            │                   │                   │
   ┌────────┼────────┐  ┌──────┼──────┐    ┌──────┼───────┐
   │        │        │  │      │      │    │      │       │
 Botox   Hyaluron Kollagen Eigen- Meso  Falten Haar-  Fett-weg
  Hub     Hub    stimul.  blut  therapie beh.  ausfall Spritze
   │       │               │
   │       │               │
 Spoke   Spoke           Spoke
 Pages   Pages           Pages
```

### 5.2 Cluster-Regeln zur Vermeidung von Keyword-Kannibalisierung

| Regel | Beschreibung |
|---|---|
| **1 Primary Keyword = 1 Seite** | Jedes Primary Keyword wird exakt einer URL zugeordnet. Keine Seite konkurriert mit einer anderen um dasselbe Primary KW. |
| **Hub-Seite = Oberbegriff** | Hub rankt auf den generischen Term ("Botulinumtoxin Bremen"). Spoke-Seiten ranken auf spezifische Long-Tails ("Zornesfalte entfernen Bremen"). |
| **Lösungsseiten vs. Wirkstoffseiten** | `/faltenbehandlung` (Problem-Suche) verlinkt auf `/botulinumtoxin/faltenbehandlung` und `/hyaluron/filler` (Lösungs-Suchen). Keine Keyword-Überschneidung im H1. |
| **Interne Verlinkung** | Spoke → Hub (Breadcrumb + "Zurück zur Übersicht"). Hub → Spoke (Behandlungskarten). Lösungsseiten → relevante Spokes (kontextuell). |

### 5.3 Vollständige Keyword-Map

#### HOMEPAGE `/`

| Element | Wert |
|---|---|
| **Page Title** | `Ästhetische Medizin Bremen | Privatpraxis EL Aesthetics` |
| **Meta Description** | `Privatpraxis für ästhetische Medizin in Bremen Oberneuland. Ärztliche Behandlungen mit Botulinumtoxin, Hyaluron & Eigenbluttherapie. Jetzt Termin vereinbaren.` |
| **H1** | `Ästhetische Medizin in Bremen` |
| **Primary KW** | `ästhetische Medizin Bremen` |
| **Secondary KW** | `Privatpraxis ästhetische Medizin Bremen`, `Schönheitsarzt Bremen`, `ästhetische Behandlungen Bremen Oberneuland` |

---

#### BOTULINUMTOXIN CLUSTER

##### Hub: `/botulinumtoxin`

| Element | Wert |
|---|---|
| **Page Title** | `Botulinumtoxin Bremen » Ärztliche Behandlung | EL Aesthetics` |
| **Meta Description** | `Botulinumtoxin-Behandlungen in Bremen: Faltenglättung, Masseter, Hyperhidrose & Migräne. Ärztliche Expertise & individuelle Beratung. Jetzt Termin vereinbaren.` |
| **H1** | `Botulinumtoxin Behandlung in Bremen` |
| **Primary KW** | `Botulinumtoxin Bremen` |
| **Secondary KW** | `Botox Bremen`, `Botox Arzt Bremen`, `Botulinumtoxin Behandlung Bremen` |

##### Spoke: `/botulinumtoxin/faltenbehandlung`

| Element | Wert |
|---|---|
| **Page Title** | `Faltenbehandlung Bremen (Botox) | Zornesfalte & Stirn | EL Aesthetics` |
| **Meta Description** | `Ärztliche Faltenbehandlung mit Botulinumtoxin in Bremen. Gezielte Glättung von Zornesfalten, Stirnfalten & Krähenfüßen. Natürliche Ergebnisse. Jetzt beraten lassen.` |
| **H1** | `Faltenbehandlung mit Botulinumtoxin in Bremen` |
| **Primary KW** | `Faltenbehandlung Botox Bremen` |
| **Secondary KW** | `Zornesfalte entfernen Bremen`, `Stirnfalten glätten Bremen`, `Krähenfüße Behandlung Bremen` |

##### Spoke: `/botulinumtoxin/aesthetische-behandlungen`

| Element | Wert |
|---|---|
| **Page Title** | `Lip Flip, Brow Lift & Gummy Smile Bremen | EL Aesthetics` |
| **Meta Description** | `Ästhetische Botulinumtoxin-Behandlungen in Bremen: Lip Flip, Nefertiti-Lift, Brow Lift & Gummy Smile. Ärztliche Präzision für harmonische Details. Termin vereinbaren.` |
| **H1** | `Ästhetische Anwendungen mit Botulinumtoxin` |
| **Primary KW** | `Lip Flip Bremen`, `Gummy Smile Botox Bremen` |
| **Secondary KW** | `Nefertiti Lift Bremen`, `Brow Lift Botox Bremen`, `Erdbeerkinn entfernen Bremen`, `Bunny Lines Botox` |

##### Spoke: `/botulinumtoxin/masseter`

| Element | Wert |
|---|---|
| **Page Title** | `Masseter Botox Bremen | Bruxismus & Face Slimming | EL Aesthetics` |
| **Meta Description** | `Masseter-Behandlung mit Botulinumtoxin in Bremen: Linderung bei Zähneknirschen (Bruxismus) und optische Gesichtsverschlankung. Ärztliche Beratung. Jetzt Termin buchen.` |
| **H1** | `Masseter-Behandlung mit Botulinumtoxin in Bremen` |
| **Primary KW** | `Masseter Botox Bremen` |
| **Secondary KW** | `Bruxismus Behandlung Bremen`, `Zähneknirschen Botox Bremen`, `Face Slimming Bremen`, `Kiefer Botox Bremen` |

##### Spoke: `/botulinumtoxin/hyperhidrose`

| Element | Wert |
|---|---|
| **Page Title** | `Hyperhidrose Behandlung Bremen | Schwitzen stoppen | EL Aesthetics` |
| **Meta Description** | `Übermäßiges Schwitzen behandeln: Botulinumtoxin gegen Hyperhidrose in Bremen. Wirkung, Ablauf & Kosten der ärztlichen Behandlung. Beratungstermin vereinbaren.` |
| **H1** | `Hyperhidrose-Behandlung in Bremen` |
| **Primary KW** | `Hyperhidrose Behandlung Bremen` |
| **Secondary KW** | `übermäßiges Schwitzen behandeln Bremen`, `Botox gegen Schwitzen Bremen`, `Schweißdrüsen Behandlung Bremen` |

##### Spoke: `/botulinumtoxin/migraene`

| Element | Wert |
|---|---|
| **Page Title** | `Migräne-Prophylaxe Bremen | Botulinumtoxin-Behandlung | EL Aesthetics` |
| **Meta Description** | `Botulinumtoxin zur Migräne-Prophylaxe in Bremen. Ärztliche Behandlung bei chronischer Migräne. Informationen zu Ablauf, Wirkung & Kosten. Jetzt beraten lassen.` |
| **H1** | `Migräne-Behandlung mit Botulinumtoxin in Bremen` |
| **Primary KW** | `Migräne Botox Bremen` |
| **Secondary KW** | `Migräne Prophylaxe Bremen`, `chronische Migräne Behandlung Bremen`, `Botulinumtoxin Migräne Bremen` |

##### Spoke: `/botulinumtoxin/mesobotox`

| Element | Wert |
|---|---|
| **Page Title** | `Mesobotox Bremen | Porenverfeinernde Mikro-Injektion | EL Aesthetics` |
| **Meta Description** | `Mesobotox in Bremen: Mikro-Injektionen zur Porenverfeinerung und Verbesserung der Hauttextur. Ärztlich durchgeführt. Beratungstermin vereinbaren.` |
| **H1** | `Mesobotox-Behandlung in Bremen` |
| **Primary KW** | `Mesobotox Bremen` |
| **Secondary KW** | `Mikro-Botox Bremen`, `Poren verfeinern Botox Bremen`, `Hauttextur verbessern Bremen` |

---

#### HYALURON CLUSTER

##### Hub: `/hyaluron`

| Element | Wert |
|---|---|
| **Page Title** | `Hyaluron Behandlung Bremen | Filler, Skinbooster & mehr | EL Aesthetics` |
| **Meta Description** | `Hyaluronsäure-Behandlungen in Bremen: Filler für Kontur & Volumen, Skinbooster für Glow, Profhilo für Hautqualität. Ärztliche Beratung. Jetzt Termin vereinbaren.` |
| **H1** | `Hyaluron Behandlung in Bremen` |
| **Primary KW** | `Hyaluron Bremen`, `Hyaluronsäure Bremen` |
| **Secondary KW** | `Hyaluron Behandlung Bremen`, `Lippen aufspritzen Bremen`, `Faltenunterspritzung Bremen` |

##### Spoke: `/hyaluron/filler`

| Element | Wert |
|---|---|
| **Page Title** | `Hyaluron Filler Bremen | Lippen, Jawline & Falten | EL Aesthetics` |
| **Meta Description** | `Hyaluron-Filler in Bremen: Lippen, Jawline, Wangen & Falten natürlich korrigieren. Individuelle Beratung & ärztliche Durchführung. Jetzt Termin buchen.` |
| **H1** | `Hyaluron Filler in Bremen` |
| **Primary KW** | `Hyaluron Filler Bremen` |
| **Secondary KW** | `Lippen aufspritzen Bremen`, `Lippenunterspritzung Bremen`, `Jawline Filler Bremen`, `Nasolabialfalte unterspritzen Bremen`, `Kinnaufbau Bremen` |

##### Spoke: `/hyaluron/skinbooster`

| Element | Wert |
|---|---|
| **Page Title** | `Skinbooster Bremen | Hautfeuchtigkeit & Glow | EL Aesthetics` |
| **Meta Description** | `Skinbooster-Behandlung in Bremen: Tiefenhydration mit unvernetzter Hyaluronsäure für natürlichen Glow. Ärztliche Anwendung. Beratungstermin vereinbaren.` |
| **H1** | `Skinbooster-Behandlung in Bremen` |
| **Primary KW** | `Skinbooster Bremen` |
| **Secondary KW** | `Hautfeuchtigkeit Behandlung Bremen`, `Hyaluron Glow Bremen`, `Skin Booster Behandlung Bremen` |

##### Spoke: `/hyaluron/profhilo`

| Element | Wert |
|---|---|
| **Page Title** | `Profhilo Bremen | Bio-Remodeling & Hautstraffung | EL Aesthetics` |
| **Meta Description** | `Profhilo in Bremen: hochkonzentrierte Hyaluronsäure für Bio-Remodeling und natürliche Hautstraffung. BAP-Technik. Jetzt ärztlichen Beratungstermin buchen.` |
| **H1** | `Profhilo-Behandlung in Bremen` |
| **Primary KW** | `Profhilo Bremen` |
| **Secondary KW** | `Bio-Remodeling Bremen`, `Biorevitalisierung Bremen`, `Hautstraffung ohne OP Bremen` |

##### Spoke: `/hyaluron/hylase`

| Element | Wert |
|---|---|
| **Page Title** | `Hylase Bremen | Hyaluronidase Filler-Auflösung | EL Aesthetics` |
| **Meta Description** | `Hyaluronidase (Hylase) in Bremen: Ärztliche Auflösung von Hyaluron-Filler. Bei Unzufriedenheit oder Komplikationen. Sichere Korrektur. Jetzt beraten lassen.` |
| **H1** | `Hyaluronidase (Hylase) in Bremen` |
| **Primary KW** | `Hylase Bremen`, `Hyaluronidase Bremen` |
| **Secondary KW** | `Filler auflösen Bremen`, `Hyaluron auflösen Bremen`, `Filler Korrektur Bremen` |

---

#### EIGENBLUTTHERAPIE CLUSTER

##### Hub: `/eigenbluttherapie`

| Element | Wert |
|---|---|
| **Page Title** | `Eigenbluttherapie PRF & PRP Bremen | Haut & Haare | EL Aesthetics` |
| **Meta Description** | `Eigenbluttherapie mit PRF/PRP in Bremen: Autologe Plasma-Behandlung für Hautregeneration und bei Haarausfall. Ablauf, Kosten & Beratung. Termin vereinbaren.` |
| **H1** | `Eigenbluttherapie in Bremen` |
| **Primary KW** | `Eigenbluttherapie Bremen`, `PRP Bremen` |
| **Secondary KW** | `PRF Behandlung Bremen`, `Platelet Rich Plasma Bremen`, `Eigenblut Behandlung Bremen` |

##### Spoke: `/eigenbluttherapie/vampir-lifting`

| Element | Wert |
|---|---|
| **Page Title** | `Vampir-Lifting Bremen | PRF/PRP Hautverjüngung | EL Aesthetics` |
| **Meta Description** | `Vampir-Lifting in Bremen: Hautregeneration mit körpereigenem Plasma (PRF/PRP). Natürliche Verbesserung der Hautqualität. Ärztlich durchgeführt. Termin buchen.` |
| **H1** | `Vampir-Lifting in Bremen` |
| **Primary KW** | `Vampir-Lifting Bremen` |
| **Secondary KW** | `Vampir Lifting PRP Bremen`, `PRF Gesicht Bremen`, `Plasma Lifting Bremen` |

##### Spoke: `/eigenbluttherapie/microneedling`

| Element | Wert |
|---|---|
| **Page Title** | `Microneedling + PRP Bremen | Kombinationsbehandlung | EL Aesthetics` |
| **Meta Description** | `Microneedling kombiniert mit PRP/PRF in Bremen: Verstärkte Kollagenbildung durch Eigenblut-Serum. Ärztliche Behandlung für Narben & Hautbild. Jetzt informieren.` |
| **H1** | `Microneedling mit PRP/PRF in Bremen` |
| **Primary KW** | `Microneedling PRP Bremen` |
| **Secondary KW** | `Microneedling Eigenblut Bremen`, `PRP Microneedling Kombination Bremen` |

##### Spoke: `/eigenbluttherapie/haare`

| Element | Wert |
|---|---|
| **Page Title** | `PRP Haare Bremen | Eigenbluttherapie gegen Haarausfall | EL Aesthetics` |
| **Meta Description** | `PRP/PRF-Behandlung gegen Haarausfall in Bremen: Eigenbluttherapie zur Unterstützung des Haarwachstums. Ärztliche Anamnese & Beratung. Termin vereinbaren.` |
| **H1** | `Eigenbluttherapie für die Haare in Bremen` |
| **Primary KW** | `PRP Haare Bremen` |
| **Secondary KW** | `Eigenbluttherapie Haarausfall Bremen`, `PRF Haare Bremen`, `Haarwachstum PRP Bremen` |

---

#### MESOTHERAPIE CLUSTER

##### Hub: `/mesotherapie`

| Element | Wert |
|---|---|
| **Page Title** | `Mesotherapie Bremen | Haut & Haare | EL Aesthetics` |
| **Meta Description** | `Mesotherapie in Bremen: Mikro-Injektionen mit Vitaminen, Aminosäuren & Hyaluron für Hautqualität und Haarwachstum. Ärztliche Behandlung. Termin vereinbaren.` |
| **H1** | `Mesotherapie in Bremen` |
| **Primary KW** | `Mesotherapie Bremen` |
| **Secondary KW** | `Mesotherapie Gesicht Bremen`, `Mesotherapie Haare Bremen` |

##### Spoke: `/mesotherapie/haut`

| Element | Wert |
|---|---|
| **Page Title** | `Mesotherapie Gesicht Bremen | Meso-Glow Behandlung | EL Aesthetics` |
| **Meta Description** | `Meso-Glow in Bremen: Mesotherapie für das Gesicht mit Vitamincocktails und Hyaluron. Strahlende Hautqualität. Ärztliche Anwendung. Jetzt Termin buchen.` |
| **H1** | `Mesotherapie für die Haut in Bremen` |
| **Primary KW** | `Mesotherapie Gesicht Bremen` |
| **Secondary KW** | `Meso-Glow Bremen`, `Vitamin Mesotherapie Bremen`, `Hautauffrischung Bremen` |

##### Spoke: `/mesotherapie/haare`

| Element | Wert |
|---|---|
| **Page Title** | `Mesotherapie Haare Bremen | Kopfhaut-Behandlung | EL Aesthetics` |
| **Meta Description** | `Haar-Mesotherapie in Bremen: Mikro-Injektionen mit Wachstumsfaktoren & Nährstoffen für die Kopfhaut. Ärztliche Behandlung bei Haarausfall. Termin vereinbaren.` |
| **H1** | `Mesotherapie für die Haare in Bremen` |
| **Primary KW** | `Mesotherapie Haare Bremen` |
| **Secondary KW** | `Haarausfall Mesotherapie Bremen`, `Meso Hair Bremen`, `Kopfhaut Behandlung Bremen` |

---

#### STANDALONE-SEITEN (kein Cluster)

##### `/biostimulation`

| Element | Wert |
|---|---|
| **Page Title** | `Biostimulation Bremen | CaHA & Biostimulatoren | EL Aesthetics` |
| **Meta Description** | `Biostimulation in Bremen: CaHA- und Hyaluron-Biostimulatoren für natürliche Hautstraffung an Gesicht, Hals & Händen. Ärztliche Beratung. Termin buchen.` |
| **H1** | `Biostimulation in Bremen` |
| **Primary KW** | `Biostimulation Bremen` |
| **Secondary KW** | `Calciumhydroxylapatit Bremen`, `Hautstraffung ohne OP Bremen`, `Biostimulator Bremen`, `Kollagenaufbau Bremen` |

##### `/polynukleotide`

| Element | Wert |
|---|---|
| **Page Title** | `Polynukleotide Bremen | Hautregeneration & Anti-Aging | EL Aesthetics` |
| **Meta Description** | `Polynukleotide in Bremen: DNA-basierte Hautregeneration für Falten, Augenbereich & Haarausfall. Ärztliche Beratung zu Ablauf & Kosten. Jetzt Termin vereinbaren.` |
| **H1** | `Polynukleotide-Behandlung in Bremen` |
| **Primary KW** | `Polynukleotide Bremen` |
| **Secondary KW** | `Polynukleotide Augen Bremen`, `Polynukleotide Haarausfall Bremen`, `DNA Hauttherapie Bremen` |

##### `/medizinisches-microneedling`

| Element | Wert |
|---|---|
| **Page Title** | `Medizinisches Microneedling Bremen | Aknenarben & Poren | EL Aesthetics` |
| **Meta Description** | `Ärztliches Microneedling in Bremen: Angepasste Nadeltiefe für Aknenarben, Poren & Hautstruktur. Kollagen-Induktionstherapie. Jetzt Beratungstermin vereinbaren.` |
| **H1** | `Medizinisches Microneedling in Bremen` |
| **Primary KW** | `Medizinisches Microneedling Bremen` |
| **Secondary KW** | `Microneedling Bremen`, `Aknenarben behandeln Bremen`, `Dermapen Bremen`, `Poren verfeinern Bremen` |

##### `/fett-weg-spritze`

| Element | Wert |
|---|---|
| **Page Title** | `Fett-weg-Spritze Bremen | Injektionslipolyse Doppelkinn | EL Aesthetics` |
| **Meta Description** | `Fett-weg-Spritze in Bremen: Ärztliche Injektionslipolyse für Doppelkinn und lokale Fettdepots. Beratung zu Ablauf, Sitzungen & Kosten. Jetzt Termin vereinbaren.` |
| **H1** | `Fett-weg-Spritze (Injektionslipolyse) in Bremen` |
| **Primary KW** | `Fett-weg-Spritze Bremen` |
| **Secondary KW** | `Injektionslipolyse Bremen`, `Doppelkinn entfernen Bremen`, `Fettreduktion ohne OP Bremen` |

##### `/chemisches-peeling`

| Element | Wert |
|---|---|
| **Page Title** | `Chemisches Peeling Bremen | Hauterneuerung & Pigmente | EL Aesthetics` |
| **Meta Description** | `Chemisches Peeling in Bremen: Kontrollierte Hauterneuerung bei Pigmentflecken, Aknenarben & fahlem Teint. Ärztlich durchgeführt. Beratungstermin vereinbaren.` |
| **H1** | `Chemisches Peeling in Bremen` |
| **Primary KW** | `Chemisches Peeling Bremen` |
| **Secondary KW** | `Fruchtsäurepeeling Bremen`, `Pigmentflecken behandeln Bremen`, `Hauterneuerung Bremen` |

---

#### LÖSUNGS-/PROBLEMSEITEN (Querschnitt-Cluster)

##### `/faltenbehandlung`

| Element | Wert |
|---|---|
| **Page Title** | `Faltenbehandlung Bremen | Botox, Hyaluron & mehr | EL Aesthetics` |
| **Meta Description** | `Faltenbehandlung in Bremen: Mimikfalten glätten mit Botox, Volumenaufbau mit Hyaluron, Hautqualität verbessern mit Polynukleotiden. Jetzt ärztlich beraten lassen.` |
| **H1** | `Faltenbehandlung in Bremen` |
| **Primary KW** | `Faltenbehandlung Bremen` |
| **Secondary KW** | `Falten entfernen Bremen`, `Faltenunterspritzung Bremen`, `Anti-Aging Arzt Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Botox-Falten-Spoke, Filler-Spoke, Biostimulation |

##### `/haarausfall-behandlung`

| Element | Wert |
|---|---|
| **Page Title** | `Haarausfall Behandlung Bremen | PRP, Mesotherapie & mehr | EL Aesthetics` |
| **Meta Description** | `Haarausfall-Behandlung in Bremen: Ärztliche Analyse & Therapie mit PRP/PRF, Mesotherapie oder Polynukleotiden. Individuelle Beratung. Jetzt Termin vereinbaren.` |
| **H1** | `Haarausfall Behandlung in Bremen` |
| **Primary KW** | `Haarausfall Behandlung Bremen` |
| **Secondary KW** | `Haarausfall Arzt Bremen`, `Haarausfall Therapie Bremen`, `Haare stärken Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Eigenblut-Haare-Spoke, Meso-Haare-Spoke, Polynukleotide |

##### `/longevity`

| Element | Wert |
|---|---|
| **Page Title** | `Longevity & Hautqualität Bremen | Prävention & Regeneration | EL Aesthetics` |
| **Meta Description** | `Longevity in Bremen: Präventive Hautmedizin mit Biostimulatoren, Skinboostern & Microneedling. Hautalterung verlangsamen statt korrigieren. Beratung vereinbaren.` |
| **H1** | `Longevity & Hautqualität in Bremen` |
| **Primary KW** | `Longevity Hautpflege Bremen` |
| **Secondary KW** | `Hautalterung verlangsamen Bremen`, `präventive Ästhetik Bremen`, `Hautqualität verbessern Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Skinbooster, Polynukleotide, Eigenblut, Microneedling |

##### `/augen-behandlung`

| Element | Wert |
|---|---|
| **Page Title** | `Augenringe & Tränenrinne behandeln Bremen | EL Aesthetics` |
| **Meta Description** | `Augenbehandlungen in Bremen: Augenringe, Krähenfüße & Tränenrinnen ärztlich behandeln mit Polynukleotiden, PRP oder Botulinumtoxin. Jetzt beraten lassen.` |
| **H1** | `Augenbehandlungen in Bremen` |
| **Primary KW** | `Augenringe behandeln Bremen` |
| **Secondary KW** | `Tränenrinne unterspritzen Bremen`, `Krähenfüße Bremen`, `Augenbehandlung Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Botox-Falten (Krähenfüße), Polynukleotide, Eigenblut |

##### `/filler`

| Element | Wert |
|---|---|
| **Page Title** | `Filler Bremen | Volumenaufbau & Konturierung | EL Aesthetics` |
| **Meta Description** | `Filler in Bremen: Hyaluron-Filler & Biostimulation für Lippen, Jawline & Wangen. Natürliche Konturierung ohne „künstlichen" Look. Ärztliche Beratung buchen.` |
| **H1** | `Filler & Volumenaufbau in Bremen` |
| **Primary KW** | `Filler Bremen` |
| **Secondary KW** | `Volumenaufbau Gesicht Bremen`, `Wangen Filler Bremen`, `Kinn Filler Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Hyaluron-Filler-Spoke, Biostimulation |

##### `/medizinische-behandlungen`

| Element | Wert |
|---|---|
| **Page Title** | `Medizinische Indikationen Bremen | Bruxismus, Migräne & Schwitzen | EL Aesthetics` |
| **Meta Description** | `Medizinische Behandlungen mit Botulinumtoxin in Bremen: Bruxismus, chronische Migräne & Hyperhidrose. Ärztliche Diagnostik & Therapie. Jetzt beraten lassen.` |
| **H1** | `Medizinische Behandlungen in Bremen` |
| **Primary KW** | `medizinische Botox Behandlung Bremen` |
| **Secondary KW** | `Bruxismus Behandlung Bremen`, `Migräne Botox Bremen`, `Hyperhidrose Bremen` |
| **Rolle** | Lösungsseite — verlinkt auf Masseter, Migräne, Hyperhidrose Spokes |

---

#### UTILITY-SEITEN

##### `/preise`

| Element | Wert |
|---|---|
| **Page Title** | `Preise ästhetischer Behandlungen Bremen | EL Aesthetics` |
| **Meta Description** | `Transparente Preise für ästhetische Behandlungen in Bremen: Botulinumtoxin ab €180, Hyaluron-Filler ab €250, PRP ab €300. Abrechnung nach GOÄ. Preisliste ansehen.` |
| **H1** | `Preise` |
| **Primary KW** | `ästhetische Behandlungen Preise Bremen` |
| **Secondary KW** | `Botox Kosten Bremen`, `Hyaluron Filler Kosten Bremen`, `PRP Kosten Bremen` |

##### `/kontakt`

| Element | Wert |
|---|---|
| **Page Title** | `Kontakt & Termin | EL Aesthetics Bremen Oberneuland` |
| **Meta Description** | `Kontaktieren Sie EL Aesthetics in Bremen Oberneuland. Termin vereinbaren per WhatsApp, Telefon oder Kontaktformular. Privatpraxis für ästhetische Medizin.` |
| **H1** | `Kontakt` |
| **Primary KW** | `EL Aesthetics Bremen Kontakt` |
| **Secondary KW** | `ästhetische Medizin Bremen Termin`, `Privatpraxis Bremen Oberneuland` |

##### `/impressum`

| Element | Wert |
|---|---|
| **Page Title** | `Impressum | EL Aesthetics Bremen` |
| **Meta Description** | `Impressum der Privatpraxis EL Aesthetics Bremen: Ärztin Ola El‑Armouche, Kontaktdaten, Aufsichtsbehörde und rechtliche Angaben.` |
| **H1** | `Impressum` |
| **Kein Ranking-Ziel** | Rechtliche Pflichtseite |

##### `/datenschutz`

| Element | Wert |
|---|---|
| **Page Title** | `Datenschutzerklärung | EL Aesthetics Bremen` |
| **Meta Description** | `Datenschutzerklärung der Privatpraxis EL Aesthetics Bremen. Informationen zur Datenverarbeitung gemäß DSGVO.` |
| **H1** | `Datenschutzerklärung` |
| **Kein Ranking-Ziel** | Rechtliche Pflichtseite |

##### `/danke`

| Kein SEO-Ziel | `noindex` via robots.txt oder Meta-Tag |

---

## 6 — Content-Kalender & Priorisierung

### 6.1 Sofort umsetzen (Prio 1 — Technisch)

- [ ] `robots.txt` erstellen und in `public/` ablegen
- [ ] `sitemap.xml` erstellen und in `public/` ablegen
- [ ] E-Mail-Tippfehler auf Kontaktseite korrigieren (`elaestehtics` → `elaesthetics`)
- [ ] Fehlende Metadata auf Homepage, Kontakt, Datenschutz ergänzen
- [ ] Canonical-URLs auf allen Seiten sicherstellen
- [ ] `FAQPage` JSON-LD Markup auf allen Seiten mit FAQ-Sektion hinzufügen
- [ ] `MedicalBusiness` Schema mit `@id: "#practice"` zentral definieren und referenzieren

### 6.2 Kurzfristig (Prio 2 — Content & On-Page)

- [ ] Keyword-Map aus Sektion 5 auf alle Seiten anwenden (Title, Description, H1)
- [ ] Definitions-Absätze (Snippet-optimiert) auf allen Behandlungsseiten prüfen/ergänzen
- [ ] "Auf einen Blick"-Boxen auf allen Behandlungsseiten einführen
- [ ] Individuelle OG-Images pro Behandlungskategorie erstellen
- [ ] Alt-Tags aller Bilder nach Schema `[Behandlung] [Kontext] – EL Aesthetics Bremen` überarbeiten
- [ ] Risiko-Absatz (HWG-konform) auf jeder Behandlungsseite sicherstellen

### 6.3 Mittelfristig (Prio 3 — Authority & Local)

- [ ] Google Business Profile vollständig mit Services aus `data/treatments.ts` synchronisieren
- [ ] Citations in lokalen Verzeichnissen (Jameda, Doctolib, etc.) mit einheitlichem NAP anlegen
- [ ] Interne Verlinkung zwischen Lösungsseiten und Wirkstoff-Spokes systematisieren
- [ ] Breadcrumb-Markup als `BreadcrumbList` JSON-LD ergänzen

---

## 7 — Internes Verlinkungskonzept

### Verlinkungsmatrix

```
Lösungsseiten (Problem-Intent)          Wirkstoff-Hubs (Informations-Intent)
────────────────────────────────        ────────────────────────────────────
/faltenbehandlung ──────────────────►   /botulinumtoxin/faltenbehandlung
                  ──────────────────►   /hyaluron/filler
                  ──────────────────►   /biostimulation

/haarausfall-behandlung ────────────►   /eigenbluttherapie/haare
                        ────────────►   /mesotherapie/haare
                        ────────────►   /polynukleotide

/augen-behandlung ──────────────────►   /botulinumtoxin/faltenbehandlung (Krähenfüße)
                  ──────────────────►   /polynukleotide
                  ──────────────────►   /eigenbluttherapie/vampir-lifting

/longevity ─────────────────────────►   /hyaluron/skinbooster
           ─────────────────────────►   /polynukleotide
           ─────────────────────────►   /eigenbluttherapie
           ─────────────────────────►   /medizinisches-microneedling
```

### Verlinkungsregeln

1. **Jede Spoke-Seite** verlinkt zurück zum Hub (Breadcrumb + expliziter "Alle [Kategorie]-Behandlungen"-Link)
2. **Jede Hub-Seite** verlinkt zu allen ihren Spokes (Behandlungskarten-Grid)
3. **Lösungsseiten** verlinken kontextuell zu relevanten Spokes aus verschiedenen Clustern
4. **Jede Behandlungsseite** verlinkt zur Preisseite (CTA oder "Auf einen Blick"-Box)
5. **Jede Seite** enthält einen CTA zur Kontaktseite
6. **Keine gegenseitige Hub-Verlinkung** (Botulinumtoxin-Hub verlinkt nicht auf Hyaluron-Hub) — Verbindung läuft über Lösungsseiten
