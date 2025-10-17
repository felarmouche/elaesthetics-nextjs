'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

// Mapping für lesbare Namen
const pathNameMap: Record<string, string> = {
  // Hauptbereiche
  'botox': 'Botox',
  'hyaluron': 'Hyaluron',
  'eigenbluttherapie-prf': 'Eigenbluttherapie PRF',
  'mesotherapie': 'Mesotherapie',
  'faltenunterspritzung': 'Faltenunterspritzung',
  'gesichtsbehandlung': 'Gesichtsbehandlung',
  'haarausfall-behandlung': 'Haarausfall Behandlung',
  'fett-weg-spritze': 'Fett-weg-Spritze',
  'medizinisches-microneedling': 'Medizinisches Microneedling',
  'chemisches-peeling': 'Chemisches Peeling',
  'kollagenstimulation': 'Kollagenstimulation',
  'profhilo': 'Profhilo',
  'polynukleotide': 'Polynukleotide',
  
  // Botox Unterbereiche
  'faltenbehandlung': 'Faltenbehandlung',
  'masseter': 'Masseter',
  'microbotox': 'Microbotox',
  'migraene': 'Migräne',
  'hyperhidrose': 'Hyperhidrose',
  
  // Hyaluron Unterbereiche
  'filler': 'Filler',
  'skinbooster': 'Skinbooster',
  'hylase': 'Hylase',
  
  // PRF Unterbereiche
  'microneedling': 'Microneedling',
  'haare': 'Haare',
  
  // Andere
  'terminanfragen': 'Terminanfrage',
  'kontakt': 'Kontakt',
  'ueber-uns': 'Über uns',
  'preise': 'Preise',
};

export default function Breadcrumbs() {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([]);
  const [isHomePage, setIsHomePage] = useState(true);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const updateBreadcrumbs = () => {
      // Client-side: window.location.pathname verwenden
      const pathname = window.location.pathname;
      
      // Nur updaten wenn sich der Pfad geändert hat
      if (pathname === currentPath) return;
      setCurrentPath(pathname);
      
      // Keine Breadcrumbs auf der Homepage
      if (pathname === '/' || pathname === '') {
        setIsHomePage(true);
        setBreadcrumbs([]);
        return;
      }

      setIsHomePage(false);

      // Pfad in Segmente aufteilen
      const segments = pathname.split('/').filter(segment => segment !== '');
      
      // Breadcrumb Items erstellen
      const items: BreadcrumbItem[] = [
        { label: 'Startseite', href: '/' }
      ];

      let builtPath = '';
      segments.forEach((segment) => {
        builtPath += `/${segment}`;
        const label = pathNameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
        items.push({
          label,
          href: builtPath
        });
      });

      setBreadcrumbs(items);
    };

    // Initial update
    updateBreadcrumbs();

    // Listen to popstate (browser back/forward)
    window.addEventListener('popstate', updateBreadcrumbs);

    // Poll for URL changes (catches Next.js Link navigation)
    const interval = setInterval(updateBreadcrumbs, 100);

    return () => {
      window.removeEventListener('popstate', updateBreadcrumbs);
      clearInterval(interval);
    };
  }, [currentPath]);

  // Nicht rendern auf der Homepage oder während SSG
  if (isHomePage || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 border-b border-gray-200"
    >
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