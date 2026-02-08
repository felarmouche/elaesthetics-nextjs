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

// 1. METADATA: Abdeckung vieler Long-Tail Keywords in Title & Description
export const metadata: Metadata = {
    title: 'Lip Flip, Brow Lift & Gummy Smile Bremen | Ästhetische Botulinumtoxin-Behandlungen',
    description: 'Spezielle Botulinumtoxin-Behandlungen: Lip Flip, Erdbeerkinn, Nefertiti-Lift (Hals) & Brow Lift in Bremen. Ärztliche Präzision für harmonische Details.',
    keywords: ['Lip Flip Bremen', 'Gummy Smile Botox', 'Erdbeerkinn entfernen', 'Nefertiti Lift Bremen', 'Brow Lift Botox', 'Bunny Lines'],
    openGraph: {
        title: 'Ästhetische Behandlungen mit Botulinumtoxin | EL Aesthetics',
        description: 'Lip Flip, Brow Lift, Gummy Smile und mehr. Feinste Korrekturen für ein harmonisches Gesicht.',
        type: 'website',
        locale: 'de_DE',
        url: 'https://elaesthetics-bremen.de/botulinumtoxin/aesthetische-behandlungen',
        images: [{
            url: '/assets/botulinumtoxin/og-image-botox-spezial.webp',
            width: 1200,
            height: 630,
            alt: 'Detailaufnahme Ästhetische Behandlung Lippen/Kinn'
        }],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/spezialanwendungen',
    },
};

export default function BotulinumtoxinSpezialPage() {

    // 2. SCHEMA.ORG: Multi-Entity Markup
    // Wir sagen Google: Auf dieser Seite geht es um mehrere spezifische Prozeduren.
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: 'Ästhetische Spezialanwendungen Botulinumtoxin',
        description: 'Detailbehandlungen wie Lip Flip, Gummy Smile und Nefertiti Lift.',
        provider: {
            '@type': 'MedicalOrganization',
            name: 'EL Aesthetics Bremen',
        },
        about: [
            { '@type': 'CosmeticProcedure', name: 'Lip Flip', bodyLocation: 'Lips' },
            { '@type': 'CosmeticProcedure', name: 'Brow Lift', bodyLocation: 'Eyebrow' },
            { '@type': 'CosmeticProcedure', name: 'Gummy Smile Correction', bodyLocation: 'Gingiva' },
            { '@type': 'CosmeticProcedure', name: 'Nefertiti Lift', bodyLocation: 'Neck' }
        ]
    };

    const heroData: HeroSectionProps = {
        title: 'Ästhetische Anwendungen mit Botulinumtoxin',
        subtitle:
            'Lip Flip, Erdbeerkinn, Nefertiti-Lift (Hals), Brow Lift & mehr. Neben der klassischen Faltenbehandlung bieten wir spezialisierte Techniken an, um Lippenkontur, Kinn, Hals oder die Augenpartie harmonisch zu optimieren – ganz ohne Operation.',
        imageSrc: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.png', // Passendes Bild (z.B. Lippen- oder Kinnfokus)
        imageAlt: 'Detailbehandlung im Gesichtsbereich (Lip Flip / Kinn)',
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
        title: 'Harmonisierung statt Veränderung',
        content: [
            'Oft sind es kleine Muskelaktivitäten, die unser Gesicht unruhig wirken lassen oder Proportionen stören. Ein "Pflasterstein-Kinn" oder ein zu starkes Hochziehen der Oberlippe beim Lachen (Gummy Smile) lassen sich mit mikroskopisch genauen Dosierungen von Botulinumtoxin behandeln.',
            'Diese "Advanced Treatments" erfordern höchste anatomische Kenntnis, da hier nicht primär Falten geglättet, sondern Muskelzüge (Vektoren) im Gesicht ausbalanciert werden (Myomodulation).',
            'In Bremen beraten wir Sie ehrlich: Was ist mit Botulinumtoxin möglich ("Lip Flip"), und wo ist ein Filler (Volumen) die bessere Wahl? Ziel ist stets ein natürliches Ergebnis.',
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
                        title: 'Chemical Brow Lift',
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
            { title: 'Dauer', description: 'ca. 15–30 Min.', iconUrl: '/assets/icons/TIME.svg' },
            { title: 'Wirkungseintritt', description: '1–2 Wochen (vollständiger Effekt)', iconUrl: '/assets/icons/TIME.svg' },
            { title: 'Wirkdauer', description: 'ca. 3–6 Monate', iconUrl: '/assets/icons/CAL.svg' },
            { title: 'Betäubung', description: 'Keine / auf Wunsch Salbe', iconUrl: '/assets/icons/Spritze.svg' },
            { title: 'Ausfallzeit', description: 'Sofort gesellschaftsfähig', iconUrl: '/assets/icons/gesellschaft.svg' },
        ],
        note:
            '* **Rechtlicher Hinweis:** Die genannten Preise sind unverbindliche Richtwerte (ab-Preise). Die Abrechnung erfolgt individuell nach der Gebührenordnung für Ärzte (GOÄ). Die genannten Behandlungen sind medizinische Eingriffe, die eine vorherige ärztliche Aufklärung und Eignungsprüfung voraussetzen.',
    };

    const processData: ProcessSectionProps = {
        title: 'Behandlungsablauf',
        steps: [
            {
                number: '01',
                title: 'Analyse & Konzept',
                description:
                    'Persönliches Beratungsgespräch und Erstellung eines individuellen Behandlungskonzepts. Wir prüfen genau, ob die gewünschte Methode (z.B. Lip Flip) für Ihre Anatomie geeignet ist.',
            },
            {
                number: '02',
                title: 'Die Injektion',
                description:
                    'Nach Desinfektion injizieren wir das Botulinumtoxin mit ultra-feinen Nadeln präzise in die Zielmuskeln (z.B. Mentalis am Kinn). Die Behandlung ist kaum spürbar und dauert meist unter 30 Minuten.',
            },
            {
                number: '03',
                title: 'Aftercare',
                description:
                    'Sie erhalten Ihren persönlichen Nachsorge-Pass. Eine Kühlung vor Ort minimiert Schwellungen. Sie können direkt im Anschluss Ihren Alltag fortsetzen.',
            },
        ],
    };

    const treatmentCareData: TreatmentCareSectionProps = {
        title: 'Wichtige Verhaltenstipps',
        beforeTreatment: {
            title: 'Vor der Behandlung',
            instructions: [
                { title: 'Kontraindikationen', description: 'Keine Behandlung in Schwangerschaft/Stillzeit oder bei akuten Entzündungen im Areal.' },
                { title: 'Medikamente', description: '7 Tage vorher (nach Absprache!) keine blutverdünnenden Mittel (Aspirin, Ibuprofen) einnehmen.' },
                { title: 'Lifestyle', description: '2 Tage vor der Behandlung möglichst auf Alkohol verzichten.' },
                { title: 'Operationen', description: 'Abstand von min. 2 Wochen zu OPs oder Impfungen einhalten.' },
            ],
        },
        afterTreatment: {
            title: 'Nach der Behandlung',
            instructions: [
                { title: 'Haltung', description: '3–4 Stunden aufrechte Körperhaltung bewahren, nicht flach hinlegen.' },
                { title: 'Vermeidung', description: '2 Wochen keine Gesichtsmassagen, Sauna, Solarium oder intensive Sonne.' },
                { title: 'Sport', description: 'Für 2 Tage auf Sport und Schwimmbad verzichten.' },
                { title: 'Alkoholkarenz', description: 'Mindestens 2 Tage keinen Alkohol trinken (kann Wirksamkeit mindern & Schwellung fördern).' },
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
                question: 'Wie lange hält ein Brow Lift mit Botox?',
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