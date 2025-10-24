import type { Metadata } from 'next';
import { CTASection, TOCItem, TableOfContents, AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection,  CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps,   ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Faltenbehandlung mit Botulinumtoxin in Bremen | Stirn-, Zornes- & Augenfalten | EL Aesthetics',
  description: 'Ärztliche, individuelle Behandlung mimischer Falten in Bremen mit Botulinumtoxin. Keine Produktnamen, keine Heilversprechen. Aufklärung und persönliche Beratung stehen im Vordergrund.',
  keywords: 'Faltenbehandlung Bremen, Botulinumtoxin, mimische Falten, Stirnfalten, Zornesfalte, Augenfalten, Krähenfüße, Beratung',
  openGraph: {
    title: 'Faltenbehandlung mit Botulinumtoxin in Bremen – EL Aesthetics',
    description: 'Sachliche Information zur ärztlichen Behandlung mimischer Falten. Individuelle Beratung, keine Heilversprechen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-faltenbehandlung-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/faltenbehandlung',
  },
};

export default function BotulinumtoxinFaltenbehandlungPage() {
  const heroData: HeroSectionProps = {
    title: 'Faltenbehandlung mit Botulinumtoxin in Bremen',
    subtitle:
      'Informationen zur ärztlichen Behandlung mimischer Falten (z.\u00A0B. Nasolabialfalte, Zornesfalte, Mundfalten, Augenfalten). Ziel ist ein ausgewogenes, natürliches Erscheinungsbild – stets nach individueller Aufklärung.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Ärztliche Faltenbehandlung mit Botulinumtoxin in Bremen',
    primaryCTA: { text: 'Beratung vereinbaren', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
  };
  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Auf einen Blick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
    { id: 'cta', label: 'Termin vereinbaren' },
  ];

  const introData: IntroSectionProps = {
    title: 'Was ist eine Faltenbehandlung mit Botulinumtoxin?',
    content: [
      'Botulinumtoxin wird in der ästhetischen Medizin seit Jahren angewendet. Es kann die Aktivität bestimmter mimischer Muskeln vorübergehend mindern. Dadurch kann sich die darüberliegende Haut glatter zeigen – zum Beispiel bei Stirnlinien, Glabellafalten (\"Zornesfalte\") oder seitlichen Augenfältchen.',
      'In unserer Praxis in Bremen erfolgt die Anwendung nach individueller Untersuchung und Aufklärung. Die Dosierung und Injektionspunkte werden ärztlich festgelegt. Ziel ist eine zurückhaltende Behandlung, die Ihre persönliche Mimik berücksichtigt.',
      'Hinweis: Aussagen zu Wirksamkeit und Verträglichkeit sind allgemeiner Natur und ersetzen nicht die persönliche Beratung. Individuelle Ergebnisse können variieren; es werden keine Heilversprechen gegeben.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Mögliche Anwendungsbereiche (Beispiele)',
    categories: [
      {
        category: 'Oberes Gesichtsdrittel',
        items: [
          { title: 'Horizontale Stirnfalten' },
          { title: 'Glabellafalten (Bereich zwischen den Augenbrauen)' },
          { title: 'Seitliche Augenfältchen (\"Krähenfüße\")' },
          { title: 'Dezente Anhebung der Augenbrauen (je nach Eignung)' },
        ],
      },
      {
        category: 'Mittleres & unteres Gesicht',
        items: [
          { title: 'Bunny Lines (Nasenrücken)' },
          { title: 'Periorale Fältchen (Lippenbereich, nach Indikation)' },
          { title: 'Mundwinkel-/Kinnbereich (z.\u00A0B. Mentális-Muskel)' },
          { title: 'Gummy Smile (sichtbares Zahnfleisch) – nur nach individueller Beurteilung' },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.faltenbehandlung.zone1}\u20AC*`, iconUrl: '/assets/icons/EUR.svg' },
      { title: 'Dauer', description: 'ca. 15–20 Min.', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Effekte', description: 'zeigen sich h\u00E4ufig nach einigen Tagen', iconUrl: '/assets/icons/TIME.svg' },
      { title: 'Wirkdauer', description: 'zeitlich begrenzt (individuell)', iconUrl: '/assets/icons/CAL.svg' },
      { title: 'Bet\u00E4ubung', description: 'in der Regel nicht erforderlich', iconUrl: '/assets/icons/Spritze.svg' },
      { title: 'Auszeit', description: 'meist keine l\u00E4ngere Ausfallzeit', iconUrl: '/assets/icons/gesellschaft.svg' },
    ],
    note:
      '* Preise orientieren sich an der GO\u00C4 und dienen der Orientierung.\n\n**Hinweis gem\u00E4\u00DF HWG:** Diese Seite dient der sachlichen Information. Es werden keine Heil- oder Wirksamkeitsversprechen abgegeben. Risiken und Nebenwirkungen sind m\u00F6glich und werden im pers\u00F6nlichen Aufkl\u00E4rungsgespr\u00E4ch besprochen. Botulinumtoxin ist verschreibungspflichtig; eine Behandlung erfolgt nur nach \u00E4rztlicher Indikationsstellung.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf (kurz zusammengefasst)',
    steps: [
      {
        number: '01',
        title: 'Beratung & Untersuchung',
        description:
          'Anamnese, Analyse der Mimik und Besprechung der individuellen Zielsetzung. Kl\u00E4rung, ob Botulinumtoxin oder ggf. alternative Verfahren (z.\u00B7B. Hyaluron bei Volumenverlust) in Frage kommen.',
      },
      {
        number: '02',
        title: 'Vorbereitung',
        description:
          'Reinigung/Desinfektion der Haut. Die Anwendung erfolgt mit sehr feinen Nadeln; eine Bet\u00E4ubung ist h\u00E4ufig nicht notwendig.',
      },
      {
        number: '03',
        title: 'Injektion',
        description:
          'Gezielte Applikation in definierte Muskelbereiche. Dosierung und Platzierung erfolgen individuell und zur\u00FCckhaltend.',
      },
      {
        number: '04',
        title: 'Nachsorge',
        description:
          'Allgemeine Verhaltenshinweise (z.\u00B7B. Kopf f\u00FCr einige Stunden aufrecht halten, Reiben/Hitze/Sport kurzfristig meiden). Ein Kontrolltermin kann sinnvoll sein.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente',
          description:
            'Die Einnahme gerinnungshemmender Mittel nur nach \u00E4rztlicher R\u00FCcksprache anpassen. Eigenm\u00E4chtiges Absetzen ist zu vermeiden.',
        },
        {
          title: 'Alkohol',
          description: 'Kurzfristig vorher m\u00F6glichst meiden.',
        },
        {
          title: 'Gesundheitszustand',
          description:
            'Bei akuten Infekten/Hautentz\u00FCndungen Termin verschieben. In Schwangerschaft und Stillzeit keine Anwendung.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        { title: 'Aufrecht bleiben', description: 'Kopf f\u00FCr einige Stunden aufrecht halten.' },
        { title: 'Nicht manipulieren', description: 'Behandelte Areale nicht reiben oder massieren.' },
        { title: 'Sport & Hitze', description: 'Kurzzeitig auf starkes Schwitzen/Hitze verzichten.' },
        { title: 'Kosmetik', description: 'Intensive Gesichtsbehandlungen f\u00FCr ca. 2 Wochen meiden.' },
      ],
    },
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Ärztin',
    description: [
      'Ola El-Armouche, \u00C4rztin f\u00FCr \u00E4sthetische Medizin und Gr\u00FCnderin von EL Aesthetics.',
      'Regelm\u00E4\u00DFige Fortbildungen und eine individuelle Vorgehensweise sind f\u00FCr uns grundlegend. Entscheidend ist stets die pers\u00F6nliche Beratung und Indikationsstellung – ohne Heilversprechen.',
    ],
    ctaText: 'Beratungstermin anfragen',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Anwendungen (nach Indikation)',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-masseter_hero.webp',
        imageAlt: 'Anwendung von Botulinumtoxin am Masseter-Muskel',
        title: 'Masseter (Kiefermuskel)',
        description:
          'Kann je nach Eignung f\u00FCr eine schmalere Kontur genutzt werden; stets individuelle Risiko-Nutzen-Abw\u00E4gung.',
        treatmentUrl: '/botulinumtoxin/masseter',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Mikrodosierte Anwendung in oberfl\u00E4chliche Hautschichten',
        title: 'Mikrodosierte Anwendung (Skin Quality)',
        description:
          'Fl\u00E4chige, sehr niedrige Dosierungen k\u00F6nnen – je nach Befund – eingesetzt werden. Die Eignung wird \u00E4rztlich beurteilt.',
        treatmentUrl: '/botulinumtoxin/mesobotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
        imageAlt: 'Beispielhafte Anwendung bei vermehrtem Schwitzen',
        title: 'Vermehrtes Schwitzen (Hyperhidrose)',
        description:
          'Eine Behandlung kann – nach Untersuchung – in Betracht kommen (z.\u00A0B. Achseln, H\u00E4nde, F\u00FC\u00DFe). Keine Werbung f\u00FCr Arzneimittel; Entscheidung nur nach Indikationsstellung.',
        treatmentUrl: '/botulinumtoxin/hyperhidrose',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-migr\u00E4ne_hero.webp',
        imageAlt: 'Hinweis auf m\u00F6gliche medizinische Anwendung bei chronischer Migr\u00E4ne',
        title: 'Chronische Migr\u00E4ne',
        description:
          'Je nach Befund und Leitlinienlage kann eine Anwendung in spezialisierten Settings gepr\u00FCft werden. Keine Heilversprechen; Entscheidung nur \u00E4rztlich.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'H\u00E4ufige Fragen (FAQ)',
    faqs: [
      {
        question: 'Welche Behandlung ist f\u00FCr meine Falten geeignet?',
        answer:
          'Das h\u00E4ngt von Faltentyp, Hautbild und Muskulatur ab. Botulinumtoxin eignet sich h\u00E4ufig f\u00FCr dynamische Mimikfalten (z.\u00B7B. Stirn/Glabella/seitliche Augenpartie). Bei volumenbedingten Falten (z.\u00A0B. Nasolabialbereich) kommen eher Filler in Betracht. Die Entscheidung erfolgt im Beratungsgespr\u00E4ch – ohne Heilversprechen.',
      },
      {
        question: 'Zornesfalte: Filler oder Botulinumtoxin?',
        answer:
          'Bei ausgepr\u00E4gter Muskelaktivit\u00E4t ist Botulinumtoxin h\u00E4ufig die naheliegende Option. Ist die Falte sehr tief, kann zus\u00E4tzlich ein Filler in Erw\u00E4gung gezogen werden. Es handelt sich stets um eine individuelle Entscheidung nach Aufkl\u00E4rung.',
      },
      {
        question: 'Augenbereich: Welche Optionen gibt es?',
        answer:
          'Seitliche Lachf\u00E4ltchen k\u00F6nnen h\u00E4ufig mit Botulinumtoxin adressiert werden. Feine Linien direkt unter dem Auge ben\u00F6tigen ggf. andere Verfahren (z.\u00B7B. sehr oberfl\u00E4chliche Mikrodosierungen oder geeignete Filler). Die Auswahl erfolgt nach Eignung und Risiko-Nutzen-Abw\u00E4gung.',
      },
      {
        question: 'Nasolabialbereich: Welche Optionen gibt es?',
        answer:
          'Hier stehen meist volumenaufbauende Verfahren im Vordergrund (z.\u00B7B. Filler). Botulinumtoxin kann – je nach Mimik – erg\u00E4nzend gepr\u00FCft werden. Eine Kombination ist m\u00F6glich, jedoch nicht grunds\u00E4tzlich erforderlich.',
      },
      {
        question: 'Welche Kosten sind zu erwarten?',
        answer:
          'Die Kosten richten sich nach Befund, Arealen und Aufwand. Orientierungswerte: Botulinumtoxin im Mundbereich h\u00E4ufig ca. 150–250\u20AC; volumenaufbauende Behandlungen ca. 300–500\u20AC pro Sitzung. Ein individueller Kostenplan wird nach Untersuchung erstellt.',
      },
      {
        question: 'Wie wirkt Botulinumtoxin?',
        answer:
          'Es hemmt vor\u00FCbergehend die Reiz\u00FCbertragung an der behandelten Muskulatur. Dadurch kann sich die Haut glatter zeigen. Der Effekt setzt typischerweise nach einigen Tagen ein und h\u00E4lt zeitlich begrenzt an. Individuelle Ergebnisse variieren.',
      },
      {
        question: 'Ist die Anwendung schmerzhaft?',
        answer:
          'Die Injektionen erfolgen mit feinen Nadeln und sind kurz. Das Empfinden ist individuell. Bei Bedarf k\u00F6nnen schmerzlindernde Ma\u00DFnahmen besprochen werden.',
      },
      {
        question: 'Sieht man die Behandlung?',
        answer:
          'Wir legen Wert auf eine zur\u00FCckhaltende, m\u00F6glichst nat\u00FCrliche Vorgehensweise. Sichtbarkeit und Verlauf sind individuell verschieden.',
      },
      {
        question: 'Welche Risiken gibt es?',
        answer:
          'M\u00F6gliche, meist vor\u00FCbergehende Reaktionen sind R\u00F6tungen, kleine Bluterg\u00FCsse oder Schwellungen. Selten k\u00F6nnen unerw\u00FCnschte Effekte (z.\u00B7B. vor\u00FCbergehendes Lidptosis) auftreten. Eine ausf\u00FChrliche Aufkl\u00E4rung erfolgt vor Ort.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Beratung gew\u00FCnscht?',
    subtitle:
      'Vereinbaren Sie einen unverbindlichen Termin zur individuellen Aufkl\u00E4rung. Es werden keine Heil- oder Wirksamkeitsversprechen abgegeben.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
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
