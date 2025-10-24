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
  title: 'Hautverjüngung in Bremen – Natürliche Anti‑Aging‑Behandlungen | EL Aesthetics',
  description:
    'Hautverjüngung in Bremen: Hauterneuerung & Regeneration mit Polynukleotiden, PRF, Microneedling & mehr. Jetzt Beratung vereinbaren!',
  keywords:
    'hautverjuengung, hauterneuerung, hautauffrischung, hautregeneration, anti-aging bremen, hautstraffung ohne op, gesicht verjüngen, bio-remodelling, skin rejuvenation bremen, Bio-Remodelierung bremen, polynukleotide bremen, prp prf bremen',
  openGraph: {
    title: 'Bremen: Hautverjüngung, Hauterneuerung & Regeneration – natürlich und ohne OP',
    description:
      'Moderne Anti‑Aging‑Konzepte: Von Bio-Remodelierung über Polynukleotide bis PRF. Sichtbar frischere Haut, gesteigerte Elastizität und bessere Hautstruktur – ohne Operation in Bremen.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/hautverjuengung/og-hautverjuengung-bremen.webp']
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/hautverjuengung'
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bremen: Hautverjüngung & Hauterneuerung | EL Aesthetics',
    description:
      'Regenerative Anti‑Aging‑Behandlungen: Bio-Remodelierung, Polynukleotide, PRF, Microneedling & mehr – natürliche Ergebnisse ohne Operation.'
  }
};

export default function HautverjuengungPage() {
  const heroData: HeroSectionProps = {
    title: 'Hautverjüngung in Bremen',
    subtitle:
      'Sanfte Hauterneuerung & Hautauffrischung: Bio-Remodelierung, Polynukleotide, Eigenbluttherapie, Microneedling u.v.m. – frischer Teint und natürliche Straffung ohne OP.',
    imageSrc: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
    imageAlt:
      'Gesichtsbehandlung zur Auffrischung und Straffung der Haut bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Methoden entdecken', href: '#treatments' }
  };

  const introData: IntroSectionProps = {
    title: 'Ohne OP zu frischer, straffer Haut – was ist möglich?',
    content: [
      'Unter Hautverjüngung verstehen wir medizinisch‑ästhetische Verfahren zur Hauterneuerung: Sie verbessern die Hautqualität, fördern die Zellregeneration und verleihen dem Teint mehr Frische und Spannkraft – ganz ohne chirurgischen Eingriff.',
      'Mit den Jahren verlangsamt sich die Erneuerung der Haut: Kollagen‑ und Elastinfasern nehmen ab, Feuchtigkeit geht verloren, die Haut wirkt müde. Moderne Anti‑Aging‑Methoden setzen hier an – sie aktivieren körpereigene Prozesse und stärken die Haut von innen.',
      'In unserer Praxis in Bremen fokussieren wir uns auf regenerative Behandlungen: Bio‑Remodelling, Polynukleotide (PDRN), Eigenbluttherapie (PRP/PRF), medizinisches Microneedling und Kollagenstimulatoren. Diese Ansätze arbeiten mit körpereigenen bzw. biokompatiblen Substanzen und regen die natürliche Regeneration an.',
      'Das Besondere: Ergebnisse entwickeln sich schrittweise über Wochen, wirken authentisch und verbessern die Struktur nachhaltig. Sie sehen nicht „gemacht” aus, sondern erholt, vital und ebenmäßiger – wie nach einer Auszeit.',
      'Gemeinsam finden wir heraus, welche Strategie – ob Auffrischung, Straffung oder Texturverbesserung – für Gesicht, Hals oder Hände am besten passt.'
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Unsere Verfahren zur Erneuerung und Straffung der Haut',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-profhilo_hero.webp',
        imageAlt:
          'Bio-Remodelierung Behandlung für verbesserte Hautqualität und Feuchtigkeitsboost in Bremen',
        title: 'Hyaluron Filler (BAP-Technik)',
        description:
          'Hochvernetzte Hyaluronsäure wird an definierten Punkten platziert und verteilt sich fächerförmig im Gewebe. Ergebnis: intensiver Feuchtigkeitsaufbau, verbesserte Elastizität und sichtbar glattere, prallere Haut – ganz ohne Volumenlook. Ideal für Gesicht, Hals und Dekolleté. Wirkung ab ca. 4 Wochen, Haltbarkeit etwa 6 Monate.',
        treatmentUrl: '/hyaluron/profhilo'
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt:
          'Polynukleotide zur Zellregeneration und zum Kollagenaufbau in Bremen',
        title: 'Polynukleotide (PDRN‑Therapie)',
        description:
          'Molekulare Hautregeneration: Spezifische DNA‑Fragmente fördern die Zellerneuerung, mindern feine Linien und verbessern die Hautdicke. Besonders geeignet für sensible Zonen wie Unterlider, Wangen, Hals und Hände. Ergebnisse bauen sich über 2–3 Monate auf; meist als Behandlungsserie geplant.',
        treatmentUrl: '/polynukleotide'
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
        imageAlt: 'Eigenbluttherapie PRF für natürliche Hautregeneration in Bremen',
        title: 'Eigenbluttherapie (PRP/PRF)',
        description:
          'Natürliche Auffrischung mit körpereigenen Wachstumsfaktoren: Das gewonnene Konzentrat stimuliert Kollagenbildung, Zellreparatur und Durchblutung. Ideal bei fahlem Teint, feinen Linien und zur allgemeinen Verbesserung der Hautqualität. Sehr gut kombinierbar mit Microneedling. In der Regel 2–3 Sitzungen.',
        treatmentUrl: '/eigenbluttherapie/vampir-lifting'
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
        imageAlt:
          'Kollagenstimulation mit Radiesse für langanhaltende Straffung in Bremen',
        title: 'Kollagenstimulation mit Radiesse',
        description:
          'Langzeit‑Straffung über körpereigenen Kollagenaufbau: Calciumhydroxylapatit triggert über Monate die Bildung eines stabilen Stützgerüsts. Für mehr Festigkeit und definiertere Konturen – z. B. an Wangen, Kinnlinie, Hals oder Handrücken. Ergebnisse bis zu 18 Monate.',
        treatmentUrl: '/kollagenstimulation'
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
        imageAlt:
          'Medizinisches Microneedling für Kollagenaufbau und ebenmäßige Haut in Bremen',
        title: 'Medizinisches Microneedling',
        description:
          'Kontrollierte Mikroimpulse setzen gezielte Reize: Die Haut erneuert sich, Poren wirken feiner, die Oberfläche glatter und straffer. Ideal zur Strukturverbesserung, bei feinen Linien und vergrößerten Poren. Verstärkbar durch Wirkstoffe, PRF oder Polynukleotide. Empfehlung: 3–6 Sitzungen.',
        treatmentUrl: '/medizinisches-microneedling'
      },
      {
        imageUrl: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
        imageAlt:
          'Chemisches Peeling zur Hauterneuerung und für ebenmäßigen Teint in Bremen',
        title: 'Chemisches Peeling',
        description:
          'Sanfte bis mittelstarke Hauterneuerung: Spezielle Säuren lösen verhorntes Material, fördern Zellerneuerung und gleichen Pigmentunregelmäßigkeiten aus. Ergebnis: glattere Oberfläche, verfeinerte Poren, frischer Teint. Downtime je nach Tiefe 3–7 Tage.',
        treatmentUrl: '/chemisches-peeling'
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp',
        imageAlt:
          'Botulinumtoxin als ergänzende Maßnahme für entspannte Gesichtszüge in Bremen',
        title: 'Botulinumtoxin (ergänzend)',
        description:
          'Prävention und Glättung durch Muskelentspannung: Mimikfalten wie Stirn‑, Zornesfalten und Krähenfüße werden sanft reduziert. Sinnvoll als Begleiter regenerativer Verfahren, um Vertiefungen vorzubeugen. Wirkung nach 3–14 Tagen, Haltbarkeit 3–6 Monate.',
        treatmentUrl: '/botulinumtoxin/faltenbehandlung'
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-filler_hero.webp',
        imageAlt:
          'Hyaluron‑Filler für dezenten Volumenaufbau und definierte Konturen in Bremen',
        title: 'Hyaluron‑Filler (ergänzend)',
        description:
          'Wenn Konturen nachlassen: Filler stellen gezielt Volumen wieder her – etwa an Wangen, Nasolabialfalten oder Kinnlinie. Für ein frischeres, harmonisches Gesamtbild. Soforteffekt, Haltbarkeit ca. 9–18 Monate; ideal in Kombination mit regenerativen Ansätzen.',
        treatmentUrl: '/hyaluron/filler'
      }
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
    { id: 'treatments', label: 'Unsere Behandlungen zur Hautverjüngung' },
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
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
    </div>
  );
}
