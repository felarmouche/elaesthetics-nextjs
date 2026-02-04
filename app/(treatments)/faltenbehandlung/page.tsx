import type { Metadata } from 'next';
import {
  ConsultationSectionProps,
  ConsultationSection,
  TableOfContents,
  TOCItem,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  CTASection,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';

// Import der zentralen Daten aus deiner treatments.ts
import {
  faltenRelaxation,
  faltenSkinQuality,
  faltenVolume
} from '@/data/treatments'; // Pfad ggf. anpassen, falls du den Ordner nur "data" genannt hast

export const metadata: Metadata = {
  title: 'Faltenbehandlung in Bremen | Botox, Hyaluron & mehr',
  description:
      'Faltenbehandlung in Bremen: Mimikfalten glätten mit Botox, Volumenaufbau mit Hyaluron & Hautverjüngung mit Polynukleotiden. Jetzt beraten lassen!',
  openGraph: {
    title:
        'Faltenbehandlung in Bremen – Hyaluronfiller, Botulinumtoxin, Polynukleotide & Kollagenstimulation',
    description:
        'Natürlich frischer wirken: Hyaluronfiller für gezielten Volumenaufbau, PRF & Polynukleotide für Hautqualität und Kollagenstimulation für definiertere Konturen.',
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
        'Sie sind auf der Suche nach einer Faltenbehandlung in Bremen? Mit Botulinumtoxin, Hyaluronsäure und regenerativen Verfahren lassen sich Fältchen glätten, Gesichtszüge entspannen und Ihr Aussehen wieder frisch und erholt wirken. Lassen Sie sich individuell beraten!',
    imageSrc: '/assets/faltenbehandlung/faltenbehandlung_hero.webp',
    imageAlt:
        'Faltenbehandlung mit Hyaluronfiller, PRF, Polynukleotiden und Kollagenstimulation bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#mimik' },
  };

  const introData: IntroSectionProps = {
    title: 'Behandlungsansätze - Methoden zur Faltenbehandlung',
    content: [
      'Unter „Faltenbehandlung“ bündeln wir aufeinander abgestimmte Verfahren: Hyaluronsäure, Botulinumtoxin, Polynukleotide, Eigenbluttherapie sowie Kollagenstimulatoren (z. B. CaHA/PLLA) & vieles mehr.',
      'Botulinumtoxin entspannt die Muskulatur und kann gezielt mimische Falten glätten und die Gesichtszüge entspannen.',
      'Hyaluronsäure kann Volumenverluste ausgleichen, Falten sanft polstern und Konturen modellieren – etwa an Lippen, Wangen, Kinn, Jawline oder Nasolabialfalten.',
      'Die Kollagenstimulation wirkt strukturbildend: Sie unterstützt die körpereigene Kollagenneubildung und Straffung der Haut.',
      'PRF und Polynukleotide sind regenerative Ansätze zur Verbesserung der Hautqualität: Sie können Feuchtigkeit, Elastizität und Dichte fördern und eignen sich besonders für feine Fältchen sowie empfindliche Zonen.',
      'Je nach Zielsetzung lassen sich die Methoden kombinieren. Lassen Sie sich individuell beraten!',
    ],
  };

  // --- KATEGORIE 1: MIMIK (Zornesfalte, Stirn, Krähenfüße) ---
  const relaxationData: TreatmentsSectionProps = {
    title: 'Mimische Falten',
    treatments: faltenRelaxation
  };

  // --- KATEGORIE 2: VOLUMEN (Nasolabial, Marionettenfalten) ---
  const volumeData: TreatmentsSectionProps = {
    title: 'Statische Falten & Volumenverlust',
    treatments: faltenVolume
  };

  // --- KATEGORIE 3: HAUTQUALITÄT (Wangenlinien, Plisseefältchen) ---
  const qualityData: TreatmentsSectionProps = {
    title: 'Knitterfältchen & Feine Linien',
    treatments: faltenSkinQuality
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
    { id: 'mimik', label: 'Mimik & Botox' },
    { id: 'volumen', label: 'Volumen & Lifting' },
    { id: 'quality', label: 'Knitterfältchen & Feine Linien' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
      <div className="min-h-screen bg-white">
        <HeroSection {...heroData} />
        <TableOfContents items={tocItems} />
        <IntroSection {...introData} />

        {/* Sektion 1: Mimik */}
        <div id="mimik" className="scroll-mt-24">
          <TreatmentsSection {...relaxationData} />
        </div>

        {/* Sektion 2: Volumen */}
        <div id="volumen" className="scroll-mt-24 -mt-16 md:-mt-24">
          <TreatmentsSection {...volumeData} />
        </div>

        {/* Sektion 3: Hautqualität */}
        <div id="quality" className="scroll-mt-24 -mt-16 md:-mt-24">
          <TreatmentsSection {...qualityData} />
        </div>

        <ConsultationSection />

        {/* Die FAQSection generiert ihr Schema jetzt selbst! */}
        <FAQSection {...faqData} />

        <CTASection {...ctaData} />
      </div>
  );
}