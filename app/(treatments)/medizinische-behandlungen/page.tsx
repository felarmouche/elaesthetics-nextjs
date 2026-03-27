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
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema } from '@/lib/schema';
import { medicalTreatment } from "@/data/treatments";

export const metadata: Metadata = {
  title: 'Medizinische Behandlungen Bremen',
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
      "Bei Bruxismus, chronischer Migräne und Hyperhidrose",
    imageSrc: "/assets/medizinische-behandlungen/medizinische-behandlunge_hero.webp",
    imageAlt: "Medizinische Botulinumtoxin-Behandlung bei Bruxismus und Migräne – EL Aesthetics Bremen",
    primaryCTA: { text: "Beratung anfragen", href: "/kontakt" },
    secondaryCTA: { text: "Behandlungen ansehen", href: "#treatments" }
  };

  const introData: IntroSectionProps = {
    title: "Wie hilft Botulinumtoxin bei Bruxismus, Migräne und Hyperhidrose?",
    content: [
      "Es kann zur gezielten Therapie von Bruxismus, chronischer Migräne und Hyperhidrose eingesetzt werden. Richtig angewendet können Symptome bei chronischer Migräne, Hyperhidrose und Bruxismus spürbar reduziert werden.",
      "Die Behandlung erfolgt durch gezielte Injektionen in die betroffenen Muskeln oder Drüsen – mit dem Ziel, die überaktive Muskulatur zu entspannen, die Schweißproduktion zu hemmen oder die Migränefrequenz zu senken.",
      "Die Therapie wird individuell auf Ihre Bedürfnisse abgestimmt, um bestmögliche Ergebnisse bei maximaler Sicherheit zu erzielen."
    ]

  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Die Behandlungen im Überblick",
    treatments: medicalTreatment
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
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
    title: "Fragen zu den Behandlungen?",
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
      <ConsultationSection />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
