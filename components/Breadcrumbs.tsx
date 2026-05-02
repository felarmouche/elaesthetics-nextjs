'use client';

import { useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'
import { DOMAIN } from '@/lib/constants'

interface BreadcrumbItem {
  label: string
  href: string
}

// Mapping für lesbare Namen
const pathNameMap: Record<string, string> = {
  // Hub-Seiten
  botulinumtoxin: 'Botulinumtoxin',
  hyaluron: 'Hyaluron',
  eigenbluttherapie: 'Eigenbluttherapie',
  mesotherapie: 'Mesotherapie',

  // Lösungsseiten
  faltenbehandlung: 'Faltenbehandlung',
  'haarausfall-behandlung': 'Haarausfall Behandlung',
  'augen-behandlung': 'Augenbehandlung',
  filler: 'Filler',
  longevity: 'Longevity',
  'medizinische-behandlungen': 'Medizinische Behandlungen',

  // Standalone-Behandlungen
  biostimulation: 'Biostimulation',
  polynukleotide: 'Polynukleotide',
  'medizinisches-microneedling': 'Medizinisches Microneedling',
  'fett-weg-spritze': 'Fett-weg-Spritze',
  'chemisches-peeling': 'Chemisches Peeling',

  // Botulinumtoxin Spokes
  'aesthetische-behandlungen': 'Ästhetische Behandlungen',
  masseter: 'Masseter',
  mesobotox: 'Mesobotox / Microbotox',
  migraene: 'Migräne',
  hyperhidrose: 'Hyperhidrose',

  // Hyaluron Spokes
  skinbooster: 'Skinbooster',
  profhilo: 'Profhilo',
  hylase: 'Hylase',

  // Eigenbluttherapie Spokes
  'vampir-lifting': 'Vampir-Lifting',
  microneedling: 'Microneedling',
  haare: 'Haare',

  // Mesotherapie Spokes
  haut: 'Haut',

  // Utility-Seiten
  kontakt: 'Kontakt',
  preise: 'Preise',
  impressum: 'Impressum',
  datenschutz: 'Datenschutz',
}

export default function Breadcrumbs() {
  const pathname = usePathname() || '/'

  const breadcrumbs = useMemo<BreadcrumbItem[]>(() => {
    if (pathname === '/' || pathname === '') {
      return []
    }

    const segments = pathname.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [{ label: 'Startseite', href: '/' }]

    let builtPath = ''
    segments.forEach((segment) => {
      builtPath += `/${segment}`
      const label =
        pathNameMap[segment] ??
        segment
          .replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase())

      items.push({ label, href: builtPath })
    })

    return items
  }, [pathname])

  if (breadcrumbs.length === 0) {
    return null
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-200"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: breadcrumbs.map((breadcrumb, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: breadcrumb.label,
              item: breadcrumb.href === '/' ? DOMAIN : `${DOMAIN}${breadcrumb.href}`,
            })),
          }),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const isFirst = index === 0;

            return (
              <li key={breadcrumb.href} className="flex items-center">
                {/* Separator */}
                {!isFirst && (
                  <ChevronRight
                    className="w-4 h-4 text-gray-400 mx-2"
                    aria-hidden="true"
                  />
                )}

                {/* Breadcrumb Link oder Text */}
                {isLast ? (
                  <span
                    className="text-gray-900 font-medium flex items-center"
                    aria-current="page"
                  >
                    {isFirst && <Home className="w-4 h-4 mr-1" />}
                    {breadcrumb.label}
                  </span>
                ) : (
                  <Link
                    href={breadcrumb.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  >
                    {isFirst && <Home className="w-4 h-4 mr-1" />}
                    {breadcrumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
