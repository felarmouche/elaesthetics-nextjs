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
        url: 'https://elaesthetics-bremen.de/assets/peeling/og-chemisches-peeling-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Chemisches Peeling in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: { canonical: 'https://elaesthetics-bremen.de/chemisches-peeling' },
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
      'Zur Unterstützung der Hautregeneration, Verfeinerung des Hautbildes und Milderung von Pigmentstörungen.',
    imageSrc: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
    imageAlt: 'Chemisches Peeling zur Hauterneuerung und Pigmentbehandlung – EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist ein chemisches Peeling?',
    content: [
      'Das chemische Peeling ist ein nicht-chirurgisches Verfahren der ästhetischen Medizin zur kontrollierten Hauterneuerung. Es unterstützt die Behandlung von Pigmentflecken, Aknenarben, feinen Falten und fahlem Teint.',
      'Die eingesetzte Wirkstoffkombination besteht aus Trichloressigsäure (TCA), Wasserstoffperoxid (H₂O₂) und Kojisäure. TCA ermöglicht das gezielte Eindringen von H₂O₂ bis in mittlere Hautschichten. Dort werden Kollagenbildung und Wachstumsfaktoren angeregt, Entzündungsprozesse reguliert und die zelluläre Regeneration gefördert. Kojisäure wirkt zusätzlich aufhellend bei leichten Pigmentveränderungen – und das alles ohne sichtbare Abschälung.',
      'In unserer Praxis setzen wir PRX-T33 ein – ein patentiertes Verfahren, das auf dem Konzept der Biorevitalisierung basiert: eine Tiefenstimulation der Haut, in der Regel ohne sichtbare Abschälung und ohne Ausfallzeit.',
      'Das Verfahren ist grundsätzlich für Frauen und Männer aller Hauttypen, Altersgruppen und Jahreszeiten geeignet. Indikationen umfassen u. a. Elastizitätsverlust, feine Falten, Pigmentflecken sowie aknebedingte Veränderungen. Geeignete Areale: Gesicht, Hals, Dekolleté, Oberarme. Kontraindikationen und Alternativen besprechen wir im Arztgespräch.',
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
      { title: 'Wirkeintritt', description: 'sofort + Aufbau über Wochen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkdauer', description: 'häufig ca. 9–12 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert; Abrechnung GOÄ-orientiert. Der konkrete Betrag richtet sich nach Areal/Umfang und wird individuell festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der chemischen Peeling‑Behandlung',
    steps: [
      { number: '01', title: 'Beratung & Hautvorbereitung', description: 'Analyse von Hauttyp und Zielen; Besprechung von Alternativen/Kontraindikationen. Reizende Maßnahmen vorab meiden.' },
      { number: '02', title: 'Reinigung & Vorbereitung', description: 'Gründliche Reinigung/Desinfektion für optimales Eindringen der Wirkstoffe.' },
      { number: '03', title: 'Auftragen & Einmassieren', description: 'PRX‑T33 wird schrittweise appliziert und einmassiert (mögliches Wärme-/Brenngefühl). Einwirkzeit ca. 10–15 Minuten.' },
      { number: '04', title: 'Neutralisation & Pflege', description: 'Abwaschen/Neutralisation, beruhigende Maske und angepasste Pflege.' },
      { number: '05', title: 'Nachsorge & Verlauf', description: 'Heimpflege inkl. konsequentem UV‑Schutz (LSF 50+). Beurteilung des Effekts über die folgenden Wochen; ggf. Serie (3–5 Sitzungen) im 1–2‑Wochen‑Abstand.' },
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
        { title: 'Medikamente', description: 'Einnahme (z. B. Retinoide/Antibiotika) ärztlich mitteilen.' },
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
      { question: 'Wie viele Behandlungen sind nötig?', answer: 'Für sichtbare Ergebnisse werden häufig 3–5 Sitzungen im Abstand von 1–2 Wochen geplant.' },
      { question: 'Wie lange dauert eine Behandlung?', answer: 'In der Regel ca. 45 Minuten inkl. Vorbereitung.' },
      { question: 'Wann wirkt ein chemisches Peeling?', answer: 'Ein erster Effekt ist oft sofort sichtbar; die Tiefenstimulation entwickelt sich über Wochen.' },
      { question: 'Welche Vorteile hat ein chemisches Peeling?', answer: 'Das PRX-T33-Peeling ist ganzjährig anwendbar – auch im Sommer – und verursacht in der Regel keine erhöhte Photosensitivität. Die Behandlung eignet sich für alle Hauttypen und Altersgruppen, erfordert keine Ausfallzeit und ist in der Regel gut verträglich. Ergänzend unterstützt sie ein ebenmäßigeres Hautbild, eine optische Verfeinerung der Hautstruktur sowie eine Aufhellung von Pigmentierungen (je nach Befund).' },
      { question: 'Für wen ist es geeignet?', answer: 'Grundsätzlich für Frauen und Männer vieler Hauttypen geeignet. Nicht empfohlen bei: bekannter Überempfindlichkeit gegen TCA, Wasserstoffperoxid oder Kojisäure; Schwangerschaft/Stillzeit; offenen Wunden oder frischen Verletzungen im Behandlungsbereich; akuten Hautentzündungen; aktiven bakteriellen Hautinfektionen oder behandlungsbedürftigen Hauterkrankungen.' },
      { question: 'Ist es schmerzhaft?', answer: 'Meist gut toleriert; möglich sind kurzzeitiges Brennen/Wärmegefühl beim Einmassieren.' },
      { question: 'Bei empfindlicher Haut?', answer: 'Je nach Befund möglich; die Konzentration und Sitzungsanzahl werden angepasst.' },
      { question: 'Welche Nebenwirkungen sind möglich?', answer: 'Die Behandlung ist in der Regel gut verträglich. Beim Auftragen kann ein leichtes Brennen und eine leichte Rötung auftreten, die sich typischerweise innerhalb weniger Stunden zurückbilden. Sichtbare Abschälung tritt meist nicht auf; bei empfindlicherer Haut kann gelegentlich leichtes Schuppen vorkommen – das ist harmlos und vorübergehend. Stärkere Reaktionen sind aufgrund der spezifischen Formulierung selten. Eine konsequente Nachsorge (UV-Schutz LSF 50+, milde Pflege) ist wichtig, um das Ergebnis zu schützen.' },
      { question: 'Schwangerschaft?', answer: 'Während Schwangerschaft/Stillzeit wird von chemischen Peelings abgeraten.' },
      { question: 'Hilft es gegen Pigmentflecken oder Falten?', answer: 'Je nach Ursache/Befund kann eine Aufhellung/Glättung unterstützt werden. Eine allgemeine Wirkung kann nicht zugesichert werden.' },
      { question: 'Wie oft für langfristige Ergebnisse?', answer: 'Nach Serie (3–5) ggf. Auffrischungen in größeren Abständen – individuell.' },
      { question: 'Ist ein chemisches Peeling besser als Fruchtsäure?', answer: 'Unterschiedliche Mechanismen: Fruchtsäure wirkt oberflächlich exfolierend; PRX‑T33 zielt auf Tiefenstimulation bei meist kurzer Auszeit. Auswahl individuell.' },
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
