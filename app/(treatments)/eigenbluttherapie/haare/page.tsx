import type { Metadata } from 'next';
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
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
// PatientReviews bewusst nicht verwendet (HWG)

export const metadata: Metadata = {
  title:
    'Eigenbluttherapie Haarausfall Behandlung Bremen | Haardichte & Kopfhaut | EL Aesthetics',
  description:
    'Sachliche Information zur Eigenbluttherapie Haarausfall Behandlung (PRF/PRP): Ablauf, Indikationen, Häufigkeit, Sicherheit und Kosten (Richtwerte). Ärztliche Beratung erforderlich.',
  keywords:
    'eigenbluttherapie haarausfall, eigenblutbehandlung haare, prf haare, prp behandlung haare, eigenblut haarausfall',
  openGraph: {
    title:
      'PRF (Eigenblut) bei Haarausfall in Bremen – Informationen & Ablauf',
    description:
      'PRF/PRP für Haare: Hinweise zu Indikationen (erblich, diffus, areata), Behandlungsserie, Nachsorge und Kosten. Keine Heilversprechen – individuelle Prüfung.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/prf/og-prf-haare-haarausfall-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie/haare',
  },
};

export default function PRFHaarePage() {
  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie Haarausfall Behandlung in Bremen',
    subtitle:
      'Eigenbluttherapie Haarausfall Behandlung (PRF/PRP) zur Unterstützung der Haardichte und Kopfhautgesundheit. Bei erblich bedingtem oder kreisrundem Haarausfall, oder nach einer Haartransplantation',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
    imageAlt:
      'Mann mit Haarausfall vor Eigenbluttherapie bei Haarausfall',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Wie PRF / PRP bei Haarausfall eingesetzt wird',
    content: [
      'PRF (Platelet‑Rich Fibrin) und PRP (Platelet‑Rich Plasma) sind Verfahren der Eigenbluttherapie. Aus eigenem Blut werden Konzentrate mit Blutplättchen und Wachstumsfaktoren gewonnen und in die Kopfhaut injiziert.',
      'PRF wird ohne Antikoagulanzien hergestellt und bildet eine Fibrin‑Matrix. Diese kann Wachstumsfaktoren über einen längeren Zeitraum freisetzen. Ziel ist die Unterstützung der Follikelaktivität und des Haarzyklus.',
      'Einsatz je nach Befund u. a. bei androgenetischer Alopezie (erblich), diffusem Haarausfall, ausgewählten Fällen von Alopecia areata sowie zur Begleitung nach Haartransplantation. Eignung und Alternativen werden ärztlich geprüft.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Bereiche & Indikationen ',
    categories: [
      {
        category: 'Haarausfallformen',
        items: [
          { title: 'Erblicher Haarausfall (androgenetische Alopezie)', description: 'z. B. Geheimratsecken, Tonsur/Scheitel' },
          { title: 'Nach Haartransplantation', description: 'begleitende PRF/PRP‑Anwendung kann erwogen werden' },
          { title: 'Diffuser Haarausfall', description: 'gleichmäßige Ausdünnung der Kopfhaut' },
          { title: 'Kreisrunder Haarausfall (Alopecia areata)', description: 'lokalisierte Areale – individuelle Eignung' },
        ],
      },
      {
        category: 'Behandlungsziele',
        items: [
          { title: 'Unterstützung der Haardichte' },
          { title: 'Haardurchmesser/Qualität verbessern' },
          { title: 'Kopfhautmilieu stabilisieren' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Eigenbluttherapie für die Haare auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 350€ pro Sitzung*', iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 60–120 Minuten inkl. Aufbereitung', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Behandlungsserie', description: '4–6 Sitzungen im Abstand von 4–6 Wochen', iconUrl: '/assets/icons/wiederholung.svg' },
      { title: 'Beurteilung', description: 'Verlaufskontrolle nach 2–3 Terminen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Erhaltung', description: 'Auffrischung 1–2×/Jahr', iconUrl: '/assets/icons/CAL.svg' },
    ],
    note: '*GOÄ‑orientierter Richtwert. Der konkrete Betrag richtet sich nach Areal und Aufwand und wird individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der PRF / PRP Haarausfallbehandlung',
    steps: [
      { number: '01', title: 'Haaranalyse & Beratung', description: 'Befund (Muster, Verlauf, Auslöser) und Zieldefinition; Fotodokumentation als Verlaufskontrolle.' },
      { number: '02', title: 'Vorbereitung', description: 'Optional Betäubungscreme (30–60 Min.). Blutentnahme und sterile Aufbereitung.' },
      { number: '03', title: 'Aufbereitung PRF/PRP', description: 'Zentrifugation; bei PRF Bildung einer Fibrin‑Matrix mit gebundenen Wachstumsfaktoren.' },
      { number: '04', title: 'Injektionen', description: 'Mikro‑Injektionen der Konzentrate im ca. 1‑cm‑Raster in betroffene Areale.' },
      { number: '05', title: 'Nachsorge & Serie', description: 'Heimpflege/Verhaltenshinweise; Planung weiterer Sitzungen und Kontrollen.' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor‑ und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Blutverdünner', description: 'Nur nach ärztlicher Rücksprache pausieren – keinesfalls eigenständig absetzen.' },
        { title: 'Hydration/Ernährung', description: 'Ausreichend trinken, leichte Mahlzeit vor dem Termin.' },
        { title: 'Stimulanzien', description: '48 Stunden vorher möglichst kein Alkohol/Nikotin; Koffein reduzieren.' },
        { title: 'Hygiene', description: 'Saubere, produktfreie Haare am Behandlungs-/Vortag.' },
        { title: 'Gesundheit', description: 'Bei Infekt/Fieber/Kopfhauterkrankungen Termin verschieben.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Schutz', description: '24–48 Std. keinen intensiven Sport/Schwitzen; 7 Tage starke Hitze/UV meiden.' },
        { title: 'Haarwäsche', description: 'Ab dem Folgetag mit mildem Shampoo möglich; Kopfhaut nicht reizen.' },
        { title: 'Chemische Behandlungen', description: '1–2 Wochen keine Färbungen/chemische Behandlungen.' },
        { title: 'Pflege', description: 'Milde Kopfhautpflege; Massage erst nach ~48 Std. sanft beginnen.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Wir klären, ob PRF/PRP zur eigenblutbehandlung haare für Ihren Befund sinnvoll ist und besprechen Alternativen (z.\u00A0B. topische/medikamentöse Optionen, Mesotherapie, LLLT).',
      'Kontraindikationen (z.\u00A0B. Schwangerschaft/Stillzeit, relevante Gerinnungsstörungen, aktive Entzündungen) werden vorab geprüft. Keine Heilversprechen – Ergebnisse variieren.',
    ],
    ctaText: 'Haaranalyse buchen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Optionen bei Haarausfall',
    treatments: [
      { imageUrl: '/assets/mesotherapie/mesotherapie-haare_hero.webp', imageAlt: 'Mesotherapie Haare', title: 'Mesotherapie bei Haarausfall', description: 'Mikroinjektionen von Nährstoffen zur Unterstützung von Kopfhaut und Haarwurzeln.', treatmentUrl: '/mesotherapie/haare' },
      { imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp', imageAlt: 'Microneedling + PRF', title: 'Microneedling + PRF (Kopfhaut)', description: 'Kombination aus Needling und Eigenblutkonzentrat – Synergieeffekte möglich.', treatmentUrl: '/eigenbluttherapie/microneedling' },
      { imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp', imageAlt: 'Polynukleotide', title: 'Polynukleotide (PN)', description: 'Biostimulatoren zur Stabilisierung des Kopfhautmilieus – auch kombinierbar.', treatmentUrl: '/polynukleotide' },
    ],
  };

  const faqData: FAQSectionProps = {
  title: 'Häufige Fragen zu PRF/PRP für die Haare',
  faqs: [
    {
      question: 'PRP Haar-Behandlung für Frauen - macht das Sinn?',
      answer:
        'Viele Patientinnen berichten nach einer Behandlungsserie über vollere Haaransätze und eine verbesserte Haarqualität. Die Ergebnisse sind individuell unterschiedlich; eine allgemeingültige Wirkung kann nicht zugesichert werden.',
    },
    {
      question: 'Eigenbluttherapie nach Haartransplantation  – ist das sinnvoll?',
      answer:
        'Begleitende PRF/PRP-Behandlungen werden häufig eingesetzt, um das Transplantatmilieu zu unterstützen. Zeitpunkt, Häufigkeit und Nutzen werden individuell mit der behandelnden Fachärztin oder dem Facharzt abgestimmt.',
    },
    {
      question: 'Welche Erfahrungen gibt es mit Eigenbluttherapie bei Haarausfall?',
      answer:
        'Rückmeldungen variieren: Oft genannt werden weniger saisonaler Haarausfall, dichtere Areale und eine verbesserte Haarstruktur nach mehreren Sitzungen. Eine objektive Beurteilung erfolgt über Fotodokumentation und Haardichteanalysen.',
    },
    {
      question: 'Zeigen Sie Vorher-Nachher-Bilder zur Eigenbluttherapie?',
      answer:
        'Vorher-/Nachher-Vergleiche nutzen wir primär intern zur Verlaufskontrolle. Öffentliche Einzelfall-Darstellungen oder werbende Erfolgsgeschichten vermeiden wir aus Gründen des Heilmittelwerbegesetzes (HWG). Im Beratungsgespräch zeigen wir gerne, wie wir Ergebnisse neutral dokumentieren.',
    },
    {
      question: 'Was kostet eine PRF/PRP-Behandlung?',
      answer:
        'Der Richtwert liegt bei etwa 350 € pro Sitzung (GOÄ-orientiert). Paketpreise für Behandlungsserien sind möglich. Der konkrete Betrag hängt von Areal, Material und Zeitaufwand ab.',
    },
    {
      question: 'Wann sind erste Ergebnisse sichtbar?',
      answer:
        'Erste Veränderungen (z. B. weniger Haarausfall) zeigen sich häufig nach 2–3 Sitzungen. Eine sichtbare Verdichtung oder verbesserte Haarqualität ist meist nach 3–6 Monaten zu erkennen – abhängig vom individuellen Haarzyklus.',
    },
    {
      question: 'Ist die Behandlung schmerzhaft?',
      answer:
        'Mit Betäubungscreme wird die Behandlung in der Regel gut vertragen. Während der Mikro-Injektionen berichten viele über ein kurzes Pieken oder Druckgefühl. Eine mögliche Empfindlichkeit der Kopfhaut klingt meist rasch ab.',
    },
    {
      question: 'Welche Risiken gibt es?',
      answer:
        'Gelegentlich können vorübergehende Reaktionen wie Rötung, Schwellung, kleine Hämatome oder ein Spannungsgefühl auftreten. Allergische Reaktionen sind aufgrund der Eigenblutbasis sehr selten. Mögliche Kontraindikationen werden vorab sorgfältig geprüft.',
    },
  ],
};


  const ctaData: CTASectionProps = {
    title: 'Beratung zur Eigenbluttherapie für Haare',
    subtitle:
      'Wir klären Eignung, Ablauf, Serie und Kosten (Richtwerte) – individuell und transparent.',
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
    { id: 'treatments', label: 'Weitere Optionen' },
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