import type { Metadata } from 'next';
import Script from 'next/script';
import {
  TOCItem,
  TableOfContents,
  ConsultationSection,
  CTASection,
  CTASectionProps,
  FAQSection,
  FAQSectionProps,
  HeroSection,
  HeroSectionProps,
  IntroSection,
  IntroSectionProps,
  TreatmentsSection,
  DetailedInfoSection, TreatmentsSectionProps,
  RelatedLinksSection,
  RelatedLink,
} from '@/components/TreatmentPageComponents';
import { getWebPageSchema } from '@/lib/schema';
import {longevityRegeneration, longevityTexture, longevityHydration} from '@/data/treatments'

export const metadata: Metadata = {
  title: 'Longevity & Hautqualität Bremen | Prävention & Regeneration | EL Aesthetics',
  description: 'Longevity in Bremen: Präventive Hautmedizin mit Biostimulatoren, Skinboostern & Microneedling. Hautalterung verlangsamen statt korrigieren. Beratung vereinbaren.',
  keywords: ['Longevity Hautpflege Bremen', 'Hautalterung verlangsamen Bremen', 'präventive Ästhetik Bremen', 'Hautqualität verbessern Bremen'],
  openGraph: {
    title: 'Longevity & Hautqualität in Bremen – EL Aesthetics',
    description: 'Präventive Hautmedizin in Bremen: Biostimulatoren, Skinbooster & Microneedling. Hautalterung verlangsamen statt korrigieren.',
    url: 'https://elaesthetics-bremen.de/longevity',
    siteName: 'EL Aesthetics Bremen',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: 'https://elaesthetics-bremen.de/assets/longevity/og-longevity-bremen.webp',
        width: 1200,
        height: 630,
        alt: 'Longevity & Hautqualität in Bremen – EL Aesthetics',
      },
    ],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/longevity',
  },
};

export default function LongevityPage() {
  const schema = getWebPageSchema({
    name: 'Longevity & Hautqualität in Bremen',
    description: 'Übersicht zu präventiven Hautmedizin-Therapien: Biostimulatoren, Skinbooster und Microneedling bei EL Aesthetics.',
    url: '/longevity',
    about: {
      type: 'MedicalTherapy',
      name: 'Longevity & Hautqualität',
      procedureType: 'NonSurgicalProcedure',
    },
  });

  const heroData: HeroSectionProps = {
    title: 'Longevity & Verbesserung der Hautqualität in Bremen',
    subtitle:
        'Verbesserung der Hautstruktur durch Kollagenstimulation und Regeneration durch Biostimulatoren, Polynukleotide, Eigenbluttherapie (PRP/PRF), med. Microneedling u.v.m.',
    imageSrc: '/assets/longevity/longevity_hero.webp',
    imageAlt: 'Longevity-Behandlung für Hautqualität und Prävention – EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Methoden entdecken', href: '#regeneration' }
  };

  const introData: IntroSectionProps = {
    title: 'Longevity - länger vital & gesund',
    content: [
      'Longevity-Behandlungen sind präventive, nicht-chirurgische Verfahren der ästhetischen Medizin, die darauf abzielen, die Hautalterung zu verlangsamen und die Hautqualität nachhaltig zu verbessern.',
      'Mit den Jahren verlangsamt sich die Erneuerung der Haut: Kollagen  und Elastinfasern nehmen ab, Feuchtigkeit geht verloren, die Haut wirkt müde. Moderne Anti Aging Methoden setzen hier an – sie aktivieren körpereigene Prozesse und stärken die Haut von innen.',
      'Verschiedene Biostimulatoren, Polynukleotide (PDRN), Eigenbluttherapie (PRP/PRF), medizinisches Microneedling und andere Verfahren: Diese Ansätze arbeiten mit körpereigenen bzw. biokompatiblen Substanzen und regen die natürliche Regeneration an.',
      'Das Besondere: Ergebnisse entwickeln sich schrittweise über Wochen, wirken natürlich und nachhaltig.',
      'Gemeinsam finden wir heraus, welche Strategie – ob Auffrischung, Straffung oder Texturverbesserung  für Sie am besten passt.'
    ]
  };

  const regenerationData: TreatmentsSectionProps = {
    title: 'Biostimulation & Kollagenaufbau',
    treatments: longevityRegeneration
  };

  const hydrationData: TreatmentsSectionProps = {
    title: 'Tiefenhydration & Bio-Remodeling',
    treatments: longevityHydration
  };

  const textureData: TreatmentsSectionProps = {
    title: 'Hautbild & Oberflächenerneuerung',
    treatments: longevityTexture
  };

  const relatedLinks: RelatedLink[] = [
    {
      href: '/hyaluron/skinbooster',
      label: 'Skinbooster',
      description: 'Tiefenhydration mit Hyaluronsäure – für mehr Feuchtigkeit, Glow und feinere Poren.',
    },
    {
      href: '/polynukleotide',
      label: 'Polynukleotide (PDRN)',
      description: 'Zellregeneration und Gewebereparatur für eine nachhaltig verbesserte Hautqualität.',
    },
    {
      href: '/eigenbluttherapie',
      label: 'Eigenbluttherapie (PRP/PRF)',
      description: 'Körpereigene Wachstumsfaktoren für natürliche Hauterneuerung und Kollagenaufbau.',
    },
    {
      href: '/medizinisches-microneedling',
      label: 'Medizinisches Microneedling',
      description: 'Kontrollierte Mikrokanäle zur Stimulation der Kollagen- und Elastinproduktion.',
    },
  ];

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zu Hauterneuerung & Anti‑Aging',
    faqs: [
      {
        question: 'Welche Methode ist die „beste” für mich?',
        answer:
            'Das hängt von Ihrem Hautbild ab. Für Feuchtigkeitsaufbau und Elastizität ist Bio-Remodelierung ideal. Bei beginnender Erschlaffung und für Zellregeneration sind Polynukleotide sinnvoll. Für natürliche Regeneration eignet sich Eigenblut (PRF/PRP). Strukturthemen profitieren von Microneedling oder sanften Peelings. Meist überzeugt ein individueller Mix.'
      },
      {
        question: 'Was hilft wirklich gegen Hautalterung?',
        answer:
            'Nachweislich wirksam: Kollagenstimulatoren, Hyaluronsäure‑Boost, Polynukleotide, Wachstumsfaktoren aus Eigenblut, medizinisches Microneedling und chemische Peelings. Diese Verfahren unterstützen körpereigene Regenerationsprozesse und verbessern die Hautqualität messbar.'
      },
      {
        question: 'Kann man Hautalterung rückgängig machen?',
        answer:
            'Komplett zurückdrehen lässt sie sich nicht. Ziel ist eine sichtbare Verjüngungstendenz: mehr Straffung, bessere Textur, frischere Ausstrahlung und Reduktion feiner Linien. Tiefe Falten können gemildert, nicht „gelöscht” werden. Realistische, natürliche Ergebnisse stehen im Fokus.'
      },
      {
        question: 'Welche Gesichtsbehandlung ist ideal bei dünner Haut?',
        answer:
            'Sanfte Optionen wie Bio-Remodelierung (Verbesserung der Hautdicke), Polynukleotide (schonende Zellregeneration) und PRF sind besonders geeignet. Kollagenstimulatoren können langfristig Festigkeit aufbauen. Zu aggressive Peelings oder zu intensives Needling vermeiden wir bei sehr dünner Haut.'
      },
      {
        question: 'Wie erhalte ich natürliches Volumen zurück?',
        answer:
            'Kollagenstimulatoren regen körpereigenen Aufbau an, PRF unterstützt Geweberegeneration. Bio-Remodelierung verbessert die Qualität und kann dezent polstern. Bei deutlichem Volumenverlust sind Hyaluron‑Filler oft die effizienteste Ergänzung – in natürlicher Dosierung.'
      },
      {
        question: 'Kollagen fördern – was wirkt?',
        answer:
            'Effektiv sind Kollagenstimulatoren (z. B. Calcium-Basis), medizinisches Microneedling, PRF/PRP und Polynukleotide. Mittelstarke Peelings können zusätzlich die Neubildung anstoßen. Ergebnisse brauchen Zeit und entwickeln sich über 8–12 Wochen.'
      },
      {
        question: 'Welche Ergebnisse sind realistisch?',
        answer:
            'Erwartbar sind: verbesserte Hautqualität (Feuchtigkeit, Elastizität, Festigkeit), feinere Poren, glattere Oberfläche, natürlichere Konturen und eine frischere Ausstrahlung. Nicht zu erwarten: vollständiges Entfernen tiefer Falten oder eine sofortige, dauerhafte Wirkung ohne Auffrischung.'
      },
      {
        question: 'Vorher‑Nachher – womit kann ich rechnen?',
        answer:
            'Nach 2–4 Wochen zeigen sich erste Verbesserungen, nach 4–8 Wochen mehr Straffung und gleichmäßigere Textur, nach 8–12 Wochen ist der Peak erreicht. Die Veränderungen wirken natürlich und bauen aufeinander auf.'
      },
      {
        question: 'Welche Nebenwirkungen sind möglich?',
        answer:
            'Meist mild und vorübergehend: Rötung, Schwellung, kleine Hämatome, Spannungsgefühl. Spezifisch je nach Methode (z. B. Schuppung nach Peelings). Kontraindikationen: u. a. Schwangerschaft/Stillzeit, akute Infektionen; Blutverdünner nur nach Rücksprache. Wir klären Sie vorab ausführlich auf.'
      },
      {
        question: 'Was kostet die Hauterneuerung in Bremen?',
        answer:
            'Richtwerte (GOÄ): Bio-Remodelierung ca. 400–450€ pro Sitzung (meist 2×), Polynukleotide ca. 350–500€ (Serie), PRF/PRP ca. 250–400€ (2–3×), Kollagenstimulation ca. 400–800€ je nach Areal, Microneedling ca. 150–300€ (3–6×), Peeling ca. 100–300€ je nach Tiefe. Kombis individuell kalkuliert.'
      }

    ]
  };

  const ctaData: CTASectionProps = {
    title: 'Bereit für Ihre persönliche Hautauffrischung?',
    subtitle:
        'Vereinbaren Sie ein unverbindliches Beratungsgespräch und entdecken Sie, welche Kombination Ihre Haut optimal unterstützt.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' }
  };

  // TOC aktualisiert, um auf die verschiedenen Sektionen zu verweisen
  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über Longevity' },
    { id: 'regeneration', label: 'Regeneration & Kollagen' },
    { id: 'hydration', label: 'Hydration' },
    { id: 'texture', label: 'Hautbild' },
    { id: 'faq', label: 'Häufige Fragen' },
  ];

  return (
      <div className="min-h-screen bg-white">
        <Script
          id="longevity-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <HeroSection {...heroData} />
        <TableOfContents items={tocItems} />
        <IntroSection {...introData} />
        <DetailedInfoSection />

        {/* Sektion 1: Core Longevity */}
        <div id="regeneration" className="scroll-mt-24">
          <TreatmentsSection {...regenerationData} />
        </div>

        {/* Sektion 2: Hydration (mit etwas weniger Padding oben, damit es kompakter wirkt) */}
        <div id="hydration" className="scroll-mt-24 -mt-16 md:-mt-24">
          <TreatmentsSection {...hydrationData} />
        </div>

        {/* Sektion 3: Texture (mit etwas weniger Padding oben) */}
        <div id="texture" className="scroll-mt-24 -mt-16 md:-mt-24">
          <TreatmentsSection {...textureData} />
        </div>

        <RelatedLinksSection title="Verwandte Behandlungen" links={relatedLinks} />
        <ConsultationSection />
        <FAQSection {...faqData} />
        <CTASection {...ctaData} />
      </div>
  );
}