'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="text-8xl font-light text-stone-200 mb-8">Fehler</p>
        <h1 className="text-3xl md:text-4xl font-normal text-accent-dark uppercase tracking-[2px] mb-6">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-lg text-stone-600 font-light leading-relaxed mb-12">
          Bitte versuchen Sie es erneut oder kehren Sie zur Startseite zurück.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center bg-stone-900 px-8 py-4 text-white font-medium tracking-wide hover:bg-stone-800 transition"
          >
            Erneut versuchen
          </button>
        </div>
      </div>
    </section>
  );
}
