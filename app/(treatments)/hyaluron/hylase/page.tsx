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
  TreatmentsSectionProps,
  TreatmentsSection
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Hyaluronidase Bremen | Hylase Behandlung | Hyaluron auflösen & korrigieren | EL Aesthetics',
  description: 'Hyaluronidase (Hylase) in Bremen ✓ Hyaluron-Filler sicher auflösen ✓ Korrektur von Lippen, Knötchen & Granulomen ✓ Sofortige Wirkung ✓ Notfall-Medikament bei Komplikationen ✓ Jetzt Beratung!',
  keywords: 'Hyaluronidase Bremen, Hylase Bremen, Hyaluron auflösen Bremen, Hyaluron Korrektur Bremen, Lippen korrigieren Bremen, Filler auflösen Bremen, Hyaluronsäure entfernen Bremen, Knötchen Lippen auflösen, Granulome behandeln Bremen, Hyaluron Komplikation Bremen, Tyndall-Effekt behandeln, Filler Korrektur Bremen, Lippenkorrektur Bremen, Hyaluron entfernen Bremen, Hyaluronidase Notfall Bremen',
  openGraph: {
    title: 'Hyaluronidase Bremen – Hylase zum Auflösen von Hyaluron | EL Aesthetics',
    description: 'Sichere Korrektur von Hyaluron-Fillern: Knötchen, Asymmetrien & Überkorrekturen gezielt auflösen – schnelle Wirkung mit Hyaluronidase (Hylase).',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/hylase/og-hyaluronidase-bremen.webp',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hyaluronidase',
  },
};

export default function HyaluronidaseHylasePage() {
  const heroData: HeroSectionProps = {
    title: 'Hyaluronidase (Hylase) in Bremen',
    subtitle: 'Sichere Korrektur & Auflösung von Hyaluron-Fillern: Knötchen, Asymmetrien, Überkorrekturen und Granulome gezielt behandeln – schnelle Wirkung, minimal-invasiv.',
    imageSrc: '/assets/hyaluron/hyaluron-hylase_hero.webp',
    imageAlt: 'Hyaluronidase Hylase Behandlung zur Hyaluron-Korrektur bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist Hyaluronidase (Hylase)?',
    content: [
      'Hyaluronidase, häufig als Hylase bezeichnet, ist ein natürlich im menschlichen Körper vorkommendes Enzym, das die Fähigkeit besitzt, Hyaluronsäure gezielt aufzulösen und abzubauen. In der ästhetischen Medizin wird Hyaluronidase zur Korrektur unerwünschter Ergebnisse nach Hyaluron-Unterspritzungen eingesetzt.',
      'Die Behandlung mit Hylase ermöglicht die schnelle und effektive Auflösung von Hyaluronsäure-Fillern bei Überkorrekturen, Asymmetrien, Knötchen, Granulomen oder wenn das Ergebnis nicht den Erwartungen entspricht. Das Enzym spaltet die Hyaluronsäure-Moleküle, wodurch der Körper diese natürlich verstoffwechseln und ausscheiden kann.',
      'Besonders wichtig: Hyaluronidase dient auch als unverzichtbares Notfall-Medikament bei schwerwiegenden Komplikationen wie Gefäßverschlüssen, die bei unsachgemäßen Hyaluron-Injektionen auftreten können. Jede seriöse Praxis, die Hyaluron-Unterspritzungen durchführt, sollte Hyaluronidase stets griffbereit haben.',
      'Die Wirkung von Hylase setzt unmittelbar nach der Injektion ein. Abhängig von der Menge des aufzulösenden Hyalurons und der Dosierung der Hyaluronidase können erste Veränderungen sofort bis innerhalb weniger Stunden sichtbar werden. Das vollständige Auflösen erfolgt in der Regel innerhalb von 24-48 Stunden.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Anwendungsfälle für Hyaluronidase',
    categories: [
      {
        category: 'Häufigste Korrektur-Bereiche',
        items: [
          {
            title: 'Lippen (Lippenkorrektur)',
            description: 'Auflösung von Überkorrekturen, Asymmetrien, Knötchen und Granulomen in den Lippen',
          },
          {
            title: 'Unterlider & Tränenfurchen',
            description: 'Korrektur von Tyndall-Effekt, Schwellungen und verrutschen Fillern',
          },
          {
            title: 'Nasolabialfalten',
            description: 'Auflösung von Wülsten, Unebenheiten oder Überkorrekturen',
          },
          {
            title: 'Wangen',
            description: 'Korrektur von übermäßigem Volumen oder Asymmetrien',
          },
          {
            title: 'Kinn & Kiefer',
            description: 'Auflösung unnatürlicher Konturen oder Überkorrekturen',
          },
          {
            title: 'Stirn',
            description: 'Entfernung unerwünschter Filler-Ansammlungen',
          },
        ],
      },
      {
        category: 'Spezielle Indikationen',
        items: [
          {
            title: 'Knötchen & Granulome',
            description: 'Auflösung tastbarer oder sichtbarer Verhärtungen nach Filler-Behandlungen',
          },
          {
            title: 'Tyndall-Effekt',
            description: 'Beseitigung bläulicher Verfärbungen durch zu oberflächlich injiziertes Hyaluron',
          },
          {
            title: 'Gefäßverschluss (Notfall)',
            description: 'Sofortiges Auflösen bei arterieller Okklusion zur Vermeidung von Nekrosen',
          },
          {
            title: 'Asymmetrien',
            description: 'Angleichung ungleichmäßiger Filler-Verteilungen',
          },
          {
            title: 'Migration von Fillern',
            description: 'Auflösung von Hyaluron, das sich verschoben hat',
          },
          {
            title: 'Unzufriedenheit mit Ergebnis',
            description: 'Rückgängig machen unerwünschter ästhetischer Veränderungen',
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'Hyaluronidase (Hylase) auf einen Blick',
    benefits: [
      {
        title: 'Preis',
        description: 'ab 180€ pro Behandlung*',
        iconUrl: '/assets/icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: '15-30 Min',
        iconUrl: '/assets/icons/TIME.svg',
      },
      {
        title: 'Wirkeintritt',
        description: 'sofort bis wenige Stunden',
        iconUrl: '/assets/icons/CAL.svg',
      },
      {
        title: 'Lokalanästhesie',
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
    note: '*Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der Hyaluronidase-Behandlung in Bremen',
    steps: [
      {
        number: '01',
        title: 'Beratung & Analyse',
        description: 'Im ausführlichen Beratungsgespräch analysiere ich die vorliegende Situation: Welcher Bereich soll korrigiert werden? Wie viel Hyaluron wurde injiziert? Wie lange liegt die ursprüngliche Behandlung zurück? Gibt es Komplikationen oder akute Notfälle? Basierend auf dieser Analyse bestimme ich die optimale Dosierung der Hyaluronidase. Wichtig ist auch zu klären, ob möglicherweise permanente Filler verwendet wurden, da diese nicht mit Hyaluronidase aufgelöst werden können.',
      },
      {
        number: '02',
        title: 'Vorbereitung & Markierung',
        description: 'Die zu behandelnden Areale werden sorgfältig desinfiziert und markiert. Die Hylase-Behandlung ist in der Regel gut verträglich und wenig schmerzhaft. Auf Wunsch kann eine Betäubungscreme aufgetragen werden, was den Komfort erhöht. Die Behandlung selbst ist deutlich schmerzärmer als die ursprüngliche Filler-Injektion.',
      },
      {
        number: '03',
        title: 'Präzise Injektion der Hyaluronidase',
        description: 'Die Hyaluronidase wird mit einer feinen Nadel gezielt in die Bereiche injiziert, in denen das Hyaluron aufgelöst werden soll. Je nach Befund erfolgen mehrere Injektionen im Behandlungsareal. Die Dosierung wird individuell angepasst: Bei kompletter Auflösung wird mehr Hyaluronidase eingesetzt, bei teilweiser Korrektur wird die Dosis reduziert. Die Behandlung dauert etwa 15-30 Minuten.',
      },
      {
        number: '04',
        title: 'Massage & Nachbereitung',
        description: 'Nach den Injektionen erfolgt eine sanfte Massage, um die Hyaluronidase optimal zu verteilen. Sie erhalten detaillierte Nachsorgeanweisungen und Informationen darüber, wann eine erneute Hyaluron-Behandlung möglich ist (in der Regel nach 2-6 Wochen Wartezeit). Bei Bedarf vereinbaren wir einen Kontrolltermin.',
      },
      {
        number: '05',
        title: 'Wirkung & Ergebnis',
        description: 'Die Wirkung der Hyaluronidase beginnt unmittelbar. Innerhalb der ersten Stunden werden Sie bereits Veränderungen bemerken. Die vollständige Auflösung des Hyalurons erfolgt innerhalb von 24-48 Stunden. In den meisten Fällen reicht eine einzige Behandlung aus. Bei sehr großen Mengen Hyaluron kann eine zweite Sitzung nach 1-2 Wochen notwendig sein.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Nachsorge nach der Hyaluronidase-Behandlung',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Medikamente',
          description: 'Keine blutverdünnenden Medikamente einnehmen (nach Rücksprache mit Ihrem Arzt).',
        },
        {
          title: 'Allergien abklären',
          description: 'Informieren Sie mich über bekannte Allergien, insbesondere Wespen- oder Bienenstich-Allergien.',
        },
        {
          title: 'Gesundheitszustand',
          description: 'Gesund und ohne akute Infektionen zur Behandlung erscheinen.',
        },
        {
          title: 'Informationen bereithalten',
          description: 'Wenn möglich, Informationen über die ursprüngliche Filler-Behandlung mitbringen (Produkt, Menge, Zeitpunkt).',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Kühlung',
          description: 'Kühlen Sie die behandelten Bereiche in den ersten 24 Stunden regelmäßig mit Kühlpacks.',
        },
        {
          title: 'Schwellung beobachten',
          description: 'Eine vorübergehende verstärkte Schwellung in den ersten Stunden ist normal und klingt schnell ab.',
        },
        {
          title: 'Massieren vermeiden',
          description: 'Vermeiden Sie in den ersten 24 Stunden übermäßiges Berühren oder Massieren der Behandlungsareale.',
        },
        {
          title: 'Sport & Sauna',
          description: 'Verzichten Sie 24-48 Stunden auf intensive körperliche Aktivität, Sauna und Solarium.',
        },
        {
          title: 'Make-up',
          description: 'Verzichten Sie 6-12 Stunden auf Make-up im Behandlungsbereich.',
        },
        {
          title: 'Wartezeit für neue Filler',
          description: 'Warten Sie mindestens 2 Wochen (besser 4-6 Wochen) vor einer neuen Hyaluron-Behandlung im selben Bereich.',
        },
        {
          title: 'Kontrolle',
          description: 'Bei Unsicherheiten oder Komplikationen kontaktieren Sie die Praxis umgehend.',
        },
        {
          title: 'Gewebeauflockerung',
          description: 'Das umliegende Gewebe kann durch die Hylase aufgelockert werden – dies normalisiert sich innerhalb weniger Wochen.',
        },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Jennifer S.',
      rating: 5,
      text: 'Meine Lippen waren nach einer Behandlung bei einem anderen Arzt völlig asymmetrisch. Frau El-Armouche hat mit Hylase die Überkorrekturen perfekt aufgelöst. Jetzt kann ich sie neu und natürlich aufspritzen lassen!',
      date: '2024-09-18',
    },
    {
      id: 2,
      name: 'Markus L.',
      rating: 5,
      text: 'Ich hatte Knötchen in den Nasolabialfalten, die mich sehr gestört haben. Die Hyaluronidase-Behandlung war schnell und schmerzfrei – am nächsten Tag waren die Knötchen komplett verschwunden!',
      date: '2024-08-30',
    },
    {
      id: 3,
      name: 'Sandra K.',
      rating: 5,
      text: 'Hatte einen Tyndall-Effekt unter den Augen (bläuliche Verfärbung). Mit Hylase wurde das Hyaluron aufgelöst und die Verfärbung ist weg. Super Ergebnis!',
      date: '2024-07-25',
    },
    {
      id: 4,
      name: 'Lisa M.',
      rating: 5,
      text: 'Meine Lippen waren nach Jahren mehrfach überspritzt und sahen unnatürlich aus. Die Auflösung mit Hyaluronidase war die beste Entscheidung – jetzt kann ich neu starten mit natürlichem Ergebnis!',
      date: '2024-06-14',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Hyaluronidase-Behandlung in Bremen',
    description: [
      'Nicht jede Hyaluron-Behandlung verläuft wie gewünscht. Überkorrekturen, Asymmetrien, Knötchen oder verrutschte Filler können zu erheblichem Leidensdruck führen. Als spezialisierte Ärztin für ästhetische Medizin biete ich Ihnen mit Hyaluronidase (Hylase) eine sichere und schnelle Lösung zur Korrektur unerwünschter Hyaluron-Ergebnisse.',
      'In meiner Praxis EL Aesthetics in Bremen analysiere ich Ihre individuelle Situation gründlich: Welcher Bereich muss korrigiert werden? Wie viel Hyaluron sollte aufgelöst werden – vollständig oder nur teilweise? Welche Dosierung ist optimal? Die präzise Anwendung von Hyaluronidase erfordert Erfahrung und Fingerspitzengefühl, um ein optimales Ergebnis zu erzielen.',
      'Wichtig ist die vorsichtige Dosierung der Hyaluronidase: Das Enzym macht keinen Unterschied zwischen injiziertem und körpereigenem Hyaluron. Eine zu hohe Dosierung könnte auch natürliche Hyaluronsäure abbauen und unschöne Dellen verursachen. Durch meine langjährige Erfahrung stelle ich sicher, dass nur die gewünschte Menge Hyaluron aufgelöst wird.',
      'Hyaluronidase ist auch ein unverzichtbares Notfall-Medikament bei schwerwiegenden Komplikationen wie Gefäßverschlüssen. In meiner Praxis ist Hylase jederzeit verfügbar – für Ihre Sicherheit bei jeder Hyaluron-Behandlung.',
    ],
    ctaText: 'Jetzt Beratungstermin buchen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt: 'Ärztin Ola El-Armouche – Expertin für Hyaluronidase-Behandlung in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen mit Hyaluronsäure',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.webp',
        imageAlt: 'Hyaluron Filler Behandlung für natürliche Ergebnisse',
        title: 'Hyaluron Filler (Unterspritzung)',
        description: 'Natürliche Faltenglättung und Volumenaufbau mit Hyaluronsäure – für harmonische Gesichtskonturen und frisches Aussehen.',
        treatmentUrl: '/hyaluron/filler',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Skinbooster zur Hydratation',
        title: 'Skinbooster (eigene Unterseite)',
        description:
          'Für Hydratation & Hautqualität. Details auf der Skinbooster-Seite.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: "/assets/hyaluron/hyaluron-profhilo_hero.webp",
        // Image Alt: Beschreibend und Keyword-optimiert.
        imageAlt: "Nahaufnahme einer Hyaluronsäure-Filler Behandlung für Falten",
        title: "Hyaluron-Remodellierung (BAP-Technik)",
        description: "Remodellierung – auch Bioremodulierung genannt – ist eine gewebestimulierende Hyaluron-Behandlung, die die Hautqualität sichtbar verbessert: mehr Elastizität, feinere Linien, gleichmäßigerer Teint. Im Gegensatz zu Volumenbehandlungen steht nicht die Formung im Vordergrund, sondern die Qualität des Gewebes.",
        treatmentUrl: "/hyaluron/profhilo"
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hyaluronidase-Behandlung',
    faqs: [
      {
        question: 'Wie funktioniert Hyaluronidase genau?',
        answer: 'Hyaluronidase ist ein natürlich vorkommendes Enzym, das Hyaluronsäure-Moleküle spaltet und abbaut. Nach der Injektion in das Gewebe beginnt die Hyaluronidase sofort, die Hyaluronsäure aufzulösen – sowohl injizierte Filler als auch körpereigenes Hyaluron. Die aufgelösten Hyaluronsäure-Fragmente werden dann vom Körper natürlich über das Lymphsystem abtransportiert und ausgeschieden. Die Wirkung ist sehr schnell: Erste Veränderungen sind oft bereits nach wenigen Minuten bis Stunden sichtbar, die vollständige Auflösung erfolgt innerhalb von 24-48 Stunden.',
      },
      {
        question: 'Warum muss Hyaluronidase vorsichtig dosiert werden?',
        answer: 'Hyaluronidase macht keinen Unterschied zwischen künstlich injiziertem Hyaluron (Filler) und körpereigenem Hyaluron, das natürlich im Gewebe vorkommt. Eine zu hohe Dosierung könnte daher auch die natürliche Hyaluronsäure in der Haut abbauen. Dies kann vorübergehend zu unschönen Dellen oder Vertiefungen führen. Der Körper gleicht dies normalerweise innerhalb weniger Wochen durch Neubildung von Hyaluronsäure wieder aus, dennoch sollte die Dosierung präzise erfolgen. Aus diesem Grund ist Erfahrung und Fingerspitzengefühl bei der Hylase-Behandlung besonders wichtig.',
      },
      {
        question: 'In welchen Fällen wird Hyaluronidase eingesetzt?',
        answer: 'Hyaluronidase kommt in verschiedenen Situationen zum Einsatz: 1) Ästhetische Korrekturen: Bei Überkorrekturen, Asymmetrien, unnatürlich wirkenden Ergebnissen, sichtbaren Wülsten oder Schwellungen. 2) Komplikationen: Bei Knötchen, Granulomen, Tyndall-Effekt (bläuliche Verfärbungen), Migration von Fillern. 3) Notfälle: Bei arteriellen Gefäßverschlüssen, die zu Nekrosen (Gewebezerstörung) führen können – hier ist sofortiges Handeln lebensnotwendig. 4) Patientenwunsch: Wenn der Patient mit dem Ergebnis unzufrieden ist und einen Neustart möchte.',
      },
      {
        question: 'Wie schnell wirkt Hylase?',
        answer: 'Die Wirkung von Hyaluronidase setzt sehr schnell ein. Die in der ästhetischen Medizin verwendete Hyaluronidase ist deutlich höher dosiert als das körpereigene Enzym. Erste Veränderungen können unmittelbar bis innerhalb weniger Stunden beobachtet werden. Das vollständige Auflösen der Schwellungen, Wülste oder Knötchen erfolgt in der Regel innerhalb von 24-48 Stunden. Die Geschwindigkeit hängt von der Menge des aufzulösenden Hyalurons und der Dosierung der Hyaluronidase ab.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer: 'Die Hyaluronidase-Behandlung wird von den meisten Patienten als deutlich weniger schmerzhaft empfunden als die ursprüngliche Filler-Injektion. Die Injektionen selbst verursachen nur ein kurzes Stechen. Viele Patienten berichten, dass die Behandlung angenehmer ist als erwartet. Auf Wunsch kann dennoch eine Betäubungscreme aufgetragen werden. Nach der Behandlung können die Einstichstellen vorübergehend leicht gerötet sein, dies legt sich aber schnell.',
      },
      {
        question: 'Wie viele Behandlungen sind notwendig?',
        answer: 'In den meisten Fällen reicht bereits eine einzige Hyaluronidase-Behandlung aus, um das Hyaluron vollständig aufzulösen. Die Anzahl hängt jedoch von mehreren Faktoren ab: der Menge des ursprünglich injizierten Hyalurons, wie lange die Filler-Behandlung zurückliegt (älteres Hyaluron ist schwerer aufzulöschen), ob eine vollständige oder nur teilweise Auflösung gewünscht ist. Bei sehr großen Mengen Hyaluron oder wenn nur eine teilweise Korrektur erfolgen soll, kann eine zweite Behandlung nach 1-2 Wochen notwendig sein.',
      },
      {
        question: 'Welche Nebenwirkungen können auftreten?',
        answer: 'Die Nebenwirkungen einer Hyaluronidase-Behandlung sind in der Regel mild: Rötungen an den Einstichstellen (legen sich schnell), vorübergehend verstärkte Schwellung für einige Stunden (klingt dann ab), mögliche Hämatome (Blutergüsse), Auflockerung des umliegenden Gewebes (normalisiert sich in 2-6 Wochen). Bei zu hoher Dosierung können vorübergehend Dellen entstehen, die der Körper normalerweise durch Neubildung von Hyaluronsäure ausgleicht. Allergische Reaktionen sind sehr selten, können aber bei bekannter Wespen- oder Bienenstich-Allergie auftreten.',
      },
      {
        question: 'Wann kann ich wieder neue Filler spritzen lassen?',
        answer: 'Nach einer Hyaluronidase-Behandlung sollte eine Wartezeit von mindestens 2 Wochen, idealerweise 4-6 Wochen eingehalten werden, bevor eine neue Hyaluron-Unterspritzung im selben Bereich erfolgt. Diese Karenzzeit ist wichtig, damit sich das Gewebe vollständig erholen kann und die Hyaluronidase-Wirkung komplett abgeklungen ist. Das umliegende Gewebe wird durch die Hylase aufgelockert und benötigt Zeit zur Regeneration. Eine zu frühe Neubehandlung könnte zu suboptimalen Ergebnissen führen.',
      },
      {
        question: 'Kann jeder Filler mit Hyaluronidase aufgelöst werden?',
        answer: 'Nein, Hyaluronidase löst ausschließlich Hyaluronsäure-basierte Filler auf. Permanente Filler (z.B. Silikon, Polymethylmethacrylat) oder andere Filler-Typen wie Calciumhydroxylapatit (Radiesse) oder Poly-L-Milchsäure (Sculptra) können NICHT mit Hyaluronidase aufgelöst werden. Dies ist ein weiterer Grund, warum ausschließlich Hyaluronsäure-Filler verwendet werden sollten – sie bieten die Sicherheit, bei Bedarf wieder aufgelöst werden zu können. Vor der Behandlung sollte daher geklärt werden, welches Produkt ursprünglich verwendet wurde.',
      },
      {
        question: 'Was kostet die Hyaluronidase-Behandlung in Bremen?',
        answer: 'Eine Hyaluronidase-Behandlung kostet ab 180€ (abhängig vom Behandlungsareal und der benötigten Dosierung). Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ). Die Kosten variieren je nachdem, wie viel Hyaluron aufgelöst werden muss. Im Beratungsgespräch erhalten Sie einen transparenten Kostenvoranschlag. Bei Notfall-Behandlungen können abweichende Regelungen gelten.',
      },
      {
        question: 'Bin ich nach der Behandlung sofort gesellschaftsfähig?',
        answer: 'In der Regel sind Sie unmittelbar nach der Hyaluronidase-Behandlung gesellschaftsfähig. Die Behandlung hinterlässt meist nur leichte Rötungen an den Einstichstellen, die schnell abklingen. In den ersten Stunden kann es zu einer vorübergehend verstärkten Schwellung kommen, bevor das Hyaluron abgebaut wird. Es können kleine Hämatome auftreten, die sich mit Make-up abdecken lassen. Die meisten Patienten können direkt nach der Behandlung ihren normalen Aktivitäten nachgehen.',
      },
      {
        question: 'Hyaluronidase als Notfall-Medikament – was bedeutet das?',
        answer: 'Bei unsachgemäßen Hyaluron-Injektionen kann es in sehr seltenen Fällen zu einem Verschluss arterieller Gefäße kommen. Dies ist ein medizinischer Notfall, der unbehandelt zu Gewebenekrosen (Absterben von Gewebe) führen kann. Anzeichen sind: plötzliche starke Schmerzen, Blässe oder Verfärbung der Haut, Gefühlsstörungen. In solchen Fällen muss sofort Hyaluronidase injiziert werden, um das Hyaluron aufzulösen und die Durchblutung wiederherzustellen. Jede seriöse Praxis, die Hyaluron-Behandlungen durchführt, sollte Hyaluronidase vorrätig haben, um im Notfall schnellstmöglich handeln zu können. In meiner Praxis ist Hylase jederzeit verfügbar.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Unzufrieden mit Ihrem Hyaluron-Ergebnis?',
    subtitle: 'Vereinbaren Sie jetzt Ihre persönliche Beratung und erfahren Sie, wie Hyaluronidase unerwünschte Filler sicher und schnell auflösen kann.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Hyaluronidase-Behandlung in Bremen: EL Aesthetics',
    description: 'Sichere Korrektur von Hyaluron-Fillern – individuell geplant und professionell durchgeführt in unserer modernen Praxis im Herzen Bremens.',
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
        title="Erfahrungen unserer Patienten mit Hyaluronidase"
        subtitle="Echte Ergebnisse von echten Menschen: Knötchen weg, Asymmetrien korrigiert, natürlicher Neustart."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}