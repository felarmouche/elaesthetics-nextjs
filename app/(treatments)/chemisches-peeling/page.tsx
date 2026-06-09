import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
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
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { eigenblut, microneedling, skinbooster } from '@/data/treatments';
// PatientReviews import bleibt ungenutzt; bei Bedarf HWG-konform entfernen/ersetzen


export const metadata: Metadata = {
  title: 'Chemisches Peeling Bremen',
  description: 'Chemisches Peeling in Bremen: Kontrollierte Hauterneuerung bei Pigmentflecken, Aknenarben & fahlem Teint. Ärztlich durchgeführt. Beratungstermin vereinbaren.',
  keywords: ['Chemisches Peeling Bremen', 'Fruchtsäurepeeling Bremen', 'Pigmentflecken behandeln Bremen', 'Hauterneuerung Bremen'],
  openGraph: {
    title: 'Chemisches Peeling in Bremen – EL Aesthetics',
    description: 'Kontrollierte Hauterneuerung bei Pigmentflecken, Aknenarben & fahlem Teint. Ärztlich durchgeführt in Bremen.',
    url: 'https://elaesthetics-bremen.de/chemisches-peeling',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/chemisches-peeling/chemisches-peeling_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Chemisches Peeling in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: { canonical: 'https://elaesthetics-bremen.de/chemisches-peeling/' },
};

export default function ChemischesPeelingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Chemisches Peeling in Bremen',
          description: 'Ärztliches chemisches Peeling zur Hauterneuerung, Pigmentreduzierung und Verbesserung der Hautstruktur.',
          url: '/chemisches-peeling',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Chemisches Peeling',
        type: 'CosmeticProcedure',
        bodyLocation: 'Face',
        description: 'Kontrollierte Hauterneuerung durch chemische Substanzen zur Verbesserung von Pigmentierung, Aknenarben und Hautstruktur.',
        howPerformed: 'Chemische Peelingbehandlung',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Chemisches Peeling in Bremen',
    subtitle:
      'Biorevitalisierung durch chemisches Peeling - Pigmentstörungen, Hauterneuerung und Hautverbesserung',
    imageSrc: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
    imageAlt: 'Chemisches Peeling zur Hauterneuerung und Pigmentbehandlung – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist ein chemisches Peeling?',
    content: [
      'Das chemische Peeling ist ein Verfahren der ästhetischen Medizin zur kontrollierten Hauterneuerung. Es unterstützt die Behandlung von Pigmentflecken, Elastizitätsverlust/Hauterschlaffung, Akne & aknebedingte Narben, Dehnungsstreifen, feinen Falten und fahlem Teint.',
      'Die eingesetzte Wirkstoffkombination besteht unter anderem aus Trichloressigsäure (TCA), Wasserstoffperoxid und Kojisäure. Durch die spezielle Formulierung dringen die Substanzen bis in mittlere Hautschichten vor, ohne eine sichtbare Abschälung zu verursachen.',
      'In dieser Tiefe können verschiedene biologische Prozesse angeregt werden, etwa die Bildung von kollagenen Fasern oder die Freisetzung von Wachstumsfaktoren, die eine Regeneration der Haut bewirken können.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Indikationen',
    categories: [
      {
        category: 'Behandlungsbereiche',
        items: [
          { title: 'Gesicht', description: 'Vollgesicht (Stirn, Wangen, Kinn) – für ein ebenmäßigeres Hautbild' },
          { title: 'Hals', description: 'Unterstützung der Hautelastizität' },
          { title: 'Dekolleté', description: 'Aufhellung sonnengeschädigter Haut' },
          { title: 'Oberarme', description: 'Verbesserung der Hautstruktur' },
        ],
      },
      {
        category: 'Hautprobleme & Indikationen',
        items: [
          { title: 'Elastizitätsverlust/Hauterschlaffung' },
          { title: 'Feine Falten/Knitterfältchen' },
          { title: 'Akne & aknebedingte Narben (je nach Befund)' },
          { title: 'Pigmentflecken/ungleichmäßiger Teint' },
          { title: 'Eingesunkene Narben/Dehnungsstreifen' },
        ],
      },
      {
        category: 'Kontraindikationen',
        items: [
          { title: 'Überempfindlichkeit', description: 'Bekannte Unverträglichkeit gegen TCA, Wasserstoffperoxid oder Kojisäure' },
          { title: 'Schwangerschaft & Stillzeit' },
          { title: 'Offene Wunden', description: 'Frische Verletzungen oder offene Wunden im Behandlungsareal' },
          { title: 'Akute Hautentzündungen' },
          { title: 'Aktive Infektionen', description: 'Aktive bakterielle Hautinfektionen oder behandlungsbedürftige Hauterkrankungen' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Die Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.chemPeeling}€ pro Behandlung*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 45 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkdauer', description: 'häufig ca. 9–12 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'i.d.R. sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; Abrechnung GOÄ-orientiert. Der konkrete Betrag richtet sich nach Areal/Umfang und wird individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der chemischen Peeling‑Behandlung',
    steps: [
      {
        number: "01",
        title: "Beratung",
        description: "Im Beratungsgespräch klären wir Ihre Wünsche und Ziele."
      },
      { number: '02', title: 'Reinigung & Vorbereitung', description: 'Gründliche Reinigung/Desinfektion für optimales Eindringen der Wirkstoffe.' },
      { number: '03', title: 'Auftragen & Einmassieren', description: 'PRX‑T33 wird schrittweise appliziert und einmassiert (mögliches Wärme-/Brenngefühl). Einwirkzeit ca. 10–15 Minuten.' },
      { number: '04', title: 'Neutralisation & Pflege', description: 'Abwaschen/Neutralisation, beruhigende Maske und angepasste Pflege.' },
      { number: '05', title: 'Nachsorge & Verlauf', description: 'Heimpflege inkl. konsequentem UV‑Schutz (LSF 50+).' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorgehinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Hautreizungen vermeiden', description: 'Vorab keine aggressiven Peelings/Dermabrasion.' },
        { title: 'UV‑Exposition minimieren', description: 'Sonne/Solarium in der Woche zuvor meiden.' },
        { title: 'Gesundheitszustand', description: 'Bei Infekten, Herpes oder offenen Wunden verschieben.' },
        { title: 'Medikamente', description: 'Einnahme (z. B. Retinoide/Antibiotika) ärztlich mitteilen. Das Absetzen von Medikamenten muss vorher mit dem behandelnden Arzt abgestimmt werden.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Sonnenschutz', description: 'Mind. 4–6 Wochen LSF 50+ verwenden.' },
        { title: 'Feuchtigkeit', description: 'Milde, hydratisierende Pflege nutzen.' },
        { title: 'Reizstoffe meiden', description: '2 Wochen keine aggressiven Kosmetika/mechanischen Peelings.' },
        { title: 'Keine Manipulation', description: 'Nicht reiben/kratzen – auch bei leichter Schuppung.' },
      ],
    },
  };



  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen zur Hautverbesserung',
    treatments: [
      microneedling,
      eigenblut,
      skinbooster,
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zum chemischen Peeling',
    faqs: [
      { question: 'Wofür kann die Behandlung angewendet werden?', answer: 'Für Gesicht, Hals, Dekolleté und Oberarme bei: Elastizitätsverlust der Haut, Haut-Erschlaffung, Falten, Akne und Aknenarben, Pigmentflecken, eingesunkenen Narben sowie Dehnungsstreifen.' },
      { question: 'Wie wirkt das chemische Peeling?', answer: 'Die Hauptbestandteile sind Trichloressigsäure (TCA), Wasserstoffperoxid und Kojisäure. TCA unterstützt das Eindringen von Wasserstoffperoxid in die Haut und moduliert dessen Aggressivität. Beide Substanzen dringen in die mittlere Hautschicht ein und fördern die Neubildung von kollagenen Fasern, kontrollieren Entzündungsprozesse und setzen Wachstumsfaktoren frei. Diese Synergie ermöglicht eine tiefere Wirkung ohne Schälung. Kojisäure wirkt aufhellend und hilft bei leichten Pigmentstörungen.' },
      { question: 'Was ist das Besondere an der Behandlung?', answer: 'Die Behandlung kann auch im Sommer durchgeführt werden, hat keine Ausfallzeit dank sehr guter Verträglichkeit, ist für alle Hauttypen geeignet, kennt kein Alterslimit und verursacht keine Fotosensibilität.' },
      { question: 'Wann sollte die Behandlung nicht durchgeführt werden?', answer: 'Die Behandlung sollte nicht durchgeführt werden bei bekannter Überempfindlichkeit gegenüber TCA, Wasserstoffperoxid oder Kojisäure, während Schwangerschaft und Stillzeit, bei offenen Hautstellen oder frischen Wunden, bei akuten Hautentzündungen sowie bei bakteriellen Hautinfektionen oder anderen behandlungsbedürftigen Hauterkrankungen.' },
      { question: 'Für wen ist die Behandlung geeignet?', answer: 'Die Methode ist grundsätzlich für Frauen und Männer aller Hauttypen, Altersgruppen und Jahreszeiten geeignet. Mögliche Effekte sind: Stimulation tieferer Hautschichten, Förderung der Hautelastizität, Regulierung der Talgproduktion, Aufhellung von Pigmentunregelmäßigkeiten sowie Verbesserung von Hautstruktur und -gleichmäßigkeit.' },
      { question: 'Mögliche Nebenwirkungen?', answer: 'Die Behandlung wird im Allgemeinen sehr gut vertragen. Häufig treten nur ein leichtes Brennen und eine milde Rötung auf, die innerhalb weniger Stunden abklingen. Ein sichtbarer Peelingeffekt bleibt in der Regel aus; bei sehr empfindlicher Haut kann eine leichte, unbedenkliche Abschuppung auftreten. Stärkere Hautreaktionen sind aufgrund der speziellen Produktzusammensetzung selten, können jedoch nicht vollständig ausgeschlossen werden.' },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung zum chemischen Peeling',
    subtitle: 'Wir klären Eignung, Ablauf, Pflege und Kosten (Richtwerte) – individuell und transparent.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="chemisches-peeling-schema"
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
      {/* PatientReviews optional: HWG-konform eher durch neutrales Aggregat/Verlinkung ersetzen */}
      <ConsultationSection />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
