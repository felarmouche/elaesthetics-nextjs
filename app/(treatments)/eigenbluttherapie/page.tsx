import type { Metadata } from 'next';
import Script from 'next/script';
import {
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
import { getWebPageSchema } from '@/lib/schema';
import { prfHaar, eigenblut, eigenblutMicroneedling } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Eigenbluttherapie Bremen – PRF & PRP',
  description: 'Eigenbluttherapie mit PRF/PRP in Bremen: Autologe Plasma-Behandlung für Hautregeneration und bei Haarausfall. Ablauf, Kosten & Beratung. Termin vereinbaren.',
  keywords: ['Eigenbluttherapie Bremen', 'PRP Bremen', 'PRF Behandlung Bremen', 'Platelet Rich Plasma Bremen', 'Eigenblut Behandlung Bremen'],
  openGraph: {
    title: 'Eigenbluttherapie (PRF/PRP) in Bremen – EL Aesthetics',
    description: 'Autologe Plasma-Behandlung (PRF/PRP) für Haut & Haare in Bremen. Ärztliche Beratung zu Ablauf und Kosten.',
    url: 'https://elaesthetics-bremen.de/eigenbluttherapie',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/eigenbluttherapie/og-eigenbluttherapie-prf.webp',
        width: 1200,
        height: 630,
        alt: 'Eigenbluttherapie (PRF/PRP) in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie',
  },
};

export default function EigenbluttherapiePRFPage() {
  const schema = getWebPageSchema({
    name: 'Eigenbluttherapie (PRF/PRP) Bremen',
    description: 'Übersicht zu Eigenbluttherapie-Anwendungen (PRF/PRP) für Haut und Haare bei EL Aesthetics.',
    url: '/eigenbluttherapie',
    about: {
      type: 'MedicalTherapy',
      name: 'Eigenbluttherapie (PRF/PRP)',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie in Bremen',
    subtitle:
      'PRF/PRP-Eigenbluttherapie - Natürliche Behandlung zur Unterstützung von Hautqualität und Haarwachstum',
    imageSrc: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Eigenbluttherapie PRF/PRP für Haut und Haare – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratungsgespräch vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Eigenbluttherapie?',
    content: [
      'Plättchenreiches Fibrin (PRF) ist eine moderne Eigenbluttherapie, die als Weiterentwicklung der bekannten PRP-Therapie gilt.',
      'Sie ist eine minimalinvasive und innovative Methode zur Biostimulation und Revitalisierung der Haut sowie bei Haarausfall. Besonders schonend und zu 100 % natürlich, setzt sie ausschließlich auf körpereigene Substanzen.',
      'Während bei der PRP-Therapie Blutplasma verwendet wird, kommt bei der PRF-Behandlung plättchenreiches Fibrin zum Einsatz. Dieses enthält einen höheren Anteil an Wachstumsfaktoren sowie Stammzellen, welche regenerative Prozesse der Haut und der Kopfhaut unterstützen können.',
      'Durch den Verzicht auf Gerinnungshemmer bleibt die injizierte Fibrinmatrix länger im Gewebe und gibt Wachstumsfaktoren über einen längeren Zeitraum ab.'
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungsbereiche der Eigenbluttherapie',
    treatments: [prfHaar, eigenblut, eigenblutMicroneedling],
  };



  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Behandlung',
    faqs: [
      {
        question: 'Wie funktioniert die Eigenbluttherapie mit PRF?',
        answer:
          'Bei der PRF-Methode werden Blutplättchen und Wachstumsproteine aus dem Blut extrahiert und in konzentrierter Form dem Patienten wieder zugeführt. Die Blutplättchen können Wachstumsfaktoren über Tage hinweg abgeben.\n\nEin Beispiel zur Veranschaulichung: Bei einer Wunde beginnt sofort der Prozess der Blutgerinnung. Die Blutplättchen (Thrombozyten) verkleben miteinander und mit den Gefäßwänden. Das Eiweiß Fibrin wirkt dabei wie ein Klebstoff, der die Wunde verschließt. Gleichzeitig setzen Blutplättchen Wachstumsfaktoren frei, die Heilungsprozesse anregen, die Teilung von Knochen- und Bindegewebszellen fördern und sogar die Bildung neuer Blutgefäße unterstützen.\n\nPRF enthält:\n• Blutplättchen (Thrombozyten)\n• Fibrin\n• Wachstumsfaktoren\n• Stammzellen',
      },
      {
        question: 'Welche Wirkung hat PRF?',
        answer:
          '• Regeneration von Bindegewebe\n• Entzündungshemmende Wirkung\n• Bildung von Kollagen\n• Zellerneuerung\n• Verbesserung der Mikrozirkulation\n• Aktivierung von Heilungsprozessen',
      },
      {
        question: 'PRP und PRF – Was ist der Unterschied?',
        answer:
          'PRF ist die Weiterentwicklung der bekannten PRP-Therapie (auch „Vampire-Lifting“ genannt). Während bei PRF keine Gerinnungshemmer eingesetzt werden, macht PRF die Eigenbluttherapie zu 100 % natürlich. PRF enthält mehr Blutplättchen und nutzt Fibrin, das eine gelartige Matrix bildet. Dadurch können Wachstumsfaktoren länger wirken und die regenerative Wirkung verstärken. PRF enthält außerdem Stammzellen, die den Regenerationsprozess weiter fördern.',
      },
      {
        question: 'Wo wird die PRF-Therapie noch eingesetzt?',
        answer:
          'Neben der Hautverjüngung und Behandlung von Haarausfall wird PRF in der Medizin erfolgreich eingesetzt, z. B. in der Zahnmedizin, Implantologie, Orthopädie, Urologie oder zur Förderung der Wundheilung nach chirurgischen Eingriffen.',
      },
      {
        question: 'Was sind mögliche Nebenwirkungen?',
        answer:
          'Nach der Behandlung können vorübergehend leichte Rötungen, Schwellungen und ein Spannungsgefühl auftreten. Die PRF-Therapie gilt als sicher und ist mit keinen größeren Nebenwirkungen verbunden, da ausschließlich körpereigene Substanzen verwendet werden.'
      },
      {
        question: 'Wann kommt die PRF-Behandlung NICHT infrage?',
        answer:
          '• Schwangere und stillende Frauen\n• Personen mit Erkrankungen, die mit einer Störung der Blutgerinnung einhergehen\n• Akute oder chronische Infektionen\n• Akute Entzündungen im Behandlungsbereich',
      },
      {
        question: 'Ist die PRF-Behandlung schmerzhaft?',
        answer:
          'Durch die Verwendung einer lokalanästhetischen Creme sind die Injektionen spürbar, jedoch gut erträglich.',
      },
      {
        question: 'Wie lange hält die Wirkung an?',
        answer:
          'Nach einer Serie von Behandlungen kann das positive Ergebnis 1–2 Jahre anhalten. Faktoren wie Rauchen, Sonneneinwirkung und Lebensgewohnheiten können eine vorzeitige Wiederholung erforderlich machen. Zur Erhaltung empfehlen wir eine Auffrischung 1–2 Mal pro Jahr.',
      },
      {
        question: 'Wie viele Behandlungen mit PRF sind notwendig?',
        answer:
          'Die Anzahl der Behandlungen hängt vom gewünschten Ergebnis und dem Zustand von Haut oder Haaren ab. In der Regel werden 4–6 Behandlungen im Abstand von 4–6 Wochen benötigt. Zur Erhaltung der Wirkung ist eine Auffrischung 1–2 Mal pro Jahr empfehlenswert.',
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
      <Script
        id="eigenbluttherapie-schema"
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
