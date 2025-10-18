// app/kollagenstimulation/page.tsx
import type { Metadata } from 'next';
import {
  AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review'
// import { PRICES } from '@/lib/constants'; // Optional: falls du Preise zentral pflegst

export const metadata: Metadata = {
  title: 'Kollagenstimulation Bremen | Hyaluronsäure & Calciumhydroxylapatit | EL Aesthetics',
  description:
    'Ärztliche Kollagenstimulation in Bremen mit Hyaluronsäure & Calciumhydroxylapatit: Unterstützung von Hautfestigkeit & -qualität im Gesicht, Hals, Dekolleté & an den Händen. Individuelle Beratung, natürliche Ergebnisse.',
  keywords:
    'Kollagenstimulation Bremen, Calciumhydroxylapatit Bremen, Hautstraffung ohne OP Bremen, Biostimulator Bremen, Kollagenaufbau Bremen, Hyaluronsäure Bremen, Hals straffen Bremen, Dekolleté straffen Bremen, Handverjüngung Bremen, Jawline straffen Bremen',
  openGraph: {
    title: 'Kollagenstimulation in Bremen – Hyaluronsäure & Calciumhydroxylapatit | EL Aesthetics',
    description:
      'Schonend und präzise: Kollagenstimulation mit Hyaluronsäure & Calciumhydroxylapatit zur Unterstützung von Hautfestigkeit und -qualität. Ärztliche Behandlung in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/kollagen/og-kollagenstimulation-bremen.png'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/kollagenstimulation',
  },
};

export default function KollagenstimulationPage() {
  const heroData: HeroSectionProps = {
    title: 'Kollagenstimulation in Bremen',
    subtitle:
      'Unterstützung von Hautfestigkeit & -qualität durch eine Kombination aus Hyaluronsäure und Calciumhydroxylapatit – präzise, ärztlich & natürlich wirkend.',
    imageSrc: '/assets/kollagenstimulation/kollagenstimulation_hero.png',
    imageAlt: 'Kollagenstimulation in Bremen – ärztliche Injektion mit feiner Kanüle',
    primaryCTA: { text: 'Termin vereinbaren', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Wie funktioniert die Kollagenstimulation?',
    content: [
      'Bei dieser Methode wird Hyaluronsäure für einen unmittelbaren Auffrischungseffekt mit mikronisierten Calciumhydroxylapatit-Partikeln kombiniert. Während Hyaluronsäure lokal Volumen und Feuchtigkeit spendet, kann Calciumhydroxylapatit die körpereigene Kollagenbildung anregen – für eine schrittweise Unterstützung von Hautfestigkeit und -elastizität.',
      'Die Technik eignet sich insbesondere zur sanften Verbesserung der Hautqualität und Konturen – für natürlich wirkende Ergebnisse ohne Überkorrektur. Die Behandlung erfolgt minimalinvasiv und ist in der Regel schnell und gut integrierbar in den Alltag.',
      'Wichtig: Ergebnisse und Haltbarkeit sind individuell und hängen u. a. von Ausgangsbefund, Areal und Lebensstil ab. Eine ärztliche Voruntersuchung entscheidet über Eignung und Vorgehen.'
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Typische Behandlungsareale',
    categories: [
      {
        category: 'Gesicht',
        items: [
          { title: 'Wangen & Mittelgesicht' },
          { title: 'Jawline/Kinnlinie & Kinn' },
          { title: 'Marionettenbereich' },
          { title: 'Nasolabialregion (indirekt/umgebend)' }
        ],
      },
      {
        category: 'Hals & Dekolleté',
        items: [
          { title: 'Hals (Hautqualität & -festigkeit)' },
          { title: 'Dekolleté' },
        ],
      },
      {
        category: 'Weitere Areale',
        items: [
          { title: 'Handrücken' },
          { title: 'Oberarme (Hautqualität)' },
          { title: 'Bauch/Dehnungszonen (individuell)' },
        ],
      },
    ],
  };

  // Optional: zentrale Preise, falls vorhanden:
  // const priceFrom = PRICES?.kollagenstimulation?.basis ?? 900;

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Kollagenstimulation – auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 900€*', iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 60–90 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkung', description: 'Volumen teils sofort; Kollagenaufbau über Wochen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 18–24 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'i. d. R. nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Ausfallzeit', description: 'meist sofort gesellschaftsfähig', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Individuelle Richtwerte. Die Abrechnung erfolgt nach GOÄ.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Behandlung',
    steps: [
      {
        number: '01',
        title: 'Ärztliche Beratung & Planung',
        description:
          'Anamnese, Indikationsprüfung, Auswahl der Areale und Dosierung. Realistische Zieldefinition ohne Heilsversprechen.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion der Haut; auf Wunsch betäubende Creme. Markierung der Zugänge.',
      },
      {
        number: '03',
        title: 'Gewebeschonende Injektion (C-Approach)',
        description:
          'Einbringen über wenige Zugangspunkte mit stumpfer Mikrokanüle; fächerförmige Verteilung zur gleichmäßigen Platzierung. Abschließende sanfte Massage.',
      },
      {
        number: '04',
        title: 'Nachsorge & Kontrolle',
        description:
          'Alltag meist sofort möglich. Kontrolle des Effekts; bei Bedarf Nachsteuerung. Hinweise zu Sport/Hitze/Sonne beachten.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Medikamente', description: '7 Tage möglichst keine gängigen Schmerz-/blutverdünnenden Präparate (z. B. Ibuprofen, Diclofenac, Aspirin) – nur nach ärztlicher Rücksprache absetzen.' },
        { title: 'Alkohol', description: '24 Std. vor der Behandlung keinen Alkohol.' },
        { title: 'Gesundheit & Termine', description: 'Mind. 2 Wochen zuvor: kein akuter Infekt/Herpes, keine Impfung, keine (professionelle) Zahnbehandlung, kein Antibiotikum/Cortison. Mind. 4 Wochen vorab keine OP.' },
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Behandlung in Schwangerschaft & Stillzeit.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Schonung', description: '24–48 Std. kein intensiver Sport, Sauna oder starke Sonne; Behandlungsareale nicht massieren/reiben.' },
        { title: 'Reaktionen', description: 'Vorübergehend sind Rötung, Schwellung oder kleine Hämatome möglich.' },
        { title: 'Kontakt', description: 'Bei ungewöhnlichen Beschwerden bitte umgehend Rückmeldung.' },
      ],
    },
  };

  const reviews: Review[] = [
    { id: 1, name: 'Sandra G.', rating: 5, text: 'Sehr gründliche Aufklärung und natürliches Ergebnis. Habe mich jederzeit gut aufgehoben gefühlt.', date: '2024-09-15' },
    { id: 2, name: 'Bianca S.', rating: 5, text: 'Einfühlsam und professionell. Ergebnis wirkt frisch und nicht „gemacht“.', date: '2024-08-22' },
    { id: 3, name: 'Layla E.', rating: 5, text: 'Angenehmer Ablauf, kaum Ausfallzeit. Komme wieder!', date: '2024-07-10' },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Ärztin für Kollagenstimulation in Bremen',
    description: [
      'Ich bin Ola El-Armouche, Ärztin für ästhetische & regenerative Medizin. In meiner Praxis verbinde ich präzise Techniken mit einem natürlichen Behandlungsansatz.',
      'Ziel ist eine maßvolle Unterstützung von Hautfestigkeit und -qualität – ohne unnatürliche Überkorrekturen. Grundlage jeder Behandlung ist eine ausführliche Anamnese und ehrliche Beratung.',
      'Gern prüfe ich mit Ihnen, ob die Kollagenstimulation mit Hyaluronsäure & Calciumhydroxylapatit für Ihre Wünsche geeignet ist.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliches Beratungsgespräch in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Verwandte Behandlungen',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.png',
        imageAlt: 'Hyaluronsäure-Filler',
        title: 'Hyaluronsäure-Filler',
        description: 'Kontur, Ausgleich & Support ausgewählter Areale – dezent und maßvoll.',
        treatmentUrl: '/hyaluron',
      },
      {
        imageUrl: '/assets/eigenbluttherapie-prf/eigenbluttherapie-prf_hero.png',
        imageAlt: 'PRF Eigenbluttherapie',
        title: 'PRF/PRP',
        description: 'Autologe Regeneration zur Unterstützung der Hautqualität.',
        treatmentUrl: '/eigenbluttherapie-prf',
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.png',
        imageAlt: 'Microneedling',
        title: 'Medizinisches Microneedling',
        description: 'Struktur & Glow – medizinisches Needling mit Hygiene-Standards.',
        treatmentUrl: '/medizinisches-microneedling', 

      },
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haut_hero.png',
        imageAlt: 'Mesotherapie',
        title: 'Mesotherapie',
        description: 'Feuchtigkeits-Boost und Vitalisierung – individuell abgestimmt.',
        treatmentUrl: '/mesotherapie',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide',
        title: 'Polynukleotide',
        description: 'Biostimulatorische Unterstützung der Hautqualität.',
        treatmentUrl: '/polynukleotide',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'FAQ zur Kollagenstimulation',
    faqs: [
      {
        question: 'Wie funktioniert die Behandlung?',
        answer:
          'Hyaluronsäure sorgt für einen unmittelbaren Auffrischungseffekt, während mikronisierte Calciumhydroxylapatit-Partikel die körpereigene Kollagenbildung anregen können. So wird die Hautstruktur schrittweise unterstützt.',
      },
      {
        question: 'Für wen ist die Behandlung geeignet?',
        answer:
          'Geeignet bei Wunsch nach sanfter Unterstützung der Hautqualität und bei ersten Zeichen von Elastizitätsverlust. Die individuelle Eignung klären wir im Arztgespräch.',
      },
      {
        question: 'Wann sehe ich Ergebnisse?',
        answer:
          'Ein Teil des Effekts kann sofort sichtbar sein (Hyaluronsäure). Der kollagenstimulierende Anteil entwickelt sich über Wochen bis mehrere Monate.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Die Haltbarkeit liegt – abhängig von Areal, Stoffwechsel und Lebensstil – typischerweise im Bereich von etwa 18–24 Monaten.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig?',
        answer:
          'Häufig genügt eine Behandlung; je nach Ausgangsbefund können Wiederholungen sinnvoll sein.',
      },
      {
        question: 'Gibt es Nebenwirkungen oder Risiken?',
        answer:
          'Vorübergehend sind Rötungen, leichte Schwellungen oder kleine Hämatome möglich. Seltener können Knötchen/Verhärtungen auftreten. Sehr selten: Infektionen oder allergische Reaktionen. Wir besprechen Risiken, Alternativen und Notfallzeichen vor Ort.',
      },
      {
        question: 'Kontraindikationen',
        answer:
          'Nicht behandeln bei akuten Entzündungen/Infektionen, bekannter Überempfindlichkeit gegen Inhaltsstoffe, bestimmten Autoimmun-/schweren Systemerkrankungen, Blutgerinnungsstörungen oder in Schwangerschaft/Stillzeit. Arzneimittel und Vorerkrankungen bitte angeben.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für eine natürlich wirkende Unterstützung der Haut?',
    subtitle: 'Lassen Sie sich individuell beraten – ärztlich & transparent.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis in Bremen',
    description:
      'Zentral gelegen und gut erreichbar – u. a. aus Schwachhausen, Horn-Lehe, Oberneuland, Findorff, Mitte, Peterswerder, Vahr und Borgfeld sowie Lilienthal, Stuhr, Weyhe, Delmenhorst und Achim.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '0155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Termine nach Vereinbarung'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews reviews={reviews} title="Erfahrungen unserer Patient:innen" subtitle="Natürlich wirkende Ergebnisse und transparente Aufklärung – das schätzen unsere Patient:innen in Bremen." />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
      {/* Rechtshinweis gem. HWG: kein Heilsversprechen, individuelle Ergebnisse variieren */}
    </div>
  );
}
