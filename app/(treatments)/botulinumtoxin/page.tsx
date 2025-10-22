import type { Metadata } from 'next';
import { ConsultationSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Botulinumtoxin Behandlung Bremen | Falten, Schwitzen & Migräne | EL Aesthetics',
  description: 'Botulinumtoxin Behandlung in Bremen ✓ Faltenbehandlung, Hyperhidrose, Masseter & Migräne ✓ Botulinumtoxin A vom Facharzt ✓ Natürliche Ergebnisse ✓ Jetzt beraten lassen!',
  keywords: 'Botulinumtoxin Behandlung, Botulinumtoxin Bremen, Botulinumtoxin A, Faltenbehandlung, Botulinumtoxin gegen Schwitzen, Masseter Behandlung, Botulinumtoxin Migräne, Mesobotox',
  openGraph: {
    title: 'Botulinumtoxin Behandlung Bremen - Ästhetisch & Medizinisch',
    description: 'Was ist Botulinumtoxin? Erfahren Sie alles über Botulinumtoxin Typ A: Von Faltenbehandlung über Schwitzen bis Migräne. Professionelle Behandlung in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin',
  },
};

export default function BotulinumtoxinHubPage() {
  const heroData: HeroSectionProps = {
    title: "Botulinumtoxin Behandlung in Bremen",
    subtitle: "Was bringt eine Botulinumtoxin Behandlung? Entdecken Sie die vielfältigen Anwendungen von Botulinumtoxin A:\nVon der Faltenbehandlung über Schwitzen bis zur Migräne-Therapie.",
    imageSrc: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
    imageAlt: "Botox Behandlungen verschiedener Gesichtspartien bei EL Aesthetics Bremen",
    primaryCTA: { text: "Beratung anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist Botulinumtoxin? Mehr als Faltenbehandlung",
    content: [
      "Botulinumtoxin – oft unter dem Markennamen Botox bekannt – ist ein hochwirksames Protein, das in der ästhetischen und medizinischen Therapie vielseitig eingesetzt wird. Aber was macht Botulinumtoxin eigentlich?",
      "Was ist Botulinumtoxin Typ A? Botulinumtoxin A ist die am häufigsten verwendete Form des Wirkstoffs. Es blockiert gezielt die Signalübertragung zwischen Nerven und Muskeln, wodurch überaktive Muskulatur entspannt wird. Diese muskelentspannende Wirkung macht Botulinumtoxin zum idealen Mittel für zahlreiche Anwendungen.",
      "In unserer Praxis in Bremen nutzen wir Botulinumtoxin für ästhetische Behandlungen wie die Faltenbehandlung (Zornesfalte, Augenfalten, Nasolabialfalte), Gesichtskonturierung und Hautverfeinerung. Gleichzeitig setzen wir Botulinumtoxin A gegen Schwitzen (Hyperhidrose), bei chronischer Migräne und zur Behandlung von Zähneknirschen ein.",
      "Das Besondere: Jede Botulinumtoxin Behandlung ist reversibel und individuell anpassbar. Die Wirkung hält mehrere Monate an und baut sich danach vollständig ab – Sie bleiben flexibel in Ihren Entscheidungen.",
      "Lassen Sie uns gemeinsam herausfinden, welche Botulinumtoxin Behandlung optimal zu Ihren Bedürfnissen passt."
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
  title: "Unsere Botulinumtoxin Behandlungen im Überblick",
  treatments: [
    {
      imageUrl: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
      imageAlt: "Faltenbehandlung mit Botulinumtoxin an Stirn und Augenfalten",
      title: "Faltenbehandlung – Zornesfalte & Augenfalten behandeln",
      description: "Welche Behandlung bei Falten ist die richtige? Die klassische Faltenbehandlung mit Botulinumtoxin glättet Zornesfalte, Augenfalten und andere Mimikfalten sanft und natürlich. Geeignet für alle, die Falten behandeln möchten, ohne ihre natürliche Mimik zu verlieren.",
      treatmentUrl: "/botulinumtoxin/faltenbehandlung"
    },
    {
      imageUrl: "/assets/botulinumtoxin/botox-masseter_hero.webp",
      imageAlt: "Masseter Behandlung mit Botulinumtoxin für definierte Gesichtskonturen",
      title: "Masseter Behandlung – Jawline & Zähneknirschen",
      description: "Was ist eine Masseter Botulinumtoxin Behandlung? Durch gezielte Injektion in den Kaumuskel wird die Gesichtsform harmonisiert und Zähneknirschen reduziert. Die Masseter Behandlung Kosten variieren je nach Dosierung. Lohnt sich Botulinumtoxin im Masseter? Bei uns erfahren Sie alles über Wirkung und Ergebnis.",
      treatmentUrl: "/botulinumtoxin/masseter"
    },
    {
      imageUrl: "/assets/botulinumtoxin/botox-microbotox_hero.webp",
      imageAlt: "Mesobotox und Microbotox Behandlung für verfeinerte Hautstruktur",
      title: "Mesobotox – Hautverfeinerung mit Microbotox",
      description: "Was ist Mesobotox? Bei Skinbotox bzw. Micro Botulinumtoxin wird der Wirkstoff oberflächlich injiziert. Das verfeinert Poren, reduziert Talgproduktion und verbessert die Hautqualität. Mesobotox Erfahrungen zeigen: optimale Ergänzung zur klassischen Faltenbehandlung. Die Mesobotox Kosten beginnen ab 250€.",
      treatmentUrl: "/botulinumtoxin/microbotox"
    },
    {
      imageUrl: "/assets/botulinumtoxin/botox-migräne_hero.webp",
      imageAlt: "Botulinumtoxin Migräne Behandlung an Kopf und Nacken",
      title: "Botulinumtoxin Migräne – Medizinische Behandlung",
      description: "Kann Botulinumtoxin bei Migräne helfen? Ja! Die Migränebehandlung mit Botulinumtoxin ist wissenschaftlich anerkannt. Wir behandeln chronische Migräne mit gezielten Injektionen an Kopf und Nacken. Was kostet eine Botulinumtoxin Behandlung gegen Migräne? Die Krankenkasse übernimmt oft die Kosten.",
      treatmentUrl: "/botulinumtoxin/migraene"
    },
    {
      imageUrl: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
      imageAlt: "Botulinumtoxin gegen Schwitzen an Achseln und Händen",
      title: "Botulinumtoxin gegen Schwitzen – Hyperhidrose Behandlung",
      description: "Botulinumtoxin A gegen Schwitzen ist hochwirksam bei übermäßigem Schwitzen (Hyperhidrose). Wie funktioniert Botulinumtoxin gegen Schwitzen? Es blockiert die Schweißdrüsenaktivität für 6-9 Monate. Die Schwitzen Behandlung eignet sich für Achseln, Hände und Füße. Was kostet eine Botulinumtoxin Behandlung gegen Schwitzen? Ab ca. 400€.",
      treatmentUrl: "/botulinumtoxin/hyperhidrose"
    }
  ]
};

  const reviews: Review[] = [
    {
      id: 1,
      name: "Anna L.",
      rating: 5,
      text: "Ich wusste nicht genau, welche Behandlung bei Falten für mich passt. Dr. El-Armouche hat mir alle Optionen erklärt – von Zornesfalte bis Augenfalten. Meine Faltenbehandlung war schmerzfrei und das Ergebnis ist wunderschön natürlich!",
      date: "2024-09-20"
    },
    {
      id: 2,
      name: "Markus T.",
      rating: 5,
      text: "Die Masseter Behandlung hat mein Zähneknirschen deutlich verbessert. Trotz der Masseter Behandlung Kosten lohnt es sich absolut – auch die Jawline sieht besser aus!",
      date: "2024-08-15"
    },
    {
      id: 3,
      name: "Nina K.",
      rating: 5,
      text: "Kann Botulinumtoxin bei Migräne wirklich helfen? Ja! Meine chronischen Migräne-Attacken sind deutlich seltener geworden. Die Botulinumtoxin Migräne Behandlung war lebensverändernd für mich.",
      date: "2024-07-30"
    },
    {
      id: 4,
      name: "Stefan H.",
      rating: 5,
      text: "Sehr professionelle Beratung zur Botulinumtoxin Behandlung! Es wurde mir genau erklärt, was Botulinumtoxin ist und wie es wirkt. Das Ergebnis ist harmonisch und natürlich.",
      date: "2024-06-12"
    },
    {
      id: 5,
      name: "Laura M.",
      rating: 5,
      text: "Botulinumtoxin gegen Schwitzen war die beste Entscheidung! Endlich keine peinlichen Schweißflecken mehr. Die Behandlung hat mein Selbstbewusstsem enorm gestärkt.",
      date: "2024-05-18"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Welche Botulinumtoxin Behandlung passt zu Ihnen?",
    description: [
      "Was kostet eine Botulinumtoxin Behandlung und welche ist die richtige für Sie? Diese Fragen klären wir gemeinsam in einem ausführlichen Beratungsgespräch. Als spezialisierte Ärztin für ästhetische Medizin analysiere ich Ihre individuellen Bedürfnisse.",
      "Möchten Sie Falten behandeln (Zornesfalte, Augenfalten, Nasolabialfalte)? Interessieren Sie sich für eine Masseter Behandlung zur Gesichtskonturierung? Oder suchen Sie eine medizinische Lösung gegen Schwitzen oder Migräne?",
      "In unserer Praxis in Bremen erstelle ich einen maßgeschneiderten Behandlungsplan mit Botulinumtoxin A. Dabei berücksichtige ich Ihre Anatomie, Ihre Ziele und Ihr Budget. Oft macht auch eine Kombination Sinn: zum Beispiel Zornesfalte Hyaluron oder Botulinumtoxin – oder Faltenbehandlung ergänzt durch Mesobotox.",
      "Transparenz ist mir wichtig: Sie erfahren genau, was Botulinumtoxin ist, was es macht, wie lange die Wirkung anhält und was die Behandlung kostet. So können Sie eine informierte Entscheidung treffen."
    ],
    ctaText: "Jetzt Beratung vereinbaren",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets//tinified/IMG_7364.webp",
    imageAlt: "Dr. Ola El-Armouche berät Patientin zu Botulinumtoxin Behandlungen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen zur Botulinumtoxin Behandlung",
    faqs: [
      {
        question: "Was ist Botulinumtoxin und was macht Botulinumtoxin?",
        answer: "Botulinumtoxin ist ein natürlich vorkommendes Protein, das die Signalübertragung zwischen Nerven und Muskeln hemmt. Was macht Botulinumtoxin konkret? Es entspannt überaktive Muskulatur gezielt dort, wo es injiziert wird. Dadurch glättet es Falten, reduziert Schwitzen und lindert Migräne. Botulinumtoxin Typ A ist die am häufigsten verwendete Form und gilt als sicher und gut erforscht."
      },
      {
        question: "Was ist Botulinumtoxin Typ A genau?",
        answer: "Botulinumtoxin Typ A ist die medizinisch am besten untersuchte Variante des Wirkstoffs. Es wird seit über 30 Jahren in der Medizin eingesetzt – sowohl ästhetisch als auch therapeutisch. Botulinumtoxin A blockiert reversibel die Freisetzung von Acetylcholin an Nervenendigungen, wodurch Muskeln entspannt und Schweißdrüsen gehemmt werden können."
      },
      {
        question: "Welche Behandlung bei Falten ist die beste?",
        answer: "Das hängt von der Faltenart ab. Mimikfalten wie Zornesfalte und Augenfalten lassen sich ideal mit Botulinumtoxin behandeln. Bei tieferen statischen Falten wie der Nasolabialfalte kann eine Kombination sinnvoll sein: Zornesfalte Hyaluron oder Botulinumtoxin? Oft ergänzen sich beide Methoden optimal. In der Beratung analysiere ich, welche Behandlung Falten unter den Augen, an der Stirn oder am Mund am besten adressiert."
      },
      {
        question: "Was kostet eine Botulinumtoxin Behandlung?",
        answer: "Die Kosten variieren je nach Behandlungsbereich: Faltenbehandlung ab ca. 200€, Masseter Behandlung Kosten ab 300€, Mesobotox Kosten ab 250€, Botulinumtoxin gegen Schwitzen ab 400€. Was kostet eine Botulinumtoxin Behandlung gegen Migräne? Bei medizinischer Indikation können die Kosten von der Krankenkasse übernommen werden. Einen individuellen Kostenvoranschlag erhalten Sie im Beratungsgespräch."
      },
      {
        question: "Wie funktioniert Botulinumtoxin gegen Schwitzen?",
        answer: "Botulinumtoxin A gegen Schwitzen blockiert die Nervensignale zu den Schweißdrüsen. Dadurch wird die Schweißproduktion in den behandelten Bereichen (meist Achseln, Hände oder Füße) deutlich reduziert. Kann man übermäßiges Schwitzen mit Botulinumtoxin behandeln? Ja, sehr effektiv! Die Wirkung hält 6-9 Monate an. Auch bei Schwitzen in den Wechseljahren kann Botulinumtoxin helfen."
      },
      {
        question: "Zahlt die Krankenkasse Botulinumtoxin gegen Schwitzen oder Migräne?",
        answer: "Zahlt die Krankenkasse Botulinumtoxin gegen Schwitzen? Bei schwerer Hyperhidrose, die auf andere Therapien nicht anspricht, ist eine Kostenübernahme nach Antrag möglich. Bei chronischer Migräne übernimmt die Krankenkasse die Botulinumtoxin Behandlung häufig nach Genehmigung. Ästhetische Behandlungen (Falten, Masseter, Mesobotox) werden nicht erstattet. Ich unterstütze Sie gerne bei der Antragstellung."
      },
      {
        question: "Was ist eine Masseter Botulinumtoxin Behandlung und lohnt sie sich?",
        answer: "Die Masseter Behandlung injiziert Botulinumtoxin in den großen Kaumuskel. Das harmonisiert die Gesichtsform (schlankere Jawline) und reduziert Zähneknirschen. Lohnt sich Botulinumtoxin im Masseter wirklich? Ja, besonders bei ausgeprägtem Masseter oder Bruxismus. Das Ergebnis zeigt sich nach 2-4 Wochen und hält 4-6 Monate. Die Masseter Behandlung Kosten betragen ca. 300-500€ je nach Dosierung."
      },
      {
        question: "Was ist Mesobotox und wie unterscheidet es sich von klassischem Botulinumtoxin?",
        answer: "Was ist Mesobotox? Bei Mesobotox (auch Microbotox oder Skinbotox genannt) wird Botulinumtoxin sehr oberflächlich und feinverteilt in die Haut injiziert – nicht in die Muskulatur. Was ist der Unterschied zwischen Botulinumtoxin und Mesobotox? Mesobotox verfeinert die Hautstruktur, verkleinert Poren und mattiert die Haut, ohne die Mimik zu beeinflussen. Klassisches Botulinumtoxin entspannt gezielt einzelne Muskeln zur Faltenglättung. Mesobotox Erfahrungen zeigen besonders gute Ergebnisse bei großporiger, öliger Haut."
      },
      {
        question: "Wie lange hält eine Botulinumtoxin Behandlung?",
        answer: "Wie lange hält Botulinumtoxin gegen Schwitzen? Etwa 6-9 Monate. Wie lange hält das Ergebnis einer Masseter Botulinumtoxin Behandlung? Ca. 4-6 Monate. Faltenbehandlungen halten 3-6 Monate, Mesobotox etwa 3-4 Monate, und die Botulinumtoxin Migräne Behandlung sollte alle 3 Monate aufgefrischt werden. Die Wirkdauer hängt vom individuellen Stoffwechsel ab."
      },
      {
        question: "Kann ich verschiedene Botulinumtoxin Behandlungen kombinieren?",
        answer: "Ja, Kombinationen sind oft sinnvoll und werden individuell geplant. Beispiele: Faltenbehandlung plus Mesobotox für optimale Hautqualität, Masseter Behandlung plus Zornesfalte, oder welche Behandlung Nasolabialfalte – eventuell Hyaluron ergänzend zu Botulinumtoxin. Wichtig ist, dass die Gesamtdosis im sicheren Rahmen bleibt. Das beurteile ich in Ihrer persönlichen Beratung."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für Ihre Botulinumtoxin Behandlung in Bremen?",
    subtitle: "Vereinbaren Sie jetzt Ihr unverbindliches Beratungsgespräch und erfahren Sie, welche Botulinumtoxin Behandlung optimal zu Ihnen passt.",
    primaryCTA: { text: "Jetzt beraten lassen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "EL Aesthetics Bremen – Spezialisiert auf Botulinumtoxin Behandlungen",
    description: "In unserer Praxis in Bremen bieten wir Ihnen das komplette Spektrum der Botulinumtoxin Therapie: von ästhetischen Anwendungen (Faltenbehandlung, Masseter, Mesobotox) bis zu medizinischen Indikationen (Hyperhidrose, Migräne). Immer auf aktuellem wissenschaftlichen Stand und mit höchsten Qualitätsansprüchen.",
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
        title="Erfahrungen mit Botulinumtoxin Behandlungen" 
        subtitle="Unsere Patienten berichten über ihre Erfahrungen mit verschiedenen Botulinumtoxin Behandlungen – von Faltenbehandlung über Masseter bis zu medizinischen Anwendungen gegen Schwitzen und Migräne."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />

    </div>
  );
}