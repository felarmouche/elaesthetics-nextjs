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
      'Gezielte Muskelentspannung für ästhetische und medizinische Indikationen: Botulinumtoxin behandelt nicht nur Falten und ermöglicht sanfte Lifting-Effekte, sondern kann auch bei Zähneknirschen, Migräne und starkem Schwitzen eingesetzt werden.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Botulinumtoxin Behandlung Übersicht – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Alle Behandlungen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Botulinumtoxin?',
    content: [
      'Botulinumtoxin ist ein bewährter Wirkstoff, der die Aktivität bestimmter Muskeln gezielt reduziert und dadurch zu einer Entspannung der Muskulatur führt. In der ästhetischen Medizin wird diese Eigenschaft vor allem genutzt, um mimisch bedingte Falten zu reduzieren.',
      'Darüber hinaus bietet Botulinumtoxin heute weit mehr Möglichkeiten als die klassische Faltenbehandlung. Durch eine präzise Anwendung kann es auch zur sanften Gesichtsmodellierung und für dezente Lifting-Effekte eingesetzt werden. Auf diese Weise kann das Gesicht frischer, ausgeglichener und insgesamt jugendlicher wirken, ohne seine Natürlichkeit zu verlieren.',
      'Neben den ästhetischen Einsatzbereichen wird Botulinumtoxin auch bei verschiedenen medizinischen Beschwerden erfolgreich eingesetzt. Dazu gehören zum Beispiel Zähneknirschen und starkes Kieferpressen (Bruxismus), übermäßiges Schwitzen (Hyperhidrose), chronische Migräne sowie in bestimmten Fällen auch Rosazea oder Akne.'
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
        question: 'Wie lange hält die Wirkung an?',
        answer:
          'Der Körper baut den Wirkstoff natürlich ab. Im Durchschnitt hält die Wirkung zwischen 3 und 6 Monaten an, abhängig von verschiedenen Faktoren.',
      },
      {
        question: 'Bin ich sofort nach der Injektion gesellschaftsfähig?',
        answer:
          'Ja. Es entstehen in der Regel nur kleine Einstichstellen, die nach wenigen Minuten kaum noch sichtbar sind.',
      },
      {
        question: 'Wie setzen sich die Kosten zusammen?',
        answer:
          'Die Abrechnung erfolgt transparent nach der Gebührenordnung für Ärzte (GOÄ). Der Preis hängt von der Menge des verbrauchten Materials (Einheiten) und dem Aufwand der Behandlung ab. Weitere Informationen erhalten Sie auf den jeweiligen Unterseiten oder unter "Preise".',
      },
      {
        question: 'Kann die Botulinumtoxin-Wirkung ausbleiben?',
        answer:
          'Manche Menschen reagieren weniger stark auf den Wirkstoff, etwa durch schnelleren Abbau oder eine Antikörperbildung. Dadurch kann die Wirkung geringer oder kürzer ausfallen.',
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
      'Lassen Sie sich beraten. Wir finden gemeinsam heraus, welche Behandlung für Ihr Anliegen die richtige ist.',
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
