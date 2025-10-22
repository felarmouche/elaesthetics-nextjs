import React from 'react';
import Link from 'next/link';
import GoogleMaps from './GoogleMaps';

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
          <Link className='p-4 border inline-block mt-4 text-black border-white max-w-[600px] w-full bg-white hover:text-white hover:bg-black transition-color' href="/kontakt">Zum Beratungstermin</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Adresse */}
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Adresse
            </h3>
            <p className="text-white font-light leading-relaxed">
              EL Aesthetics Bremen<br />
              Richtepad 14<br />
              28355 Bremen
            </p>
            
          </div>

          {/* Kontakt */}
          <div className="text-center">
            <h3 className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Kontakt
            </h3>
            <div className="text-white font-light leading-relaxed space-y-2">
              <p>
                <a href="tel:+4915566919635" className="hover:text-gray-300 transition-colors">
                  +49 155 66919635
                </a>
              </p>
              <p>
                <a href="mailto:info@elaesthetics-bremen.de" className="hover:text-gray-300 transition-colors">
                  info@elaesthetics-bremen.de
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
              Termine nach Vereinbarung
            </p>
          </div>
        </div>
        <GoogleMaps/>
      </div>
    </section>
  );
}
