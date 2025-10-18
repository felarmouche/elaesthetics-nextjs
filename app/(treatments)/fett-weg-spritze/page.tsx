import type { Metadata } from 'next';
import {
    AreasSection,
    AreasSectionProps,
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
    ProcessSection,
    ProcessSectionProps,
    QuickInfoSection,
    QuickInfoSectionProps,
    TreatmentCareSection,
    TreatmentCareSectionProps,
    TreatmentsSectionProps,
    TreatmentsSection
    
    
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
    title:
        'Fett-weg-Spritze Bremen | Injektionslipolyse ohne OP | Doppelkinn entfernen | EL Aesthetics',
    description:
        'Fett-weg-Spritze (Injektionslipolyse) in Bremen ✓ Fettreduktion ohne OP ✓ Doppelkinn, Hängebäckchen & Fettdepots gezielt behandeln ✓ Dauerhafte Ergebnisse ✓ Jetzt Beratung!',
    keywords:
        'Fett-weg-Spritze Bremen, Injektionslipolyse Bremen, Doppelkinn entfernen Bremen, Fettreduktion ohne OP Bremen, Hängebäckchen behandeln Bremen, Lipolyse Bremen, Fett weg ohne Operation, lokale Fettdepots reduzieren, Körperkonturierung Bremen, Phosphatidylcholin Bremen, Desoxycholsäure Bremen, Fettpolster auflösen Bremen',
    openGraph: {
        title:
            'Fett-weg-Spritze Bremen – Injektionslipolyse ohne OP | EL Aesthetics',
        description:
            'Effektive Fettreduktion ohne Operation: Doppelkinn, Hängebäckchen & lokale Fettdepots dauerhaft auflösen – minimal-invasiv und gesellschaftsfähig.',
        type: 'website',
        locale: 'de_DE',
        images: [
            'https://elaesthetics-bremen.de/assets/fett-weg-spritze/og-fett-weg-spritze-bremen.png',
        ],
    },
    alternates: {
        canonical: 'https://elaesthetics-bremen.de/fett-weg-spritze',
    },
};

export default function FettWegSpritzePage() {
    const heroData: HeroSectionProps = {
        title: 'Fett-weg-Spritze (Injektionslipolyse) in Bremen',
        subtitle:
            'Gezielte Fettreduktion ohne Operation: Doppelkinn, Hängebäckchen & lokale Fettdepots dauerhaft auflösen – minimal-invasiv mit langanhaltenden Ergebnissen.',
        imageSrc: '/assets/fett-weg-spritze/fett-weg-spritze_hero.webp',
        imageAlt:
            'Fett-weg-Spritze Behandlung für Doppelkinn bei EL Aesthetics in Bremen',
        primaryCTA: { text: 'Beratung anfragen', href: '/terminanfragen' },
        secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
    };

    const introData: IntroSectionProps = {
        title: 'Was ist die Injektionslipolyse (Fett-weg-Spritze)?',
        content: [
            'Bei der sogenannten Fett-weg-Spritze werden die Fettzellen durch gezielte Injektionen zerstört, vom Körper auf natürliche Weise verstoffwechselt und ausgeschieden. Folglich verkleinern sich die Fettdepots oder lösen sich dauerhaft auf. Das macht die Injektionslipolyse zu einer Alternative für alle, die sich keiner Operation unterziehen wollen.',
            'Die Wirkung der Fett-weg-Spritze beruht auf der Injektion der Wirkstoffe Phosphatidylcholin und Desoxycholsäure, die in das Fettgewebe injiziert werden. Diese Wirkstoffe lösen eine Reaktion aus, bei der die Fettzellen aufgelöst und abgebaut werden. Eine Hautstraffung und Körperkonturierung ist dabei eine positive Begleiterscheinung.',
            'Damit lassen sich Doppelkinn, Hängebäckchen und viele weitere kleinere bis mittelgroße Fettdepots am Körper reduzieren. Die Fett-weg-Spritze stellt keine Methode zur umfassenden Gewichtsreduktion dar, sondern wird gezielt zur Reduktion kleiner bis mittelgroßer, lokalisierter Fettdepots eingesetzt.',
            'Sie ist am besten für diejenigen geeignet, welche überschüssige kleine bis mittelgroße Fettpolster loswerden möchten, die nicht gut auf Sport und Diäten ansprechen. In der Regel sind 3-5 Behandlungen notwendig, um ein optimales Ergebnis zu erzielen.',
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
                        title: 'Oberschenkel',
                        description: 'Innenseite und Außenseite der Oberschenkel',
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
                description: 'ab 180€ pro Behandlung*',
                iconUrl: '/assets/icons/EUR.svg',
            },
            {
                title: 'Dauer',
                description: '30-45 Min',
                iconUrl: '/assets/icons/TIME.svg',
            },
            {
                title: 'Wirkeintritt',
                description: 'individuell, nach 2-3 Behandlungen sichtbar',
                iconUrl: '/assets/icons/CAL.svg',
            },
            {
                title: 'Lokalanästhesie',
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
                description: '3-5 Behandlungen, Abstand 2-8 Wochen',
                iconUrl: '/assets/icons/wiederholung.svg',
            },
        ],
        note: '*Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).',
    };

    const processData: ProcessSectionProps = {
        title: 'Ablauf der Fett-weg-Spritze Behandlung in Bremen',
        steps: [
            {
                number: '01',
                title: 'Beratung & Präparatauswahl',
                description:
                    'Je nach individueller Situation und Behandlungsziel verwende ich verschiedene Präparate zur Fettreduktion. Die Auswahl des jeweiligen Produkts erfolgt nach sorgfältiger Beratung und Ihrer persönlichen Eignung. Dabei berücksichtige ich sowohl medizinische Faktoren als auch Ihre Erwartungen an das Behandlungsergebnis. Wir besprechen die Anzahl der notwendigen Behandlungen, den Behandlungsverlauf sowie mögliche Nachsorgemaßnahmen.',
            },
            {
                number: '02',
                title: 'Vorbereitung & Markierung',
                description:
                    'Die zuvor festgelegten Behandlungsareale werden markiert und desinfiziert. Die Injektionslipolyse gilt zwar als schmerzarm, auf Wunsch kann jedoch eine Betäubungscreme aufgetragen werden. Dies verlängert die Behandlungsdauer um ca. 30 Minuten.',
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
                    'Anschließend erfolgt eine leichte Massage, um den Wirkstoff optimal zu verteilen. Sie erhalten detaillierte Nachsorgeanweisungen, um den Heilungsprozess zu beschleunigen und das Behandlungsergebnis zu optimieren.',
            },
            {
                number: '05',
                title: 'Folgetermine & Ergebnis',
                description:
                    'Die Behandlungen erfolgen alle 2-8 Wochen (abhängig vom gewählten Präparat), bis das gewünschte Ergebnis erreicht ist. Erste Veränderungen können nach 2 Behandlungen sichtbar werden. Die zerstörten Fettzellen werden dauerhaft vom Körper abgebaut und ausgeschieden.',
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
                        'Keine blutverdünnenden Medikamente einnehmen (nach Rücksprache mit Ihrem Arzt).',
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
                        'Nehmen Sie 7 Tage lang nach der Behandlung keine entzündungshemmenden oder blutverdünnenden Medikamente ein (z.B. Ibuprofen, Diclofenac, Aspirin).',
                },
            ],
        },
    };

    const reviews: Review[] = [
        {
            id: 1,
            name: 'Michael T.',
            rating: 5,
            text:
                'Nach 4 Behandlungen ist mein Doppelkinn endlich weg! Ich habe jahrelang versucht, es mit Sport loszuwerden, aber erst die Fett-weg-Spritze hat geholfen. Super Ergebnis!',
            date: '2024-09-05',
        },
        {
            id: 2,
            name: 'Sabine K.',
            rating: 5,
            text:
                'Die Behandlung war viel angenehmer als erwartet. Meine Hängebäckchen sind deutlich weniger geworden und mein Gesicht wirkt viel straffer. Ich bin begeistert!',
            date: '2024-08-18',
        },
        {
            id: 3,
            name: 'Andreas M.',
            rating: 5,
            text:
                'Hatte immer ein Problem mit den Fettpolstern an den Hüften. Nach 3 Sitzungen sind sie fast komplett verschwunden. Die Ärztin hat mich super beraten!',
            date: '2024-07-12',
        },
        {
            id: 4,
            name: 'Julia W.',
            rating: 5,
            text:
                'Mein Doppelkinn hat mich schon lange gestört. Nach der Behandlungsserie sehe ich deutlich jünger und frischer aus. Keine OP nötig – perfekt!',
            date: '2024-06-28',
        },
    ];

    const consultationData: ConsultationSectionProps = {
        title: 'Ihre Expertin für Fett-weg-Spritze in Bremen',
        description: [
            'Lokale Fettdepots, die trotz Sport und gesunder Ernährung nicht verschwinden wollen, sind ein häufiges Problem. Als spezialisierte Ärztin für ästhetische Medizin biete ich Ihnen mit der Injektionslipolyse eine effektive, nicht-operative Lösung für gezielte Fettreduktion.',
            'In meiner Praxis EL Aesthetics in Bremen analysiere ich Ihre individuelle Situation gründlich: Welche Bereiche sollen behandelt werden? Wie viele Sitzungen sind realistisch? Welches Präparat ist für Sie am besten geeignet? Gemeinsam entwickeln wir einen Behandlungsplan, der zu Ihnen passt.',
            'Ziel ist es, eine möglichst effektive und gut verträgliche Lösung zu finden, die individuell auf Sie abgestimmt ist. Der Behandlungsverlauf sowie mögliche Nachsorgemaßnahmen werden dabei umfassend besprochen.',
            'Wichtig: Die Fett-weg-Spritze ersetzt keine gesunde Lebensweise. Mit der richtigen Ernährung und ausreichend Bewegung bleiben die Ergebnisse langfristig erhalten.',
        ],
        ctaText: 'Jetzt Beratungstermin buchen',
        ctaHref: '/terminanfragen',
        imageSrc: '/assets/tinified/IMG_7364.webp',
        imageAlt:
            'Ärztin Ola El-Armouche – Expertin für Fett-weg-Spritze in Bremen',
        backgroundColor: 'bg-[#FDF6F0]',
    };

    
  const treatmentsData: TreatmentsSectionProps = {
    title: 'Weitere Behandlungen',
    treatments: [
      {
        imageUrl: '/assets/botox/botox-faltenbehandlung_hero.webp',
        imageAlt: 'Ein Männer- und ein Frauen-Gesicht nach einer Botox Behandlung',
        title: 'Botulinum',
        description:
          'Botullinumtoxin für Faltenbehandlung oder medizinische Indikationen',
        treatmentUrl: '/botox/',
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.png',
        imageAlt: 'Kollagenstimulation mit Radiesse für Hautstraffung',
        title: 'Kollagenstimulation',
        description:
          'Langanhaltende Hautstraffung und Volumenaufbau durch Calciumhydroxylapatit – ideal für Wangen, Kinn und Hände.',
        treatmentUrl: '/kollagenstimulation',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.png',
        imageAlt: 'Hyaluron Filler für Gesichtskonturierung',
        title: 'Hyaluron Filler',
        description:
          'Präzise Gesichtsformung und Volumenaufbau.',
        treatmentUrl: '/hyaluron/filler',
      },
    ],
  };

    const faqData: FAQSectionProps = {
        title: 'Häufige Fragen zur Fett-weg-Spritze',
        faqs: [
            {
                question: 'Wie funktioniert die Fett-weg-Spritze genau?',
                answer:
                    'Die Fett-weg-Spritze wirkt durch die Injektion von Wirkstoffen wie Phosphatidylcholin und Desoxycholsäure direkt in das Fettgewebe. Diese Substanzen lösen die Zellmembranen der Fettzellen auf, wodurch die Fettzellen zerstört werden. Der Körper baut die aufgelösten Fettzellen dann natürlich ab und scheidet sie über das Lymphsystem und die Leber aus. Die behandelten Fettzellen sind dauerhaft entfernt und können sich nicht regenerieren.',
            },
            {
                question: 'Für wen ist die Fett-weg-Spritze geeignet?',
                answer:
                    'Die Injektionslipolyse ist ideal für Personen mit kleinen bis mittelgroßen, lokalisierten Fettdepots, die trotz Sport und Diät nicht verschwinden. Besonders geeignet für: Doppelkinn, Hängebäckchen, Oberarme, seitliche Bauchfettpolster, Love Handles, innere Oberschenkel. NICHT geeignet ist die Behandlung zur allgemeinen Gewichtsreduktion oder bei starker Fettleibigkeit (BMI > 30). Sie ersetzt keine gesunde Ernährung und Bewegung.',
            },
            {
                question: 'Wann darf die Fett-weg-Spritze NICHT angewendet werden?',
                answer:
                    'Absolute Kontraindikationen: Schwangerschaft und Stillzeit, Diabetes mit Gefäßerkrankungen (Mikroangiopathien). Relative Kontraindikationen: Autoimmunerkrankungen (z.B. Sklerodermie), schwere Leber- oder Nierenerkrankungen, Allergien gegen Inhaltsstoffe, Blutgerinnungsstörungen, akute Infektionen, schwere Fettleibigkeit (BMI > 30). Im Beratungsgespräch klären wir Ihre individuelle Eignung.',
            },
            {
                question: 'Wie viele Behandlungen brauche ich?',
                answer:
                    'Die Anzahl der notwendigen Behandlungen wird im Beratungsgespräch festgelegt. In der Regel erfolgen Behandlungen alle 2-8 Wochen (abhängig vom gewählten Präparat), bis das gewünschte Ergebnis erreicht ist. Meistens sind 3-5 Behandlungen notwendig, um ein optimales Ergebnis zu erzielen. Erste Veränderungen können nach 2 Behandlungen sichtbar werden. Die Wirkung variiert je nach individueller Reaktion, Menge des injizierten Wirkstoffs und Anzahl der Behandlungen.',
            },
            {
                question: 'Wie lange halten die Ergebnisse?',
                answer:
                    'Mit der Fett-weg-Spritze werden die Fettzellen in den behandelten Bereichen dauerhaft aufgelöst und vom Körper abtransportiert. Daher sind die Ergebnisse bei guter Ernährung und ausreichender Bewegung langfristig und dauerhaft. Die behandelten Fettzellen können sich nicht regenerieren. Um die Ergebnisse zu erhalten, ist eine gesunde Lebensweise entscheidend. Bei starker Gewichtszunahme können sich allerdings andere Fettzellen im Körper vergrößern.',
            },
            {
                question: 'Ist die Behandlung schmerzhaft?',
                answer:
                    'Die Injektionslipolyse gilt als schmerzarm. Die meisten Patienten beschreiben ein leichtes Brennen oder Stechen während der Injektionen. Auf Wunsch kann eine Betäubungscreme aufgetragen werden, was den Komfort erhöht (verlängert die Behandlung um ca. 30 Minuten). Nach der Behandlung können Schmerzen oder ein ziehendes Gefühl wie Muskelkater auftreten, die nach einigen Tagen abklingen.',
            },
            {
                question: 'Welche Nebenwirkungen können auftreten?',
                answer:
                    'Häufige Nebenwirkungen sind: Rötungen und Schwellungen an den Injektionsstellen (normal und erwünscht), Hämatome (Blutergüsse), Schmerzen oder ziehendes Gefühl wie Muskelkater, Verhärtungen oder kleine Knoten unter der Haut (bilden sich meist zurück). Seltene Nebenwirkungen: allergische Reaktionen oder Überempfindlichkeiten. Die Ausprägung und Dauer der Nebenwirkungen sind individuell verschieden und abhängig vom verwendeten Präparat. Die meisten Nebenwirkungen klingen innerhalb von 1-2 Wochen ab.',
            },
            {
                question: 'Bin ich nach der Behandlung sofort gesellschaftsfähig?',
                answer:
                    'In der Regel sind Sie sofort gesellschaftsfähig. Es können jedoch Schwellungen und Rötungen im Behandlungsbereich auftreten, die einige Tage sichtbar sein können. Bei Behandlungen im Gesicht (z.B. Doppelkinn) sollten Sie 2-3 Tage soziale Puffer einplanen. Sie sollten eine Woche auf intensive körperliche Aktivität, Sauna und Solarium verzichten. Planen Sie am besten ein verlängertes Wochenende für die Behandlung ein.',
            },
            {
                question: 'Welche Präparate werden verwendet?',
                answer:
                    'Je nach individueller Situation und Behandlungsziel verwende ich verschiedene Präparate zur Fettreduktion. Die Auswahl erfolgt nach sorgfältiger Beratung und Ihrer persönlichen Eignung. Häufig verwendete Wirkstoffe sind Phosphatidylcholin und Desoxycholsäure. Die Präparate unterscheiden sich in Wirkstoffkonzentration, Wirkdauer und Behandlungsintervallen. Im Beratungsgespräch erkläre ich Ihnen die Unterschiede und empfehle das für Sie am besten geeignete Präparat.',
            },
            {
                question: 'Was kostet die Fett-weg-Spritze in Bremen?',
                answer:
                    'Eine Behandlung kostet ab 180€ (je nach Behandlungsareal, verwendetem Präparat und benötigter Menge). Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ). Für eine komplette Behandlungsserie (3-5 Sitzungen) können Paketpreise angeboten werden. Einen transparenten, individuellen Kostenplan erhalten Sie im persönlichen Beratungsgespräch.',
            },
        ],
    };

    const ctaData: CTASectionProps = {
        title: 'Bereit für eine definierte Kontur ohne OP?',
        subtitle:
            'Vereinbaren Sie jetzt Ihre persönliche Beratung und erfahren Sie, wie die Fett-weg-Spritze Ihre Problemzonen dauerhaft reduzieren kann.',
        primaryCTA: { text: 'Jetzt Termin buchen', href: '/terminanfragen' },
        secondaryCTA: { text: '0155 66919635', href: 'tel:+4915566919635' },
    };

    const locationData: LocationSectionProps = {
        title: 'Fett-weg-Spritze in Bremen: EL Aesthetics',
        description:
            'Effektive Fettreduktion ohne Operation – individuell geplant und professionell durchgeführt in unserer modernen Praxis im Herzen Bremens.',
        location: {
            address: 'Richtepad 14, 28355 Bremen',
            phone: '0155 66919635',
            email: 'info@elaesthetics-bremen.de',
            openingHours: ['Termine nach Vereinbarung'],
        },
    };

    return (
        <div className="min-h-screen bg-white">
            <HeroSection {...heroData} />
            <IntroSection {...introData} />
            <AreasSection {...areasData} />
            <QuickInfoSection {...quickInfoData} />
            <ProcessSection {...processData} />
            <TreatmentCareSection {...treatmentCareData} />
            <PatientReviews
                reviews={reviews}
                title="Erfahrungen unserer Patienten mit der Fett-weg-Spritze"
                subtitle="Echte Ergebnisse von echten Menschen: Doppelkinn weg, definierte Konturen, dauerhaft schlank – ohne Operation."
            />
            <ConsultationSection {...consultationData} />
            <TreatmentsSection {...treatmentsData} />
            <FAQSection {...faqData} />
            <CTASection {...ctaData} />
            <LocationSection {...locationData} />
        </div>
    );
}