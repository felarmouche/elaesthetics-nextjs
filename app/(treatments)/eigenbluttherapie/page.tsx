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
  CTASection,
} from '@/components/TreatmentPageComponents';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Eigenbluttherapie (PRF/PRP) Bremen | Autologe Plasma‑Behandlung | EL Aesthetics',
  description:
    'Eigenbluttherapie mit PRF/PRP in Bremen: autologe Plasma‑Behandlung zur Unterstützung der Hautqualität und bei Haarausfall. Infos zu Ablauf, Sitzungen & Kosten.',
  keywords: [
    // Primary / lokal
    'Eigenbluttherapie Bremen',
    'Eigenblut Behandlung',
    'Eigenblutbehandlung Bremen',
    'PRF Behandlung Bremen',
    'PRP Behandlung Bremen',
    // Synonyme / LSI (medizinisch)
    'Autologe Plasma Behandlung',
    'Autologes Plasma',
    'Plasma Therapie Gesicht',
    'Plasma Behandlung Haare',
    'Thrombozytenreiches Plasma',
    'Thrombozytenreiches Fibrin',
    'Eigenplasma Therapie',
    // Intent Haut/Haare
    'Eigenbluttherapie Haut',
    'Eigenbluttherapie Haare',
    'Eigenblut Haarausfall',
    'PRP Haare',
    'PRF Haare',
  ].join(', '),
  openGraph: {
    title: 'Eigenbluttherapie (PRF/PRP) Bremen | Autologe Plasma‑Behandlung',
    description:
      'Körpereigene Plasma‑Behandlung (PRF/PRP) für Haut & Haare in Bremen: sachliche Aufklärung zu Nutzen, Ablauf und Kosten.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/eigenbluttherapie/og-eigenbluttherapie-prf.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie',
  },
};

export default function EigenbluttherapiePRFPage() {
  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie in Bremen',
    subtitle:
      'PRF/PRP – autologe Plasma‑Behandlung für Hautqualität & Haare. Natürlich, ärztlich geplant, mit realistischen Erwartungen.',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Eigenbluttherapie (PRF/PRP) bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratungsgespräch vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist eine PRF Behandlung (Eigenbluttherapie)?',
    content: [
      'Unter Eigenbluttherapie versteht man die Aufbereitung körpereigener Blutbestandteile und deren gezielte Anwendung in Haut oder Kopfhaut. Medizinisch werden u. a. die Begriffe PRF (thrombozytenreiches Fibrin) und PRP (thrombozytenreiches Plasma) verwendet – beides Formen der autologen Plasma‑Behandlung.',
      'Bei PRF entsteht eine feine Fibrin‑Matrix, die gebundene Faktoren zeitlich verzögert freisetzen kann. PRP ist eine flüssige Aufbereitung mit hoher Thrombozytenkonzentration. Welche Variante sinnvoll ist, hängt vom Areal und Ziel ab; dies wird ärztlich besprochen.',
      'Typische Anliegen: Unterstützung der Hautqualität (Textur, feine Linien, Poren, Aknenarben), behutsame Anwendung im Unterlidbereich sowie ergänzend bei verschiedenen Formen von Haarausfall (z. B. androgenetisch, diffus) oder nach Haartransplantation.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungsbereiche der Eigenbluttherapie',
    treatments: [
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
        imageAlt: 'PRF bei Haarausfall in Bremen',
        title: 'Eigenbluttherapie für die Haare',
        description:
          'Autologe Plasma‑Behandlung (PRF/PRP) kann die Kopfhaut unterstützen und die Vitalität von Haarfollikeln fördern – allein oder ergänzend nach Haartransplantation.',
        treatmentUrl: '/eigenbluttherapie/haare',
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
        imageAlt: 'Eigenbluttherapie für die Haut in Bremen',
        title: 'Eigenbluttherapie für die Haut',
        description:
          'Unterstützung der Hautqualität: Textur, feine Linien, Poren & Aknenarben. Für ästhetische Synonyme (Vampir Lifting/Vampire Facial) siehe eigene Seite.',
        treatmentUrl: '/eigenbluttherapie/vampire-lifting',
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
        imageAlt: 'Microneedling mit Eigenbluttherapie in Bremen',
        title: 'Microneedling mit Eigenbluttherapie',
        description:
          'Zeitversetzte Kombination von medizinischem Microneedling mit PRF/PRP zur intensiven Regeneration – z. B. bei Aknenarben.',
        treatmentUrl: '/eigenbluttherapie/microneedling',
      },
    ],
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Beratung zur PRF / PRP‑Behandlung in Bremen',
    description: [
      'Wir klären, ob PRF oder PRP – oder eine Kombination – für Ihr Ziel (Haut oder Haare) sinnvoll ist. Alternativen und Kombinationsoptionen (z.\u00A0B. Microneedling, Skinbooster, Polynukleotide) werden transparent besprochen.',
      'Sie erhalten einen individuellen Plan mit Anzahl der Sitzungen, Intervallen und realistischen Erwartungen sowie Informationen zu möglichen Reaktionen und Nachsorge.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Behandlung',
    faqs: [
      {
        question: 'Für was ist eine Eigenbluttherapie gut?',
        answer:
          'Zur Unterstützung der Hautqualität (Textur, feine Linien, Poren, Aknenarben) sowie ergänzend bei Haarausfall. Es handelt sich um eine autologe Plasma‑Behandlung mit körpereigenen Bestandteilen.',
      },
      {
        question: 'Was ist der Unterschied zwischen PRF und PRP?',
        answer:
          'PRF (thrombozytenreiches Fibrin) bildet eine Matrix, die Faktoren zeitversetzt freisetzen kann; PRP (thrombozytenreiches Plasma) ist flüssig und hochkonzentriert. Auswahl je nach Areal/Ziel – wir beraten individuell.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig und wann sieht man etwas?',
        answer:
          'Oft 4–6 Sitzungen im Abstand von 4–6 Wochen, danach Auffrischungen. Veränderungen entwickeln sich schrittweise; bei Haaren ist Geduld nötig (Haarzyklus).',
      },
      {
        question: 'Was kostet eine Eigenbluttherapie beim Arzt?',
        answer:
          'Ab etwa 300 € pro Sitzung (Richtwert, GOÄ‑orientiert). Ein individueller Kostenplan erfolgt nach Untersuchung und Zieldefinition.',
      },
      {
        question: 'Ist das dasselbe wie „Vampir Lifting“?',
        answer:
          'Der Begriff „Vampir Lifting“ wird umgangssprachlich für ästhetische Anwendungen genutzt. Um Keyword‑Kannibalisierung zu vermeiden, finden Sie diese Begriffe und Details separat auf unserer Seite zum Vampir Lifting.',
      },
      {
        question: 'Gibt es Nebenwirkungen oder Kontraindikationen?',
        answer:
          'Vorübergehend möglich: Rötung, Schwellung, Hämatome, Spannungsgefühl. Nicht geeignet u. a. bei Schwangerschaft/Stillzeit, relevanten Gerinnungsstörungen, akuten Infektionen. Wir klären dies vorab.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Eigenbluttherapie in Bremen',
    subtitle: 'Vereinbaren Sie Ihren Beratungstermin zur PRF/PRP‑Behandlung.',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Anwendungsbereiche' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
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
