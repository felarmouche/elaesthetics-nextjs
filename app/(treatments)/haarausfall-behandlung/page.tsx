import type { Metadata } from 'next';
import {
  CTASection,
  TOCItem,
  TableOfContents,
  ConsultationSectionProps,
  ConsultationSection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';

export const metadata: Metadata = {
  title: 'Haarausfall Behandlung Bremen | Mittel gegen Haarausfall | EL Aesthetics',
  description:
    'Ärztliche Behandlungen bei Haarausfall in Bremen: PRP, PRF, Eigenbluttherapie, Mesotherapie & moderne Biostimulation. Jetzt beraten lassen!.',
  keywords:
    [
      // Primary (Hub) – vermeidet PRF-spezifische Kannibalisierung
      'Haarausfall Behandlung Bremen',
      'Haarausfall Analyse Bremen',
      'Kopfhautdiagnostik Bremen',
      'Haarsprechstunde Bremen',
      'Hilfe bei Haarausfall Bremen',
      'Haarverlust Therapie Bremen',
      // Problem-/Intent-Keywords (neutral, nicht PRF-geprägt)
      'androgenetische Alopezie Bremen',
      'diffuser Haarausfall Bremen',
      'telogenes Effluvium Bremen',
      'Haarausfall Frauen Bremen',
      'Haarausfall Männer Bremen',
      'Kopfhaut Probleme Bremen',
      // Leistungen ohne PRF-Fokus
      'Mesotherapie Haare Bremen',
      'Polynukleotide Haare Bremen',
      'Haaranalyse Bremen',
      'Trichoskopie Bremen'
    ].join(', '),
  openGraph: {
    title: 'Haarausfall Behandlung in Bremen – Mittel gegen Haarausfall',
    description:
      'Von der Anamnese und Kopfhautdiagnostik bis zu Mesotherapie und moderner Biostimulation: Wir planen Ihre Haarausfall-Behandlung individuell.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/haarausfall/og-image-haarausfall-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/haarausfall-behandlung',
  },
};

export default function HaarausfallHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Haarausfall Behandlung in Bremen',
    subtitle:
      'Der Weg zu voller wirkendem Haar beginnt mit einer fundierten Analyse der Kopfhaut. Es gibt mehrere Mittel gegen Haarausfall. Wir adressieren Ursachen – und planen Ihre Therapie realistisch & individuell.',
    imageSrc: '/assets/haarausfall-behandlung/haarausfall-behandlung_hero.webp',
    imageAlt: 'Symbolbild für eine Haarausfall-Behandlung bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' }
  };

  const introData: IntroSectionProps = {
    title: 'Behandlungen gegen Haarausfall - Welche passt zu mir?',
    content: [
      'Viele Maßnahmen gegen Haarausfall scheitern, weil die eigentliche Ursache unklar bleibt. Deshalb starten wir mit Anamnese, Kopfhaut-Check.',
      'Ein ungünstiges Kopfhautmilieu (z. B. verhärtetes Gewebe/Fibroseareale, Reste älterer Füllstoffe, eingeschränkte Mikrozirkulation) kann die Versorgung der Haarwurzeln beeinträchtigen.',
      'Auf dieser Basis planen wir die Therapie: von unterstützenden Kopfhautbehandlungen über Mesotherapie bis hin zur Eigenbluttherapie mit PRP/PRF. Ziel ist ein nachvollziehbarer, individueller Behandlungsplan – ohne unrealistische Versprechen.'
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Behandlungsansätze bei Haarausfall',
    treatments: [
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haare_hero.webp',
        imageAlt: 'Mesotherapie für die Kopfhaut',
        title: 'Mesotherapie (Kopfhaut)',
        description:
          'Feine Mikroinjektionen versorgen die Kopfhaut gezielt. Die Kur wird an Befund und Ziele angepasst; Intervalle werden ärztlich geplant.',
        treatmentUrl: '/mesotherapie/haare'
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide zur Biostimulation',
        title: 'Polynukleotide für die Haare',
        description:
          'Moderne Biostimulation zur Unterstützung des Kopfhautmilieus und der Regenerationsprozesse – als Baustein im individuellen Plan.',
        treatmentUrl: '/polynukleotide'
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
        imageAlt: 'Mann mit Haarausfall',
        title: 'Eigenbluttherapie (PRP/PRF)',
        description:
          'Körpereigene Ansätze können – je nach Diagnose – in die Serie integriert werden. Details & Indikationsprüfung auf der Behandlungsseite.',
        treatmentUrl: '/eigenbluttherapie/haare' // bewusst interne Verlinkung, aber keine PRF-Keywords im Hub-SEO
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
        imageAlt: 'Microneedling der Kopfhaut',
        title: 'Kopfhaut-Microneedling + Eigenblut',
        description:
          'Gezielte Mikroreize zur Unterstützung des Kopfhautmilieus; kann seriell geplant und mit weiteren PRF kombiniert werden.',
        treatmentUrl: '/eigenbluttherapie/microneedling'
      }
    ]
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Behandlung gegen Haarausfall?',
    description: [
      'Wir besprechen Vorgeschichte, Muster & Auslöser (z. B. genetische Faktoren, Stress, Nährstoffstatus).',
      'Kopfhautbefund, Fotodokumentation und – falls sinnvoll – weitere Abklärung helfen, den Verlauf objektiv zu beurteilen.',
      'Auf dieser Grundlage erstellen wir einen seriellen Therapieplan inkl. Intervallen, Kontrollen und realistischem Erwartungsmanagement.'
    ],
    ctaText: 'Jetzt Beratung vereinbaren',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]'
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
          'Die Kopfhautbehandlungen werden mit feinen Nadeln durchgeführt und sind in der Regel gut toleriert. Möglich sind vorübergehende Rötungen, Schwellungen oder Druckempfindlichkeit. Wir klären Sie vorab individuell auf.'
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
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
