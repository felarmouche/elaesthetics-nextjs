import type { Metadata } from 'next';
import {
  TOCItem,
  TableOfContents,
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
  TreatmentsSection,
  TreatmentsSectionProps,
  DetailedInfoSection
} from '@/components/TreatmentPageComponents';

export const metadata: Metadata = {
  title: 'Longevity & Hautqualität in Bremen',
  description:
    'Longevity & Hautqualität in Bremen. Hautqualität, Kollagenstimulation und Biostimulation. Jetzt Beratung vereinbaren!',
  openGraph: {
    title: 'Bremen: Longevity & Hautqualität – natürlich und ohne OP',
    description:
      'Moderne Anti‑Aging‑Konzepte: Von Bio-Remodelierung über Polynukleotide bis PRF. Sichtbar frischere Haut, gesteigerte Elastizität und bessere Hautstruktur – ohne Operation in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/longevity/og-longevity-bremen.webp']
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/longevity'
  },
  robots: {
    index: true,
    follow: true
  },
  
};

export default function LongevityPage() {
  const heroData: HeroSectionProps = {
    title: 'Longevity & Verbesserung der Hautqualität in Bremen',
    subtitle:
      'Verbesserung der Hautstruktur durch Kollagenstimulation und Regeneration durch Biostimulatoren, Polynukleotide, Eigenbluttherapie (PRP/PRF), med. Microneedling u.v.m.',
    imageSrc: '/assets/longevity/longevity_hero.webp',
    imageAlt:
      'Gesichtsbehandlung zur Auffrischung und Straffung der Haut bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Methoden entdecken', href: '#treatments' }
  };

  const introData: IntroSectionProps = {
    title: 'Longevity - länger vital & gesund',
    content: [
        'Statt nur kurzfristige ästhetische Korrekturen vorzunehmen, setzt Longevity auf einen ganzheitlichen Ansatz: Es geht darum, die Haut von innen heraus zu stärken und ihre natürliche Funktion langfristig zu erhalten. Ziel ist es, den Alterungsprozess zu verlangsamen – nicht nur das äußere Erscheinungsbild zu verbessern, sondern die Haut länger gesund, widerstandsfähig und vital zu halten.',
        'Mit den Jahren verlangsamt sich die Erneuerung der Haut: Kollagen  und Elastinfasern nehmen ab, Feuchtigkeit geht verloren, die Haut wirkt müde. Moderne Anti Aging Methoden setzen hier an – sie aktivieren körpereigene Prozesse und stärken die Haut von innen.',
        'Verschiedene Biostimulatoren, Polynukleotide (PDRN), Eigenbluttherapie (PRP/PRF), medizinisches Microneedling und andere Verfahren: Diese Ansätze arbeiten mit körpereigenen bzw. biokompatiblen Substanzen und regen die natürliche Regeneration an.',
        'Das Besondere: Ergebnisse entwickeln sich schrittweise über Wochen, wirken natürlich und nachhaltig.', 
        'Gemeinsam finden wir heraus, welche Strategie – ob Auffrischung, Straffung oder Texturverbesserung  für Sie am besten passt.'
      ]
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Verfahren zur Hautverjüngung und Straffung der Haut',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt:
          'Bio-Remodelierung Behandlung für verbesserte Hautqualität und Feuchtigkeitsboost in Bremen',
        title: 'Hyaluron Skinbooster (Klassisch & BAP-Technik)',
        description:
          'Reine Hyaluronsäure verteilt sich fächerförmig im Gewebe. Ergebnis: intensiver Hydratation, verbesserte Elastizität und sichtbar glattere, prallere Haut. Geeignet für Gesicht, Hals, Dekolleté u.v.m.',
        treatmentUrl: '/hyaluron/skinbooster'
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt:
          'Polynukleotide zur Zellregeneration und zum Kollagenaufbau in Bremen',
        title: 'Polynukleotide (PDRN‑Therapie)',
        description:
          'Molekulare Hautregeneration: Spezifische aus der Lachsforelle gewonnene DNA‑Fragmente fördern die Zellerneuerung, verbessern die Hautstruktur und Hautdicke & wirken entzündungshemmend. Besonders geeignet für sensible Zonen wie Augenregion, Hals und Hände, Behandlung von Narben, Rosazea u.v.m.',
        treatmentUrl: '/polynukleotide'
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
        imageAlt: 'Eigenbluttherapie PRF für natürliche Hautregeneration in Bremen',
        title: 'Eigenbluttherapie (PRP/PRF)',
        description:
          'Natürlich Regeneration durch körpereigene Zellen und Wachstumsfaktoren: Das aus Blut gewonnene Konzentrat stimuliert Kollagenbildung, Zellreparatur und Durchblutung. Besonders geeignet bei der Behandlung von Akne, Akne-Narben, Rosazea, Augenringen, Haarausfall und zur allgemeinen Haut- und Haargesundheit.',
        treatmentUrl: '/eigenbluttherapie/vampir-lifting'
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
        imageAlt:
          'Bild zur Kollagenstimulation und Biostimution',
        title: 'Kollagenstimulation / Biostimution',
        description:
          'Biostimulatoren auf Basis von Calciumhydroxylapatit und Hyaluronsäure: Sie regen schrittweise und nachhaltig die körpereigene Kollagenproduktion an, verbessern Hautdicke, Elastizität und Festigkeit. Ideal zur Behandlung von Volumenverlust, Hauterschlaffung und zur allgemeinen Hautverjüngung. Nicht nur für das Gesicht geeignet.',
        treatmentUrl: '/kollagenstimulation'
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
        imageAlt:
          'Medizinisches Microneedling für Kollagenaufbau und ebenmäßige Haut in Bremen',
        title: 'Medizinisches Microneedling',
        description:
          'Kontrollierte Mikroverletzungen setzen gezielte Reize zur Hauterneuerung. Durch Mikrokanäle können gezielt Wirkstoffe in die Haut eingeschleust werden. Besonders geeignet für die Hauterneuerung, Verkleinerung der Poren, Verminderung von Fältchen, Akne-Narben, Pigmentstörungen und zur Verbesserung der Hautstruktur. ',
        treatmentUrl: '/medizinisches-microneedling'
      },
      {
        imageUrl: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
        imageAlt:
          'Chemisches Peeling zur Hauterneuerung und für ebenmäßigen Teint in Bremen',
        title: 'Chemisches Peeling',
        description:
          'Kombination verschiedener chem. Substanzen zur Hauterneuerung (z.B. TCA, Wasserstoffperoxit & Kojisäure). Auch für Sommermonate geeignet. Sie regeneriert die Haut, ohne eine Schälung der oberen Hautschicht zu verursachen. Zur Hautstraffung, Verbesserung der Hautstruktur und Reduzierung von Falten, Narben und Hyperpigmentierung.',
        treatmentUrl: '/chemisches-peeling'
      },
    ]
  };
  const consultationData: ConsultationSectionProps = {
    title: 'Welche Methode passt zu Ihnen?',
    description: [
      'Die Auswahl der passenden Behandlung hängt von Hauttyp, Alter, Ausgangszustand und Ziel ab. Was bei einer Person hervorragend funktioniert, muss nicht automatisch Ihr Best‑Match sein.',
      'Als Fachärztin für ästhetische Medizin analysiere ich Ihre Haut: Qualität und Dicke, Feuchtigkeitsstatus, Elastizität, vorhandene Pigmentierungen oder Strukturthemen. Darauf basierend entwickeln wir einen maßgeschneiderten Plan für Straffung, Glättung und Glow.',
      'Häufig sind Kombinationen besonders effektiv: Bio-Remodelierung für Hautqualität, Polynukleotide für sensible Zonen, Eigenblut + Microneedling für maximale Regeneration. So erreichen wir natürliche, stufenweise Verbesserungen.',
      'Wichtig: Verjüngung ist ein Prozess. Ergebnisse entstehen über Wochen und Monate – dafür wirken sie authentisch und nachhaltig. Vereinbaren Sie Ihr persönliches Beratungsgespräch in Bremen.'
    ],
    ctaText: 'Jetzt Beratung vereinbaren',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]'
  };

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
          'Effektiv sind Kollagenstimulatoren (z. B. Radiesse), medizinisches Microneedling, PRF/PRP und Polynukleotide. Mittelstarke Peelings können zusätzlich die Neubildung anstoßen. Ergebnisse brauchen Zeit und entwickeln sich über 8–12 Wochen.'
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

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Regenerative Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' },
];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <DetailedInfoSection />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
