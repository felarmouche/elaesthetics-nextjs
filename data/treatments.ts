import {Treatment, TreatmentsSectionProps} from "@/components/TreatmentPageComponents";

/* ============================================================
   1. EINZELNE BEHANDLUNGS-OBJEKTE (Wiederverwendbar)
   ============================================================ */

// --- HYALURON & BIO-REMODELING & HYDRATION ---
export const botoxMasseter: Treatment =
{
    imageUrl: "/assets/botulinumtoxin/botox-masseter_hero.webp",
        imageAlt: "Masseter-Botulinumtoxin gegen Zähneknirschen (Bruxismus) in Bremen",
    title: "Masseter-Botox: Entspannung bei Bruxismus & Kieferschmerzen",
    description:
    "Zielgerichtete Injektionen in den Kaumuskel können Knirschen und Pressen reduzieren, Kieferschmerzen lindern und die Kontur optisch verschlanken – mit funktionellem und ästhetischem Benefit.",
        treatmentUrl: "/botulinumtoxin/masseter"
};
export const botoxMigraene: Treatment =
        {
    imageUrl: "/assets/botulinumtoxin/botox-migräne_hero.webp",
        imageAlt: "Botulinumtoxin zur Migräneprophylaxe in Bremen",
    title: "Botulinumtoxin bei Migräne",
    description:
    "Für chronische Migräne kann Botulinumtoxin die Attackenfrequenz senken. Wir besprechen Indikation, Schema und realistische Erwartungen im Rahmen einer ärztlichen Beratung.",
        treatmentUrl: "/botulinumtoxin/migraene"
};
export const botoxHyperhydrose: Treatment =
    {
    imageUrl: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
        imageAlt: "Behandlung von Hyperhidrose (übermäßiges Schwitzen) mit Botulinumtoxin in Bremen",
    title: "Botulinumtoxin bei Hyperhidrose (starkem Schwitzen)",
    description:
    "In Achseln, Handflächen oder Fußsohlen drosselt Botulinumtoxin die Schweißproduktion über Monate. Für ein spürbar trockeneres und komfortableres Hautgefühl.",
        treatmentUrl: "/botulinumtoxin/hyperhidrose"
}

export const skinbooster: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
    imageAlt: 'Bio-Remodelierung Behandlung für verbesserte Hautqualität und Feuchtigkeitsboost',
    title: 'Hyaluron Skinbooster',
    description:
        'Reine Hyaluronsäure verteilt sich fächerförmig im Gewebe. Ergebnis: intensive Hydratation, verbesserte Elastizität und sichtbar glattere, prallere Haut. Geeignet für Gesicht, Hals, Dekolleté u.v.m.',
    treatmentUrl: '/hyaluron/skinbooster'
};

export const profhilo: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-profhilo_hero.webp',
    imageAlt: 'Profhilo Bio-Remodeling Behandlung in Bremen',
    title: 'Biorevitalisierung (BAP-Technik)',
    description:
        'Die Anti-Aging-Sensation: Hochkonzentrierte Hyaluronsäure flutet das Gewebe und stimuliert 4 Arten von Kollagen und Elastin. Es polstert nicht künstlich auf, sondern "repariert" erschlafftes Gewebe.',
    treatmentUrl: '/hyaluron/profhilo'
};

export const filler: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-filler_hero.webp',
    imageAlt: 'Hyaluronsäure-Filler Behandlung für Volumen und Kontur',
    title: 'Hyaluronsäure-Filler',
    description:
        'Gezielter Volumenaufbau und Konturierung (z.B. Lippen, Wangen, Jawline) mit vernetzter Hyaluronsäure. Ausgleich von tiefen Falten und Wiederherstellung von Konturen & Proportionen.',
    treatmentUrl: '/hyaluron/filler'
};

export const hylase: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-hylase_hero.webp',
    imageAlt: 'Hylase-Behandlung zur Korrektur von Hyaluron',
    title: 'Hyaluronidase (Auflösung von Hyaluronsäure)',
    description:
        'Korrektur von unerwünschten oder misslungenen Hyaluron-Behandlungen durch das Enzym Hyaluronidase. Sichere und schnelle Auflösung von Fillern.',
    treatmentUrl: '/hyaluron/hylase'
};

// --- REGENERATION & LONGEVITY ---

export const polynukleotide: Treatment = {
    imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
    imageAlt: 'Polynukleotide zur Zellregeneration',
    title: 'Polynukleotide (PDRN)',
    description:
        'Molekulare Hautregeneration: DNA-Fragmente (aus Lachsforellen) fördern Zellerneuerung, verbessern Hautdicke und wirken entzündungshemmend. Ideal für Augenringe, Narben und Rosazea.',
    treatmentUrl: '/polynukleotide'
};

export const eigenblut: Treatment = {
    imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
    imageAlt: 'Eigenbluttherapie PRF für natürliche Hautregeneration',
    title: 'Eigenbluttherapie (PRP/PRF)',
    description:
        'Natürliche Regeneration durch körpereigene Wachstumsfaktoren. Das Blutkonzentrat stimuliert Kollagen und Zellerneuerung. 100% biologisch und verträglich.',
    treatmentUrl: '/eigenbluttherapie/vampir-lifting'
};

export const kollagenstimulation: Treatment = {
    imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
    imageAlt: 'Kollagenstimulation mit Radiesse oder Sculptra',
    title: 'Kollagenstimulation (Biostimulatoren)',
    description:
        'Nachhaltiger Aufbau des haut eigenen Stützgerüsts. Biostimulatoren (z.B. Calciumhydroxylapatit) regen die körpereigene Kollagenproduktion an für langfristig festere Haut.',
    treatmentUrl: '/kollagenstimulation'
};

// --- HAUTBILD & TEXTUR ---

export const microneedling: Treatment = {
    imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
    imageAlt: 'Medizinisches Microneedling Behandlung',
    title: 'Medizinisches Microneedling',
    description:
        'Feinste Nadelimpulse regen die Selbstheilung an. Poren verfeinern sich, Narben verblassen und Wirkstoffe können tief eingeschleust werden.',
    treatmentUrl: '/medizinisches-microneedling'
};

export const peeling: Treatment = {
    imageUrl: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
    imageAlt: 'Chemisches Peeling für einen frischen Teint',
    title: 'Chemisches Peeling',
    description:
        'Abtragung abgestorbener Hautschüppchen für einen strahlenden "Glow". Hilft bei Pigmentflecken, unreiner Haut und feinen Fältchen.',
    treatmentUrl: '/chemisches-peeling'
};

export const mesotherapieHaut: Treatment = {
    imageUrl: '/assets/mesotherapie/mesotherapie-haut_hero.webp',
    imageAlt: 'Mesotherapie Haut Behandlung',
    title: 'Mesotherapie (Meso-Glow)',
    description:
        'Injektion von Vitamin-Cocktails, Aminosäuren und unvernetztem Hyaluron direkt in die Haut. Revitalisiert müde Haut und sorgt für Frische.',
    treatmentUrl: '/mesotherapie/haut'
};

// --- BOTULINUMTOXIN (MIMIK & MEDIZINISCH) ---

export const botoxFalten: Treatment = {
    imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt: 'Faltenbehandlung mit Botulinumtoxin',
    title: 'Faltenbehandlung mit Botulinumtoxin',
    description:
        'Entspannung der mimischen Muskulatur zur Glättung von Zornesfalten, Stirnfalten und Krähenfüßen. Für einen entspannten, frischen Ausdruck.',
    treatmentUrl: '/botulinumtoxin/faltenbehandlung'
};

export const botoxAesthetic: Treatment = {
    imageUrl: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.png',
    imageAlt: 'Ästhetische Behandlungen mit Botox',
    title: 'Ästhetische Behandlungen mit Botulinumtoxin',
    description:
        'Spezielle ästhetische Botulinumtoxin-Behandlungen wie Lip Flip, Brow Lift, Gummy Smile und mehr.',
    treatmentUrl: '/botulinumtoxin/aesthetische-behandlungen',
};

export const mesobotox: Treatment = {
    imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
    imageAlt: 'Mesobotox Behandlung für feine Poren',
    title: 'Mesobotox (Micro-Botox)',
    description:
        'Verdünntes Botox wird oberflächlich injiziert. Glättet die Hautstruktur, verkleinert Poren und reduziert Talgproduktion, ohne die Mimik zu erstarren.',
    treatmentUrl: '/botulinumtoxin/mesobotox'
};

export const masseter: Treatment = {
    imageUrl: '/assets/botulinumtoxin/masseter_hero.webp',
    imageAlt: 'Masseter Botox Behandlung gegen Zähneknirschen',
    title: 'Masseter Botox (Facial Slimming)',
    description:
        'Behandlung des großen Kaumuskels. Hilft effektiv gegen Zähneknirschen (Bruxismus) und verschmälert optisch das untere Gesichtsdrittel (V-Shape).',
    treatmentUrl: '/botulinumtoxin/masseter'
};

export const hyperhidrose: Treatment = {
    imageUrl: '/assets/botulinumtoxin/hyperhidrose_hero.webp',
    imageAlt: 'Hyperhidrose Behandlung gegen starkes Schwitzen',
    title: 'Hyperhidrose (Starkes Schwitzen)',
    description:
        'Effektive Behandlung gegen übermäßiges Schwitzen (z.B. Achseln). Das Neurotoxin hemmt die Schweißdrüsenaktivität langanhaltend.',
    treatmentUrl: '/botulinumtoxin/hyperhidrose'
};

export const migraene: Treatment = {
    imageUrl: '/assets/botulinumtoxin/migraene_hero.webp',
    imageAlt: 'Botox Behandlung bei Migräne',
    title: 'Migräne-Therapie',
    description:
        'Entspannung bestimmter Muskelgruppen im Kopf- und Nackenbereich kann die Häufigkeit und Intensität von Migräneattacken deutlich reduzieren.',
    treatmentUrl: '/botulinumtoxin/migraene'
};

// --- KÖRPER & HAARE ---

export const fettWeg: Treatment = {
    imageUrl: '/assets/fett-weg-spritze/fett-weg-spritze_hero.webp',
    imageAlt: 'Fett-Weg-Spritze Behandlung',
    title: 'Fett-Weg-Spritze (Injektionslipolyse)',
    description:
        'Gezielte Reduktion kleiner, hartnäckiger Fettpolster (z.B. Doppelkinn, Hängebäckchen) durch Wirkstoffe, die Fettzellen auflösen.',
    treatmentUrl: '/fett-weg-spritze'
};

// Haarbehandlungen

export const mesoHaar: Treatment =
        {
            imageUrl: '/assets/mesotherapie/mesotherapie-haare_hero.webp',
            imageAlt: 'Mesotherapie für die Kopfhaut',
            title: 'Mesotherapie (Kopfhaut)',
            description:
                'Feine Mikroinjektionen versorgen die Kopfhaut gezielt. Die Kur wird an Befund und Ziele angepasst; Intervalle werden ärztlich geplant.',
            treatmentUrl: '/mesotherapie/haare'
        };
export const polyHaar: Treatment =
        {
            imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
            imageAlt: 'Polynukleotide zur Biostimulation',
            title: 'Polynukleotide für die Haare',
            description:
                'Moderne Biostimulation zur Unterstützung des Kopfhautmilieus und der Regenerationsprozesse – als Baustein im individuellen Plan.',
            treatmentUrl: '/polynukleotide'
        };
export const prfHaar: Treatment =
        {
            imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-haare_hero.webp',
            imageAlt: 'Mann mit Haarausfall',
            title: 'Eigenbluttherapie (PRP/PRF)',
            description:
                'Körpereigene Ansätze können – je nach Diagnose – in die Serie integriert werden. Details & Indikationsprüfung auf der Behandlungsseite.',
            treatmentUrl: '/eigenbluttherapie/haare' // bewusst interne Verlinkung, aber keine PRF-Keywords im Hub-SEO
        };
export const prfMicro: Treatment =
        {
            imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
            imageAlt: 'Microneedling der Kopfhaut',
            title: 'Kopfhaut-Microneedling + Eigenblut',
            description:
                'Gezielte Mikroreize zur Unterstützung des Kopfhautmilieus; kann seriell geplant und mit weiteren PRF kombiniert werden.',
            treatmentUrl: '/eigenbluttherapie/microneedling'
        };

/* ============================================================
   2. HILFREICHE GRUPPEN (Arrays) FÜR DEINE SEITEN
   ============================================================ */
// Haarausfallbehandlungen
export const haarausfall: Treatment[]=
    [
        mesoHaar,
        polyHaar,
        prfHaar
    ]


// Für die "Longevity & Hautqualität" Seite
export const longevityRegeneration: Treatment[] = [
    polynukleotide,
    eigenblut,
    kollagenstimulation
];

export const longevityHydration: Treatment[] = [
    skinbooster,
    profhilo,
    mesotherapieHaut
];

export const longevityTexture: Treatment[] = [
    microneedling,
    peeling,
    mesobotox
];

// Für eine eventuelle "Falten & Kontur" Seite
export const wrinkleTreatments: Treatment[] = [
    botoxFalten,
    filler,
    kollagenstimulation,
    fettWeg
];

// Für eine "Medizinische Ästhetik" Seite
export const medicalTreatments: Treatment[] = [
    masseter,
    hyperhidrose,
    migraene
];
/**
 * Faltenbehandlung
 */
export const faltenRelaxation: Treatment[] = [
    botoxFalten,
    // Optional: Hier könnte auch Masseter stehen, wenn man das Gesicht verschmälern will
];

// Kategorie 2: Volumen, Kontur & Lifting
export const faltenVolume: Treatment[] = [
    filler, // Hyaluron Filler
    kollagenstimulation, // Radiesse/Sculptra
    // Optional: Fadenlifting, falls du das anbietest
];

// Kategorie 3: Hautqualität & Regeneration (Die Basis gegen Knitterfältchen)
export const faltenSkinQuality: Treatment[] = [
    eigenblut,
    polynukleotide,
    mesotherapieHaut,
    microneedling,
    skinbooster // Hyaluron Skinbooster passt hier besser als bei "Volumen"
];
/**
 * Filler Page
 */
export const fillerPageTreatments: Treatment[] = [
    filler,              // Hyaluronsäure Filler
    kollagenstimulation, // Radiesse / Sculptra
    hylase               // WICHTIG: Die "Sicherheit" / Korrektur
];

export const medicalTreatment: Treatment[] = [
    botoxMigraene,
    botoxHyperhydrose,
    botoxMasseter
]

export const augenbehandlungen: Treatment[] = [
    // 1. Der "Goldstandard" für Augenringe & Regeneration
    polynukleotide, // Beschreibung enthält bereits "Ideal für Augenringe"

    // 2. Gegen mimische Falten (Krähenfüße)
    botoxFalten,    // Beschreibung enthält "Krähenfüße"

    // 4. Natürliche Regeneration ("Vampir-Lifting" für die Augen)
    eigenblut,      // Sehr beliebt zur Verdickung der dünnen Augenhaut

    // 5. Frischekick & Feuchtigkeitsfältchen (Knitterfältchen)
    mesotherapieHaut, // "Meso-Eyes": Vitamine für müde Augenpartien

    // 6. Strukturverbesserung
    microneedling,  // Straffung der Lider / Hautstruktur

    // 7. Sicherheit (Wichtig für das Vertrauen bei Augenbehandlungen)
    hylase          // Signalisiert: Wir können korrigieren (Sicherheit!)
];

export const botoxTreatments: Treatment[] = [
    mesobotox,
    botoxFalten,
    botoxMigraene,
    botoxHyperhydrose,
    botoxMasseter,
    botoxAesthetic
];