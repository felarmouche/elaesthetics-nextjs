// lib/schema.ts — Central Schema.org helpers for JSON-LD structured data

import { PRICES } from "./constants";

const SITE_URL = 'https://elaesthetics-bremen.de';

export interface PracticeSchema {
  '@type': string;
  '@id': string;
  name: string;
  [key: string]: unknown;
}

/**
 * WebSite entity with @id: "#website"
 * Injected once in root layout @graph. Enables sitelinks and entity recognition.
 */
export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': '#website',
    name: 'EL Aesthetics Bremen',
    url: SITE_URL,
    inLanguage: 'de-DE',
    publisher: { '@id': '#practice' },
  };
}

/**
 * Physician entity with @id: "#physician"
 * Injected once in root layout @graph, referenced via { "@id": "#physician" }.
 */
export function getPhysicianSchema() {
  return {
    '@type': 'Physician',
    '@id': '#physician',
    name: 'Ola El-Armouche',
    medicalSpecialty: 'Dermatology',
    telephone: '+4915566919635',
    image: `${SITE_URL}/assets/Profilbild engere auswahl/IMG_7336.webp`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Richtepad 14',
      addressLocality: 'Bremen',
      addressRegion: 'HB',
      postalCode: '28355',
      addressCountry: 'DE',
    },
    priceRange: '€€',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Mitgliedschaft',
      recognizedBy: {
        '@type': 'MedicalOrganization',
        name: 'Deutsche Gesellschaft für ästhetische Botulinum-Toxin-Therapie (DGBT)',
      },
    },
    memberOf: {
      '@type': 'MedicalOrganization',
      name: 'Ärztekammer Bremen',
    },
    worksFor: { '@id': '#practice' },
  };
}

/**
 * Central MedicalClinic entity with @id: "#practice"
 * Injected once in root layout, referenced via { "@id": "#practice" } on all pages.
 */
export function getPracticeSchema(aggregateRating?: { ratingValue: number; reviewCount: number }) {
  return {
    '@type': 'MedicalClinic', // More specific than MedicalBusiness
    '@id': '#practice',
    name: 'EL Aesthetics',
    image: `${SITE_URL}/assets/tinified/IMG_7295.webp`, // Updated: Representative clinic image
    logo: `${SITE_URL}/assets/logo-el-gemini.webp`, // Added: Logo property
    medicalSpecialty: 'Dermatology',
    telephone: '+4915566919635',
    email: 'info@elaesthetics-bremen.de',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Richtepad 14',
      addressLocality: 'Bremen',
      addressRegion: 'HB',
      postalCode: '28355',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.1057,
      longitude: 8.9006,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    sameAs: [
      'https://www.instagram.com/elaesthetics_bremen',
      // TODO: Google Maps URL ergänzen (Format: https://maps.app.goo.gl/... oder https://www.google.com/maps/place/...)
      // Der Share-Link https://share.google/srtHTJ0J1WaMjLJe3 ist ein Redirect und keine kanonische Profil-URL.
      // Bitte die Google Maps URL aus dem Google Business Profile kopieren.
    ],
    priceRange: '€€',
    physician: { '@id': '#physician' },
    ...(aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
    availableService: [
      { '@type': 'MedicalProcedure', name: 'Faltenbehandlung mit Botulinumtoxin', url: `${SITE_URL}/botulinumtoxin/faltenbehandlung` },
      { '@type': 'MedicalProcedure', name: 'Hyaluron-Filler', url: `${SITE_URL}/hyaluron/filler` },
      { '@type': 'MedicalProcedure', name: 'Skinbooster', url: `${SITE_URL}/hyaluron/skinbooster` },
      { '@type': 'MedicalProcedure', name: 'Profhilo', url: `${SITE_URL}/hyaluron/profhilo` },
      { '@type': 'MedicalProcedure', name: 'Masseter-Behandlung', url: `${SITE_URL}/botulinumtoxin/masseter` },
      { '@type': 'MedicalProcedure', name: 'Eigenbluttherapie (PRP/PRF)', url: `${SITE_URL}/eigenbluttherapie` },
      { '@type': 'MedicalProcedure', name: 'Biostimulation', url: `${SITE_URL}/biostimulation` },
      { '@type': 'MedicalProcedure', name: 'Polynukleotide', url: `${SITE_URL}/polynukleotide` },
      { '@type': 'MedicalProcedure', name: 'Chemisches Peeling', url: `${SITE_URL}/chemisches-peeling` },
      { '@type': 'MedicalProcedure', name: 'Fett-weg-Spritze', url: `${SITE_URL}/fett-weg-spritze` },
    ],
  };
}

/**
 * MedicalWebPage schema for hub pages (Template A)
 */
export function getWebPageSchema(params: {
  name: string;
  description: string;
  url: string;
  about?: {
    type: string;
    name: string;
    procedureType?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    inLanguage: 'de-DE',
    isPartOf: {
      '@type': 'WebSite',
      name: 'EL Aesthetics Bremen',
      url: SITE_URL,
    },
    provider: { '@id': '#practice' },
    ...(params.about && {
      about: {
        '@type': params.about.type,
        name: params.about.name,
        ...(params.about.procedureType && {
          procedureType: params.about.procedureType,
        }),
      },
    }),
  };
}

/**
 * MedicalProcedure / CosmeticProcedure schema for spoke pages (Template B)
 */
export function getMedicalProcedureSchema(params: {
  name: string;
  procedureType?: string;
  bodyLocation?: string;
  description: string;
  howPerformed?: string;
  type?: 'MedicalProcedure' | 'CosmeticProcedure';
}) {
  return {
    '@type': params.type || 'MedicalProcedure',
    name: params.name,
    procedureType: params.procedureType || 'NoninvasiveProcedure',
    ...(params.bodyLocation && { bodyLocation: params.bodyLocation }),
    description: params.description,
    ...(params.howPerformed && { howPerformed: params.howPerformed }),
    preparation: 'Individuelles Beratungsgespräch und Anamnese',
    recognizingAuthority: {
      '@type': 'MedicalOrganization',
      name: 'Ärztekammer Bremen',
    },
    provider: { '@id': '#practice' }, // Added: Link back to practice
  };
}

/**
 * FAQPage schema from FAQ array
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

/**
 * Price list schema for preise/page.tsx
 * Creates ItemList with Offer entities from PRICES constant
 */
export function getPriceListSchema() {
  const offers = [
    // Botulinumtoxin
    { name: 'Botulinumtoxin Faltenbehandlung (1 Zone)', desc: 'Zornesfalte, Stirnfalten oder Krähenfüße', price: PRICES.botulinum.faltenbehandlung.zone1 },
    { name: 'Botulinumtoxin Faltenbehandlung (2 Zonen)', desc: 'Kombination zweier Gesichtsregionen', price: PRICES.botulinum.faltenbehandlung.zone2 },
    { name: 'Botulinumtoxin Faltenbehandlung (3 Zonen)', desc: 'Umfassende Gesichtsbehandlung', price: PRICES.botulinum.faltenbehandlung.zone3 },
    { name: 'Weitere ästhetische Botulinumtoxin-Behandlungen', desc: 'Bunny Lines, Erdbeerkinn, Augenbrauen-Lift etc.', price: PRICES.botulinum.aesthetikWeitere },
    { name: 'Nefertiti Lift (Kinn/Kinnlinie)', desc: 'Straffung und Konturierung der Kinnregion', price: PRICES.botulinum.nefertiti.kinn },
    { name: 'Nefertiti Lift (Kinn, Kinnlinie, Hals)', desc: 'Umfassende Hals- und Kinnstraffung', price: PRICES.botulinum.nefertiti.kinnKinnlinieHals },
    { name: 'Face-Slimming / Masseter-Behandlung', desc: 'Gesichtsverschlankung durch Kaumuskelreduktion', price: PRICES.botulinum.faceSlimming },
    { name: 'Mesobotox / Microbotox', desc: 'Glass Skin-Effekt und sanfte Faltenreduktion', price: PRICES.botulinum.microBotox },
    { name: 'Masseter-Behandlung (Bruxismus)', desc: 'Behandlung bei Zähneknirschen', price: PRICES.botulinum.masseter },
    { name: 'Migräne-Behandlung mit Botulinumtoxin', desc: 'Prophylaktische Migränebehandlung', price: PRICES.botulinum.migraene },
    { name: 'Hyperhidrose-Behandlung', desc: 'Behandlung gegen übermäßiges Schwitzen', price: PRICES.botulinum.hyperhidrose },

    // Hyaluronsäure & Hautverbesserung
    { name: 'Hyaluron-Filler / Liquid Lifting', desc: 'Volumenaufbau und Faltenunterspritzung', price: PRICES.hyaluronFiller.fillerUnterspritzung },
    { name: 'Hyaluronidase', desc: 'Auflösung von Hyaluronsäure', price: PRICES.hyaluronFiller.hyaluronidase },
    { name: 'Profhilo', desc: 'Bio-Remodelling mit hochkonzentrierter Hyaluronsäure', price: PRICES.hyaluronFiller.profhilo },
    { name: 'Skinbooster (1 ml)', desc: 'Hautdurchfeuchtung mit unvernetzter Hyaluronsäure', price: PRICES.hyaluronFiller.skinbooster1ml },
    { name: 'Skinbooster (2 ml)', desc: 'Intensive Biorevitalisierung für Gesicht, Hals oder Dekolleté', price: PRICES.hyaluronFiller.skinbooster2ml },
    { name: 'Biorevitalisierung mit hochreiner Hyaluronsäure', desc: 'Hochwertige Hautauffrischung', price: PRICES.hyaluronFiller.biorevitalisierungHyaluron },
    { name: 'Mesotherapie (Haut)', desc: 'Wirkstoff-Cocktails mit Vitaminen und Aminosäuren', price: PRICES.hyaluronFiller.mesotherapieHaut },
    { name: 'Polynukleotide', desc: 'DNA-basierte Hautregeneration für Gesicht, Augen oder Haare', price: PRICES.hyaluronFiller.polynukleotideHautAugenHaare },
    { name: 'Chemisches Peeling', desc: 'Hauterneuerung ohne Photosensibilisierung', price: PRICES.hyaluronFiller.chemischesPeeling },

    // Eigenbluttherapie & Microneedling
    { name: 'PRF/PRP Eigenbluttherapie', desc: 'Biostimulation für Haut und Haare', price: PRICES.prpPrf.prpPrf },
    { name: 'PRF-Microneedling', desc: 'Kombination aus Needling und Eigenblut', price: PRICES.prpPrf.microneedling },
    { name: 'Medizinisches Microneedling', desc: 'Kollagen-Induktionstherapie für Narben und Hautstruktur', price: PRICES.medizinischesMicroneedling },

    // Haarbehandlungen
    { name: 'PRP/PRF für Haare', desc: 'Eigenbluttherapie gegen Haarausfall', price: PRICES.haare.prpPrf },
    { name: 'Mesotherapie für Haare', desc: 'Wirkstoffinjektionen für die Kopfhaut', price: PRICES.haare.mesotherapie },
    { name: 'Polynukleotide für Haare (2 ml)', desc: 'DNA-basierte Haarregeneration', price: PRICES.haare.polynukleotide2ml },

    // Weitere Behandlungen
    { name: 'Fett-weg-Spritze (Injektionslipolyse)', desc: 'Dauerhafte Fettzellreduktion', price: PRICES.fettWegSpritze },
    { name: 'Biostimulation (CaHA + Hyaluronsäure)', desc: 'Biostimulator für Hautstraffung und Kollagenaufbau', price: PRICES.biostimulation.caHydroxylapatitPlusHyaluron },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Preisliste ästhetische Behandlungen',
    description: 'Preise für ästhetische und medizinische Behandlungen bei EL Aesthetics Bremen',
    provider: { '@id': '#practice' },
    itemListElement: offers.map((offer, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Offer',
        name: offer.name,
        description: offer.desc,
        priceCurrency: 'EUR',
        price: offer.price.toString(),
        availability: 'https://schema.org/InStock',
        seller: { '@id': '#practice' },
      },
    })),
  };
}