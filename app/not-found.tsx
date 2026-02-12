import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="text-8xl font-light text-stone-200 mb-8">404</p>
        <h1 className="text-3xl md:text-4xl font-normal text-accent-dark uppercase tracking-[2px] mb-6">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-stone-600 font-light leading-relaxed mb-12">
          Die angeforderte Seite existiert leider nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-stone-900 px-8 py-4 text-white font-medium tracking-wide hover:bg-stone-800 transition"
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center border-2 border-stone-300 px-8 py-4 text-stone-900 font-medium tracking-wide hover:border-stone-900 transition"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
