'use client'
import { CalendarCheck, ChevronDown, Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// --- DATENSTRUKTUR FÜR DAS MENÜ ---
// Hier bilden wir deine Ordnerstruktur exakt ab.
// 'groups' hilft uns, das Desktop-Menü visuell in Spalten zu unterteilen.
type MenuItem = {
  label: string
  href: string
  children?: MenuItem[]
}

const TREATMENT_MENU: { [key: string]: MenuItem[] } = {
  // Spalte 1: Der "Kern" - Injektionen & Medizinisch
  injections: [
    {
      label: 'Botulinumtoxin',
      href: '/botulinumtoxin',
      children: [
        { label: 'Falten-Behandlung', href: '/botulinumtoxin/faltenbehandlung' },
        { label: 'Ästhetische Behandlungen', href: '/botulinumtoxin/aesthetische-behandlungen' },
        { label: 'Masseter (Zähneknirschen)', href: '/botulinumtoxin/masseter' },
        { label: 'Hyperhidrose (Schwitzen)', href: '/botulinumtoxin/hyperhidrose' },
        { label: 'Migräne', href: '/botulinumtoxin/migraene' },
        { label: 'Mesobotox', href: '/botulinumtoxin/mesobotox' },
      ]
    },
    {
      label: 'Hyaluron',
      href: '/hyaluron',
      children: [
        { label: 'Filler (Volumen)', href: '/hyaluron/filler' },
        { label: 'Skinbooster', href: '/hyaluron/skinbooster' },
        { label: 'Profhilo', href: '/hyaluron/profhilo' },
        { label: 'Hylase (Auflösung)', href: '/hyaluron/hylase' },
      ]
    },
    { label: 'Kollagenstimulation', href: '/kollagenstimulation' },
    { label: 'Medizinische Behandlungen', href: '/medizinische-behandlungen' },
  ],
  // Spalte 2: Hautqualität & Regeneration
  skin: [
    { label: 'Augen-Behandlung', href: '/augen-behandlung' },
    { label: 'Polynukleotide', href: '/polynukleotide' },
    {
      label: 'Eigenbluttherapie',
      href: '/eigenbluttherapie',
      children: [
        { label: 'Vampir Lifting', href: '/eigenbluttherapie/vampir-lifting' },
        { label: 'Microneedling + PRF', href: '/eigenbluttherapie/microneedling' },
        { label: 'Haare', href: '/eigenbluttherapie/haare' },
      ]
    },
    {
      label: 'Mesotherapie',
      href: '/mesotherapie',
      children: [
        { label: 'Meso-Glow (Haut)', href: '/mesotherapie/haut' },
        { label: 'Meso-Hair (Haare)', href: '/mesotherapie/haare' },
      ]
    },
    { label: 'Medizinisches Microneedling', href: '/medizinisches-microneedling' },
    { label: 'Chemisches Peeling', href: '/chemisches-peeling' },
  ],
  // Spalte 3: Lösungen & Körper
  solutions: [
    { label: 'Falten-Behandlung (Übersicht)', href: '/faltenbehandlung' },
    { label: 'Haarausfall-Behandlung', href: '/haarausfall-behandlung' },
    { label: 'Longevity', href: '/longevity' },
    { label: 'Fett-Weg-Spritze', href: '/fett-weg-spritze' },
    { label: 'Filler (Allgemein)', href: '/filler' },
  ]
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false) // Mobile Menu State
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null) // Desktop Hover State
  const [treatmentsOpen, setTreatmentsOpen] = useState(false)

  // Mobile Accordion States
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([])

  // Timeout ref für sanftes Schließen des Desktop Menüs
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => { document.body.style.overflow = 'auto' }
  }, [isOpen])

  // --- HANDLER FÜR DESKTOP HOVER ---
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDesktopMenu('treatments')
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDesktopMenu(null)
    }, 200) // Kleine Verzögerung damit das Menü nicht sofort verschwindet
  }

  // --- HANDLER FÜR MOBILE ACCORDION ---
  const toggleMobileItem = (label: string) => {
    setExpandedMobileItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    )
  }

  return (
    <div className="w-full mb-[96px]">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent ${scrolled ? 'py-2 bg-white/95 shadow-md backdrop-blur-md border-gray-100' : 'py-4 bg-white'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex-shrink-0 border-l-4 border-r-4 border-[#ac9769] rounded-tl-2xl rounded-br-2xl pl-4 pr-4 z-50 bg-white">
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

            {/* --- DESKTOP NAVIGATION --- */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8 h-full">
              <Link href="/" className="font-medium text-gray-600 hover:text-black transition-colors duration-200">
                Home
              </Link>

              {/* DROPDOWN TRIGGER */}
              <div
                className="static h-full flex items-center group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`font-medium inline-flex items-center gap-1 transition-colors duration-200 py-6 ${activeDesktopMenu === 'treatments' ? 'text-[#ac9769]' : 'text-gray-600 hover:text-black'
                    }`}
                  aria-expanded={activeDesktopMenu === 'treatments'}
                >
                  Behandlungen
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDesktopMenu === 'treatments' ? 'rotate-180' : ''}`} />
                </button>

                {/* --- MEGA MENU DROPDOWN --- */}
                {/* Wir nutzen fixed positioning um volle Breite zu gewährleisten, aber beschränkt auf den Container */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl bg-white shadow-xl border-t border-gray-100 rounded-b-xl overflow-hidden transition-all duration-300 transform origin-top ${activeDesktopMenu === 'treatments'
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                    }`}
                >
                  <div className="flex p-8 gap-8">
                    {/* Spalte 1: Injektionen */}
                    <div className="flex-1 space-y-6">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Injektionen & Medizin</h3>
                      <ul className="space-y-3">
                        {TREATMENT_MENU.injections.map((item) => (
                          <DesktopMenuItem key={item.label} item={item} closeMenu={() => setActiveDesktopMenu(null)} />
                        ))}
                      </ul>
                    </div>

                    {/* Spalte 2: Haut & Regeneration */}
                    <div className="flex-1 space-y-6 border-l border-gray-100 pl-8">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Hautqualität & Regeneration</h3>
                      <ul className="space-y-3">
                        {TREATMENT_MENU.skin.map((item) => (
                          <DesktopMenuItem key={item.label} item={item} closeMenu={() => setActiveDesktopMenu(null)} />
                        ))}
                      </ul>
                    </div>

                    {/* Spalte 3: Lösungen */}
                    <div className="flex-1 space-y-6 border-l border-gray-100 pl-8">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 border-b pb-2">Lösungen & Körper</h3>
                      <ul className="space-y-3">
                        {TREATMENT_MENU.solutions.map((item) => (
                          <DesktopMenuItem key={item.label} item={item} closeMenu={() => setActiveDesktopMenu(null)} />
                        ))}
                      </ul>
                    </div>

                    {/* Bild Teaser (Optional, sieht aber gut aus) */}
                    <div className="hidden xl:block w-64 bg-stone-50 p-4 rounded-lg ml-4">
                      <div className="relative h-40 w-full mb-4 overflow-hidden rounded-md">
                        <Image
                          src="/assets/tinified/IMG_7364.webp"
                          alt="Beratung"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-900 mb-1">Unsicher?</p>
                      <p className="text-xs text-gray-500 mb-3">Finden Sie die passende Behandlung in einer persönlichen Analyse.</p>
                      <Link href="/kontakt" onClick={() => setActiveDesktopMenu(null)} className="text-xs font-bold text-[#ac9769] hover:underline">
                        Beratung vereinbaren &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/preise" className="font-medium text-gray-600 hover:text-black transition-colors duration-200">Preise</Link>
              <Link href="/#about" className="font-medium text-gray-600 hover:text-black transition-colors duration-200">About</Link>
              <Link href="/kontakt" className="font-medium text-gray-600 hover:text-black transition-colors duration-200">Kontakt</Link>
            </nav>

            {/* Rechte Seite: Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+4915566919635"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-500 shadow-sm text-sm text-black bg-white hover:text-white hover:bg-black transition-colors flex gap-2"
              >
                <Phone className="h-4 w-4" /> +49 155&nbsp;66919635
              </Link>
              <Link
                href="/kontakt"
                className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm text-white bg-secondary hover:bg-primary hover:text-secondary hover:border-secondary transition-colors"
              >
                Termin vereinbaren
              </Link>
            </div>

            {/* Mobiler Menü-Button */}
            <div className="lg:hidden flex items-center gap-2">
              {!isOpen && (
                <Link
                  href="/kontakt"
                  className="flex gap-2 border py-1 bg-stone-700 text-white px-3 font-normal items-center text-sm rounded-sm"
                >
                  <CalendarCheck className="w-3 h-3" /> Termin
                </Link>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 hover:text-black focus:outline-none z-50"
                aria-label="Menü öffnen"
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="min-h-full flex flex-col pt-[88px] pb-12 px-6 ">
          <nav className="flex flex-col gap-2 pt-6 space-y-6">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900 border-b pb-2">Home</Link>

            {/* Mobile: Behandlungen Sektion */}
            <div className="space-y-4">
              <button className="flex items-center justify-between w-full text-gray-800 font-medium py-1 border-b pb-2"
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}>
                <h2 className="text-xl font-medium text-gray-900 ">Behandlungen</h2>
                <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {treatmentsOpen && (
                <div className="pl-2 space-y-1">
                  {/* Wir iterieren durch alle 3 Gruppen und rendern sie untereinander */}
                  {[...TREATMENT_MENU.injections, ...TREATMENT_MENU.skin, ...TREATMENT_MENU.solutions].map((item) => (
                    <div key={item.label} className="border-l-2 border-gray-100 ml-1 pl-4 py-1">
                      {!item.children ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-black py-1"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <div>
                          <button
                            onClick={() => toggleMobileItem(item.label)}
                            className="flex items-center justify-between w-full text-gray-800 font-medium py-1"
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobileItems.includes(item.label) ? 'rotate-180' : ''}`} />
                          </button>

                          {/* Submenu Mobile */}
                          <div className={`overflow-hidden transition-all duration-300 ${expandedMobileItems.includes(item.label) ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <div className="flex flex-col space-y-3 pl-2 mb-2">
                              <Link href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#ac9769]">
                                &rarr; Zur Übersicht
                              </Link>
                              {item.children.map(sub => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="text-sm text-gray-500 hover:text-black"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>)}
            </div>


            <Link href="/preise" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900 border-b pb-2">Preise</Link>
            <Link href="/#about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900 border-b pb-2">Über Uns</Link>
            <Link href="/kontakt" onClick={() => setIsOpen(false)} className="text-xl font-medium text-gray-900 border-b pb-2">Kontakt</Link>
          </nav>

          <div className="mt-12 flex flex-col gap-4">
            <Link
              href="tel:+4915566919635"
              className="w-full justify-center inline-flex items-center px-4 py-3 border border-gray-300 shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <Phone className="h-5 w-5 mr-2" />
              Anrufen
            </Link>
            <Link
              href="/kontakt"
              className="w-full justify-center inline-flex items-center px-4 py-3 border border-transparent shadow-sm text-base font-medium text-white bg-[#917d53]"
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

// --- Hilfskomponente für das Desktop Menü Item ---
function DesktopMenuItem({ item, closeMenu }: { item: MenuItem, closeMenu: () => void }) {
  // Wenn es keine Kinder hat, ist es ein einfacher Link
  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={closeMenu}
          className="block text-sm text-gray-600 hover:text-[#ac9769] hover:translate-x-1 transition-all"
        >
          {item.label}
        </Link>
      </li>
    )
  }

  // Wenn es Kinder hat, zeigen wir den Titel fetter an und listen die Kinder darunter
  return (
    <li className="group/item">
      <Link
        href={item.href}
        onClick={closeMenu}
        className="flex items-center justify-between text-sm font-semibold text-gray-800 mb-1 hover:text-[#ac9769]"
      >
        {item.label}
      </Link>
      <ul className="pl-0 space-y-1 border-l-2 border-gray-100 ml-1 pl-3 my-2">
        {item.children.map(sub => (
          <li key={sub.href}>
            <Link
              href={sub.href}
              onClick={closeMenu}
              className="block text-xs text-gray-500 hover:text-black py-0.5"
            >
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}