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
import { eigenblutMicroneedling, skinbooster, polynukleotide } from '@/data/treatments';

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
      'https://elaesthetics-bremen.de/assets/eigenbluttherapie/eigenbluttherapie-vampire-lifting_hero.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/vampir-lifting/',
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
      'Vampir Lifting mit PRP & PRF – natürliche Hautverjüngung durch Wachstumsfaktoren.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Vampir Lifting mit Eigenblut-Plasma für Glow – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Vampir Lifting?',
    content: [
      'Das Vampir Lifting mit PRP oder PRF fördert die Bildung von neuen Fibroblasten, Kollagen und Elastin in der Haut. Das Ergebnis kann eine Verbesserung der Hautstruktur, Verfeinerung der Poren, Reduktion von Hyperpigmentierungen, feinen Linien, Akne und Aknenarben sein. Entzündliche Prozesse in der Haut können positiv beeinflusst werden (z.B. Rosazea).',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Ziele',
    categories: [
      {
        category: 'Bereiche',
        items: [
          { title: 'Gesicht', description: 'Wangen, Stirn, Schläfen' },
          { title: 'Augenbereich (Augenringe/Tränenrinne)' },
          { title: 'Dekolleté' },
          { title: 'Hals' },
        ],
      },
      {
        category: 'Ästhetische Hautziele',
        items: [
          { title: 'Verfeinerung des Hautbildes' },
          { title: 'Poren' },
          { title: 'Fältchen' },
          { title: 'Hauttextur' },
          { title: 'Pigmentierungen' },
          { title: 'Akne & Aknenarben' },
          { title: 'Rosazea' },
        ],
      },
      {
        category: 'Hautqualität & Revitalisierung',
        items: [
          { title: 'Natürliche Regeneration der Haut' },
          { title: 'Kollagen- und Elastinbildung' },
          { title: 'Spannkraft' },
          { title: 'Verbesserung der Hautqualität' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.prpPrf.prpPrf}€ pro Sitzung*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 90-120 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Serie', description: '3-4 Sitzungen, Abstand ~4–6 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Wirkeintritt', description: 'nach ca. 2-3 Behandlungen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'je nach Methode', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '* Richtwert; Abrechnung nach GOÄ. Der konkrete Betrag wird im Beratungstermin individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf',
    steps: [
      { number: '01', title: 'Hautanalyse & Aufklärung', description: 'In einem Beratungsgespräch wird die Eignung für die Behandlung geprüft und der Ablauf besprochen.' },
      { number: '02', title: 'Vorbereitung', description: 'Auf Wunsch Oberflächenbetäubung. Blutentnahme und PRF-Aufbereitung.' },
      { number: '03', title: 'Injektion', description: 'Matrix wird mit einer feinen Nadel in Abständen von ca. 1 cm in die betroffenen Bereiche der Haut injiziert.' },
      { number: '04', title: '(Optional) Microneedling', description: 'Optional kann die Behandlung um eine Microneedling-Behandlung ergänzt werden' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor‑ und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '1 Woche vorher keine blutverdünnenden Medikamente einnehmen (z. B. Ibuprofen, Diclofenac, Aspirin) – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.' },
        { title: 'Koffein/Nikotin/Alkohol', description: 'Verzicht auf Kaffee, koffeinhaltige Getränke, Nikotin und Alkohol mindestens 2 Tage vorher. Am Behandlungstag komplett darauf verzichten.' },
        { title: 'Hydration & Gesundheit', description: 'Ausreichend trinken, leichte Mahlzeit; nur gesund erscheinen.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Schonung', description: 'Areale möglichst wenig berühren; 24 Std. kein Sport.' },
        { title: 'Pflege', description: '2–3 Tage milde Produkte; 2–3 Tage kein Make-up/Puder.' },
        { title: 'Behandlungen', description: '14 Tage keine weiteren kosmetischen Behandlungen.' },
        { title: 'Hitze/UV/Wasser', description: '7 Tage Sauna, Solarium, Sonne, Schwimmbad meiden; mindestens LSF 50 verwenden.' },
        { title: 'Sport', description: '2-3 Tage auf Sport verzichten.' },
      ],
    },
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Sinnvolle Alternativen & Kombinationen',
    treatments: [eigenblutMicroneedling, skinbooster, polynukleotide],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen',
    faqs: [
      {
        question: 'Eignet sich das Verfahren gegen Augenringe?',
        answer:
          'Je nach Ursache (Volumen, Gefäße, Pigment) kann eine behutsame Behandlung des Unterlids sinnvoll sein.',
      },
      {
        question: 'Was sind mögliche Nebenwirkungen?',
        answer:
          'Nach der Behandlung können leichte Rötungen, Schwellungen oder ein Spannungsgefühl auftreten. Die Haut beruhigt sich in der Regel innerhalb von ein bis zwei Stunden. Kleinere Blutergüsse können vorkommen, diese können nach 1–2 Tagen problemlos abgedeckt werden. Bei Kombinationsbehandlungen mit Microneedling müssen Sie mit einer längeren Regenerationszeit rechnen.'
      },
      {
        question: 'Womit ist nach der Vampir Lifting Behandlung zu rechnen?',
        answer:
          'Nach der Behandlung beginnt die Haut unmittelbar mit den regenerativen Prozessen. In den ersten 1–2 Wochen fühlt sich die Haut praller, rosiger und genährter an. Nach etwa zwei Wochen geht dieser Effekt vorübergehend etwas zurück, während die regenerativen Prozesse weiterlaufen.\n\nSichtbare Verbesserungen sind nach 3–4 Behandlungen zu erwarten. Die Ergebnisse können je nach Person variieren, da dieses natürliche Verfahren von der individuellen Aktivität der Blutplättchen abhängt.',
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
