// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'

const SITE_URL = 'https://elaesthetics-bremen.de'
const DEFAULT_OG_IMAGE = '/elaesthetics-bremen-github/assets//chatGPT-picture-small.webp'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EL Aesthetics Bremen | Praxis für ästhetische Medizin',
    template: '%s | EL Aesthetics Bremen',
  },
  description:
    'EL Aesthetics Bremen steht für präzise, ärztliche Treatments in der ästhetischen Medizin – von Faltenbehandlung über Hautregeneration bis Haartherapien.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'EL Aesthetics Bremen',
    title: 'EL Aesthetics Bremen | Praxis für ästhetische Medizin',
    description:
      'Ärztlich geführte Praxis für ästhetische Medizin in Bremen: moderne Behandlungen für Haut, Gesicht, Körper und Haare mit natürlichen Ergebnissen.',
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'EL Aesthetics Bremen Praxis für ästhetische Medizin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elaesthetics',
    title: 'EL Aesthetics Bremen | Praxis für ästhetische Medizin',
    description:
      'Moderne ästhetische Behandlungen mit ärztlicher Expertise in Bremen. Jetzt Beratung vereinbaren.',
    images: [`${SITE_URL}${DEFAULT_OG_IMAGE}`],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Header />
        <Breadcrumbs />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
