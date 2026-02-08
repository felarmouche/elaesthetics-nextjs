import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TableOfContents,
  TOCItem,
  DetailedInfoSection,
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
  CTASection
} from '@/components/TreatmentPageComponents';
import { botoxTreatments } from "@/data/treatments";

// SEO Metadata: Fokus auf generische Haupt-Keywords
export const metadata: Metadata = {
  title: 'Botulinumtoxin Bremen » Fachärztliche Behandlung | EL Aesthetics',
  description: 'Ihr Experte für Botulinumtoxin in Bremen. Übersicht aller Behandlungen: Faltenbehandlung, Bruxismus, Migräne & Hyperhidrose. Jetzt Termin vereinbaren.',
  // Canonical ist wichtig gegen Duplicate Content
  alternates: { canonical: 'https://www.elaesthetics-bremen.de/botulinumtoxin' },
  openGraph: {
    title: 'Botulinumtoxin Behandlung in Bremen | EL Aesthetics',
    description: 'Fachärztliche Behandlungen mit Botulinumtoxin: Von der Faltenkorrektur über Migräne bis zur Hyperhidrose-Therapie.',
    url: 'https://www.elaesthetics-bremen.de/botulinumtoxin',
    siteName: 'EL Aesthetics Bremen',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', width: 1200, height: 630, alt: 'Botulinumtoxin Behandlung Bremen' }],
  },
};

export default function BotulinumtoxinHubPage() {

  // 1. JSON-LD: Nur "MedicalWebPage". FAQ macht die Komponente.
  // Das definiert die Seite als medizinische Übersichtsseite.
  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Botulinumtoxin Behandlungen Bremen',
    description: 'Übersicht zu Botulinumtoxin-Therapien bei EL Aesthetics.',
    provider: {
      '@type': 'MedicalOrganization',
      name: 'EL Aesthetics',
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bremen',
          addressRegion: 'HB',
          addressCountry: 'DE'
        }
      }
    },
    // Wir sagen Google: Diese Seite handelt von der Prozedur allgemein
    about: {
      '@type': 'MedicalProcedure',
      name: 'Botulinumtoxin Behandlung',
      procedureType: 'NonSurgicalProcedure'
    }
  };

  // 2. Content-Strategie: Breite Keywords, keine tiefen Details (verhindert Kannibalisierung)

  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin Behandlung in Bremen',
    subtitle:
        'Gezielte Muskelentspannung für Ästhetik und medizinische Indikationen. Erfahren Sie, wie wir mit Botulinumtoxin nicht nur Falten behandeln und Poren verkleinern, sondern auch Zähneknirschen, Migräne und starkes Schwitzen therapieren können.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Botulinumtoxin Behandlung Übersicht',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Alle Behandlungen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Botulinumtoxin?',
    content: [
      // Fokus: Wirkstoff allgemein, Sicherheit, Praxis-Standard.
      // NICHT: "Wie genau wirkt es an der Stirn" (das gehört auf die Faltenseite).
      'Botulinumtoxin (oft als "Botox" bekannt) ist ein bewährter Wirkstoff, der die Reizübertragung vom Nerv zum Muskel vorübergehend hemmt. Dies ermöglicht eine gezielte Entspannung überaktiver Muskulatur.',
      'In unserer Bremer Praxis setzen wir Botulinumtoxin Typ A sowohl für ästhetische Ziele (Faltenglättung) als auch für medizinische Indikationen ein. Die Dosierung wird dabei stets individuell an Ihre Anatomie angepasst, um natürliche Ergebnisse zu erzielen.',
      'Es werden ausschließlich zertifizierte Markenpräparate verwendet. Es wird vorab umfassend über Möglichkeiten und Grenzen der Behandlung aufgeklärt.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungsgebiete im Überblick',
    // Wichtig: Diese Cards müssen auf die Unterseiten linken (/botulinumtoxin/masseter etc.)
    // Das verteilt den "Link Juice" von dieser Seite auf die Spezialseiten.
    treatments: botoxTreatments,
  };

  // FAQ Strategie: Nur Fragen beantworten, die ALLE Unterseiten betreffen.
  // Spezifische Fragen ("Hilft das gegen Krähenfüße?") gehören NICHT hierher, sondern auf die Unterseite.
  const faqData: FAQSectionProps = {
    title: 'Allgemeine Fragen zu Botulinumtoxin',
    faqs: [
      {
        question: 'Ist Botulinumtoxin ein Gift?',
        answer:
            'Botulinumtoxin ist in extrem hohen Dosen toxisch, wird in der Medizin jedoch in milliardenfacher Verdünnung therapeutisch eingesetzt. In diesen mikroskopischen Dosierungen ist es sicher und gut verträglich.',
      },
      {
        question: 'Wie lange hält eine Behandlung allgemein an?',
        answer:
            'Der Körper baut den Wirkstoff natürlich ab. Im Durchschnitt hält die Wirkung zwischen 3 und 6 Monaten an, abhängig von der Stoffwechselaktivität und dem behandelten Areal.',
      },
      {
        question: 'Bin ich sofort nach der Injektion gesellschaftsfähig?',
        answer:
            'Ja. Es entstehen in der Regel nur kleine Einstichstellen, die nach wenigen Minuten kaum noch sichtbar sind. Sport und Sauna sollten jedoch für 24–48 Stunden gemieden werden.',
      },
      {
        question: 'Wie setzen sich die Kosten zusammen?',
        answer:
            'Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von der Menge des verbrauchten Materials (Einheiten) und dem Schwierigkeitsgrad der Behandlung ab.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
            'Da wir extrem feine Nadeln verwenden, ist die Behandlung sehr schmerzarm. Viele Patienten vergleichen das Gefühl mit einem kurzen Insektenstich. Eine Betäubung ist meist nicht notwendig.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Ihr Termin für Botulinumtoxin in Bremen',
    subtitle:
        'Lassen Sie sich fachärztlich beraten. Wir finden gemeinsam heraus, welche Behandlung für Ihr Anliegen die richtige ist.',
    primaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
    secondaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Wirkstoff' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Allgemeine FAQ' },
  ];

  return (
      <div className="min-h-screen bg-white">
        <Script
            id="medical-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />

        <HeroSection {...heroData} />
        <TableOfContents items={tocItems} />
        <IntroSection {...introData} />
        <DetailedInfoSection />
        <TreatmentsSection {...treatmentsData} />
        <ConsultationSection />
        {/* Deine FAQSection generiert ihr eigenes FAQPage Schema -> Perfekt! */}
        <FAQSection {...faqData} />
        <CTASection {...ctaData} />
      </div>
  );
}