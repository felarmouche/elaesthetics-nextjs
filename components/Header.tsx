'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CalendarCheck, Phone } from 'lucide-react'

export default function Header() {
  // Zustand für den Scroll-Effekt
  const [scrolled, setScrolled] = useState(false)
  // Zustand für das mobile Navigationsmenü
  const [isOpen, setIsOpen] = useState(false)

  // Effekt zum Erkennen des Scrollens
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Effekt, um das Scrollen des Bodys zu sperren, wenn das Menü offen ist
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    // Cleanup-Funktion, um sicherzustellen, dass das Scrollen immer wieder aktiviert wird
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#services', label: 'Leistungen' },
    { href: '/preise', label: 'Preise' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#about', label: 'About' },
  ]

  return (
    <div className="w-full mb-[96px]">
      {/* Haupt-Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled ? 'py-2 bg-white/80 shadow-md backdrop-blur-md' : 'py-4 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex-shrink-0 border-l-4 border-r-4 border-[#ac9769] rounded-tl-2xl rounded-br-2xl pl-4 pr-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  className="h-12 w-auto object-contain"
                  width={150}
                  height={150}
                  src="/assets/logo-el-gemini.webp"
                  alt="EL Aesthetics Bremen Logo"
                />
              </Link>
            </div>

            {/* Desktop-Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Rechte Seite: Kontakt-Links und CTA (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+4915566919635"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-500 shadow-sm text-sm text-black bg-white hover:text-white hover:bg-black transition-colors flex gap-2"
                aria-label="EL Aesthetics Bremen telefonisch kontaktieren"
              >
                <Phone className="h-5 w-5" />
                0155&nbsp;66919635
              </a>
              <Link
                href="/kontakt"
                className=" whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm text-white bg-secondary hover:border-secondary hover:text-secondary hover:bg-primary transition-colors"
                aria-label="Beratungstermin mit EL Aesthetics Bremen vereinbaren"
              >
                Termin vereinbaren
              </Link>
            </div>

            {/* Mobiler Menü-Button (Hamburger) */}
            <div className="lg:hidden flex items-center gap-2">
              {!isOpen ? (
              <Link
                href="/kontakt"
                className="flex gap-2 border py-1 uppercase bg-black/70 text-white rounded-xs px-3 font-normal items-center"
                aria-label="Termin bei EL Aesthetics Bremen anfragen"
              >
                <CalendarCheck className="text-xs" />
                Termin
              </Link>): null}
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-black focus:outline-none z-50"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Menü öffnen</span>
                <div className={`w-6 h-6 flex flex-col justify-around items-center${isOpen ? ' text-red-600' : ''}`}>
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? 'rotate-45 translate-y-[7.8px]' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${
                      isOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${
                      isOpen ? '-rotate-45 -translate-y-[7.8px]' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobiles Menü (Overlay) */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="h-full flex flex-col items-center justify-center">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-gray-800 hover:text-black"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
          </nav>
          <div className='mt-12 w-full flex gap-4 flex-col items-center'>
            <a
                href="tel:+4915566919635"
                className="w-[220px] whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-500 shadow-sm text-sm text-black bg-white hover:text-white hover:bg-black transition-colors flex gap-2"
                aria-label="EL Aesthetics Bremen telefonisch kontaktieren"
              >
                <Phone className="h-4 w-4" />
                0155&nbsp;66919635
              </a>
              <Link
                href="/kontakt"
                className="w-[220px] whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm text-white bg-secondary hover:border-secondary hover:text-secondary hover:bg-primary transition-colors"
                aria-label="Beratungstermin mit EL Aesthetics Bremen vereinbaren"
                onClick={() => setIsOpen(false)}
              >
                Termin vereinbaren
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
