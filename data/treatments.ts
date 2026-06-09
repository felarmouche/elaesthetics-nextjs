import { Treatment } from "@/components/TreatmentPageComponents";

/* ============================================================
   1. EINZELNE BEHANDLUNGS-OBJEKTE (Wiederverwendbar)
   ============================================================ */

// --- HYALURON & BIO-REMODELING & HYDRATION ---
export const botoxMasseter: Treatment =
{
    imageUrl: "/assets/botulinumtoxin/botox-masseter_hero.webp",
    imageAlt: "Masseter-Botox gegen Zähneknirschen (Bruxismus) in Bremen",
    title: "Masseter-Botox",
    description:
        "Zielgerichtete Injektionen in den Kaumuskel können Knirschen und Pressen reduzieren, Kieferschmerzen lindern und das Gesicht optisch verschmälern.",
    treatmentUrl: "/botulinumtoxin/masseter"
};
export const botoxMigraene: Treatment =
{
    imageUrl: "/assets/botulinumtoxin/botox-migraene_hero.webp",
    imageAlt: "Botulinumtoxin zur Migräneprophylaxe in Bremen",
    title: "Botulinumtoxin bei Migräne",
    description:
        'Entspannung bestimmter Muskelgruppen im Kopf- und Nackenbereich mit Botulinumtoxin kann die Häufigkeit und Intensität von Migräneattacken reduzieren.',
    treatmentUrl: "/botulinumtoxin/migraene"
};
export const botoxHyperhydrose: Treatment =
{
    imageUrl: "/assets/botulinumtoxin/botox-hyperhidrose_hero.webp",
    imageAlt: "Behandlung von Hyperhidrose (übermäßiges Schwitzen) mit Botulinumtoxin in Bremen",
    title: "Botulinumtoxin bei Hyperhidrose (starkem Schwitzen)",
    description:
        "In Achseln, Handflächen oder Fußsohlen kann Botulinumtoxin die Schweißproduktion vorübergehend reduzieren.",
    treatmentUrl: "/botulinumtoxin/hyperhidrose"
}

export const skinbooster: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
    imageAlt: 'Bio-Remodelierung Behandlung für verbesserte Hautqualität und Feuchtigkeitsboost',
    title: 'Hyaluron Skinbooster',
    description:
        'Reine Hyaluronsäure verteilt sich oberflächlich im Gewebe. Ziel: intensive Hydratation, verbesserte Elastizität und sichtbar glattere, prallere Haut. Geeignet für Gesicht, Hals, Dekolleté u.v.m.',
    treatmentUrl: '/hyaluron/skinbooster'
};

export const profhilo: Treatment = {
    imageUrl: '/assets/hyaluron/hyaluron-profhilo_hero1.webp',
    imageAlt: 'Profhilo Bio-Remodeling Behandlung in Bremen',
    title: 'Biorevitalisierung (BAP-Technik)',
    description:
        'Hochkonzentrierte Hyaluronsäure flutet das Gewebe und stimuliert die Produktion von Kollagen und Elastin. Das Ziel ist eine Hydratation und Verbesserung der Hautqualität.',
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
        'Korrektur von unerwünschten Filler-Behandlungen durch das Enzym Hyaluronidase.',
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
    imageAlt: 'Vampir-Lifting mit körpereigenen Wachstumsfaktoren (PRF/PRP)',
    title: 'Vampir-Lifting (PRP/PRF)',
    description:
        'Natürliche Regeneration durch körpereigene Wachstumsfaktoren. Das Blutkonzentrat stimuliert Kollagen und Zellerneuerung. 100% biologisch und verträglich.',
    treatmentUrl: '/eigenbluttherapie/vampir-lifting'
};

export const biostimulation: Treatment = {
    imageUrl: '/assets/biostimulation/biostimulation_hero.webp',
    imageAlt: 'Biostimulation mit Radiesse oder Sculptra',
    title: 'Biostimulation (Biostimulatoren)',
    description:
        'Nachhaltiger Aufbau des hauteigenen Stützgerüsts. Biostimulatoren (z.B. Calciumhydroxylapatit) regen die körpereigene Kollagenproduktion an für langfristig festere Haut.',
    treatmentUrl: '/biostimulation'
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
    imageUrl: '/assets/mesotherapie/nctf_hero.webp',
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
    imageUrl: '/assets/botulinumtoxin/aesthetische-behandlungen_hero.webp',
    imageAlt: 'Ästhetische Behandlungen mit Botox',
    title: 'Ästhetische Behandlungen mit Botulinumtoxin',
    description:
        'Spezielle ästhetische Botulinumtoxin-Behandlungen wie Lip Flip, Brow Lift, Gummy Smile und mehr.',
    treatmentUrl: '/botulinumtoxin/aesthetische-behandlungen',
};

export const mesobotox: Treatment = {
    imageUrl: '/assets/botulinumtoxin/baby-botox_hero.webp',
    imageAlt: 'Mesobotox Behandlung für feine Poren',
    title: 'Micro-Botox (Baby-Botox)',
    description:
        'Verdünntes Botulinumtoxin wird oberflächlich injiziert. Es kann die Hautstruktur verfeinern, Poren optisch verkleinern und die Talgproduktion reduzieren.',
    treatmentUrl: '/botulinumtoxin/mesobotox'
};

export const hyperhidrose: Treatment = {
    imageUrl: '/assets/botulinumtoxin/botox-hyperhidrose_hero.webp',
    imageAlt: 'Hyperhidrose Behandlung gegen starkes Schwitzen',
    title: 'Hyperhidrose (Starkes Schwitzen)',
    description:
        'Botulinumtoxin kann übermäßiges Schwitzen (z. B. Achseln) reduzieren.',
    treatmentUrl: '/botulinumtoxin/hyperhidrose'
};

export const migraene: Treatment = {
    imageUrl: '/assets/botulinumtoxin/botox-migraene_hero.webp',
    imageAlt: 'Botox Behandlung bei Migräne',
    title: 'Migräne-Therapie',
    description:
        'Entspannung bestimmter Muskelgruppen im Kopf- und Nackenbereich kann die Häufigkeit und Intensität von Migräneattacken reduzieren.',
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
    title: 'PRF/PRP-Eigenbluttherapie für die Haare',
    description:
        'Körpereigene Ansätze können – je nach Diagnose – in die Serie integriert werden. Details & Indikationsprüfung auf der Behandlungsseite.',
    treatmentUrl: '/eigenbluttherapie/haare'
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

export const eigenblutMicroneedling: Treatment = {
    imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie-microneedling_hero.webp',
    imageAlt: 'Microneedling mit Eigenblut (PRF) für die Haut',
    title: 'Microneedling mit Eigenbluttherapie',
    description:
        'Zeitversetzte Kombination von medizinischem Microneedling mit PRF/PRP zur intensiven Regeneration – z. B. bei Aknenarben.',
    treatmentUrl: '/eigenbluttherapie/microneedling'
};

/* ============================================================
   2. HILFREICHE GRUPPEN (Arrays) FÜR DEINE SEITEN
   ============================================================ */
// Haarausfallbehandlungen
export const haarausfall: Treatment[] =
    [
        mesoHaar,
        polyHaar,
        prfHaar
    ]


// Für die "Longevity & Hautqualität" Seite
export const longevityRegeneration: Treatment[] = [
    polynukleotide,
    eigenblut,
    biostimulation
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

// Für eine "Medizinische Ästhetik" Seite (verwendet in medizinische-behandlungen)
// Hinweis: medicalTreatment (Singular) wird auf der Seite importiert
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
    biostimulation, // Radiesse/Sculptra
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
 * Hyaluron Hub
 */
export const hyaluronTreatments: Treatment[] = [
    filler,
    skinbooster,
    profhilo,
    hylase
];

/**
 * Filler Page
 */
export const fillerPageTreatments: Treatment[] = [
    filler,              // Hyaluronsäure Filler
    biostimulation, // Radiesse / Sculptra
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
