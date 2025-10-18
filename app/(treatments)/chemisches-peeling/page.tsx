import type { Metadata } from 'next';
import {
  AreasSection,
  ConsultationSectionProps,
  AreasSectionProps,
  TreatmentCareSectionProps,
  QuickInfoSection,
  QuickInfoSectionProps,
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
  ProcessSection,
  ProcessSectionProps,
  TreatmentCareSection,
  TreatmentsSection,
  TreatmentsSectionProps
} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import { Review } from '@/types/Review';

export const metadata: Metadata = {
  title: 'Chemisches Peeling Bremen | PRX-T33 ohne Downtime',
  description:
    'PRX-T33 chemisches Peeling in Bremen: ärztliche Biorevitalisierung für Glow, Pigmentflecken und Aknenarben – ganz ohne Ausfallzeit.',
  openGraph: {
    title: 'Chemisches Peeling Bremen | PRX-T33 ohne Downtime',
    description:
      'PRX-T33 Biorevitalisierung bei EL Aesthetics Bremen: tiefenwirksame Hauterneuerung für ein ebenmäßigeres Hautbild ohne Schälung.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/elaesthetics-bremen-github/assets//peeling/og-chemisches-peeling-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/chemisches-peeling',
  },
};

export default function ChemischesPeelingPage() {
  const heroData: HeroSectionProps = {
    title: "Chemisches Peeling in Bremen",
    subtitle: "Hauterneuerung ohne Ausfallzeit: PRX-T33 kombiniert TCA mit Wasserstoffperoxid für tiefenwirksame Regeneration – ohne sichtbare Schälung, auch im Sommer geeignet.",
    imageSrc: "/elaesthetics-bremen-github/assets//chemisches-peeling/chemisches-peeling_hero.webp",
    imageAlt: "Chemisches Peeling mit Biorevitalisierung bei EL Aesthetics Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Was ist ein chemisches Peeling?",
    content: [
      "Ein chemisches Peeling ist weit mehr als nur eine oberflächliche Hautschälung. Es ist eine medizinische Behandlung zur Hauterneuerung, die tiefere Hautschichten erreicht und dort biologische Regenerationsprozesse anstößt. Anders als mechanische Peelings, die lediglich abgestorbene Hautschüppchen entfernen, regen chemische Peelings die Kollagenproduktion an, setzen Wachstumsfaktoren frei und erneuern die Hautstruktur von innen heraus.",
      "In unserer Praxis in Bremen setzen wir auf eine besondere Form des chemischen Peelings: Die Biorevitalisierung mit PRX-T33. Diese innovative Methode kombiniert Trichloressigsäure (TCA) mit Wasserstoffperoxid (H2O2) und Kojisäure in einer patentierten Formulierung. Das Besondere: Obwohl TCA normalerweise zu starker Hautschälung führt, verhindert die Synergie mit H2O2 genau dies. Stattdessen dringen die Wirkstoffe bis in mittlere Hautschichten vor und stimulieren dort die Zellregeneration – ohne sichtbare Abschälung, ohne Ausfallzeit.",
      "Diese Art der Biorevitalisierung durch chemisches Peeling eignet sich besonders bei Elastizitätsverlust, Falten, Akne und Aknenarben, Pigmentflecken, eingesunkenen Narben und Dehnungsstreifen. Die Behandlung kann an Gesicht, Hals, Dekolleté und Oberarmen durchgeführt werden und ist für alle Hauttypen geeignet – sogar im Sommer, da keine erhöhte Lichtempfindlichkeit entsteht."
    ]
  };

  const areasData: AreasSectionProps = {
    title: "Behandlungsbereiche & Indikationen",
    categories: [
      {
        category: "Behandlungsbereiche",
        items: [
          {
            title: "Gesicht",
            description: "Vollgesicht, Stirn, Wangen, Kinn für ebenmäßigen Teint und Faltenreduktion"
          },
          {
            title: "Hals",
            description: "Straffung und Verbesserung der oft vernachlässigten Halspartie"
          },
          {
            title: "Dekolleté",
            description: "Hautverjüngung und Aufhellung sonnengeschädigter Haut"
          },
          {
            title: "Oberarme",
            description: "Verbesserung der Hautstruktur und Straffung"
          }
        ]
      },
      {
        category: "Hautprobleme & Indikationen",
        items: [
          {
            title: "Elastizitätsverlust der Haut",
            description: "Stimulation der Kollagenproduktion für straffere Haut"
          },
          {
            title: "Haut-Erschlaffung",
            description: "Verbesserung der Hautspannung durch Regeneration"
          },
          {
            title: "Falten",
            description: "Glättung feiner bis mitteltiefer Falten"
          },
          {
            title: "Akne & Aknenarben",
            description: "Behandlung aktiver Akne und Verbesserung von Narben"
          },
          {
            title: "Pigmentflecken",
            description: "Aufhellung durch Kojisäure und Zellerneuerung"
          },
          {
            title: "Eingesunkene Narben",
            description: "Stimulation des Kollagenaufbaus zur Narbenglättung"
          },
          {
            title: "Dehnungsstreifen",
            description: "Verbesserung der Hautstruktur bei Schwangerschaftsstreifen"
          },
          {
            title: "Unebener Hautteint",
            description: "Verfeinerung der Hautstruktur für ebenmäßiges Hautbild"
          }
        ]
      }
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Behandlung auf einen Blick",
    benefits: [
      {
        title: "Preis",
        description: "ab 180€ pro Behandlung*",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/EUR.svg"
      },
      {
        title: "Dauer",
        description: "ca. 45 Min",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/TIME.svg"
      },
      {
        title: "Wirkung",
        description: "sofort + Aufbau über Wochen",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/TIME.svg"
      },
      {
        title: "Haltbarkeit",
        description: "9-12 Monate",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/CAL.svg"
      },
      {
        title: "Betäubung",
        description: "keine erforderlich",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/Spritze.svg"
      },
      {
        title: "Ausfallzeit",
        description: "i.d.R. sofort gesellschaftsfähig",
        iconUrl: "/elaesthetics-bremen-github/assets//icons/gesellschaft.svg"
      }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf der chemischen Peeling-Behandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Beratung & Hautvorbereitung",
        description: "In unserer Bremer Praxis analysiere ich zunächst Ihren Hauttyp und Ihre spezifischen Hautprobleme. Wir besprechen Ihre Erwartungen und klären, ob chemisches Peeling die richtige Methode für Sie ist. Wichtig: Behandlungen, die die Haut reizen (mechanische Peelings, Dermabrasion) oder die Penetrationsfähigkeit erhöhen, sollten in den Tagen vor der Anwendung vermieden werden. Bei regelmäßiger Einnahme von Medikamenten besprechen wir mögliche Kontraindikationen."
      },
      {
        number: "02",
        title: "Reinigung & Vorbereitung",
        description: "Die Haut wird zunächst gründlich gereinigt und von Make-up, Talg und Unreinheiten befreit. Anschließend wird sie desinfiziert. Diese Vorbereitung ist entscheidend, damit die Wirkstoffe optimal eindringen können. Die Behandlung selbst ist schmerzarm – eine Betäubung ist nicht erforderlich."
      },
      {
        number: "03",
        title: "Auftragen & Einmassieren des Peelings",
        description: "Das PRX-T33 Gel wird schrittweise und gleichmäßig auf die Behandlungsareale aufgetragen und sanft einmassiert. Dabei kann ein leichtes Brennen oder Wärmegefühl auftreten, das jedoch gut toleriert wird. Die spezielle Gel-Formulierung ermöglicht durch ihren okklusiven Effekt, dass bereits geringe Säurekonzentrationen tiefenwirksam sind. Die Einwirkzeit beträgt etwa 10-15 Minuten."
      },
      {
        number: "04",
        title: "Neutralisation & beruhigende Pflege",
        description: "Nach der Einwirkzeit wird die Haut mit Wasser neutralisiert. Anschließend trage ich eine beruhigende Maske aus Pflanzenextrakten auf, die für 10-15 Minuten auf der Haut verbleibt. Diese Phase ist wichtig, um die Haut zu beruhigen und den Regenerationsprozess zu unterstützen. Danach wird eine spezielle Pflegecreme intensiv einmassiert."
      },
      {
        number: "05",
        title: "Nachsorge & Ergebnis",
        description: "Sie erhalten spezielle Nachpflegeprodukte und Sonnenschutzpräparate (LSF 50+), die Sie über mehrere Wochen täglich anwenden sollten. Erste Ergebnisse – strahlende, glatte Haut – sind sofort sichtbar. Die vollständige Biorevitalisierung mit Kollagenstimulation entwickelt sich über die folgenden Wochen. Für ein optimales Ergebnis empfehle ich 3-5 Behandlungen im Abstand von 1-2 Wochen. Ein Kontrolltermin nach etwa 5 Tagen hilft, das Ergebnis zu beurteilen."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Behandlung",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Hautreizungen vermeiden",
          description: "Verzichten Sie in den Tagen vor der Behandlung auf mechanische Peelings, Dermabrasion oder andere reizende Behandlungen."
        },
        {
          title: "UV-Exposition minimieren",
          description: "Vermeiden Sie intensive Sonneneinstrahlung oder Solarium in der Woche vor der Behandlung."
        },
        {
          title: "Gesundheitszustand",
          description: "Sie sollten gesund sein. Bei akuten Hautinfektionen, Herpes oder offenen Wunden sollte die Behandlung verschoben werden."
        },
        {
          title: "Medikamente",
          description: "Informieren Sie mich über die Einnahme von Antibiotika, Aknetherapeutika (Vitamin-A-Säure) oder anderen Medikamenten."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Sonnenschutz konsequent",
          description: "Verwenden Sie täglich einen Sonnenschutz mit mind. LSF 30 (besser LSF 50+) für mindestens 4-6 Wochen."
        },
        {
          title: "Intensive Feuchtigkeitspflege",
          description: "Nutzen Sie milde, feuchtigkeitsspendende Pflegeprodukte zur Unterstützung der Regeneration."
        },
        {
          title: "Reizende Produkte meiden",
          description: "Verzichten Sie auf reizende Kosmetika, mechanische Peelings und alkoholhaltige Produkte für 2 Wochen."
        },
        {
          title: "Keine Manipulation",
          description: "Kratzen, reiben oder ziehen Sie nicht an der behandelten Haut, auch wenn leichte Schuppung auftritt."
        },
        {
          title: "Sport & Schwitzen",
          description: "Vermeiden Sie für 24-48 Stunden intensive sportliche Aktivität und starkes Schwitzen."
        },
        {
          title: "Sauna & Solarium",
          description: "Verzichten Sie für 2 Wochen auf Sauna, Dampfbad und Solarium."
        }
      ]
    }
  };

  const reviews: Review[] = [
    {
      id: 1,
      name: "Christina M.",
      rating: 5,
      text: "Das PRX-T33 Peeling war genau das Richtige für mich! Keine Ausfallzeit, leichtes Brennen während der Behandlung, aber das Ergebnis ist fantastisch. Meine Haut ist so viel glatter und strahlender!",
      date: "2024-09-20"
    },
    {
      id: 2,
      name: "Laura S.",
      rating: 5,
      text: "Ich hatte Angst vor einem Peeling wegen der Schälung, aber bei dieser Behandlung gab es keine! Meine Aknenarben sind deutlich besser geworden und mein Teint ist ebenmäßiger. Sehr zufrieden!",
      date: "2024-08-14"
    },
    {
      id: 3,
      name: "Markus K.",
      rating: 5,
      text: "Als Mann war ich skeptisch, aber die Behandlung war unkompliziert und schmerzfrei. Meine Haut sieht frischer aus und die Pigmentflecken sind heller geworden. Gerne wieder!",
      date: "2024-07-28"
    },
    {
      id: 4,
      name: "Sabine W.",
      rating: 5,
      text: "Nach 4 Behandlungen hat sich meine Hautstruktur komplett verbessert. Die Poren sind feiner, die Haut straffer und ich brauche viel weniger Foundation. Beste Investition!",
      date: "2024-06-15"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre Expertin für chemisches Peeling in Bremen",
    description: [
      "Chemische Peelings erfordern medizinisches Fachwissen und Erfahrung, um optimale Ergebnisse zu erzielen und Komplikationen zu vermeiden. Als spezialisierte Ärztin für ästhetische Medizin berate ich Sie umfassend zu den verschiedenen Möglichkeiten der Biorevitalisierung durch chemische Peelings.",
      "In unserer Praxis in Bremen analysiere ich zunächst Ihre Haut und Ihre spezifischen Problemzonen: Geht es um Aknenarben, Pigmentflecken, Falten oder allgemeine Hautverjüngung? Welche Intensität ist für Ihren Hauttyp geeignet? Wie viele Sitzungen sind notwendig? Diese individuelle Beratung ist entscheidend für den Behandlungserfolg.",
      "Das PRX-T33 Biorevitalisierungs-Peeling, das wir verwenden, ist besonders schonend und dennoch hochwirksam. Die patentierte Kombination aus TCA, Wasserstoffperoxid und Kojisäure ermöglicht eine tiefenwirksame Behandlung ohne die typischen Nebenwirkungen herkömmlicher TCA-Peelings. Sie profitieren von allen Vorteilen der Kollagenstimulation – ohne Ausfallzeit, ohne sichtbare Schälung.",
      "Besonders wichtig ist mir die Nachsorge: Sie erhalten von mir einen detaillierten Pflegeplan und die passenden Produkte für zuhause. Nur mit der richtigen Nachbehandlung können Sie das volle Potenzial des chemischen Peelings ausschöpfen und langanhaltende Ergebnisse erzielen."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/elaesthetics-bremen-github/assets//tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche – Expertin für chemisches Peeling in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Behandlungen zur Hautverbesserung",
    treatments: [
      {
        imageUrl: "/elaesthetics-bremen-github/assets//medizinisches-microneedling/medizinisches-microneedling_hero.webp",
        imageAlt: "Medizinisches Microneedling für Hautstraffung und Kollagenaufbau",
        title: "Medizinisches Microneedling",
        description: "Gezielte Mikroverletzungen stimulieren die Kollagen- und Elastinproduktion. Ideal zur Verbesserung von Hautstruktur, Aknenarben und feinen Linien. Kombinierbar mit Wirkstofftherapie.",
        treatmentUrl: "/medizinisches-microneedling"
      },
      
      {
        imageUrl: "/elaesthetics-bremen-github/assets//eigenbluttherapie-prf/eigenbluttherapie-prf_hero.webp",
        imageAlt: "Eigenbluttherapie PRP für natürliche Hautverjüngung",
        title: "Eigenbluttherapie (PRF)",
        description: "Ihr eigenes Blut wird aufbereitet und die Wachstumsfaktoren in die Haut injiziert. Stimuliert Regeneration und Kollagenbildung auf vollkommen natürliche Weise.",
        treatmentUrl: "/hautverbesserung/eigenbluttherapie"
      },
      {
        imageUrl: "/elaesthetics-bremen-github/assets//hyaluron/hyaluron-skinbooster_hero.webp",
        imageAlt: "Skinbooster Behandlung für Hautfeuchtigkeit",
        title: "Skinbooster (Klassisch)",
        description: "Flächige Injektion von Hyaluronsäure in die Haut für intensive Befeuchtung, Straffung und Verbesserung der Hautstruktur. Ideal für trockene, müde Haut.",
        treatmentUrl: "/hautverbesserung/skinbooster"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zum chemischen Peeling",
    faqs: [
      {
        question: "Was ist PRX-T33 und wie unterscheidet es sich von anderen Peelings?",
        answer: "PRX-T33 ist ein innovatives Biorevitalisierungs-Peeling, das Trichloressigsäure (TCA) mit Wasserstoffperoxid (H2O2) und Kojisäure kombiniert. Das Besondere: Obwohl TCA normalerweise zu starker Hautschälung führt, verhindert die patentierte Synergie mit H2O2 genau dies. Die Wirkstoffe dringen bis in mittlere Hautschichten vor und stimulieren dort die Kollagenproduktion, setzen Wachstumsfaktoren frei und erneuern die Hautstruktur – alles ohne sichtbare Abschälung und ohne Ausfallzeit. Dies unterscheidet PRX-T33 grundlegend von klassischen Fruchtsäure- oder TCA-Peelings."
      },
      {
        question: "Warum kommt es bei diesem TCA-Peeling zu keiner Hautschälung?",
        answer: "Die Kombination von TCA und Wasserstoffperoxid (H2O2) in PRX-T33 führt zu einer einzigartigen biochemischen Reaktion: TCA unterstützt das Eindringen von H2O2 in die Haut und moduliert gleichzeitig dessen Aggressivität. Während TCA alleine die obersten Hautschichten zerstören und somit abschälen würde, ermöglicht die Synergie mit H2O2 ein kontrolliertes Eindringen in tiefere Schichten ohne Zerstörung der Hautoberfläche. Stattdessen wird in der mittleren Hautschicht die Neubildung von kollagenen Fasern angeregt, Entzündungsprozesse werden kontrolliert und Wachstumsfaktoren für die Zellbildung werden freigesetzt. Das Ergebnis: Biorevitalisierung statt Abschälung."
      },
      {
        question: "Für wen ist die Behandlung geeignet?",
        answer: "Das chemische Peeling mit PRX-T33 ist grundsätzlich für Frauen und Männer aller Hauttypen (auch dunklere Hauttypen!), aller Altersgruppen und zu allen Jahreszeiten geeignet. Besonders empfehlenswert ist die Behandlung bei: Elastizitätsverlust und Hauterschlaffung, Falten und feinen Linien, Akne und Aknenarben, Pigmentflecken und ungleichmäßigem Teint, eingesunkenen Narben, Dehnungsstreifen. Nicht geeignet ist die Behandlung während Schwangerschaft und Stillzeit, bei bekannten Allergien gegen Inhaltsstoffe, bei offenen Wunden oder akuten Hautinfektionen."
      },
      {
        question: "Kann die Behandlung auch im Sommer durchgeführt werden?",
        answer: "Ja, das ist einer der großen Vorteile von PRX-T33! Anders als bei vielen anderen chemischen Peelings entsteht keine erhöhte Lichtempfindlichkeit (Fotosensibilität) der Haut. Die Behandlung kann daher auch in sonnenreichen Monaten durchgeführt werden. Wichtig ist jedoch, dass Sie konsequent einen hohen Sonnenschutz (mindestens LSF 30, besser LSF 50+) verwenden und direkte, intensive Sonneneinstrahlung in den ersten 2 Wochen nach der Behandlung vermeiden. Bei richtiger Nachsorge ist die Sommerbehandlung sicher und effektiv."
      },
      {
        question: "Wie viele Behandlungen sind notwendig?",
        answer: "Für ein zufriedenstellendes Ergebnis empfehle ich in der Regel 3-5 Behandlungen im Abstand von 1-2 Wochen. Die genaue Anzahl hängt von Ihrem Hautbild, den zu behandelnden Problemen und Ihren Zielen ab. Erste Verbesserungen – strahlende, glattere Haut – sehen Sie bereits nach der ersten Sitzung. Der volle Biorevitalisierungs-Effekt mit Kollagenstimulation entwickelt sich jedoch über mehrere Wochen und wird mit jeder weiteren Behandlung verstärkt. Nach der Behandlungsserie halten die Ergebnisse etwa 9-12 Monate. Danach kann eine Auffrischungsbehandlung (1-2 Sitzungen) das Ergebnis aufrechterhalten."
      },
      {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Die Behandlung verursacht nur minimale Beschwerden und ist deutlich angenehmer als viele Patienten erwarten. Während des Einmassierens des Peeling-Gels kann ein leichtes Brennen oder Wärmegefühl auftreten, das jedoch gut toleriert wird. Dieses Gefühl lässt nach wenigen Minuten nach. Eine Betäubung ist nicht erforderlich. Die meisten Patienten beschreiben die Empfindung als erträglich und vergleichen es mit einem intensiven Kribbeln. Nach der Behandlung fühlt sich die Haut leicht gespannt an, aber nicht schmerzhaft."
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer: "Die Behandlung wird im Allgemeinen sehr gut vertragen. Häufige, harmlose Nebenwirkungen sind: leichtes Brennen und milde Rötung während und direkt nach der Behandlung (klingt innerhalb weniger Stunden ab), leichte Hautspannung für 1-2 Tage, eventuell minimale, feine Schuppung bei sehr empfindlicher Haut (unbedenklich und selten). Deutliche Hautreaktionen mit Ausfallzeit sind aufgrund der speziellen Produktzusammensetzung nicht zu erwarten. Stärkere Nebenwirkungen wie ausgeprägte Rötungen, Schwellungen oder Krustenbildung sind sehr selten. Im Beratungsgespräch kläre ich Sie umfassend über alle möglichen Nebenwirkungen auf."
      },
      {
        question: "Bin ich nach der Behandlung sofort gesellschaftsfähig?",
        answer: "Ja, in der Regel sind Sie unmittelbar nach der Behandlung gesellschaftsfähig. Es gibt normalerweise keine Ausfallzeit. Ihre Haut kann für einige Stunden leicht gerötet sein und sich etwas gespannt anfühlen, aber dies ist meist dezent und lässt sich mit Make-up kaschieren. Eine sichtbare Schälung oder Krustenbildung tritt nicht auf. Sie können direkt nach der Behandlung Ihren Alltag fortsetzen, sollten aber für 24-48 Stunden auf intensiven Sport und Schwitzen verzichten. Dies macht PRX-T33 zur idealen 'Lunch-Time'-Behandlung für Berufstätige."
      },
      {
        question: "Was ist der Unterschied zwischen diesem Peeling und Fruchtsäurepeelings?",
        answer: "Fruchtsäurepeelings (AHA-Peelings) wirken hauptsächlich in den obersten Hautschichten und führen zu einer Abschälung der Hornschicht. Sie sind milder, erfordern aber oft mehr Sitzungen für sichtbare Ergebnisse. PRX-T33 hingegen dringt durch die patentierte TCA-H2O2-Kombination in mittlere Hautschichten vor und wirkt dort biorevitalisierend: Kollagenstimulation, Freisetzung von Wachstumsfaktoren, Entzündungskontrolle. Die Wirkung ist tiefgreifender und langanhaltender, ohne dass es zu einer sichtbaren Schälung kommt. Fruchtsäurepeelings sind eher oberflächlich exfolierend, PRX-T33 ist tiefenwirksam regenerierend."
      },
      {
        question: "Kann das Peeling mit anderen Behandlungen kombiniert werden?",
        answer: "Ja, chemisches Peeling lässt sich hervorragend mit anderen ästhetischen Behandlungen kombinieren – allerdings mit zeitlichem Abstand. Besonders sinnvolle Kombinationen sind: Microneedling (4 Wochen Abstand), Eigenbluttherapie (PRP/PRF) – kann direkt nach dem Peeling aufgetragen werden, Hyaluron-Filler oder Botulinumtoxin (2 Wochen Abstand), Skinbooster oder Profhilo (2 Wochen Abstand). Diese Kombinationen können synergistische Effekte erzielen und die Hautverjüngung maximieren. Im Beratungsgespräch erstelle ich Ihnen einen individuellen Behandlungsplan, wenn Kombinationstherapien für Sie sinnvoll sind."
      },
      {
        question: "Was kostet ein chemisches Peeling in Bremen?",
        answer: "Eine Behandlung mit PRX-T33 kostet ab 180€. Für eine komplette Behandlungsserie von 3-5 Sitzungen biete ich vergünstigte Paketpreise an. Die genannten Preise sind Richtwerte, die individuelle Abrechnung richtet sich nach der Gebührenordnung für Ärzte (GOÄ) und hängt vom Behandlungsumfang ab (z.B. nur Gesicht oder Gesicht + Hals + Dekolleté). Einen transparenten, individuellen Kostenplan erhalten Sie im persönlichen Beratungsgespräch in unserer Praxis in Bremen. Die Investition lohnt sich: Die Ergebnisse halten 9-12 Monate und verbessern nachhaltig Ihre Hautqualität."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für strahlende, erneuerte Haut?",
    subtitle: "Vereinbaren Sie jetzt Ihren Beratungstermin für ein chemisches Peeling mit Biorevitalisierung in Bremen – ohne Ausfallzeit, auch im Sommer.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für chemisches Peeling in Bremen: EL Aesthetics",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen medizinische Peeling-Behandlungen auf höchstem Niveau. Mit PRX-T33 setzen wir auf innovative Biorevitalisierung für natürliche, langanhaltende Ergebnisse – ohne Ausfallzeit.",
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
      <AreasSection {...areasData} />
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews
        reviews={reviews}
        title="Erfahrungen unserer Patienten mit chemischem Peeling"
        subtitle="Unsere Patienten schätzen vor allem die fehlende Ausfallzeit und die sofort sichtbaren Ergebnisse. Von Aknenarben über Pigmentflecken bis zur allgemeinen Hautverjüngung – hier finden Sie authentische Erfahrungsberichte."
      />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData} />
      <LocationSection {...locationData} />
    </div>
  );
}
