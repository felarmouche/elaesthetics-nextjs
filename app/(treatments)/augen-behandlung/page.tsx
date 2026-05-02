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
        name: 'Behandlung der Augenregion in Bremen',
        description: 'Augenringe, Tränenrinne, Augenfalten mit Polynukleotiden, PRP, Biostimulation oder Botulinumtoxin behandeln.',
        url: '/augen-behandlung',
        about: {
            type: 'MedicalTherapy',
            name: 'Augenbehandlung',
            procedureType: 'NonSurgicalProcedure',
        },
    });

    const heroData: HeroSectionProps = {
        title: 'Behandlung der Augenregion in Bremen',
        subtitle:
            'Malar Bags, Augenringe, Tränenrinne, Tänensäcke mit Polynukleotiden, PRP, Biostimulation oder Botulinumtoxin behandeln.',
        imageSrc: '/assets/augen-behandlung/augen-behandlung_hero.webp',
        imageAlt: 'Augenbehandlung gegen Augenringe und Tränenrinne – EL Aesthetics Bremen',
        primaryCTA: { text: 'Termin vereinbaren', href: '/kontakt' },
        secondaryCTA: { text: 'Behandlungen ansehen', href: '#treatments' }
    };

    const introData: IntroSectionProps = {
        title: 'Malar Bags, Augenringe, Tränenrinnen & Tänensäcke behandeln',
        content: [
            'Die Ursachen für müde Augen und Schatten unter den Augen sind vielfältig. Oft sind ein altersbedingter Volumenverlust, eine sehr dünne Haut am Unterlid, Falten unter den Augen oder auch beginnende Tränensäcke der Grund für einen erschöpften Gesichtsausdruck.',
            'Abhängig von Ihrem Befund können verschiede Verfahren zum Einsatz kommen, wie beispielsweise: Polynukleotide, PRP/PRF (Eigenbluttherapie), enzymatische Behandlungen, Botulinumtoxin.',
        ]
    };

    const treatmentsData: TreatmentsSectionProps = {
        title: 'Unsere ästhetischen Konzepte für die Augenpartie',
        treatments: augenbehandlungen
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
            <CTASection {...ctaData} />
        </div>
    );
}