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
import { getWebPageSchema, getFAQSchema } from '@/lib/schema';

// SEO Metadata: Fokus auf generische Haupt-Keywords
export const metadata: Metadata = {
  title: 'Botulinumtoxin Behandlung Bremen',
  description: 'Botulinumtoxin-Behandlungen in Bremen: Faltenglättung, Masseter, Hyperhidrose & Migräne. Ärztliche Expertise & individuelle Beratung. Jetzt Termin vereinbaren.',
  keywords: ['Botulinumtoxin Bremen', 'Botox Bremen', 'Botox Arzt Bremen', 'Botulinumtoxin Behandlung Bremen'],
  alternates: { canonical: 'https://elaesthetics-bremen.de/botulinumtoxin' },
  openGraph: {
    title: 'Botulinumtoxin Behandlung in Bremen – EL Aesthetics',
    description: 'Ärztliche Botulinumtoxin-Behandlungen in Bremen: Faltenglättung, Masseter, Hyperhidrose & Migräne. Individuelle Beratung.',
    url: 'https://elaesthetics-bremen.de/botulinumtoxin',
    siteName: 'EL Aesthetics Bremen',
    locale: 'de_DE',
    type: 'website',
    images: [{ url: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', width: 1200, height: 630, alt: 'Botulinumtoxin Behandlung Bremen' }],
  },
};

export default function BotulinumtoxinHubPage() {

  // 2. Content-Strategie: Breite Keywords, keine tiefen Details (verhindert Kannibalisierung)

  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin Behandlung in Bremen',
    subtitle:
      'Gezielte Muskelentspannung für Ästhetik und medizinische Indikationen. Erfahren Sie, wie wir mit Botulinumtoxin nicht nur Falten behandeln und Poren verkleinern, sondern auch Zähneknirschen, Migräne und starkes Schwitzen therapieren können.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Botulinumtoxin Behandlung Übersicht – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Alle Behandlungen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Botulinumtoxin?',
    content: [
      // Fokus: Wirkstoff allgemein, Sicherheit, Praxis-Standard.
      // NICHT: "Wie genau wirkt es an der Stirn" (das gehört auf die Faltenseite).
      'Die Botulinumtoxin Behandlung ist ein minimal-invasives Verfahren der ästhetischen und medizinischen Therapie, das die Muskelaktivität gezielt und vorübergehend reduziert.',
      'Ob zur Faltenglättung, bei Zähneknirschen (Masseter), Migräne oder übermäßigem Schwitzen (Hyperhidrose) – wir passen Dosierung und Injektionstechnik individuell an Ihre Anatomie und Zielsetzung an. Das Ziel sind natürliche Ergebnisse, die Ihre Mimik erhalten.',
      'Es werden ausschließlich zertifizierte Präparate verwendet, und wir klären vorab umfassend über Möglichkeiten und Grenzen der Behandlung auf.',
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
        question: 'Wann ist mit dem Wirkeintritt zu rechnen?',
        answer:
          'Die Wirkung kann abhängig vom Zielmuskel, schon ab dem 5. Tag und spätestens nach 14 Tagen sichtbar sein.',
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
          'Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von der Menge des verbrauchten Materials (Einheiten) und dem Schwierigkeitsgrad der Behandlung ab. Weitere Informationen erhalten Sie auf den jeweiligen Unterseiten oder unter "Preise".',
      },
      {
        question: 'Kann die Botulinumtoxin-Wirkung ausbleiben?',
        answer:
          'Manche Menschen reagieren weniger stark auf den Wirkstoff, etwa durch schnelleren Abbau oder eine Antikörperbildung. Dadurch kann die Wirkung geringer oder kürzer ausfallen. Laut Studiendaten können neutralisierende Antikörper in seltenen Fällen auftreten; häufig wird ein Anteil im niedrigen Prozentbereich genannt (z. B. bis etwa 1,5 %).',
      },
    ],
  };

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Botulinumtoxin Behandlungen Bremen',
          description: 'Übersicht zu Botulinumtoxin-Therapien bei EL Aesthetics.',
          url: '/botulinumtoxin',
          about: {
            type: 'MedicalTherapy',
            name: 'Botulinumtoxin Behandlung',
            procedureType: 'NonSurgicalProcedure',
          },
        }), '@context': undefined
      },
      getFAQSchema(faqData.faqs),
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
