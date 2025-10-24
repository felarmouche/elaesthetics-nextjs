import type { Metadata } from "next";
import { PRICES } from "@/lib/constants";
import { ab, fmt } from "@/lib/utils";
import { NavButton } from '@/components/preise/NavButton';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preise aller ästhetischen Behandlungen | EL Aesthetics",
  description:
    "Erfahren Sie mehr über die Preise für ästhetische Behandlungen bei EL Aesthetics. Unsere Preisliste umfasst Botulinumtoxin, Hyaluronsäure, PRF/PRP und mehr.",
  keywords:
    "Preise, ästhetische Behandlungen, Botulinumtoxin, Hyaluronsäure, PRF, PRP, EL Aesthetics",
};


export default function PreisePage() {

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-400 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light uppercase tracking-wide mb-2">
            Preisliste
          </h1>
          <p className="text-sm tracking-widest uppercase text-gray-600">
            EL Aesthetics
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className=" bg-white border-b border-gray-400 pb-12 z-10">
        <p className="px-[5%] w-full my-4 text-2xl md:text-3xl text-left md:text-center font-thin text-accent-dark">
          Alle Behandlungen in Bremen
        </p>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-3 justify-start mx-auto">
            <NavButton id='botulinum'>Botulinumtoxin</NavButton>
            <NavButton id='medizinisch'>Medizinische Indikationen</NavButton>
            <NavButton id='hyaluron'>Hyaluronsäure</NavButton>
            <NavButton id='bio'>Biostimulation</NavButton>
            <NavButton id='prp'>Eigenbluttherapie (PRF/PRP)</NavButton>
            <NavButton id='haare'>Haarbehadlungen</NavButton>
            <NavButton id='fett'>Fett-weg-Spritze</NavButton>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Botulinumtoxin */}
        <Section id="botulinum" title="Botulinumtoxin">
          <Treatment title="Faltenbehandlung">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <PriceBox label="1 Zone" price={fmt(PRICES.botulinum.faltenbehandlung.zone1)} />
              <PriceBox label="2 Zonen" price={fmt(PRICES.botulinum.faltenbehandlung.zone2)} />
              <PriceBox label="3 Zonen" price={fmt(PRICES.botulinum.faltenbehandlung.zone3)} />
            </div>
            <Description>
              Zornesfalte, Stirnfalten oder Lachfalten (&quot;Krähenfüße&quot;)
            </Description>
            <Note>
              Preis variiert je nach Verbrauch · Nachbehandlung nach 2 Wochen inkl.
            </Note>

          </Treatment>

          <Treatment title="Weitere ästhetische Behandlungen" price={ab(PRICES.botulinum.aesthetikWeitere)}>
            <Description>
              Bunny Lines, Erdbeerkinn, Zahnfleischlächeln, Augenbrauen-Lift, Jawline-Straffung, herabhängende Mundwinkel
            </Description>

          </Treatment>

          <Treatment title="Nefertiti Lift" >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <PriceBox label="Kinn/Kinnlinie" price={ab(PRICES.botulinum.nefertiti.kinn)} />
              <PriceBox label="Kinn, Kinnlinie, Hals" price={ab(PRICES.botulinum.nefertiti.kinnKinnlinieHals)} />
            </div>
            <Description>
              Straffung und Konturierung von Kinn, Jawline und Hals
            </Description>

          </Treatment>

          <Treatment title="Face-Slimming" price={ab(PRICES.botulinum.faceSlimming)}>
            <Description>
              Reduktion der Kaumuskulatur für ein schlankeres, konturierteres Gesicht
            </Description>

          </Treatment>

          <Treatment title="Mesobotox / Microbotox" price={ab(PRICES.botulinum.microBotox)}>
            <Description>
              Glass Skin-Effekt, sanfte Faltenreduktion. Auch bei Akne, fettiger oder großporiger Haut
            </Description>

          </Treatment>
        </Section>

        {/* Medizinische Indikationen */}
        <Section id="medizinisch" title="Medizinische Indikationen">
          <Treatment title="Bruxismus (Zähneknirschen)" price={ab(PRICES.botulinum.masseter)}>

          </Treatment>
          <Treatment title="Migräne" price={ab(PRICES.botulinum.migraene)}>

          </Treatment>
          <Treatment title="Hyperhidrose (starkes Schwitzen)" price={ab(PRICES.botulinum.hyperhidrose)}>

          </Treatment>
        </Section>

        {/* Hyaluronsäure */}
        <Section id="hyaluron" title="Hyaluronsäure">
          <Treatment title="Filler / Liquid Lifting" price={ab(PRICES.hyaluronFiller.fillerUnterspritzung)}>
            <Description>
              Falten, Wangen, Jawline, Kinn, Nasenkorrektur, Lippen · Präzise Korrekturen und Volumenaufbau
            </Description>

          </Treatment>

          <Treatment title="Hyaluronidase" price={ab(PRICES.hyaluronFiller.hyaluronidase)}>

          </Treatment>

          <Treatment title="Skinbooster 1 ml" price={ab(PRICES.hyaluronFiller.skinbooster1ml)}>

          </Treatment>

          <Treatment title="Skinbooster 2 ml" price={ab(PRICES.hyaluronFiller.skinbooster2ml)}>
            <Description>
              Biorevitalisierung von Gesicht, Hals, Dekolleté oder Händen
            </Description>

          </Treatment>

          <Treatment title="Biorevitalisierung mit hochreiner Hyaluronsäure" price={ab(PRICES.hyaluronFiller.biorevitalisierungHyaluron)}>

          </Treatment>

          <Treatment title="Mesotherapie" price={`Einzelbehandlung ${ab(PRICES.hyaluronFiller.mesotherapieHaut)}`}>
            <Description>
              Skinbooster mit Vitaminen, Aminosäuren, Co-Enzymen. Ideal für empfindliche Bereiche durch Nanosoft-Technik
            </Description>

          </Treatment>

          <Treatment title="Polynukleotide" price={`Einzelbehandlung ${ab(PRICES.hyaluronFiller.polynukleotideHautAugenHaare)}`}>
            <Description>
              Fisch-DNA für Hautregeneration. Anwendbar im Gesicht, Hals, Dekolleté, Augenbereich und gegen Haarausfall
            </Description>

          </Treatment>

          <Treatment title="Chemisches Peeling" price={ab(PRICES.hyaluronFiller.chemischesPeeling)}>
            <Description>
              Sommerpeeling ohne Photosensibilisierung · Straffung und Regeneration ohne Abschälung
            </Description>

          </Treatment>
        </Section>

        {/* PRP/PRF */}
        <Section id="prp" title="PRP/PRF">
          <Treatment title="Eigenbluttherapie" price={ab(PRICES.prpPrf.prpPrf)}>
            <Description>
              Gesicht, Hals, Dekolleté oder Kopfhaut · Biostimulation und Revitalisierung für Haut und Haare
            </Description>

          </Treatment>

          <Treatment title="Medizinisches Microneedling" price={`Einzelbehandlung ${ab(PRICES.prpPrf.microneedling)}`}>
            <Description>
              Hautverjüngung, Faltenreduktion, Pigmentierungen, Rosazea, Aknenarben
            </Description>

          </Treatment>
        </Section>

        {/* Haare */}
        <Section id="haare" title="Haare">
          <Treatment title="PRP/PRF-Eigenbluttherapie" price={`Einzelbehandlung ${ab(PRICES.haare.prpPrf)}`}>
            <Description>
              Natürliche Lösung gegen Haarausfall und zur Revitalisierung
            </Description>

          </Treatment>

          <Treatment title="Mesotherapie" price={`Einzelbehandlung ${ab(PRICES.haare.mesotherapie)}`}>
            <Description>
              Schonende Injektionstechnik für die Haargesundheit
            </Description>

          </Treatment>

          <Treatment title="Polynukleotide (2 ml)" price={`Einzelbehandlung ${ab(PRICES.haare.polynukleotide2ml)}`}>
            <Description>
              Unterstützung der Haarregeneration mit Fisch-DNA
            </Description>

          </Treatment>
        </Section>

        {/* Fett-weg-Spritze */}
        <Section id="fett" title="Fett-weg-Spritze">
          <Treatment title="Injektionslipolyse" price={`${ab(PRICES.fettWegSpritze.injektionslipolyse)} (präparatabhängig)`}>
            <Description>
              Dauerhafte Entfernung von Fettzellen für Gesicht und Körper
            </Description>
            <Note>
              Preis wird individuell nach Region und Materialmenge berechnet
            </Note>

          </Treatment>
        </Section>

        {/* Biostimulation */}
        <Section id="bio" title="Biostimulation">
          <Treatment title="Calciumhydroxylapatit + Hyaluronsäure" price={ab(PRICES.biostimulation.caHydroxylapatitPlusHyaluron)}>
            <Description>
              Kollagenstimulation und Verbesserung der Hautqualität mit sanftem Straffungseffekt
            </Description>

          </Treatment>
        </Section>

        {/* Footer */}
        <footer className="pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500 leading-relaxed">
            Die genannten Preise sind Richtwerte. Die individuelle Abrechnung richtet sich nach der Gebührenordnung der Ärzte (GOÄ).
            Die Kosten für ästhetische Behandlungen werden nicht von gesetzlichen oder privaten Krankenkassen übernommen.
          </p>
        </footer>
      </div>
    </main>
  );
}



function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="space-y-6 scroll-mt-24">
      <div className="flex items-center flex-col md:flex-row justify-start md:justify-between gap-4">
        <h2 className="w-full md:w-auto text-2xl font-light tracking-wide border-b border-black pb-3">
          {title}
        </h2>
        <CTAButton />
      </div>


      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

function Treatment({ title, price, children }: { title: string; price?: string; children?: React.ReactNode }) {
  return (
    <article className="border-l-2 border-black pl-6 py-2">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2 mb-2">
        <h3 className="text-lg font-normal">{title}</h3>
        {price && <span className="text-lg font-light whitespace-nowrap">{price}</span>}
      </div>
      {children}
    </article>
  );
}

function PriceBox({ label, price }: { label: string; price: string }) {
  return (
    <div className="border border-black p-3 text-center">
      <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">{label}</p>
      <p className="text-base font-light">{price}</p>
    </div>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-gray-600 leading-relaxed">
      {children}
    </p>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-gray-500 italic mt-2">
      {children}
    </p>
  );
}

function CTAButton() {
  return (
    <Link
      href="/kontakt"
      className="px-6 py-2 w-full md:w-auto text-center bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200"
    >
      Termin buchen
    </Link>
  );
}