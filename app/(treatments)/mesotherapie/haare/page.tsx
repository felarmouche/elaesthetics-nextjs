import type { Metadata } from 'next';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection,  CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps,   ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import {Review} from '@/types/Review'
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Mesotherapie Haare Bremen | Haarausfall behandeln | EL Aesthetics',
  description: 'Mesotherapie gegen Haarausfall in Bremen ✓ Haarverdichtung & Haarwurzeln stärken ✓ Jetzt Beraten lassen!',
  keywords: 'Mesotherapie Haare Bremen, Mesotherapie Haarausfall Bremen, Haarmesotherapie Bremen, Haarausfall Behandlung Mesotherapie Bremen, Mesotherapie gegen Haarausfall Bremen, Haarwachstum fördern Bremen, Kopfhautmesotherapie Bremen, Haarverdichtung Mesotherapie Bremen',
  openGraph: {
    title: 'Mesotherapie gegen Haarausfall & für volleres Haar in Bremen - EL Aesthetics',
    description: 'Effektive Mesotherapie bei Haarausfall. Stärken Sie Ihre Haarwurzeln, fördern Sie das Haarwachstum und verdichten Sie Ihr Haar – für Männer und Frauen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/mesotherapie/og-image-mesotherapie-haare-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/mesotherapie/haare',
  },
};

export default function MesotherapieHaarePage() {
  const heroData: HeroSectionProps = {
    title: "Mesotherapie gegen Haarausfall & für volleres Haar in Bremen",
    subtitle: "Leiden Sie unter Haarausfall oder dünner werdendem Haar?\nMit der Mesotherapie aktivieren wir Ihre Haarwurzeln und fördern das Haarwachstum – natürlich und nachhaltig.",
    imageSrc: "/assets/mesotherapie/mesotherapie-haare_hero.webp",
    imageAlt: "Mesotherapie Behandlung gegen Haarausfall in Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Mesotherapie für die Haare?",
    content: [
      "Die Mesotherapie ist eine innovative, minimal-invasive Behandlungsmethode gegen Haarausfall und zur Förderung des Haarwachstums. Dabei wird ein speziell formulierter Wirkstoffcocktail aus Vitaminen, Spurenelementen, Aminosäuren und durchblutungsfördernden Substanzen direkt in die Kopfhaut injiziert – genau dort, wo Ihre Haarwurzeln die Nährstoffe brauchen.",
      "Der Wirkstoffkomplex versorgt die Haarfollikel intensiv mit essentiellen Nährstoffen, verbessert die Durchblutung der Kopfhaut und aktiviert ruhende Haarwurzeln. Dies führt zu einer deutlichen Reduktion des Haarausfalls und zur Verdichtung des bestehenden Haares.",
      "In unserer Praxis in Bremen behandeln wir mit der Haarmesotherapie sowohl Frauen als auch Männer mit verschiedenen Formen von Haarausfall: erblich bedingter Haarausfall (androgenetische Alopezie), diffuser Haarausfall oder kreisrunder Haarausfall. Die Behandlung ist sanft, nahezu schmerzfrei und erfordert keine Ausfallzeit. Klinische Studien zeigen: 80% der Patienten berichten ab der 3. Behandlung von deutlich weniger Haarausfall."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Für welche Arten von Haarausfall ist die Mesotherapie geeignet?",
    categories: [
      {
        category: "Häufigste Indikationen",
        items: [
          { title: "Erblich bedingter Haarausfall (androgenetische Alopezie)" },
          { title: "Diffuser Haarausfall (hormonell, stressbedingt, ernährungsbedingt)" },
          { title: "Kreisrunder Haarausfall (Alopecia areata, leichte Formen)" },
          { title: "Dünnes, lichtes Haar mit Volumenverlust" },
          { title: "Haarausfall nach Schwangerschaft oder Stillzeit" }
        ]
      },
      {
        category: "Supportive Anwendung",
        items: [
          { title: "Nach Haartransplantation (unterstützende Therapie)" },
          { title: "Vorbeugung bei familiärer Veranlagung" },
          { title: "Stärkung der Haarwurzeln bei beginnendem Haarausfall" },
          { title: "Verbesserung der Kopfhaut-Gesundheit" }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Mesotherapie für Haare auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.haare.mesotherapie}€*`, iconUrl: "/assets/icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-45 Min", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Wirkung", description: "ab 3. Behandlung spürbar\nvollständig nach 2-3 Monaten", iconUrl: "/assets/icons/TIME.svg" },
      { title: "Haltbarkeit", description: "6-12 Monate", iconUrl: "/assets/icons/CAL.svg" },
      { title: "Behandlungen", description: "6-10 Sitzungen alle 1-2 Wochen\nAuffrischung: alle 3-6 Monate", iconUrl: "/assets/icons/wiederholung.svg" },
      { title: "Betäubung", description: "nicht erforderlich", iconUrl: "/assets/icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "keine (sofort gesellschaftsfähig)", iconUrl: "/assets/icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Haarmesotherapie-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Analyse und Beratung",
        description: "In unserer Bremer Praxis führe ich zunächst eine gründliche Analyse Ihrer Kopfhaut und Haarstruktur durch. Wir besprechen die Art Ihres Haarausfalls, mögliche Ursachen und Ihre Erwartungen. Ich erkläre Ihnen genau, wie die Mesotherapie wirkt und welche Ergebnisse Sie erwarten können."
      },
      {
        number: "02",
        title: "Vorbereitung der Kopfhaut",
        description: "Die Kopfhaut wird gründlich gereinigt und desinfiziert. Styling-Produkte werden entfernt. Optional kann die Kopfhaut mit einer betäubenden Creme vorbehandelt werden, dies ist jedoch meist nicht erforderlich."
      },
      {
        number: "03",
        title: "Mikroinjektion des Wirkstoffcocktails",
        description: "Mit einer speziellen Mesotherapie-Technik wird der vitaminreiche Wirkstoffkomplex mit sehr feinen Nadeln direkt in die Kopfhaut injiziert – in einer Tiefe von 1-4mm, genau dort, wo die Haarfollikel sitzen. Die Behandlung dauert etwa 20-30 Minuten und ist gut verträglich."
      },
      {
        number: "04",
        title: "Nachsorge und Kontrolle",
        description: "Nach der Behandlung können Sie Ihre Haare normal tragen. Eine leichte Massage der Kopfhaut kann die Verteilung der Wirkstoffe unterstützen. Die ersten Ergebnisse – weniger Haarausfall – zeigen sich meist ab der 3. Behandlung. Das vollständige Ergebnis mit dichterem, kräftigerem Haar entwickelt sich nach 2-3 Monaten."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Haarmesotherapie",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Verzichten Sie nach ärztlicher Rücksprache ca. 1 Woche vor der Behandlung auf blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen), um das Risiko von Blutergüssen zu minimieren."
        },
        {
          title: "Haare waschen",
          description: "Waschen Sie Ihre Haare am Tag vor der Behandlung. Am Behandlungstag selbst sollten keine Styling-Produkte verwendet werden."
        },
        {
          title: "Gesunde Kopfhaut",
          description: "Die Kopfhaut sollte intakt sein. Bei akuten Entzündungen, Ekzemen, Schuppenflechte oder offenen Wunden sollte die Behandlung verschoben werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Während der Schwangerschaft und Stillzeit sollte keine Mesotherapie durchgeführt werden."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Haare nicht waschen",
          description: "Verzichten Sie für 24 Stunden auf Haarwäsche, damit die Wirkstoffe optimal einwirken können."
        },
        {
          title: "Keine Kopfhaut-Manipulation",
          description: "Reiben, kratzen oder massieren Sie die Kopfhaut nicht intensiv für 24 Stunden nach der Behandlung."
        },
        {
          title: "Sport & Schwitzen",
          description: "Verzichten Sie für 24 Stunden auf intensive körperliche Aktivität, die zu starkem Schwitzen führt (Sauna, intensives Cardio-Training)."
        },
        {
          title: "Sonnenschutz",
          description: "Schützen Sie die Kopfhaut für 2-3 Tage vor direkter Sonneneinstrahlung (Hut oder Sonnencreme für die Kopfhaut bei Lichtung)."
        },
        {
          title: "Styling",
          description: "Sie können am nächsten Tag wieder normal stylen, föhnen und Styling-Produkte verwenden."
        }
      ]
    }
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Michael R.",
      rating: 5,
      text: "Nach nur 4 Behandlungen habe ich deutlich weniger Haarausfall bemerkt. Meine Haare fühlen sich kräftiger an und die lichten Stellen am Oberkopf sind dichter geworden. Ich bin sehr zufrieden!",
      date: "2024-09-20"
    },
    {
      id: 2,
      name: "Sandra K.",
      rating: 5,
      text: "Die Behandlung war schmerzfrei und schnell. Nach 3 Monaten ist mein Haar merklich voller geworden. Frau El-Armouche hat sich viel Zeit für die Beratung genommen und alle meine Fragen beantwortet.",
      date: "2024-08-15"
    },
    {
      id: 3,
      name: "Thomas B.",
      rating: 5,
      text: "Endlich eine Lösung gegen meinen erblich bedingten Haarausfall! Die Mesotherapie hat mein Haarwachstum sichtbar verbessert. Sehr zu empfehlen!",
      date: "2024-07-22"
    },
    {
      id: 4,
      name: "Julia S.",
      rating: 5,
      text: "Nach der Schwangerschaft hatte ich starken Haarausfall. Die Mesotherapie hat geholfen, mein Haar wieder zu verdichten. Ich bin sehr dankbar!",
      date: "2024-06-30"
    },
    {
      id: 5,
      name: "Markus H.",
      rating: 5,
      text: "Professionelle Beratung und effektive Behandlung. Meine Haarwurzeln sind gestärkt und der Haarausfall hat deutlich nachgelassen. Absolut empfehlenswert!",
      date: "2024-05-18"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre Expertin für Haarmesotherapie in Bremen",
    description: [
      "Sie leiden unter Haarausfall und möchten Ihre Haarwurzeln stärken?",
      "Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische Medizin und regenerative Therapien. Mit langjähriger Erfahrung in der Mesotherapie helfe ich Ihnen, Haarausfall zu reduzieren und volleres, kräftigeres Haar zu fördern – individuell auf Ihre Situation abgestimmt.",
      "Ich bin zertifiziert für Injektionsbehandlungen und bilde mich kontinuierlich in modernen Haarausfall-Therapien fort. In meiner Praxis kombiniere ich fundiertes medizinisches Wissen mit einem empathischen Verständnis für die emotionale Belastung, die Haarausfall bedeuten kann.",
      "In meiner Praxis in Bremen steht Ihre Zufriedenheit im Mittelpunkt. Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und entdecken Sie, wie die Mesotherapie Ihr Haar wieder stärken kann."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/kontakt",
    imageSrc: "/assets/tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche im Beratungsgespräch für Haarmesotherapie in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Behandlungen gegen Haarausfall in Bremen",
    treatments: [
      {
        imageUrl: "/assets/prf/prf_haar_hero.webp",
        imageAlt: "PRF Eigenbluttherapie für Haare",
        title: "PRF/PRP-Eigenbluttherapie für Haare",
        description: "Nutzen Sie die regenerativen Kräfte Ihres eigenen Blutes zur Aktivierung der Haarwurzeln. Besonders effektiv in Kombination mit Mesotherapie.",
        treatmentUrl: "/haarausfall-behandlung/eigenbluttherapie"
      },
      {
        imageUrl: "/assets/polynukleotide/polynukleotide_haar_hero.webp",
        imageAlt: "Polynukleotide Behandlung für Haarwurzeln",
        title: "Polynukleotide für Haare",
        description: "Innovative Behandlung zur Regeneration der Haarfollikel und Verbesserung der Kopfhaut-Gesundheit. Ideal bei fortgeschrittenem Haarausfall.",
        treatmentUrl: "/haarausfall-behandlung/polynukleotide"
      },
      {
        imageUrl: "/assets/microneedling/microneedling_haar_hero.webp",
        imageAlt: "Microneedling der Kopfhaut",
        title: "Medizinisches Microneedling der Kopfhaut",
        description: "Fördern Sie die Durchblutung der Kopfhaut und die Aufnahme von Wirkstoffen durch gezielte Mikroverletzungen. Unterstützt das Haarwachstum effektiv.",
        treatmentUrl: "/haarausfall-behandlung/microneedling"
      },
      {
        imageUrl: "/assets/beratung/haarausfall_beratung.webp",
        imageAlt: "Umfassende Haarausfall-Beratung",
        title: "Umfassende Haarausfall-Diagnostik",
        description: "Lassen Sie uns gemeinsam die Ursachen Ihres Haarausfalls analysieren und einen individuellen Behandlungsplan erstellen.",
        treatmentUrl: "/haarausfall-behandlung"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Mesotherapie für Haare",
    faqs: [
      {
        question: "Wie wirkt die Mesotherapie gegen Haarausfall?",
        answer: "Die Mesotherapie versorgt die Haarfollikel direkt mit einem hochkonzentrierten Wirkstoffcocktail aus Vitaminen, Spurenelementen, Aminosäuren und durchblutungsfördernden Substanzen. Diese Nährstoffe aktivieren ruhende Haarwurzeln, stärken bestehende Haarfollikel und verbessern die Durchblutung der Kopfhaut. Das Ergebnis: Der Haarausfall wird reduziert, das bestehende Haar wird kräftiger und dichter, und die Haarwachstumsphase wird verlängert."
      },
      {
        question: "Welche Erfolgsrate hat die Haarmesotherapie?",
        answer: "Klinische Studien zeigen beeindruckende Ergebnisse: Etwa 80% der Patienten berichten ab der 3. Behandlung von einer deutlichen Reduktion des Haarausfalls. Nach 2-3 Monaten ist bei den meisten Patienten eine sichtbare Verdichtung des Haares erkennbar. Die Erfolgsrate ist besonders hoch bei erblich bedingtem und diffusem Haarausfall in frühen bis mittleren Stadien."
      },
      {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Die Haarmesotherapie wird als gut verträglich beschrieben. Durch die Verwendung sehr feiner Nadeln und die spezielle Injektionstechnik ist die Behandlung nahezu schmerzfrei. Die meisten Patienten empfinden nur ein leichtes Prickeln oder Druckgefühl. Eine Betäubung ist in der Regel nicht erforderlich, kann aber bei Bedarf mit einer betäubenden Creme erfolgen."
      },
      {
        question: "Für wen ist die Haarmesotherapie geeignet?",
        answer: "Die Mesotherapie eignet sich für Frauen und Männer mit verschiedenen Formen von Haarausfall: erblich bedingter Haarausfall (androgenetische Alopezie), diffuser Haarausfall (hormonell, stressbedingt, ernährungsbedingt), kreisrunder Haarausfall in leichten Formen, sowie dünnes, lichtes Haar mit Volumenverlust. Besonders effektiv ist die Behandlung in frühen bis mittleren Stadien des Haarausfalls. Bei sehr fortgeschrittenem Haarausfall mit bereits inaktiven Haarfollikeln sind die Erfolgsaussichten geringer."
      },
      {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Für optimale Ergebnisse empfehle ich eine Intensivphase von 6-10 Behandlungen im Abstand von 1-2 Wochen. Erste Verbesserungen – deutlich weniger Haarausfall – zeigen sich meist ab der 3. Behandlung. Das vollständige Ergebnis mit dichterem, kräftigerem Haar entwickelt sich nach 2-3 Monaten. Zur Erhaltung des Ergebnisses sind Auffrischungen alle 3-6 Monate sinnvoll."
      },
      {
        question: "Wann sehe ich erste Ergebnisse?",
        answer: "Die meisten Patienten bemerken ab der 3. Behandlung eine deutliche Reduktion des Haarausfalls – weniger Haare in der Bürste, im Abfluss oder auf dem Kissen. Nach etwa 2-3 Monaten wird das Haar sichtbar dichter und kräftiger. Das Haarwachstum verbessert sich kontinuierlich über mehrere Monate. Wichtig ist Geduld: Haare wachsen langsam (ca. 1cm pro Monat), daher braucht die vollständige Verdichtung Zeit."
      },
      {
        question: "Gibt es Ausfallzeiten nach der Behandlung?",
        answer: "Nein, die Haarmesotherapie erfordert keine Ausfallzeit. Sie können direkt nach der Behandlung Ihren normalen Alltag fortsetzen. Leichte Rötungen oder minimale Schwellungen der Kopfhaut können auftreten, sind aber in der Regel innerhalb weniger Stunden verschwunden. Sie sollten lediglich für 24 Stunden auf Haarwäsche und intensives Schwitzen verzichten."
      },
      {
        question: "Kann die Mesotherapie mit anderen Haarausfall-Behandlungen kombiniert werden?",
        answer: "Ja, die Mesotherapie lässt sich hervorragend mit anderen Behandlungen kombinieren. Besonders effektiv ist die Kombination mit PRF/PRP-Eigenbluttherapie, Polynukleotiden oder medizinischem Microneedling der Kopfhaut. Auch eine begleitende medikamentöse Therapie (z.B. Minoxidil) ist möglich. In einem persönlichen Beratungsgespräch erstelle ich einen individuellen Behandlungsplan, der optimal auf Ihre Situation abgestimmt ist."
      },
      {
        question: "Was kostet eine Haarmesotherapie in Bremen?",
        answer: "Eine Haarmesotherapie-Behandlung beginnt bei etwa 200€ pro Sitzung. Die Kosten können je nach Behandlungsumfang und Größe des betroffenen Areals variieren. Für eine komplette Behandlungsserie (6-10 Sitzungen) biete ich attraktive Paketpreise an. Im persönlichen Beratungsgespräch in unserer Bremer Praxis erstelle ich Ihnen einen transparenten und individuellen Kostenplan."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für volleres, kräftigeres Haar?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Haarmesotherapie in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für Haarmesotherapie in Bremen: EL Aesthetics",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen Haarmesotherapie-Behandlungen auf höchstem medizinischen Niveau. Wir legen Wert auf individuelle Diagnostik, effektive Behandlung und eine vertrauensvolle Atmosphäre.",
    location: {
      address: "Richtepad 14, 28355 Bremen",
      phone: "+49 155 66919635",
      email: "info@elaesthetics-bremen.de",
      openingHours: [
        "Termine nach Vereinbarung"
      ]
    }
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
        title="Erfahrungen unserer Patienten" 
        subtitle='Unsere Patienten mit Haarausfall schätzen vor allem die sichtbaren Ergebnisse und die einfühlsame Beratung in unserer Praxis für ästhetische Medizin in Bremen. Viele berichten, wie die Mesotherapie ihnen zu dichterem, kräftigerem Haar verholfen hat.' 
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}