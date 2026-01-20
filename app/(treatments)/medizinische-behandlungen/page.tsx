// app/(routes)/botulinumtoxin/page.tsx
import type { Metadata } from 'next';
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
    TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';

export const metadata: Metadata = {
    title: 'Medizische Botulinum-Behandlungen in Bremen',
    description:
        'Medizinische Botulinumtoxin-Behandlungen in Bremen: Masseter, Mesobotox, Migräne, Hyperhidrose. Ärzlich & professionell. Jetzt Informieren!',
    keywords:
        'Botulinumtoxin Bremen, Botulinumtoxin Behandlung Bremen, Botulinumtoxin Bremen, Masseter Botulinumtoxin Bremen, Mesobotox / Microbotox Bremen, Baby Botulinumtoxin Bremen, Botulinumtoxin Migräne Bremen, Botulinumtoxin Hyperhidrose Bremen, Bruxismus Behandlung Bremen',
    openGraph: {
        title: 'Botulinumtoxin Behandlungen in Bremen – Präzise, sicher & individuell',
        description:
            'EL Aesthetics Bremen: Ärztliche Botulinumtoxin-Therapien für Masseter/Bruxismus, Mesobotox / Microbotox zur Hautverfeinerung, Migräneprophylaxe und Hyperhidrose-Behandlung.',
        type: 'website',
        locale: 'de_DE',
        images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin/og-image-botox-bremen.webp'],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/botulinumtoxin',
    },
};

export default function BotulinumtoxinBehandlungenPage() {
    const heroData: HeroSectionProps = {
        title: "Medizische Botulinumtoxin Behandlungen in Bremen",
        subtitle:
            "Suchen sie professionelle und medizinisch fundierte Masseter/Bruxismus, Migräne- oder Hyperhidrose-Behandlungen in Bremen? Dann sind sie bei El Aesthetics sind sie genau richtig!",
        imageSrc: "/assets/medizinische-behandlungen/medizinische-behandlunge_hero.webp",
        imageAlt: "Symbolbild für ärztliche Botulinumtoxin-Behandlungen in der Praxis EL Aesthetics Bremen",
        primaryCTA: { text: "Beratung anfragen", href: "/kontakt" },
        secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
    };

    const introData: IntroSectionProps = {
        title: "Botulinumtoxin - mehr als nur Faltenbehandlung",
        content: [
            "Botulinumtoxin ist seit vielen Jahren medizinisch etabliert. In erfahrenen Händen lässt sich die Muskelaktivität präzise modulieren – mit dem Ziel, Beschwerden gezielt zu lindern.",
            "Richtig angewendet kann Botulinumtoxin Symptome bei chronischer Migräne, Hyperhidrose und Bruxismus spürbar reduzieren.",
            "Bei EL Aesthetics Bremen steht die ärztliche Behandlungsplanung im Mittelpunkt: Wir analysieren Ihre Ausgangssituation, definieren realistische Ziele und stimmen die Dosierung individuell ab – um Ihre persönlichen Behandlungsziele bestmöglich zu erreichen.",
            "Transparenz ist uns wichtig: Sie erhalten eine klare Einschätzung zu Wirkungseintritt und Haltbarkeit, möglichen Nebenwirkungen sowie sinnvollen Behandlungsabständen."
        ]

    };

    const treatmentsData: TreatmentsSectionProps = {
        title: "Unsere medizinischen Behandlungen in Bremen",
        treatments: [
            {
                imageUrl: "/assets/botulinumtoxin/botox-masseter_hero.webp",
                imageAlt: "Masseter-Botulinumtoxin gegen Zähneknirschen (Bruxismus) in Bremen",
                title: "Masseter: Entspannung bei Bruxismus & Kieferschmerzen",
                description:
                    "Zielgerichtete Injektionen in den Kaumuskel können Knirschen und Pressen reduzieren, Kieferschmerzen lindern und die Kontur optisch verschlanken – mit funktionellem und ästhetischem Benefit.",
                treatmentUrl: "/botulinumtoxin/masseter"
            },

            {
                imageUrl: "/assets/botulinumtoxin/botox-migräne_hero.webp",
                imageAlt: "Botulinumtoxin zur Migräneprophylaxe in Bremen",
                title: "Migräne: Prophylaxe mit Botulinumtoxin",
                description:
                    "Für chronische Migräne kann Botulinumtoxin die Attackenfrequenz senken. Wir besprechen Indikation, Schema und realistische Erwartungen im Rahmen einer ärztlichen Beratung.",
                treatmentUrl: "/botulinumtoxin/migraene"
            },
            {
                imageUrl: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
                imageAlt: "Behandlung von Hyperhidrose (übermäßiges Schwitzen) mit Botulinumtoxin in Bremen",
                title: "Hyperhidrose: Weniger Schwitzen, mehr Freiheit",
                description:
                    "In Achseln, Handflächen oder Fußsohlen drosselt Botulinumtoxin die Schweißproduktion über Monate. Für ein spürbar trockeneres und komfortableres Hautgefühl.",
                treatmentUrl: "/botulinumtoxin/hyperhidrose"
            }
        ]
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
