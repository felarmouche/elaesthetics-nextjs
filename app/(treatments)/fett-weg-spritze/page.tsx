import type { Metadata } from 'next';
import Script from 'next/script';
import {
    AreasSection,
    AreasSectionProps,
    ConsultationSection,
    CTASection,
    CTASectionProps,
    FAQSection,
    FAQSectionProps,
    HeroSection,
    HeroSectionProps,
    IntroSection,
    IntroSectionProps,
    TableOfContents,
    TOCItem,
    ProcessSection,
    ProcessSectionProps,
    QuickInfoSection,
    QuickInfoSectionProps,
    TreatmentCareSection,
    TreatmentCareSectionProps,
    TreatmentsSectionProps,
    TreatmentsSection


} from '@/components/TreatmentPageComponents';
import { getWebPageSchema, getMedicalProcedureSchema } from '@/lib/schema';
import { botoxFalten, filler, microneedling } from "@/data/treatments";
import { PRICES } from "@/lib/constants";

export const metadata: Metadata = {
    title: 'Fett-weg-Spritze Bremen – Doppelkinn',
    description: 'Fett-weg-Spritze in Bremen: Ärztliche Injektionslipolyse für Doppelkinn und lokale Fettdepots. Beratung zu Ablauf, Sitzungen & Kosten. Jetzt Termin vereinbaren.',
    keywords: ['Fett-weg-Spritze Bremen', 'Injektionslipolyse Bremen', 'Doppelkinn entfernen Bremen', 'Fettreduktion ohne OP Bremen'],
    openGraph: {
        title: 'Fett-weg-Spritze in Bremen – EL Aesthetics',
        description: 'Ärztliche Injektionslipolyse für Doppelkinn und lokale Fettdepots in Bremen. Minimal-invasiv.',
        url: 'https://elaesthetics-bremen.de/fett-weg-spritze',
        siteName: 'EL Aesthetics Bremen',
        type: 'website',
        locale: 'de_DE',
        images: [
            {
                url: 'https://elaesthetics-bremen.de/assets/fett-weg-spritze/og-fett-weg-spritze-bremen.webp',
                width: 1200,
                height: 630,
                alt: 'Fett-weg-Spritze in Bremen – EL Aesthetics',
            },
        ],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/fett-weg-spritze',
    },
};

export default function FettWegSpritzePage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                ...getWebPageSchema({
                    name: 'Fett-weg-Spritze (Injektionslipolyse) in Bremen',
                    description: 'Ärztliche Injektionslipolyse zur gezielten Fettreduktion an Doppelkinn, Bauch und anderen Problemzonen.',
                    url: '/fett-weg-spritze',
                }), '@context': undefined
            },
            getMedicalProcedureSchema({
                name: 'Fett-weg-Spritze (Injektionslipolyse)',
                type: 'MedicalProcedure',
                bodyLocation: 'Body',
                description: 'Injektionslipolyse zur nicht-chirurgischen Fettreduktion durch Injektionen, die Fettzellen abbauen.',
                howPerformed: 'Injektion',
            }),
        ],
    };

    const heroData: HeroSectionProps = {
        title: 'Injektionslipolyse / Fettreduktion ohne OP in Bremen',
        subtitle:
            'Fett-weg-Spritze: Gezielte Fettreduktion ohne Operation: Doppelkinn, Hängebäckchen & lokale Fettdepots auflösen lassen',
        imageSrc: '/assets/fett-weg-spritze/fett-weg-spritze_hero.webp',
        imageAlt: 'Fett-weg-Spritze Injektionslipolyse für Doppelkinn – EL Aesthetics Bremen',
        primaryCTA: { text: 'Beratungstermin vereinbaren', href: '/kontakt' },
        secondaryCTA: { text: 'Behandlungsdetails', href: '#quickInfos' },
    };

    const introData: IntroSectionProps = {
        title: 'Was ist eine Fett-weg-Spritze?',
        content: [
            'Bei der Fett-weg-Spritze (Injektionslipolyse) werden die Fettzellen durch gezielte Injektionen zerstört, vom Körper auf natürliche Weise verstoffwechselt und ausgeschieden. Folglich verkleinern sich die Fettdepots oder lösen sich dauerhaft auf. Das macht die Injektionslipolyse zu einer Alternative für alle, die sich keiner Operation unterziehen wollen.',
            'Damit lassen sich Doppelkinn, Hängebäckchen und viele weitere kleinere bis mittelgroße Fettdepots am Körper reduzieren. Die Injektionslipolyse stellt keine Methode zur umfassenden Gewichtsreduktion dar, sondern wird gezielt zur Reduktion kleiner bis mittelgroßer, lokalisierter Fettdepots eingesetzt.',
            'Sie ist am besten für diejenigen geeignet, welche überschüssige kleine bis mittelgroße Fettpolster loswerden möchten, die nicht gut auf Sport und Diäten ansprechen. In der Regel sind 3–5 Behandlungen notwendig, um ein optimales Ergebnis zu erzielen.',
        ],
    };

    const areasData: AreasSectionProps = {
        title: 'Behandlungsbereiche für die Fett-weg-Spritze',
        categories: [
            {
                category: 'Gesicht & Hals',
                items: [
                    {
                        title: 'Doppelkinn',
                        description:
                            'Häufigster Behandlungsbereich – submentale Fettdepots',
                    },
                    {
                        title: 'Hängebäckchen (Jowls)',
                        description: 'Fettansammlungen im unteren Wangenbereich',
                    },
                    {
                        title: 'Malar Bags',
                        description: 'Schwellungen unter den Augen',
                    },
                ],
            },
            {
                category: 'Körper',
                items: [
                    {
                        title: 'Oberarme',
                        description: 'Reduktion von "Winkearmen"',
                    },
                    {
                        title: 'Bauch',
                        description: 'Lokale Fettdepots am Bauchbereich',
                    },
                    {
                        title: 'Rücken',
                        description: 'BH-Speck und seitliche Fettpolster',
                    },
                    {
                        title: 'Hüften (Love Handles)',
                        description: 'Seitliche Fettansammlungen',
                    },
                    {
                        title: 'Ober- und Unterschenkel',
                        description: 'Innenseite, Außenseite und Unterschenkelbereich',
                    },
                    {
                        title: 'Knie',
                        description: 'Fettpolster über und seitlich der Knie',
                    },
                    {
                        title: 'Po',
                        description: 'Konturierung und Straffung',
                    },
                ],
            },
            {
                category: 'Spezielle Indikationen',
                items: [
                    {
                        title: 'Männliche Brust (Gynäkomastie)',
                        description: 'Reduktion von Brustfettgewebe bei Männern',
                    },
                    {
                        title: 'Cellulite-Behandlung',
                        description: 'Verbesserung der Hautstruktur bei Orangenhaut',
                    },
                    {
                        title: 'Lipome',
                        description: 'Gutartige Fettgeschwülste',
                    },
                ],
            },
        ],
    };

    const quickInfoData: QuickInfoSectionProps = {
        title: 'Fett-weg-Spritze auf einen Blick',
        benefits: [
            {
                title: 'Preis',
                description: `ab ${PRICES.fettWegSpritze}€ pro Behandlung`,
                iconUrl: '/assets/icons/EUR.svg',
            },
            {
                title: 'Dauer',
                description: '30-45 Min',
                iconUrl: '/assets/icons/TIME.svg',
            },
            {
                title: 'Wirkeintritt',
                description: 'individuell',
                iconUrl: '/assets/icons/CAL.svg',
            },
            {
                title: 'Betäubung',
                description: 'i.d.R. nicht notwendig',
                iconUrl: '/assets/icons/Spritze.svg',
            },
            {
                title: 'Gesellschaftsfähig',
                description: 'i.d.R. sofort',
                iconUrl: '/assets/icons/gesellschaft.svg',
            },
            {
                title: 'Wiederholungen',
                description: '3-5 Behandlungen, Abstand 2-3 Wochen',
                iconUrl: '/assets/icons/wiederholung.svg',
            },
        ],
        note: '*Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).',
    };

    const processData: ProcessSectionProps = {
        title: 'Ablauf der Fett-weg-Spritze Behandlung in Bremen',
        steps: [
            {
                number: "01",
                title: "Beratung",
                description: "Im Beratungsgespräch klären wir Ihre Wünsche und Ziele."
            },
            {
                number: '02',
                title: 'Vorbereitung & Markierung',
                description:
                    'Die zuvor festgelegten Behandlungsareale werden markiert und desinfiziert. Auf Wunsch kann eine Betäubungscreme aufgetragen werden.',
            },
            {
                number: '03',
                title: 'Injektionen ins Fettgewebe',
                description:
                    'Das Präparat wird 1-1,5 cm tief und im Abstand von 1-1,5 cm direkt in das Fettgewebe injiziert. Der Eingriff dauert in der Regel ca. 30-45 Minuten, abhängig von der Größe des Behandlungsareals.',
            },
            {
                number: '04',
                title: 'Massage & Nachbereitung',
                description:
                    'Anschließend erfolgt eine leichte Massage, um den Wirkstoff optimal zu verteilen.',
            },
        ],
    };

    const treatmentCareData: TreatmentCareSectionProps = {
        title: 'Nachsorge nach der Fett-weg-Spritze',
        beforeTreatment: {
            title: 'Vor der Behandlung',
            instructions: [
                {
                    title: 'Medikamente',
                    description:
                        'Keine blutverdünnenden Medikamente einnehmen – das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.',
                },
                {
                    title: 'Alkohol',
                    description:
                        '24 Stunden vor der Behandlung auf Alkohol verzichten.',
                },
                {
                    title: 'Gesundheitszustand',
                    description:
                        'Gesund und ohne akute Infektionen zur Behandlung erscheinen.',
                },
                {
                    title: 'Realistische Erwartungen',
                    description:
                        'Die Fett-weg-Spritze ist keine Methode zur Gewichtsreduktion, sondern zur gezielten Fettreduktion.',
                },
            ],
        },
        afterTreatment: {
            title: 'Nach der Behandlung',
            instructions: [
                {
                    title: 'Sport & körperliche Arbeit',
                    description:
                        'Eine Woche auf Saunagänge, Solarium, sportliche Betätigung und körperliche Arbeit verzichten.',
                },
                {
                    title: 'Wärme & Kälte vermeiden',
                    description:
                        'Vermeiden Sie in den ersten 48 Stunden direkte Wärme oder starke Kälte im Behandlungsbereich.',
                },
                {
                    title: 'Massage',
                    description:
                        'Massieren Sie die behandelten Stellen leicht 2-3 Mal am Tag, um den Abtransport zu fördern.',
                },
                {
                    title: 'Bewegung nach Abheilung',
                    description:
                        'Nach dem Abklingen der Begleiterscheinungen ist sportliche Aktivität empfohlen.',
                },
                {
                    title: 'Ernährung',
                    description:
                        'Fettarme Ernährung und Alkoholverzicht einhalten für optimale Ergebnisse.',
                },
                {
                    title: 'Hydration',
                    description:
                        'Trinken Sie ausreichend Wasser, um den Abtransport der aufgelösten Fettzellen zu unterstützen.',
                },
                {
                    title: 'Kleidung',
                    description:
                        'Tragen Sie lockere Kleidung, um eine gute Durchblutung der behandelten Areale zu gewährleisten.',
                },
                {
                    title: 'Make-up & Cremes',
                    description:
                        'Verzichten Sie 6 Stunden lang auf Make-up oder Cremes im Behandlungsbereich.',
                },
                {
                    title: 'Medikamente nach Behandlung',
                    description:
                        'Nehmen Sie 7 Tage lang nach der Behandlung keine entzündungshemmenden oder blutverdünnenden Medikamente ein (z.B. Ibuprofen, Diclofenac, Aspirin). Das Absetzen muss vorher mit dem behandelnden Arzt abgestimmt werden.',
                },
            ],
        },
    };






    const treatmentsData: TreatmentsSectionProps = {
        title: 'Weitere Behandlungen',
        treatments: [
            microneedling,
            botoxFalten,
            filler
        ]
    };

    const faqData: FAQSectionProps = {
        title: 'Häufige Fragen zur Fett-weg-Spritze',
        faqs: [
            { question: 'Was ist die Injektionslipolyse?', answer: 'Die Wirkung der Fett-weg-Spritze beruht auf der Injektion der Wirkstoffe Phosphatidylcholin und Desoxycholsäure direkt in das Fettgewebe. Diese Wirkstoffe lösen eine Reaktion aus, bei der die Fettzellen aufgelöst und abgebaut werden. Eine Hautstraffung und Körperkonturierung ist dabei eine positive Begleiterscheinung.' },
            { question: 'Welche Bereiche können behandelt werden?', answer: 'Behandelt werden können: Doppelkinn, Hängebäckchen, Malar Bags (Schwellungen unter den Augen), Oberarme, Bauch, Rücken, Po, Hüften, Ober- und Unterschenkel, Knie, männliche Brust, Cellulite sowie Lipome. Die Fett-weg-Spritze ist am besten für Personen geeignet, die kleine bis mittelgroße Fettpolster loswerden möchten, die nicht gut auf Sport und Diät ansprechen – sie ist jedoch keinesfalls zur Gewichtsreduktion geeignet.' },
            { question: 'Wann sollte keine Fett-weg-Spritze durchgeführt werden?', answer: 'Absolut kontraindiziert ist die Behandlung bei Schwangeren, stillenden Müttern sowie Diabetikern mit Gefäßerkrankungen. Relativ kontraindiziert ist sie bei Autoimmunerkrankungen (z. B. Sklerodermie), schweren Leber- oder Nierenerkrankungen, Allergien gegen Inhaltsstoffe, Blutgerinnungsstörungen, akuten Infektionen sowie schwerer Fettleibigkeit (BMI > 30).' },
            { question: 'Wann tritt die Wirkung ein?', answer: 'Behandlungen erfolgen in der Regel alle 2–8 Wochen, abhängig vom gewählten Präparat. Meistens sind 3–5 Behandlungen notwendig, um ein Ergebnis zu erzielen. Erste Veränderungen können bereits nach 2 Behandlungen sichtbar werden. Die genaue Wirkung variiert je nach individueller Reaktion, Wirkstoffmenge und Anzahl der Sitzungen.' },
            { question: 'Wie lange wirkt die Fett-weg-Spritze?', answer: 'Die behandelten Fettzellen werden dauerhaft aufgelöst und vom Körper abtransportiert. Bei gesunder Ernährung und ausreichender Bewegung sind die Ergebnisse daher langfristig. Eine gesunde Lebensweise ist entscheidend, um die Ergebnisse zu erhalten.' },
            { question: 'Mögliche Nebenwirkungen?', answer: 'Mögliche Nebenwirkungen sind Rötungen und Schwellungen an den Injektionsstellen, Hämatome, Schmerzen oder ein ziehendes Gefühl wie Muskelkater sowie Verhärtungen oder kleine Knoten unter der Haut, die sich meist zurückbilden. Seltene allergische Reaktionen sind möglich. Ausprägung und Dauer der Nebenwirkungen sind individuell verschieden und hängen vom verwendeten Präparat ab.' },
        ],
    };

    const ctaData: CTASectionProps = {
        title: 'Bereit für eine definierte Kontur ohne OP?',
        subtitle:
            'Vereinbaren Sie jetzt Ihre persönliche Beratung und erfahren Sie, wie die Fett-weg-Spritze Ihre Problemzonen dauerhaft reduzieren kann.',
        primaryCTA: { text: 'Jetzt Termin buchen', href: '/kontakt' },
        secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
    };

    const tocItems: TOCItem[] = [
        { id: 'intro', label: 'Über die Behandlung' },
        { id: 'areas', label: 'Behandlungsbereiche' },
        { id: 'quickInfos', label: 'Auf einen Blick' },
        { id: 'process', label: 'Ablauf' },
        { id: 'treatmentsCare', label: 'Vor & Nach der Behandlung' },
        { id: 'consultation', label: 'Beratung' },
        { id: 'treatments', label: 'weitere Behandlungen' },
        { id: 'faq', label: 'Häufige Fragen' },
        { id: 'cta', label: 'Termin vereinbaren' },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="fett-weg-spritze-schema"
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
            <TreatmentsSection {...treatmentsData} />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />

        </div>
    );
}
