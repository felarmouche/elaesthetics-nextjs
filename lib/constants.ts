// Alle Preise zentral; Texte bleiben in den Seiten-Komponenten.
export const API_KEY = "sf_84ccl57a14h5b7gb760h4nec";
export const DOMAIN = "https://elaesthetics-bremen.de";
export const REPO_PREFIX = "elaesthetics-bremen-github"

export const PRICES = {
  botulinum: {
    faltenbehandlung: { zone1: 180, zone2: 330, zone3: 450 }, // 1/2/3 Zonen
    aesthetikWeitere: 180, // "ab"
    nefertiti: { kinn: 250, kinnKinnlinieHals: 350 }, // "ab"
    faceSlimming: 300, // "ab"
    microBotox: 450, // "ab"
    masseter: 280, // "ab"
    migraene: 550, // "ab"
    hyperhidrose: 450, // "ab"
  },

  hyaluronFiller: {
    fillerUnterspritzung: 300, // "ab"
    hyaluronidase: 180, // "ab"
    profhilo: 280,
    skinbooster1ml: 180, // "ab"
    skinbooster2ml: 330, // "ab"
    biorevitalisierungHyaluron: 280, // "ab"
    mesotherapieHaut: 200, // "ab ab"
    polynukleotideHautAugenHaare: 280, // "ab ab"
    chemischesPeeling: 180, // "ab"
  },

  prpPrf: {
    prpPrf: 350, // "ab"
    microneedling: 300, // "ab ab"
  },

  medizinischesMicroneedling: 250,

  haare: {
    prpPrf: 300, // "ab ab"
    mesotherapie: 200, // "ab ab"
    polynukleotide2ml: 280, // "ab ab"
  },

  fettWegSpritze: 180, // "ab" (präparatabhängig),

  biostimulation: {
    caHydroxylapatitPlusHyaluron: 550, // "ab"
  },
  chemPeeling: 180
} as const;
