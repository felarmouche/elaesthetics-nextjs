import type { Metadata } from 'next';
import { ConsultationSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, TreatmentsSection, TreatmentsSectionProps } from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
    title: 'Haarausfall Behandlung Bremen | Spezialisierte Therapie | EL Aesthetics',
    description: 'Effektive Haarausfall Behandlung in Bremen ✓ Ärztliche Analyse ✓ Regenerative Therapien wie PRF-Eigenblut, Mesotherapie & Polynukleotide ✓ Jetzt beraten lassen!',
    keywords: 'Haarausfall Behandlung Bremen, Hilfe bei Haarausfall Bremen, Haarverlust stoppen Bremen, Therapie gegen Haarausfall Bremen, PRF Haare Bremen, Mesotherapie Haare Bremen, Polynukleotide Bremen, Spezialist für Haarausfall Bremen',
    openGraph: {
        title: 'Haarausfall Behandlung in Bremen - Ärztlich fundierte Therapieansätze',
        description: 'Entdecken Sie bei EL Aesthetics Bremen innovative Wege zur Behandlung von Haarausfall. Wir schaffen die Basis für gesundes Haarwachstum mit PRF, Mesotherapie und mehr.',
        type: 'website',
        locale: 'de_DE',
        images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//haarausfall/og-image-haarausfall-bremen.webp'], // Pfad anpassen
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/haarausfall-behandlung',
    },
};

export default function HaarausfallHubPage() {
    const heroData: HeroSectionProps = {
        title: "Haarausfall Behandlung in Bremen",
        subtitle: "Unsere Ansätze gegen Haarverlust: Nicht nur die Symptome sollen gestoppt werden. Wir schaffen eine Grundlage für gesundes und kräftiges Haarwachstum.",
        imageSrc: "/elaesthetics-bremen-github/assets//haarausfall-behandlung/haarausfall-behandlung_hero.webp", // Pfad anpassen
        imageAlt: "Symbolbild für eine Haarausfall Behandlung in der Praxis von EL Aesthetics Bremen",
        primaryCTA: { text: "Termin anfragen", href: "/terminanfragen" },
        secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
    };

    const introData: IntroSectionProps = {
        title: "Der erste Schritt zu vollem Haar: Eine gesunde Kopfhaut",
        content: [
            "Haarausfall ist für viele Menschen eine große Belastung. Oft werden zahlreiche Produkte und Therapien ausprobiert, die jedoch nicht den gewünschten Erfolg bringen. Der Grund dafür liegt häufig tiefer: in der Kopfhaut selbst.",
            "Verhärtungen (Fibrosen), minderwertige Unterspritzungen oder eine schlechte Mikrozirkulation können die Haarwurzeln blockieren und verhindern, dass Nährstoffe dort ankommen, wo sie gebraucht werden. Konventionelle Behandlungen können hier an ihre Grenzen stoßen.",
            "Genau hier setzt unser spezialisierter Ansatz in Bremen an. Wir analysieren den Zustand Ihrer Kopfhaut und schaffen mit Behandlungen wie Hylase die optimale Voraussetzung, damit regenerative Therapien wie PRF-Eigenblut oder Mesotherapie ihre volle Wirkung entfalten können und das Haarwachstum nachhaltig angeregt wird.",
            "Dieser Ansatz ermöglicht es uns, die Ursachen von Haarausfall gezielt anzugehen und einen individuellen Behandlungsplan zu erstellen, der wirklich zu Ihnen passt."
        ]
    };

    const treatmentsData: TreatmentsSectionProps = {
        title: "Unsere Behandlungen gegen Haarausfall in Bremen",
        treatments: [
            {
                imageUrl: "/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-haare_hero.webp", // Pfad anpassen
                imageAlt: "PRF Eigenbluttherapie gegen Haarausfall bei EL Aesthetics Bremen",
                title: "Eigenbluttherapie (PRF) – Kraft der Regeneration",
                description: "Diese 100% natürliche Methode nutzt die Kraft Ihres eigenen Körpers. Aus Ihrem Blut gewonnenes, plättchenreiches Fibrin (PRF) ist reich an Wachstumsfaktoren, die geschwächte Haarwurzeln reaktivieren, das Haar kräftigen und das Neuwachstum anregen können.",
                treatmentUrl: "/eigenbluttherapie-prf/haare"
            },
            {
                imageUrl: "/elaesthetics-bremen-github/assets//mesotherapie/mesotherapie-haare_hero.webp", // Pfad anpassen
                imageAlt: "Mesotherapie für die Haare als Behandlung gegen Haarverlust in Bremen",
                title: "Mesotherapie – Nährstoff-Boost für Haarwurzeln",
                description: "Durch feine Mikroinjektionen wird ein individuell zusammengestellter Cocktail aus Vitaminen, Aminosäuren und Mineralien direkt an die Haarwurzel gebracht. Diese gezielte Versorgung kann den Haarausfall stoppen und die Basis für gesundes, widerstandsfähiges Haar schaffen.",
                treatmentUrl: "/mesotherapie/haare"
            },
           
            {
                imageUrl: "/elaesthetics-bremen-github/assets//polynukleotide/polynukleotide_hero.webp", // Pfad anpassen
                imageAlt: "Behandlung mit Polynukleotiden zur Stärkung der Haarwurzeln in Bremen",
                title: "Polynukleotide – Innovative Zell-Revitalisierung",
                description: "Als einer der modernsten Ansätze in der regenerativen Medizin, nutzen Polynukleotide die Bausteine der DNA, um die zelleigenen Reparatur- und Regenerationsprozesse anzuregen. Sie verbessern das Kopfhautmilieu und fördern das Haarwachstum auf biophysiologischer Ebene.",
                treatmentUrl: "/polynukleotide"
            },
             {
                imageUrl: '/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf-microneedling_hero.webp',
                imageAlt: 'Microneedling mit PRF für die Kopfhaut',
                title: 'Microneedling + PRF (Kopfhaut)',
                description:
                    'Kombination aus medizinischem Microneedling und PRF-Biostimulation: körpereigenes Fibrin-Konzentrat aktiviert Haarfollikel, fördert Regeneration und kann Haardichte und -qualität verbessern.',
                treatmentUrl: '/eigenbluttherapie-prf/microneedling',
            }
        ]
    };
    const reviews: Review[] = [
        {
            id: 1,
            name: "Jens M.",
            rating: 5,
            text: "Nach vielen erfolglosen Versuchen hat man mir hier endlich erklärt, warum nichts geholfen hat. Die Analyse der Kopfhaut war sehr aufschlussreich. Ich fühle mich in Bremen bestens aufgehoben.",
            date: "2024-09-12"
        },
        {
            id: 2,
            name: "Sabine F.",
            rating: 5,
            text: "Eine sehr ehrliche und kompetente Beratung zum Thema Haarausfall. Frau Dr. El-Armouche hat sich viel Zeit genommen und einen klaren Plan aufgestellt. Man merkt die Expertise.",
            date: "2024-08-28"
        },
        {
            id: 3,
            name: "Thomas R.",
            rating: 5,
            text: "Mir war nicht bewusst, dass der Zustand meiner Kopfhaut das Hauptproblem war. Die vorbereitende Behandlung war der Schlüssel. Absolut empfehlenswerte Praxis für Haarprobleme in Bremen.",
            date: "2024-07-19"
        }
    ];

    const consultationData: ConsultationSectionProps = {
        title: "Ihre individuelle Haarausfall-Analyse in Bremen",
        description: [
            "Jeder Haarausfall ist anders. Deshalb beginnt jede Behandlung bei uns mit einer gründlichen Analyse Ihrer Haare und Kopfhaut. In einem persönlichen Gespräch klären wir Ihre Vorgeschichte und Ihre Ziele.",
            "Basierend auf dieser Diagnose erstellen wir einen maßgeschneiderten Behandlungsplan. Wir erklären Ihnen transparent, ob eine vorbereitende Therapie sinnvoll ist und welche regenerativen Schritte wir empfehlen, um Ihr Haarwachstum bestmöglich zu fördern.",
            "Unser Ziel ist es nicht, möglichst viele Behandlungen durchzuführen, sondern die eine, die für Sie am effektivsten ist. Vereinbaren Sie jetzt Ihren persönlichen Beratungstermin in unserer Praxis in Bremen und gehen Sie den ersten Schritt gegen Ihren Haarausfall."
        ],
        ctaText: "Jetzt Analyse anfordern",
        ctaHref: "/terminanfragen",
        imageSrc: "/elaesthetics-bremen-github/assets//beratung/beratung-haarausfall-bremen.webp", // Pfad anpassen
        imageAlt: "Dr. Ola El-Armouche bei der Haaranalyse und Beratung zu Haarausfall in Bremen",
        backgroundColor: "bg-[#FDF6F0]"
    };

    const faqData: FAQSectionProps = {
        title: "Häufige Fragen zur Haarausfall Behandlung",
        faqs: [
            {
                question: "Welche Behandlung gegen Haarausfall ist die beste für mich?",
                answer: "Die 'beste' Behandlung ist immer individuell. In einer ärztlichen Erstberatung in unserer Praxis in Bremen analysieren wir Ihren spezifischen Fall. Ob die natürliche Regeneration durch PRF, die gezielte Nährstoffzufuhr durch Mesotherapie oder der innovative Ansatz mit Polynukleotiden am sinnvollsten ist, hängt von der Ursache und dem Zustand Ihrer Kopfhaut ab."
            },
            {
                question: "Warum ist eine vorbereitende Hylase-Behandlung manchmal notwendig?",
                answer: "Wenn die Kopfhaut durch z.B. Fibrosen verhärtet oder schlecht durchblutet ist, können selbst die besten Wirkstoffe nicht zur Haarwurzel vordringen. Hylase dient als 'Türöffner', indem es diese Barrieren auflöst und die Kopfhaut wieder aufnahmefähig für regenerative Therapien macht."
            },
            {
                question: "Wie viele Sitzungen sind für eine Haarausfall-Therapie notwendig?",
                answer: "Das ist je nach Behandlung und individuellem Fortschritt unterschiedlich. Regenerative Behandlungen wie PRF oder Mesotherapie werden typischerweise als Kur mit mehreren Sitzungen im Abstand von einigen Wochen durchgeführt. Einen genauen Behandlungsplan erstellen wir gemeinsam mit Ihnen."
            },
            {
                question: "Was kostet eine Haarausfall Behandlung in Ihrer Praxis in Bremen?",
                answer: "Die Kosten sind individuell und hängen vom finalen Behandlungsplan ab. Im Rahmen unserer Erstberatung erstellen wir Ihnen nach einer genauen Analyse einen transparenten und detaillierten Kostenplan für Ihre gesamte Haarausfall-Therapie."
            },
            {
                question: "Ist die Behandlung schmerzhaft und gibt es Risiken?",
                answer: "Die Behandlungen der Kopfhaut werden mit sehr feinen Nadeln durchgeführt und sind in der Regel gut verträglich. Es können leichte Rötungen oder Schwellungen auftreten. Da wir mit ärztlicher Sorgfalt und bei PRF mit körpereigenem Material arbeiten, sind die Risiken sehr gering. Über alles Weitere klären wir Sie im persönlichen Gespräch auf."
            }
        ]
    };

    const ctaData: CTASectionProps = {
        title: "Bereit, die Ursache Ihres Haarausfalls anzugehen?",
        subtitle: "Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch in unserer Praxis in Bremen und erfahren Sie, wie wir Ihnen helfen können.",
        primaryCTA: { text: "Jetzt Beratung anfragen", href: "/terminanfragen" },
        secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
    };

    const locationData: LocationSectionProps = {
        title: "EL Aesthetics – Ihr Spezialist für Haarausfall Behandlung in Bremen",
        description: "In unserer Praxis in Bremen kombinieren wir fundierte medizinische Diagnostik mit den modernsten regenerativen Behandlungsmethoden, um die bestmöglichen Ergebnisse für Ihr Haar zu erzielen.",
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
                title="Das sagen unsere Patienten aus Bremen"
                subtitle="Unsere Patienten schätzen besonders die detaillierte Analyse und den ehrlichen, ursachenorientierten Ansatz bei der Behandlung von Haarausfall. Lesen Sie hier einige Erfahrungen."
            />
            <ConsultationSection {...consultationData} />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
            <LocationSection {...locationData} />
        </div>
    );
}