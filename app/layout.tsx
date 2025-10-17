// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'El Aesthetics Bremen - Ästhetische Medizin',
  description: 'Professionelle Beauty-Behandlungen in Bremen und Umgebung',
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