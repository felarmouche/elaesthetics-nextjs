import type { Metadata } from 'next';
import { ConsultationSectionProps, QuickInfoSection, QuickInfoSectionProps, ConsultationSection, CTASection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, LocationSection, LocationSectionProps, ProcessSection, ProcessSectionProps, TreatmentCareSection, TreatmentCareSectionProps, TreatmentsSection, TreatmentsSectionProps} from '@/components/TreatmentPageComponents';
import PatientReviews from '@/components/PatientReviews';
import {Review} from '@/types/Review'
import { PRICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Botox bei Migräne Bremen | Chronische Migräne behandeln | EL Aesthetics',
  description: 'Botox-Behandlung gegen chronische Migräne in Bremen ✓ Reduktion von Häufigkeit & Intensität der Kopfschmerzen ✓ Zugelassene Therapie ✓ Erfahrene Ärztin ✓ Jetzt Beratungstermin buchen!',
  keywords: 'Botox Migräne Bremen, Botulinumtoxin Migräne Bremen, chronische Migräne behandeln Bremen, Migräne Therapie Bremen, Kopfschmerzen Botox Bremen, Migränebehandlung Bremen, Botulinumtoxin gegen Kopfschmerzen',
  openGraph: {
    title: 'Botox bei chronischer Migräne in Bremen - Wirksame Therapie bei EL Aesthetics',
    description: 'Leiden Sie unter chronischer Migräne? Erfahren Sie, wie Botox-Behandlungen die Häufigkeit und Intensität Ihrer Migräneattacken reduzieren können.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/botulinumtoxin-migräne_hero.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/botulinumtoxin/migraene',
  },
};

export default function BotoxMigraenePage() {
  const heroData: HeroSectionProps = {
    title: "Botolinumtoxin bei chronischer Migräne in Bremen",
    subtitle: "Leiden Sie unter häufigen Migräneattacken?\nBei EL Aesthetics bieten wir Ihnen die zugelassene Botulinumtoxin-Therapie zur Behandlung chronischer Migräne an.",
    imageSrc: "/assets/botulinumtoxin/botulinumtoxin-migräne_hero.webp",
    imageAlt: "Frau mit chronischer Migräne vor eine Botox Behandlung in Bremen",
    primaryCTA: { text: "Termin vereinbaren", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const introData: IntroSectionProps = {
    title: "Wie wirkt Botulinumtoxin bei Migräne?",
    content: [
      "Im Jahr 2011 erhielt Botulinumtoxin die offizielle Zulassung zur Behandlung von chronischer Migräne. Das bedeutet, dass es gezielt bei Menschen mit häufigen Migräneattacken eingesetzt werden kann, um deren Symptome zu lindern.",
      "Das Ziel der Behandlung mit Botulinumtoxin bei Migräne besteht darin, entweder die Häufigkeit der Attacken oder die Intensität der Kopfschmerzen zu verringern – idealerweise beides. Eine Reduktion um ein Drittel gilt in der Regel als Maß für den Therapieerfolg.",
      "Die Behandlung mit Botulinumtoxin bei Migräne beinhaltet die gezielte Injektion von Botulinumtoxin in bestimmte Bereiche des Kopfes und des Nackens. Dies hilft, die Muskeln zu entspannen und Spannungskopfschmerzen zu lindern, die mit Migräne verbunden sein können.",
      "Studien belegen, dass selbst bei Patienten, bei denen die Migränefrequenz trotz Botulinumtoxin unverändert bleibt, dennoch eine Linderung der Kopfschmerzen festgestellt wurde. Wichtig: Botulinumtoxin wirkt nicht bei allen Patienten mit Migräne. Jeder Fall ist individuell, und die Behandlungsergebnisse können von Person zu Person variieren."
    ]
  };

  const quickInfoData: QuickInfoSectionProps = {
    title: "Die Botulinumtoxin Migränebehandlung auf einen Blick",
    benefits: [
      { title: "Preis", description: `ab ${PRICES.botulinum.migraene}€*`, iconUrl: "/assets//icons/EUR.svg" },
      { title: "Dauer", description: "ca. 30-45 Min", iconUrl: "/assets//icons/TIME.svg" },
      { title: "Wirkung", description: "nach 10-14 Tagen spürbar", iconUrl: "/assets//icons/TIME.svg" },
      { title: "Haltbarkeit", description: "3-6 Monate", iconUrl: "/assets//icons/CAL.svg" },
      { title: "Betäubung", description: "nicht erforderlich", iconUrl: "/assets//icons/Spritze.svg" },
      { title: "Ausfallzeit", description: "keine (sofort gesellschaftsfähig)", iconUrl: "/assets//icons/gesellschaft.svg" }
    ],
    note: "*Die genannten Preise sind Richtwerte und orientieren sich an der Gebührenordnung für Ärzte (GOÄ). Der finale Preis wird im Beratungsgespräch festgelegt."
  };

  const processData: ProcessSectionProps = {
    title: "Ablauf Ihrer Botulinumtoxin Migränebehandlung in Bremen",
    steps: [
      {
        number: "01",
        title: "Ausführliche Beratung und Anamnese",
        description: "In unserer Praxis in Bremen führen wir zunächst ein ausführliches Gespräch über Ihre Migränehistorie. Wir erfassen die Häufigkeit und Intensität Ihrer Attacken, sowie bereits durchgeführte Therapien. Gemeinsam besprechen wir, ob eine Botulinumtoxin-Behandlung für Sie geeignet ist und welche Ergebnisse realistisch sind."
      },
      {
        number: "02",
        title: "Erstbehandlung nach Standardschema",
        description: "Die erste Behandlung erfolgt mit insgesamt 31 Injektionspunkten nach einem Standardschema an der Stirn, den Schläfen, dem Hinterkopf und Nacken. Die Bereiche werden desinfiziert und das Botulinumtoxin wird präzise in die festgelegten Punkte injiziert."
      },
      {
        number: "03",
        title: "Kontrolle und Anpassung",
        description: "Nach spätestens 14 Tagen sollten Sie eine Linderung verspüren. Sollte sich nach der Erstbehandlung kein Erfolg einstellen, wird in einer zweiten Sitzung die Dosis erhöht. Die zusätzlichen Einheiten werden dann in die Zonen gespritzt, in denen Sie am stärksten durch Migräne geplagt werden."
      },
      {
        number: "04",
        title: "Regelmäßige Folgebehandlungen",
        description: "Die Behandlung erfordert regelmäßige Injektionen in Abständen von etwa 12 Wochen, um anhaltende Linderung zu erzielen. Viele Patienten berichten von einer deutlichen Verbesserung ihrer Lebensqualität durch die kontinuierliche Therapie."
      }
    ]
  };

  const treatmentCareData: TreatmentCareSectionProps = {
    title: "Wichtige Hinweise zur Behandlung",
    beforeTreatment: {
      title: "Vor der Behandlung",
      instructions: [
        {
          title: "Blutverdünnende Medikamente",
          description: "Verzichten Sie nach ärztlicher Rücksprache ca. 7 Tage vor der Behandlung auf blutverdünnende Medikamente (z.B. Aspirin, Ibuprofen, Diclofenac), um das Risiko von Blutergüssen zu minimieren."
        },
        {
          title: "Alkohol",
          description: "Vermeiden Sie 2 Tage vor der Behandlung Alkohol, da dieser die Durchblutung erhöht und zu mehr Schwellungen führen kann."
        },
        {
          title: "Gesundheitszustand",
          description: "Sie sollten sich gesund fühlen. Bei akuten Infekten oder Entzündungen im Behandlungsareal sollte die Behandlung verschoben werden."
        },
        {
          title: "Schwangerschaft & Stillzeit",
          description: "Während der Schwangerschaft und Stillzeit sind -Behandlungen nicht erlaubt."
        },
        {
          title: "Keine OP in zeitlicher Nähe",
          description: "Die Behandlung sollte nicht 2 Wochen vor oder nach einer Operation durchgeführt werden."
        }
      ]
    },
    afterTreatment: {
      title: "Nach der Behandlung",
      instructions: [
        {
          title: "Sport & körperliche Anstrengung",
          description: "Verzichten Sie für 2 Tage auf Sport und Schwimmbad, um die optimale Wirkung nicht zu beeinträchtigen."
        },
        {
          title: "Hitze vermeiden",
          description: "Meiden Sie für 1-2 Wochen intensive Sonneneinstrahlung, Sauna, Solarium oder andere Wärmeeinwirkung."
        },
        {
          title: "Kosmetische Behandlungen",
          description: "Planen Sie für 2 Wochen keine Gesichtsmassagen oder andere kosmetische Behandlungen im Gesicht."
        },
        {
          title: "Alkohol",
          description: "Verzichten Sie mindestens 2 Tage auf Alkohol, da dies die Wirksamkeit mindern kann."
        }
      ]
    }
  };

  const reviews : Review[] = [
    {
      id:1,
      name: "Sandra G.",
      rating: 5,
      text: "Ich war heute das zweite Mal bei der jungen, lieben und vor allem kompetenten Ärztin. Sie weiß definitiv was sie tut und ich fühle mich einfach sehr gut aufgehoben. Ich freue mich schon auf das nächste Mal und ich kann sie ruhigen Gewissens weiter empfehlen.",
      date: "2024-09-15"
    },
    {
      id:2,
      name: "Bianca S.",
      rating: 5,
      text: "Die Liebe Kübra macht wirklich tolle Arbeit, ich kann ihre Praxis jedem nur von Herzen empfehlen, meine Mutter und ich haben uns jetzt schon wiederholt bei ihr behandeln lassen und sind mehr als zufrieden mit den Ergebnissen. Sie hat einfach ein Auge für die Ästhetik und geht genau auf die Wünsche ihrer Patienten ein. Ihre Beratung ist sehr aufklärend und sie hat mich vorher sehr gut aufgeklärt. Die Ergebnisse sehen sehr natürlich aus. Die Praxis ist sehr schön eingerichtet und hygienisch. Außerdem geht sie sehr einfühlsam mit den Patienten um, sodass einem die Angst vor der Behandlung genommen wird. Man fühlt sich bei ihr sehr wohl. Vielen Dank für die tolle Arbeit! Ich freue mich schon auf meine nächste Behandlung.",
      date: "2024-08-22"
    },
    {
      id:3,
      name: "Layla E.",
      rating: 5,
      text: "Super nette, ehrliche Beratung. Ich wurde gut aufgeklärt und Schritt für Schritt durch die Behandlung geführt. Ich hatte vorher etwas Angst, die wurde mir aber direkt genommen und habe mich sehr wohlgefühlt. Bin auch richtig happy mit dem Endergebnis und würde sie jedem weiterempfehlen.",
      date: "2024-07-10"
    },
    {
      id:4,
      name: "Maria K.",
      rating: 5,
      text: "Absolut professionell und sehr herzlich! Die Behandlung war schmerzfrei und das Ergebnis ist fantastisch. Ich komme definitiv wieder.",
      date: "2024-06-18"
    },
    {
      id:5,
      name: "Julia M.",
      rating: 5,
      text: "Ich bin begeistert! Die Beratung war ausführlich, die Behandlung sanft und das Ergebnis natürlich und wunderschön. Vielen Dank!",
      date: "2024-05-25"
    }
  ];

  const consultationData: ConsultationSectionProps = {
    title: "Ihre Expertin für Botulinumtoxin bei Migräne in Bremen",
    description: [
      "Sie möchten Ihre Migränebeschwerden reduzieren und endlich wieder mehr Lebensqualität gewinnen?",
      "Mein Name ist Ola El-Armouche, ich bin Ärztin mit Spezialisierung auf ästhetische Medizin und Gründerin von EL Aesthetics. Mit langjähriger Erfahrung in der Behandlung mit Botulinumtoxin biete ich Ihnen eine wirksame Therapie zur Linderung chronischer Migräne an.",
      "Ich bin zertifiziert für Botulinumtoxin- und Filler-Behandlungen und Mitglied der Deutschen Gesellschaft für ästhetische Botulinum- und Fillertherapie e.V. (DGBT). Durch kontinuierliche Fortbildungen und die Teilnahme an internationalen Fachkongressen bleibe ich auf dem neuesten Stand der medizinischen Entwicklungen.",
      "In meiner Praxis in Bremen steht Ihre Gesundheit und Ihr Wohlbefinden im Mittelpunkt. Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin und finden Sie heraus, ob eine Botulinumtoxin-Behandlung Ihre Migränebeschwerden lindern kann."
    ],
    ctaText: "Jetzt Beratungstermin anfragen",
    ctaHref: "/terminanfragen",
    imageSrc: "/assets//tinified/IMG_7364.webp",
    imageAlt: "Ärztin Ola El-Armouche im Beratungsgespräch für eine Botox Migränebehandlung in Bremen",
    backgroundColor: "bg-[#FDF6F0]"
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: "Weitere Botulinumtoxin Behandlungen in Bremen",
    treatments: [
      {
        imageUrl: "/assets/botulinumtoxin/botox-faltenbehandlung_hero.webp",
        imageAlt: "Botox Faltenbehandlung für Stirnfalten und Zornesfalten",
        title: "Faltenbehandlung",
        description: "Die klassische Botulinumtoxin-Behandlung reduziert mimische Falten wie Stirnfalten, Zornesfalten und Krähenfüße. Für ein entspanntes, jugendliches Aussehen ohne gefrorene Mimik.",
        treatmentUrl: "/botulinumtoxin/faltenbehandlung"
      },
      {
        imageUrl: "/assets/botulinumtoxin/botulinumtoxin-masseter_hero.webp",
        imageAlt: "Botox Behandlung des Masseter-Muskels zur Gesichtskonturierung",
        title: "Masseter-Behandlung (Jawline)",
        description: "Durch gezielte Botulinumtoxin-Injektionen in den Kaumuskel (Masseter) kann die Gesichtsform harmonisiert und eine markante Jawline geschaffen werden. Auch bei Zähneknirschen (Bruxismus) ist diese Behandlung sehr wirksam.",
        treatmentUrl: "/botulinumtoxin/masseter"
      },
      {
        imageUrl: "/assets/botulinumtoxin/botulinumtoxin-hyperhidrose_hero.webp",
        imageAlt: "Botox Behandlung gegen übermäßiges Schwitzen",
        title: "Hyperhidrose-Behandlung",
        description: "Bei übermäßigem Schwitzen (Hyperhidrose) kann Botox die Schweißproduktion deutlich reduzieren. Die Behandlung ist besonders effektiv an Achseln, Händen und Füßen.",
        treatmentUrl: "/botulinumtoxin/hyperhidrose"
      },
      {
        imageUrl: "/assets/botulinumtoxin/botulinumtoxin-microbotox_hero.webp",
        imageAlt: "Microbotox Behandlung für feinere Hautstruktur und Porenverfeinung",
        title: "Microbotox (Skin Quality)",
        description: "Microbotox wird flächig in die oberen Hautschichten injiziert und verbessert die Hautqualität, verfeinert Poren und reduziert die Talgproduktion. Ideal für einen ebenmäßigen, glatten Teint.",
        treatmentUrl: "/botulinumtoxin/microbotox"
      }
    ]
  };

  const faqData: FAQSectionProps = {
    title: "Häufige Fragen zur Botulinumtoxin Migränebehandlung",
    faqs: [
      {
        question: "Wie funktioniert Botulinumtoxin bei Migräne?",
        answer: "Botulinumtoxin wird in bestimmte Punkte an Kopf und Nacken injiziert, wo es die Muskulatur entspannt und die Freisetzung von Schmerzsubstanzen hemmt. Dies reduziert die Häufigkeit und Intensität von Migräneattacken. Die genaue Wirkweise ist noch Gegenstand der Forschung, aber klinische Studien zeigen deutliche Erfolge bei chronischer Migräne."
      },
      {
        question: "Für wen ist die Botulinumtoxin-Behandlung bei Migräne geeignet?",
        answer: "Die Behandlung ist für Patienten mit chronischer Migräne zugelassen, das heißt für Menschen, die an mindestens 15 Tagen pro Monat unter Kopfschmerzen leiden, davon an mindestens 8 Tagen mit typischen Migränesymptomen. Vor der Behandlung wird in einem ausführlichen Gespräch geprüft, ob die Therapie für Sie geeignet ist."
      },
      {
        question: "Wann sehe ich das Ergebnis und wie lange hält es?",
        answer: "Nach spätestens 14 Tagen sollten Sie eine Linderung verspüren. Bei manchen Patienten zeigt sich die Wirkung bereits nach wenigen Tagen. Die Wirkung hält durchschnittlich 3-6 Monate an. Die Behandlung sollte in regelmäßigen Abständen von etwa 12 Wochen wiederholt werden, um einen kontinuierlichen Therapieerfolg zu erzielen."
      },
      {
        question: "Ist die Behandlung schmerzhaft?",
        answer: "Die Injektionen werden mit sehr feinen Nadeln durchgeführt und sind in der Regel gut verträglich. Die meisten Patienten beschreiben nur ein leichtes Pieken an den Einstichstellen. Eine Betäubung ist normalerweise nicht erforderlich. Die gesamte Behandlung dauert etwa 30-45 Minuten."
      },
      {
        question: "Welche Nebenwirkungen können auftreten?",
        answer: "Botulinumtoxin wird bei Migräne in relativ hohen Dosen gespritzt. Es können Nacken- und Kopfschmerzen, Übelkeit, Schwindel und Sehstörungen auftreten. Diese Symptome sind jedoch vorübergehend und verschwinden normalerweise nach 1-2 Tagen. Eine seltene Nebenwirkung ist ein zeitweiliges Doppelsehen, das sich aber innerhalb von 2-3 Wochen gibt. Kleine Blutergüsse an den Einstichstellen sind möglich. Aufgrund der höheren Dosis in der Stirn besteht die Möglichkeit von herabsinkenden Augenbrauen, was jedoch selten vorkommt."
      },
      {
        question: "Wirkt Botulinumtoxin bei jedem Migränepatienten?",
        answer: "Nein, Botulinumtoxin wirkt nicht bei allen Patienten mit Migräne. Studien zeigen jedoch, dass viele Patienten von einer deutlichen Reduktion der Anfallshäufigkeit oder Schmerzintensität profitieren. Eine Reduktion um ein Drittel gilt als Therapieerfolg. Selbst bei Patienten, bei denen die Frequenz unverändert bleibt, wird häufig eine Linderung der Kopfschmerzen festgestellt. Die Erwartungen sollten realistisch sein."
      },
      {
        question: "Was kostet eine Botulinumtoxin Migränebehandlung in Bremen?",
        answer: "Die Kosten für eine Migränebehandlung mit Botulinumtoxin beginnen bei etwa 550€ und richten sich nach der benötigten Dosis. Im persönlichen Beratungsgespräch in unserer Bremer Praxis erstelle ich Ihnen einen transparenten und individuellen Kostenplan. Da es sich um eine medizinische Indikation handelt, können in bestimmten Fällen die Kosten von der Krankenkasse übernommen werden."
      },
      {
        question: "Kann ich nach der Behandlung sofort wieder arbeiten gehen?",
        answer: "Ja, Sie sind in der Regel sofort gesellschaftsfähig. Die Behandlung hinterlässt nur kleine Einstichstellen, die schnell verblassen. Sie sollten allerdings für 2 Tage auf Sport und starke körperliche Anstrengung verzichten."
      }
    ]
  };

  const ctaData: CTASectionProps = {
    title: "Bereit für eine Linderung Ihrer Migränebeschwerden?",
    subtitle: "Vereinbaren Sie jetzt Ihren unverbindlichen Beratungstermin für eine Botulinumtoxin Migränebehandlung in Bremen.",
    primaryCTA: { text: "Jetzt Termin anfragen", href: "/terminanfragen" },
    secondaryCTA: { text: "0155 66919635", href: "tel:+4915566919635" }
  };

  const locationData: LocationSectionProps = {
    title: "Ihre Praxis für Botulinumtoxin Migränebehandlung in Bremen: EL Aesthetics",
    description: "In unserer modernen Praxis im Herzen von Bremen bieten wir Ihnen Botulinumtoxin-Behandlungen gegen chronische Migräne auf höchstem medizinischen Niveau. Wir legen Wert auf individuelle Beratung, präzise Therapie und eine vertrauensvolle Atmosphäre.",
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
      <QuickInfoSection {...quickInfoData} />
      <ProcessSection {...processData} />
      <TreatmentCareSection {...treatmentCareData} />
      <PatientReviews reviews={reviews} title="Erfahrungen unserer Patienten" subtitle='Unsere Patienten schätzen vor allem die kompetente Beratung und den einfühlsamen Umgang in unserer Praxis für ästhetische Medizin in Bremen. Viele berichten, wie zufrieden sie mit den Behandlungsergebnissen und der individuellen Betreuung sind.' />
      <ConsultationSection {...consultationData} />
      <TreatmentsSection {...treatmentsData} />
      <FAQSection {...faqData} />

    </div>
  );
}