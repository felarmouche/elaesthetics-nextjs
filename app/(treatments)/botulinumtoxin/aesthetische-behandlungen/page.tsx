import type { Metadata } from 'next';
import Script from 'next/script';
import {
    CTASection,
    TOCItem,
    TableOfContents,
    AreasSection,
    AreasSectionProps,
    TreatmentCareSectionProps,
    QuickInfoSection,
    QuickInfoSectionProps,
    ConsultationSection,
    CTASectionProps,
    FAQSection,
    FAQSectionProps,
    HeroSection,
    HeroSectionProps,
    IntroSection,
    IntroSectionProps,
    ProcessSection,
    ProcessSectionProps,
    TreatmentCareSection,
    HubTeaserSection
} from '@/components/TreatmentPageComponents';
import {PRICES} from "@/lib/constants";
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';

// 1. METADATA: Abdeckung vieler Long-Tail Keywords in Title & Description
export const metadata: Metadata = {
    title: 'Lip Flip, Brow Lift & Gummy Smile Bremen | EL Aesthetics',
    description: 'Ästhetische Botulinumtoxin-Behandlungen in Bremen: Lip Flip, Nefertiti-Lift, Brow Lift & Gummy Smile. Ärztliche Präzision für harmonische Details. Termin vereinbaren.',
    keywords: ['Lip Flip Bremen', 'Gummy Smile Botox Bremen', 'Nefertiti Lift Bremen', 'Brow Lift Botox Bremen', 'Erdbeerkinn entfernen Bremen', 'Bunny Lines Botox'],
    openGraph: {
        title: 'Ästhetische Botulinumtoxin-Behandlungen in Bremen – EL Aesthetics',
        description: 'Lip Flip, Nefertiti-Lift, Brow Lift & Gummy Smile. Ärztliche Präzision in Bremen.',
        url: 'https://elaesthetics-bremen.de/botulinumtoxin/aesthetische-behandlungen',
        siteName: 'EL Aesthetics Bremen',
        type: 'website',
        locale: 'de_DE',
        images: [{ url: '/assets/botulinumtoxin/og-image-botox-spezial.webp', width: 1200, height: 630, alt: 'Ästhetische Botulinumtoxin-Behandlungen bei EL Aesthetics Bremen' }],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/aesthetische-behandlungen',
    },
};

export default function BotulinumtoxinSpezialPage() {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            { ...getWebPageSchema({
                name: 'Ästhetische Spezialanwendungen Botulinumtoxin',
                description: 'Detailbehandlungen wie Lip Flip, Gummy Smile und Nefertiti Lift.',
                url: '/botulinumtoxin/aesthetische-behandlungen',
            }), '@context': undefined },
            getMedicalProcedureSchema({ name: 'Lip Flip', type: 'CosmeticProcedure', bodyLocation: 'Lips', description: 'Konturierung der Oberlippe durch gezielte Muskelentspannung.' }),
            getMedicalProcedureSchema({ name: 'Brow Lift', type: 'CosmeticProcedure', bodyLocation: 'Eyebrow', description: 'Leichtes Anheben der Augenbrauen für einen offeneren Blick.' }),
            getMedicalProcedureSchema({ name: 'Gummy Smile Correction', type: 'CosmeticProcedure', bodyLocation: 'Gingiva', description: 'Reduzierung übermäßiger Zahnfleischsichtbarkeit beim Lächeln.' }),
            getMedicalProcedureSchema({ name: 'Nefertiti Lift', type: 'CosmeticProcedure', bodyLocation: 'Neck', description: 'Straffung der Hals- und Kinnlinie durch Muskelrelaxation.' }),
        ],
    };

    const heroData: HeroSectionProps = {
        title: 'Ästhetische Anwendungen mit Botulinumtoxin',
        subtitle:
            'Lip Flip, Erdbeerkinn, Nefertiti-Lift (Hals), Brow Lift & mehr. Neben der klassischen Faltenbehandlung bieten wir spezialisierte Techniken an, um Lippenkontur, Kinn, Hals oder die Augenpartie harmonisch zu optimieren – ganz ohne Operation.',
        imageSrc: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.png', // Passendes Bild (z.B. Lippen- oder Kinnfokus)
        imageAlt: 'Ästhetische Botulinumtoxin-Behandlung Lip Flip und Kinn – EL Aesthetics Bremen',
        primaryCTA: { text: 'Beratung vereinbaren', href: '/kontakt' },
        secondaryCTA: { text: 'Zu den Details', href: '#areas' },
    };

    const tocItems: TOCItem[] = [
        { id: 'intro', label: 'Konzept' },
        { id: 'areas', label: 'Lip Flip, Kinn & Co.' },
        { id: 'quickInfos', label: 'Fakten & Preise' },
        { id: 'process', label: 'Ablauf' },
        { id: 'treatmentsCare', label: 'Verhaltenstipps' },
        { id: 'faq', label: 'FAQ & Risiken' },
    ];

    const introData: IntroSectionProps = {
        title: 'Lip Flip, Brow Lift, Nefertiti Lift & Co. – was steckt dahinter?',
        content: [
            'Ästhetische Botulinumtoxin-Behandlungen sind nicht-chirurgische Verfahren zur gezielten Harmonisierung von Gesichtsdetails in Bremen.',
            'Diese erfordern höchste anatomische Kenntnis, da hier nicht primär Falten geglättet, sondern Muskelzüge (Vektoren) im Gesicht ausbalanciert werden (Myomodulation).',
            'In Bremen beraten wir Sie ehrlich: Was ist mit Botulinumtoxin möglich ("Lip Flip"), und wo ist ein Filler (Volumen) die bessere Wahl? Wir legen Wert auf natürliche Ergebnisse, die Ihre Persönlichkeit unterstreichen.',
        ],
    };

    const areasData: AreasSectionProps = {
        title: 'Unsere Spezialanwendungen im Detail',
        categories: [
            {
                category: 'Mund & Lippen',
                items: [
                    {
                        title: 'Lip Flip',
                        description: 'Durch Entspannung des Ringmuskels (Orbicularis oris) rotiert die Oberlippe leicht nach außen. Sie wirkt optisch voller, ohne Volumen (Filler) zu spritzen.'
                    },
                    {
                        title: 'Gummy Smile (Zahnfleischlächeln)',
                        description: 'Korrektur, wenn beim Lachen zu viel Zahnfleisch sichtbar ist. Der Hebemuskel der Oberlippe wird sanft gedämpft.'
                    },
                    {
                        title: 'Hängende Mundwinkel',
                        description: 'Der Muskel "Depressor Anguli Oris", der die Mundwinkel nach unten zieht, wird geschwächt. Das Gesicht wirkt freundlicher.'
                    },
                ],
            },
            {
                category: 'Kinn & Hals',
                items: [
                    {
                        title: 'Erdbeerkinn (Pflasterstein-Kinn)',
                        description: 'Glättung der unruhigen Hautstruktur am Kinn, die durch den Mentalis-Muskel bei Anspannung entsteht.'
                    },
                    {
                        title: 'Nefertiti Lift (Hals)',
                        description: 'Behandlung der Platysma-Stränge am Hals und der Kieferlinie (Jawline). Definiert die Kontur und strafft optisch den Halsbereich.'
                    },
                    {
                        title: 'Face Slimming (Masseter)',
                        description: 'Verschmälerung des unteren Gesichtsdrittels durch Entspannung des großen Kaumuskels. (Auch bei Zähneknirschen).'
                    },
                ],
            },
            {
                category: 'Augen & Nase',
                items: [
                    {
                        title: 'Brow Lift',
                        description: 'Gezielte Anhebung der Augenbrauen (vor allem seitlich) für einen wacheren, offeneren Blick.'
                    },
                    {
                        title: 'Bunny Lines',
                        description: 'Feine Fältchen seitlich am Nasenrücken, die oft beim Lachen entstehen ("Häschen-Falten").'
                    },
                ],
            },
        ],
    };

    const quickInfoData: QuickInfoSectionProps = {
        title: 'Quick Facts',
        benefits: [
            { title: 'Preis', description: `ab ${PRICES.botulinum.aesthetikWeitere},- €*`, iconUrl: '/assets/icons/EUR.svg' },
            { title: 'Wirkungseintritt', description: '1–2 Wochen', iconUrl: '/assets/icons/TIME.svg' },
            { title: 'Wirkdauer', description: 'ca. 3–6 Monate', iconUrl: '/assets/icons/CAL.svg' },
            { title: 'Betäubung', description: 'Keine', iconUrl: '/assets/icons/Spritze.svg' },
            { title: 'Ausfallzeit', description: 'Sofort gesellschaftsfähig', iconUrl: '/assets/icons/gesellschaft.svg' },
        ],
        note:
            '* **Rechtlicher Hinweis:** Die genannten Preise sind unverbindliche Richtwerte (ab-Preise). Die Abrechnung erfolgt individuell nach der Gebührenordnung für Ärzte (GOÄ). Die genannten Behandlungen sind medizinische Eingriffe, die eine vorherige ärztliche Aufklärung und Eignungsprüfung voraussetzen.',
    };

    const processData: ProcessSectionProps = {
    title: "So läuft Ihre Behandlung in Bremen ab",
    steps: [
      {
        number: "01",
        title: "Persönliche Beratung",
        description:
          "Wir erstellen ein individuelles Behandlungskonzept, um Ihre persönlichen Bedürfnisse zu erfüllen.",
      },
      {
        number: "02",
        title: "Die Behandlung",
        description:
          "Das Botulinumtoxin wird mit einer sehr dünnen Nadel in den Zielmuskel injiziert. Die gesamte Behandlung dauert maximal 30 Minuten.",
      },
      {
        number: "03",
        title: "Nachsorge & Effekt",
        description:
          "In der Regel sind Sie sofort wieder alltagstauglich. Die Wirkung entfaltet sich meist über die nächsten 14 Tage.",
      },
    ],
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Vorher & Nachher: Wichtige Hinweise",
    beforeTreatment: {
      title: "Davor",
      instructions: [
        {
          title: "Blutverdünner",
          description:
            "7 Tage vor der Behandlung möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac) einnehmen.",
        },
        {
          title: "Alkoholkonsum",
          description:
            "2 Tage vor der Behandlung kein Alkoholgenuss empfohlen.",
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description:
            "Keine Behandlung während Schwangerschaft oder Stillzeit.",
        },
        {
          title: "Entzündungen",
          description:
            "Bei Hautentzündungen oder Infektionen im Behandlungsbereich Termin verschieben.",
        },
        {
          title: "Operationen",
          description: "Keine Behandlung 2 Wochen vor oder nach einer OP",
        },
      ],
    },
    afterTreatment: {
      title: "Danach",
      instructions: [
        {
          title: "Körperhaltung",
          description: "Für 3–4 Stunden eine aufrechte Haltung bewahren.",
        },
        {
          title: "Sport & Schwimmbad",
          description:
            "Vermeiden Sie für 2 Tage körperliche Anstrengung und Schwimmbadbesuche.",
        },
        {
          title: "Wärme & Sonne",
          description:
            "1–2 Wochen auf Sauna, Solarium und intensive Sonneneinstrahlung verzichten.",
        },
        {
          title: "UV-Schutz",
          description:
            "Achten Sie 4–6 Wochen lang auf konsequenten Sonnenschutz.",
        },
        {
          title: "Gesichtsbehandlungen",
          description:
            "2 Wochen lang keine Gesichtsmassagen oder kosmetischen Behandlungen durchführen.",
        },
        {
          title: "Alkohol",
          description:
            "Mindestens 2 Tage verzichten, um die volle Wirksamkeit nicht zu beeinträchtigen.",
        },
      ],
    },
  };

    const faqData: FAQSectionProps = {
        title: 'Häufige Fragen & Risiken',
        faqs: [
            {
                question: 'Lip Flip oder Lippenunterspritzung – was ist der Unterschied?',
                answer:
                    'Ein Lip Flip nutzt Botulinumtoxin, um den Muskel zu entspannen – die Lippe "rollt" optisch aus, bekommt aber kein extra Volumen. Eine Lippenunterspritzung nutzt Hyaluron-Filler, um echtes Volumen und Kontur physikalisch aufzubauen. Oft ist eine Kombination sinnvoll.',
            },
            {
                question: 'Wie lange hält ein Brow Lift mit Botulinumtoxin?',
                answer:
                    'Da die Muskeln an der Stirn und Augenbraue sehr aktiv sind, hält der Effekt meist ca. 3 bis 4 Monate an. Bei regelmäßiger Anwendung kann sich die Dauer verlängern.',
            },
            {
                question: 'Hilft Face Slimming wirklich?',
                answer:
                    'Ja, wenn die Ursache ein hypertropher (vergrößerter) Masseter-Muskel ist. Durch die Entspannung bildet sich der Muskel etwas zurück (Atrophie), wodurch das untere Gesichtsdrittel schmaler und weicher wirkt.',
            },
            {
                question: 'Was ist das Nefertiti Lift?',
                answer:
                    'Eine Technik, bei der Botulinumtoxin entlang der Kieferlinie und in die Platysma-Bänder des Halses injiziert wird. Dies verhindert das "Herunterziehen" der Gesichtszüge und sorgt für eine definiertere Jawline und einen glatteren Hals.',
            },
            {
                question: 'Welche Nebenwirkungen können auftreten?',
                answer:
                    'Ernsthafte Komplikationen sind sehr selten. Häufig sind leichte Rötungen, kleine blaue Flecken (Hämatome) oder Schwellungen an den Einstichstellen, die nach wenigen Tagen abklingen. Kopfschmerzen können gelegentlich auftreten. Asymmetrien sind selten, können aber meist beim Kontrolltermin korrigiert werden. Es bleiben keine dauerhaften Schäden, da der Wirkstoff abgebaut wird.',
            },
            {
                question: 'Kann ich mit einem Gummy Smile behandelt werden?',
                answer:
                    'Meistens ja. Wir müssen jedoch vorher prüfen, ob die Ursache muskulär ist (zu starker Hebemuskel). In diesen Fällen ist die Behandlung sehr effektiv und minimalinvasiv.',
            },
        ],
    };

    const ctaData: CTASectionProps = {
        title: 'Perfektion im Detail',
        subtitle:
            'Lassen Sie sich beraten, welche dieser Spezialanwendungen Ihr Gesicht harmonisieren kann. Individuell, sicher und ärztlich durchgeführt.',
        primaryCTA: { text: 'Termin buchen', href: '/kontakt' },
        secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
    };

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="special-treatments-schema"
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

            {/* Cross-Link zurück zum Hauptbereich oder anderen relevanten Seiten */}
            <HubTeaserSection
                title="Nicht die richtige Botulinum-Behandlung dabei?"
                subtitle="Hier finden Sie Informationen zur allen weiteren Botulinumtoxin-Behandlung."
                href="/botulinumtoxin"
            />

            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
        </div>
    );
}