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


  return (
    <main>
      <Hero />
      <div className='max-w-7xl mx-auto'>
          <Welcome />
          <PatientReviews/>
          <Services />
          <TreatmentSlider/>
          <About />
          <ImageSlider />
      </div>
    </main>
  )
}