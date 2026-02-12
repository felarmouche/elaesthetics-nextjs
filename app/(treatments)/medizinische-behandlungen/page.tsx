// app/(routes)/botulinumtoxin/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import {
    ConsultationSectionProps,
    ConsultationSection,
    TableOfContents,
    TOCItem,
    CTASection,
    CTASectionProps,
    FAQSection,
    FAQSectionProps,
    HeroSection,
    HeroSectionProps,
    IntroSection,
    IntroSectionProps,
    TreatmentsSection,
    TreatmentsSectionProps,
    RelatedLinksSection,
    RelatedLink,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema } from '@/lib/schema';
import {medicalTreatment} from "@/data/treatments";

export const metadata: Metadata = {
    title: 'Medizinische Indikationen Bremen | Bruxismus, Migräne & Schwitzen | EL Aesthetics',
    description: 'Medizinische Behandlungen mit Botulinumtoxin in Bremen: Bruxismus, chronische Migräne & Hyperhidrose. Ärztliche Diagnostik & Therapie. Jetzt beraten lassen.',
    keywords: ['medizinische Botox Behandlung Bremen', 'Bruxismus Behandlung Bremen', 'Migräne Botox Bremen', 'Hyperhidrose Bremen'],
    openGraph: {
        title: 'Medizinische Behandlungen in Bremen – EL Aesthetics',
        description: 'Ärztliche Botulinumtoxin-Therapie bei Bruxismus, chronischer Migräne & Hyperhidrose in Bremen.',
        url: 'https://elaesthetics-bremen.de/medizinische-behandlungen',
        siteName: 'EL Aesthetics Bremen',
        type: 'website',
        locale: 'de_DE',
        images: [
            {
                url: 'https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp',
                width: 1200,
                height: 630,
                alt: 'Medizinische Behandlungen in Bremen – EL Aesthetics',
            },
        ],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/medizinische-behandlungen',
    },
};

export default function BotulinumtoxinBehandlungenPage() {
    const schema = getWebPageSchema({
        name: 'Medizinische Botulinumtoxin-Behandlungen in Bremen',
        description: 'Übersicht zu medizinischen Botulinumtoxin-Therapien: Bruxismus, chronische Migräne und Hyperhidrose bei EL Aesthetics.',
        url: '/medizinische-behandlungen',
        about: {
            type: 'MedicalTherapy',
            name: 'Medizinische Botulinumtoxin-Behandlung',
            procedureType: 'NonSurgicalProcedure',
        },
    });

    const heroData: HeroSectionProps = {
        title: "Medizische Botulinumtoxin-Behandlungen in Bremen",
        subtitle:
            "Suchen sie professionelle und medizinisch fundierte Masseter/Bruxismus, Migräne- oder Hyperhidrose-Behandlungen in Bremen? Dann sind sie bei El Aesthetics sind sie genau richtig!",
        imageSrc: "/assets/medizinische-behandlungen/medizinische-behandlunge_hero.webp",
        imageAlt: "Medizinische Botulinumtoxin-Behandlung bei Bruxismus und Migräne – EL Aesthetics Bremen",
        primaryCTA: { text: "Beratung anfragen", href: "/kontakt" },
        secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
    };

    const introData: IntroSectionProps = {
        title: "Botulinumtoxin - mehr als nur Faltenbehandlung",
        content: [
            "Medizinische Botulinumtoxin-Behandlungen sind ärztliche Verfahren zur gezielten Therapie von Bruxismus, chronischer Migräne und Hyperhidrose.",
            "Richtig angewendet kann Botulinumtoxin Symptome bei chronischer Migräne, Hyperhidrose und Bruxismus spürbar reduzieren.",
            "Bei EL Aesthetics Bremen steht die ärztliche Behandlungsplanung im Mittelpunkt: Wir analysieren Ihre Ausgangssituation, definieren realistische Ziele und stimmen die Dosierung individuell ab – um Ihre persönlichen Behandlungsziele bestmöglich zu erreichen.",
            "Transparenz ist uns wichtig: Sie erhalten eine klare Einschätzung zu Wirkungseintritt und Haltbarkeit, möglichen Nebenwirkungen sowie sinnvollen Behandlungsabständen."
        ]

    };

    const treatmentsData: TreatmentsSectionProps = {
        title: "Medizinische Botulinumtoxin-Behandlungen in Bremen",
        treatments: medicalTreatment
    };

    const tocItems: TOCItem[] = [
        { id: 'intro', label: 'Über die Behandlung' },
        { id: 'treatments', label: 'Behandlungen' },
        { id: 'consultation', label: 'Beratung' },
        { id: 'faq', label: 'Häufige Fragen' },
    ];

    const consultationData: ConsultationSectionProps = {
        title: "Individuelle medizinische Beratung in Bremen",
        description: [
            "Jede Ausgangssituation ist anders. Wir prüfen Indikation, Kontraindikationen, Dosierung und Areale – immer mit Blick auf Ihre Ziele.",
            "Sie erhalten einen transparenten Behandlungsplan inklusive realistischem Zeitrahmen für den Wirkungseintritt, der Haltbarkeit und möglicher Wiederholungsintervalle.",
            "Sicherheit steht an erster Stelle: Wir besprechen mögliche Nebenwirkungen und zeigen Alternativen auf, falls eine Botulinumtoxin-Therapie nicht die optimale Option ist."
        ],
        ctaText: "Jetzt Beratung anfragen",
        ctaHref: "/kontakt",
        backgroundColor: "bg-[#F5FAFF]"
    };

    const relatedLinks: RelatedLink[] = [
        {
            href: '/botulinumtoxin/masseter',
            label: 'Masseter-Behandlung (Bruxismus)',
            description: 'Überaktive Kaumuskulatur entspannen – gegen Kieferschmerzen, Zähneknirschen und Masseter-Hypertrophie.',
        },
        {
            href: '/botulinumtoxin/migraene',
            label: 'Migräne-Prophylaxe mit Botulinumtoxin',
            description: 'Chronische Migräne behandeln nach dem PREEMPT-Schema – weniger Kopfschmerztage, mehr Lebensqualität.',
        },
        {
            href: '/botulinumtoxin/hyperhidrose',
            label: 'Hyperhidrose-Behandlung',
            description: 'Übermäßiges Schwitzen an Achseln, Händen oder Stirn gezielt mit Botulinumtoxin reduzieren.',
        },
    ];

const faqData: FAQSectionProps = {
  title: "Häufig gestellte Fragen (FAQ)",
  faqs: [
    {
      question: "Wie wirkt Botulinumtoxin eigentlich?",
      answer:
        "Botulinumtoxin (BoNT) blockiert in Nervenendigungen die Ausschüttung von Acetylcholin. Dadurch werden gezielt Muskeln oder – bei Hyperhidrose – cholinerge Schweißdrüsen vorübergehend ‚ruhiggestellt‘. Die Wirkung setzt schrittweise ein und ist vollständig reversibel."
    },
    {
      question: "Wie schnell setzt die Wirkung ein und wie lange hält sie?",
      answer:
        "Meist beginnen Effekte nach 2–5 Tagen, der Höhepunkt liegt nach 1–2 Wochen. Die Dauer beträgt typischerweise 3–6 Monate (je nach Areal, Dosierung und individueller Aktivität)."
    },

    // — MASSETER / BRUXISMUS —
    {
      question: "Für wen ist eine Masseter-Behandlung sinnvoll?",
      answer:
        "Bei schmerzhafter Zahnpress-/Knirschneigung (Bruxismus) mit überaktiver Kaumuskulatur oder bei ausgeprägter Masseter-Hypertrophie. Ziel ist, Muskelspannung und Schmerz zu reduzieren und ggf. die Winkel-Kieferpartie optisch zu verschlanken."
    },
    {
      question: "Verringert BoNT im Masseter das Knirschen komplett?",
      answer:
        "Es reduziert Muskelaktivität und damit Schmerzen, Verspannung und Abrieb. Da Bruxismus auch zentral-neurologische Anteile hat, kann Knirschen fortbestehen – Aufbissschienen und Stressmanagement bleiben oft wichtig."
    },
    {
      question: "Merkt man eine ‘Kauschwäche’ nach Masseter-BoNT?",
      answer:
        "Vorübergehende Kaumüdigkeit bei sehr zähen Speisen ist möglich, der Alltag ist in der Regel nicht eingeschränkt. Die Dosis wird so gewählt, dass Funktion erhalten bleibt."
    },
    {
      question: "Formt BoNT (Botulinumtoxin) den Kiefer nachhaltig um?",
      answer:
        "Das Volumen des Masseters nimmt langsam ab, wodurch die Kieferkontur schlanker wirken kann. Die Muskulatur baut sich über Monate wieder auf – die Veränderung ist also graduell und reversibel."
    },
    {
      question: "Gibt es Langzeitbedenken am Kieferknochen?",
      answer:
        "Einige Studien diskutieren geringe knöcherne Veränderungen nach wiederholten und/oder hohen Masseter-Dosen. Die klinische Relevanz ist unklar. Eine konservative Dosierung und Verlaufskontrollen sind sinnvoll."
    },

    // — HYPERHIDROSE —
    {
      question: "Bei welchen Schwitz-Arealen ist BoNT etabliert?",
      answer:
        "Sehr gut belegt und zugelassen ist die Behandlung der Achseln bei primärer Hyperhidrose. Handflächen, Fußsohlen, Stirn etc. sind möglich, gelten aber häufig als Off-Label – mit je eigener Nutzen-Risiko-Abwägung."
    },
    {
      question: "Wie lange wirkt BoNT bei Achsel-Hyperhidrose?",
      answer:
        "Viele Betroffene haben 6–7 Monate deutlich weniger Schweiß (Bandbreite etwa 4–12 Monate). Mit nachlassender Wirkung sind Wiederholungen möglich."
    },
    {
      question: "Ist die Hand-/Fußbehandlung schmerzhafter oder riskanter?",
      answer:
        "In Handflächen und Fußsohlen sind die Injektionen unangenehmer; vorübergehende Griffschwäche (palmar) ist möglich. Wirkung und Zufriedenheit sind variabler als in den Achseln."
    },
    {
      question: "Wie wird das Behandlungsfeld festgelegt?",
      answer:
        "Häufig mit Jod-Stärke-(Minor-)Test: Überaktive Schweißareale werden so sichtbar gemacht und präzise behandelt."
    },
    {
      question: "Welche Alternativen gibt es zur Schweißhemmung?",
      answer:
        "Starke Antitranspirantien, Iontophorese, systemische Anticholinergika, gerätebasierte Verfahren (z. B. Mikrowellenthermolyse) – die Wahl hängt von Areal, Schweregrad und Präferenzen ab."
    },

    // — MIGRÄNE —
    {
      question: "Wann hilft BoNT bei Migräne?",
      answer:
        "Bei erwachsenen Patient:innen mit chronischer Migräne (≥15 Kopfschmerztage/Monat). Für episodische Migräne ist BoNT nicht belegt."
    },
    {
      question: "Wie läuft die Migräne-Prophylaxe ab?",
      answer:
        "Nach dem PREEMPT-Schema werden definierte Punkte an Kopf und Nacken etwa alle 12 Wochen behandelt. Die Wirksamkeit wird oft nach 2–3 Behandlungsterminen am stabilsten beurteilt."
    },
    {
      question: "Wie schnell spürt man Effekt bei Migräne?",
      answer:
        "Erste Verbesserungen zeigen sich häufig innerhalb von 2–4 Wochen; die volle Beurteilung gelingt über mehrere Zyklen. Ziel ist die Reduktion von Kopfschmerz- und Migränetagen sowie eine bessere Lebensqualität."
    },
    {
      question: "Welche Nebenwirkungen sind bei der Migräne-Therapie typisch?",
      answer:
        "Lokale Reaktionen (Druckempfindlichkeit, kleine Hämatome), Nackenverspannung/-schmerz, selten Ptosis. Schwerwiegende Nebenwirkungen sind sehr selten und werden im Aufklärungsgespräch besprochen."
    },
    {
      question: "Kann BoNT mit anderen Migränetherapien kombiniert werden?",
      answer:
        "Ja – je nach individueller Situation auch mit CGRP-Antikörpern oder oralen Prophylaxen. Die Kombination wird ärztlich abgestimmt."
    },

    // — SICHERHEIT / ORGANISATION —
    {
      question: "Wer sollte nicht behandelt werden?",
      answer:
        "Kontraindikationen sind u. a. Infektionen im Injektionsareal, bestimmte neuromuskuläre Erkrankungen (z. B. Myasthenia gravis), bekannte Überempfindlichkeit sowie Schwangerschaft und Stillzeit."
    },
    {
      question: "Gibt es Wechselwirkungen mit Medikamenten?",
      answer:
        "Vorsicht z. B. bei Aminoglykosid-Antibiotika oder anderen Substanzen, die die neuromuskuläre Übertragung beeinflussen. Bitte Ihre Medikation im Vorgespräch angeben."
    },
    {
      question: "Bildet der Körper ‘Resistenzen’ gegen BoNT?",
      answer:
        "Neutralisierende Antikörper sind selten. Angepasste Dosierungen, sinnvolle Intervalle und die Vermeidung unnötig hoher Gesamtmengen reduzieren das Risiko."
    },
    {
      question: "Was kostet die Behandlung?",
      answer:
        "Die Kosten hängen von Areal, Anzahl der Injektionspunkte und benötigter Dosis ab. Nach ärztlicher Beratung erhalten Sie einen transparenten, individuellen Kostenplan."
    }
  ]
};


    const ctaData: CTASectionProps = {
        title: "Bereit für eine fundierte, natürliche Botulinumtoxin-Behandlung?",
        subtitle: "Vereinbaren Sie jetzt Ihr Beratungsgespräch bei EL Aesthetics Bremen.",
        primaryCTA: { text: "Jetzt Beratung anfragen", href: "/kontakt" },
        secondaryCTA: { text: "+49 155 66919635", href: "tel:+4915566919635" }
    };


    return (
        <div className="min-h-screen bg-white">
            <Script
                id="medizinisch-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <HeroSection {...heroData} />
            <TableOfContents items={tocItems} />
            <IntroSection {...introData} />
            <TreatmentsSection {...treatmentsData} />
            <RelatedLinksSection title="Verwandte Behandlungen" links={relatedLinks} />
            <ConsultationSection />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
        </div>
    );
}
