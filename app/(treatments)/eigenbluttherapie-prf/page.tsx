import type { Metadata } from 'next';
import {
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
  TreatmentsSection,
  TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title:
    'Eigenbluttherapie (PRF) Bremen | Hautverjüngung & Haarausfall | EL Aesthetics',
  description:
    'PRF Eigenbluttherapie in Bremen: Natürliche Hautregeneration, feinere Poren & Fältchen, Tränenrinne/Unterlid, Aknenarben & Haarausfall. Jetzt beraten lassen!.',
  keywords:
    'Eigenbluttherapie Bremen, PRF Bremen, PRP Bremen, Vampire Lifting Bremen, PRF Unterlid, Tränenrinne PRF, PRF Haarausfall, PRF Haare, Eigenblut Behandlung Bremen, Platelet-Rich Fibrin, PRF Microneedling, PRP vs PRF',
  openGraph: {
    title:
      'Eigenbluttherapie (PRF) in Bremen – Haut & Haare | EL Aesthetics',
    description:
      'Platelet-Rich Fibrin (PRF): 100% körpereigene Regeneration für Haut (Glow, Fältchen, Aknenarben) & Haare (Haardichte, -durchmesser).',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/og-eigenbluttherapie-prf.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/eigenbluttherapie-prf',
  },
};

export default function EigenbluttherapiePRFPage() {
  const heroData: HeroSectionProps = {
    title: 'Eigenbluttherapie mit PRF in Bremen',
    subtitle:
      'Natürliche Regeneration mit Platelet‑Rich Fibrin (PRF): Hautqualität verbessern & Haarausfall entgegenwirken – 100% körpereigen.',
    imageSrc: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp',
    imageAlt:
      'Eigenbluttherapie PRF für Haut und Haare bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'PRF – die Weiterentwicklung der PRP-Therapie',
    content: [
      'PRF (Platelet‑Rich Fibrin) ist die Weiterentwicklung der bekannten PRP‑Therapie. Im Unterschied zu PRP wird PRF ohne Antikoagulanzien hergestellt: Es bildet sich eine gelartige Fibrin‑Matrix, die Wachstumsfaktoren nach und nach freisetzt – für eine länger anhaltende, schonende Biostimulation.',
      'Als 100% biologisches Verfahren nutzt PRF ausschließlich körpereigene Bestandteile (Blutplättchen, Fibrin, Wachstumsfaktoren und Stammzellen). Das macht die Behandlung sehr gut verträglich.',
      'Typische Ziele sind:',
      'Behadlung von Haarausfall, feinere Poren und Fältchen, bessere Hauttextur, Glow, Reduktion von Aknenarben und Hyperpigmentierungen sowie Unterspritzung der sensiblen Unterlidregion (Tränenrinne), um Augenringe zu reduzieren.',
      'Für die Haare kann PRF die Vitalität der Haarfollikel anregen, Haardichte und ‑durchmesser verbessern und in Konzepten gegen Haarausfall oder zur Begleitung nach Haartransplantation eingesetzt werden.',
      'Empfohlen werden meist Behandlungsserien (z. B. 4–6 Sitzungen im Abstand von 4–6 Wochen) mit 1–2 Auffrischungen pro Jahr. Kombinierbar sind z. B. Microneedling, Skinbooster oder Hyaluron – individuell je nach Indikation.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Anwendungen der PRF‑Eigenbluttherapie',
    treatments: [
        {
        imageUrl: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-haare_hero.webp',
        imageAlt: 'PRF‑Behandlung gegen Haarausfall in Bremen',
        title: 'PRF für die Haare',
        description:
          'Revitalisierung der Haarfollikel: mehr Haardichte, größerer Haardurchmesser und gesündere Kopfhaut. Auch zur Unterstützung nach Haartransplantation.',
        treatmentUrl: '/eigenbluttherapie-prf/haare',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp',
        imageAlt:
          'PRF‑Eigenbluttherapie für die Haut: Feine Fältchen, Poren, Aknenarben, Unterlid',
        title: 'PRF für die Haut',
        description:
          'Biostimulation für Hautqualität & Glow: Kollagen- und Elastinbildung, feinere Poren, Reduktion feiner Linien, Hyperpigmentierungen & Aknenarben – auch an der Tränenrinne.',
        treatmentUrl: '/eigenbluttherapie-prf/vampire-lifting',
      },
      {
        imageUrl: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.webp',
        imageAlt: 'Medizinisches Microneedling mit PRF in Bremen',
        title: 'Microneedling + PRF',
        description:
          'Kombination mit Needling zur intensiven Hauterneuerung – sinnvoll bei Aknenarben, großen Poren und strukturbedingten Unebenheiten.',
        treatmentUrl: '/eigenbluttherapie-prf/microneedling',
      },
    ],
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Clara G.',
      rating: 5,
      text:
        'PRF unter den Augen hat meinen müden Look sichtbar verbessert – die Haut wirkt dichter und frischer.',
      date: '2024-08-12',
    },
    {
      id: 2,
      name: 'Lars M.',
      rating: 5,
      text:
        'Nach einigen PRF‑Sitzungen wirkt mein Haar dichter. Top Aufklärung, kaum Downtime.',
      date: '2024-07-02',
    },
    {
      id: 3,
      name: 'Sophie K.',
      rating: 5,
      text:
        'In Kombination mit Microneedling wurden meine Aknenarben deutlich flacher. Sehr natürliche Methode.',
      date: '2024-06-18',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Individuelle Behandlungsplanung – ärztlich & natürlich',
    description: [
      'Ich analysiere Ihre Haut- oder Haarsituation ausführlich und erkläre Ihnen realistische Ziele, geeignete Areale und die optimale Kombination (z. B. PRF solo, mit Microneedling oder ergänzend zu Hyaluron/Polynukleotiden).',
      'Transparenz zu Wirkprinzip, Ablauf, Anzahl der Sitzungen, Intervallen und möglichen Nebenwirkungen ist mir wichtig. Sie erhalten einen maßgeschneiderten Plan inklusive Nachsorgeempfehlungen.',
      'Ziel sind frische, natürliche Ergebnisse – man sieht die Verbesserung, nicht die Behandlung.',
    ],
    ctaText: 'Jetzt Beratungsgespräch vereinbaren',
    ctaHref: '/terminanfragen',
    imageSrc: '/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp',
    imageAlt:
      'Ärztliche Beratung zur Eigenbluttherapie PRF in Bremen bei EL Aesthetics',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur PRF‑Eigenbluttherapie',
    faqs: [
      {
        question: 'Wie funktioniert PRF – und was ist der Unterschied zu PRP?',
        answer:
          'PRF wird ohne Gerinnungshemmer gewonnen. Beim Zentrifugieren entsteht eine Fibrin‑Matrix, die Blutplättchen mit Wachstumsfaktoren und Stammzellen bindet. Diese geben die Faktoren über Tage frei, wodurch regenerative Prozesse (Kollagen-/Elastinbildung, Heilung) sanft und anhaltend unterstützt werden. PRF ist damit die moderne Weiterentwicklung von PRP und zu 100% körpereigen.',
      },
      {
        question: 'Welche Indikationen für die Haut sind geeignet?',
        answer:
          'Verbesserung der Hautstruktur und -textur, feinere Poren, Reduktion feiner Fältchen, Unterstützung bei Hyperpigmentierungen und Aknenarben sowie Behandlung empfindlicher Areale wie der Tränenrinne/Unterlider. Entzündliche Prozesse wie Akne/Rosazea können positiv beeinflusst werden.',
      },
      {
        question: 'Wie hilft PRF bei Haarausfall?',
        answer:
          'PRF revitalisiert Haarfollikel, kann ruhende Follikel reaktivieren und Haardichte sowie Haardurchmesser verbessern. Geeignet u. a. bei erblich bedingtem oder kreisrundem Haarausfall und als Erhaltung nach Haartransplantation – jeweils im individuellen Gesamtkonzept.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig – und wann sehe ich Ergebnisse?',
        answer:
          'Meist 4–6 Sitzungen im Abstand von 4–6 Wochen. Erste spürbare Effekte (prallere, genährte Haut) treten oft in den ersten 1–2 Wochen auf; sichtbare, stabile Verbesserungen entwickeln sich seriell über mehrere Behandlungen. Für die Haare zeigt sich der maximale Effekt nach mehreren Monaten kontinuierlicher Anwendung. Zur Erhaltung sind 1–2 Auffrischungen pro Jahr sinnvoll.',
      },
      {
        question: 'Wie läuft eine Sitzung ab?',
        answer:
          'Nach Beratung und optionaler Betäubungscreme (Einwirkzeit ca. 30–60 Min.) erfolgt eine Blutentnahme (ca. 40–60 ml). Nach der Aufbereitung wird die PRF‑Matrix mit feinen Injektionen in 1‑cm‑Abständen in die zu behandelnden Areale eingebracht. Die Gesamtdauer inkl. Betäubung liegt je nach Region bei ca. 1,5–2 Stunden (Kopfhaut/Haare ähnlich).',
      },
      {
        question: 'Vor- und Nachsorge – worauf achten?',
        answer:
          'Vorher: möglichst keine blutverdünnenden Medikamente (Rücksprache mit dem Arzt), 2 Tage auf Kaffee/Koffein, Nikotin & Alkohol verzichten, gut hydriert, nicht nüchtern, gesund erscheinen. Nachher: Injektionsstellen wenig berühren, 2–3 Tage milde Pflege, kurzzeitig kein Make‑up nach Needling, 7 Tage keine Massagen/Peelings, Sauna/Sonne/Schwimmbad meiden; am Folgetag Haare mit mildem Shampoo waschbar.',
      },
      {
        question: 'Downtime, Schmerzen & Nebenwirkungen?',
        answer:
          'Durch feine Nadeln und ggf. Betäubungscreme ist die Behandlung gut tolerierbar. Vorübergehende Rötung, Schwellung, Spannungsgefühl oder kleine Hämatome sind möglich und klingen in der Regel rasch ab. Bei Needling‑Kombinationen kann die Regenerationszeit 1–3 Tage betragen.',
      },
      {
        question: 'Wer ist ausgeschlossen?',
        answer:
          'Gegenanzeigen umfassen Schwangerschaft/Stillzeit, relevante Gerinnungsstörungen, akute/chronische Infektionen sowie akute Entzündungen im Behandlungsareal. Im Einzelfall entscheiden wir nach Anamnese.',
      },
      {
        question: 'Was kostet eine PRF‑Behandlung?',
        answer:
          'Ab 300 € je nach Areal und Umfang. Individuelle Abrechnung nach GOÄ; ein transparenter Kostenplan erfolgt im Beratungsgespräch.',
      },
      {
        question: 'Kann PRF mit anderen Methoden kombiniert werden?',
        answer:
          'Ja – häufig sinnvoll: z. B. Microneedling bei Aknenarben/großen Poren oder die Kombination mit Hyaluron/Polynukleotiden für ganzheitliche Ergebnisse. Reihenfolge und Intervalle legen wir individuell fest.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Natürlich besser aussehen – ohne künstlichen Look',
    subtitle:
      'Vereinbaren Sie jetzt Ihren Termin für die PRF‑Eigenbluttherapie in Bremen.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für PRF in Bremen: EL Aesthetics',
    description:
      'Schonende PRF‑Regeneration für Haut & Haare – individuell geplant und sicher durchgeführt.',
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
      <TreatmentsSection {...treatmentsData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten"
        subtitle="Echte Ergebnisse: stärkere Hautqualität, frischer Blick und dichteres Haar – natürlich und verträglich."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
