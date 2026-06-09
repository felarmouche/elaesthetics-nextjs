import type { Metadata } from 'next';
import Script from 'next/script';
import {
  CTASection,
  TOCItem,
  TableOfContents,
  ConsultationSection,
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
import { getWebPageSchema } from '@/lib/schema';
import { haarausfall } from "@/data/treatments";

export const metadata: Metadata = {
  title: 'Haarausfall Behandlung Bremen',
  description: 'Haarausfall-Behandlung in Bremen: Ärztliche Analyse & Therapie mit PRP/PRF, Mesotherapie oder Polynukleotiden. Individuelle Beratung. Jetzt Termin vereinbaren.',
  keywords: ['Haarausfall Behandlung Bremen', 'Haarausfall Arzt Bremen', 'Haarausfall Therapie Bremen', 'Haare stärken Bremen'],
  openGraph: {
    title: 'Haarausfall Behandlung in Bremen – EL Aesthetics',
    description: 'Ärztliche Haarausfall-Therapie mit PRP/PRF, Mesotherapie oder Polynukleotiden in Bremen. Individuelle Beratung.',
    url: 'https://elaesthetics-bremen.de/haarausfall-behandlung',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/haarausfall-behandlung/haarausfall-behandlung_hero.webp',
        width: 1200,
        height: 630,
        alt: 'Haarausfall Behandlung in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/haarausfall-behandlung/',
  },
};

export default function HaarausfallHubPage() {
  const schema = getWebPageSchema({
    name: 'Haarausfall Behandlung in Bremen',
    description: 'Übersicht zu Haarausfall-Therapien: PRP/PRF, Mesotherapie und Polynukleotide bei EL Aesthetics.',
    url: '/haarausfall-behandlung',
    about: {
      type: 'MedicalTherapy',
      name: 'Haarausfall Behandlung',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Haarausfall Behandlung in Bremen',
    subtitle:
      'Haarausfall-Therapien: PRP/PRF, Mesotherapie & Polynukleotide',
    imageSrc: '/assets/haarausfall-behandlung/haarausfall-behandlung_hero.webp',
    imageAlt: 'Haarausfall-Behandlung mit PRP und Mesotherapie – EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' }
  };

  const introData: IntroSectionProps = {
    title: 'Behandlungen gegen Haarausfall',
    content: [
      'Die Haarausfall-Behandlung umfasst nicht-chirurgische Verfahren wie PRP/PRF, Mesotherapie und Polynukleotide zur Unterstützung der Haargesundheit, Haarwachstum und Haardichte.',
      'Ein ungünstiges Kopfhautmilieu (z. B. verhärtetes Gewebe/Fibroseareale, Reste älterer Füllstoffe, eingeschränkte Mikrozirkulation) kann die Versorgung der Haarwurzeln beeinträchtigen.',
      'Auf dieser Basis planen wir die Therapie: von unterstützenden Kopfhautbehandlungen über Mesotherapie bis hin zur Eigenbluttherapie mit PRP/PRF. Ziel ist ein nachvollziehbarer, individueller Behandlungsplan.'
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Behandlungsansätze bei Haarausfall',
    treatments: haarausfall
  };



  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Haarausfall-Behandlung',
    faqs: [
      {
        question: 'Welche Therapie ist die richtige für mich?',
        answer:
          'Das hängt von Ursache, Muster und Kopfhautbefund ab. In der Erstberatung prüfen wir, welche Bausteine (z. B. Mesotherapie, Polynukleotide, eigenblutbasierte Verfahren, Microneedling) sinnvoll sind – ggf. kombiniert.'
      },
      {
        question: 'Wie viele Sitzungen brauche ich?',
        answer:
          'Bei seriellen Verfahren werden üblicherweise mehrere Termine im Abstand von einigen Wochen geplant. Die genaue Anzahl und Intervalle legen wir nach Befund fest und passen sie im Verlauf an.'
      },
      {
        question: 'Brauche ich eine vorbereitende Maßnahme?',
        answer:
          'Wenn das Kopfhautmilieu beeinträchtigt ist (z. B. verhärtetes Gewebe), kann eine vorbereitende Behandlung erwogen werden, um die Aufnahmefähigkeit zu verbessern. Das wird individuell ärztlich entschieden.'
      },
      {
        question: 'Was kostet die Behandlung?',
        answer:
          'Die Kosten richten sich nach Befund, Methoden und Umfang. Nach der Analyse erhalten Sie einen transparenten Kostenplan für Ihre Therapie.'
      },
      {
        question: 'Ist das schmerzhaft – und gibt es Risiken oder Nebenwirkungen?',
        answer:
          'Die Kopfhautbehandlungen werden mit feinen Nadeln durchgeführt und sind in der Regel gut toleriert. Möglich sind vorübergehende Rötungen, Schwellungen oder Druckempfindlichkeit. Vorab werden Sie individuell aufgeklärt.'
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: 'Den Ursachen auf den Grund gehen?',
    subtitle:
      'Vereinbaren Sie Ihre ärztliche Kopfhaut-Analyse – wir planen die nächsten Schritte gemeinsam und realistisch.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' }
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="haarausfall-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
