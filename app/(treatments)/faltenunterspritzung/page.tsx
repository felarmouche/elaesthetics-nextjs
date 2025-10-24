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
    'Faltenunterspritzung Bremen | Hyaluronfiller, PRF, Polynukleotide & Kollagenstimulation | EL Aesthetics',
  description:
    'Sanfte Faltenunterspritzung in Bremen: Hyaluronfiller für Volumen & Kontur, PRF (Eigenblut) und Polynukleotide für bessere Hautqualität sowie Kollagenstimulation (CaHA/PLLA) für straffere Konturen – natürlich, präzise, individuell.',
  keywords:
    'Faltenunterspritzung Bremen, Hyaluron Bremen, Hyaluronfiller Bremen, PRF Bremen, Eigenbluttherapie Bremen, Polynukleotide Bremen, PDRN Bremen, Kollagenstimulation Bremen, Radiesse Bremen, CaHA Bremen, Sculptra Bremen, Filler Bremen, Nasolabialfalte, Marionettenfalten, Lippen aufspritzen Bremen, Tränenrinne',
  openGraph: {
    title:
      'Faltenunterspritzung in Bremen – Hyaluronfiller, PRF, Polynukleotide & Kollagenstimulation | EL Aesthetics',
    description:
      'Natürlich frischer wirken: Hyaluronfiller für gezielten Volumenaufbau, PRF & Polynukleotide für Hautqualität und Kollagenstimulation (CaHA/PLLA) für definiertere Konturen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/filler/og-image-faltenunterspritzung-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/faltenunterspritzung',
  },
};

export default function FaltenunterspritzungHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Faltenunterspritzung & Filler in Bremen',
    subtitle:
      'Hyaluronfiller für Volumen, PRF & Polynukleotide für Hautqualität, Kollagenstimulation (CaHA/PLLA) für präzisere Konturen – natürlich & professionell.',
    imageSrc: '/assets/faltenunterspritzung/faltenunterspritzung_hero.webp',
    imageAlt:
      'Faltenunterspritzung mit Hyaluronfiller, PRF, Polynukleotiden und Kollagenstimulation bei EL Aesthetics in Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontaktn' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Vier Wege zu sichtbar frischer, natürlich wirkender Haut',
    content: [
      'Unter „Faltenunterspritzung“ bündeln wir aufeinander abgestimmte Verfahren: Hyaluronfiller, PRF (Eigenblut), Polynukleotide sowie die Kollagenstimulation (z. B. CaHA/PLLA).',
      'Hyaluronfiller gleichen Volumenverluste aus, polstern Falten sanft und modellieren Konturen – etwa an Lippen, Wangen, Kinn, Jawline oder Nasolabialfalten. Die quervernetzte Hyaluronsäure bindet Wasser und sorgt sofort für glattere Übergänge.',
      'PRF und Polynukleotide sind regenerative Ansätze zur Verbesserung der Hautqualität: Sie können Feuchtigkeit, Elastizität und Dichte fördern und eignen sich besonders für feine Fältchen sowie empfindliche Zonen (z. B. Unterlider/Tränenrinne).',
      'Die Kollagenstimulation (z. B. mit Calciumhydroxylapatit/PLLA) wirkt strukturbildend: Sie unterstützt die körpereigene Kollagenneubildung für definiertere Konturen – ideal für Wangen, Jawline oder Kinn.',
      'Je nach Zielsetzung lassen sich die Methoden kombinieren – z. B. Hyaluron für Volumen plus PRF/Polynukleotide für Hautqualität und Kollagenstimulation für mehr Straffheit.',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen zur Faltenunterspritzung',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.webp',
        imageAlt:
          'Hyaluronfiller zur Faltenbehandlung und Konturierung (Lippen, Wangen, Kinn, Jawline)',
        title: 'Hyaluronfiller',
        description:
          'Gezielter Volumenaufbau & Glättung: Nasolabial- und Marionettenfalten, Lippen, Wangen, Jawline, Kinn – mit sofort sichtbarem Effekt und natürlicher Haptik.',
        treatmentUrl: '/hyaluron/filler',
      },
      {
        imageUrl: '/assets/eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp',
        imageAlt:
          'PRF-Eigenbluttherapie für Hautqualität, feine Fältchen und sensible Regionen wie die Tränenrinne',
        title: 'Eigenbluttherapie (PRF)',
        description:
          'Autologe Regeneration mit platelet-rich fibrin: Verbesserung von Hautstruktur & -elastizität, Milderung feiner Fältchen, ideal auch für Unterlider.',
        treatmentUrl: '/eigenbluttherapie-prf',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt:
          'Polynukleotide (PDRN/PN) zur Hautregeneration und Verbesserung der Hautqualität',
        title: 'Polynukleotide (PN/PDRN)',
        description:
          'Bioregeneration für mehr Hautqualität: unterstützt Feuchtigkeit, Elastizität & Dichte; geeignet bei feinen Fältchen und müder Haut – besonders in zarten Arealen.',
        treatmentUrl: '/polynukleotide',
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
        imageAlt:
          'Kollagenstimulation mit Calciumhydroxylapatit/PLLA zur Konturdefinition von Wangen, Kinn und Jawline',
        title: 'Kollagenstimulation (z. B. CaHA/PLLA)',
        description:
          'Strukturbildender Ansatz für definiertere Konturen: regt die Kollagenneubildung an – ideal für Wangen, Jawline, Kinn oder Hände.',
        treatmentUrl: '/kollagenstimulation',
      },
    ],
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Verena P.',
      rating: 5,
      text:
        'Sehr natürliche Lippen – genau die Form, die ich mir gewünscht habe. Keine "Duck Lips", sondern dezent und harmonisch.',
      date: '2024-09-05',
    },
    {
      id: 2,
      name: 'Clara G.',
      rating: 5,
      text:
        'PRF unter den Augen hat meine müde wirkenden Schatten deutlich verbessert. Die Haut wirkt dichter und frischer.',
      date: '2024-08-12',
    },
    {
      id: 3,
      name: 'Elena S.',
      rating: 5,
      text:
        'Nasolabialfalten sanft aufgepolstert – niemand hat es gemerkt, ich werde nur öfter auf mein frisches Aussehen angesprochen.',
      date: '2024-07-21',
    },
    {
      id: 4,
      name: 'Mona R.',
      rating: 4,
      text:
        'Kaum Downtime, die Hyaluron-Kontur an der Jawline wirkt sehr natürlich. Tolle Aufklärung und Nachsorge!',
      date: '2024-06-10',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Methode passt zu Ihren Zielen?',
    description: [
      'Als Ärztin für ästhetische Medizin analysiere ich Ihre Gesichtsanatomie und bespreche mit Ihnen, ob Hyaluronfiller, PRF, Polynukleotide, Kollagenstimulation – oder eine Kombination – die beste Option ist.',
      'Wichtig sind natürliche Proportionen, sichere Techniken und hochwertige Materialien – für Ergebnisse, die man sieht, ohne dass man die Behandlung sieht.',
      'Ich erkläre transparent Wirkprinzip, Haltbarkeit und mögliche Nebenwirkungen und erstelle einen maßgeschneiderten Behandlungsplan.',
    ],
    ctaText: 'Jetzt Beratungsgespräch vereinbaren',
    ctaHref: '/kontaktn',
    imageSrc: '/assets/tinified/IMG_7364.webp',
    imageAlt:
      'Ärztin Ola El-Armouche berät Patientin zu Hyaluronfiller, PRF, Polynukleotiden und Kollagenstimulation in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Faltenunterspritzung',
    faqs: [
      {
        question:
          'Was ist der Unterschied zwischen Hyaluronfiller, PRF, Polynukleotiden und der Kollagenstimulation?',
        answer:
          'Hyaluronfiller polstern auf und modellieren – ideal für Volumen, Konturen und statische Falten. PRF und Polynukleotide verbessern die Hautqualität (Feuchtigkeit, Elastizität, Dichte) und sind sehr gut für feine Fältchen und sensible Areale geeignet. Die Kollagenstimulation (z. B. CaHA/PLLA) wirkt strukturbildend, unterstützt die körpereigene Kollagenneubildung und definiert Konturen.',
      },
      {
        question: 'Welche Areale lassen sich behandeln?',
        answer:
          'Typisch sind Lippen, Nasolabial- und Marionettenfalten, Wangen/Jawline/Kinn, Kinn-Fältchen, Ohr-/Schläfenareale sowie Unterlider (insb. PRF/Polynukleotide). Die Auswahl richtet sich nach Anatomie und Zielsetzung.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
          'Hyaluronfiller: je nach Produkt/Region meist 6–12 Monate (Lippen eher 6–9 Monate, Kinn/Jawline/Wangen oft länger). Kollagenstimulation (z. B. CaHA/PLLA): häufig 12–18 Monate. PRF & Polynukleotide werden häufig in Serien (z. B. 2–3 Sitzungen) angewendet; der Effekt baut sich über Wochen auf und hält mehrere Monate.',
      },
      {
        question: 'Wie läuft die Behandlung ab und gibt es Downtime?',
        answer:
          'Nach Beratung und Aufklärung erfolgen – je nach Technik – feine Injektionen oder Kanülenbehandlung. Mögliche Nebenwirkungen: vorübergehende Schwellungen, Rötungen, kleine Hämatome. Meist sind Sie schnell wieder gesellschaftsfähig.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Durch feine Nadeln, optionale Betäubungscreme und ggf. Lidocain im Filler wird der Komfort hoch gehalten. Ein leichtes Druck- oder Spannungsgefühl ist möglich und klingt rasch ab.',
      },
      {
        question: 'Kann man die Verfahren kombinieren?',
        answer:
          'Ja – sehr häufig sinnvoll: z. B. Botulinumtoxin für mimische Falten, Hyaluronfiller für Volumen/Kontur, PRF/Polynukleotide für Hautqualität und Kollagenstimulation für mehr Straffheit. Reihenfolge und Intervalle stimme ich individuell ab.',
      },
      {
        question: 'Welche Risiken und Gegenanzeigen gibt es?',
        answer:
          'Zu den üblichen, harmlosen Reaktionen zählen Schwellung, Rötung, Hämatome; selten Über- oder Unterkorrektur. Gegenanzeigen u. a. Schwangerschaft/Stillzeit, akute Entzündungen, relevante Allergien. PRF ist autolog (aus Eigenblut) und daher in der Regel sehr gut verträglich.',
      },
      {
        question: 'Übernehmen Krankenkassen die Kosten?',
        answer:
          'Ästhetische Faltenunterspritzungen sind Selbstzahlerleistungen. Übernahmen erfolgen in der Regel nicht. Einen transparenten Kostenplan erhalten Sie im Beratungsgespräch.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Natürlich frischer wirken – ohne künstlichen Look',
    subtitle:
      'Vereinbaren Sie jetzt Ihren Termin für Hyaluronfiller, PRF, Polynukleotide oder Kollagenstimulation in Bremen.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontaktn' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für Faltenunterspritzung in Bremen: EL Aesthetics',
    description:
      'Präzise Unterspritzung mit Hyaluronfillern, natürliche PRF- und Polynukleotid-Regeneration sowie Kollagenstimulation – individuell geplant, sicher durchgeführt.',
    location: {
      address: 'Richtepad 14, 28355 Bremen',
      phone: '+49 155 66919635',
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
        subtitle="Echte Ergebnisse: definiertere Konturen, weichere Falten und frischerer Blick – ohne künstlichen Effekt."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />

    </div>
  );
}
