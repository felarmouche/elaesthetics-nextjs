import type { Metadata } from 'next';
import {
  AreasSection,
  AreasSectionProps,
  ConsultationSectionProps,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  LocationSection,
  LocationSectionProps,
  ProcessSection,
  ProcessSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
  TreatmentCareSection,
  TreatmentCareSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title:
    'PRF Vampire Lifting Bremen | Hautverjüngung & Hautstruktur | EL Aesthetics',
  description:
    'PRF Eigenbluttherapie für die Haut in Bremen ✓ Vampire Lifting für natürliche Hautverjüngung ✓ Kollagenaufbau ✓ Feine Fältchen, Poren & Aknenarben reduzieren ✓ Tränenrinne behandeln ✓ 100% körpereigen',
  keywords:
    'PRF Haut Bremen, Vampire Lifting Bremen, Eigenbluttherapie Gesicht Bremen, PRF Hautverjüngung Bremen, Hautqualität verbessern Bremen, PRF Tränenrinne Bremen, PRF Unterlid Bremen, Aknenarben PRF Bremen, Poren verfeinern Bremen, Kollagenaufbau PRF, Platelet Rich Fibrin Haut, Biostimulation Haut Bremen, PRF Glow Bremen',
  openGraph: {
    title:
      'PRF Vampire Lifting Bremen – Natürliche Hautverjüngung | EL Aesthetics',
    description:
      'Vampire Lifting mit PRF: Hautqualität verbessern, Kollagen aufbauen, feine Fältchen & Poren reduzieren – 100% körpereigene Regeneration für strahlende Haut.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//prf/og-prf-vampire-lifting-haut-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie-prf/vampire-lifting',
  },
};

export default function PRFHautPage() {
  const heroData: HeroSectionProps = {
    title: 'PRF Vampire Lifting für die Haut in Bremen',
    subtitle:
      'Natürliche Hautverjüngung mit Eigenblut: Hautstruktur verbessern, Kollagen aufbauen & natürlichen Glow erzeugen – 100% körpereigene Biostimulation.',
    imageSrc: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp',
    imageAlt:
      'PRF Vampire Lifting Hautverjüngung bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Hautanalyse anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'PRF Vampire Lifting – Die natürliche Hautverjüngung',
    content: [
      'PRF (Platelet-Rich Fibrin) Vampire Lifting ist eine revolutionäre Eigenbluttherapie, die Ihre Haut von innen heraus revitalisiert. Durch körpereigene Wachstumsfaktoren, Stammzellen und die einzigartige Fibrin-Matrix wird die Hautregeneration auf natürliche Weise angeregt – ohne künstliche Substanzen.',
      'Die PRF-Eigenbluttherapie fördert die Bildung von neuen Fibroblasten, Kollagen und Elastin in der Haut. Das Ergebnis ist eine Verbesserung der Hautstruktur, Verfeinerung der Poren, Reduktion von Hyperpigmentierungen, feinen Linien und Aknenarben. Zudem verbessert sie die Hautqualität und reduziert dunkle Verfärbungen unter den Augen.',
      'Besonders effektiv ist PRF für die Behandlung empfindlicher Bereiche wie der Tränenrinne und des Unterlids, wo klassische Filler oft zu schwer wirken. Die gelartige Konsistenz der PRF-Matrix integriert sich sanft in das Gewebe und sorgt für einen natürlichen, jugendlichen Effekt.',
      'Auch entzündliche Prozesse wie Akne oder Rosazea können positiv beeinflusst werden. In den ersten 1-2 Wochen fühlt sich die Haut praller, rosiger und genährter an. Nach etwa zwei Wochen geht dieser Effekt vorübergehend etwas zurück, während die regenerativen Prozesse weiterlaufen. Sichtbare Verbesserungen sind nach 3-4 Behandlungen zu erwarten.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche für PRF Vampire Lifting',
    categories: [
      {
        category: 'Gesicht & Dekolleté',
        items: [
          {
            title: 'Periorbitalregion (Augenbereich)',
            description:
              'Tränenrinne, Unterlid, dunkle Augenringe, feine Fältchen',
          },
          {
            title: 'Gesicht gesamt',
            description: 'Wangen, Stirn, Schläfen für verbesserte Hautqualität',
          },
          {
            title: 'Nasolabialfalten & Marionettenfalten',
            description: 'Sanfte Volumenunterstützung und Hautverbesserung',
          },
          {
            title: 'Dekolleté',
            description: 'Hautstraffung und Texturverbesserung im Brustbereich',
          },
        ],
      },
      {
        category: 'Hautprobleme & -zustände',
        items: [
          {
            title: 'Aknenarben & atrophe Narben',
            description: 'Auffüllung und Glättung eingesunkener Narben',
          },
          {
            title: 'Vergrößerte Poren',
            description: 'Porenverfeinung durch Kollagenaufbau',
          },
          {
            title: 'Hyperpigmentierungen',
            description: 'Aufhellung von Pigmentflecken und Melasma',
          },
          {
            title: 'Feine Linien & Knitterfältchen',
            description: 'Glättung durch verbesserte Hautelastizität',
          },
          {
            title: 'Akne & Rosazea',
            description: 'Entzündungshemmung und Hautberuhigung',
          },
          {
            title: 'Allgemeine Hautalterung',
            description: 'Erschlaffung, Trockenheit, fahler Teint',
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'PRF Vampire Lifting auf einen Blick',
    benefits: [
      {
        title: 'Preis',
        description: 'ab 300€ pro Sitzung*',
        iconUrl: '/elaesthetics-bremen-github/assets//icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: '1,5-2 Stunden',
        iconUrl: '/elaesthetics-bremen-github/assets//icons/TIME.svg',
      },
      {
        title: 'Wirkeintritt',
        description: 'nach 2-3 Behandlungen',
        iconUrl: '/elaesthetics-bremen-github/assets//icons/CAL.svg',
      },
      {
        title: 'Lokalanästhesie',
        description: 'ja, auf Wunsch',
        iconUrl: '/elaesthetics-bremen-github/assets//icons/Spritze.svg',
      },
      {
        title: 'Wiederholung',
        description: '4-6 Mal, Abstand 4-6 Wochen, Auffrischung 1-2x/Jahr',
        iconUrl: '/elaesthetics-bremen-github/assets//icons/wiederholung.svg',
      },
    ],
    note: '*Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der PRF Vampire Lifting Behandlung in Bremen',
    steps: [
      {
        number: '01',
        title: 'Hautanalyse & Beratung',
        description:
          'Ich analysiere Ihren Hauttyp, Hautstruktur und bestehende Hautprobleme. Wir besprechen Ihre ästhetischen Ziele und erstellen einen individuellen Behandlungsplan. Fotos dokumentieren den Ausgangszustand für spätere Vergleiche.',
      },
      {
        number: '02',
        title: 'Vorbereitung & Betäubung',
        description:
          'Auf Wunsch wird eine betäubende Creme auf die Haut aufgetragen, was den Behandlungskomfort erhöht. Die Einwirkzeit der Creme beträgt etwa 45-60 Minuten. Ihre Haut wird gereinigt und desinfiziert. Anschließend wird Blut aus einer Vene entnommen (ca. 40-60 ml, etwas mehr als üblich), um mehr plättchenreiche Matrix zu gewinnen.',
      },
      {
        number: '03',
        title: 'PRF-Aufbereitung',
        description:
          'Das Blut wird nach einem speziellen Protokoll zentrifugiert und die bestimmten Zellen isoliert. Die fertige Platelet-Rich-Fibrin (PRF) Matrix bildet sich – eine gelartige, goldgelbe Substanz reich an Blutplättchen, Fibrin, Wachstumsfaktoren und Stammzellen.',
      },
      {
        number: '04',
        title: 'PRF-Injektionen',
        description:
          'Mit einer feinen Nadel wird die PRF-Matrix in Abständen von ca. 1 cm in die betroffenen Bereiche der Haut injiziert. Die Behandlung erfolgt in mehreren Ebenen der Haut, um eine optimale Verteilung und Wirkung zu erzielen. Die Injektionsphase dauert etwa 15-30 Minuten.',
      },
      {
        number: '05',
        title: 'Nachsorge & Verlaufskontrolle',
        description:
          'Nach der Behandlung können Sie sofort nach Hause gehen. Die Haut kann leicht gerötet sein, dies klingt innerhalb von Stunden ab. Die gesamte Behandlung dauert etwa 1,5-2 Stunden, einschließlich der Betäubung. In den ersten 1-2 Wochen fühlt sich die Haut praller und genährter an. Nach einer Serie von 4-6 Behandlungen dokumentieren wir die Ergebnisse.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge bei PRF Vampire Lifting',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Blutverdünnende Medikamente',
          description:
            '1 Woche vorher keine blutverdünnenden Medikamente einnehmen (z.B. Ibuprofen, Diclofenac, Aspirin). Rücksprache mit Ihrem behandelnden Arzt halten.',
        },
        {
          title: 'Koffein, Nikotin & Alkohol',
          description:
            'Verzicht auf Kaffee, koffeinhaltige Getränke, Nikotin und Alkohol mindestens 2 Tage vorher; am Behandlungstag komplett darauf verzichten.',
        },
        {
          title: 'Hydration',
          description:
            'Ausreichend Wasser trinken und nicht nüchtern erscheinen.',
        },
        {
          title: 'Gesundheitszustand',
          description: 'Gesund und frei von Infekten sein.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Injektionsstellen schonen',
          description: 'Injektionsstellen möglichst wenig berühren.',
        },
        {
          title: 'Milde Hautpflege',
          description: '2-3 Tage milde Hautpflegeprodukte verwenden.',
        },
        {
          title: 'Kein Make-up',
          description:
            '2-3 Tage auf Make-up oder Puder verzichten (nach Needling-Kombination).',
        },
        {
          title: 'Keine mechanischen Behandlungen',
          description:
            '7 Tage keine Gesichtsmassagen, Peelings oder ähnliche Behandlungen.',
        },
        {
          title: 'Hitze & Sonne meiden',
          description:
            'Keine Sauna, Sonnenbäder, Solarium oder Schwimmbäder für 7 Tage.',
        },
        {
          title: 'Sport-Pause',
          description: '1 Tag lang auf Sport verzichten.',
        },
        {
          title: 'Sonnenschutz',
          description:
            'Sonneneinwirkung meiden und Lichtschutzfaktor 50 verwenden (nach Needling für mindestens 2 Wochen).',
        },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Clara G.',
      rating: 5,
      text:
        'PRF unter den Augen hat meinen müden Look sichtbar verbessert – die Haut wirkt dichter und frischer. Die Tränenrinne ist deutlich aufgepolstert!',
      date: '2024-08-12',
    },
    {
      id: 2,
      name: 'Sophie K.',
      rating: 5,
      text:
        'In Kombination mit Microneedling wurden meine Aknenarben deutlich flacher. Sehr natürliche Methode, ich liebe das Ergebnis!',
      date: '2024-06-18',
    },
    {
      id: 3,
      name: 'Melissa R.',
      rating: 5,
      text:
        'Nach 4 PRF-Sitzungen ist meine Haut so strahlend wie seit Jahren nicht mehr. Die Poren sind feiner und der Teint ebenmäßiger.',
      date: '2024-07-30',
    },
    {
      id: 4,
      name: 'Anna B.',
      rating: 5,
      text:
        'Das Vampire Lifting hat meine Erwartungen übertroffen. Meine Haut fühlt sich praller an und die feinen Linien sind deutlich weniger sichtbar.',
      date: '2024-05-22',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für PRF Vampire Lifting in Bremen',
    description: [
      'Natürliche Hautverjüngung ohne künstliche Substanzen – das ist das Versprechen der PRF-Eigenbluttherapie. Als spezialisierte Ärztin für ästhetische Medizin biete ich Ihnen mit dem Vampire Lifting eine innovative Methode für strahlende, jugendliche Haut.',
      'In meiner Praxis EL Aesthetics in Bremen analysiere ich Ihre Haut gründlich: Welche Hautprobleme bestehen? Welche Bereiche sollen behandelt werden? Welche Ergebnisse sind realistisch? Gemeinsam entwickeln wir einen Behandlungsplan, der zu Ihrem Hauttyp und Ihren Zielen passt.',
      'Durch kontinuierliche Fortbildungen und Mitgliedschaft in Fachgesellschaften (u.a. DGBT) arbeite ich mit den neuesten Techniken der regenerativen Medizin. Mein Ziel: Ihre Haut soll nicht nur besser aussehen, sondern auch gesünder und widerstandsfähiger werden.',
      'Entdecken Sie die Kraft Ihres eigenen Blutes – für natürlich schöne, strahlende Haut ohne künstlichen Look.',
    ],
    ctaText: 'Jetzt Hautanalyse-Termin buchen',
    ctaHref: '/terminanfragen',
    imageSrc: '/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche – Expertin für PRF Vampire Lifting in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere regenerative Behandlungen für die Haut',
    treatments: [
      {
        imageUrl: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.webp',
        imageAlt: 'Medizinisches Microneedling mit PRF',
        title: 'PRF Microneedling (Plasmaneedling)',
        description:
          'Kombination aus Microneedling und PRF für maximale Hauterneuerung – ideal bei Aknenarben, großen Poren und Pigmentstörungen.',
        treatmentUrl: '/eigenbluttherapie-prf/microneedling',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Hyaluron Skinbooster',
        title: 'Hyaluron Skinbooster',
        description:
          'Intensive Feuchtigkeitsversorgung und Hautstraffung durch hochvernetzte Hyaluronsäure – kombinierbar mit PRF.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide',
        title: 'Polynukleotide',
        description:
          'DNA-basierte Biostimulation für tiefgreifende Hautregeneration und Anti-Aging-Effekte.',
        treatmentUrl: '/polynukleotide',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zum PRF Vampire Lifting',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen PRF und PRP für die Haut?',
        answer:
          'PRF (Platelet-Rich Fibrin) ist die Weiterentwicklung von PRP (Platelet-Rich Plasma), auch bekannt als "Vampire Lifting". Der entscheidende Unterschied: PRF wird ohne Antikoagulanzien (Gerinnungshemmer) hergestellt, wodurch eine natürliche Fibrin-Matrix entsteht. Diese Matrix bindet Blutplättchen, Wachstumsfaktoren und Stammzellen und gibt diese über Tage kontinuierlich frei – für eine länger anhaltende Wirkung. PRF ist zu 100% natürlich und körpereigen. PRF enthält mehr Blutplättchen und zusätzlich Stammzellen, die den Regenerationsprozess weiter fördern.',
      },
      {
        question: 'Für welche Hautprobleme ist PRF Vampire Lifting geeignet?',
        answer:
          'PRF ist vielseitig einsetzbar: Verbesserung der allgemeinen Hautqualität und -textur, Verfeinerung der Poren, Reduktion feiner Linien und Fältchen, Behandlung der Tränenrinne und dunkler Augenringe, Aufhellung von Hyperpigmentierungen und Pigmentflecken, Glättung von Aknenarben und atrophen Narben, Unterstützung bei Akne und Rosazea (entzündungshemmend), Hautstraffung und Kollagenaufbau im gesamten Gesicht und Dekolleté. Besonders effektiv ist PRF in empfindlichen Bereichen wie dem Unterlid, wo andere Behandlungen oft zu riskant sind.',
      },
      {
        question: 'Wie viele Behandlungen brauche ich und wann sehe ich Ergebnisse?',
        answer:
          'In der Regel werden 4-6 Behandlungen im Abstand von 4-6 Wochen benötigt. In den ersten 1-2 Wochen fühlt sich die Haut unmittelbar praller, rosiger und genährter an. Nach etwa zwei Wochen geht dieser Effekt vorübergehend etwas zurück, während die regenerativen Prozesse weiterlaufen. Sichtbare Verbesserungen sind nach 3-4 Behandlungen zu erwarten. Die Ergebnisse können je nach Person variieren, da dieses natürliche Verfahren von der individuellen Aktivität der Blutplättchen abhängt. Nach einer Serie von Behandlungen kann das positive Ergebnis 1-2 Jahre anhalten. Zur Erhaltung der Wirkung ist eine Auffrischung 1-2 Mal pro Jahr empfehlenswert.',
      },
      {
        question: 'Ist die PRF-Behandlung schmerzhaft?',
        answer:
          'Durch die Verwendung einer lokalanästhetischen Creme (Einwirkzeit etwa 45-60 Minuten) sind die Injektionen spürbar, jedoch gut erträglich. Die meisten Patienten beschreiben ein leichtes Pieken. Mit feinen Nadeln und der gelatigen Konsistenz des PRF ist die Behandlung deutlich angenehmer als viele erwarten.',
      },
      {
        question: 'Welche Nebenwirkungen können auftreten?',
        answer:
          'Nach der Behandlung können leichte Rötungen, Schwellungen oder ein Spannungsgefühl auftreten. Die Haut beruhigt sich in der Regel innerhalb von ein bis zwei Stunden. Kleinere Blutergüsse können vorkommen, diese können nach 1-2 Tagen problemlos abgedeckt werden. Bei Kombinationsbehandlungen mit Microneedling müssen Sie mit einer längeren Regenerationszeit von etwa 1-2 Tagen rechnen. Da PRF zu 100% aus Ihrem eigenen Blut besteht, sind allergische Reaktionen ausgeschlossen.',
      },
      {
        question: 'Kann ich nach der Behandlung sofort wieder arbeiten?',
        answer:
          'Ja, Sie sind sofort gesellschaftsfähig. Die Haut kann für einige Stunden leicht gerötet sein, aber Sie können sofort Ihren normalen Aktivitäten nachgehen. Nur intensive körperliche Anstrengung sollte für 24 Stunden vermieden werden. Make-up kann nach 2-3 Tagen wieder aufgetragen werden (bei Needling-Kombination).',
      },
      {
        question: 'Kann PRF mit anderen Behandlungen kombiniert werden?',
        answer:
          'Ja, PRF lässt sich hervorragend kombinieren: Mit Microneedling für intensive Hauterneuerung bei Aknenarben und großen Poren, mit Hyaluron-Fillern für zusätzliches Volumen und Konturierung, mit Skinboostern für verstärkte Feuchtigkeitsversorgung, mit Polynukleotiden für maximale Biostimulation, mit chemischen Peelings (zeitversetzt) für Texturverbesserung. Die Kombinationen besprechen wir individuell je nach Ihren Hautzielen.',
      },
      {
        question: 'Wer sollte PRF NICHT machen lassen?',
        answer:
          'Kontraindikationen sind: Schwangere und stillende Frauen, Personen mit Erkrankungen, die mit einer Störung der Blutgerinnung einhergehen, akute oder chronische Infektionen, akute Entzündungen im Behandlungsbereich, Krebserkrankungen (individuell zu besprechen), schwere Autoimmunerkrankungen in aktiven Phasen. Im Beratungsgespräch klären wir Ihre individuelle Eignung.',
      },
      {
        question: 'Was kostet eine PRF Vampire Lifting Behandlung in Bremen?',
        answer:
          'Eine PRF-Behandlung für die Haut kostet ab 300€ (je nach Behandlungsareal und Umfang). Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ). Für eine komplette Behandlungsserie können Paketpreise angeboten werden. Einen transparenten, individuellen Kostenplan erhalten Sie im persönlichen Beratungsgespräch.',
      },
      {
        question: 'Wie kann ich mich optimal auf die Behandlung vorbereiten?',
        answer:
          '1 Woche vorher keine blutverdünnenden Medikamente einnehmen (Rücksprache mit Ihrem Arzt). Verzicht auf Kaffee, koffeinhaltige Getränke, Nikotin und Alkohol mindestens 2 Tage vorher; am Behandlungstag komplett darauf verzichten. Ausreichend Wasser trinken und nicht nüchtern erscheinen. Gesund und frei von Infekten zur Behandlung kommen. Am Behandlungstag ungeschminkt erscheinen oder Make-up wird vor Ort entfernt.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für strahlende, jugendliche Haut?',
    subtitle:
      'Vereinbaren Sie jetzt Ihre persönliche Hautanalyse und erfahren Sie, wie PRF Vampire Lifting Ihre Haut transformieren kann.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'PRF Vampire Lifting in Bremen: EL Aesthetics',
    description:
      'Natürliche Hautverjüngung mit körpereigenen Wachstumsfaktoren – individuell geplant und professionell durchgeführt in unserer modernen Praxis im Herzen Bremens.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '0155 66919635',
      email: 'info@elaesthetics-bremen.de',
      openingHours: ['Termine nach Vereinbarung'],
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten mit PRF Vampire Lifting"
        subtitle="Echte Ergebnisse von echten Menschen: Strahlende Haut, verfeinerte Poren, reduzierte Falten – natürlich und nachhaltig."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}