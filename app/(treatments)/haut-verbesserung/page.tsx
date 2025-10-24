import type { Metadata } from 'next';
import { TableOfContents, TOCItem, ConsultationSectionProps, ConsultationSection, CTASectionProps, FAQSection, FAQSectionProps, HeroSection, HeroSectionProps, IntroSection, IntroSectionProps, TreatmentsSection, TreatmentsSectionProps, CTASection } from '@/components/TreatmentPageComponents';

export const metadata: Metadata = {
  title: 'Hautverbesserung Bremen | Skinbooster, Profhilo, PRF, Microneedling & Peeling | EL Aesthetics',
  description:
    'Hautverbesserung in Bremen: Skinbooster & Profhilo für Feuchtigkeit, PRF & Polynukleotide für Regeneration, Microneedling & chemische Peelings für Ebenmäßigkeit – unterstützend bei Pigmentflecken (z. B. Melasma/Hyperpigmentierung), Rosazea/Couperose-Rötungen und Aknenarben. Medizinisch fundiert, natürlich, individuell (keine Heilversprechen).',
  keywords:
    // erweitert um Indikations-/Long-Tail-Keywords + lokale Varianten (ohne Heilversprechen)
    'Hautverbesserung Bremen, Hautbild verbessern Bremen, Hautstruktur verbessern Bremen, Hautqualität verbessern Bremen, Poren verfeinern Bremen, große Poren Bremen, feine Fältchen mildern Bremen, strahlender Teint Bremen, Glow Behandlung Bremen, Anti-Aging Behandlung Bremen, Hautverjüngung Bremen, Skinbooster Bremen, Profhilo Bremen, HA Skinbooster Bremen, PRF Bremen, Eigenbluttherapie Bremen, Polynukleotide Bremen, PDRN Bremen, Microneedling Bremen, Radiofrequenz Microneedling Bremen, Mesobotox Bremen, Microbotox Bremen, Chemisches Peeling Bremen, Fruchtsäurepeeling Bremen, TCA Peeling Bremen, Kollagenstimulation Bremen, Sculptra Bremen, Radiesse Bremen, CaHA Bremen, PLLA Bremen, Akne Bremen, Aknebehandlung Bremen, Aknenarben Bremen, Aknenarben Behandlung Bremen, Pigmentflecken Bremen, Pigmentstörungen Bremen, Hyperpigmentierung Bremen, postinflammatorische Hyperpigmentierung Bremen, PIH Bremen, Melasma Bremen, ungleichmäßiger Teint Bremen, Rosazea Bremen, Rosazea Unterstützung Bremen, Couperose Bremen, Gesichtsrötungen Bremen, Rötungen im Gesicht Bremen, Teleangiektasien Bremen, ölige Haut Bremen, Talgglanz reduzieren Bremen, Sonnenschäden Bremen, Photoaging Bremen, müde Haut Bremen, trockene Haut Bremen, Dehydrierte Haut Bremen, Unterlider feine Fältchen Bremen',
  openGraph: {
    title:
      'Hautverbesserung in Bremen – Skinbooster, Profhilo, PRF, Microneedling & Peeling | EL Aesthetics',
    description:
      'Mehr Glow, feinere Poren & gleichmäßigerer Teint: Methoden zur Hautqualität – Skinbooster & Profhilo, PRF/Polynukleotide, Microneedling & chemische Peelings; unterstützend bei Pigmentflecken (Melasma/Hyperpigmentierung), Rosazea/Couperose und Aknenarben.',
    type: 'website',
    locale: 'de_DE',
    images: ['https://elaesthetics-bremen.de/assets/hautverbesserung/og-image-hautverbesserung-bremen.webp'],
  },
  alternates: {
    canonical: 'https://elaesthetics-bremen.de/haut-verbesserung',
  },
};

export default function HautverbesserungHubPage() {
  const heroData: HeroSectionProps = {
    title: 'Hautverbesserung in Bremen',
    subtitle:
      'Hautbild & Hautstruktur verbessern: Skinbooster/Profhilo für Hydration & Glow, PRF & Polynukleotide für Regeneration, medizinisches Microneedling & chemische Peelings für Ebenmäßigkeit – unterstützend bei Pigmentflecken (z. B. Melasma/Hyperpigmentierung), Rosazea/Couperose-Rötungen, großen Poren & Aknenarben.',
    imageSrc: '/assets/haut-verbesserung/haut-verbesserung_hero.webp',
    imageAlt: 'Hautbild verbessern in Bremen: Poren verfeinern, Pigmentflecken & Rosazea-unterstützende Maßnahmen – moderne Behandlungen bei EL Aesthetics Bremen',
    primaryCTA: { text: 'Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: 'Behandlungen anzeigen', href: '#treatments' },
  };

  const introData: IntroSectionProps = {
    title: 'Hautqualität verbessern – was gibts für Optionen?',
    content: [
      'Wir kombinieren hydratisierende Skinbooster (inkl. Skinbooster/Profhilo mit BAP-Technik), regenerative Verfahren wie PRF (Eigenblut) & Polynukleotide und strukturverbessernde Techniken wie Microneedling sowie Mesobotox/Microbotox und chemische Peelings – für ein ebenmäßigeres Hautbild.',
      'Ziele: mehr Feuchtigkeit & Elastizität, feinere Poren, weniger Talgglanz, gleichmäßiger Teint und ein natürlich frischer Glow – ohne „gemacht“-Effekt.',
      'Typische Anliegen (Indikationen): Pigmentflecken & Pigmentstörungen (z. B. Melasma, Hyperpigmentierung/Post-Inflammation/PIH), Rosazea/Couperose mit Gesichtsrötungen & Teleangiektasien, Akne/Aknenarben, große Poren & ölige Haut, müde/trockene/dehydrierte Haut, feine Fältchen sowie Zeichen von Sonnenschäden/Photoaging.',
      'Welche Methode passt, hängt von Hautbild, Areal und Ziel ab. Häufig sind Kombinationen sinnvoll – z. B. Skinbooster für Glow, PRF/Polynukleotide für Regeneration und Microneedling/Peeling für Struktur & Poren (keine Heilversprechen).',
    ],
  };

  const treatmentsData: TreatmentsSectionProps = {
    title: 'Behandlungen zur Hautverbesserung',
    treatments: [
      {
        imageUrl: '/assets/hyaluron/hyaluron-skinbooster_hero.webp',
        imageAlt: 'Skinbooster Behandlung in Bremen für Feuchtigkeit, Glow, große Poren und ein feineres Hautbild',
        title: 'Skinbooster (HA)',
        description:
          'Feuchtigkeits-Boost & feineres Hautbild im Gesicht, Hals & Dekolleté. Unterstützend bei trockener/dehydrierter Haut und feinen Fältchen.',
        treatmentUrl: '/hyaluron/skinbooster',
      },
      {
        imageUrl: '/assets/hyaluron/hyaluron-profhilo_hero.webp',
        imageAlt: 'Profhilo (BAP-Technik) in Bremen zur Hydration, Elastizität & Glow – Unterstützung bei feinen Fältchen',
        title: 'Hyaluron-Remodellierung (BAP-Technik)',
        description:
          'Innovativer Skinbooster zur Bioremodellierung: fördert Kollagen & Elastin, spendet intensiv Feuchtigkeit – ohne Volumenwirkung.',
        treatmentUrl: '/hyaluron/profhilo',
      },
      {
        imageUrl: '/assets/mesotherapie/mesotherapie-haut_hero.webp',
        imageAlt: 'Mesotherapie in Bremen zur Unterstützung eines gleichmäßigeren Hautbilds bei Pigmentstörungen & fahlem Teint',
        title: 'Mesotherapie',
        description:
          'Feine Mikroinjektionen von Wirkstoff-Cocktails für mehr Frische und Ebenmäßigkeit – individuell abgestimmt.',
        treatmentUrl: '/mesotherapie',
      },
      {
        imageUrl: '/assets/eigenbluttherapie/eigenbluttherapie_hero.webp',
        imageAlt: 'PRF Eigenbluttherapie in Bremen zur Unterstützung der Hautregeneration (z. B. feine Fältchen, Unterlider)',
        title: 'Eigenbluttherapie (PRF)',
        description:
          'Autologe Regeneration: PRF setzt über Wochen Wachstumsfaktoren frei – geeignet für feine Fältchen & sensible Zonen (z. B. Unterlider).',
        treatmentUrl: '/eigenbluttherapie',
      },
      {
        imageUrl: '/assets/medizinisches-microneedling/medizinisches-microneedling_hero.webp',
        imageAlt: 'Microneedling in Bremen zur Verbesserung von Struktur, Poren & Aknenarben – auch bei PIH/Post-Akne',
        title: 'Medizinisches Microneedling',
        description:
          'Verbessert Struktur, Poren & Aknenarben; optional mit Radiofrequenz für zusätzlichen Straffungseffekt.',
        treatmentUrl: '/medizinisches-microneedling',
      },
      {
        imageUrl: '/assets/botulinumtoxin/botox-microbotox_hero.webp',
        imageAlt: 'Mesobotox / Microbotox in Bremen zum Poren verfeinern & Talgglanz reduzieren bei öliger Haut',
        title: 'Mesobotox / Microbotox',
        description:
          'Oberflächliche Botulinumtoxin-Mikrodepots: verfeinern Poren, reduzieren Talg & Glanz – ohne die Mimik zu beeinflussen.',
        treatmentUrl: '/botox/microbotox',
      },
      {
        imageUrl: '/assets/chemisches-peeling/chemisches-peeling_hero.webp',
        imageAlt: 'Chemisches Peeling in Bremen für Ebenmäßigkeit & gegen Pigmentflecken (z. B. Melasma, Hyperpigmentierung/PIH)',
        title: 'Chemisches Peeling',
        description:
          'Von sanftem Fruchtsäure-Peeling bis TCA: für einen gleichmäßigeren Teint, Glow und feinere Linien – mit planbarer Downtime.',
        treatmentUrl: '/chemisches-peeling',
      },
      {
        imageUrl: '/assets/polynukleotide/polynukleotide_hero.webp',
        imageAlt: 'Polynukleotide (PN/PDRN) in Bremen zur Unterstützung von Hydration, Elastizität & Hautdichte',
        title: 'Polynukleotide (PN/PDRN)',
        description:
          'Bioregeneration ohne Volumen: unterstützt Zellaktivität, Hydration & Elastizität – geeignet bei müder Haut & feinen Fältchen.',
        treatmentUrl: '/polynukleotide',
      },
      {
        imageUrl: '/assets/kollagenstimulation/kollagenstimulation_hero.webp',
        imageAlt: 'Kollagenstimulation in Bremen (z. B. CaHA/PLLA) für straffere Konturen & strukturierte Haut',
        title: 'Kollagenstimulation',
        description:
          'Strukturbildend durch Kollagenneubildung (z. B. CaHA/PLLA): unterstützt Straffheit & Kontur – Face & Hände.',
        treatmentUrl: '/kollagenstimulation',
      },
    ],
  };

  const consultationData: ConsultationSectionProps = {
    title: 'Welche Methode passt zu Ihrer Haut?',
    description: [
      'Als Ärztin für ästhetische Medizin analysiere ich Hauttyp, Hautzustand und Zielsetzung – und bespreche mit Ihnen, welche Verfahren (oder Kombination) sinnvoll sind, um Hautbild & Hautstruktur zu verbessern.',
      'Typische Anliegen in meiner Praxis in Bremen: Pigmentflecken (Melasma, Hyperpigmentierung/PIH), Rosazea/Couperose mit Gesichtsrötungen & sichtbaren Äderchen, Akne/Aknenarben, große Poren & ölige Haut, feine Fältchen sowie Sonnenschäden/Photoaging.',
      'Wir definieren realistische Ziele, Intervalle (Serien/Booster), Downtime & Pflege – für planbare, natürliche Ergebnisse wie verfeinerte Poren, weniger Talgglanz und ein ebenmäßigeres Erscheinungsbild.',
      'Sicherheit steht an erster Stelle: sterile Arbeitsweise, hochwertige Produkte, schonende Techniken. Keine Heilversprechen.',
    ],
    ctaText: 'Jetzt Beratungsgespräch vereinbaren',
    ctaHref: '/kontakt',
    backgroundColor: 'bg-[#FDF6F0]',
  };

  const faqData: FAQSectionProps = {
    title: 'Häufige Fragen zur Hautverbesserung',
    faqs: [
      {
        question:
          'Skinbooster, Profhilo, PRF, Polynukleotide, Microneedling, Peeling, Mesobotox / Microbotox – was ist der Unterschied?',
        answer:
          'Skinbooster & Profhilo spenden intensiv Feuchtigkeit und unterstützen Elastizität; PRF und Polynukleotide haben einen regenerativen Ansatz (Hautdichte, Feuchtigkeit, Feinfältchen). Microneedling (ggf. mit RF) adressiert Struktur, Poren & Narben. Chemische Peelings gleichen Tone & Textur aus. Mesobotox/Microbotox kann Poren verfeinern und Glanz reduzieren – ohne die Mimik zu beeinflussen. Die Kollagenstimulation (z. B. CaHA/PLLA) unterstützt Straffheit & Kontur.',
      },
      {
        question: 'Wie viele Sitzungen sind nötig und wie lange hält der Effekt?',
        answer:
          'Skinbooster/Profhilo: meist 2–3 Sitzungen, Auffrischung nach 6–9 Monaten. PRF/Polynukleotide: Serien à 2–3 Sitzungen, der Effekt baut sich über Wochen auf. Microneedling: 3–4 Sitzungen im Abstand von 4–6 Wochen. Peelings: je nach Tiefe einmalig bis kurativ. Mesobotox/Microbotox: ca. alle 3–4 Monate. Kollagenstimulation: Wirkung über Monate, Intervalle individuell (keine Heilversprechen).',
      },
      {
        question: 'Gibt es Downtime?',
        answer:
          'Leichte Rötungen/Schwellungen oder kleine Hämatome sind möglich und klingen meist nach 1–3 Tagen ab. Bei mittleren/tiefen Peelings ist mit planbarer Downtime (Schälung) zu rechnen. Das Protokoll wird an Ihren Alltag angepasst.',
      },
      {
        question: 'Kann man Behandlungen kombinieren?',
        answer:
          'Ja – Kombinationen sind oft effektiv, z. B. Skinbooster + Microneedling für Glow & Struktur oder PRF/Polynukleotide mit Peelings. Reihenfolge & Intervalle werden individuell festgelegt.',
      },
      {
        question: 'Für welche Areale eignen sich die Verfahren?',
        answer:
          'Gesicht, Hals, Dekolleté und Hände. PRF/Polynukleotide eignen sich auch für sensible Bereiche wie die Unterlider. Microneedling ist zudem bei Aknenarben eine Option.',
      },
      {
        question: 'Was kosten die Behandlungen?',
        answer:
          'Die Kosten richten sich nach Methode, Material und Umfang. Im Beratungstermin erhalten Sie einen transparenten, individuellen Kostenplan.',
      },
      // Keyword-nahe Zusatzfragen (lokal & Long-Tail, ohne Heilversprechen)
      {
        question: 'Pigmentflecken/Melasma in Bremen – welche sanften Optionen gibt es?',
        answer:
          'Je nach Befund können abgestimmte chemische Peelings, Microneedling (mit angepassten Parametern) sowie hydratisierende/bioregulierende Verfahren wie Skinbooster, PRF oder Polynukleotide in Frage kommen. Sonnenschutz (SPF 50+) bleibt Basis. Individuelle Beratung ist entscheidend.',
      },
      {
        question: 'Rosazea/Couperose in Bremen – gibt es unterstützende Maßnahmen?',
        answer:
          'In stabilen Phasen sind schonende Protokolle möglich (z. B. ausgewählte Peelings, Microneedling mit Vorsicht, hydratisierende Booster). Wir achten auf Trigger-Management, Hautbarriere & SPF. Keine Heilversprechen.',
      },
      {
        question: 'Aknenarben behandeln in Bremen – welche Verfahren passen?',
        answer:
          'Medizinisches Microneedling (ggf. RF) ist ein bewährter Ansatz zur Verbesserung atropher Narben; ergänzend kommen PRF/Polynukleotide oder Peelings in Frage. Die Auswahl richtet sich nach Narbentyp, Hauttyp & Alltag.',
      },
      {
        question: 'Große Poren & ölige Haut – was hilft in Bremen?',
        answer:
          'Optionen sind u. a. Mesobotox/Microbotox, Microneedling und geeignete chemische Peelings. Welche Methode passt, hängt von Hauttyp, Hautzustand und Zielsetzung ab.',
      },
    ],
  };

  const ctaData: CTASectionProps = {
    title: 'Natürlich bessere Haut – ohne künstlichen Look',
    subtitle:
      'Termin zur Hautverbesserung in Bremen vereinbaren: Hautbild & Hautstruktur verbessern mit Skinboostern (inkl. Profhilo/BAP-Technik), PRF/Polynukleotiden, (RF-)Microneedling, Peelings, Mesobotox/Microbotox & Kollagenstimulation – unterstützend bei Pigmentflecken, Rosazea/Couperose, großen Poren & Aknenarben.',
    primaryCTA: { text: 'Jetzt Beratung anfragen', href: '/kontakt' },
    secondaryCTA: { text: '+49 155 66919635', href: 'tel:+4915566919635' },
  };

  const tocItems: TOCItem[] = [
    { id: 'intro', label: 'Über die Behandlung' },
    { id: 'treatments', label: 'Behandlungen' },
    { id: 'consultation', label: 'Beratung' },
    { id: 'faq', label: 'Häufige Fragen' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection {...heroData} />
      <TableOfContents items={tocItems} />
      <IntroSection {...introData} />
      <TreatmentsSection {...treatmentsData} />
      <ConsultationSection {...consultationData} />
      <FAQSection {...faqData} />
      <CTASection {...ctaData}/>
    </div>
  );
}