// app/botulinumtoxin/page.tsx
import type { Metadata } from 'next';
import {DetailedInfoSection, ConsultationSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Botulinumtoxin Behandlung Bremen – EL Aesthetics Praxis',
  description:
    'Botulinumtoxin Behandlung in Bremen: Falten (Stirn, Zornesfalte, Krähenfüße), Masseter/Bruxismus, Hyperhidrose & Migräne. Ärztliche Beratung. Natürliche, präzise Ergebnisse.',
  keywords: [
    'botulinumtoxin behandlung',
    'botulinumtoxin injektion',
    'botulinumtoxin a behandlung',
    'botulinum behandlung',
    'botulinumtoxin bremen',
  ],
  openGraph: {
    title: 'Botulinumtoxin Behandlung in Bremen | EL Aesthetics',
    description:
      'Ästhetische & medizinische Botulinumtoxin A Behandlung in Bremen: Falten, Masseter, Schwitzen, Migräne. Individuelle Beratung durch Ärztin.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.elaesthetics-bremen.de/botulinumtoxin',
    siteName: 'EL Aesthetics Bremen',
    images: ['https://www.elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botulinumtoxin Behandlung in Bremen | EL Aesthetics',
    description:
      'Botulinumtoxin A in Bremen für Falten, Masseter, Hyperhidrose & Migräne. Ärztliche Aufklärung, realistische Ergebnisse.',
    images: ['https://www.elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false,
  },
  alternates: {
    canonical: 'https://www.elaesthetics-bremen.de/botulinumtoxin',
  },
};

export default function BotulinumtoxinHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin Behandlung in Bremen',
    subtitle:
      'Ärztliche Botulinumtoxin A Behandlung für Stirn, Zornesfalte & Krähenfüße sowie Masseter/Bruxismus, übermäßiges Schwitzen (Achseln) und chronische Migräne – natürlich, präzise, individuell.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Botulinumtoxin Behandlung in Bremen: Injektion typischer Zonen wie Stirn, Zornesfalte und Krähenfüße bei EL Aesthetics',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontaktn' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Botulinumtoxin?',
    content: [
      'Botulinumtoxin – häufig als „Botox“ bezeichnet – ist ein gut erforschter Wirkstoff, der in der ästhetischen und medizinischen Therapie eingesetzt wird.',
      'Was macht Botulinumtoxin? Es blockiert vorübergehend die Signalübertragung zwischen Nerven und Muskulatur. Dadurch entspannt sich überaktive Muskulatur – Mimikfalten glätten sich, Kaumuskelaktivität kann reduziert werden, Schweißdrüsen werden gehemmt.',
      'Was ist Botulinumtoxin Typ A? Es ist die am häufigsten verwendete Variante und gilt bei sachgerechter Anwendung als sicher. Die Wirkung baut sich nach einigen Monaten vollständig ab.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Botulinumtoxin Behandlungen im Überblick',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Faltenbehandlung mit Botulinumtoxin an Stirn, Zornesfalte und Augenfalten in Bremen',
        title: 'Faltenbehandlung – Stirn, Zornesfalte & Krähenfüße',
        description:
          'Die Botulinumtoxin Behandlung glättet mimische Falten sanft und bewahrt Ihre natürliche Mimik. Ideal für Stirn, Glabella (Zornesfalte) und Augenfalten. Wirkung nach wenigen Tagen, Kontrolle nach ca. 2 Wochen.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Masseter-Behandlung mit Botulinumtoxin zur Entspannung des Kaumuskels in Bremen',
        title: 'Masseter – Jawline harmonisieren & Zähneknirschen lindern',
        description:
          'Gezielte Injektion in den Kaumuskel reduziert Bruxismus und kann die Gesichtsform schlanker wirken lassen. Ergebnis nach 2–4 Wochen, Haltbarkeit ca. 4–6 Monate.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Mesobotox/Microbotox für verfeinerte Poren und ausgeglichene Haut in Bremen',
        title: 'Mesobotox – Hautverfeinerung (Microbotox)',
        description:
          'Sehr oberflächliche Botulinumtoxin Injektion zur Reduktion von Porengröße und Talg, für ebenmäßigere Haut. Sinnvolle Ergänzung zur klassischen Faltenbehandlung.',
        treatmentUrl: '/botulinumtoxin/microbotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-migräne_hero.webp',
        imageAlt: 'Medizinische Botulinumtoxin Migränebehandlung an definierten Punkten in Bremen',
        title: 'Migräne – medizinische Botulinumtoxin Therapie',
        description:
          'Bei chronischer Migräne kann Botulinumtoxin gemäß ärztlicher Indikation Beschwerden reduzieren. Die Kosten können nach Genehmigung durch die Krankenkasse übernommen werden.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
        imageAlt: 'Behandlung gegen starkes Schwitzen (Hyperhidrose) an den Achseln mit Botulinumtoxin in Bremen',
        title: 'Hyperhidrose – Botulinumtoxin gegen Schwitzen',
        description:
          'Wirksam bei übermäßigem Schwitzen an Achseln, Händen oder Füßen. Effekt in der Regel 6–9 Monate. Beratung zu Indikation, Alternativen und Nachsorge inklusive.',
        treatmentUrl: '/botulinumtoxin/hyperhidrose',
      },
    ],
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Anna L.',
      rating: 5,
      text:
        'Ich war unsicher, welche Behandlung für meine Stirnfalten passt. Die Aufklärung war ausführlich – Ergebnis natürlich und harmonisch. Sehr empfehlenswert!',
      date: '2024-09-20',
    },
    {
      id: 2,
      name: 'Markus T.',
      rating: 5,
      text:
        'Die Masseter-Behandlung hat mein Zähneknirschen spürbar reduziert. Auch die Kieferlinie wirkt feiner. Preis-Leistung top.',
      date: '2024-08-15',
    },
    {
      id: 3,
      name: 'Nina K.',
      rating: 5,
      text:
        'Meine chronischen Migräneattacken sind seltener geworden. Die ärztliche Begleitung war sehr strukturiert – klare Empfehlung.',
      date: '2024-07-30',
    },
    {
      id: 4,
      name: 'Stefan H.',
      rating: 5,
      text:
        'Professionelle Beratung zur Botulinumtoxin A Behandlung. Alles transparent erklärt, inklusive möglicher Nebenwirkungen.',
      date: '2024-06-12',
    },
    {
      id: 5,
      name: 'Laura M.',
      rating: 5,
      text:
        'Botulinumtoxin gegen Schwitzen war ein Gamechanger. Endlich Sicherheit im Alltag. Danke!',
      date: '2024-05-18',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Botulinumtoxin Behandlung passt zu Ihnen?',
    description: [
      'In der ärztlichen Beratung in Bremen klären wir Ihre Ziele, prüfen Indikationen und sprechen über Alternativen. Sie erhalten einen individuellen Behandlungsplan inklusive Dosisempfehlung und Kostentransparenz.',
      'Sicherheit zuerst: ausführliche Aufklärung, Dokumentation (Vorher/Nachher-Verlauf ohne Heilsversprechen) und Nachkontrolle. Mögliche Nebenwirkungen und Kontraindikationen werden besprochen.',
      'Typische Preisrahmen (Richtwerte): Falten ab ca. 200 € • Masseter ca. 300–500 € • Mesobotox ab 250 € • Hyperhidrose ca. 400–700 € • Migräne ggf. Kassenleistung bei medizinischer Indikation.',
      'Behandlerin: ärztliche Leitung mit Schwerpunkt ästhetische Medizin. Ergebnisse sind individuell und können variieren.',
    ],
    ctaText: 'Jetzt Beratung vereinbaren',
    ctaHref: '/kontaktn',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliche Beratung zu Botulinumtoxin Behandlungen bei EL Aesthetics in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufig gestellte Fragen zur Botulinumtoxin Behandlung',
    faqs: [
      {
        question: 'Botulinumtoxin – was ist das?',
        answer:
          'Botulinumtoxin ist ein Wirkstoff, der Nervenimpulse an der Injektionsstelle vorübergehend hemmt. Dadurch entspannt sich Muskulatur bzw. Schweißdrüsenaktivität nimmt ab. Einsatz z. B. bei Falten, Bruxismus/Masseter, Hyperhidrose, chronischer Migräne. Nebenwirkungen können u. a. Rötung, Schwellung, kleine Hämatome, Druckgefühl/Kopfschmerz sein; selten Asymmetrien/Ptosis. Vorher/Nachher: Wir dokumentieren den Verlauf, ohne Heilsversprechen. Kosten: je Bereich variabel (siehe unten). Erfahrung/Qualität: ärztliche Aufklärung, sterile Technik, Nachkontrolle. Erwartung: Wirkung nach Tagen, hält Monate, Ergebnisse variieren.',
      },
      {
        question: 'Was macht Botulinumtoxin?',
        answer:
          'Botulinumtoxin blockiert die Freisetzung von Acetylcholin an Nervenendigungen. Das reduziert Muskelzug/Schweißproduktion lokal. Nebenwirkungen: meist mild und vorübergehend; selten unerwünschte Muskelentspannung in benachbarten Arealen. Vorher/Nachher: subtile, natürliche Glättung statt „Masken-Effekt“. Kosten: abhängig von Areal und benötigten Einheiten. Erfahrung: ärztlich geleitete Behandlung mit Dosisanpassung bei Kontrolle. Erwartung: Volleffekt ca. Tag 14.',
      },
      {
        question: 'Was ist Botulinumtoxin Typ A?',
        answer:
          'Typ A ist die in Ästhetik und Medizin am häufigsten eingesetzte Variante. Sie gilt bei korrekter Indikation als sicher und reversibel. Nebenwirkungen/Kontraindikationen werden vorab besprochen (z. B. Schwangerschaft/Stillzeit, neuromuskuläre Erkrankungen). Vorher/Nachher: Verlaufskontrolle nach ca. 2 Wochen. Kosten: siehe Preisrahmen. Expertise: ärztliche Anwendung nach GOÄ. Erwartung: Haltbarkeit je nach Areal 3–9 Monate.',
      },
      {
        question: 'Mögliche Nebenwirkungen?',
        answer:
          'Häufig: vorübergehende Rötung, Schwellung, Hämatom, Spannungsgefühl. Gelegentlich: Kopfschmerz. Selten: Asymmetrien, vorübergehendes Herabsinken einzelner Muskeln. Kontraindikationen werden vorab geprüft. Vorher/Nachher: realistische, natürliche Veränderungen; keine Heilversprechen. Kosten: abhängig von Areal/Einheiten. Erfahrung/Qualität: sterile Technik, Dosierung nach Anatomie, Nachkontrolle inklusive.',
      },
      {
        question: 'Botulinumtoxin Behandlung Vorher/Nachher – was ist zu erwarten?',
        answer:
          'Initiale Wirkung nach 2–5 Tagen, Volleffekt nach ~14 Tagen. Ziel: harmonische, natürliche Entspannung – keine starre Mimik. Wir dokumentieren den Verlauf und bieten bei Bedarf Dosisfeinjustierung. Nebenwirkungen: meist mild/kurzfristig. Kosten: individueller Kostenvoranschlag nach Untersuchung. Erfahrung: ärztliche Leitung & Qualitätsstandards. Erwartung: Haltbarkeit je nach Areal 3–9 Monate; Ergebnisse variieren.',
      },
      {
        question: 'Botulinumtoxin Injektion – was kostet es?',
        answer:
          'Richtwerte: Falten ab ca. 200 €; Masseter ca. 300–500 €; Mesobotox ab 250 €; Hyperhidrose ca. 400–700 €; Migräne ggf. Kassenleistung nach Genehmigung. Abrechnung nach GOÄ. Nebenwirkungen/Erwartungen werden vorab erläutert; Vorher/Nachher-Verlauf ohne Heilsversprechen. Erfahrung: ärztliche Behandlung, sterile Technik, Nachkontrolle.',
      },
      {
        question: 'Botulinumtoxin Injektion Erfahrungen – unsere Expertise',
        answer:
          'Ärztlich geführte Praxis mit Fokus auf ästhetische und ausgewählte medizinische Indikationen. Strukturierte Aufklärung, Fotodokumentation und Nachkontrolle gehören dazu. Nebenwirkungen werden transparent besprochen. Vorher/Nachher: realistische Ziele, natürliche Ergebnisse. Kosten: individueller Plan je Anatomie/Einheiten. Erwartung: Wirkung setzt zeitversetzt ein; Ergebnisse variieren.',
      },
      {
        question: 'Was kostet eine Botulinumtoxin Behandlung insgesamt?',
        answer:
          'Die Gesamtkosten hängen von Areal, benötigten Einheiten und ggf. Kombinationen ab. Sie erhalten nach Untersuchung ein schriftliches Angebot. Nebenwirkungen/Kontraindikationen werden vorab geklärt. Vorher/Nachher: dokumentierter Verlauf, keine Heilversprechen. Erfahrung: ärztliche Durchführung nach GOÄ. Erwartung: Haltbarkeit 3–9 Monate je nach Behandlungsziel.',
      },
      {
        question: 'Wie lange hält die Wirkung?',
        answer:
          'Falten: ca. 3–6 Monate; Masseter: ca. 4–6 Monate; Hyperhidrose: ca. 6–9 Monate; Migräne: Auffrischung häufig alle 3 Monate. Nebenwirkungen üblich gering; Erwartungen werden im Gespräch realistisch eingeordnet. Kosten siehe Richtwerte.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für Ihre Botulinumtoxin Behandlung in Bremen?',
    subtitle:
      'Vereinbaren Sie jetzt Ihr unverbindliches Beratungsgespräch. Wir planen Ihre Botulinumtoxin A Behandlung transparent, sicher und individuell.',
    primaryCTA: { text: 'Jetzt beraten lassen', href: '/kontaktn' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'EL Aesthetics Bremen – Spezialisiert auf Botulinumtoxin Behandlungen',
    description:
      'In unserer Praxis in Bremen bieten wir das gesamte Spektrum der Botulinumtoxin Therapie: Ästhetik (Falten, Masseter, Mesobotox) und medizinische Indikationen (Hyperhidrose, Migräne) – evidenzbasiert und mit hohen Qualitätsstandards.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '+49 155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Mo–Fr 9:00–17:00'],
    },
  };

  // --- Structured Data (JSON-LD) ---
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'EL Aesthetics',
    image: 'https://www.elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp',
    url: 'https://www.elaesthetics-bremen.de/botulinumtoxin',
    email: 'info@elaesthetics-bremen.de',
    telephone: '+49 155 66919635',
    priceRange: '€€',
    areaServed: { '@type': 'City', name: 'Bremen' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Richtepad 14',
      postalCode: '28355',
      addressLocality: 'Bremen',
      addressCountry: 'DE',
    },
    openingHours: 'Mo-Fr 09:00-17:00',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '5', reviewCount: '5' },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <DetailedInfoSection/>
      <TreatmentsSection {...treatmentsData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen mit Botulinumtoxin Behandlungen"
        subtitle="Auszüge echter Patientenstimmen zu Botulinumtoxin Injektionen in Bremen. Individuelle Ergebnisse können variieren."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
