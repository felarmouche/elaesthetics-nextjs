// Alle Preise zentral; Texte bleiben in den Seiten-Komponenten.
export const API_KEY = "sf_84ccl57a14h5b7gb760h4nec";
export const DOMAIN = "http://localhost:3000"; // TODO: Anpassen für Produktion
export const REPO_PREFIX = "elaesthetics-bremen-github"

export const PRICES = {
  botulinum: {
    faltenbehandlung: { zone1: 180, zone2: 300, zone3: 400 }, // 1/2/3 Zonen
    aesthetikWeitere: 120, // "ab"
    nefertiti: { kinn: 250, kinnKinnlinieHals: 350 }, // "ab"
    faceSlimming: 300, // "ab"
    microBotox: 350, // "ab"
    masseter: 280, // "ab"
    migraene: 550, // "ab"
    hyperhidrose: 450, // "ab"
  },

  hyaluronFiller: {
    fillerUnterspritzung: 250, // "ab"
    hyaluronidase: 180, // "ab"
    skinbooster1ml: 180, // "ab"
    skinbooster2ml: 330, // "ab"
    biorevitalisierungHyaluron: 280, // "ab"
    mesotherapieHaut: 250, // "Einzelbehandlung ab"
    polynukleotideHautAugenHaare: 280, // "Einzelbehandlung ab"
    chemischesPeeling: 180, // "ab"
  },

  prpPrf: {
    prpPrf: 300, // "ab"
    microneedling: 250, // "Einzelbehandlung ab"
  },

  medizinischesMicroneedling: 250,

  haare: {
    prpPrf: 300, // "Einzelbehandlung ab"
    mesotherapie: 250, // "Einzelbehandlung ab"
    polynukleotide2ml: 280, // "Einzelbehandlung ab"
  },

  fettWegSpritze: {
    injektionslipolyse: 180, // "ab" (präparatabhängig)
  },

  biostimulation: {
    caHydroxylapatitPlusHyaluron: 900, // "ab"
  },
} as const;
