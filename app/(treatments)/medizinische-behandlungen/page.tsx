// app/(routes)/botulinumtoxin/page.tsx
import type { Metadata } from 'next';
import {
    ConsultationSectionProps,
    ConsultationSection,
    CTASection,
    CTASectionProps,
    FAQSection,
    FAQSectionProps,
    HeroSection,
    HeroSectionProps,
    IntroSection,
    IntroSectionProps,
    LocationSection,
    LocationSectionProps,
    TreatmentsSection,
    TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
    title: 'Botox Behandlungen Bremen | Masseter, Microbotox, Migräne & Hyperhidrose | EL Aesthetics',
    description:
        'Ärztliche Botox-Behandlungen in Bremen: präzise Dosierung, individuelle Behandlungskonzepte und transparente Aufklärung – von Masseter (Bruxismus) über Microbotox bis Migräne- und Hyperhidrose-Therapie.',
    keywords:
        'Botox Bremen, Botox Behandlung Bremen, Botulinumtoxin Bremen, Masseter Botox Bremen, Microbotox Bremen, Baby Botox Bremen, Botox Migräne Bremen, Botox Hyperhidrose Bremen, Bruxismus Behandlung Bremen',
    openGraph: {
        title: 'Botox Behandlungen in Bremen – Präzise, sicher & individuell',
        description:
            'EL Aesthetics Bremen: Ärztliche Botox-Therapien für Masseter/Bruxismus, Microbotox zur Hautverfeinerung, Migräneprophylaxe und Hyperhidrose-Behandlung.',
        type: 'website',
        locale: 'de_DE',
        images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/botulinumtoxin',
    },
};

export default function BotoxBehandlungenPage() {
    const heroData: HeroSectionProps = {
        title: "Medizische Botox Behandlungen in Bremen",
        subtitle:
            "Medizinische Botulinumtoxin-Therapien – Masseter/Bruxismus, Migräne- und Hyperhidrose-Behandlung.",
        imageSrc: "/assets/medizinische-behandlungen/medizinische-behandlunge_hero.webp",
        imageAlt: "Symbolbild für ärztliche Botox-Behandlungen in der Praxis EL Aesthetics Bremen",
        primaryCTA: { text: "Beratung anfragen", href: "/terminanfragen" },
        secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
    };

    const introData: IntroSectionProps = {
        title: "Sicher, präzise, individuell – Botulinumtoxin in ärztlicher Hand",
        content: [
            "Botulinumtoxin ist seit vielen Jahren medizinisch etabliert. In erfahrenen Händen lässt sich die Muskelaktivität präzise modulieren – mit dem Ziel, Beschwerden gezielt zu lindern.",
            "Richtig angewendet kann Botulinumtoxin Symptome bei chronischer Migräne, Hyperhidrose und Bruxismus spürbar reduzieren.",
            "Bei EL Aesthetics Bremen steht die ärztliche Behandlungsplanung im Mittelpunkt: Wir analysieren Ihre Ausgangssituation, definieren realistische Ziele und stimmen die Dosierung individuell ab – um Ihre persönlichen Behandlungsziele bestmöglich zu erreichen.",
            "Transparenz ist uns wichtig: Sie erhalten eine klare Einschätzung zu Wirkungseintritt und Haltbarkeit, möglichen Nebenwirkungen sowie sinnvollen Behandlungsabständen."
        ]

    };

    const treatmentsData: TreatmentsSectionProps = {
        title: "Unsere Botox-Behandlungen in Bremen",
        treatments: [
            {
                imageUrl: "/assets/botulinumtoxin/botulinumtoxin-masseter_hero.webp",
                imageAlt: "Masseter-Botox gegen Zähneknirschen (Bruxismus) in Bremen",
                title: "Masseter: Entspannung bei Bruxismus & Kieferschmerzen",
                description:
                    "Zielgerichtete Injektionen in den Kaumuskel können Knirschen und Pressen reduzieren, Kieferschmerzen lindern und die Kontur optisch verschlanken – mit funktionellem und ästhetischem Benefit.",
                treatmentUrl: "/botulinumtoxin/masseter"
            },

            {
                imageUrl: "/assets/botulinumtoxin/botulinumtoxin-migräne_hero.webp",
                imageAlt: "Botox zur Migräneprophylaxe in Bremen",
                title: "Migräne: Prophylaxe mit Botulinumtoxin",
                description:
                    "Für chronische Migräne kann Botulinumtoxin die Attackenfrequenz senken. Wir besprechen Indikation, Schema und realistische Erwartungen im Rahmen einer ärztlichen Beratung.",
                treatmentUrl: "/botulinumtoxin/migraene"
            },
            {
                imageUrl: "/assets/botulinumtoxin/botulinumtoxin-hyperhidrose_hero.webp",
                imageAlt: "Behandlung von Hyperhidrose (übermäßiges Schwitzen) mit Botox in Bremen",
                title: "Hyperhidrose: Weniger Schwitzen, mehr Freiheit",
                description:
                    "In Achseln, Handflächen oder Fußsohlen drosselt Botulinumtoxin die Schweißproduktion über Monate. Für ein spürbar trockeneres und komfortableres Hautgefühl.",
                treatmentUrl: "/botulinumtoxin/hyperhidrose"
            }
        ]
    };

    const reviews: Review[] = [
        {
            id: 1,
            name: "Laura K.",
            rating: 5,
            text: "Sehr präzise Aufklärung und natürliche Ergebnisse. Meine Masseter-Behandlung hat die Spannung deutlich reduziert.",
            date: "2024-09-10"
        },
        {
            id: 2,
            name: "Nico S.",
            rating: 5,
            text: "Microbotox war die richtige Wahl: feineres Hautbild ohne ‚Maskeneffekt‘. Rundum professionelle Praxis in Bremen.",
            date: "2024-08-22"
        },
        {
            id: 3,
            name: "Miriam T.",
            rating: 5,
            text: "Wegen chronischer Migräne beraten worden – sehr seriös, mit realistischen Erwartungen. Deutlich weniger Attacken.",
            date: "2024-07-18"
        }
    ];

    const consultationData: ConsultationSectionProps = {
        title: "Individuelle Botox-Beratung in Bremen",
        description: [
            "Jede Ausgangssituation ist anders. Wir prüfen Indikation, Kontraindikationen, Dosierung und Areale – immer mit Blick auf Ihre Ziele.",
            "Sie erhalten einen transparenten Behandlungsplan inklusive realistischem Zeitrahmen für den Wirkungseintritt, der Haltbarkeit und möglicher Wiederholungsintervalle.",
            "Sicherheit steht an erster Stelle: Wir besprechen mögliche Nebenwirkungen und zeigen Alternativen auf, falls eine Botox-Therapie nicht die optimale Option ist."
        ],
        ctaText: "Jetzt Beratung anfragen",
        ctaHref: "/terminanfragen",
        imageSrc: "/assets/tinified/IMG_7364.webp",
        imageAlt: "Ärztliche Botox-Beratung in der Praxis EL Aesthetics Bremen",
        backgroundColor: "bg-[#F5FAFF]"
    };

    const faqData: FAQSectionProps = {
        title: "Häufige Fragen zu Botox (FAQ)",
        faqs: [
            {
                question: "Wie schnell wirkt Botox und wie lange hält es?",
                answer:
                    "Erste Effekte nach ca. 2–5 Tagen, volle Wirkung meist nach 10–14 Tagen. Die Haltbarkeit liegt typischerweise bei 3–6 Monaten – abhängig von Areal, Dosierung und individueller Aktivität."
            },
            {
                question: "Wirkt Botox immer natürlich?",
                answer:
                    "Bei passender Indikation, Dosierung und Platzierung ja. Unser Ziel sind entspannte, natürliche Ergebnisse – ohne starre Mimik."
            },
            {
                question: "Welche Nebenwirkungen sind möglich?",
                answer:
                    "Vorübergehende Rötungen, kleine Hämatome oder Druckempfindlichkeit sind möglich. Selten kommt es zu therapiebedürftigen Nebenwirkungen. Wir klären Sie vorab ausführlich auf."
            },
            {
                question: "Was kostet eine Botox-Behandlung?",
                answer:
                    "Die Kosten richten sich nach Areal und Dosierung. Nach der ärztlichen Beratung erhalten Sie einen individuellen, transparenten Kostenplan."
            },
            {
                question: "Für wen ist Botox nicht geeignet?",
                answer:
                    "Bei bestimmten neurologischen Erkrankungen, in Schwangerschaft/Stillzeit oder bei akuten Infektionen im Behandlungsareal ist eine Behandlung kontraindiziert. Wir prüfen das im Gespräch."
            }
        ]
    };

    const ctaData: CTASectionProps = {
        title: "Bereit für eine fundierte, natürliche Botox-Behandlung?",
        subtitle: "Vereinbaren Sie jetzt Ihr Beratungsgespräch bei EL Aesthetics Bremen.",
        primaryCTA: { text: "Jetzt Beratung anfragen", href: "/terminanfragen" },
        secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
    };

    const locationData: LocationSectionProps = {
        title: "EL Aesthetics – Ihre Praxis für Botox in Bremen",
        description:
            "Wir kombinieren ärztliche Sorgfalt mit moderner Injektionstechnik für sichere und natürliche Resultate – funktionell wie ästhetisch.",
        location: {
            address: "Richtepad 14, 28355 Bremen",
            phone: "0155 66919635",
            email: "info@elaesthetics-bremen.de",
            openingHours: ["Termine nach Vereinbarung"]
        }
    };

    // Optionale strukturierte Daten (LocalBusiness/MedicalClinic)
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        name: 'EL Aesthetics Bremen',
        url: 'https://elaesthetics-bremen.de/botulinumtoxin',
        telephone: '+49 155 66919635',
        medicalSpecialty: ['Dermatologic', 'AestheticMedicine'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Richtepad 14',
            addressLocality: 'Bremen',
            postalCode: '28355',
            addressCountry: 'DE'
        },
        areaServed: 'Bremen',
        sameAs: [
            'https://elaesthetics-bremen.de'
        ]
    };

    return (
        <div className="min-h-screen bg-white">
            <HeroSection {...heroData} />
            <IntroSection {...introData} />
            <TreatmentsSection {...treatmentsData} />
            <PatientReviews
                reviews={reviews}
                title="Das sagen unsere Patient:innen"
                subtitle="Transparente Aufklärung, präzise Behandlung, natürliche Ergebnisse – das schätzen unsere Patient:innen an EL Aesthetics Bremen."
            />
            <ConsultationSection {...consultationData} />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
            

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </div>
    );
}
