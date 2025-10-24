import { Metadata } from 'next';
import { TableOfContents, TOCItem, AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, CTASection } from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Masseter Behandlung mit Botulinumtoxin Bremen | Jawline & Bruxismus | EL Aesthetics',
  description: 'Sachliche Information zur Masseter Behandlung mit Botulinumtoxin in Bremen: Indikation, Ablauf, Risiken, masseter behandlung kosten (Richtwerte). Ärztliche Beratung erforderlich.',
  keywords: 'masseter behandlung, masseter behandlung kosten, Masseter Botox Bremen, Bruxismus Bremen, Zähneknirschen Bremen, Kiefermuskel Behandlung, Jawline Bremen',
  openGraph: {
    title: 'Masseter Behandlung (Botulinumtoxin) in Bremen',
    description: 'Informationen zu Ablauf, möglichen Effekten und Kosten der Masseter-Behandlung. Keine Heilversprechen – individuelle ärztliche Aufklärung nötig.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-masseter-bremen.webp'],
  },
  alternates: { canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/masseter' },
};

export default function BotoxMasseterPage() {
  const heroData: HeroSectionProps = {
    title: 'Masseter Behandlung mit Botulinumtoxin in Bremen',
    subtitle:
      'Behandlung gegen (nächtliches) Zähneknirschen, oder zur Gesichtsmodelierung für eine schmalere Kieferpartie durch Entspannung des Kaumuskels mit Botulinumtoxin.',
    imageSrc: '/assets/botulinumtoxin/botox-masseter_hero.webp',
    imageAlt: 'Masseter-Behandlung mit Botulinumtoxin in Bremen',
    primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist die Masseter-Behandlung und wie funktioniert sie?',
    content: [
      'Der Masseter ist ein kräftiger Kaumuskel am Unterkiefer. Bei ausgeprägter Aktivität (z.\u00A0B. Pressen/Zähneknirschen) kann die Kieferpartie breiter wirken und Beschwerden wie Verspannungen auftreten.',
      'Zu den typischen Symptomen gehören unter anderem: Schmerzen in den Kiefergelenken, Zahnschmerzen, Migräne, Tinnitus, Verspannungen im Kopf- und Nackenbereich',
      'Die Behandlung kann auch zur Konturierung der unteren Gesichtshälfte und zum verschmälern markanter Gesichtszüge eingesetzt werden',
      'Bei der Masseter Behandlung wird Botulinumtoxin in definierte Punkte des Muskels injiziert. Der Wirkstoff kann die Signalübertragung zwischen Nerven und Muskel vorübergehend hemmen. Dadurch entspannt sich der Muskel und kann bei wiederholter Anwendung an Volumen verlieren. In welchem Ausmaß dies sinnvoll ist, wird ärztlich geklärt.',
      'In der Regel reduziert sich das Zähneknirschen für etwa 3–6 Monate, während das Botulinumtoxin vom Körper schrittweise abgebaut wird. Die Dauer der Wirkung kann individuell unterschiedlich sein.',
      'Bei regelmäßiger Behandlung kommt es häufig zu einer leichten Rückbildung des Masseter-Muskels. Dadurch ist es möglich, dass sich die Behandlungsintervalle im Laufe der Zeit verlängern lassen.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereiche',
    categories: [
      { category: 'Ästhetisch', items: [ { title: 'Verschmälerung einer breiten Kieferpartie' }, { title: 'Unterstützung einer definierteren Jawline' } ] },
      { category: 'Funktionell', items: [ { title: 'Bruxismus (Zähneknirschen) – individuelle Prüfung' }, { title: 'Kieferverspannungen – je nach Befund' } ] },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: 'Kurzüberblick zur Masseter Behandlung',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.masseter}\u20AC*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Behandlungszeit', description: 'ca. 30 Minuten', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Möglicher Wirkeintritt', description: 'ca. 10–14 Tage', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Sichtbare Konturveränderung', description: 'nach etwa 4–8 Wochen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Mögliche Wirkdauer', description: 'etwa 3–6 Monate', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Betäubung', description: 'in der Regel nicht nötig', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note: '*Richtwert nach GOÄ. Der endgültige Betrag wird nach individueller Aufklärung, Areal und Dosierung festgelegt. Keine Erfolgsgarantie.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf in unserer Praxis',
    steps: [
      { number: '01', title: 'Anamnese & Indikationsprüfung', description: 'Besprechung von Zielen und Beschwerden (z. B. Bruxismus). Untersuchung des Kaumuskels und der Gesichtsproportionen.' },
      { number: '02', title: 'Vorbereitung', description: 'Reinigung/Desinfektion, Markierung der Injektionspunkte. Auf Wunsch Betäubungscreme (Einwirkzeit ca. 30 Min.).' },
      { number: '03', title: 'Mikro-Injektionen', description: 'Injektion an wenigen Punkten pro Seite mit feiner Kanüle. Die Dosierung richtet sich nach Muskelstärke und Zielsetzung.' },
      { number: '04', title: 'Nachkontrolle', description: 'Beurteilung nach ca. 10–14 Tagen. Ggf. Anpassung. Wiederholungen können im Abstand von 3–6 Monaten erwogen werden.' },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorgehinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        { title: 'Schwangerschaft/Stillzeit', description: 'Keine Anwendung in Schwangerschaft oder Stillzeit.' },
        { title: 'Infektionen/Entzündungen', description: 'Keine Behandlung bei lokalen Entzündungen.' },
        { title: 'Blutverdünner', description: 'ASS/Ibuprofen/Diclofenac nur nach ärztlicher Rücksprache absetzen – bitte nicht eigenständig pausieren.' },
        { title: 'Alkohol', description: '48 Stunden vorher möglichst vermeiden.' },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Aufrecht bleiben', description: '3–4 Stunden aufrechte Haltung.' },
        { title: 'Nicht massieren', description: 'Behandelte Areale nicht drücken oder massieren; 2 Wochen keine intensiven Gesichts-/Kiefermassagen.' },
        { title: 'Sport/Hitze', description: '48 Stunden kein intensiver Sport, Sauna/solarium und starke Hitze für 1–2 Wochen meiden.' },
        { title: 'Essen', description: 'In den ersten 24 Stunden sehr harte/zähe Speisen meiden; normale Ernährung ist möglich.' },
        { title: 'Zahnarzttermine', description: 'Planen Sie – wenn möglich – für 2 Wochen keine Eingriffe im Kieferbereich.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ärztliche Beratung in Bremen',
    description: [
      'Wir besprechen Nutzen, mögliche Risiken und Alternativen (z.\u00A0B. Schienen, Physiotherapie). Die Entscheidung für oder gegen eine Masseter Behandlung wird individuell getroffen.',
      'Durchführung nach aktuellen Standards; Kontraindikationen (z.\u00A0B. neuromuskuläre Erkrankungen, Allergien) werden besprochen.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztliche Beratung zur Masseter-Behandlung',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Botulinumtoxin-Anwendungen',
    treatments: [
      { imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp', imageAlt: 'Faltenbehandlung mit Botulinumtoxin', title: 'Faltenbehandlung', description: 'Planung und Dosierung nach Befund – Ziel ist eine Entspannung mimischer Falten.', treatmentUrl: '/botulinumtoxin/faltenbehandlung' },
      { imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp', imageAlt: 'Anwendung gegen Schwitzen', title: 'Hyperhidrose', description: 'Information zur lokalen Anwendung bei axillärer Hyperhidrose – individuelle Eignung erforderlich.', treatmentUrl: '/botulinumtoxin/hyperhidrose' },
      { imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp', imageAlt: 'Microbotox', title: 'Microbotox', description: 'Oberflächliche Anwendung zur Hautbild-Optimierung – Eignung wird geprüft.', treatmentUrl: '/botulinumtoxin/mesobotox' },
      { imageUrl: '/assets/botulinumtoxin/botox-migräne_hero.webp', imageAlt: 'Migräne', title: 'Migräne', description: 'Therapieoption bei chronischer Migräne im Rahmen der ärztlichen Indikation.', treatmentUrl: '/botulinumtoxin/migraene' },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Masseter Behandlung',
    faqs: [
      { question: 'Was ist eine Masseter-Botulinumtoxin-Behandlung und wie funktioniert sie?', answer: 'Botulinumtoxin wird in den Masseter (Kaumuskel) injiziert. Der Wirkstoff kann die Freisetzung von Acetylcholin hemmen und so die Muskelaktivität vorübergehend reduzieren. Ziel ist eine Entspannung des Muskels; ästhetisch kann die Kieferkontur schmaler wirken, funktionell können Pressen/Knirschen reduziert werden – je nach Befund.' },
      { question: 'Übernimmt die Krankenkasse die Kosten für Masseter-Botulinumtoxin bei Zähneknirschen (Bruxismus)?', answer: 'In der Regel handelt es sich für gesetzlich Versicherte um eine Selbstzahlerleistung. Eine Kostenübernahme kann nur in Einzelfällen nach Antragstellung und individueller Prüfung erfolgen. Bitte kontaktieren Sie Ihre Krankenkasse.' },
      { question: 'Lohnt sich Botulinumtoxin im Masseter wirklich?', answer: 'Ob sich die Behandlung „lohnt“, ist individuell. Einige Personen berichten über eine schmalere Kontur und Entlastung bei Bruxismus. Andere bevorzugen Alternativen (z.\u00A0B. Aufbissschiene, Physiotherapie). Wir besprechen Ziele, Möglichkeiten und Grenzen im Termin.' },
      { question: 'Wann sieht man das Ergebnis einer Masseter-Botulinumtoxin-Behandlung?', answer: 'Eine Entspannung ist häufig nach 10–14 Tagen spürbar. Sichtbare Konturveränderungen zeigen sich meist nach 4–8 Wochen, wenn der Muskel bei geringerer Aktivität an Umfang verliert.' },
      { question: 'Wie lange hält das Ergebnis einer Masseter-Behandlung an?', answer: 'Die beobachtete Wirkdauer liegt oft bei etwa 3–6 Monaten. Abweichungen sind möglich; Dauer und Ausmaß sind individuell unterschiedlich.' },
      { question: 'Wird das Gesicht nach einer Masseter-Botulinumtoxin-Behandlung wieder normal?', answer: 'Ja, die Wirkung ist vorübergehend. Nach dem Abklingen der Wirkung nimmt die Muskelaktivität wieder zu. Verlauf und Tempo sind individuell; auf Wunsch kann die Behandlung in Abständen wiederholt werden.' },
      { question: 'Was darf man nach einer Masseter-Botulinumtoxin-Behandlung nicht tun?', answer: 'Für 3–4 Stunden aufrecht bleiben, Areal nicht massieren, 48 Stunden keinen intensiven Sport; starke Hitze 1–2 Wochen meiden. In den ersten 24 Stunden sehr harte/zähe Speisen reduzieren.' },
      { question: 'Ist eine Masseter-Botulinumtoxin-Behandlung schmerzhaft oder riskant?', answer: 'Die Injektionen mit feinen Nadeln sind meist gut tolerierbar. Mögliche Nebenwirkungen: kurzzeitige Rötung/Schwellung/Hämatome. Selten vorübergehende Kau-Beschwerden bei sehr harten Speisen oder leichte Asymmetrien. Kontraindikationen (z.\u00A0B. neuromuskuläre Erkrankungen, Schwangerschaft/Stillzeit) werden vorab besprochen.' },
      { question: 'Wie oft sollte man Masseter-Botulinumtoxin machen, um ein dauerhaftes Ergebnis zu erzielen?', answer: 'Ein „dauerhaftes“ Ergebnis lässt sich nicht zusichern. Viele planen Wiederholungen alle 3–6 Monate; bei mehrmaliger Anwendung kann sich der Effekt teils länger halten. Die Intervalle werden individuell festgelegt.' },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Individuelle Beratung zur Masseter Behandlung',
    subtitle: 'Sie möchten wissen, ob die Anwendung für Sie geeignet ist und welche masseter behandlung kosten einzuplanen sind? Wir beraten Sie gerne.',
    primaryCTA: { text: 'Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
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
      <AreasSection {...areasData} />
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
