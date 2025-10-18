// app/page.tsx
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import Services from '@/components/Services'
import About from '@/components/About'
import ImageSlider from '@/components/ImageSlider'
import PatientReviews from '@/components/PatientReviews'
import { Review } from '@/types/Review'
import TreatmentSlider from '@/components/TreatmentsSlider'

export default function Home() {

  // Beispiel-Verwendung
const reviews : Review[] = [
  {
    id:1,
    name: "Sandra G.",
    rating: 2,
    text: "Ich war heute das zweite Mal bei der jungen, lieben und vor allem kompetenten Ärztin. Sie weiß definitiv was sie tut und ich fühle mich einfach sehr gut aufgehoben. Ich freue mich schon auf das nächste Mal und ich kann sie ruhigen Gewissens weiter empfehlen.",
    date: "2024-09-15"
  },
  {
    id:2,
    name: "Bianca S.",
    rating: 3,
    text: "Die Liebe Kübra macht wirklich tolle Arbeit, ich kann ihre Praxis jedem nur von Herzen empfehlen, meine Mutter und ich haben uns jetzt schon wiederholt bei ihr behandeln lassen und sind mehr als zufrieden mit den Ergebnissen. Sie hat einfach ein Auge für die Ästhetik und geht genau auf die Wünsche ihrer Patienten ein. Ihre Beratung ist sehr aufklärend und sie hat mich vorher sehr gut aufgeklärt. Die Ergebnisse sehen sehr natürlich aus. Die Praxis ist sehr schön eingerichtet und hygienisch. Außerdem geht sie sehr einfühlsam mit den Patienten um, sodass einem die Angst vor der Behandlung genommen wird. Man fühlt sich bei ihr sehr wohl. Vielen Dank für die tolle Arbeit! Ich freue mich schon auf meine nächste Behandlung.",
    date: "2024-08-22"
  },
  {
    id:3,
    name: "Layla E.",
    rating: 4,
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

  return (
    <main>
      <Hero />
      <div className='max-w-7xl mx-auto'>
        <Welcome />
        <Services />
        <TreatmentSlider/>
        <About />
        <PatientReviews reviews={reviews} title="Erfahrungen unserer Patienten" subtitle='Unsere Patienten schätzen vor allem die natürlichen Ergebnisse unserer Behandlungen und den einfühlsamen Umgang in unserer Praxis für ästhetische Medizin in Hanau. Viele berichten, wie zufrieden sie mit den Ergebnissen und der individuellen Beratung sind, die auf ihre persönlichen Wünsche abgestimmt ist.' />
        <ImageSlider />
      </div>
    </main>
  )
}