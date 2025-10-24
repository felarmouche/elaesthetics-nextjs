import type { Metadata } from 'next';
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
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

export const metadata: Metadata = {
  title: 'Vampir Lifting Bremen | Natürliches Lifting ohne Filler | EL Aesthetics',
  description:
    'Vampir Lifting (auch Vampire Facial/Plasma-Lifting): körpereigene Regeneration für ebenmäßiger wirkende Haut, feinere Poren und Unterstützung bei Augenringen – ärztlich geplant in Bremen.',
  keywords: [
    // Primary / lokal
    'Vampir Lifting Bremen',
    'Vampire Lifting Bremen',
    // Synonyme / LSI ohne PRP/PRF-Kannibalisierung
    'Vampire Facial',
    'Plasma Lifting',
    'Glow Lifting',
    'Regeneratives Lifting',
    'Biostimulations-Lifting',
    'Natürliches Lifting ohne Filler',
    // Intent / Nutzen
    'Hautverjüngung Bremen',
    'Poren verfeinern Bremen',
    'Augenringe Behandlung Bremen',
    'Hautqualität verbessern Bremen',
  ].join(', '),
  openGraph: {
    title:
      'Vampir Lifting in Bremen – Natürliches Lifting ohne Filler | EL Aesthetics',
    description:
      'Vampire Facial/Plasma-Lifting: sanfte, körpereigene Regeneration für ein ebenmäßiger wirkendes Hautbild. Sachliche Aufklärung – keine Heilsversprechen.',
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
  const heroData: HeroSectionProps = {
    title: 'Vampir Lifting in Bremen',
    subtitle:
      'Natürliches Lifting ohne Filler: Vampire Facial / Plasma‑Lifting unterstützt die Hautregeneration – dezent, präzise und ärztlich begleitet.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Vampir Lifting (Vampire Facial) zur Hautqualität bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Hautanalyse anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Vampir Lifting – was ist das?',
    content: [
      'Unter Vampir Lifting – auch als Vampire Facial, Plasma‑Lifting oder Glow‑Lifting bekannt – versteht man eine ästhetische Behandlung, die Stoffe des eigenen Blutes nutzt, um die Hautregeneration zu unterstützen. Ziel sind eine gleichmäßig wirkende Oberfläche, feinere Poren und eine verbesserte Hautqualität.',
      'Sensible Zonen wie Unterlid/Tränenrinne werden besonders behutsam behandelt. Die Planung erfolgt individuell; Ergebnisse und Dauer sind erfahrungsabhängig und können variieren.',
      'Für tiefergehende medizinische Infos zur Eigenbluttherapie (PRF/PRP) und zur Abgrenzung verlinken wir auf unsere Fachseite – diese Seite fokussiert bewusst die ästhetische Perspektive.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Ziele',
    categories: [
      {
        category: 'Gesicht & Dekolleté',
        items: [
          { title: 'Augenbereich (Augenringe/Tränenrinne)', description: 'Unterlid, feine Linien – behutsame Anwendung' },
          { title: 'Gesicht gesamt', description: 'Wangen, Stirn, Schläfen – Textur & Ebenmäßigkeit' },
          { title: 'Nasolabial-/Marionettenzone', description: 'Unterstützung der Hautqualität' },
          { title: 'Dekolleté', description: 'Glatteres Erscheinungsbild, Feuchtigkeitsgefühl' },
        ],
      },
      {
        category: 'Hautziele',
        items: [
          { title: 'Feiner erscheinende Poren' },
          { title: 'Unterstützung bei feinen Linien' },
          { title: 'Ebenmäßiger wirkender Teint' },
          { title: 'Begleitend bei atrophen Aknenarben' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Vampir Lifting auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 300 € pro Sitzung*', iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 60–90 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Serie', description: '3–6 Sitzungen, Abstand ~4–6 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Wirkeintritt', description: 'schrittweise im Serienverlauf', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'lokal auf Wunsch', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'meist sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; Abrechnung nach GOÄ. Der konkrete Betrag wird im Beratungstermin individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf vom Vampire‑Lift',
    steps: [
      { number: '01', title: 'Hautanalyse & Aufklärung', description: 'Indikationsprüfung, Erwartungsmanagement und Fotodokumentation.' },
      { number: '02', title: 'Vorbereitung', description: 'Auf Wunsch Oberflächenbetäubung; Entnahme und Aufbereitung körpereigener Bestandteile.' },
      { number: '03', title: 'Injektionen', description: 'Schonende, punktgenaue Applikation in definierten Ebenen – angepasst an Areal und Ziel.' },
      { number: '04', title: 'Nachsorge & Serie', description: 'Kurze Beruhigungspflege, Hinweise für die ersten Tage, Planung weiterer Sitzungen.' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor‑ und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: 'Blutverdünnende Schmerzmittel nur nach ärztlicher Rücksprache pausieren.' },
        { title: 'Koffein/Nikotin/Alkohol', description: '48 Std. vorher möglichst reduzieren; am Behandlungstag meiden.' },
        { title: 'Hydration & Gesundheit', description: 'Ausreichend trinken, leichte Mahlzeit; nur gesund erscheinen.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Schonung', description: 'Areale möglichst wenig berühren; 24 Std. kein Sport.' },
        { title: 'Pflege', description: '2–3 Tage milde Produkte; Make‑up nur nach Freigabe (v. a. bei Kombi mit Needling).'},
        { title: 'Behandlungen', description: '7 Tage keine Massagen/Peelings/energetischen Verfahren.' },
        { title: 'Hitze/UV/Wasser', description: '7 Tage Sauna, Solarium, Sonne, Schwimmbad meiden; konsequenter Sonnenschutz.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Beratung zum Vampir Lifting',
    description: [
      'Wir prüfen gemeinsam, ob Vampire Facial/Plasma‑Lifting für Ihr Anliegen sinnvoll ist und welche Alternativen bestehen (z.\u00A0B. Skinbooster, Polynukleotide, Microneedling).',
      'Die Planung (Areal, Applikationstiefe, Serie) erfolgt individuell und transparent. Ergebnisse variieren; wir geben keine Heilsversprechen.',
      'Medizinische Details zu PRP/PRF (Eigenblut) finden Sie gebündelt auf unserer Fachseite – zur klaren Abgrenzung und besseren Orientierung.',
    ],
    ctaText: 'Jetzt Beratung buchen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
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
          'Üblich sind 3–6 Sitzungen im Abstand von etwa 4–6 Wochen. Veränderungen entwickeln sich schrittweise im Serienverlauf; Wahrnehmung und Dauer sind individuell.',
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
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}