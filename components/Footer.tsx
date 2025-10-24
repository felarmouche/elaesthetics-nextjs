import React from 'react';
import Link from 'next/link'; // falls du Next.js nutzt — andernfalls <a> verwenden

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Copyright */}
        <div>
          <p className="text-primary text-sm font-light">
            &copy; {year} El Aesthetics Bremen. Alle Rechte vorbehalten.
          </p>
        </div>

        {/* Link-Bereich */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-light">
          <Link href="/impressum" className="hover:text-primary transition-colors duration-200">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-primary transition-colors duration-200">
            Datenschutz
          </Link>
          <Link href="/kontakt" className="hover:text-primary transition-colors duration-200">
            Kontakt
          </Link>
          <Link href="#about" className="hover:text-primary transition-colors duration-200">
            Über uns
          </Link>
        </div>
      </div>

      {/* Optional: kleine Trennlinie oder Logo */}
      <div className="mt-6 border-t border-gray-800 pt-4 text-center text-xs text-gray-400">
        Entwickelt mit ❤️ in Bremen
      </div>
    </footer>
  );
}
