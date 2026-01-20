import type { Metadata } from 'next';
import {
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
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';

export const metadata: Metadata = {
  title:
    'Faltenbehandlung in Bremen',
  description:
    'Faltenbehandlung in Bremen mit Hyaluronsäure, Botulinumtoxin & mehr. Für ein frischeres Aussehen und weniger Falten. Jetzt beraten lassen!',
  openGraph: {
    title:
      'Faltenbehandlung in Bremen – Hyaluronfiller, Botulinumtoxin, Polynukleotide & Kollagenstimulation | EL Aesthetics',
    description:
      'Natürlich frischer wirken: Hyaluronfiller für gezielten Volumenaufbau, PRF & Polynukleotide für Hautqualität und Kollagenstimulation (CaHA/PLLA) für definiertere Konturen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/filler/og-image-faltenbehandlung-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/faltenbehandlung',
  },
};

export default function FaltenbehandlungHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Faltenbehandlung in Bremen',
    subtitle:
      'Sie sind auf der Suche nach einer Faltenbehandlung in Bremen. Mit Botulinumtoxin und Hyaluronsäure und anderen Verfahren lassen sich Fältchen glätten, Gesichtszüge entspannen und Ihr Aussehen wieder frisch und erholt wirken. Lassen Sie sich individuell beraten!',
    imageSrc: '/assets/faltenbehandlung/faltenbehandlung_hero.webp',
    imageAlt:
      'Faltenbehandlung mit Hyaluronfiller, PRF, Polynukleotiden und Kollagenstimulation bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Behandlungsansätze - Methoden zur Faltenbehandlung',
    content: [
      'Unter „Faltenbehandlung“ bündeln wir aufeinander abgestimmte Verfahren: Hyaluronsäure, Botulinumtoxin, Polynukleotide, Eigenbluttherapie sowie Kollagenstimulatoren (z. B. CaHA/PLLA) & vieles mehr.',
      'Botulinumtoxin entspannt die Muskulatur und kann gezielt mimische Falten glätten und die Gesichtszüge entspannen.',
      'Hyaluronsäure kann Volumenverluste ausgleichen, Falten sanft polstern und Konturen modellieren – etwa an Lippen, Wangen, Kinn, Jawline oder Nasolabialfalten.',
      'Die Kollagenstimulation (z. B. mit Calciumhydroxylapatit/PLLA) wirkt strukturbildend: Sie unterstützt die körpereigene Kollagenneubildung und Straffung der Haut.',
      'PRF und Polynukleotide sind regenerative Ansätze zur Verbesserung der Hautqualität: Sie können Feuchtigkeit, Elastizität und Dichte fördern und eignen sich besonders für feine Fältchen sowie empfindliche Zonen (z. B. Unterlider/Tränenrinne).',
      'Je nach Zielsetzung lassen sich die Methoden kombinieren. Lassen Sie sich individuell beraten!',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Verfahren zur Behandlung von Falten',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt:
          'Botulinumtoxin zur Faltenbehandlung und Entspannung der Gesichtszüge',
        title: 'Botulinumtoxin',
        description:
          'Mimik entspannen & Falten glätten: Effektive Behandlung für Stirn-, Zornes- & Krähenfüßchen-Falten sowie zur sanften Anhebung der Augenbrauen und Entspannung der Kiefermuskulatur.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-hero.webp',
        imageAlt:
          'Hyaluronsäure zur Faltenbehandlung und Konturierung (Skinbooster & Filler)',
        title: 'Hyaluronsäure',
        description:
          'Gezielter Volumenaufbau & Glättung: Nasolabial- und Marionettenfalten, Lippen, Wangen, Jawline, Kinn. Auch als Skinbooster für verbesserte Hautqualität.',
        treatmentUrl: '/hyaluron',
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
        imageAlt:
          'Kollagenstimulation mit Calciumhydroxylapatit/PLLA zur Konturdefinition von Wangen, Kinn und Jawline',
        title: 'Kollagenstimulation (z. B. CaHA/PLLA)',
        description:
          'Strukturbildender Ansatz für definiertere Konturen: regt die Kollagenneubildung an – ideal für Wangen, Jawline, Kinn oder Hände.',
        treatmentUrl: '/kollagenstimulation',
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
        imageAlt:
          'PRF-Eigenbluttherapie für Hautqualität, feine Fältchen und sensible Regionen wie die Tränenrinne',
        title: 'Eigenbluttherapie (PRF)',
        description:
          'Autologe Regeneration mit platelet-rich fibrin: Verbesserung von Hautstruktur & -elastizität, Milderung feiner Fältchen, ideal auch für Unterlider.',
        treatmentUrl: '/eigenbluttherapie',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt:
          'Polynukleotide (PDRN/PN) zur Hautregeneration und Verbesserung der Hautqualität',
        title: 'Polynukleotide (PN/PDRN)',
        description:
          'Bioregeneration für mehr Hautqualität: unterstützt Feuchtigkeit, Elastizität & Dichte; geeignet bei feinen Fältchen und müder Haut – besonders in zarten Arealen.',
        treatmentUrl: '/polynukleotide',
      },
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haut_hero.webp',
        imageAlt:
          'Mesotherapie zur Hautverjüngung und Faltenbehandlung',
        title: 'Mesotherapie',
        description:
          'Verbessert die Hautqualität, spendet Feuchtigkeit und regt die Kollagenproduktion an.',
        treatmentUrl: '/mesotherapie/haut',
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
        imageAlt:
          'Medizinisches Microneedling zur Hautverjüngung und Faltenbehandlung',
        title: 'Medizinisches Microneedling',
        description:
          'Feine Mikroverletzungen regen die Hautregeneration an: verbessert Hautstruktur, Elastizität und kann feine Fältchen mindern.',
        treatmentUrl: '/medizinisches-microneedling',
      },

    ],
  };

  

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Faltenbehandlung',
    faqs: [
      {
        question:
          'Was ist der Unterschied zwischen Hyaluronfiller, PRF, Polynukleotiden und der Kollagenstimulation?',
        answer:
          'Hyaluronfiller polstern auf und modellieren – ideal für Volumen, Konturen und statische Falten. PRF und Polynukleotide verbessern die Hautqualität (Feuchtigkeit, Elastizität, Dichte) und sind sehr gut für feine Fältchen und sensible Areale geeignet. Die Kollagenstimulation (z. B. CaHA/PLLA) wirkt strukturbildend, unterstützt die körpereigene Kollagenneubildung und definiert Konturen.',
      },
      {
        question: 'Welche Areale lassen sich behandeln?',
        answer:
          'Typisch sind Lippen, Nasolabial- und Marionettenfalten, Wangen/Jawline/Kinn, Kinn-Fältchen, Ohr-/Schläfenareale sowie Unterlider (insb. PRF/Polynukleotide). Die Auswahl richtet sich nach Anatomie und Zielsetzung.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Hyaluronfiller: je nach Produkt/Region meist 6–12 Monate (Lippen eher 6–9 Monate, Kinn/Jawline/Wangen oft länger). Kollagenstimulation (z. B. CaHA/PLLA): häufig 12–18 Monate. PRF & Polynukleotide werden häufig in Serien (z. B. 2–3 Sitzungen) angewendet; der Effekt baut sich über Wochen auf und hält mehrere Monate.',
      },
      {
        question: 'Was eignet sich am besten zum Falten wegspritzen?',
        answer:
          'Es ist individuell unterschiedlich. Je nach Zielen und Anatomie. Bei der persönlichen Beratung, werden wir gemeinsam entscheiden, welche Methode am besten zu Ihren Zielen passt.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Durch feine Nadeln, optionale Betäubungscreme und ggf. Lidocain im Filler wird der Komfort hoch gehalten. Ein leichtes Druck- oder Spannungsgefühl ist möglich und klingt rasch ab.',
      },
      {
        question: 'Kann man die Verfahren kombinieren?',
        answer:
          'Ja – sehr häufig sinnvoll: z. B. Botulinumtoxin für mimische Falten, Hyaluronfiller für Volumen/Kontur, PRF/Polynukleotide für Hautqualität und Kollagenstimulation für mehr Straffheit. Reihenfolge und Intervalle stimme ich individuell ab.',
      },
      {
        question: 'Welche Risiken, Nebenwirkungen und Gegenanzeigen gibt es?',
        answer:
          'Zu den üblichen, harmlosen Reaktionen zählen Schwellung, Rötung, Hämatome; selten Über- oder Unterkorrektur. Gegenanzeigen u. a. Schwangerschaft/Stillzeit, akute Entzündungen, relevante Allergien. PRF ist autolog (aus Eigenblut) und daher in der Regel sehr gut verträglich.',
      },
      {
        question: 'Übernehmen Krankenkassen die Kosten?',
        answer:
          'Ästhetische Faltenbehandlungen sind Selbstzahlerleistungen. Übernahmen erfolgen in der Regel nicht. Einen transparenten Kostenplan erhalten Sie im Beratungsgespräch.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Natürlich frischer wirken – ohne künstlichen Look',
    subtitle:
      'Vereinbaren Sie jetzt Ihren Termin für Hyaluronfiller, PRF, Polynukleotide oder Kollagenstimulation in Bremen.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Unsere Behandlungen zur Faltenbehandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      <FAQSection {...faqData} />
    </div>
  );
}
