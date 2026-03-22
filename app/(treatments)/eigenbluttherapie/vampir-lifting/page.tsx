import type { Metadata } from 'next';
import Script from 'next/script';
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSection,
  HubTeaserSection,
  TableOfContents,
  TOCItem,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  ProcessSection,
  ProcessSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Vampir Lifting Bremen – PRF Glow',
  description:
    'Vampir Lifting / Plasma-Lifting in Bremen: Eigenblut-Behandlung für Hautqualität & Glow. Infos zu Ablauf, Wirkung & Kosten. Jetzt beraten lassen.',
  keywords: ['Vampir Lifting Bremen', 'Plasma Lifting Bremen', 'Vampire Facial Bremen', 'PRF Hautbehandlung Bremen', 'Eigenblut Glow Bremen'],
  openGraph: {
    title:
      'Vampir Lifting Bremen | PRF-Plasma für Glow | EL Aesthetics',
    description:
      'Vampir Lifting / Plasma-Lifting in Bremen: Eigenblut-Behandlung für Hautqualität & Glow. Infos zu Ablauf, Wirkung & Kosten.',
    url: 'https://elaesthetics-bremen.de/eigenbluttherapie/vampir-lifting',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/prf/og-prf-vampire-lifting-haut-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/vampir-lifting',
  },
};

export default function VampirLiftingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Vampir Lifting (PRF) in Bremen',
          description: 'Ärztliche Eigenbluttherapie (PRF/PRP) für Hautregeneration und natürliches Lifting.',
          url: '/eigenbluttherapie/vampir-lifting',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Vampir Lifting mit PRF/PRP',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Eigenbluttherapie (PRF/PRP) zur Hautregeneration und Verbesserung der Hautqualität durch autologes Plasma.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Vampir Lifting in Bremen',
    subtitle:
      'Natürliches Lifting ohne Filler: Vampire Facial / Plasma-Lifting zur Unterstützung der Hautqualität und eines frischen Hautbilds.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Vampir Lifting mit Eigenblut-Plasma für Glow – EL Aesthetics Bremen',
    primaryCTA: { text: 'Hautanalyse anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Vampir Lifting – was ist das?',
    content: [
      'Das Vampir Lifting (Vampire Facial) ist ein nicht-chirurgisches Verfahren der ästhetischen Medizin, bei dem körpereigenes Plasma zur Unterstützung der Hautregeneration und Verbesserung der Hautqualität eingesetzt wird.',
      'Die Behandlung kann die natürlichen Regenerationsprozesse der Haut unterstützen und so zu einer Verbesserung von Hautqualität und Hautbild beitragen. Sie wird unter anderem bei ungleichmäßiger Hautstruktur, erweiterten Poren, feinen Linien, Aknenarben, Pigmentunregelmäßigkeiten und dunklen Schatten unter den Augen eingesetzt.',
      'Auch unreine und empfindliche Haut kann von der Behandlung profitieren.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Ziele',
    categories: [
      {
        category: 'Gesicht & Dekolleté',
        items: [
          { title: 'Augenbereich (Augenringe/Tränenrinne)', description: 'Unterlid, feine Linien – behutsame und präzise Anwendung' },
          { title: 'Gesicht gesamt', description: 'Wangen, Stirn, Schläfen – für ein harmonischeres Hautbild' },
          { title: 'Nasolabial-/Marionettenzone', description: 'Zur Unterstützung von Hautqualität und Ebenmäßigkeit' },
          { title: 'Dekolleté', description: 'Für ein glatter und gepflegt wirkendes Erscheinungsbild' },
        ],
      },
      {
        category: 'Ästhetische Hautziele',
        items: [
          { title: 'Verfeinerung und Unterstützung eines ebenmäßigeren Hautbildes' },
          { title: 'Feiner erscheinende Poren' },
          { title: 'Unterstützung bei feinen Linien und ersten Fältchen' },
          { title: 'Verbesserung der Hauttextur' },
          { title: 'Minderung ungleichmäßiger Pigmentierungen' },
          { title: 'Begleitende Behandlung atropher Aknenarben' },
        ],
      },
      {
        category: 'Hautqualität & Revitalisierung',
        items: [
          { title: 'Unterstützung natürlicher Regenerationsprozesse der Haut' },
          { title: 'Unterstützung der Kollagen- und Elastinbildung' },
          { title: 'Mehr Spannkraft und ein straffer wirkendes Hautbild' },
          { title: 'Verbesserung der Hautqualität und des Hautgefühls' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Vampir Lifting auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.prpPrf.prpPrf}€ pro Sitzung*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 90-120 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Serie', description: '4–6 Sitzungen, Abstand ~4–6 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Wirkeintritt', description: 'nach ca. 2-3 Behandlungen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '* Richtwert; Abrechnung nach GOÄ. Der konkrete Betrag wird im Beratungstermin individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf vom Vampire‑Lift',
    steps: [
      { number: '01', title: 'Hautanalyse & Aufklärung', description: 'In einem Beratungsgespräch wird die Eignung für die Behandlung geprüft und der Ablauf besprochen.' },
      { number: '02', title: 'Vorbereitung', description: 'Auf Wunsch Oberflächenbetäubung; Entnahme und Aufbereitung körpereigener Bestandteile.' },
      { number: '03', title: 'Injektion', description: 'Matrix wird mit einer feinen Nadel in Abständen von ca. 1 cm in die betroffenen Bereiche der Haut injiziert.' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor‑ und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '1 Woche vorher keine blutverdünnenden Medikamente einnehmen (z. B. Ibuprofen, Diclofenac, Aspirin). Rücksprache mit Ihrem behandelnden Arzt halten.' },
        { title: 'Koffein/Nikotin/Alkohol', description: 'Verzicht auf Kaffee, koffeinhaltige Getränke, Nikotin und Alkohol mindestens 2 Tage vorher. Am Behandlungstag komplett darauf verzichten.' },
        { title: 'Hydration & Gesundheit', description: 'Ausreichend trinken, leichte Mahlzeit; nur gesund erscheinen.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Schonung', description: 'Areale möglichst wenig berühren; 24 Std. kein Sport.' },
        { title: 'Pflege', description: '2–3 Tage milde Produkte; 2–3 Tage kein Make-up/Puder.' },
        { title: 'Behandlungen', description: '7 Tage keine Massagen/Peelings/energetischen Verfahren.' },
        { title: 'Hitze/UV/Wasser', description: '7 Tage Sauna, Solarium, Sonne, Schwimmbad meiden; mindestens LSF 50 verwenden.' },
        { title: 'Sport', description: '1 Tag auf Sport verzichten.' },
      ],
    },
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Sinnvolle Alternativen & Kombinationen',
    treatments: [
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
        imageAlt: 'Microneedling (Regeneration)',
        title: 'Microneedling (Regeneration)',
        description: 'Mechanischer Reiz zur Textur‑Optimierung; optional zeitversetzte Kombination möglich.',
        treatmentUrl: '/eigenbluttherapie/microneedling',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Hyaluron Skinbooster',
        title: 'Hyaluron Skinbooster',
        description: 'Feuchtigkeits‑Boost für Glow und Elastizität – Ergänzung ohne Volumenaufbau.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide (PN)',
        title: 'Polynukleotide (PN)',
        description: 'Biostimulation zur Unterstützung der Hautqualität – allein oder kombiniert.',
        treatmentUrl: '/polynukleotide',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zum Vampir Lifting',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Vampir Lifting und Vampire Facial?',
        answer:
          'Beide Begriffe werden häufig synonym verwendet. Gemeint ist eine ästhetische Behandlung, die körpereigene Bestandteile nutzt, um die Hautregeneration zu unterstützen. Details zur Eigenblut‑Methodik erläutern wir in der Beratung.',
      },
      {
        question: 'Wie viele Sitzungen sind sinnvoll – und wann sehe ich etwas?',
        answer:
          'Empfohlen werden 4–6 Sitzungen im Abstand von etwa 4–6 Wochen. Erste Verbesserungen (volleres, rosigeres Hautgefühl) sind häufig nach 1–2 Wochen spürbar; sichtbare Optimierungen verstärken sich im Verlauf der Serie.',
      },
      {
        question: 'Wie lange halten die Ergebnisse an?',
        answer:
          'Nach einer vollständigen Behandlungsserie halten die Ergebnisse in der Regel 1–2 Jahre. Faktoren wie Rauchen, intensive Sonnenexposition und der persönliche Lebensstil können eine frühere Auffrischung notwendig machen. Zur Erhaltung empfehlen sich 1–2 Behandlungen pro Jahr.',
      },
      {
        question: 'Eignet sich das Verfahren gegen Augenringe?',
        answer:
          'Je nach Ursache (Volumen, Gefäße, Pigment) kann eine behutsame Behandlung des Unterlids sinnvoll sein. Wir prüfen Indikation und Alternativen (z. B. Skinbooster, PN) im Termin.',
      },
      {
        question: 'Ist das schmerzhaft?',
        answer:
          'Mit lokaler Betäubungscreme wird die Anwendung meist gut vertragen. Kurzzeitige Rötung/Schwellung oder kleine Hämatome sind möglich und bilden sich in der Regel rasch zurück.',
      },
      {
        question: 'Ist das dasselbe wie PRP/PRF?',
        answer:
          'Vampir Lifting wird im Alltag oft mit PRP/PRF gleichgesetzt. Diese Seite fokussiert die ästhetische Perspektive; detaillierte medizinische Unterschiede erläutern wir auf der Eigenblut‑Fachseite und im Gespräch.',
      },
      {
        question: 'Was sind mögliche Nebenwirkungen?',
        answer:
          'Nach der Behandlung können leichte Rötungen, Schwellungen oder ein Spannungsgefühl auftreten. Die Haut beruhigt sich in der Regel innerhalb von ein bis zwei Stunden. Kleinere Blutergüsse können vorkommen, diese können nach 1–2 Tagen problemlos abgedeckt werden. Bei Kombinationsbehandlungen mit Microneedling müssen Sie mit einer längeren Regenerationszeit rechnen.'
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für ein natürlich wirkendes Lifting?',
    subtitle:
      'Buchen Sie Ihre Hautanalyse – wir planen Vampire Facial/Plasma‑Lifting realistisch und individuell.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Indikationen' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Kombinationen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="vampir-lifting-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection />
      <HubTeaserSection
        title="Zur Übersicht: Eigenbluttherapie (PRF/PRP)"
        subtitle="Anwendungen, Abläufe, Sitzungspläne & Hinweise."
        href="/eigenbluttherapie"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
