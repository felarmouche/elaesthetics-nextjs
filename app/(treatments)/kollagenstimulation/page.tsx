// app/kollagenstimulation/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import {PRICES} from '@/lib/constants'
import {
  AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection,  CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps,   ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem, CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { eigenblut, filler, mesoHaar, mesotherapieHaut, microneedling, polynukleotide } from '@/data/treatments';
 
export const metadata: Metadata = {
  title: 'Kollagenstimulation Bremen | CaHA & Biostimulatoren | EL Aesthetics',
  description: 'Kollagenstimulation in Bremen: CaHA- und Hyaluron-Biostimulatoren für natürliche Hautstraffung an Gesicht, Hals & Händen. Ärztliche Beratung. Termin buchen.',
  keywords: ['Kollagenstimulation Bremen', 'Calciumhydroxylapatit Bremen', 'Hautstraffung ohne OP Bremen', 'Biostimulator Bremen', 'Kollagenaufbau Bremen'],
  openGraph: {
    title: 'Kollagenstimulation in Bremen – EL Aesthetics',
    description: 'CaHA- und Hyaluron-Biostimulatoren für natürliche Hautstraffung an Gesicht, Hals & Händen in Bremen.',
    url: 'https://elaesthetics-bremen.de/kollagenstimulation',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/kollagen/og-kollagenstimulation-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Kollagenstimulation in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/kollagenstimulation',
  },
};

export default function KollagenstimulationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { ...getWebPageSchema({
        name: 'Kollagenstimulation in Bremen',
        description: 'Ärztliche Kollagenstimulation mit Biostimulatoren für natürliche Hautstraffung und Kollagenaufbau.',
        url: '/kollagenstimulation',
      }), '@context': undefined },
      getMedicalProcedureSchema({
        name: 'Kollagenstimulation mit Biostimulatoren',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Behandlung mit CaHA- und Hyaluron-Biostimulatoren zur Anregung der körpereigenen Kollagenproduktion für natürliche Hautstraffung.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Kollagenstimulation in Bremen',
    subtitle:
      'Interesse an einer professionellen Kollagenstimulation in Bremen?\nDann sind Sie bei El Aesthetics genau richtig. Jetzt Beratung vereinbaren!',
    imageSrc: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
    imageAlt: 'Kollagenstimulation mit Biostimulatoren zur Hautstraffung – EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Kollagenstimulation?',
    content: [
      'Die Kollagenstimulation ist ein minimal-invasives Verfahren der ästhetischen Medizin, das mit Biostimulatoren wie Calciumhydroxylapatit die körpereigene Kollagenproduktion anregt und die Haut natürlich strafft.',
      'Mit zunehmendem Alter verliert die Haut an Festigkeit, Elastizität und Frische – unter anderem durch den Abbau von Kollagen. Eine gezielte Behandlung mit einer Kombination aus Hyaluronsäure und Calciumhydroxylapatit kann diesem Prozess entgegenwirken.',
      'Während die Hyaluronsäure für eine sofort sichtbare Auffrischung sorgen kann, regen die feinen Calciumhydroxylapatit-Partikel die natürliche Kollagenproduktion in der Tiefe an. Diese Kombination kann zu einer schrittweisen Straffung und Verbesserung der Hautqualität führen – mit einem natürlich wirkenden Ergebnis.',
      'Im Unterschied zu anderen rein kollagenstimulierenden Verfahren bietet diese Behandlung durch die Hyaluronsäure zusätzlich eine unmittelbare Aufpolsterung sowie einen sanften Straffungseffekt.',
      'Eine ärztliche Voruntersuchung entscheidet über Eignung und Vorgehen.'
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
    title: 'Auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.biostimulation.caHydroxylapatitPlusHyaluron},-€*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungsdauer', description: 'ca. 60–90 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 18–24 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'i. d. R. nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Individuelle Richtwerte. Die Abrechnung erfolgt nach GOÄ.',
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsareale' },
    { id: 'quickInfos', label: 'Auf einen Blick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

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
    title: 'Vor- und Nachsorge',
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

  

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Ärztin für Kollagenstimulation in Bremen',
    description: [
      'Ich bin Ola El-Armouche, Ärztin für ästhetische & regenerative Medizin. Bei EL Aesthetics verbinde ich präzise Techniken mit einem natürlichen Behandlungsansatz.',
      'Ziel ist eine maßvolle Unterstützung von Hautfestigkeit und -qualität – ohne unnatürliche Überkorrekturen. Grundlage jeder Behandlung ist eine ausführliche Anamnese und ehrliche Beratung.',
      'Gern prüfe ich mit Ihnen, ob die Kollagenstimulation mit Hyaluronsäure & Calciumhydroxylapatit für Ihre Wünsche geeignet ist.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Verwandte Behandlungen',
    treatments: [
      filler,
      eigenblut,
      microneedling,
      mesotherapieHaut,
      polynukleotide,
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufig gestellte Fragen | FAQ',
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
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="kollagenstimulation-schema"
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
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
