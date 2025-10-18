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
  title: 'PRF Microneedling Bremen | Plasma-Needling für Narben & Poren | EL Aesthetics',
  description:
    'Plasma-Needling in Bremen: Kombination aus Microneedling und PRF-Matrix für Regeneration, feinere Poren, glattere Haut und Aknenarben. Ärztlich durchgeführt.',
  keywords:
    'PRF Microneedling Bremen, Plasma Needling Bremen, PRF Needling Bremen, PRP PRF Needling Bremen, Aknenarben Needling Bremen, Poren verfeinern Bremen, Hautbild verbessern Bremen',
  openGraph: {
    title: 'PRF Microneedling (Plasma-Needling) in Bremen – EL Aesthetics',
    description:
      'Synergie aus Needling und PRF-Matrix: lang anhaltende Wachstumsfaktor-Freisetzung für ein sichtbar verfeinertes Hautbild.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/prf/prf-microneedling-og.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie-prf/microneedling',
  },
};

export default function PRFMicroneedlingPage() {
  const heroData: HeroSectionProps = {
    title: "PRF Microneedling (Plasma-Needling) in Bremen",
    subtitle:
      "Microneedling + PRF-Matrix: Die Kombination für gezielte Regeneration, feinere Poren und ein ebenmäßigeres Hautbild – in ärztlicher Hand.",
    imageSrc: "/assets/eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.png",
    imageAlt: "PRF Microneedling (Plasma-Needling) in der Praxis EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Warum Microneedling mit Eigenblut?",
    content: [
      "Beim Plasma-Needling werden zwei wirksame Verfahren kombiniert: Das Microneedling öffnet mikrofeine Kanäle und triggert die Neubildung von Kollagen und Elastin. Parallel wird eine PRF-Matrix (körpereigenes, plättchenreiches Fibrin) eingesetzt, die Wachstumsfaktoren über einen längeren Zeitraum freisetzen kann.",
      "Die Synergie: Needling setzt den Regenerationsreiz, PRF unterstützt Heilung und Gewebeerneuerung – für glattere Textur, verfeinerte Poren und die gezielte Unterstützung bei Aknenarben.",
      "Die Nadeltiefe sowie die Applikation der PRF-Matrix werden individuell an Hautzustand und Areal angepasst."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Indikationen & Areale",
    categories: [
      {
        category: "Gesicht, Hals & Dekolleté",
        items: [
          { title: "Porenverfeinerung & Textur-Glättung" },
          { title: "Aknenarben & Narbenstrukturen" },
          { title: "Feine Fältchen & Elastizität" },
          { title: "Pigmentunregelmäßigkeiten / Teint" }
        ]
      },
      {
        category: "Körper",
        items: [
          { title: "Dehnungsstreifen (z. B. Bauch, Hüfte, Oberschenkel)" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Plasma-Needling auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.prpPrf.microneedling}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 60–90 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkeintritt", description: "nach 3–5 Behandlungen", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Intervall", description: "Serienabstand ~4 Wochen", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "lokal auf Wunsch", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Downtime", description: "ca. 1–3 Tage", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Preise sind Richtwerte nach GOÄ; individueller Kostenplan im Beratungsgespräch."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer PRF-Microneedling-Behandlung",
    steps: [
      {
        number: "01",
        title: "Beratung & Vorbereitung",
        description:
          "Indikationsprüfung, Hautanalyse und Aufklärung. Optional Anästhesiecreme (Einwirkzeit ~30 Min). Anschließend Blutabnahme und PRF-Herstellung nach Protokoll."
      },
      {
        number: "02",
        title: "Microneedling + PRF-Applikation",
        description:
          "Needling mit einem Präzisions-Pen in geeigneter Eindringtiefe; die PRF-Matrix wird in/auf die Haut eingebracht, um die Regeneration zu unterstützen."
      },
      {
        number: "03",
        title: "Beruhigung & Schutz",
        description:
          "Beruhigende Maske/Abschluss-Pflege und Hinweise zur Nachsorge. Gesamtdauer meist 60–90 Minuten."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Behandlungs­hinweise",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Medikamente",
          description:
            "Nach ärztlicher Rücksprache 1 Woche zuvor möglichst keine blutverdünnenden Mittel (z. B. Ibuprofen, Diclofenac, Aspirin)."
        },
        {
          title: "Koffein, Nikotin, Alkohol",
          description:
            "Mindestens 2 Tage vorab reduzieren/vermeiden; am Behandlungstag komplett darauf verzichten."
        },
        {
          title: "Hydration & Ernährung",
          description:
            "Ausreichend trinken und bitte nicht nüchtern erscheinen; nur behandeln lassen, wenn Sie gesund sind."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        { title: "Hautruhe", description: "Injektions-/Needlingstellen möglichst wenig berühren; Hände vorher reinigen." },
        { title: "Pflege & Make-up", description: "2–3 Tage milde Pflege; 2–3 Tage kein Make-up/Puder." },
        { title: "Kosmetische Eingriffe", description: "7 Tage keine Massagen, Packungen, Peelings." },
        { title: "Hitze & Wasser", description: "7 Tage Sauna, Solarium, Sonnenbäder, Schwimmbad meiden." },
        { title: "Sport", description: "24 Stunden Pause." },
        { title: "Sonne & LSF", description: "Direkte Sonne ca. 2 Wochen meiden; LSF 30–50 verwenden." }
      ]
    }
  };

  const reviews: Review[] = [
    { id: 1, name: "Mareike B.", rating: 5, text: "Poren sichtbar feiner, Haut praller. Sehr transparente Aufklärung!", date: "2024-09-12" },
    { id: 2, name: "Tina S.", rating: 5, text: "Nach der 3. Sitzung deutliche Verbesserung der Aknenarben. Downtime war kurz.", date: "2024-08-23" },
    { id: 3, name: "Jana F.", rating: 5, text: "Professionell, verträglich und natürlich wirkend – klare Empfehlung.", date: "2024-07-19" }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre persönliche Beratung in Bremen",
    description: [
      "Wir prüfen, ob Plasma-Needling die passende Option für Ihre Indikation ist und definieren realistische Ziele.",
      "Nadeltiefe und PRF-Applikation werden individuell festgelegt; Sie erhalten klare Empfehlungen zu Anzahl und Intervallen der Sitzungen.",
      "Transparenz zu Erwartungsmanagement, Regenerationszeit und Pflege inklusive."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets/tinified/IMG_7364.webp",
    imageAlt: "Beratung zu PRF Microneedling in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Behandlungen mit Eigenblut",
    treatments: [
      {
        imageUrl: "/assets/medizinisches-microneedling/medizinisches-microneedling_hero.png",
        imageAlt: "Medizinisches Microneedling mit Dermapen 4 ohne PRF",
        title: "Medizinisches Microneedling ohne PRF",
        description:
          "Kollagen-Induktion ohne PRF-Matrix – sinnvoll, wenn eine reine Needling-Serie ausreicht.",
        treatmentUrl: "/medizinisches-microneedling"
      },
      {
        imageUrl: "/assets/eigenbluttherapie-prf/eigenbluttherapie-prf-vampire-lifting_hero.png",
        imageAlt: "Gesicht einer Frau bei einer PRF-Eigenbluttherapie",
        title: "PRF-Eigenbluttherapie (Vampire Lifting)",
        description:
          "Eigenbluttherapie als reine Injektionsbehandlung – ohne Needling; für fokussierte Areale.",
        treatmentUrl: "/eigenbluttherapie-prf/vampire-lifting"
      },
      {
        imageUrl: "/assets/eigenbluttherapie-prf/eigenbluttherapie-prf-haare_hero.png",
        imageAlt: "PRF-Therapie bei Haarausfall",
        title: "PRF bei Haarausfall",
        description:
          "Spezielle PRF-Anwendung für die Kopfhaut zur Unterstützung des Haarwuchses.",
        treatmentUrl: "/eigenbluttherapie-prf/haare"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "FAQ zu PRF Microneedling (Plasma-Needling)",
    faqs: [
      {
        question: "Worin unterscheidet sich PRF Microneedling von medizinischem Microneedling?",
        answer:
          "Beim Plasma-Needling wird zusätzlich eine PRF-Matrix (körpereigenes, plättchenreiches Fibrin) eingesetzt. Sie kann Wachstumsfaktoren über längere Zeit freisetzen und die Regeneration verstärken. Reines medizinisches Needling arbeitet ohne PRF."
      },
      {
        question: "Worin unterscheidet es sich von einer PRF-Injektion?",
        answer:
          "PRF-Injektionen bringen die Matrix direkt per Nadel in definierte Areale. Beim Plasma-Needling wird PRF über die erzeugten Mikrokanäle verteilt und ggf. kombiniert; ideal zur Textur-Verbesserung und Porenverfeinerung."
      },
      {
        question: "Wie viele Sitzungen sind sinnvoll und wann zeigt sich ein Effekt?",
        answer:
          "Üblich sind 3–5 Behandlungen im Abstand von ca. 4 Wochen. Verbesserungen entwickeln sich über Wochen; die sichtbare Textur-Optimierung verstärkt sich im Verlauf der Serie."
      },
      {
        question: "Welche Nebenwirkungen sind möglich?",
        answer:
          "Vorübergehende Rötung, Schwellung oder feine Schürfungen sind möglich. Die Ausfallzeit liegt meist bei 1–3 Tagen und hängt von der Eindringtiefe ab."
      },
      {
        question: "Gibt es Kontraindikationen?",
        answer:
          "Akute Entzündungen/Infektionen im Behandlungsareal, Störungen der Blutgerinnung sowie Schwangerschaft/Stillzeit. Wir prüfen dies vorab im Gespräch."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für Plasma-Needling?",
    subtitle: "Vereinbaren Sie Ihren Termin für PRF Microneedling in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "EL Aesthetics – PRF Microneedling in Bremen",
    description:
      "Wir kombinieren präzises Needling mit moderner PRF-Matrix für natürliche, verträgliche Ergebnisse.",
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
        subtitle="Echo aus der Praxis: Ablauf, Verträglichkeit und Ergebnisentwicklung in Bremen."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
