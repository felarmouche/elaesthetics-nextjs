import type { Metadata } from 'next';
import { ConsultationSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Botox Bremen | Professionelle Botox-Behandlung | EL Aesthetics',
  description: 'Botox in Bremen vom spezialisierten Arzt ✓ Falten, Masseter, Hyperhidrose & Migräne ✓ Natürliche Ergebnisse & individuelle Beratung ✓ Jetzt informieren!',
  keywords: 'Botox Bremen, Botulinumtoxin Bremen, Botox Behandlung Bremen, Faltenbehandlung Bremen, Faltenuntersprizung, ästhetische Medizin Bremen, Anti-Aging Bremen',
  openGraph: {
    title: 'Botox Behandlungen in Bremen - Vielseitig & Medizinisch fundiert',
    description: 'Von Faltenreduktion über Gesichtskonturierung bis zur medizinischen Anwendung: Entdecken Sie das volle Spektrum der Botox Behandlungen bei EL Aesthetics Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//botox/og-image-botox-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen/botox',
  },
};

export default function BotulinumtoxinHubPage() {
  const heroData: HeroSectionProps = {
    title: "Botulinumtoxin Behandlung in Bremen",
    subtitle: "Entdecken Sie die vielfältigen Anwendungsmöglichkeiten von Botulinumtoxin (umgangssprachlich auch Botox genannt):\nVon der klassischen Faltenbehandlung bis zur medizinischen Therapie.",
    imageSrc: "/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp",
    imageAlt: "Übersicht verschiedener Botulinumtoxin-Behandlungen bei EL Aesthetics Bremen",
    primaryCTA: { text: "Beratung anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "Behandlungen anzeigen", href: "#treatments" }
  };

  const introData: IntroSectionProps = {
    title: "Botulinumtoxin – Mehr als nur Faltenbehandlung",
    content: [
      "Wenn Sie an Botulinumtoxin denken, haben Sie vermutlich sofort die Faltenbehandlung im Kopf. Doch Botulinumtoxin ist weit mehr als ein Anti-Aging-Mittel – es ist eines der vielseitigsten und am besten erforschten Präparate in der ästhetischen und medizinischen Medizin.",
      " Es gibt jedoch auch andere Indikationen, bei denen Botulinum mit seiner muskelentspannenden Wirkung seine Anwendung findet. Dazu zählen zahlreiche weitere ästhetische Behandlungen sowie medizinische Indikationen (z. B. Bruxismus, Hyperhidrose, Migräne, Rosazea).", 
      "In unserer Praxis in Bremen nutzen wir diese Vielseitigkeit, um Ihnen individuell angepasste Lösungen anzubieten: von der sanften Glättung von Mimikfalten über die Konturierung Ihrer Gesichtsform bis hin zur Behandlung medizinischer Beschwerden wie chronischer Migräne oder übermäßigem Schwitzen.",
      "Das Besondere an Botulinumtoxin: Es wirkt präzise dort, wo es injiziert wird, und ist nach einigen Monaten vollständig abgebaut. Sie können die Behandlung jederzeit wiederholen oder pausieren – ganz nach Ihren Bedürfnissen.", 
      "Lassen Sie uns gemeinsam herausfinden, welche Botulinumtoxin-Anwendung für Sie die richtige ist."
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
  title: "Unsere Botulinumtoxin-Behandlungen in Bremen im Überblick",
  treatments: [
    {
      imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp",
      imageAlt: "Frau mit glatter Stirn nach Botulinumtoxin Faltenbehandlung",
      title: "Faltenbehandlung – Der Klassiker",
      description: "Die bekannteste Anwendung von Botulinumtoxin: Mimikfalten wie Stirnfalten, Zornesfalten und Krähenfüße können gezielt behandelt werden. Ziel ist ein entspanntes, frisches Aussehen – ohne Ihre natürliche Mimik einzuschränken. Geeignet für alle, die erste Zeichen der Hautalterung adressieren möchten.",
      treatmentUrl: "/botox/faltenbehandlung"
    },
    {
      imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-masseter_hero.webp",
      imageAlt: "Gesichtskonturierung durch Botulinumtoxin Masseter-Behandlung",
      title: "Masseter-Behandlung – Jawline & Bruxismus",
      description: "Durch gezielte Behandlung des Kaumuskels (Masseter) kann die Gesichtsform beeinflusst und eine definierte Jawline angestrebt werden. Diese Behandlung wird auch bei Zähneknirschen (Bruxismus) und damit verbundenen Kieferschmerzen eingesetzt. Ein doppelter ästhetischer und medizinischer Ansatz.",
      treatmentUrl: "/botox/masseter"
    },
    {
      imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-microbotox_hero.webp",
      imageAlt: "Hautverjüngung durch flächige Microbotox-Behandlung",
      title: "Microbotox – Für feinere Hautstruktur",
      description: "Bei Microbotox wird Botulinumtoxin oberflächlich und flächig in die Haut injiziert. Ziel ist die Verfeinerung der Poren, Reduktion der Talgproduktion und ein ebenmäßigeres, glatteres Hautbild. Geeignet für alle, die ihre Hautqualität verbessern möchten – ohne die typische 'Botulinumtoxin-Optik'.",
      treatmentUrl: "/botox/microbotox"
    },
    {
      imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-migräne_hero.webp",
      imageAlt: "Medizinische Botulinumtoxin-Behandlung gegen chronische Migräne",
      title: "Migräne-Behandlung – Medizinische Anwendung",
      description: "Leiden Sie unter chronischer Migräne? Botulinumtoxin ist eine wissenschaftlich anerkannte Therapie, die bei chronischer Migräne eingesetzt wird. Die Behandlung erfolgt an spezifischen Kopf- und Nackenpunkten. Sprechen Sie uns auf diese medizinische Anwendung an.",
      treatmentUrl: "/botox/migraene"
    },
    {
      imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-hyperhidrose_hero.webp",
      imageAlt: "Botulinumtoxin-Behandlung gegen übermäßiges Schwitzen",
      title: "Hyperhidrose-Behandlung – Gegen Schwitzen",
      description: "Übermäßiges Schwitzen (Hyperhidrose) an Achseln, Händen oder Füßen kann sehr belastend sein. Botulinumtoxin wird zur Behandlung der Schweißdrüsenaktivität eingesetzt, die Wirkung kann bis zu 6-9 Monate anhalten. Eine Behandlungsoption für mehr Wohlbefinden im Alltag und Beruf.",
      treatmentUrl: "/botox/hyperhidrose"
    }
  ]
};
  const reviews: Review[] = [
    {
      id: 1,
      name: "Anna L.",
      rating: 5,
      text: "Ich war mir anfangs unsicher, welche Botulinumtoxin-Behandlung für mich die richtige ist. Dr. El-Armouche hat sich viel Zeit genommen und mir alle Optionen erklärt. Jetzt bin ich mit meiner Faltenbehandlung super zufrieden!",
      date: "2024-09-20"
    },
    {
      id: 2,
      name: "Markus T.",
      rating: 5,
      text: "Die Masseter-Behandlung hat mein nächtliches Zähneknirschen deutlich verbessert. Als Bonus habe ich jetzt auch eine definiertere Jawline. Kann ich nur empfehlen!",
      date: "2024-08-15"
    },
    {
      id: 3,
      name: "Nina K.",
      rating: 5,
      text: "Als Migränepatientin war ich skeptisch, aber die Botulinumtoxin-Behandlung hat meine Lebensqualität enorm verbessert. Weniger Anfälle, weniger Schmerzen. Danke!",
      date: "2024-07-30"
    },
    {
      id: 4,
      name: "Stefan H.",
      rating: 5,
      text: "Sehr professionelle Beratung! Frau El-Armouche hat genau erklärt, welche Behandlung für meine Bedürfnisse am besten ist. Das Ergebnis ist natürlich und harmonisch.",
      date: "2024-06-12"
    },
    {
      id: 5,
      name: "Laura M.",
      rating: 5,
      text: "Endlich keine übermäßige Schweißbildung mehr! Die Hyperhidrose-Behandlung war ein Gamechanger für mein Selbstbewusstsein. Absolut empfehlenswert!",
      date: "2024-05-18"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Welche Botulinumtoxin-Behandlung ist die richtige für Sie?",
    description: [
      "Die Wahl der passenden Botulinumtoxin-Behandlung hängt von Ihren individuellen Zielen, Ihrer Gesichtsanatomie und Ihren persönlichen Bedürfnissen ab. Als spezialisierte Ärztin für ästhetische Medizin berate ich Sie umfassend und ehrlich.",
      "In unserer Praxis in Bremen analysiere ich zunächst Ihre Ausgangssituation: Welche Bereiche möchten Sie verbessern? Geht es um ästhetische Optimierung oder gibt es auch medizinische Aspekte wie Migräne oder Hyperhidrose? Haben Sie bereits Erfahrungen mit Botulinumtoxin oder ist es Ihre erste Behandlung?",
      "Anhand dieser Informationen erstelle ich einen individuellen Behandlungsplan, der genau auf Sie zugeschnitten ist. Dabei kann es durchaus sein, dass eine Kombination verschiedener Botulinumtoxin-Anwendungen oder eine Ergänzung durch andere Behandlungen wie Hyaluron sinnvoll ist.",
      "Wichtig ist mir: Sie sollen sich rundum wohlfühlen und genau verstehen, was bei der Behandlung passiert. Transparenz, Sicherheit und natürliche Ergebnisse stehen für mich an erster Stelle. Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin in Bremen."
    ],
    ctaText: "Jetzt Beratungsgespräch vereinbaren",
    ctaHref: "/terminanfragen",
    imageSrc: "/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp",
    imageAlt: "Dr. Ola El-Armouche berät Patientin zu verschiedenen Botulinumtoxin-Behandlungsmöglichkeiten",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen zu Botulinumtoxin-Behandlungen",
    faqs: [
      {
        question: "Was genau ist Botulinumtoxin und wie wirkt es?",
        answer: "Botulinumtoxin ist ein natürlich vorkommendes Protein, das die Signalübertragung zwischen Nerven und Muskeln hemmt. In gereinigter Form und präziser Dosierung wird es in der Medizin seit Jahrzehnten eingesetzt. Bei ästhetischen Anwendungen entspannt es überaktive Muskeln und glättet so Falten. Bei medizinischen Anwendungen blockiert es Schweißdrüsen oder entspannt verkrampfte Muskulatur bei Migräne."
      },
      {
        question: "Für welche Botulinumtoxin-Behandlung bin ich geeignet?",
        answer: "Das hängt von Ihren Zielen ab: Möchten Sie primär Falten reduzieren, Ihre Gesichtsform optimieren oder medizinische Beschwerden behandeln? In unserem Beratungsgespräch analysiere ich Ihre Situation und empfehle Ihnen die passende(n) Behandlung(en). Oft ist auch eine Kombination sinnvoll – beispielsweise Faltenbehandlung plus Microbotox für optimale Hautqualität."
      },
      {
        question: "Wie unterscheiden sich die verschiedenen Botulinumtoxin-Anwendungen?",
        answer: "Die Unterschiede liegen in der Zielsetzung, Injektionstechnik und Dosierung: Bei der Faltenbehandlung werden gezielt einzelne Muskeln entspannt. Microbotox wird flächig und oberflächlich injiziert. Die Masseter-Behandlung erfordert höhere Dosen in den Kaumuskel. Bei Migräne und Hyperhidrose folgen wir spezifischen medizinischen Protokollen mit definierten Injektionspunkten."
      },
      {
        question: "Kann ich verschiedene Botulinumtoxin-Behandlungen kombinieren?",
        answer: "Ja, absolut! Viele Patienten kombinieren beispielsweise eine klassische Faltenbehandlung mit Microbotox für optimale Ergebnisse. Oder die Masseter-Behandlung mit einer Faltenbehandlung im oberen Gesicht. Wichtig ist, dass die Gesamtdosis im sicheren Rahmen bleibt – das beurteile ich individuell in Ihrer Beratung."
      },
      {
        question: "Welche Risiken und Nebenwirkungen gibt es bei Botulinumtoxin-Behandlungen?",
        answer: "Botulinumtoxin-Behandlungen sind sehr sicher, wenn sie von qualifizierten Ärzten durchgeführt werden. Häufige, harmlose Nebenwirkungen sind leichte Rötungen, kleine Blutergüsse oder Schwellungen an den Einstichstellen, die nach wenigen Tagen verschwinden. Sehr selten kann es zu vorübergehendem Hängen des Augenlids oder asymmetrischen Ergebnissen kommen – diese bilden sich vollständig zurück. Ernsthafte Komplikationen sind bei korrekter Anwendung extrem selten. Im Beratungsgespräch kläre ich Sie ausführlich über alle Risiken auf."
      },
      {
        question: "Wie lange halten die Ergebnisse der verschiedenen Botulinumtoxin-Behandlungen?",
        answer: "Die Haltbarkeit variiert je nach Behandlung: Faltenbehandlungen halten 3-6 Monate, Masseter-Behandlungen 4-6 Monate, Microbotox etwa 3-4 Monate, Migräne-Behandlungen bis zu 3 Monate, und Hyperhidrose-Behandlungen 6-9 Monate. Die Dauer hängt auch vom individuellen Stoffwechsel ab."
      },
      {
        question: "Wie viel kosten Botulinumtoxin-Behandlungen in Ihrer Praxis in Bremen?",
        answer: "Die Kosten variieren je nach Behandlungsart und benötigter Menge. Eine klassische Faltenbehandlung beginnt bei etwa 200€, Masseter-Behandlungen bei ca. 300€, Microbotox bei ca. 250€, und medizinische Behandlungen (Migräne, Hyperhidrose) können teilweise von der Krankenkasse übernommen werden. Einen genauen, individuellen Kostenplan erstelle ich in Ihrem persönlichen Beratungsgespräch."
      },
      {
        question: "Übernimmt die Krankenkasse die Kosten für Botulinumtoxin-Behandlungen?",
        answer: "Bei rein ästhetischen Behandlungen (Falten, Masseter, Microbotox) übernimmt die Krankenkasse keine Kosten. Bei medizinischen Indikationen wie chronischer Migräne oder schwerer Hyperhidrose kann nach vorheriger Genehmigung eine teilweise oder vollständige Kostenübernahme durch die gesetzliche Krankenkasse möglich sein. Private Krankenversicherungen entscheiden individuell. Ich unterstütze Sie gerne bei der Antragstellung."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für Ihre individuelle Botulinumtoxin-Lösung?",
    subtitle: "Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch und entdecken Sie die Vielfalt von Botulinumtoxin-Behandlungen in Bremen.",
    primaryCTA: { text: "Jetzt Beratung anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "EL Aesthetics Bremen – Ihre Experten für Botulinumtoxin",
    description: "In unserer spezialisierten Praxis in Bremen bieten wir Ihnen das gesamte Spektrum der Botulinumtoxin-Therapie. Von ästhetischen Behandlungen bis zur medizinischen Anwendung – immer auf dem neuesten Stand der Wissenschaft und mit höchsten Qualitätsstandards.",
    location: {
      address: "Richtepad 14, 28355 Bremen",
      phone: "0155 66919635",
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
      <TreatmentsSection {...treatmentsData} />
      <PatientReviews 
        reviews={reviews} 
        title="Erfahrungen unserer Patienten" 
        subtitle="Unsere Patienten schätzen vor allem die vielfältigen Behandlungsmöglichkeiten und die individuelle Beratung in unserer Praxis in Bremen. Ob Faltenbehandlung, Gesichtskonturierung oder medizinische Anwendungen – hier finden Sie authentische Erfahrungsberichte."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}