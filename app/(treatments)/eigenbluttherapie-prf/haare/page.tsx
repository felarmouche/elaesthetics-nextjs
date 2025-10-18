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
    'PRF Eigenbluttherapie gegen Haarausfall Bremen | Haardichte verbessern | EL Aesthetics',
  description:
    'PRF Eigenbluttherapie für Haare in Bremen ✓ Natürliche Behandlung bei Haarausfall ✓ Haardichte & Haarwachstum fördern ✓ 100% körpereigen ✓ Erblich & kreisrunder Haarausfall ✓ Jetzt Beratung!',
  keywords:
    'PRF Haarausfall Bremen, Eigenbluttherapie Haare Bremen, PRP Haare Bremen, Haarausfall Behandlung Bremen, Haardichte verbessern Bremen, PRF Kopfhaut Bremen, Platelet Rich Fibrin Haare, erblicher Haarausfall Bremen, kreisrunder Haarausfall Bremen, Haarwachstum fördern Bremen, PRF nach Haartransplantation',
  openGraph: {
    title:
      'PRF gegen Haarausfall Bremen – Eigenbluttherapie für dichtes Haar | EL Aesthetics',
    description:
      'Natürliche Haarbehandlung mit PRF: Haarfollikel revitalisieren, Haardichte steigern, Haarausfall entgegenwirken – 100% körpereigene Regeneration in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: [
      'https://elaesthetics-bremen.de/assets/prf/og-prf-haare-haarausfall-bremen.png',
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie-prf/haare',
  },
};

export default function PRFHaarePage() {
  const heroData: HeroSectionProps = {
    title: 'PRF Eigenbluttherapie für Haare in Bremen',
    subtitle:
      'PRF-Therapie als natürliche Eigenblut-Behandlung bei Haarausfall: Haarfollikel revitalisieren, Haardichte erhöhen & Haarwachstum fördern – mit 100% körpereigener Regeneration.',
    imageSrc: '/assets/eigenbluttherapie-prf/eigenbluttherapie-prf-haare_hero.png',
    imageAlt:
      'PRF Eigenbluttherapie gegen Haarausfall bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Wie PRF bei Haarausfall wirkt',
    content: [
      'PRF (Platelet-Rich Fibrin) ist eine innovative Eigenbluttherapie, die körpereigene Wachstumsfaktoren und Stammzellen nutzt, um die Haarfollikel zu revitalisieren und das Haarwachstum anzuregen. Als Weiterentwicklung der PRP-Therapie arbeitet PRF ohne Zusatzstoffe – 100% natürlich und biologisch.',
      'Die Behandlung eignet sich besonders bei erblich bedingtem Haarausfall (androgenetische Alopezie), kreisrundem Haarausfall (Alopecia areata), diffusem Haarausfall, zur Verbesserung der Haardichte und des Haardurchmessers sowie zur Unterstützung nach Haartransplantationen.',
      'Durch die Fibrin-Matrix werden Wachstumsfaktoren kontinuierlich über Tage hinweg freigesetzt. Dies stimuliert ruhende Haarfollikel, verbessert die Durchblutung der Kopfhaut und fördert die Bildung neuer, kräftiger Haare. Viele Patienten berichten von dichterem, gesünderem Haar und einer spürbar verbesserten Haarqualität.',
      'Die PRF-Haarbehandlung ist minimal-invasiv, verträglich und erfordert keine Ausfallzeit – ideal für alle, die eine natürliche Alternative zu medikamentösen Therapien suchen.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Behandlungsbereiche & Indikationen für PRF Haartherapie',
    categories: [
      {
        category: 'Haarausfallformen',
        items: [
          {
            title: 'Androgenetische Alopezie (erblicher Haarausfall)',
            description:
              'Bei Männern & Frauen – Geheimratsecken, Scheitelbereich',
          },
          {
            title: 'Alopecia areata (kreisrunder Haarausfall)',
            description: 'Lokalisierte kahle Stellen auf der Kopfhaut',
          },
          {
            title: 'Diffuser Haarausfall',
            description: 'Gleichmäßige Ausdünnung über die gesamte Kopfhaut',
          },
          {
            title: 'Post-Transplantations-Support',
            description:
              'Verbesserung der Anwuchsrate und Haardichte nach HT',
          },
        ],
      },
      {
        category: 'Behandlungsziele',
        items: [
          { title: 'Erhöhung der Haardichte', description: 'Mehr Haare pro cm²' },
          {
            title: 'Vergrößerung des Haardurchmessers',
            description: 'Dickere, kräftigere Einzelhaare',
          },
          {
            title: 'Reaktivierung ruhender Follikel',
            description: 'Telogen-Follikel in Anagen-Phase bringen',
          },
          {
            title: 'Verbesserung der Kopfhautgesundheit',
            description: 'Bessere Durchblutung, weniger Entzündung',
          },
        ],
      },
    ],
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: 'PRF Haarausfall-Behandlung auf einen Blick',
    benefits: [
      {
        title: 'Preis',
        description: 'ab 300€ pro Sitzung*',
        iconUrl: '/assets/icons/EUR.svg',
      },
      {
        title: 'Dauer',
        description: 'ca. 2 Stunden',
        iconUrl: '/assets/icons/TIME.svg',
      },
      {
        title: 'Wirkeintritt',
        description: 'nach 2-3 Behandlungen',
        iconUrl: '/assets/icons/CAL.svg',
      },
      {
        title: 'Lokalanästhesie',
        description: 'Ja, auf Wunsch',
        iconUrl: '/assets/icons/Spritze.svg',
      },
      {
        title: 'Wiederholung',
        description: '4-6 Sitzungen, Abstand 4-6 Wochen, Auffrischung 1-2x/Jahr',
        iconUrl: '/assets/icons/wiederholung.svg',
      },
    ],
    note: '*Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf der PRF Haarbehandlung in Bremen',
    steps: [
      {
        number: '01',
        title: 'Haaranalyse & Beratung',
        description:
          'Ich analysiere Ihre Kopfhaut, Haarstruktur und Haarausfallmuster. Wir besprechen Ihre Erwartungen, den Haarausfall-Typ und erstellen einen individuellen Behandlungsplan. Fotos dokumentieren den Ausgangszustand für Verlaufskontrollen.',
      },
      {
        number: '02',
        title: 'Vorbereitung & Betäubung',
        description:
          'Optional: Betäubungscreme auf der Kopfhaut (Einwirkzeit 30-60 Min.). Ihre Haare sollten sauber sein. Dann erfolgt die Blutentnahme (ca. 40-60 ml) – wie bei einer normalen Blutabnahme.',
      },
      {
        number: '03',
        title: 'PRF-Aufbereitung',
        description:
          'Ihr Blut wird zentrifugiert, wodurch sich die PRF-Matrix bildet – eine gelartige Struktur reich an Blutplättchen, Wachstumsfaktoren und Stammzellen. Dieser Prozess dauert etwa 15 Minuten.',
      },
      {
        number: '04',
        title: 'Injektionen in die Kopfhaut',
        description:
          'Mit feinen Nadeln wird die PRF-Matrix in 1-cm-Abständen in die betroffenen Areale der Kopfhaut injiziert. Die Behandlung ist dank Betäubung gut verträglich und dauert je nach Areal 20-40 Minuten.',
      },
      {
        number: '05',
        title: 'Nachsorge & Folgetermine',
        description:
          'Nach der Behandlung können Sie sofort nach Hause gehen. Haare sind am Folgetag mit mildem Shampoo waschbar. Die Behandlungsserie (meist 4-6 Sitzungen alle 4-6 Wochen) baut die Ergebnisse sukzessive auf. Verlaufskontrollen dokumentieren den Fortschritt.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Vor- und Nachsorge bei PRF Haartherapie',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Blutverdünner vermeiden',
          description:
            'Nach Rücksprache mit Ihrem Arzt 7 Tage vorher auf Aspirin, Ibuprofen oder andere blutverdünnende Medikamente verzichten.',
        },
        {
          title: 'Kein Koffein, Nikotin, Alkohol',
          description:
            '2 Tage vor der Behandlung auf Kaffee, Rauchen und Alkohol verzichten – für optimale Blutqualität.',
        },
        {
          title: 'Gut hydriert & nicht nüchtern',
          description:
            'Trinken Sie ausreichend Wasser am Tag vor und am Behandlungstag. Essen Sie vorher etwas Leichtes.',
        },
        {
          title: 'Saubere Haare',
          description:
            'Waschen Sie Ihre Haare am Behandlungstag oder am Vortag. Keine Stylingprodukte verwenden.',
        },
        {
          title: 'Gesund erscheinen',
          description:
            'Keine akuten Infekte, Fieber oder Entzündungen der Kopfhaut. Bei Unsicherheit Termin verschieben.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Injektionsstellen nicht berühren',
          description:
            'Vermeiden Sie für 12-24 Stunden intensives Berühren, Kratzen oder Reiben der Kopfhaut.',
        },
        {
          title: 'Haarwäsche',
          description:
            'Ab dem Folgetag mit mildem, sulfatfreiem Shampoo erlaubt. Kopfhaut sanft behandeln, nicht rubbeln.',
        },
        {
          title: 'Keine Hitze & Sonne',
          description:
            '7 Tage auf Sauna, Solarium, direkte Sonneneinstrahlung und heiße Föhnluft verzichten.',
        },
        {
          title: 'Kein intensiver Sport',
          description:
            '24-48 Stunden auf schweißtreibende Aktivitäten verzichten – moderate Bewegung ist ok.',
        },
        {
          title: 'Keine Chemie & Färbungen',
          description:
            'Für 1-2 Wochen keine Haarfärbungen, chemische Behandlungen oder aggressive Stylingprodukte.',
        },
        {
          title: 'Kopfhautpflege',
          description:
            'Nutzen Sie milde, beruhigende Kopfhaut-Seren oder -Tonics nach Empfehlung. Fördern Sie die Durchblutung durch sanfte Massage (erst nach 48h).',
        },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Lars M.',
      rating: 5,
      text:
        'Nach 5 PRF-Sitzungen sehe ich endlich wieder Fortschritte bei meinem Haarausfall. Die Haare am Oberkopf sind dichter geworden und wirken kräftiger. Die Behandlung war angenehm und die Beratung sehr professionell.',
      date: '2024-09-08',
    },
    {
      id: 2,
      name: 'Nina F.',
      rating: 5,
      text:
        'Ich hatte diffusen Haarausfall und war skeptisch, aber PRF hat wirklich geholfen! Nach 4 Monaten ist mein Scheitel deutlich voller. Keine Nebenwirkungen, super Betreuung.',
      date: '2024-08-14',
    },
    {
      id: 3,
      name: 'Thomas B.',
      rating: 5,
      text:
        'Nach meiner Haartransplantation wurde mir PRF zur Verbesserung der Anwuchsrate empfohlen. Das Ergebnis ist fantastisch – die transplantierten Haare sind super angewachsen und die Kopfhaut sieht gesund aus.',
      date: '2024-07-22',
    },
    {
      id: 4,
      name: 'Sarah K.',
      rating: 5,
      text:
        'Meine kahlen Stellen durch kreisrunden Haarausfall sind nach mehreren PRF-Behandlungen deutlich kleiner geworden. Ich bin so erleichtert! Die Ärztin hat mich super begleitet.',
      date: '2024-06-30',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für PRF Haartherapie in Bremen',
    description: [
      'Haarausfall kann belastend sein – ob erblich bedingt, durch Stress oder andere Faktoren. Als spezialisierte Ärztin für ästhetische Medizin biete ich Ihnen mit PRF eine natürliche, wissenschaftlich fundierte Methode zur Revitalisierung Ihrer Haarfollikel.',
      'In meiner Praxis EL Aesthetics in Bremen analysiere ich Ihre individuelle Haarsituation gründlich: Welche Form von Haarausfall liegt vor? Welche Areale sind betroffen? Welche Erwartungen sind realistisch? Gemeinsam entwickeln wir einen Behandlungsplan, der zu Ihnen passt.',
      'Durch kontinuierliche Fortbildungen und Mitgliedschaft in Fachgesellschaften (u.a. DGBT) arbeite ich stets mit den neuesten Techniken der regenerativen Medizin. Mein Ziel: Ihr Haar soll nicht nur dichter werden, sondern auch gesünder und kräftiger nachwachsen.',
      'Lassen Sie uns gemeinsam den ersten Schritt gehen – für dichteres, volleres Haar und ein gestärktes Selbstbewusstsein.',
    ],
    ctaText: 'Jetzt Haaranalyse-Termin buchen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche – Expertin für PRF Haartherapie gegen Haarausfall in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen gegen Haarausfall in Bremen',
    treatments: [
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haare_hero.png',
        imageAlt: 'Mesotherapie gegen Haarausfall',
        title: 'Mesotherapie bei Haarausfall',
        description:
          'Gezielte Mikroinjektionen von Vitaminen, Aminosäuren und Peptiden in die Kopfhaut: stärken Haarwurzeln, fördern die Durchblutung und können Haarausfall bremsen – geeignet bei diffusem und androgenetischem Haarausfall.',
        treatmentUrl: '/mesotherapie/haare',
      },
      {
        imageUrl: '/assets/eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.png',
        imageAlt: 'Microneedling mit PRF für die Kopfhaut',
        title: 'Microneedling + PRF (Kopfhaut)',
        description:
          'Kombination aus medizinischem Microneedling und PRF-Biostimulation: körpereigenes Fibrin-Konzentrat aktiviert Haarfollikel, fördert Regeneration und kann Haardichte und -qualität verbessern.',
        treatmentUrl: '/eigenbluttherapie-prf/microneedling',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide für die Kopfhaut bei Haarausfall',
        title: 'Polynukleotide (PN) bei Haarausfall',
        description:
          'Biostimulatoren auf Nukleotidbasis verbessern das Kopfhautmilieu, beruhigen Mikroentzündungen und unterstützen Haarwachstum – allein oder kombinierbar, z. B. mit PRF.',
        treatmentUrl: '/polynukleotide',
      },
    ]
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur PRF Haartherapie',
    faqs: [
      {
        question: 'Wie unterscheidet sich PRF von PRP bei Haarausfall?',
        answer:
          'PRF (Platelet-Rich Fibrin) ist die Weiterentwicklung von PRP. Der entscheidende Unterschied: PRF wird ohne Antikoagulanzien (Gerinnungshemmer) hergestellt. Es bildet sich eine Fibrin-Matrix, die Blutplättchen, Wachstumsfaktoren und Stammzellen bindet und diese über Tage kontinuierlich freisetzt – für eine länger anhaltende, intensivere Wirkung auf die Haarfollikel. PRF ist zu 100% körpereigen und besonders gut verträglich.',
      },
      {
        question: 'Bei welchen Formen von Haarausfall hilft PRF?',
        answer:
          'PRF ist wirksam bei: erblich bedingtem Haarausfall (androgenetische Alopezie) bei Männern und Frauen, kreisrundem Haarausfall (Alopecia areata), diffusem Haarausfall, zur Verbesserung der Haardichte und des Haardurchmessers sowie zur Unterstützung nach Haartransplantationen. Bei narbigen Alopezien oder komplett inaktiven Follikeln sind die Erfolgsaussichten begrenzt – dies besprechen wir individuell.',
      },
      {
        question: 'Wie viele Behandlungen brauche ich und wann sehe ich Ergebnisse?',
        answer:
          'Empfohlen werden 4-6 Sitzungen im Abstand von 4-6 Wochen. Der Haarwachstumszyklus ist langsam: Erste spürbare Verbesserungen (weniger Haarausfall, gesündere Kopfhaut) nach 4-8 Wochen. Sichtbare Ergebnisse (dichteres Haar, dickere Einzelhaare) entwickeln sich über 3-6 Monate. Der maximale Effekt zeigt sich nach Abschluss der Serie plus einigen Monaten Wachstumszeit. Zur Erhaltung: 1-2 Auffrischungen pro Jahr.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Dank optionaler Betäubungscreme ist die PRF-Kopfhautbehandlung gut verträglich. Die meisten Patienten beschreiben ein leichtes Pieken oder Druckgefühl. Die Injektionen erfolgen mit sehr feinen Nadeln. Nach der Behandlung kann die Kopfhaut für einige Stunden leicht spannen oder druckempfindlich sein – dies normalisiert sich schnell.',
      },
      {
        question: 'Gibt es Nebenwirkungen oder Risiken?',
        answer:
          'Da PRF aus Ihrem eigenen Blut gewonnen wird, sind allergische Reaktionen oder Unverträglichkeiten nahezu ausgeschlossen. Mögliche, vorübergehende Nebenwirkungen: leichte Schwellung oder Rötung der Kopfhaut (1-2 Tage), kleine Blutergüsse an Einstichstellen (selten), leichtes Spannungsgefühl, sehr selten leichte Kopfschmerzen. Schwerwiegende Komplikationen sind bei fachgerechter Durchführung extrem selten.',
      },
      {
        question: 'Muss ich nach der Behandlung mit Ausfallzeiten rechnen?',
        answer:
          'Nein – Sie sind sofort alltagsfähig. Die Kopfhaut kann gerötet sein, was meist mit den Haaren verdeckt wird. Sie können am selben Tag noch arbeiten oder ausgehen. Haare dürfen ab dem Folgetag gewaschen werden. Nur auf intensive Hitze, Sport und Kopfhautreizungen sollten Sie kurzfristig verzichten.',
      },
      {
        question: 'Kann ich PRF mit anderen Haarausfall-Behandlungen kombinieren?',
        answer:
          'Ja, PRF lässt sich sehr gut mit anderen Therapien kombinieren: Minoxidil-Lösungen, Mesotherapie der Kopfhaut mit Nährstoff-Cocktails, Low-Level-Lasertherapie (LLLT), medikamentöse Behandlungen (z.B. Finasterid bei Männern) sowie Post-Transplantations-Support. Die Kombinationen besprechen wir individuell je nach Ihrem Haarausfall-Typ und Ihren Zielen.',
      },
      {
        question: 'Wer ist für PRF Haartherapie NICHT geeignet?',
        answer:
          'Kontraindikationen sind: Schwangerschaft und Stillzeit, akute oder chronische Infektionen, schwere Gerinnungsstörungen, aktive Entzündungen oder Infektionen der Kopfhaut (z.B. Pilzinfektionen), Krebserkrankungen (individuell zu besprechen), Autoimmunerkrankungen mit aktiven Schüben. Im Beratungsgespräch klären wir Ihre gesundheitliche Eignung.',
      },
      {
        question: 'Was kostet eine PRF Haarbehandlung in Bremen?',
        answer:
          'Eine PRF-Sitzung für Haare kostet ab 350€ (je nach Behandlungsareal und Umfang). Die Abrechnung erfolgt nach GOÄ. Für eine komplette Behandlungsserie (4-6 Sitzungen) können Paketpreise angeboten werden. Einen transparenten, individuellen Kostenplan erhalten Sie im persönlichen Beratungsgespräch.',
      },
      {
        question: 'Wie bereite ich mich optimal auf die Behandlung vor?',
        answer:
          'Vermeiden Sie 7 Tage vorher blutverdünnende Medikamente (nach Rücksprache), verzichten Sie 2 Tage vorher auf Koffein, Nikotin und Alkohol, trinken Sie ausreichend Wasser, erscheinen Sie nicht nüchtern (leichte Mahlzeit), waschen Sie Ihre Haare am Behandlungstag ohne Stylingprodukte und kommen Sie gesund (keine Infekte). Bei Fragen zur Vorbereitung bin ich jederzeit für Sie da.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für dichteres, kräftigeres Haar?',
    subtitle:
      'Vereinbaren Sie jetzt Ihre persönliche Haaranalyse und erfahren Sie, wie PRF Ihnen bei Haarausfall helfen kann.',
    primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'PRF Haartherapie in Bremen: EL Aesthetics',
    description:
      'Natürliche, evidenzbasierte Behandlung bei Haarausfall – individuell geplant und professionell durchgeführt in unserer modernen Praxis im Herzen Bremens.',
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
        title="Erfahrungen unserer Patienten mit PRF Haartherapie"
        subtitle="Echte Ergebnisse von echten Menschen: Mehr Haardichte, weniger Haarausfall – natürlich und nachhaltig."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}