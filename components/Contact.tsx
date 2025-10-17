import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light mb-4 tracking-wide">
            Kontakt & Beratung
          </h2>
          <p className="text-primary text-base font-light">
            Vereinbaren Sie einen Beratungstermin in unserer Praxis in Bremen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Adresse */}
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Adresse
            </h3>
            <p className="text-white font-light leading-relaxed">
              El Aesthetics<br/>
              Musterstraße 123<br/>
              63450 Bremen
            </p>
          </div>

          {/* Kontakt */}
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Kontakt
            </h3>
            <div className="text-white font-light leading-relaxed space-y-2">
              <p>
                <a href="tel:+4961811234567" className="hover:text-gray-300 transition-colors">
                  +49 (0) 6181 123456
                </a>
              </p>
              <p>
                <a href="mailto:info@artaesthetics.de" className="hover:text-gray-300 transition-colors">
                  info@artaesthetics.de
                </a>
              </p>
            </div>
          </div>

          {/* Öffnungszeiten */}
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Öffnungszeiten
            </h3>
            <p className="text-white font-light leading-relaxed">
              Mo-Fr: 09:00 - 18:00 Uhr<br/>
              Sa: Nach Vereinbarung<br/>
              So: Geschlossen
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}