import type { Metadata } from 'next';
import { AreasSection, ConsultationSectionProps, AreasSectionProps, TreatmentCareSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Botox Masseter Behandlung Bremen | Jawline, Bruxismus & Gesichtskontur | EL Aesthetics',
  description: 'Professionelle Masseter Behandlung mit Botox in Bremen ✓ Definierte Jawline, Hilfe bei Bruxismus & Kieferschmerzen ✓ Natürliche Gesichtskonturierung ✓ Jetzt Beratung buchen!',
  keywords: 'Botox Masseter Bremen, Masseter Behandlung Bremen, Jawline Bremen, Bruxismus Behandlung Bremen, Zähneknirschen Bremen, Kieferschmerzen Bremen, Gesichtskonturierung Bremen, Kaumuskel entspannen Bremen, Face Slimming Bremen',
  openGraph: {
    title: 'Botox Masseter Behandlung in Bremen - Jawline & Bruxismus',
    description: 'Entspannen Sie Ihren Kaumuskel mit Botox: Für eine definierte Jawline und gegen Zähneknirschen. Professionelle Masseter-Behandlung bei EL Aesthetics Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-masseter-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/masseter',
  },
};

export default function BotoxMasseterPage() {
  const heroData: HeroSectionProps = {
    title: 'Masseter Behandlung mit Botox in Bremen',
    subtitle:
      'Leiden Sie unter Zähneknirschen oder wünschen sich eine definierte Jawline?\nMit einer gezielten Masseter-Behandlung können wir beides erreichen.',
    imageSrc: '/assets/botulinumtoxin/botulinumtoxin-masseter_hero.webp',
    imageAlt: 'Gesichtskonturierung durch Botulinumtoxin Masseter-Behandlung in Bremen',
    primaryCTA: { text: 'Termin vereinbaren', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const introData: IntroSectionProps = {
    title: 'Was ist eine Masseter-Behandlung mit Botox?',
    content: [
      'Der Masseter ist unser Kaumuskel, der sich vom Jochbein bis zum Unterkiefer erstreckt. Bei manchen Menschen ist dieser Muskel besonders ausgeprägt – entweder durch genetische Veranlagung oder durch nächtliches Zähneknirschen (Bruxismus). Dies kann zu einer breiten, quadratischen Gesichtsform führen und mit Kieferschmerzen, Kopfschmerzen oder Zahnproblemen einhergehen.',
      'Typische Symptome sind: Schmerzen in den Kiefergelenken, Zahnschmerzen, Verspannungen im Kopf- und Nackenbereich, Migräne und Tinnitus.',
      'Bei der Masseter-Behandlung wird Botulinumtoxin gezielt in den überaktiven Kaumuskel injiziert. Der Muskel entspannt sich, wird im Laufe der Zeit kleiner und die Gesichtskontur verschmälert sich. Gleichzeitig wird das nächtliche Zähneknirschen reduziert und damit verbundene Beschwerden können gelindert werden.',
      'In unserer Praxis in Bremen kombinieren wir ästhetische und medizinische Expertise: Sie erhalten nicht nur eine harmonischere, femininere oder maskulinere (je nach Wunsch) Gesichtsform, sondern können auch von der therapeutischen Wirkung bei Bruxismus profitieren. Die Behandlung ist nahezu schmerzfrei und erfordert keine Ausfallzeit.',
    ],
  };

  const areasData: AreasSectionProps = {
    title: 'Anwendungsbereiche der Masseter-Behandlung',
    categories: [
      {
        category: 'Ästhetische Indikationen',
        items: [
          { title: 'Verschmälerung einer breiten Kieferpartie' },
          { title: 'Definition der Jawline (Kieferkontur)' },
          { title: 'Harmonisierung der Gesichtsform (V-Form statt U-Form)' },
          { title: 'Verfeinerung maskuliner Gesichtszüge' },
        ],
      },
      {
        category: 'Medizinische Indikationen',
        items: [
          { title: 'Bruxismus (nächtliches Zähneknirschen)' },
          { title: 'Kieferverspannungen und -schmerzen' },
          { title: 'Spannungskopfschmerzen durch Kieferpressen' },
          { title: 'Schutz der Zahnsubstanz vor Abrieb' },
          { title: 'TMJ-Syndrom (Kiefergelenksstörungen)' },
        ],
      },
    ],
  };

  const benefitsData: QuickInfoSectionProps = {
    title: 'Die Masseter-Behandlung auf einen Blick',
    benefits: [
      { title: 'Preis', description: `ab ${PRICES.botulinum.masseter}€*`, iconUrl: '/assets//icons/EUR.svg' },
      { title: 'Dauer', description: 'max. 30 Min', iconUrl: '/assets//icons/TIME.svg' },
      { title: 'Wirkeintritt', description: 'nach 10–14 Tagen', iconUrl: '/assets//icons/CAL.svg' },
      { title: 'Sichtbare Wirkung', description: 'nach 4–8 Wochen', iconUrl: '/assets//icons/TIME.svg' },
      { title: 'Haltbarkeit', description: '3–6 Monate', iconUrl: '/assets//icons/CAL.svg' },
      { title: 'Betäubung', description: 'nicht erforderlich', iconUrl: '/assets//icons/Spritze.svg' },
      { title: 'Gesellschaftsfähig', description: 'sofort', iconUrl: '/assets//icons/gesellschaft.svg' },
    ],
    note: '*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt.',
  };

  const processData: ProcessSectionProps = {
    title: 'Ablauf Ihrer Masseter-Behandlung in Bremen',
    steps: [
      {
        number: '01',
        title: 'Ausführliche Analyse und Beratung',
        description:
          'Ich untersuche zunächst Ihren Kaumuskel durch Abtasten und während Sie die Zähne zusammenbeißen. Wir besprechen Ihre Beschwerden (Zähneknirschen, Schmerzen) und ästhetischen Wünsche. Anhand Ihrer Gesichtsstruktur erkläre ich Ihnen, welches Ergebnis realistisch ist und wie sich Ihre Jawline verändern wird.',
      },
      {
        number: '02',
        title: 'Markierung der Injektionspunkte',
        description:
          'Die Behandlungsareale werden gereinigt und desinfiziert. Ich markiere die präzisen Injektionspunkte am Masseter-Muskel. Die Platzierung ist entscheidend für ein harmonisches Ergebnis und eine effektive Muskelentspannung.',
      },
      {
        number: '03',
        title: 'Gezielte Injektion',
        description:
          'Mit feinen Nadeln wird Botulinumtoxin an 3–4 Injektionspunkten pro Seite in den Masseter injiziert. Die Dosierung ist höher als bei einer Faltenbehandlung, da es sich um einen großen, kräftigen Muskel handelt. Die gesamte Behandlung dauert etwa 20–30 Minuten.',
      },
      {
        number: '04',
        title: 'Nachsorge und Verlaufskontrolle',
        description:
          'Nach der Behandlung können Sie direkt Ihren Alltag fortsetzen. Der Wirkeintritt ist nach circa 10–14 Tagen zu erwarten. Sollten Sie nach ca. 14 Tagen keine Linderung der Symptome erfahren, wird eine Nachdosierung erwogen. Die Behandlung sollte in regelmäßigen Abständen von 3–6 Monaten fortgeführt werden.',
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: 'Wichtige Hinweise zur Behandlung',
    beforeTreatment: {
      title: 'Vor der Behandlung',
      instructions: [
        {
          title: 'Blutverdünnende Medikamente',
          description:
            'Verzichten Sie nach ärztlicher Rücksprache ca. 7 Tage vor der Behandlung auf blutverdünnende Medikamente wie Aspirin, Ibuprofen oder Diclofenac, um Blutergüsse zu minimieren.',
        },
        {
          title: 'Operationen & Entzündungen',
          description:
            'Keine Behandlung bei akuten Entzündungen im Behandlungsareal und nicht innerhalb von 2 Wochen vor oder nach einer Operation.',
        },
        {
          title: 'Alkohol',
          description: 'Vermeiden Sie 48 Stunden vor der Behandlung Alkoholkonsum.',
        },
        {
          title: 'Schwangerschaft & Stillzeit',
          description: 'Während der Schwangerschaft und Stillzeit sind Botox-Behandlungen nicht möglich.',
        },
      ],
    },
    afterTreatment: {
      title: 'Nach der Behandlung',
      instructions: [
        {
          title: 'Aufrechte Haltung',
          description: 'Bitte 3–4 Stunden nach der Behandlung aufrecht bleiben und den Kopf nicht längere Zeit nach unten neigen.',
        },
        {
          title: 'Nicht manipulieren',
          description:
            'Massieren oder drücken Sie die behandelten Stellen nicht. Vermeiden Sie Druck auf die Kieferpartie und verzichten Sie 2 Wochen auf Gesichts-/Kiefermassagen.',
        },
        {
          title: 'Sport & Hitze',
          description:
            'Für 48 Stunden keinen intensiven Sport, Schwimmbad und keine Sauna. In den ersten 1–2 Wochen starke Hitzeeinwirkung (Sauna, Solarium) möglichst vermeiden.',
        },
        {
          title: 'Sonne & Pflege',
          description: 'Für 4–6 Wochen konsequenten Sonnenschutz im Gesichtsbereich beachten.',
        },
        {
          title: 'Essen & Kauen',
          description:
            'Sie können normal essen. Meiden Sie in den ersten 24 Stunden sehr harte oder zähe Lebensmittel, die den Kaumuskel stark beanspruchen.',
        },
        {
          title: 'Alkohol',
          description: 'Mindestens 48 Stunden keinen Alkohol (kann die Wirksamkeit mindern).',
        },
        {
          title: 'Zahnbehandlungen',
          description: 'Planen Sie für 2 Wochen nach der Behandlung keine Zahnarzttermine oder kieferorthopädischen Eingriffe.',
        },
      ],
    },
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sophie K.',
      rating: 5,
      text:
        'Ich habe jahrelang unter nächtlichem Zähneknirschen gelitten. Nach der Masseter-Behandlung sind meine Kieferschmerzen deutlich besser geworden und meine Zahnärztin bestätigt, dass der Abrieb zurückgegangen ist. Als Bonus habe ich jetzt eine viel definiertere Jawline!',
      date: '2024-09-10',
    },
    {
      id: 2,
      name: 'Markus T.',
      rating: 5,
      text:
        'Meine breite Kieferpartie hat mich immer gestört. Dr. El-Armouche hat mir genau erklärt, was möglich ist. Nach 6 Wochen war mein Gesicht deutlich schmaler und femininer. Genau das, was ich wollte!',
      date: '2024-08-05',
    },
    {
      id: 3,
      name: 'Lisa M.',
      rating: 4,
      text:
        'Sehr gute Beratung und professionelle Durchführung. Die Behandlung selbst war fast schmerzfrei. Das Ergebnis hat etwas länger gedauert als erwartet (8 Wochen), aber dafür bin ich sehr zufrieden damit.',
      date: '2024-07-20',
    },
    {
      id: 4,
      name: 'Christian B.',
      rating: 5,
      text:
        'Als Mann war ich erst skeptisch, aber die Masseter-Behandlung hat meine morgendlichen Kopfschmerzen vom Zähneknirschen komplett beseitigt. Kann ich jedem mit Bruxismus empfehlen!',
      date: '2024-06-15',
    },
    {
      id: 5,
      name: 'Anna W.',
      rating: 5,
      text:
        'Ich bin begeistert vom Ergebnis! Meine Gesichtsform ist jetzt viel harmonischer und V-förmiger. Die Behandlung war unkompliziert und ich konnte direkt danach arbeiten gehen.',
      date: '2024-05-28',
    },
  ];

  const consultationData: ConsultationSectionProps = {
    title: 'Ihre Expertin für Masseter-Behandlungen in Bremen',
    description: [
      'Sie leiden unter Bruxismus oder wünschen sich eine harmonischere Gesichtskontur?',
      'Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische Medizin und Gründerin von EL Aesthetics. Die Masseter-Behandlung ist eine meiner Schwerpunkte, da sie sowohl ästhetische als auch medizinische Verbesserungen ermöglicht.',
      'Ich analysiere Ihre individuelle Kiefer- und Gesichtsstruktur und erstelle einen maßgeschneiderten Behandlungsplan. Dabei berücksichtige ich sowohl Ihre ästhetischen Ziele als auch mögliche medizinische Aspekte wie Bruxismus oder Kiefergelenksprobleme.',
      'Als zertifizierte Ärztin für Botulinumtoxin-Behandlungen und Mitglied der DGBT (Deutsche Gesellschaft für ästhetische Botulinum- und Fillertherapie) arbeite ich nach neuesten wissenschaftlichen Standards. Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin in Bremen.',
    ],
    ctaText: 'Jetzt Beratungstermin anfragen',
    ctaHref: '/terminanfragen',
    imageSrc: '/assets//tinified/IMG_7364.webp',
    imageAlt: 'Ärztin Ola El-Armouche berät Patientin zur Masseter-Behandlung in Bremen',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Botox Behandlungen in Bremen',
    treatments: [
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Botox Faltenbehandlung für Stirn, Zornesfalte und Krähenfüße',
        title: 'Faltenbehandlung',
        description:
          'Die klassische Anwendung von Botulinumtoxin: Behandlung von Mimikfalten wie Stirnfalten, Zornesfalten und Krähenfüßen für einen entspannten, frischen Gesichtsausdruck.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-microbotox_hero.webp',
        imageAlt: 'Microbotox Behandlung für feinere Hautstruktur',
        title: 'Microbotox',
        description:
          'Flächige Behandlung zur Verfeinerung der Hautstruktur, Reduktion der Talgproduktion und Porenverfeinerung. Für einen ebenmäßigen, glatten Teint ohne die typische Botox-Optik.',
        treatmentUrl: '/botulinumtoxin/microbotox',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-hyperhidrose_hero.webp',
        imageAlt: 'Botox Behandlung gegen übermäßiges Schwitzen',
        title: 'Hyperhidrose-Behandlung',
        description:
          'Effektive Behandlung gegen übermäßiges Schwitzen an Achseln, Händen oder Füßen. Die Wirkung kann bis zu 6–9 Monate anhalten.',
        treatmentUrl: '/botulinumtoxin/hyperhidrose',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botulinumtoxin-migräne_hero.webp',
        imageAlt: 'Botox zur Behandlung chronischer Migräne',
        title: 'Migräne-Behandlung',
        description:
          'Wissenschaftlich anerkannte Therapie bei chronischer Migräne. Gezielte Injektionen an spezifischen Kopf- und Nackenpunkten können die Häufigkeit von Migräneanfällen reduzieren.',
        treatmentUrl: '/botulinumtoxin/migraene',
      },
    ],
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Masseter-Behandlung',
    faqs: [
      {
        question: 'Wie funktioniert die Masseter-Behandlung mit Botox?',
        answer:
          'Botulinumtoxin wird in den Masseter-Muskel (Kaumuskel) injiziert und blockiert dort die Signalübertragung zwischen Nerven und Muskel. Der Muskel entspannt sich und wird durch die reduzierte Aktivität im Laufe der Zeit kleiner. Dies führt zu einer Verschmälerung der Kieferpartie und kann gleichzeitig Bruxismus-Beschwerden lindern.',
      },
      {
        question: 'Für wen ist eine Masseter-Behandlung geeignet?',
        answer:
          'Die Behandlung eignet sich für Personen mit einem ausgeprägten Kaumuskel, die sich eine schmalere, definierte Jawline wünschen. Auch bei medizinischen Beschwerden wie Bruxismus (Zähneknirschen), Kieferverspannungen, Kopfschmerzen oder TMJ-Problemen kann die Behandlung helfen. In einem Beratungsgespräch prüfe ich, ob die Behandlung für Sie geeignet ist.',
      },
      {
        question: 'Wann sehe ich das Ergebnis und wie lange hält es?',
        answer:
          'Die Muskelentspannung spüren Sie bereits nach wenigen Tagen. Die sichtbare Verschmälerung der Gesichtsform zeigt sich nach etwa 4–8 Wochen, wenn der Muskel durch die reduzierte Aktivität an Volumen verliert. Die Wirkung hält durchschnittlich 3–6 Monate. Bei regelmäßigen Wiederholungen kann der Effekt länger anhalten.',
      },
      {
        question: 'Ist die Behandlung schmerzhaft?',
        answer:
          'Die meisten Patientinnen und Patienten empfinden die Behandlung als gut erträglich. Die Injektionen erfolgen mit sehr feinen Nadeln. Da der Masseter ein dicker Muskel ist, kann ein leichtes Druckgefühl entstehen, aber keine starken Schmerzen. Auf Wunsch kann eine Betäubungscreme aufgetragen werden.',
      },
      {
        question: 'Kann ich nach der Behandlung noch normal kauen und essen?',
        answer:
          'Ja, absolut! Sie können normal essen und trinken. Der Kaumuskel wird entspannt, nicht gelähmt. Sie sollten lediglich in den ersten 24 Stunden sehr harte oder zähe Lebensmittel vermeiden. Ihre Kaufunktion bleibt vollständig erhalten.',
      },
      {
        question: 'Hilft die Behandlung wirklich gegen Zähneknirschen?',
        answer:
          'Viele Patientinnen und Patienten berichten von einer deutlichen Reduktion des nächtlichen Zähneknirschens und der damit verbundenen Beschwerden wie Kieferschmerzen, Kopfschmerzen und Zahnabrieb. Der entspannte Muskel kann nachts nicht mehr so stark zusammengepresst werden.',
      },
      {
        question: 'Welche Nebenwirkungen und Risiken gibt es?',
        answer:
          'Die Masseter-Behandlung gilt als sehr sicher. Häufige, harmlose Nebenwirkungen sind leichte Schwellungen, Rötungen oder kleine Blutergüsse an den Einstichstellen, die nach wenigen Tagen verschwinden. Sehr selten kann es zu vorübergehenden Schwierigkeiten beim Kauen sehr harter Lebensmittel oder einer leichten Asymmetrie kommen, die sich vollständig zurückbildet. Im Beratungsgespräch kläre ich Sie ausführlich über alle Risiken auf.',
      },
      {
        question: 'Kann die Botulinumtoxin-Wirkung ausbleiben?',
        answer:
          'In seltenen Fällen sprechen Personen aufgrund neutralisierender Antikörper oder eines schnellen Abbaus des Wirkstoffs weniger an. Echte Resistenzen sind selten (klinische Studien zeigen ca. 1,5 % mit neutralisierenden Antikörpern).',
      },
      {
        question: 'Wann kommt eine Botulinumtoxin-Behandlung nicht in Frage?',
        answer:
          'Gegenanzeigen sind u. a. neuromuskuläre Erkrankungen (z. B. Myasthenia gravis, Lambert-Eaton-Syndrom), relevante Schluckstörungen oder chronische Atemnot, Allergien gegen Inhaltsstoffe sowie Schwangerschaft und Stillzeit. Ob eine Behandlung möglich ist, klären wir im persönlichen Gespräch.',
      },
      {
        question: 'Was kostet eine Masseter-Behandlung in Bremen?',
        answer:
          `Die Kosten beginnen in der Regel bei etwa ${PRICES.botulinum.masseter} € und richten sich nach der benötigten Menge an Botulinumtoxin. Da der Masseter ein großer Muskel ist, wird meist eine höhere Dosis benötigt als bei einer Faltenbehandlung. Im persönlichen Beratungsgespräch in unserer Bremer Praxis erstelle ich Ihnen einen transparenten Kostenplan.`,
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für eine definierte Jawline und weniger Kieferschmerzen?',
    subtitle:
      'Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Masseter-Behandlung in Bremen.',
    primaryCTA: { text: 'Jetzt Termin anfragen', href: '/terminanfragen' },
    secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
  };

  const locationData: LocationSectionProps = {
    title: 'Ihre Praxis für Masseter-Behandlungen in Bremen: EL Aesthetics',
    description:
      'In unserer modernen Praxis in Bremen bieten wir Ihnen professionelle Masseter-Behandlungen mit Botulinumtoxin. Ob ästhetische Gesichtskonturierung oder therapeutische Behandlung bei Bruxismus – wir beraten Sie individuell und umfassend.',
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
      <QuickInfoSection {...benefitsData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten"
        subtitle="Unsere Patienten schätzen vor allem die doppelte Wirkung der Masseter-Behandlung: eine harmonischere Gesichtsform und gleichzeitig Linderung bei Bruxismus und Kieferschmerzen."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}
