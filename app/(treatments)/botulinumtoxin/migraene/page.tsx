import type { Metadata } from 'next';
import { TableOfContents, TOCItem, ConsultationSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentCareSectionProps, TreatmentsSection, TreatmentsSectionProps, CTASection } from '@/components/TreatmentPageComponents';
// PatientReviews entfernt (HWG)
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Botulinumtoxin bei Migräne Bremen | Chronische Migräne – Informationen & Ablauf | EL Aesthetics',
  description: 'Sachliche Information zu botulinumtoxin migräne: Indikation (chronische Migräne), Ablauf, mögliche Effekte, Häufigkeit, Sicherheit und Kosten (Richtwerte). Ärztliche Beratung erforderlich.',
  keywords: 'botulinumtoxin migräne, migränebehandlung, Migräne Botox Bremen, chronische Migräne, Migräne Behandlung Bremen',
  openGraph: {
    title: 'Botulinumtoxin bei chronischer Migräne – Bremen',
    description: 'Aufklärung zur Migränebehandlung mit Botulinumtoxin: Ablauf, Intervalle, mögliche Wirkung und Kosten. Keine Heilversprechen – individuelle Prüfung.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/botox-migräne_hero.webp'],
  },
  alternates: { canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/migraene' },
};

export default function BotoxMigraenePage() {
  const heroData: HeroSectionProps = {
    title: 'Botulinumtoxin Migräne Behandlung in Bremen',
    subtitle: 'Die Botulinumtoxin Migräne-Behandlung kann gezielt bei Menschen mit häufigen Migräneattacken eingesetzt werden, um Symptome zu lindern.',
    imageSrc: '/assets/botulinumtoxin/botox-migräne_hero.webp',
    imageAlt: 'Illustration: Botulinumtoxin bei chronischer Migräne in Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };

  const introData: IntroSectionProps = {
    title: 'Wie wirkt Botulinumtoxin bei Migräne?',
    content: [
      'Botulinumtoxin ist für die Behandlung der chronischen Migräne zugelassen. Die Anwendung erfolgt in definierten Bereichen an Kopf und Nacken. Ziel ist es, Schmerzbahnen zu modulieren und muskuläre Spannung zu reduzieren – mit der Möglichkeit, Häufigkeit und/oder Intensität von Attacken zu verringern.',
      'Eine Reduktion um ein Drittel gilt in der Regel als Maß für den Therapieerfolg.',
      'Studien belegen, dass selbst bei Patienten, bei denen die Migränefrequenz trotz Botulinumtoxin unverändert bleibt, dennoch eine Linderung der Kopfschmerzen festgestellt wurde.',
      'Wichtig: Botulinumtoxin wirkt nicht bei allen Patienten mit Migräne. Jeder Fall ist individuell, und die Behandlungsergebnisse können von Person zu Person variieren.',
      'Ob die Migränebehandlung mit Botulinumtoxin für Sie geeignet ist, klären wir im ärztlichen Gespräch.',
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Migränebehandlung auf einen Blick',
    benefits: [
      { title: 'Kosten (Richtwert)', description: `ab ${PRICES.botulinum.migraene}\u20AC*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungszeit', description: 'ca. 30–45 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Möglicher Wirkeintritt', description: 'innerhalb von ca. 10–14 Tagen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Mögliche Wirkdauer', description: 'etwa 3–6 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Intervall', description: 'Folgebehandlungen ca. alle 12 Wochen', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'in der Regel nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*GOÄ-orientierter Richtwert. Der konkrete Betrag richtet sich nach Dosis und Aufwand und wird individuell festgelegt. Keine Erfolgsgarantie.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der botulinumtoxin migränebehandlung',
    steps: [
      { number: '01', title: 'Anamnese & Indikationsprüfung', description: 'Erfassung der Anfallstage, Begleitsymptome und Vortherapien. Gemeinsame Entscheidung, ob Botulinumtoxin sinnvoll ist.' },
      { number: '02', title: 'Erstbehandlung (Standardschema)', description: 'Injektionen an festgelegten Punkten an Stirn, Schläfen, Hinterkopf und Nacken (Schema-orientiert). Hygienische Vorbereitung und präzise Dosierung.' },
      { number: '03', title: 'Kontrolle & ggf. Anpassung', description: 'Beurteilung nach etwa 10–14 Tagen. Bei unzureichendem Ansprechen kann die Dosierung/Verteilung angepasst werden.' },
      { number: '04', title: 'Regelmäßige Folgebehandlungen', description: 'Zur Aufrechterhaltung des Effekts werden Intervalle von ca. 12 Wochen erwogen. Verlauf wird dokumentiert.' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorgehinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Gesundheitszustand', description: 'Bei akuten Infekten/Entzündungen Behandlung verschieben.' },
        { title: 'Blutverdünner', description: 'ASS/Ibuprofen/Diclofenac nur nach ärztlicher Rücksprache pausieren – nicht eigenständig absetzen.' },
        { title: 'Alkohol', description: '48 Stunden vorher möglichst vermeiden.' },
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Anwendung in Schwangerschaft oder Stillzeit.' },
        { title: 'Operationen', description: 'Nicht innerhalb von 2 Wochen vor/nach einer Operation.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Sport & Anstrengung', description: 'Für 48 Stunden intensiven Sport und Schwimmbad meiden.' },
        { title: 'Hitze', description: '1–2 Wochen starke Hitze (Sauna, Solarium) und intensive Sonne vermeiden.' },
        { title: 'Massage/Kosmetik', description: 'Für 2 Wochen keine kräftigen Kopf-/Nackenmassagen oder invasive Kosmetik.' },
        { title: 'Alkohol', description: 'Mindestens 48 Stunden keinen Alkohol.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Wir besprechen Nutzen, mögliche Risiken und Alternativen (z.\u00A0B. medikamentöse Prophylaxe, Lebensstil- und Trigger-Management). Die Entscheidung für oder gegen Botulinumtoxin wird individuell getroffen.',
      'Durchführung nach aktuellen Standards; Kontraindikationen (z.\u00A0B. neuromuskuläre Erkrankungen, relevante Allergien) werden besprochen.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliche Beratung zu Botulinumtoxin bei Migräne',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Anwendungen mit Botulinumtoxin',
    treatments: [
      { imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', imageAlt: 'Faltenbehandlung', title: 'Faltenbehandlung', description: 'Planung und Dosierung nach Befund – Ziel ist eine Entspannung mimischer Falten.', treatmentUrl: '/botulinumtoxin/faltenbehandlung' },
      { imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp', imageAlt: 'Masseter/Bruxismus', title: 'Masseter / Bruxismus', description: 'Individuelle Bewertung bei Kieferpressen/Zähneknirschen. Aufklärung zu Nutzen und Risiken.', treatmentUrl: '/botulinumtoxin/masseter' },
      { imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp', imageAlt: 'Hyperhidrose', title: 'Hyperhidrose', description: 'Information zur lokalen Anwendung bei axillärer Hyperhidrose – individuelle Eignung erforderlich.', treatmentUrl: '/botulinumtoxin/hyperhidrose' },
      { imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp', imageAlt: 'Mesobotox/Microbotox', title: 'Mesobotox / Microbotox', description: 'Oberflächliche Anwendung zur Unterstützung der Hautqualität – Eignung wird geprüft.', treatmentUrl: '/botulinumtoxin/mesobotox' },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur botulinumtoxin migränebehandlung',
    faqs: [
      { question: 'Kann Botulinumtoxin bei Migräne wirklich helfen?', answer: 'Bei chronischer Migräne kann eine Anwendung erwogen werden. Einige Personen berichten über eine Verringerung der Anfallstage und/oder der Schmerzintensität. Eine Wirkung ist nicht in jedem Fall zu erwarten.' },
      { question: 'Wie wirkt Botulinumtoxin bei Migräne?', answer: 'Die Wirkung beruht u. a. auf einer Modulation von Schmerzsignalen und einer Entspannung beteiligter Muskulatur in definierten Kopf-/Nackenarealen. Die genaue Wirkweise ist Gegenstand der Forschung.' },
      { question: 'Wie oft muss Botulinumtoxin gegen Migräne gespritzt werden?', answer: 'Zur Aufrechterhaltung des Effekts werden Folgebehandlungen in Intervallen von etwa 12 Wochen erwogen – abhängig vom Verlauf.' },
      { question: 'Was kostet eine Botulinumtoxin-Behandlung gegen Migräne?', answer: `Richtwert: ab etwa ${PRICES.botulinum.migraene}\u00A0€. Der Betrag richtet sich nach Dosis und Aufwand. Abrechnung GOÄ-orientiert; der konkrete Preis wird nach Aufklärung festgelegt.` },
      { question: 'Übernimmt die Krankenkasse die Kosten für Botulinumtoxin bei Migräne?', answer: 'Bei gesetzlich Versicherten ist eine Kostenübernahme grundsätzlich im Rahmen der zugelassenen Indikation möglich, meist in neurologischer Versorgung. In der privatärztlichen Praxis handelt es sich häufig um eine Selbstzahlerleistung. Bitte klären Sie dies mit Ihrer Krankenkasse/Privatversicherung.' },
      { question: 'Wie lange hält die Wirkung von Botulinumtoxin gegen Migräne an?', answer: 'Die beobachtete Wirkzeit liegt häufig bei etwa 3–6 Monaten. Abweichungen sind möglich.' },
      { question: 'Wer darf Botulinumtoxin gegen Migräne spritzen?', answer: 'Die Anwendung sollte durch entsprechend qualifizierte Ärztinnen/Ärzte mit Erfahrung in der Migränebehandlung erfolgen.' },
      { question: 'Was passiert, wenn Botulinumtoxin bei Migräne nicht wirkt?', answer: 'Bei fehlendem Ansprechen werden Intervalle/Dosierung überprüft oder alternative/ergänzende Therapieoptionen (z. B. medikamentöse Prophylaxe, CGRP-Antikörper) erwogen – in Abstimmung mit der behandelnden Ärztin/dem Arzt.' },
      { question: 'Wie läuft eine Botulinumtoxin-Behandlung bei Migräne ab?', answer: 'Schema-orientierte Injektionen an Kopf und Nacken nach vorheriger Aufklärung. Nachsorgehinweise und Verlaufskontrolle nach ca. 10–14 Tagen.' },
      { question: 'Ist Botulinumtoxin gegen Migräne sicher und gibt es Nebenwirkungen?', answer: 'Die Behandlung ist in der Regel gut verträglich. Mögliche, meist vorübergehende Reaktionen sind z. B. Druckgefühl, Kopfschmerz, kleine Hämatome; selten Sehstörungen/Schwäche. Kontraindikationen werden vorab besprochen.' },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung zur Migränebehandlung',
    subtitle: 'Sie möchten wissen, ob „botulinumtoxin migräne“ für Sie in Frage kommt und welche Kosten zu erwarten sind? Wir beraten Sie gerne.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'quickInfos', label: 'Überblick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Anwendungen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
