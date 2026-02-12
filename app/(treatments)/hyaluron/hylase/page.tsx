import type { Metadata } from 'next';
import Script from 'next/script';
import {PRICES} from '@/lib/constants'
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
  HubTeaserSection,
  TableOfContents,
  TOCItem,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  ProcessSection,
  ProcessSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSectionProps,
  TreatmentsSection
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Hylase Behandlung Bremen | Hyaluron auflösen',
  description: 'Hylase Behandlung in Bremen: Hyaluron sicher auflösen bei Lippen, Tränenrinne, Knötchen & mehr ➤ Jetzt Termin buchen',
  keywords: 'Hylase Behandlung Bremen, Hylase Kosten Bremen, Hylase Lippen auflösen Bremen, Hyaluron auflösen Bremen, Hylase Erfahrung, Hyaluronidase Bremen, Hylase Nebenwirkungen, Lippen auflösen Hylase, Hylase Wirkung, Hyaluron entfernen Kosten Bremen, Hylase Tränenrinne, Hylase Nase, Hylase Augenringe',
  openGraph: {
    title: 'Hylase Behandlung Bremen – Hyaluron auflösen | EL Aesthetics',
    description: 'Sichere Hylase-Behandlung in Bremen: Hyaluron-Filler auflösen bei Lippen, Knötchen & Asymmetrien – schnelle Wirkung, erfahrene Ärztin.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/hylase/og-hyaluronidase-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluron/hylase',
  },
};

export default function HyaluronidaseHylasePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { ...getWebPageSchema({
        name: 'Hylase-Behandlung (Hyaluronidase) in Bremen',
        description: 'Ärztliche Behandlung zum Auflösen von Hyaluronsäure mit Hylase (Hyaluronidase).',
        url: '/hyaluron/hylase',
      }), '@context': undefined },
      getMedicalProcedureSchema({
        name: 'Hylase-Behandlung (Hyaluronidase)',
        type: 'MedicalProcedure',
        bodyLocation: 'Face',
        description: 'Enzym-Injektion mit Hyaluronidase (Hylase) zum gezielten Abbau von Hyaluronsäure-Fillern bei Korrekturbedarf oder Komplikationen.',
        howPerformed: 'Injektion',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: 'Hylase Behandlung in Bremen',
    subtitle: 'Hyaluron mit Hylase (Hyaluronidase) auflösen: Lippen, Knötchen & Asymmetrien korrigieren. Minimal-invasiv. Jetzt Termin zur Hylase-Behandlung buchen.',
    imageSrc: '/assets/hyaluron/hyaluron-hylase_hero.webp',
    imageAlt: 'Hylase-Behandlung zum Auflösen von Hyaluron – EL Aesthetics Bremen',
    primaryCTA: { text: 'Hylase-Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Hylase?',
    content: [
      'Die Hylase-Behandlung (Hyaluronidase) ist ein minimal-invasives Verfahren zur gezielten Auflösung von Hyaluronsäure-Fillern bei Überkorrekturen, Asymmetrien oder Komplikationen. ',
      'Die Wirkung setzt in der Regel zeitnah ein. Je nach Menge des aufzulösenden Hyalurons sind erste Veränderungen meist innerhalb von Stunden sichtbar, der vollständige Abbau erfolgt üblicherweise innerhalb von 24-48 Stunden.',
      'Besonders wichtig: Hylase dient auch als unverzichtbares Notfall-Medikament bei Gefäßverschlüssen. Jede seriöse Praxis, die Hyaluron-Unterspritzungen durchführt, sollte Hylase stets griffbereit haben.',
      'Bei EL Aesthetics in Bremen bieten wir die Hylase-Behandlung zur Korrektur von Hyaluron-Fillern sowie als Notfallvorsorge an.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Hyaluron auflösen: Anwendungsbereiche in Bremen',
    categories: [
      {
        category: 'Häufigste Bereiche für Hyaluronidase',
        items: [
          {
            title: 'Hylase Lippen auflösen',
            description: 'Hylase-Behandlung bei Lippen: Auflösung von Überkorrekturen, Asymmetrien, Knötchen und zu viel Hyaluron in den Lippen. Häufigster Anwendungsbereich für Hylase mit schneller Wirkung.',
          },
          {
            title: 'Hylase Tränenrinne / Augenringe',
            description: 'Hylase bei Augenringen: Korrektur von Tyndall-Effekt, Schwellungen und verrutschten Fillern im Unterlidbereich mit gezielter Hylase-Behandlung.',
          },
          {
            title: 'Hylase Nase',
            description: 'Hylase-Behandlung an der Nase: Auflösung unerwünschter Wülste oder Überkorrekturen nach Nasenkorrektur mit Hyaluron.',
          },
          {
            title: 'Nasolabialfalten mit Hylase korrigieren',
            description: 'Hylase-Behandlung bei Nasolabialfalten: Auflösung von Wülsten, Unebenheiten oder übermäßigem Volumen',
          },
          {
            title: 'Wangen & Kinn',
            description: 'Hylase-Behandlung für Wangen und Kinn: Korrektur von übermäßigem Volumen oder Asymmetrien nach Hyaluron-Unterspritzung',
          },
          {
            title: 'Stirn',
            description: 'Hylase-Behandlung an der Stirn: Entfernung unerwünschter Filler-Ansammlungen',
          },
        ],
      },
      {
        category: 'Spezielle Indikationen für Hylase',
        items: [
          {
            title: 'Knötchen mit Hylase auflösen',
            description: 'Hylase-Behandlung bei Knötchen: Auflösung tastbarer oder sichtbarer Verhärtungen nach Hyaluron-Fillern – schnelle Wirkung innerhalb von 24 Stunden.',
          },
          {
            title: 'Hylase bei Nebenwirkungen',
            description: 'Hylase-Behandlung bei Komplikationen: Korrektur von Tyndall-Effekt, bläulichen Verfärbungen oder allergischen Reaktionen auf Hyaluron-Filler.',
          },
          {
            title: 'Hylase bei Gefäßverschluss (Notfall)',
            description: 'Sofortige Hylase-Behandlung bei arterieller Okklusion zur Vermeidung von Nekrosen – lebensrettende Notfallbehandlung',
          },
          {
            title: 'Asymmetrien korrigieren',
            description: 'Hylase-Behandlung zur Angleichung ungleichmäßiger Filler-Verteilungen und Korrektur von Asymmetrien',
          },
          {
            title: 'Migration von Fillern',
            description: 'Hylase-Behandlung bei verschobenem Hyaluron: Auflösung von Fillern, die sich verlagert haben',
          },
          {
            title: 'Unzufriedenheit mit Ergebnis',
            description: 'Hylase-Behandlung für Neustart: Rückgängig machen unerwünschter ästhetischer Veränderungen nach Hyaluron-Unterspritzung',
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Hylase-Behandlung auf einen Blick',
    benefits: [
      {
        title: 'Kosten',
        description: `ab ${PRICES.botulinum.masseter}\u20AC* pro Behandlung*`,
        iconUrl: '/assets/icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: '15-30 Min',
        iconUrl: '/assets/icons/TIME.svg',
      },
      {
        title: 'Wirkung',
        description: 'meist innerhalb weniger Stunden',
        iconUrl: '/assets/icons/CAL.svg',
      },
      {
        title: 'Betäubung',
        description: 'auf Wunsch möglich',
        iconUrl: '/assets/icons/Spritze.svg',
      },
      {
        title: 'Gesellschaftsfähig',
        description: 'i.d.R. sofort',
        iconUrl: '/assets/icons/gesellschaft.svg',
      },
      {
        title: 'Wiederholungen',
        description: 'meist 1 Sitzung, bei Bedarf Wiederholung',
        iconUrl: '/assets/icons/wiederholung.svg',
      },
    ],
    note: '*Die Kosten für die Hylase-Behandlung richten sich nach dem Behandlungsumfang und der Dosierung. Individuelle Abrechnung nach GOÄ.',
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsbereiche' },
    { id: 'quickInfos', label: 'Kosten & Infos' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Hyaluronidase-Behandlung in Bremen: Was Sie erwartet',
    steps: [
      {
        number: '01',
        title: 'Beratung ',
        description: 'Im Beratungsgespräch analysiere ich: Welcher Bereich soll mit Hylase behandelt werden? Wie viel Hyaluron wurde injiziert? Wie sind Ihre Erfahrungen mit dem bisherigen Ergebnis? Basierend darauf bestimme ich die optimale Dosierung der Hylase. Wichtig: Permanente Filler können nicht mit Hylase aufgelöst werden.',
      },
      {
        number: '02',
        title: 'Vorbereitung der Hylase-Injektion',
        description: 'Die zu behandelnden Areale werden sorgfältig desinfiziert und markiert. Die Behandlung ist in der Regel gut verträglich und wenig schmerzhaft. Auf Wunsch kann eine Betäubungscreme die Hylase-Injektion noch angenehmer machen.',
      },
      {
        number: '03',
        title: 'Präzise Injektion',
        description: 'Die Hylase wird mit feiner Nadel gezielt in die Bereiche injiziert, in denen das Hyaluron aufgelöst werden soll. Die Dosierung der Hylase wird individuell angepasst: Bei kompletter Auflösung mehr Hylase, bei teilweiser Korrektur reduzierte Dosis. Die Hylase-Behandlung dauert etwa 15-30 Minuten.',
      },
      {
        number: '04',
        title: 'Nach der Behandlung',
        description: 'Nach der Hylase-Injektion erfolgt eine sanfte Massage zur optimalen Verteilung. Sie erhalten detaillierte Nachsorgeanweisungen und Informationen, wann nach Hylase wieder Hyaluron gespritzt werden kann (in der Regel 2-6 Wochen Wartezeit nach Hylase-Behandlung). Bei Bedarf vereinbaren wir einen Kontrolltermin.',
      },
      {
        number: '05',
        title: 'Wirkung & Ergebnis',
        description: 'Die Wirkung beginnt in der Regel rasch. Innerhalb der ersten Stunden nach der Hylase-Behandlung können Sie bereits Veränderungen bemerken. Die vollständige Auflösung durch Hylase erfolgt üblicherweise innerhalb von 24-48 Stunden. In den meisten Fällen reicht eine Hylase-Behandlung aus. Bei sehr großen Mengen Hyaluron kann eine zweite Hylase-Sitzung nach 1-2 Wochen notwendig sein.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente',
          description: 'Keine blutverdünnenden Medikamente vor der Hylase-Behandlung einnehmen (nach Rücksprache mit Ihrem Arzt).',
        },
        {
          title: 'Allergien abklären',
          description: 'Informieren Sie mich über bekannte Allergien vor der Hylase-Behandlung, insbesondere Wespen- oder Bienenstich-Allergien.',
        },
        {
          title: 'Gesundheitszustand',
          description: 'Gesund und ohne akute Infektionen zur Hylase-Behandlung erscheinen.',
        },
        {
          title: 'Informationen bereithalten',
          description: 'Wenn möglich, Informationen über die ursprüngliche Filler-Behandlung mitbringen (Produkt, Menge, Zeitpunkt) – wichtig für die Dosierung der Hylase.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Kühlung',
          description: 'Kühlen Sie die behandelten Bereiche nach der Hylase-Behandlung in den ersten 24 Stunden regelmäßig mit Kühlpacks.',
        },
        {
          title: 'Wirkung beobachten',
          description: 'Eine vorübergehende verstärkte Schwellung in den ersten Stunden nach Hylase ist normal und klingt schnell ab, wenn die Hylase-Wirkung einsetzt.',
        },
        {
          title: 'Massieren vermeiden',
          description: 'Vermeiden Sie in den ersten 24 Stunden nach der Hylase-Behandlung übermäßiges Berühren oder Massieren der Behandlungsareale.',
        },
        {
          title: 'Sport & Sauna nach Hylase',
          description: 'Verzichten Sie 24-48 Stunden nach der Behandlung auf intensive körperliche Aktivität, Sauna und Solarium.',
        },
        {
          title: 'Make-up nach der Auflösung von Hyaluron',
          description: 'Verzichten Sie 6-12 Stunden nach der Behandlung auf Make-up im Behandlungsbereich.',
        },
        {
          title: 'Nach Hylase wieder Hyaluron',
          description: 'Wartezeit nach Hylase: Warten Sie mindestens 2 Wochen (besser 4-6 Wochen) vor einer neuen Hyaluron-Behandlung im selben Bereich. Diese Karenzzeit nach Hylase ist wichtig für optimale Ergebnisse.',
        },
        {
          title: 'Kontrolle',
          description: 'Bei Unsicherheiten über die Hylase-Wirkung oder Komplikationen kontaktieren Sie die Praxis umgehend.',
        },
        {
          title: 'Gewebeauflockerung nach Hylase',
          description: 'Das umliegende Gewebe kann durch die Hylase aufgelockert werden – dies normalisiert sich innerhalb weniger Wochen nach der Hylase-Behandlung.',
        },
      ],
    },
  };

  

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen mit Hyaluronsäure in Bremen',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.webp',
        imageAlt: 'Hyaluron Filler Behandlung Bremen',
        title: 'Hyaluron Filler (Unterspritzung)',
        description: 'Natürliche Faltenglättung und Volumenaufbau mit Hyaluronsäure in Bremen – für harmonische Gesichtskonturen. Bei Bedarf mit Hylase korrigierbar.',
        treatmentUrl: '/hyaluron/filler',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Skinbooster Behandlung Bremen',
        title: 'Skinbooster',
        description:
          'Intensive Hauthydratation mit Hyaluronsäure in Bremen. Für strahlende Haut und verbesserte Hautqualität.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-profhilo_hero.webp",
        imageAlt: "Profhilo Behandlung Bremen",
        title: "Hyaluron-Remodellierung (BAP-Technik)",
        description: "Bioremodulierung mit Hyaluronsäure in Bremen: Gewebestimulierende Behandlung für mehr Elastizität und feinere Linien – ohne Volumenaufbau.",
        treatmentUrl: "/hyaluron/profhilo"
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hylase-Behandlung',
    faqs: [
      {
        question: 'Wie funktioniert die Hylase-Behandlung genau?',
        answer: 'Hylase (Hyaluronidase) ist ein Enzym, das Hyaluronsäure-Moleküle spaltet und abbaut. Nach der Hylase-Injektion beginnt das Enzym, die Hyaluronsäure aufzulösen. Die Hylase-Wirkung ist in der Regel schnell: Erste Veränderungen sind oft bereits nach wenigen Stunden sichtbar. Die vollständige Auflösung durch Hylase erfolgt üblicherweise innerhalb von 24-48 Stunden. Die aufgelösten Hyaluronsäure-Fragmente werden vom Körper natürlich über das Lymphsystem abtransportiert.',
      },
      {
        question: 'Warum muss Hylase vorsichtig dosiert werden?',
        answer: 'Hylase macht keinen Unterschied zwischen künstlich injiziertem Hyaluron (Filler) und körpereigenem Hyaluron. Eine zu hohe Hylase-Dosierung könnte auch die natürliche Hyaluronsäure in der Haut abbauen. Dies kann vorübergehend zu Dellen führen. Der Körper gleicht dies normalerweise innerhalb weniger Wochen aus, dennoch sollte die Hylase-Dosierung präzise erfolgen. Aus diesem Grund ist Erfahrung mit Hylase besonders wichtig.',
      },
      {
        question: 'In welchen Fällen wird Hylase eingesetzt?',
        answer: 'Hylase wird eingesetzt bei: 1) Ästhetischen Korrekturen: Überkorrekturen, Asymmetrien, unnatürliche Ergebnisse, sichtbare Wülste. 2) Komplikationen: Knötchen, Granulome, Tyndall-Effekt (bläuliche Verfärbungen), Migration von Fillern. 3) Notfälle: Arterielle Gefäßverschlüsse – hier ist sofortige Hylase-Behandlung lebensrettend. 4) Patientenwunsch: Bei Unzufriedenheit mit dem Ergebnis für einen Neustart. Die Hylase-Behandlung ist in all diesen Fällen eine sichere Lösung.',
      },
      {
        question: 'Wie schnell wirkt Hylase?',
        answer: 'Die Hylase-Wirkung setzt in der Regel rasch ein. Erste Veränderungen können häufig innerhalb weniger Stunden nach der Hylase-Behandlung beobachtet werden. Das vollständige Auflösen durch Hylase erfolgt üblicherweise innerhalb von 24-48 Stunden. Die Geschwindigkeit der Hylase-Wirkung hängt von der Menge des aufzulösenden Hyalurons und der Hylase-Dosierung ab.',
      },
      {
        question: 'Ist die Hylase-Behandlung schmerzhaft?',
        answer: 'Die Hylase-Behandlung wird von den meisten Patienten als deutlich weniger schmerzhaft empfunden als die ursprüngliche Filler-Injektion. Die Hylase-Injektionen selbst verursachen nur ein kurzes Stechen. Viele Patienten mit Hylase-Erfahrung berichten, dass die Behandlung angenehmer ist als erwartet. Auf Wunsch kann vor der Hylase-Behandlung eine Betäubungscreme aufgetragen werden.',
      },
      {
        question: 'Wie viele Hylase-Behandlungen sind notwendig?',
        answer: 'In den meisten Fällen reicht bereits eine einzige Hylase-Behandlung aus, um das Hyaluron vollständig aufzulösen. Die Anzahl hängt ab von: der Menge des ursprünglich injizierten Hyalurons, wie lange die Filler-Behandlung zurückliegt (älteres Hyaluron ist schwerer mit Hylase aufzulösen), ob eine vollständige oder nur teilweise Auflösung gewünscht ist. Bei sehr großen Mengen Hyaluron kann eine zweite Hylase-Behandlung nach 1-2 Wochen notwendig sein.',
      },
      {
        question: 'Welche Hylase Nebenwirkungen können auftreten?',
        answer: 'Die Nebenwirkungen der Hylase-Behandlung sind in der Regel mild: Rötungen an den Einstichstellen nach der Hylase-Injektion (legen sich schnell), vorübergehend verstärkte Schwellung für einige Stunden (klingt ab wenn Hylase-Wirkung einsetzt), mögliche Hämatome, Auflockerung des umliegenden Gewebes durch Hylase (normalisiert sich in 2-6 Wochen). Bei zu hoher Hylase-Dosierung können vorübergehend Dellen entstehen. Allergische Reaktionen auf Hylase sind sehr selten.',
      },
      {
        question: 'Nach Hylase wann wieder Hyaluron spritzen?',
        answer: 'Nach einer Hylase-Behandlung sollte eine Wartezeit von mindestens 2 Wochen, idealerweise 4-6 Wochen eingehalten werden, bevor nach Hylase wieder neue Hyaluron-Unterspritzung im selben Bereich erfolgt. Diese Karenzzeit nach Hylase ist wichtig, damit sich das Gewebe vollständig erholen kann und die Hylase-Wirkung komplett abgeklungen ist. Eine zu frühe Neubehandlung nach Hylase könnte zu suboptimalen Ergebnissen führen.',
      },
      {
        question: 'Kann jeder Filler mit Hylase aufgelöst werden?',
        answer: 'Nein, Hylase löst ausschließlich Hyaluronsäure-basierte Filler auf. Permanente Filler (z.B. Silikon, PMMA) oder andere Filler-Typen wie Calciumhydroxylapatit-Filler (zur Kollagenstimulation) oder Poly-L-Milchsäure-Filler (zur langfristigen Kollagenbildung) können NICHT mit Hylase aufgelöst werden. Dies ist ein weiterer Grund, warum ausschließlich Hyaluronsäure-Filler verwendet werden sollten – sie bieten die Sicherheit, bei Bedarf mit Hylase wieder aufgelöst werden zu können.',
      },
      {
        question: 'Bin ich nach der Hylase-Behandlung sofort gesellschaftsfähig?',
        answer: 'In der Regel sind Sie kurz nach der Hylase-Behandlung gesellschaftsfähig. Die Hylase-Behandlung hinterlässt meist nur leichte Rötungen an den Einstichstellen, die rasch abklingen. In den ersten Stunden kann es zu einer vorübergehend verstärkten Schwellung kommen, bevor die Hylase-Wirkung das Hyaluron abbaut. Es können kleine Hämatome nach der Hylase-Injektion auftreten, die sich mit Make-up abdecken lassen. Die meisten Patienten können nach der Hylase-Behandlung ihren normalen Aktivitäten nachgehen.',
      },
      {
        question: 'Hylase als Notfall-Medikament – was bedeutet das?',
        answer: 'Bei unsachgemäßen Hyaluron-Injektionen kann es in sehr seltenen Fällen zu einem Verschluss arterieller Gefäße kommen. Dies ist ein medizinischer Notfall. Anzeichen sind: plötzliche starke Schmerzen, Blässe oder Verfärbung der Haut, Gefühlsstörungen. In solchen Fällen muss rasch Hylase injiziert werden, um das Hyaluron aufzulösen und die Durchblutung wiederherzustellen. Die Hylase-Behandlung kann hier Gewebenekrosen verhindern. Jede seriöse Praxis, die Hyaluron-Behandlungen durchführt, sollte Hylase vorrätig haben. Bei EL Aesthetics in Bremen ist Hylase jederzeit verfügbar – für Ihre Sicherheit.',
      },
      {
        question: 'Hylase Lippen auflösen – wie läuft das ab?',
        answer: 'Die Hylase-Behandlung für Lippen ist einer der häufigsten Anwendungsbereiche. Beim Lippen auflösen mit Hylase wird das Enzym gezielt in die überfüllten oder asymmetrischen Lippenbereiche injiziert. Die Hylase-Wirkung bei Lippen setzt innerhalb weniger Stunden ein. Das Lippen auflösen mit Hylase ermöglicht einen kompletten Neustart oder eine teilweise Korrektur. Die Hylase Lippen Kosten beginnen ab 180€. Nach der Hylase-Behandlung an den Lippen sollten Sie 4-6 Wochen warten, bevor wieder Hyaluron in die Lippen gespritzt wird.',
      },
      {
        question: 'Kann Hylase selbst gespritzt werden?',
        answer: 'Nein, Hylase selber spritzen ist gefährlich und wird dringend abgeraten! Die Hylase-Behandlung erfordert medizinische Fachkenntnis: falsche Dosierung, unsaubere Technik und fehlende Notfallversorgung können zu schweren Komplikationen führen. Eine zu hohe Hylase-Dosierung kann körpereigenes Hyaluron abbauen und zu Dellen führen. Die Hylase-Behandlung sollte ausschließlich von erfahrenen Ärzten durchgeführt werden. In meiner Praxis in Bremen erfolgt die Hylase-Behandlung professionell und sicher.',
      },
      {
        question: 'Was muss ich nach Hylase beachten?',
        answer: 'Nach der Hylase-Behandlung sollten Sie beachten: Kühlen Sie die behandelten Bereiche nach Hylase regelmäßig in den ersten 24 Stunden. Vermeiden Sie Sport, Sauna und Solarium für 24-48 Stunden nach Hylase. Verzichten Sie auf Make-up für 6-12 Stunden nach der Hylase-Behandlung. Massieren Sie die Bereiche nicht übermäßig nach Hylase. Beobachten Sie die Hylase-Wirkung – eine vorübergehende Schwellung ist normal. Wichtig: Nach Hylase wann wieder Hyaluron? Warten Sie mindestens 2-6 Wochen nach der Hylase-Behandlung, bevor Sie wieder Hyaluron spritzen lassen.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Unzufrieden mit Ihrem Hyaluron-Ergebnis?',
    subtitle: 'Vereinbaren Sie jetzt Ihre persönliche Hylase-Beratung in Bremen und erfahren Sie, wie die Hylase-Behandlung unerwünschte Filler sicher und schnell auflösen kann.',
    primaryCTA: { text: 'Jetzt Hylase-Termin buchen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="hylase-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <ConsultationSection />
      <HubTeaserSection
        title="Mehr zu Hyaluron‑Behandlungen in Bremen"
        subtitle="Zur Übersicht mit allen Hyaluron-Behandlungen, Abläufen & wichtigen Hinweisen."
        href="/hyaluron"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
    </div>
  );
}
