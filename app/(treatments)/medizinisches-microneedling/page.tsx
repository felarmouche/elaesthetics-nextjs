import type { Metadata } from 'next';
import {
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  LocationSection,
  LocationSectionProps,
  ProcessSection,
  ProcessSectionProps,
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Medizinisches Microneedling Bremen | Narben, Poren & Hautbild | EL Aesthetics',
  description:
    'Ärztlich geführtes Microneedling in Bremen: individuell angepasste Nadeltiefe zur Verbesserung von Aknenarben, Poren, Pigmentunregelmäßigkeiten & Hautstruktur. Schonend und effektiv.',
  keywords:
    'Medizinisches Microneedling Bremen, Microneedling Bremen, Dermapen Bremen, Aknenarben behandeln Bremen, Poren verfeinern Bremen, Dehnungsstreifen Bremen, Hautbild verbessern Bremen, Rosazea Microneedling Bremen',
  openGraph: {
    title: 'Medizinisches Microneedling in Bremen – EL Aesthetics',
    description:
      'Schonende Kollagen-Induktion mit individuell angepasster Nadeltiefe. Für Aknenarben, Porenverfeinerung und ebenmäßiges Hautbild – in ärztlicher Hand.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets//microneedling/og-microneedling-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/medizinisches-microneedling',
  },
};

export default function MedizinischesMicroneedlingPage() {
  const heroData: HeroSectionProps = {
    title: "Medizinisches Microneedling in Bremen",
    subtitle:
      "Schonende Kollagen-Induktion für ein glatteres, feinporiges Hautbild – individuell, präzise und in ärztlicher Hand.",
    imageSrc: "/assets//medizinisches-microneedling/medizinisches-microneedling_hero.webp",
    imageAlt: "Medizinisches Microneedling in der Praxis EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Medizinisches Microneedling (Kollagen-Induktionstherapie) – kurz erklärt",
    content: [
      "Medizinisches Microneedling (auch als Kollagen-Induktionstherapie bekannt) ist ein fortschrittliches, minimal-invasives Verfahren, das die natürliche Regenerationsfähigkeit Ihrer Haut gezielt nutzt. Mithilfe eines speziellen Dermapens oder Dermarollers werden feinste, sterile Nadeln kontrolliert in tiefere Hautschichten eingebracht. Diese mikroskopisch kleinen „Verletzungen“ setzen eine intensive Wundheilungskaskade in Gang, ohne die Oberhaut zu zerstören.",
      "Kollagen und Elastin werden gebildet, die Haut soll glatter erscheinen - Poren und feine Aknenarben minimiert werden.",
      "Kosmetisches Needling bleibt dagegen oberflächlicher und sorgt vor allem für einen kurzfristigen „Glow“. Kurz gesagt: Gezielte Therapie statt reiner Schönheitsroutine."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Behandlungsareale & Indikationen",
    categories: [
      {
        category: "Gesicht, Hals & Dekolleté",
        items: [
          { title: "Aknenarben & Narbenstrukturen" },
          { title: "Feinere Poren & glatteres Hautbild" },
          { title: "Feine Linien & beginnende Fältchen" },
          { title: "Pigmentunregelmäßigkeiten / Teint" }
        ]
      },
      {
        category: "Körper",
        items: [
          { title: "Dehnungsstreifen (z. B. Bauch, Hüfte, Oberschenkel)" },
          { title: "Allgemeine Hautstraffung / Bindegewebe" }
        ]
      },
      {
        category: "Kopfhaut",
        items: [
          { title: "Unterstützung bei Haarausfall / Anregung des Haarwachstums" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Microneedling auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.medizinischesMicroneedling}€*`, iconUrl: "/assets//icons/EUR.svg" },
      { title: "Dauer", description: "ca. 60 Min", iconUrl: "/assets//icons/TIME.svg" },
      { title: "Sitzungen", description: "3–6 Behandlungen, alle ~4 Wochen", iconUrl: "/assets//icons/wiederholung.svg" },
      { title: "Auffrischung", description: "empfohlen nach ~6 Monaten", iconUrl: "/assets//icons/CAL.svg" },
      { title: "Betäubung", description: "i. d. R. nicht nötig (auf Wunsch)", iconUrl: "/assets//icons/Spritze.svg" },
      { title: "Downtime", description: "gesellschaftsfähig nach 1–3 Tagen", iconUrl: "/assets//icons/gesellschaft.svg" }
    ],
    note: "*Preise sind Richtwerte nach GOÄ und werden im Beratungsgespräch individuell festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Behandlung",
    steps: [
      {
        number: "01",
        title: "Beratung & Hautanalyse",
        description:
          "Wir bewerten Indikation, Hautzustand und Ziele. Daraus leiten wir Nadeltiefe, Areale und sinnvolle Wirkstoff-Kombinationen ab."
      },
      {
        number: "02",
        title: "Vorbereitung",
        description:
          "Reinigung und Desinfektion, optional lokale Anästhesiecreme. Make-up wird entfernt."
      },
      {
        number: "03",
        title: "Microneedling",
        description:
          "Mit einem Präzisions-Pen entstehen feine Mikrokanäle. Die Eindringtiefe wird areal- und hauttypgerecht angepasst; optional werden Wirkstoffe wie Hyaluron oder PRF eingebracht."
      },
      {
        number: "04",
        title: "Beruhigung & Schutz",
        description:
          "Beruhigende Maske und Pflege. Hinweise zur Nachsorge und Lichtschutz. Gesamtdauer meist ca. 60 Minuten."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Behandlungs­hinweise",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutgerinnung & Haut",
          description:
            "Nach ärztlicher Rücksprache blutverdünnende Mittel möglichst 7 Tage pausieren. Solarium und aggressive Peelings vorab meiden."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        { title: "Schonung", description: "1–2 Tage kein Sport, keine Sauna." },
        { title: "UV-Schutz", description: "Konsequenter Lichtschutz (mind. LSF 30) für die Folgewoche(n)." },
        { title: "Hautpflege", description: "Reizende Wirkstoffe (Säuren, Retinoide etc.) für einige Tage aussetzen." }
      ]
    }
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Lea W.",
      rating: 5,
      text: "Sehr verträglich und professionell durchgeführt. Meine Aknenarben wirken feiner, das Hautbild gleichmäßiger.",
      date: "2024-09-15"
    },
    {
      id: 2,
      name: "Anna W.",
      rating: 5,
      text: "Top Aufklärung, natürliche Ergebnisse. Nach drei Sitzungen deutlich kleinere Poren und frischer Teint.",
      date: "2024-08-20"
    },
    {
      id: 3,
      name: "Yasmin E.",
      rating: 5,
      text: "Sanfte Behandlung, gute Nachsorgehinweise. Nach zwei Tagen wieder voll gesellschaftsfähig.",
      date: "2024-07-10"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre individuelle Microneedling-Beratung in Bremen",
    description: [
      "Wir prüfen Eignung, Indikation und Hautverträglichkeit und definieren realistische Ziele.",
      "Die Nadeltiefe wird für jedes Areal individuell festgelegt; bei Bedarf kombinieren wir geeignete Wirkstoffe (z. B. Hyaluron oder PRF).",
      "Sie erhalten klare Empfehlungen zu Behandlungsintervallen, erwartbarer Wirkung und Nachsorge."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets//tinified/IMG_7364.webp",
    imageAlt: "Beratung zum medizinischen Microneedling in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Verwandte Behandlungen",
    treatments: [
      {
        imageUrl: "/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.webp",
        imageAlt: "PRF Plasma-Needling zur Intensivierung",
        title: "PRF-Microneedling (Plasma-Needling)",
        description:
          "Kombination aus Needling und körpereigenem Plasma (PRF/PRP) zur zusätzlichen Regenerations-Stimulation.",
        treatmentUrl: "/eigenbluttherapie-prf/microneedling"
      },
      {
        imageUrl: "/assets//mesotherapie/mesotherapie-haut_hero.webp",
        imageAlt: "Mesotherapie für Hautqualität",
        title: "Mesotherapie (Haut)",
        description:
          "Fein dosierte Wirkstoff-Cocktails für Glow, Feuchtigkeit und Hautqualität – ergänzend oder alternativ.",
        treatmentUrl: "/mesotherapie"
      },
      {
        imageUrl: "/assets//chemisches-peeling/chemisches-peeling_hero.webp",
        imageAlt: "Chemisches Peeling",
        title: "Chemisches Peeling",
        description:
          "Peelings unterschiedlicher Stärke für Teint-Verfeinerung und Pigmentausgleich.",
        treatmentUrl: "/chemisches-peeling"
      },
      {
        imageUrl: "/assets//hyaluron/hyaluron-skinbooster_hero.webp",
        imageAlt: "Skinbooster",
        title: "Skinbooster",
        description:
          "Intensive, langanhaltende Durchfeuchtung mittels unvernetzter Hyaluronsäure.",
        treatmentUrl: "/hyaluron/skinbooster"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zum Microneedling",
    faqs: [
      {
        question: "Was ist der Unterschied zwischen medizinischem und kosmetischem Microneedling?",
        answer:
          "Kosmetisches Needling arbeitet meist bis ~0,5 mm und wirkt v. a. oberflächlich. Medizinisches Needling nutzt je nach Areal ca. 0,5–3 mm, triggert gezielt Regeneration und Kollagenneubildung und gehört in ärztliche Hände."
      },
      {
        question: "Für wen ist Microneedling geeignet?",
        answer:
          "Für viele Hauttypen und -töne geeignet – u. a. bei Aknenarben, Porenvergrößerung, feinen Linien, Pigmentunregelmäßigkeiten, Dehnungsstreifen sowie zur Unterstützung des Haarwuchses."
      },
      {
        question: "Wie oft sollte behandelt werden und wann sehe ich Ergebnisse?",
        answer:
          "Meist 3–6 Sitzungen im Abstand von etwa 4 Wochen. Erste Verbesserungen sind oft früh sichtbar, das finale Hautbild entwickelt sich über Wochen bis Monate. Auffrischungen nach ~6 Monaten sind sinnvoll."
      },
      {
        question: "Welche Nebenwirkungen sind möglich?",
        answer:
          "Vorübergehende Rötung/Schwellung wie nach leichtem Sonnenbrand, gelegentlich kleine Hämatome oder feine Krusten — klingen in der Regel binnen weniger Tage ab."
      },
      {
        question: "Gibt es Kontraindikationen?",
        answer:
          "Akute Hauterkrankungen/Entzündungen, frische Narben, bakterielle Infektionen, bekannte Gerinnungsstörungen; besondere Vorsicht bei bestimmten Vorerkrankungen/Medikamenten. In Schwangerschaft/Stillzeit sowie während Chemo-/Strahlentherapie nicht behandeln."
      },
      {
        question: "Was ist Plasma-Needling (PRF/PRP)?",
        answer:
          "Dabei wird körpereigenes, plättchenreiches Plasma auf/in die Haut gebracht (z. B. in Kombination mit Needling), um Regeneration und Zellneubildung zusätzlich anzuregen."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für ein ebenmäßigeres Hautbild?",
    subtitle: "Vereinbaren Sie Ihren Termin für medizinisches Microneedling in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "EL Aesthetics – Medizinisches Microneedling in Bremen",
    description:
      "In unserer Praxis kombinieren wir ärztliche Sorgfalt mit moderner Needling-Technologie für sichere, natürliche Ergebnisse.",
    location: {
      address: "Richtepad 14, 28355 Bremen",
      phone: "0155 66919635",
      email: "info@elaesthetics-bremen.de",
      openingHours: ["Termine nach Vereinbarung"]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patient:innen"
        subtitle="Echte Eindrücke zu Verträglichkeit, Ergebnisentwicklung und Betreuung in unserer Praxis in Bremen."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}
