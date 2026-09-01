import type { Metadata } from 'next';
import Script from 'next/script';
import {
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
import { getWebPageSchema } from '@/lib/schema';

import {
  faltenRelaxation,
  faltenSkinQuality,
  faltenVolume
} from '@/data/treatments'; // Pfad ggf. anpassen, falls du den Ordner nur "data" genannt hast

export const metadata: Metadata = {
  title: 'Faltenbehandlung Bremen – Alle Methoden',
  description: 'Faltenbehandlung in Bremen: Alle Methoden im Vergleich – Botulinumtoxin, Hyaluron, Biostimulation & Polynukleotide. Welche Methode passt zu Ihnen? Jetzt beraten lassen.',
  keywords: ['Faltenbehandlung Bremen', 'Falten entfernen Bremen', 'Anti-Aging Bremen', 'Faltenunterspritzung Bremen'],
  openGraph: {
    title: 'Faltenbehandlung Bremen – Alle Methoden im Vergleich',
    description: 'Botulinumtoxin, Hyaluron, Biostimulation oder Polynukleotide? Ärztliche Faltenbehandlung in Bremen.',
    url: 'https://elaesthetics-bremen.de/faltenbehandlung',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/faltenbehandlung/faltenbehandlung_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Faltenbehandlung in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/faltenbehandlung/',
  },
};

export default function FaltenbehandlungHubPage() {
  const schema = getWebPageSchema({
    name: 'Faltenbehandlung in Bremen',
    description: 'Übersicht zu Faltenbehandlungs-Therapien: Botulinumtoxin, Hyaluronsäure und regenerative Verfahren bei EL Aesthetics.',
    url: '/faltenbehandlung',
    about: {
      type: 'MedicalTherapy',
      name: 'Faltenbehandlung',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Faltenbehandlung in Bremen',
    subtitle:
      'Welche Methode passt zu Ihren Falten? Botulinumtoxin, Hyaluronsäure, Biostimulation oder Polynukleotide?',
    imageSrc: '/assets/faltenbehandlung/faltenbehandlung_hero.webp',
    imageAlt: 'Faltenbehandlung mit Hyaluron und Botulinumtoxin – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#mimik' },
  };

  const introData: IntroSectionProps = {
    title: 'Welche Methode gegen Falten passt zu Ihnen?',
    content: [
      'Die Faltenbehandlung umfasst Verfahren der ästhetischen Medizin wie Botulinumtoxin, Hyaluronsäure und regenerative Methoden zur Glättung von Falten und Verbesserung der Hautqualität.',
      'Botulinumtoxin entspannt die Muskulatur und kann gezielt mimische Falten glätten und die Gesichtszüge entspannen.',
      'Hyaluronsäure kann Volumenverluste ausgleichen, Falten sanft polstern und Konturen modellieren – etwa an Lippen, Wangen, Kinn, Jawline oder Nasolabialfalten.',
      'Die Biostimulation wirkt strukturbildend: Sie unterstützt die körpereigene Kollagenneubildung und Straffung der Haut. Schrittweise und nachhaltig.',
      'PRF und Polynukleotide sind moderne regenerative Behandlungsansätze zur Verbesserung der Hautqualität. Sie können Feuchtigkeitsgehalt, Elastizität und Dichte der Haut positiv beeinflussen. Besonders geeignet sind sie für feine Fältchen, empfindliche Areale sowie zur unterstützenden Regeneration der Haut.',
      'Je nach Zielsetzung lassen sich die Methoden kombinieren. In der persönlichen Beratung klären wir, welche Behandlung oder Kombination am besten zu Ihren Zielen und Ihrer Anatomie passt.',
    ],
  };

  const relaxationData: TreatmentsSectionProps = {
    title: 'Mimische Falten',
    treatments: faltenRelaxation
  };

  const volumeData: TreatmentsSectionProps = {
    title: 'Statische Falten & Volumenverlust',
    treatments: faltenVolume
  };

  const qualityData: TreatmentsSectionProps = {
    title: 'Knitterfältchen & Feine Linien',
    treatments: faltenSkinQuality
  };


  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Faltenbehandlung',
    faqs: [
      {
        question:
          'Was ist der Unterschied zwischen Hyaluronfiller, PRF, Polynukleotiden und der Biostimulation?',
        answer:
          'Hyaluronfiller polstern auf und modellieren – ideal für Volumen, Konturen und statische Falten. PRF und Polynukleotide verbessern die Hautqualität (Feuchtigkeit, Elastizität, Dichte) und sind sehr gut für feine Fältchen und sensible Areale geeignet. Die Biostimulation (z. B. CaHA/PLLA) wirkt strukturbildend, unterstützt die körpereigene Kollagenneubildung und definiert Konturen.',
      },
      {
        question: 'Welche Areale lassen sich behandeln?',
        answer:
          'Typisch sind Lippen, Nasolabial- und Marionettenfalten, Wangen/Jawline/Kinn, Kinn-Fältchen, Ohr-/Schläfenareale sowie Unterlider (insb. PRF/Polynukleotide). Die Auswahl richtet sich nach Anatomie und Zielsetzung.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Hyaluronfiller: je nach Produkt/Region meist 6–12 Monate (Lippen eher 6–9 Monate, Kinn/Jawline/Wangen oft länger). Biostimulation (z. B. CaHA/PLLA): häufig 12–18 Monate. PRF & Polynukleotide werden häufig in Serien (z. B. 2–3 Sitzungen) angewendet; der Effekt baut sich über Wochen auf und hält mehrere Monate.',
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
          'Ja – sehr häufig sinnvoll: z. B. Botulinumtoxin für mimische Falten, Hyaluronfiller für Volumen/Kontur, PRF/Polynukleotide für Hautqualität und Biostimulation für mehr Straffheit. Reihenfolge und Intervalle stimme ich individuell ab.',
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
      'Vereinbaren Sie jetzt Ihren Termin für Hyaluronfiller, PRF, Polynukleotide oder Biostimulation in Bremen.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'mimik', label: 'Mimik & Botulinumtoxin' },
    { id: 'volumen', label: 'Volumen & Lifting' },
    { id: 'quality', label: 'Knitterfältchen & Feine Linien' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faltenbehandlung-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />

      <div id="mimik" className="scroll-mt-24">
        <TreatmentsSection {...relaxationData} />
      </div>

      <div id="volumen" className="scroll-mt-24 -mt-16 md:-mt-24">
        <TreatmentsSection {...volumeData} />
      </div>

      <div id="quality" className="scroll-mt-24 -mt-16 md:-mt-24">
        <TreatmentsSection {...qualityData} />
      </div>

      <ConsultationSection />

      <FAQSection {...faqData} />

      <CTASection {...ctaData} />
    </div>
  );
}