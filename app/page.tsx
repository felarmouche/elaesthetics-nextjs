// app/page.tsx
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero'
import Welcome from '@/components/Welcome'
import Services from '@/components/Services'
import About from '@/components/About'
import TreatmentSlider from '@/components/TreatmentsSlider'
import ImageSlider from '@/components/ImageSlider'
import PatientReviews from '@/components/PatientReviews'

export const metadata: Metadata = {
  title: { absolute: 'Ästhetische Medizin Bremen | EL Aesthetics' },
  description: 'Privatpraxis für ästhetische Medizin in Bremen Oberneuland. Ärztliche Behandlungen mit Botulinumtoxin, Hyaluron & Eigenbluttherapie. Jetzt Termin vereinbaren.',
  keywords: ['ästhetische Medizin Bremen', 'Privatpraxis ästhetische Medizin Bremen', 'Schönheitsarzt Bremen', 'ästhetische Behandlungen Bremen Oberneuland'],
  alternates: {
    canonical: 'https://elaesthetics-bremen.de',
  },
};


export default function Home() {
  return (
    <>
      <Hero />
      <div className='max-w-7xl mx-auto'>
        <Welcome />
        <PatientReviews />
        <Services />
        <TreatmentSlider />
        <About />
        <ImageSlider />
      </div>
    </>
  )
}
