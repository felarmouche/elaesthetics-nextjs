// app/impressum/page.tsx
// Next.js 13+ (App Router) – TypeScript/React single file page for the legal "Impressum".
// Styling uses Tailwind CSS. Drop this file into /app/impressum/page.tsx.

import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Impressum | EL Aesthetics Bremen",
  description:
    "Impressum der Privatpraxis für regenerative und ästhetische Medizin – EL Aesthetics, Ärztin Ola Alona El-Armouche, 28355 Bremen.",
  alternates: { canonical: "/impressum" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Impressum | EL Aesthetics Bremen",
    description:
      "Rechtliche Angaben (Impressum) zur Privatpraxis für regenerative und ästhetische Medizin in Bremen.",
    url: "/impressum",
    siteName: "EL Aesthetics Bremen",
    locale: "de_DE",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "EL Aesthetics",
  legalName: "EL Aesthetics – Privatpraxis für regenerative und ästhetische Medizin",
  url: "https://elaesthetics-bremen.de/",
  telephone: "+49 155 66919635",
  email: "info@elaesthetics-bremen.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Richtepad 14",
    postalCode: "28355",
    addressLocality: "Bremen",
    addressCountry: "DE",
  },
  medicalSpecialty: ["RegenerativeMedicine", "CosmeticSurgery"],
  founder: {
    "@type": "Person",
    name: "Ola Alona El-Armouche",
    jobTitle: "Ärztin",
  },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Script
        id="schema-org-impressum"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <h1 className="text-3xl font-bold tracking-tight">Impressum</h1>
      <p className="mt-2 text-sm text-neutral-600">
        Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV
      </p>

      {/* Praxis / Anbieter */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Anbieter</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <p className="font-medium">EL Aesthetics</p>
          <p>Ola Alona El-Armouche</p>
          <p>Ärztin</p>
          <p>Privatpraxis für regenerative und ästhetische Medizin</p>
          <address className="not-italic">
            Richtepad 14
            <br />
            28355 Bremen
          </address>
        </div>
      </section>

      {/* Kontakt */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Kontakt</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <ul className="space-y-1">
            <li>
              Telefon: {" "}
              <a className="underline" href="tel:+4915566919635">
                +49 (0) 155 66919635
              </a>
            </li>
            <li>
              E-Mail: {" "}
              <a className="underline" href="mailto:info@elaesthetics-bremen.de">
                info@elaesthetics-bremen.de
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Aufsichtsbehörde */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Aufsichtsbehörde</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <p>Berufsaufsicht der Ärztekammer Bremen</p>
          <address className="not-italic">
            Schwachhauser Heerstr. 30
            <br />
            28209 Bremen
          </address>
          <a
            className="mt-2 inline-block underline"
            href="https://aekhb.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://aekhb.de/
          </a>
        </div>
      </section>

      {/* Berufsbezeichnung & Regelungen */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium">Berufsbezeichnung</dt>
            <dd className="sm:col-span-2">Arzt</dd>
            <dt className="font-medium">Zuständige Kammer</dt>
            <dd className="sm:col-span-2">
              Ärztekammer Bremen
              <br />
              Schwachhauser Heerstr. 30
              <br />
              28209 Bremen
            </dd>
            <dt className="font-medium">Verliehen in</dt>
            <dd className="sm:col-span-2">Deutschland</dd>
          </dl>
          <div className="mt-4">
            <p className="font-medium">Es gelten folgende berufsrechtliche Regelungen:</p>
            <p>
              Berufsordnung der Ärztekammer Bremen – einsehbar unter:{" "}
              <a
                className="underline"
                href="https://aekhb.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://aekhb.de/
              </a>
            </p>
            <p className="mt-2">
              Approbation als Ärztin erteilt durch Niedersächsisches Landesamt für Soziales, Jugend und Familie,
              Landesprüfungsamt für Heilberufe – einsehbar unter:{" "}
              <a
                className="underline"
                href="https://soziales.niedersachsen.de/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://soziales.niedersachsen.de/
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Berufshaftpflicht */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Angaben zur Berufshaftpflichtversicherung</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <p className="font-medium">Name und Sitz des Versicherers</p>
          <p>Deutsche Ärzteversicherung Allgemeine</p>
          <p>Zweigniederlassung der AXA Vers. AG</p>
          <address className="not-italic">51171 Köln</address>
          <p className="mt-3 font-medium">Geltungsraum der Versicherung</p>
          <p>Deutschland</p>
        </div>
      </section>

      {/* Verbraucherstreitbeilegung */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Verbraucher&shy;streit&shy;beilegung / Universal&shy;schlichtungs&shy;stelle</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>

      {/* Verantwortlich i.S.d. § 55 Abs. 2 RStV */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <p>Ola Alona El-Armouche</p>
          <address className="not-italic">
            Richtepad 14
            <br />
            28355 Bremen
          </address>
        </div>
      </section>

      {/* Quelle */}
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Quelle</h2>
        <div className="mt-3 rounded-2xl border p-5">
          <a
            className="underline"
            href="https://www.e-recht24.de/impressum-generator.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.e-recht24.de/impressum-generator.html
          </a>
        </div>
      </section>
    </main>
  );
}
