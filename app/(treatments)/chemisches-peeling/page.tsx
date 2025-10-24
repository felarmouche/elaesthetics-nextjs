import type { Metadata } from 'next';
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
// PatientReviews import bleibt ungenutzt; bei Bedarf HWG-konform entfernen/ersetzen
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Chemisches Peeling Bremen | PRX-T33 ohne Downtime',
  description:
    'PRX-T33 chemisches Peeling in Bremen: ärztliche Biorevitalisierung für Glow, Pigmentflecken und Aknenarben – in der Regel ohne Ausfallzeit.',
  openGraph: {
    title: 'Chemisches Peeling Bremen | PRX-T33 ohne Downtime',
    description:
      'PRX-T33 Biorevitalisierung bei EL Aesthetics Bremen: Hinweise zu Ablauf, möglichen Effekten und Pflege – ohne sichtbare Schälung.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/peeling/og-chemisches-peeling-bremen.webp'],
  },
  alternates: { canonical: 'https://elaesthetics-bremen.de/chemisches-peeling' },
};

export default function ChemischesPeelingPage() {
  const heroData: HeroSectionProps = {
    title: 'Chemisches Peeling in Bremen',
    subtitle:
      'Biorevitalisierung mit chemischem Peeling - Es können verschiedene biologische Prozesse angeregt werden, z.B. Bildung von kollagenen Fasern & Freisetzung von Wachstumsfaktoren, welche die Regeneration der Haut unterstützen, die Hautstruktur verbessern & Pigmentstörungen entgegengewirken können.',
    imageSrc: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
    imageAlt: 'Chemisches Peeling mit Biorevitalisierung bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist ein chemisches Peeling?',
    content: [
      'Ein chemisches Peeling ist eine medizinische Anwendung zur Hauterneuerung. Im Unterschied zu mechanischen Peelings werden biologische Regenerationsprozesse in tieferen Hautschichten angestoßen.',
      'Die eingesetzte Wirkstoffkombination besteht unter anderem aus Trichloressigsäure (TCA), Wasserstoffperoxid und Kojisäure. Durch die spezielle Formulierung dringen die Substanzen bis in mittlere Hautschichten vor, ohne eine sichtbare Abschälung zu verursachen.',
      'In unserer Praxis kommt das PRX‑T33 zum Einsatz (TCA in patentierter Kombination mit H2O2/Kojisäure). Ziel ist eine Tiefenstimulation –  in der Regel ohne sichtbare Abschälung und ohne Ausfallzeit ',
      'Eignung u. a. bei Elastizitätsverlust, feinen Falten, Pigmentflecken sowie bei Akne/aknebedingten Veränderungen. Areale: Gesicht, Hals, Dekolleté, Oberarme. Hinweise und Alternativen besprechen wir im Arztgespräch.',
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
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Die Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: 'ab 180€ pro Behandlung*', iconUrl: '/assets/icons/EUR.svg' },
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
        { title: 'Sport/Schwitzen', description: '24–48 Stunden keinen intensiven Sport.' },
        { title: 'Sauna/Solarium', description: 'Für 2 Wochen vermeiden.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Wir besprechen Nutzen, mögliche Risiken und Alternativen (z.\u00A0B. Microneedling, Skinbooster, topische Therapien).',
      'Kontraindikationen und Heimpflege werden individuell geklärt. Keine Heilversprechen – Ergebnis und Dauer sind individuell unterschiedlich.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen zur Hautverbesserung',
    treatments: [
      { imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp', imageAlt: 'Medizinisches Microneedling', title: 'Medizinisches Microneedling', description: 'Stimulation von Kollagen/Elastin zur Verbesserung der Hautstruktur (Narben/Poren).', treatmentUrl: '/medizinisches-microneedling' },
      { imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp', imageAlt: 'Eigenbluttherapie (PRF)', title: 'Eigenbluttherapie (PRF)', description: 'Aufbereitete Eigenblutbestandteile zur Unterstützung der Regeneration.', treatmentUrl: '/hautverbesserung/eigenbluttherapie' },
      { imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp', imageAlt: 'Skinbooster', title: 'Skinbooster (klassisch)', description: 'Flächige Hyaluronbehandlung für Hydration und Struktur.', treatmentUrl: '/hautverbesserung/skinbooster' },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zum chemischen Peeling',
    faqs: [
      { question: 'Wie viele Behandlungen sind nötig?', answer: 'Für sichtbare Ergebnisse werden häufig 3–5 Sitzungen im Abstand von 1–2 Wochen geplant.' },
      { question: 'Wie lange dauert eine Behandlung?', answer: 'In der Regel ca. 45 Minuten inkl. Vorbereitung.' },
      { question: 'Wann wirkt ein chemisches Peeling?', answer: 'Ein erster Effekt ist oft sofort sichtbar; die Tiefenstimulation entwickelt sich über Wochen.' },
      { question: 'Welche Vorteile hat ein chemisches Peeling?', answer: 'Unterstützung eines ebenmäßigeren Hautbilds, optische Verfeinerung der Struktur, begleitende Aufhellung von Pigmentierungen (je nach Befund).' },
      { question: 'Für wen ist es geeignet?', answer: 'Grundsätzlich für viele Hauttypen; Ausnahmen bei Schwangerschaft/Stillzeit, akuten Infektionen oder bekannten Unverträglichkeiten.' },
      { question: 'Ist es schmerzhaft?', answer: 'Meist gut toleriert; möglich sind kurzzeitiges Brennen/Wärmegefühl beim Einmassieren.' },
      { question: 'Bei empfindlicher Haut?', answer: 'Je nach Befund möglich; die Konzentration und Sitzungsanzahl werden angepasst.' },
      { question: 'Welche Nebenwirkungen?', answer: 'Vorübergehende Rötung/Spannungsgefühl; selten stärkere Reaktionen. Nachsorge (UV‑Schutz/Pflege) beachten.' },
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
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      {/* PatientReviews optional: HWG-konform eher durch neutrales Aggregat/Verlinkung ersetzen */}
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
