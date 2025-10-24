// app/botulinumtoxin/page.tsx (HWG-konform, natürliche Sprache, Keywords eingebettet)
import type { Metadata } from 'next';
import { TableOfContents, TOCItem, DetailedInfoSection, ConsultationSectionProps, ConsultationSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, TreatmentsSection, TreatmentsSectionProps, CTASection } from '@/components/TreatmentPageComponents';
// PatientReviews entfernt (HWG)

export const metadata: Metadata = {
  title: 'Botulinumtoxin Behandlung Bremen – EL Aesthetics Praxis',
  description:
    'Sachliche Information zur Botulinumtoxin Behandlung in Bremen: botulinumtoxin injektion, botulinumtoxin A behandlung, Anwendungsbereiche und Kosten (Richtwerte). Ärztliche Aufklärung erforderlich.',
  keywords: [
    'Botulinumtoxin Behandlung',
    'botulinumtoxin injektion',
    'botulinumtoxin a behandlung',
    'botulinum behandlung',
    'botulinumtoxin bremen',
  ],
  openGraph: {
    title: 'Botulinumtoxin Behandlung in Bremen | EL Aesthetics',
    description:
      'Ästhetische & medizinische Informationen zu Botulinumtoxin A: Falten, Masseter/Bruxismus, Schwitzen, Migräne. Keine Heilversprechen – individuelle Beratung.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.elaesthetics-bremen.de/botulinumtoxin',
    siteName: 'EL Aesthetics Bremen',
    images: ['https://www.elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botulinumtoxin Behandlung in Bremen | EL Aesthetics',
    description:
      'Botulinumtoxin a behandlung für definierte Indikationen. Aufklärung zu Ablauf, Sicherheit und Kosten (Richtwerte).',
    images: ['https://www.elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
  },
  robots: { index: true, follow: true, noarchive: false, nocache: false },
  alternates: { canonical: 'https://www.elaesthetics-bremen.de/botulinumtoxin' },
};

export default function BotulinumtoxinHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin Behandlung in Bremen',
    subtitle:
      'Durch die Botulinumtoxin Behandlung können bereits vorhandene Falten korrigiert, oder auch vorgebeugt werden. Es gibt jedoch auch viele andere Indikationen. Darunter weitere ästhetische, sowie medizinische Indikationen, wie Bruxismus, Hyperhidrose, Migräne, Rosazea.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Botulinumtoxin Behandlung in Bremen: Injektion typischer Zonen wie Stirn, Zornesfalte und Krähenfüße',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Botulinumtoxin / Botulinumtoxin a – Was ist das?',
    content: [
      'Botulinumtoxin (umgangssprachlich „Botox“) ist ein seit vielen Jahren untersuchter Wirkstoff, der in der ästhetischen und medizinischen Therapie verwendet wird.',
      'Was macht Botulinumtoxin? Der Wirkstoff kann die Freisetzung des Botenstoffs Acetylcholin an Nervenendigungen vorübergehend hemmen. Dadurch lässt sich der Muskelzug lokal reduzieren; bei Drüsen kann die Aktivität gedämpft werden.',
      'Was ist Botulinumtoxin Typ A? Typ A ist die in der Praxis am häufigsten eingesetzte Variante. Die Wirkung klingt nach einigen Monaten ab. Ob und in welchem Umfang eine Botulinumtoxin a behandlung sinnvoll ist, wird individuell ärztlich geprüft.',
      'Hinweis gem. HWG: Die Informationen ersetzen nicht das persönliche Arztgespräch. Keine Heil- oder Wirkversprechen.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Botulinumtoxin Behandlungen im Überblick',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Faltenbehandlung mit Botulinumtoxin an Stirn, Zornesfalte und Augenfalten in Bremen',
        title: 'Ästhetische Behandlungen / Faltenbehandlung',
        description:
          'Nefertiti Lift, Erdbeerkinn, Bunny-Lines & mehr... Ziel ist eine subtile Entspannung mimischer Falten bei erhaltener, natürlicher Mimik. Beurteilung des Effekts üblicherweise nach ca. 14 Tagen.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Masseter-Behandlung mit Botulinumtoxin zur Entspannung des Kaumuskels in Bremen',
        title: 'Masseter / Bruxismus',
        description:
          'Lokal begrenzte Anwendung am Kaumuskel mit dem Ziel einer Entlastung bei Pressen/Knirschen und ggf. einer schlankeren Kontur – je nach Ausgangsbefund.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Mesobotox / Microbotox für verfeinertes Hautbild in Bremen',
        title: 'Mesobotox / Microbotox (Skin Quality)',
        description:
          'Sehr oberflächliche Injektionen (oder begleitendes Needling) zur Unterstützung eines verfeinerten Hautbilds (Poren/Glanz/feine Fältchen).',
        treatmentUrl: '/botulinumtoxin/mesobotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-migräne_hero.webp',
        imageAlt: 'Medizinische Botulinumtoxin-Anwendung bei chronischer Migräne',
        title: 'Chronische Migräne (medizinische Indikation)',
        description:
          'Schema-orientierte Injektionen an definierten Kopf-/Nackenpunkten. Geeignetheit und ggf. Kostenübernahme werden individuell geprüft.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
        imageAlt: 'Anwendung gegen übermäßiges Schwitzen (axilläre Hyperhidrose)',
        title: 'Hyperhidrose (Achseln)',
        description:
          'Lokale Anwendung zur Reduktion axillärer Schweißproduktion. Eignung und Alternativen werden ärztlich besprochen.',
        treatmentUrl: '/botulinumtoxin/hyperhidrose',
      },
    ],
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Behandlung passt zu mir?',
    description: [
      'Im Termin klären wir Ihre Ziele, prüfen Indikationen und besprechen Alternativen. Sie erhalten einen individuellen Plan inkl. Dosierungsempfehlung und Kostentransparenz.',
      'Sicherheit: Aufklärung zu möglichen Nebenwirkungen/Kontraindikationen und strukturierte Nachkontrolle. Verlauf wird dokumentiert – ohne Heilversprechen.',
    ],
    ctaText: 'Jetzt Beratung vereinbaren',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Botulinumtoxin Behandlung',
    faqs: [
      {
        question: 'Botulinumtoxin – was ist das?',
        answer:
          'Ein Wirkstoff, der die Signalübertragung an Nervenendigungen vorübergehend hemmen kann. Ziel ist lokal eine Reduktion von Muskelzug bzw. Drüsenaktivität. Einsatz z. B. bei Mimikfalten, Masseter/Bruxismus, Hyperhidrose, chronischer Migräne.',
      },
      {
        question: 'Was macht Botulinumtoxin (wie wirkt es)?',
        answer:
          'Botulinumtoxin hemmt die Freisetzung von Acetylcholin an der motorischen Endplatte. Dadurch entspannt sich Muskulatur im behandelten Areal. Bei Drüsen kann die Aktivität gedämpft werden. Wirkung und Dauer variieren.',
      },
      {
        question: 'Was ist Botulinumtoxin Typ A?',
        answer:
          'Die am häufigsten verwendete Variante in Ästhetik und Medizin. Die Wirkung ist vorübergehend (mehrere Monate) und klingt vollständig ab. Eignung, Dosierung und Kontraindikationen werden ärztlich geprüft.',
      },
      {
        question: 'Was kostet eine Botulinumtoxin Behandlung?',
        answer:
          'Richtwerte (GOÄ-orientiert): Falten ab ca. 200 €; Masseter ca. 300–500 €; Mesobotox ab 250 €; Hyperhidrose ca. 400–700 €; Migräne ggf. Kassenleistung bei zugelassener Indikation. Der konkrete Betrag richtet sich nach Areal, Dosierung und Aufwand.',
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
          'Häufig vorübergehend: Rötung, Schwellung, kleine Hämatome, Druckgefühl/Kopfschmerz. Selten: Asymmetrien, vorübergehendes Herabsinken einzelner Muskeln. Kontraindikationen (z. B. Schwangerschaft/Stillzeit, neuromuskuläre Erkrankungen) werden vorab besprochen.',
      },
      {
        question: 'Wie lange hält die Wirkung?',
        answer:
          'Je nach Areal häufig etwa 3–6 Monate (Falten), 4–6 Monate (Masseter), 6–9 Monate (Hyperhidrose); bei Migräne werden Folgebehandlungen oft im 12‑Wochen‑Intervall erwogen. Abweichungen sind möglich.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung zur Botulinumtoxin Behandlung',
    subtitle:
      'Sie möchten eine Botulinumtoxin a Behandlung in Bremen planen oder sich informieren? Wir klären Eignung, Ablauf, Sicherheit und Kosten (Richtwerte).',
    primaryCTA: { text: 'Jetzt beraten lassen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <DetailedInfoSection />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
