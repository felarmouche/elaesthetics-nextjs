// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getPracticeSchema, getPhysicianSchema, getWebSiteSchema } from '@/lib/schema'
import { getGoogleReviews } from '@/lib/googleReviews'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const SITE_URL = 'https://elaesthetics-bremen.de'
const DEFAULT_OG_IMAGE = '/assets/chatGPT-picture-small.webp'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'EL Aesthetics Bremen | Praxis für ästhetische Medizin',
    template: '%s | EL Aesthetics Bremen',
  },
  description:
    'EL Aesthetics Bremen steht für präzise, ärztliche Behandlungen in der ästhetischen Medizin – von Faltenbehandlung über Hautregeneration bis Haartherapien.',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE_URL,
    siteName: 'EL Aesthetics Bremen',
    title: 'EL Aesthetics Bremen | Praxis für ästhetische Medizin',
    description:
      'Ärztlich geführte Praxis für ästhetische Medizin in Bremen: moderne Behandlungen für Haut, Gesicht, Körper und Haare mit Fokus auf natürlichen Ergebnissen.',
    images: [
      {
        url: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'EL Aesthetics Bremen Praxis für ästhetische Medizin',
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const reviewsData = await getGoogleReviews();
  const aggregateRating = reviewsData
    ? { ratingValue: reviewsData.aggregateRating, reviewCount: reviewsData.reviewCount }
    : undefined;

  const graphSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getWebSiteSchema(),
      getPracticeSchema(aggregateRating),
      getPhysicianSchema(),
    ],
  };

  return (
    <html lang="de" className={inter.variable}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-accent-dark focus:rounded focus:shadow-lg focus:outline-2 focus:outline-accent-dark">
          Zum Hauptinhalt springen
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }}
        />
        <Header />
        <Breadcrumbs />
        <main id="main-content">
          {children}
        </main>
        <Contact />
        <Footer />
      </body>
    </html>
  )
}
