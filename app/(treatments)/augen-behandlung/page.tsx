import type { Metadata } from 'next';
import Script from 'next/script';
import {
    CTASection,
    TOCItem,
    TableOfContents,
    ConsultationSection,
    CTASectionProps,
    FAQSection,
    FAQSectionProps,
    HeroSection,
    HeroSectionProps,
    IntroSection,
    IntroSectionProps,
    TreatmentsSection,
    TreatmentsSectionProps,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema } from '@/lib/schema';
// Annahme: Du hast diese Datenstruktur analog zu 'haarausfall' erstellt
import { augenbehandlungen } from "@/data/treatments";

export const metadata: Metadata = {
    title: 'Augenringe & Tränenrinne behandeln Bremen',
    description: 'Augenbehandlungen in Bremen: Augenringe, Krähenfüße & Tränenrinnen ärztlich behandeln mit Polynukleotiden, PRP oder Botulinumtoxin. Jetzt beraten lassen.',
    keywords: ['Augenringe behandeln Bremen', 'Tränenrinne unterspritzen Bremen', 'Krähenfüße Bremen', 'Augenbehandlung Bremen'],
    openGraph: {
        title: 'Augenbehandlungen in Bremen – EL Aesthetics',
        description: 'Augenringe, Krähenfüße & Tränenrinnen ärztlich behandeln in Bremen. Polynukleotide, PRP oder Botulinumtoxin.',
        url: 'https://elaesthetics-bremen.de/augen-behandlung',
        siteName: 'EL Aesthetics Bremen',
        type: 'website',
        locale: 'de_DE',
        images: [
            {
                url: 'https://elaesthetics-bremen.de/assets/augen-behandlung/og-image-augen-bremen.webp',
                width: 1200,
                height: 630,
                alt: 'Augenbehandlungen in Bremen – EL Aesthetics',
            },
        ],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/augen-behandlung',
    },
};

export default function AugenHubPage() {
    const schema = getWebPageSchema({
        name: 'Augenbehandlungen in Bremen',
        description: 'Übersicht zu Augenbehandlungen: Augenringe, Tränenrinnen und Krähenfüße mit Polynukleotiden, PRP oder Botulinumtoxin.',
        url: '/augen-behandlung',
        about: {
            type: 'MedicalTherapy',
            name: 'Augenbehandlung',
            procedureType: 'NonSurgicalProcedure',
        },
    });

    const heroData: HeroSectionProps = {
        title: 'Augenbehandlungen in Bremen',
        subtitle:
            'Augenringe, Tränenrinnen oder Fältchen? Ein wacher, frischer Blick lässt das gesamte Gesicht strahlen',
        imageSrc: '/assets/augen-behandlung/augen-behandlung_hero.webp',
        imageAlt: 'Augenbehandlung gegen Augenringe und Tränenrinne – EL Aesthetics Bremen',
        primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
        secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' }
    };

    const introData: IntroSectionProps = {
        title: 'Müde Augen behandeln: Augenringe, Krähenfüße & Tränenrinne ohne OP',
        content: [
            'Ein wacher, strahlender Blick ist das Zentrum unserer Ausstrahlung. Wenn Sie dunkle Augenringe entfernen, tiefe Tränenrinnen unterspritzen oder Krähenfüße glätten möchten, bieten wir Ihnen sanfte und individuell abgestimmte Behandlungen ohne OP.',
            'Die Ursachen für müde Augen und Schatten unter den Augen sind vielfältig. Oft sind ein altersbedingter Volumenverlust, eine sehr dünne Haut am Unterlid, störende Falten unter den Augen oder auch beginnende Tränensäcke der Grund für einen erschöpften Gesichtsausdruck.',
            'Abhängig von Ihrem Befund setzen wir auf modernste, minimalinvasive Verfahren. Mit innovativen Methoden wie Polynukleotiden, PRP (Vampir-Lifting), PRF, feuchtigkeitsspendenden Skinboostern oder Botulinumtoxin regenerieren wir die Augenpartie gezielt – für ein frisches, natürliches Ergebnis und eine sichtbar verjüngte Hautstruktur.'
        ]
    };

    const treatmentsData: TreatmentsSectionProps = {
        title: 'Unsere ästhetischen Konzepte für die Augenpartie',
        treatments: augenbehandlungen
    };

    const faqData: FAQSectionProps = {
        title: 'Häufige Fragen zur Augenbehandlung',
        faqs: [
            {
                question: 'Was hilft am besten gegen dunkle Augenringe?',
                answer:
                    'Das kommt auf die Ursache an. Schimmert das Gewebe bläulich durch oder ist die Haut dünn, arbeiten wir oft regenerativ mit Polynukleotiden oder Mesotherapie zur Verdickung der Dermis.'
            },
            {
                question: 'Ist die Unterspritzung am Auge gefährlich?',
                answer:
                    'Die Augenregion ist eine anatomisch anspruchsvolle Zone. Wir nutzen spezialisierte Techniken (z. B. stumpfe Kanülen), um das Risiko von Hämatomen und Gefäßverletzungen zu minimieren. Eine fundierte ärztliche Anatomiekenntnis ist hier unerlässlich.'
            },
            {
                question: 'Wie lange hält das Ergebnis an?',
                answer:
                    'Je nach verwendetem Material und Stoffwechsel variiert die Wirkdauer individuell. Muskelrelaxantien gegen Krähenfüße wirken meist 3 bis 5 Monate. Regenerative Biostimulatoren entfalten ihre Wirkung über mehrere Wochen und halten langfristig an.'
            },
            {
                question: 'Sehe ich nach der Behandlung „gemacht“ aus?',
                answer:
                    'Nein. Unser oberstes Ziel ist es, dass Sie „erholt“ aussehen, nicht „anders“. Wir dosieren Filler an den Augen sehr konservativ, um Schwellungen (Puffy Eyes) zu vermeiden. Weniger ist hier oft mehr.'
            },
            {
                question: 'Gibt es Ausfallzeiten?',
                answer:
                    'In der Regel sind Sie sofort gesellschaftsfähig. Leichte Schwellungen oder kleine blaue Flecke (Hämatome) sind möglich, lassen sich aber meist gut überschminken und klingen nach wenigen Tagen ab.'
            }
        ]
    };

    const ctaData: CTASectionProps = {
        title: 'Wünschen Sie sich einen frischeren Blick?',
        subtitle:
            'Lassen Sie uns gemeinsam prüfen, welche Methode für Ihre Augenpartie die sicherste und effektivste ist.',
        primaryCTA: { text: 'Beratungstermin buchen', href: '/kontakt' },
        secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' }
    };

    const tocItems: TOCItem[] = [
        { id: 'intro', label: 'Analyse & Ursachen' },
        { id: 'treatments', label: 'Behandlungen' },
        { id: 'consultation', label: 'Beratung' },
        { id: 'faq', label: 'Fragen & Antworten' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Script
                id="augen-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <HeroSection {...heroData} />
            <TableOfContents items={tocItems} />
            <IntroSection {...introData} />
            <TreatmentsSection {...treatmentsData} />
            <ConsultationSection />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
        </div>
    );
}