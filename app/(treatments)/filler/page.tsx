import type { Metadata } from 'next';
import {
  TableOfContents,
  TOCItem,
  ConsultationSection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps,
  CTASection
} from '@/components/TreatmentPageComponents';

// Import der zentralen Daten
import { fillerPageTreatments } from '@/data/treatments';

export const metadata: Metadata = {
  title: 'Filler in Bremen – Volumenaufbau & Konturierung',
  description:
      'Spezialisten für Hyaluron-Filler & Kollagenstimulation in Bremen. Natürliche Konturierung von Lippen, Jawline & Wangen. Ohne „künstlichen“ Look.',
  openGraph: {
    title:
        'Filler in Bremen – Volumenaufbau & Konturierung | EL Aesthetics',
    description:
        'Entdecken Sie die Möglichkeiten der Filler-Behandlungen in Bremen für eine natürliche Konturierung von Lippen, Wangen, Kinn & Jawline. Hyaluronsäure Filler und Biostimulatoren für harmonische Ergebnisse.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/filler/og-image-filler-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/filler',
  },
};

export default function FillerHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Filler & Volumenaufbau in Bremen',
    subtitle:
        'Hyaluronsäure-Filler & Calciumhydroxylapatit (CaHA). Sanftes Lifting, Konturierung & Volumenaufbau für Wangen, Kinn, Jawline & Lippen.',
    imageSrc: '/assets/filler/filler_hero.webp',
    imageAlt: 'Filler in Bremen: Konturierung von Lippen, Wangen, Kinn & Jawline – natürliche Ergebnisse ohne „künstlichen“ Look',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Volumenaufbau & Konturierung mit Fillern',
    content: [
      'Ich biete Filler-Behandlungen mit Hyaluronsäure und Calciumhydroxylapatit (CaHA) an. Diese minimalinvasiven Verfahren ermöglichen es, gezielt Volumen aufzubauen, Konturen zu definieren und ein sanftes Lifting zu erzielen – ganz ohne operativen Eingriff.',
      'Filler eignen sich besonders für die Konturierung von Wangen, Kinn und Jawline sowie für die Formung und Volumensteigerung der Lippen. Durch die Verwendung hochwertiger, biokompatibler Materialien können natürliche Ergebnisse erzielt werden, die Ihre individuellen Gesichtszüge harmonisch unterstreichen – ohne den „künstlichen“ Look.',
      'Jede Behandlung wird individuell auf Ihre Wünsche und anatomischen Gegebenheiten abgestimmt. In einem ausführlichen Beratungsgespräch analysiere ich gemeinsam mit Ihnen Ihre Ziele und entwickle ein maßgeschneidertes Behandlungskonzept. Dabei lege ich großen Wert auf Sicherheit, Präzision und ein ästhetisches Ergebnis, das zu Ihnen passt.',
    ],
  };

  // --- HIER NUTZEN WIR JETZT DIE ZENTRALEN DATEN (inkl. Hylase) ---
  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen zur Konturierung & Volumenaufbau',
    treatments: fillerPageTreatments,
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Fillern (Hyaluron & CaHA)',
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Hyaluron- und CaHA-Fillern?',
        answer:
            'Hyaluron (HA) bindet Wasser, polstert Gewebe und kann bei Bedarf mit Hyaluronidase wieder aufgelöst werden. Calciumhydroxylapatit (CaHA) liefert zunächst Struktur über ein Trägergel und stimuliert zusätzlich körpereigene Kollagenbildung; es ist nicht auflösbar und eignet sich eher für Kontur und Straffheit.',
      },
      {
        question: 'Für welche Areale eignen sich Hyaluron bzw. CaHA?',
        answer:
            'Hyaluron: z. B. Lippen, Nasolabial-/Marionettenfalten, Tränenrinne*, Wangen, Kinn, Jawline, Nasenkorrektur ohne OP. CaHA: vor allem Wangen/Mittelgesicht, Jawline, Kinn, Hände; in verdünnter Form auch für Hals/Dekolleté. *CaHA wird üblicherweise nicht in Lippen/Tränenrinne eingesetzt.',
      },
      {
        question: 'Wie lange hält das Ergebnis?',
        answer:
            'Hyaluron: je nach Produkt/Region/Metabolismus meist ca. 6–18 Monate. CaHA: häufig 12–18+ Monate durch Kollagenneubildung. Haltbarkeit ist individuell und variiert je nach Lebensstil, Areal und Dosierung (keine Heilversprechen).',
      },
      {
        question: 'Wie viele Sitzungen bzw. wie viel Material wird benötigt?',
        answer:
            'Oft genügt eine Sitzung; gelegentlich folgt ein Feintuning nach 2–6 Wochen. Die benötigte Menge ist individuell (Orientierung: je nach Region häufig 1–2 ml zu Beginn). Ein konkreter Plan wird im Beratungsgespräch erstellt.',
      },
      {
        question: 'Ab wann sehe ich das Resultat?',
        answer:
            'Hyaluron zeigt in der Regel sofort sichtbare Effekte (leichte Schwellung möglich). Bei CaHA ist ein Anfangseffekt vorhanden; der biostimulative Anteil entwickelt sich über 6–12 Wochen.',
      },
      {
        question: 'Gibt es Downtime oder Nebenwirkungen?',
        answer:
            'Vorübergehende Rötung, Schwellung oder kleine Hämatome sind möglich und klingen meist in 1–3 Tagen ab. Selten: Knötchen/Asymmetrien; sehr selten Gefäßkomplikationen. Wir arbeiten mit sicheren Techniken und Aufklärung – ohne Heilversprechen.',
      },
      {
        question: 'Kann Hyaluron wieder aufgelöst werden?',
        answer:
            'Ja. Unerwünschte Effekte mit Hyaluron können in der Regel mit Hyaluronidase adressiert werden. CaHA ist nicht auflösbar; daher erfolgt hier eine besonders sorgfältige Indikationsstellung und Technik.',
      },
      {
        question: 'Sind Kombinationen von Hyaluron und CaHA möglich?',
        answer:
            'Ja. Häufig wird mit CaHA Kontur/Struktur aufgebaut und mit Hyaluron fein modelliert oder hydriert. Reihenfolge, Intervalle und Materialwahl werden individuell geplant.',
      },
      {
        question: 'Wer ist (vorübergehend) nicht geeignet?',
        answer:
            'Bei Schwangerschaft/Stillzeit, akuten Infektionen, entzündlichen Hautzuständen im Behandlungsareal oder unmittelbar nach zahnärztlichen Eingriffen/Impfungen wird in der Regel verschoben. Bei bestimmten Grunderkrankungen/Medikationen ist eine individuelle Abklärung erforderlich.',
      },
      {
        question: 'Wie bereite ich mich vor und was ist nach der Behandlung zu beachten?',
        answer:
            'Vorher: Blutverdünner/hochdosierte Omega-3, Alkohol und große Hitze möglichst vermeiden (nach ärztlicher Rücksprache). Nachher: 24 h schwere Sportarten/Hitze meiden, Areal schonen, keine Massage außer empfohlen. Auffälligkeiten bitte direkt melden.',
      },
      {
        question: 'Was kosten Filler-Behandlungen?',
        answer:
            'Die Kosten richten sich nach Produkt, Menge und Region. Im Beratungstermin erhalten Sie einen transparenten, individuellen Kostenplan.',
      },
    ],
  };

  // --- CTA KORRIGIERT: Jetzt passend zum Thema Filler ---
  const ctaData: CTASectionProps = {
    title: 'Bereit für mehr Definition & Volumen?',
    subtitle:
        'Vereinbaren Sie Ihren Termin zur Filler-Behandlung in Bremen. Ob sinnliche Lippen, eine definierte Jawline, Wangenaufbau oder Korrektur von Asymmetrien – wir beraten Sie ehrlich zu den Möglichkeiten mit Hyaluron und Biostimulatoren.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Filler & Methoden' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' }
  ];

  return (
      <div className="min-h-screen bg-white">
        <HeroSection {...heroData} />
        <TableOfContents items={tocItems} />
        <IntroSection {...introData} />
        <TreatmentsSection {...treatmentsData} />
        <ConsultationSection />
        {/* FAQSection generiert JSON-LD automatisch */}
        <FAQSection {...faqData} />
        <CTASection {...ctaData}/>
      </div>
  );
}