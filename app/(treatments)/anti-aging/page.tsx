import type { Metadata } from 'next';
import {
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
  LocationSection,
  LocationSectionProps,
  TreatmentsSection,
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Anti-Aging Bremen | Hautverjüngung & Faltenbehandlung ohne OP | EL Aesthetics',
  description: 'Anti-Aging Behandlung in Bremen ✓ Botox, Hyaluron, Kollagenstimulation & mehr ✓ Natürliche Verjüngung ✓ Jünger aussehen ohne OP ✓ Individuelle Beratung ✓ Jetzt informieren!',
  keywords: 'Anti-Aging Bremen, Hautverjüngung Bremen, Faltenbehandlung Bremen, Jünger aussehen Bremen, Gesichtsverjüngung Bremen, Anti-Aging Behandlung Bremen, Alterserscheinungen reduzieren Bremen, Natürliches Anti-Aging, ästhetische Medizin Bremen',
  openGraph: {
    title: 'Anti-Aging Bremen – Natürliche Verjüngung ohne Operation | EL Aesthetics',
    description: 'Von Botox über Hyaluron bis Kollagenstimulation: Entdecken Sie moderne Anti-Aging-Methoden für natürliche Verjüngung. Individuell, sicher, effektiv.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//anti-aging/og-anti-aging-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/anti-aging',
  },
};

export default function AntiAgingHubPage() {
  const heroData: HeroSectionProps = {
    title: "Anti-Aging & Hautverjüngung in Bremen",
    subtitle: "Entdecken Sie moderne Methoden der Hautverjüngung: Von minimal-invasiven Injektionen bis zur regenerativen Medizin – für ein natürlich jüngeres, frischeres Aussehen.",
    imageSrc: "/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp",
    imageAlt: "Verschiedene Anti-Aging-Behandlungen für natürliche Hautverjüngung bei EL Aesthetics Bremen",
    primaryCTA: { text: "Beratung anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "Behandlungen entdecken", href: "#treatments" }
  };

  const introData: IntroSectionProps = {
    title: "Anti-Aging – Mehr als nur Falten glätten",
    content: [
      "Älter werden ist natürlich – doch wie wir altern, können wir beeinflussen. Moderne Anti-Aging-Medizin bedeutet heute weit mehr als das bloße Glätten von Falten. Es geht darum, die Hautqualität zu verbessern, Volumen wiederherzustellen, die Zellregeneration anzuregen und ein harmonisches, frisches Gesamtbild zu schaffen – ohne die natürliche Mimik zu verlieren.",
      "Die Zeichen der Hautalterung sind vielfältig: Mimikfalten durch jahrelange Muskelaktivität, statische Falten durch Volumenverlust, schlaffe Haut durch nachlassende Kollagenproduktion, unebenes Hautbild durch verlangsamte Zellerneuerung. Für jedes dieser Anliegen gibt es heute wirksame, wissenschaftlich fundierte Behandlungsmethoden – minimal-invasiv und ohne Operation.",
      "In unserer Praxis in Bremen setzen wir auf einen ganzheitlichen Ansatz: Wir analysieren Ihre Haut, verstehen Ihre Bedürfnisse und entwickeln einen individuellen Anti-Aging-Plan. Dabei kombinieren wir verschiedene Methoden – von Botulinumtoxin über Hyaluronsäure bis hin zu innovativen Regenerationstherapien wie Polynukleotiden oder Eigenblutbehandlung.",
      "Das Besondere: Alle unsere Anti-Aging-Behandlungen sind reversibel oder bauen auf natürlichen Prozessen Ihres Körpers auf. Sie behalten die volle Kontrolle und können jederzeit entscheiden, wie Sie Ihren Weg zu einem jüngeren Aussehen gestalten möchten.",
      "Lassen Sie uns gemeinsam herausfinden, welche Anti-Aging-Methode oder Kombination für Sie die beste ist – für Ergebnisse, die Sie jünger wirken lassen, ohne dass jemand erkennt, dass Sie etwas haben machen lassen."
    ]
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Unsere Anti-Aging-Behandlungen in Bremen im Überblick",
    treatments: [
      {
        imageUrl: "/elaesthetics-bremen-github/assets//botox/botox-faltenbehandlung_hero.webp",
        imageAlt: "Botox Faltenbehandlung für glatte Stirn und entspannten Blick",
        title: "Botulinumtoxin gegen mimische Falten",
        description: "Die klassische Anti-Aging-Methode: Stirnfalten, Zornesfalten und Krähenfüße werden durch gezielte Muskelentspannung geglättet. Das Ergebnis: Ein entspanntes, frisches Aussehen ohne eingefrorene Mimik. Ideal für alle, die erste dynamische Falten reduzieren möchten. Wirkung nach 3-14 Tagen, Haltbarkeit 3-6 Monate.",
        treatmentUrl: "/botox/faltenbehandlung"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-filler_hero.webp",
        imageAlt: "Hyaluron Faltenunterspritzung für glatte Haut und Volumenaufbau",
        title: "Hyaluron-Faltenunterspritzung",
        description: "Wenn Falten bereits tiefer geworden sind oder Volumen verloren gegangen ist, kommt Hyaluronsäure zum Einsatz. Nasolabialfalten, Marionettenfalten, Mundwinkel oder eingefallene Wangen werden aufgefüllt. Das Gesicht wirkt voller, frischer und definierter. Sofortige Sichtbarkeit, Haltbarkeit 9-18 Monate.",
        treatmentUrl: "/hyaluron/filler"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//kollagenstimulation/kollagenstimulation_hero.webp",
        imageAlt: "Kollagenstimulation mit Radiesse für langanhaltende Hautstraffung",
        title: "Kollagenstimulation",
        description: "Eine besonders innovative Anti-Aging-Methode: Calciumhydroxylapatit regt die körpereigene Kollagenproduktion an. Über Monate hinweg baut Ihre Haut neues Stützgerüst auf – für natürliche Straffung und Volumenzunahme. Ideal für Wangen, Kieferlinie und Hände. Langanhaltende Ergebnisse bis zu 18 Monate.",
        treatmentUrl: "/kollagenstimulation"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-profhilo_hero.webp",
        imageAlt: "Profhilo Bio-Remodelling für verbesserte Hautqualität",
        title: "Profhilo (Bio-Remodelling)",
        description: "Revolution in der Hautverjüngung: Hochkonzentrierte Hyaluronsäure wird strategisch an wenigen Punkten injiziert und verteilt sich gleichmäßig im Gewebe. Die Haut wird von innen befeuchtet, gestrafft und ihre Qualität deutlich verbessert. Kein Volumenaufbau, sondern pure Hautverjüngung. Haltbarkeit etwa 6 Monate.",
        treatmentUrl: "/hyaluron/profhilo"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//polynukleotide/polynukleotide_hero.webp",
        imageAlt: "Polynukleotide Behandlung für Zellregeneration und Hauterneuerung",
        title: "Polynukleotide (PDRN-Therapie)",
        description: "Die neueste Generation der Hautverjüngung: DNA-Fragmente (Polynukleotide) stimulieren die Zellerneuerung auf molekularer Ebene. Ideal bei erschlaffter Haut, feinen Linien und zur Verbesserung der Hautstruktur. Besonders wirksam an Unterlid, Wangen und Hals. Natürliche Regeneration von innen heraus.",
        treatmentUrl: "/polynukleotide"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp",
        imageAlt: "Eigenbluttherapie PRP/PRF für natürliche Hautverjüngung",
        title: "Eigenbluttherapie (PRP/PRF)",
        description: "Verjüngung mit Ihrem eigenen Blut: Aus Ihrem Blut wird ein Konzentrat gewonnen, das reich an Wachstumsfaktoren ist. Dieses wird in die Haut injiziert und regt die Regeneration, Kollagenbildung und Durchblutung an. 100% natürlich, keine Fremdsubstanzen. Ideal zur allgemeinen Hautverjüngung und bei feinen Linien.",
        treatmentUrl: "/eigenbluttherapie-prf/vampire-lifting"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//chemisches-peeling_hero.webp",
        imageAlt: "Chemisches Peeling für Hauterneuerung und ebenmäßige Haut",
        title: "Chemisches Peeling",
        description: "Hauterneuerung durch kontrollierte Schälung: Fruchtsäuren oder TCA entfernen abgestorbene Hautzellen und regen die Zellerneuerung an. Das Ergebnis: feinere Poren, ebenmäßigerer Teint, reduzierte Pigmentflecken und glattere Hautoberfläche. Verschiedene Intensitätsstufen für individuelle Bedürfnisse.",
        treatmentUrl: "/anti-aging/chemisches-peeling"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//medizinisches-microneedling/medizinisches-microneedling_hero.webp",
        imageAlt: "Medizinisches Microneedling für Kollagenaufbau und Hautstraffung",
        title: "Medizinisches Microneedling",
        description: "Durch gezielte Mikroverletzungen der Haut wird die Kollagen- und Elastinproduktion massiv angekurbelt. Die Haut regeneriert sich, wird straffer, praller und ebenmäßiger. Ideal zur Verbesserung der Hautstruktur, bei feinen Linien und zur allgemeinen Hautverjüngung. Kombinierbar mit Wirkstoffen oder PRF.",
        treatmentUrl: "/medizinisches-microneedling"
      }
    ]
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sabine M.",
      rating: 5,
      text: "Ich war überfordert mit all den Anti-Aging-Möglichkeiten. Frau El-Armouche hat sich viel Zeit genommen und mir einen individuellen Plan erstellt. Nach 6 Monaten kombinierter Behandlungen sehe ich 10 Jahre jünger aus – und fühle mich auch so!",
      date: "2024-09-25"
    },
    {
      id: 2,
      name: "Thomas K.",
      rating: 5,
      text: "Als Mann war ich skeptisch, aber die Ergebnisse sprechen für sich. Die Kombination aus Botox und Hyaluron hat mich erfrischt, ohne dass es auffällt. Genau das wollte ich!",
      date: "2024-08-30"
    },
    {
      id: 3,
      name: "Julia W.",
      rating: 5,
      text: "Die Profhilo-Behandlung war ein Gamechanger für meine Hautqualität! Meine Haut ist strahlend, straff und sieht einfach gesund aus. Besser als jede Creme!",
      date: "2024-07-18"
    },
    {
      id: 4,
      name: "Michael R.",
      rating: 5,
      text: "Sehr professionelle Beratung! Statt mir einfach alles zu verkaufen, hat Frau El-Armouche ehrlich gesagt, welche Behandlungen für mich wirklich Sinn machen. Das nenne ich Expertise!",
      date: "2024-06-22"
    },
    {
      id: 5,
      name: "Andrea L.",
      rating: 5,
      text: "Nach der Eigenbluttherapie kombiniert mit Microneedling hat sich meine Haut komplett erneuert. Freunde fragen mich, ob ich im Urlaub war – dabei war ich nur bei EL Aesthetics! 😊",
      date: "2024-05-14"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Welche Anti-Aging-Methode ist die richtige für Sie?",
    description: [
      "Die Wahl der passenden Anti-Aging-Behandlung ist hochindividuell und hängt von vielen Faktoren ab: Ihrem Alter, Ihrem Hauttyp, der Art Ihrer Alterserscheinungen, Ihren Zielen und nicht zuletzt Ihrem persönlichen Empfinden. Was für die eine Person perfekt funktioniert, muss für Sie nicht die beste Lösung sein.",
      "Als spezialisierte Ärztin für ästhetische Medizin analysiere ich in unserer Praxis in Bremen zunächst Ihre Haut gründlich: Welche Arten von Falten liegen vor – dynamisch oder statisch? Wie ist Ihre Hautqualität? Gibt es Volumenverlust? Wie stark ist die Kollagenstruktur? Basierend auf dieser Analyse entwickle ich einen maßgeschneiderten Anti-Aging-Plan.",
      "Oft ist die Kombination verschiedener Methoden der Schlüssel zum Erfolg: Botulinumtoxin für die mimischen Falten, Hyaluron für Volumenverlust, Profhilo für die allgemeine Hautqualität. Oder Kollagenstimulation für langfristige Straffung kombiniert mit Microneedling für die Oberflächenstruktur. Die Möglichkeiten sind vielfältig – und genau deshalb ist eine individuelle Beratung so wichtig.",
      "Mir ist es wichtig, dass Sie nicht nur verstehen, was bei den Behandlungen passiert, sondern auch realistische Erwartungen haben. Anti-Aging ist ein Prozess, kein einmaliges Event. Mit der richtigen Strategie und regelmäßiger Pflege können Sie Ihre Jugendlichkeit jedoch deutlich länger bewahren – natürlich und authentisch. Vereinbaren Sie jetzt Ihr persönliches Beratungsgespräch in Bremen."
    ],
    ctaText: "Jetzt persönliche Beratung vereinbaren",
    ctaHref: "/terminanfragen",
    imageSrc: "/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp",
    imageAlt: "Ola El-Armouche berät Patientin zu individuellen Anti-Aging-Behandlungsmöglichkeiten",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const faqData: FAQSectionProps = {
    title: "Häufig gestellte Fragen zum Anti-Aging",
    faqs: [
      {
        question: "Ab welchem Alter sollte man mit Anti-Aging-Behandlungen beginnen?",
        answer: "Es gibt kein 'richtiges' Alter für Anti-Aging. Viele beginnen präventiv bereits ab Ende 20/Anfang 30, wenn erste feine Linien sichtbar werden. Andere starten erst mit 40 oder 50, wenn die Alterserscheinungen ausgeprägter sind. Entscheidend ist nicht das Alter, sondern Ihre persönlichen Bedürfnisse und Ziele. In der Beratung schaue ich mir Ihre Haut an und empfehle Ihnen die passenden Maßnahmen – unabhängig vom Alter. Generell gilt: Je früher Sie beginnen (präventiv), desto weniger intensive Behandlungen sind später nötig."
      },
      {
        question: "Welche Anti-Aging-Behandlung ist am effektivsten?",
        answer: "Die 'beste' Behandlung gibt es nicht – es kommt auf Ihre individuellen Alterserscheinungen an. Für mimische Falten ist Botulinumtoxin am effektivsten. Bei Volumenverlust und tiefen Falten wirkt Hyaluron hervorragend. Für allgemeine Hautqualität sind Profhilo oder Eigenbluttherapie ideal. Bei erschlaffter Haut empfehle ich Kollagenstimulation. Oft ist eine Kombination verschiedener Methoden der Schlüssel zum besten Ergebnis. In der Beratung analysiere ich Ihre Haut und erstelle einen individuellen Behandlungsplan."
      },
      {
        question: "Wie lange halten Anti-Aging-Behandlungen?",
        answer: "Die Haltbarkeit variiert stark je nach Methode: Botulinumtoxin hält 3-6 Monate, Hyaluron-Filler 9-18 Monate, Profhilo etwa 6 Monate, Kollagenstimulation bis zu 18 Monate, Eigenbluttherapie 6-12 Monate, Microneedling und Peelings zeigen kumulative Effekte über mehrere Sitzungen. Wichtig zu verstehen: Anti-Aging ist kein einmaliges Event, sondern ein kontinuierlicher Prozess. Mit regelmäßigen Auffrischungen erhalten Sie dauerhaft jugendliche Ergebnisse."
      },
      {
        question: "Kann man verschiedene Anti-Aging-Behandlungen kombinieren?",
        answer: "Ja, absolut – und das ist sogar oft die beste Strategie! Viele meiner Patienten kombinieren beispielsweise Botulinumtoxin (gegen mimische Falten) mit Hyaluron (für Volumen) und Profhilo (für Hautqualität). Oder Kollagenstimulation mit Microneedling für maximale Hautstraffung. Die Kombinationen sind vielfältig und werden individuell auf Ihre Bedürfnisse abgestimmt. Wichtig ist, dass die Behandlungen zeitlich richtig aufeinander abgestimmt werden – das besprechen wir detailliert in der Beratung."
      },
      {
        question: "Sieht man nach Anti-Aging-Behandlungen noch natürlich aus?",
        answer: "Absolut – wenn die Behandlungen richtig durchgeführt werden! Mein Ziel ist es, Sie jünger und frischer wirken zu lassen, ohne dass jemand erkennt, dass Sie etwas haben machen lassen. Natürlichkeit steht an erster Stelle. Das erreichen wir durch: konservative Dosierung, individuelle Anpassung an Ihre Gesichtsanatomie, Berücksichtigung Ihrer natürlichen Mimik, und schrittweise Behandlung statt sofortiger Maximalkorrektur. Sie sollen wie eine bessere Version Ihrer selbst aussehen – nicht wie jemand anderes."
      },
      {
        question: "Sind Anti-Aging-Behandlungen schmerzhaft?",
        answer: "Die meisten Behandlungen sind gut verträglich und nur minimal unangenehm. Injektionsbehandlungen (Botulinumtoxin, Hyaluron, Profhilo) verursachen kurzes Pieksen. Microneedling und Peelings können je nach Intensität brennen – hier arbeiten wir auf Wunsch mit Betäubungscreme. Viele Patienten beschreiben die Behandlungen als deutlich weniger schmerzhaft als erwartet. Ihre Schmerzempfindlichkeit besprechen wir vorab, und ich passe die Behandlung entsprechend an."
      },
      {
        question: "Wie viel kosten Anti-Aging-Behandlungen in Bremen?",
        answer: "Die Kosten variieren stark je nach Behandlungsmethode und Umfang: Botulinumtoxin beginnt bei ca. 200€ pro Bereich, Hyaluron-Behandlungen bei 300-600€ je nach Menge, Profhilo bei ca. 400€ pro Sitzung, Kollagenstimulation bei 400-800€, Eigenbluttherapie bei 250-400€, Microneedling bei 150-300€, chemische Peelings bei 100-300€. Für einen umfassenden Anti-Aging-Plan mit kombinierten Behandlungen erstelle ich Ihnen in der Beratung einen transparenten Kostenplan. Die Abrechnung erfolgt nach GOÄ (Gebührenordnung für Ärzte)."
      },
      {
        question: "Gibt es Nebenwirkungen oder Risiken bei Anti-Aging-Behandlungen?",
        answer: "Alle medizinischen Behandlungen haben potenzielle Nebenwirkungen, diese sind bei Anti-Aging-Methoden jedoch in der Regel mild und vorübergehend: leichte Schwellungen, Rötungen, kleine Blutergüsse an den Einstichstellen (verschwinden nach wenigen Tagen), vorübergehende Empfindlichkeit der behandelten Bereiche. Ernsthafte Komplikationen sind bei korrekter Durchführung durch qualifizierte Ärzte sehr selten. In der Beratung kläre ich Sie ausführlich über alle Risiken der jeweiligen Behandlung auf und stelle sicher, dass Sie die richtige Wahl treffen."
      },
      {
        question: "Wie bereite ich mich auf Anti-Aging-Behandlungen vor?",
        answer: "Die Vorbereitung ist meist minimal: Keine blutverdünnenden Medikamente 1 Woche vor der Behandlung (nach Rücksprache mit Ihrem Arzt), kein Alkohol 24 Stunden vorher, bei Lippenherpes-Neigung: prophylaktische Einnahme von Aciclovir, gesund und ohne akute Infektionen erscheinen. Detaillierte Anweisungen erhalten Sie nach dem Beratungsgespräch. Nach den meisten Behandlungen sind Sie sofort gesellschaftsfähig, planen Sie dennoch 1-2 Tage Puffer für eventuelle Schwellungen ein."
      },
      {
        question: "Was ist der Unterschied zwischen Anti-Aging und Anti-Falten?",
        answer: "Anti-Falten konzentriert sich ausschließlich auf die Reduktion von Falten – meist durch Botulinumtoxin oder Hyaluron. Anti-Aging ist ein ganzheitlicher Ansatz, der weit mehr umfasst: Verbesserung der Hautqualität und -struktur, Wiederherstellung von Volumen, Anregung der Zellregeneration, Straffung erschlaffter Haut, Verbesserung der Hautdurchblutung, Aufbau von Kollagen und Elastin. Anti-Aging betrachtet das Gesicht als Ganzes und zielt darauf ab, die natürliche Jugendlichkeit zu bewahren oder wiederherzustellen – nicht nur einzelne Falten zu glätten."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für Ihren persönlichen Anti-Aging-Plan?",
    subtitle: "Vereinbaren Sie jetzt ein unverbindliches Beratungsgespräch und entdecken Sie, welche Verjüngungsmethoden perfekt zu Ihnen passen.",
    primaryCTA: { text: "Jetzt Beratung anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "EL Aesthetics Bremen – Ihre Experten für Anti-Aging",
    description: "In unserer spezialisierten Praxis in Bremen bieten wir Ihnen das gesamte Spektrum moderner Anti-Aging-Methoden. Von minimal-invasiven Injektionen bis zur regenerativen Medizin – immer auf dem neuesten Stand der Wissenschaft und mit höchsten Qualitätsstandards.",
    location: {
      address: "Richtepad 14, 28355 Bremen",
      phone: "0155 66919635",
      email: "info@elaesthetics-bremen.de",
      openingHours: [
        "Termine nach Vereinbarung"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <PatientReviews 
        reviews={reviews} 
        title="Erfahrungen unserer Patienten mit Anti-Aging-Behandlungen" 
        subtitle="Unsere Patienten schätzen vor allem die individuellen Behandlungspläne und die natürlichen Ergebnisse. Ob einzelne Methode oder Kombination – hier finden Sie authentische Erfahrungsberichte zur Hautverjüngung in Bremen."
      />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}