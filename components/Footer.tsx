import React from 'react';
import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'Beliebte Behandlungen',
    links: [
      { label: 'Botulinumtoxin', href: '/botulinumtoxin' },
      { label: 'Hyaluron', href: '/hyaluron' },
      { label: 'Eigenbluttherapie', href: '/eigenbluttherapie' },
      { label: 'Faltenbehandlung', href: '/faltenbehandlung' },
      { label: 'Polynukleotide', href: '/polynukleotide' },
    ],
  },
  {
    title: 'Weitere Leistungen',
    links: [
      { label: 'Haarausfall-Behandlung', href: '/haarausfall-behandlung' },
      { label: 'Fett-weg-Spritze', href: '/fett-weg-spritze' },
      { label: 'Biostimulation', href: '/biostimulation' },
      { label: 'Preise', href: '/preise' },
    ],
  },
  {
    title: 'Kontakt & Rechtliches',
    links: [
      { label: 'Kontakt & Termin', href: '/kontakt' },
      { label: 'Über uns', href: '/#about' },
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-1 text-sm font-light">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      // Added 'block w-full py-1.5' to make the clickable area uniform
                      className="block w-full py-1.5 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trennlinie + Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary text-sm font-light">
            &copy; {year} EL Aesthetics Bremen. Alle Rechte vorbehalten.
          </p>
          <p className="text-xs text-gray-400">
            Entwickelt mit ❤️ in Bremen
          </p>
        </div>
      </div>
    </footer>
  );
}