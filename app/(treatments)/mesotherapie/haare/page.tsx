import type { Metadata } from 'next';
import Script from 'next/script';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, HubTeaserSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps, TableOfContents, TOCItem, CTASection } from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { PRICES } from '@/lib/constants';
import { polyHaar, prfHaar } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Mesotherapie für die Haare in Bremen',
  description: 'Mesotherapie gegen Haarausfall in Bremen: Aktiviert Haarwurzeln, fördert Verdichtung. Für Männer & Frauen. Jetzt beraten lassen.',
  keywords: ['Mesotherapie Haare Bremen', 'Haarausfall Behandlung Bremen', 'Haarverdichtung Bremen', 'Haarwachstum fördern Bremen', 'Kopfhaut Mesotherapie Bremen'],
  openGraph: {
    title: 'Mesotherapie Haare Bremen | Haarausfall & Verdichtung | EL Aesthetics',
    description: 'Mesotherapie gegen Haarausfall in Bremen: Aktiviert Haarwurzeln, fördert Verdichtung. Für Männer & Frauen.',
    url: 'https://elaesthetics-bremen.de/mesotherapie/haare',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/mesotherapie/og-image-mesotherapie-haare-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Mesotherapie Haare Bremen | Haarausfall & Verdichtung | EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/mesotherapie/haare',
  },
};

export default function MesotherapieHaarePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...getWebPageSchema({
          name: 'Mesotherapie bei Haarausfall in Bremen',
          description: 'Ärztliche Mesotherapie-Behandlung zur Aktivierung der Haarwurzeln und Förderung des Haarwachstums.',
          url: '/mesotherapie/haare',
        }), '@context': undefined
      },
      getMedicalProcedureSchema({
        name: 'Mesotherapie gegen Haarausfall',
        type: 'MedicalProcedure',
        bodyLocation: 'Scalp',
        description: 'Mikro-Injektionen in die Kopfhaut mit Mikronährstoffen zur Aktivierung der Haarwurzeln und Förderung des Haarwachstums.',
        howPerformed: 'Mikro-Injektion in die Kopfhaut',
      }),
    ],
  };

  const heroData: HeroSectionProps = {
    title: "Mesotherapie für die Haare in Bremen",
    subtitle: "Mesotherapie für die Haare - Mikronährstoff-Injektionen gegen Haarausfall und Verbesserung der Haarstruktur ",
    imageSrc: "/assets/mesotherapie/mesotherapie-haare_hero.webp",
    imageAlt: "Mesotherapie für Haare bei Haarausfall – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratungstermin vereinbaren", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungsdetails", href: "#quickInfos" }
  };

  const introData: IntroSectionProps = {
    title: "Mesotherapie bei Haarausfall",
    content: [
      "Die Mesotherapie für die Haare ist ein minimal-invasives Verfahren zur Behandlung von Haarausfall, bei dem verschiedene vitalisierende Stoffe, unter anderem Vitamine und Spurenelemente, in hoch konzentrierter Form in die Kopfhaut injiziert werden.",
      "Der Wirkstoffkomplex versorgt die Haarfollikel intensiv mit essentiellen Nährstoffen, verbessert die Durchblutung der Kopfhaut und aktiviert ruhende Haarwurzeln. Dies kann zu einer deutlichen Reduktion des Haarausfalls und zur Verdichtung des bestehenden Haares führen.",
    ]
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'areas', label: 'Behandlungsareale' },
    { id: 'quickInfos', label: 'Auf einen Blick' },
    { id: 'process', label: 'Ablauf' },
    { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'treatments', label: 'Weitere Behandlungen' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  const areasData: AreasSectionProps = {
    title: "Anwendungsbereiche",
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
    title: "Die Behandlung auf einen Blick",
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
        title: "Beratung",
        description: "Im Beratungsgespräch klären wir Ihre Wünsche und Ziele."
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
    title: "Wichtige Hinweise zur Therapie",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Verzichten Sie ca. 1 Woche vor der Behandlung auf blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen), um das Risiko von Blutergüssen zu minimieren. Das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden."
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


  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Behandlungen gegen Haarausfall in Bremen",
    treatments: [
      prfHaar,
      polyHaar,

    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen (FAQ)",
    faqs: [
      {
        question: "Wann sind die Ergebnisse der Mesotherapie sichtbar?",
        answer: "Für ein sichtbares Ergebnis sollte die Mesotherapie mehrfach in kurzen Abständen wiederholt werden. Schon nach einigen Wochen lässt sich meist ein verbesserter Haarwuchs beobachten. Zwei bis drei Monate nach der Behandlung wächst das Haar gesünder und voller nach.\n\nDie Haut wirkt frischer und besser durchblutet, die Schuppenbildung lässt nach.\n\nAnwendungsbeobachtungen haben gezeigt, dass bei einer Mesotherapie in etwa 80% der Fälle der Haarausfall ab der dritten Behandlung abnimmt. Nach zwei bis drei Monaten lässt sich ein deutlich gesünderes und volleres Haarwachstum beobachten."
      },
      {
        question: "Wie lange hält das Ergebnis und lässt sich die Behandlung wiederholen?",
        answer: "Die genaue Wirkungsdauer ist individuell unterschiedlich und hängt auch von der Ausprägung des Haarausfalls ab. Um das Ergebnis dauerhaft zu erhalten, empfiehlt es sich, nach der Erstbehandlung regelmäßige Auffrischungen durchzuführen."
      },
      {
        question: "Für wen eignet sich eine Mesotherapie?",
        answer: "Da es sich um eine nebenwirkungsarme Anwendung handelt, ist sie grundsätzlich für jeden Patienten geeignet. Allerdings raten wir bei bestimmten Allergien und Erkrankungen wie Krebs oder Blutgerinnungsstörungen sowie während der Schwangerschaft und Stillzeit von dieser Therapieform ab.\n\nDie Mesotherapie kann als unterstützende Maßnahme nach einer Haartransplantation zum Einsatz kommen."
      },
      {
        question: "Mögliche Nebenwirkungen",
        answer: "Die Mesotherapie ist eine besonders schonende, minimalinvasive Behandlungsform gegen Haarausfall.\n\nNach der Mesotherapie kann es zu leichten Schmerzen, Rötungen, Schwellungen oder Blutergüssen im Behandlungsbereich kommen. Diese Symptome sind aber nur vorübergehend und klingen selbstständig wieder ab.\n\nSelten kommt es im Zuge der Mesotherapie zu allergischen Reaktionen. Um solche Komplikationen zu vermeiden, werden Sie im Vorfeld der Behandlung eingehend zu bekannten Allergien befragt."
      },

    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für volleres, kräftigeres Haar?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Haarmesotherapie in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/kontakt" },
    secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="mesotherapie-haare-schema"
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
        title="Zur Übersicht: Mesotherapie"
        subtitle="Alle Mesotherapie-Behandlungen für Haut & Haare im Überblick."
        href="/mesotherapie"
      />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
