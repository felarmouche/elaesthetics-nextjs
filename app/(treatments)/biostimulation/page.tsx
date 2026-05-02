// app/biostimulation/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import { PRICES } from '@/lib/constants'
import {
  AreasSection, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem, CTASection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { eigenblut, filler, mesoHaar, mesotherapieHaut, microneedling, polynukleotide } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Biostimulation Bremen',
  description: 'Biostimulation in Bremen: CaHA- und Hyaluron-Biostimulatoren für natürliche Hautstraffung an Gesicht, Hals & Händen. Ärztliche Beratung. Termin buchen.',
  keywords: ['Biostimulation Bremen', 'Calciumhydroxylapatit Bremen', 'Hautstraffung ohne OP Bremen', 'Biostimulator Bremen', 'Kollagenaufbau Bremen'],
  openGraph: {
    title: 'Biostimulation in Bremen – EL Aesthetics',
    description: 'CaHA- und Hyaluron-Biostimulatoren für natürliche Hautstraffung an Gesicht, Hals & Händen in Bremen.',
    url: 'https://elaesthetics-bremen.de/biostimulation',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/kollagen/og-biostimulation-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Biostimulation in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/biostimulation',
  },
};

export default function KollagenstimulationPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Biostimulation in Bremen',
          description: 'Ärztliche Biostimulation mit Biostimulatoren für natürliche Hautstraffung und Kollagenaufbau.',
          url: '/biostimulation',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Biostimulation mit Biostimulatoren',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Behandlung mit CaHA- und Hyaluron-Biostimulatoren zur Anregung der körpereigenen Kollagenproduktion für natürliche Hautstraffung.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Biostimulation in Bremen',
    subtitle:
      'Hautstraffung und natürlicher Volumenaufbau durch Biostimulation – Calciumhydroxylapatit & Poly-L-Milchsäure (PLLA, PDLLA).',
    imageSrc: '/assets/biostimulation/biostimulation_hero.webp',
    imageAlt: 'Biostimulation mit Biostimulatoren zur Hautstraffung – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Biostimulation?',
    content: [
      'Die Biostimulation ist ein minimal-invasives Verfahren der ästhetischen Medizin. Durch den Einsatz von Biostimulatoren wie Calciumhydroxylapatit, Poly-L-Milchsäure (PLLA, PDLLA), Hybrid-Filler oder Polynukleotiden wird die körpereigene Kollagenproduktion angeregt. Dadurch lässt sich natürliches Volumen wiederaufbauen, die Haut straffen und die allgemeine Hautqualität nachhaltig verbessern.',
      'Mit zunehmendem Alter verliert die Haut Kollagen, Elastin und Hyaluronsäure und somit auch an Festigkeit, Elastizität und Frische. Biostimulatoren können diesem Prozess entgegenwirken.',
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
          { title: 'Marionettenfalten' },
          { title: 'Nasolabialfalten' }
        ],
      },
      {
        category: 'Hals & Dekolleté',
        items: [
          { title: 'Hals' },
          { title: 'Dekolleté' },
        ],
      },
      {
        category: 'Weitere Areale',
        items: [
          { title: 'Hände' },
          { title: 'Oberarme' },
          { title: 'Bauch/Dehnungszonen' },
        ],
      },
    ],
  };

  // Optional: zentrale Preise, falls vorhanden:
  // const priceFrom = PRICES?.biostimulation?.basis ?? 900;

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.biostimulation.caHydroxylapatitPlusHyaluron},-€*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungsdauer', description: 'ca. 60–90 Min', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Haltbarkeit', description: 'ca. 12–24 Monate', iconUrl: '/assets/icons/CAL.svg' },
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
          'Anamnese, Indikationsprüfung, Auswahl der Areale und Dosierung. Realistische Zieldefinition.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion der Haut.',
      },
      {
        number: '03',
        title: 'Gewebeschonende Injektion',
        description:
          'Einbringen des Biostimulators über wenige Zugangspunkte mit stumpfer Mikrokanüle.',
      },
      {
        number: '04',
        title: 'Nachsorge & Kontrolle',
        description:
          'Alltag meist sofort möglich. Kontrolle des Effekts; bei Bedarf Nachsteuerung.',
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
        question: 'Für wen ist eine Biostimulation geeignet?',
        answer:
          'Geeignet bei Elastizitätsverlust, Erschlaffung des Gewebes oder Volumenverlust. Die individuelle Eignung klären wir im Arztgespräch.',
      },
      {
        question: 'Wann sehe ich Ergebnisse?',
        answer:
          'Abhängig vom Präparat und der individuellen Reaktion können Ergebnisse sofort sichtbar sein oder sich innerhalb von 6 Monaten schrittweise aufbauen.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Die Haltbarkeit liegt – abhängig von Areal, Stoffwechsel und Lebensstil – typischerweise im Bereich von etwa 12–24 Monaten.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig?',
        answer:
          'Abhängig vom Präparat und der individuellen Reaktion können 1 bis 3 Sitzungen sinnvoll sein.',
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
        id="biostimulation-schema"
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
