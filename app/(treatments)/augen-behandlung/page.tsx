import type { Metadata } from 'next';
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
    TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
// Annahme: Du hast diese Datenstruktur analog zu 'haarausfall' erstellt
import { augenbehandlungen } from "@/data/treatments";

export const metadata: Metadata = {
    title: 'Augenringe & Tränenrinne behandeln Bremen | Ärztlich & professionell',
    description:
        'Müder Blick? Behandlung von Augenringen, Krähenfüßen und Tränenrinnen in Bremen. Sichere Unterspritzung Polynukleotiden oder Muskelrelaxantien.',
    openGraph: {
        title: 'Augenbehandlung in Bremen – Frischer Blick ohne OP',
        description:
            'Spezialisierte Behandlung der Augenpartie: Von der Tränenrinnen-Unterspritzung bis zur Hautqualitätsverbesserung mit Skinboostern. Natürlich & Sicher.',
        type: 'website',
        locale: 'de_DE',
        images: ['https://elaesthetics-bremen.de/assets/augen-behandlung/og-image-augen-bremen.webp'],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/augen-behandlung',
    },
};

export default function AugenHubPage() {
    const heroData: HeroSectionProps = {
        title: 'Augenbehandlungen in Bremen',
        subtitle:
            'Ein wacher, frischer Blick lässt das gesamte Gesicht strahlen. Wir behandeln Augenringe, Tränenrinnen und Fältchen mit sanften, nicht-chirurgischen Methoden – individuell abgestimmt auf Ihre Anatomie.',
        imageSrc: '/assets/augen-behandlung/augen-behandlung_hero.png',
        imageAlt: 'Portrait einer Frau mit frischer Augenpartie nach Behandlung bei EL Aesthetics Bremen',
        primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
        secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' }
    };

    const introData: IntroSectionProps = {
        title: 'Müde Augen? Wir finden die passende Lösung.',
        content: [
            'Die Haut um die Augen ist die dünnste des ganzen Körpers. Stress, genetische Veranlagung oder der natürliche Volumenverlust lassen hier schnell Schatten, Augenringe oder kleine Fältchen entstehen.',
            'Nicht jede "Augenring-Behandlung" ist für jeden geeignet. Ein dunkler Schatten durch Pigmentierung benötigt eine andere Therapie als eine tiefe Tränenrinne durch Volumenmangel. Auch Wassereinlagerungen (Malar Bags) müssen ausgeschlossen werden.',
            'Wir analysieren Ihre Anatomie präzise: Ob PRP/PRF für Zellerneuerung, Muskelrelaxantien gegen Krähenfüße oder Polynukleotide zur Regeneration der Hautqualität – wir planen Ihre Behandlung für ein natürliches, erholtes Ergebnis.'
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