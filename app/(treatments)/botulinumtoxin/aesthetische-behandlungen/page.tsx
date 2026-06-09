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
import { PRICES } from "@/lib/constants";
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';

// 1. METADATA: Abdeckung vieler Long-Tail Keywords in Title & Description
export const metadata: Metadata = {
    title: 'Lip Flip & Brow Lift Bremen',
    description: 'Ästhetische Botulinumtoxin-Behandlungen in Bremen: Lip Flip, Nefertiti-Lift, Brow Lift & Gummy Smile. Ärztliche Präzision für harmonische Details. Termin vereinbaren.',
    keywords: ['Lip Flip Bremen', 'Gummy Smile Botox Bremen', 'Nefertiti Lift Bremen', 'Brow Lift Botox Bremen', 'Erdbeerkinn entfernen Bremen', 'Bunny Lines Botox'],
    openGraph: {
        title: 'Ästhetische Botulinumtoxin-Behandlungen in Bremen – EL Aesthetics',
        description: 'Lip Flip, Nefertiti-Lift, Brow Lift & Gummy Smile. Ärztliche Präzision in Bremen.',
        url: 'https://elaesthetics-bremen.de/botulinumtoxin/aesthetische-behandlungen',
        siteName: 'EL Aesthetics Bremen',
        type: 'website',
        locale: 'de_DE',
        images: [{ url: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.webp', width: 1200, height: 630, alt: 'Ästhetische Botulinumtoxin-Behandlungen bei EL Aesthetics Bremen' }],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/aesthetische-behandlungen/',
    },
};

export default function BotulinumtoxinSpezialPage() {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                ...getWebPageSchema({
                    name: 'Ästhetische Spezialanwendungen Botulinumtoxin',
                    description: 'Detailbehandlungen wie Lip Flip, Gummy Smile und Nefertiti Lift.',
                    url: '/botulinumtoxin/aesthetische-behandlungen',
                }), '@context': undefined
            },
            getMedicalProcedureSchema({ name: 'Lip Flip', type: 'CosmeticProcedure', bodyLocation: 'Lips', description: 'Konturierung der Oberlippe durch gezielte Muskelentspannung.' }),
            getMedicalProcedureSchema({ name: 'Brow Lift', type: 'CosmeticProcedure', bodyLocation: 'Eyebrow', description: 'Leichtes Anheben der Augenbrauen für einen offeneren Blick.' }),
            getMedicalProcedureSchema({ name: 'Gummy Smile Correction', type: 'CosmeticProcedure', bodyLocation: 'Gingiva', description: 'Reduzierung übermäßiger Zahnfleischsichtbarkeit beim Lächeln.' }),
            getMedicalProcedureSchema({ name: 'Nefertiti Lift', type: 'CosmeticProcedure', bodyLocation: 'Neck', description: 'Straffung der Hals- und Kinnlinie durch Muskelrelaxation.' }),
        ],
    };

    const heroData: HeroSectionProps = {
        title: 'Ästhetische Behandlungen mit Botulinumtoxin',
        subtitle:
            'Lip Flip, Gummy-Smile, Erdbeerkinn, Nefertiti-Lift (Hals), Brow Lift & mehr.',
        imageSrc: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.webp', // Passendes Bild (z.B. Lippen- oder Kinnfokus)
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
            'Botulinumtoxin hat neben der Faltenreduktion eine Vielzahl weiterer ästhetischer Anwendungen. Es kann verwendet werden, um das Gesicht harmonischer erscheinen zu lassen. Durch die gezielte Aktivitätsreduktion bestimmter Muskulatur können verschiedene Gesichtspartien modelliert werden.',
            'So lassen sich beispielsweise mit einem Lip Flip die Oberlippe sanft betonen, mit einem Brow Lift die Augenpartie öffnen oder ein Gummy Smile korrigieren. Auch Behandlungen wie das Erdbeerkinn, Anheben der Nasenspitze oder Mundwinkel, sanftes Face Slimming zur Verschmälerung der Kieferpartie oder ein Halslifting im Sinne des Nefertiti Neck Lifts sind möglich.',
        ],
    };

    const areasData: AreasSectionProps = {
        title: 'Ästhetische Behandlungen mit Botulinumtoxin',
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
                    {
                        title: 'Anheben der Nasenspitze',
                        description: 'Sanfte Anhebung der Nasenspitze durch gezielte Entspannung des Nasenmuskelgewebs.'
                    },
                    {
                        title: 'Anheben der Mundwinkel',
                        description: 'Sanfte Anhebung der Mundwinkel durch gezielte Entspannung des Muskelgewebs.'
                    },
                    {
                        title: 'Lower face',
                        description: 'Lifting der unteren Gesichtspartie.'
                    },
                    {
                        title: 'Full face',
                        description: 'Ganzheitliches Lifting des Gesichts'

                    }
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
                    "Das Botulinumtoxin wird mit einer dünnen Nadel in den Zielmuskel injiziert.",
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
                        "7 Tage vor der Behandlung möglichst keine blutverdünnenden Medikamente (z. B. Aspirin, Ibuprofen, Diclofenac) einnehmen – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.",
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
                    'Ein Lip Flip nutzt Botulinumtoxin, um den Muskel zu entspannen – die Lippe "rollt" optisch aus, bekommt aber kein extra Volumen. Eine Lippenunterspritzung nutzt Hyaluron-Filler, um echtes Volumen und Kontur aufzubauen.',
            },
            {
                question: 'Wie lange hält ein Brow Lift mit Botulinumtoxin?',
                answer:
                    'Da die Muskeln an der Stirn und Augenbraue sehr aktiv sind, hält der Effekt meist ca. 3 bis 4 Monate an. Bei regelmäßiger Anwendung kann sich die Dauer verlängern.',
            },
            {
                question: 'Hilft Face Slimming wirklich?',
                answer:
                    'Ja, wenn die Ursache ein hypertropher (vergrößerter) Masseter-Muskel ist. Durch die Entspannung bildet sich der Muskel etwas zurück, wodurch das untere Gesichtsdrittel schmaler und weicher wirkt.',
            },
            {
                question: 'Was ist das Nefertiti Lift?',
                answer:
                    'Eine Technik, bei der Botulinumtoxin entlang der Kieferlinie und in die Platysma-Bänder des Halses injiziert wird. Dies verhindert das "Herunterziehen" der Gesichtszüge und sorgt für eine definiertere Jawline und einen glatteren Hals. Dadurch kann ein sanfter Lifting-Effekt erzielt werden.',
            },
            {
                question: 'Welche Nebenwirkungen können auftreten?',
                answer:
                    'Ernsthafte Komplikationen sind sehr selten. Häufig sind leichte Rötungen, kleine blaue Flecken (Hämatome) oder Schwellungen an den Einstichstellen, die nach kurzer Zeit abklingen. Kopfschmerzen können gelegentlich auftreten. Botulinumtoxin wird in den meisten Fällen nach spätesten 6 Monaten vollständig abgebaut.',
            },
            {
                question: 'Kann ich mit einem Gummy Smile behandelt werden?',
                answer:
                    'Meistens ja. Es muss geprüft werden, ob die Ursache muskulär ist (zu starker Hebemuskel).',
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