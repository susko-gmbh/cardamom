'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/home/westfield03.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="miniver-regular text-primary/90 text-xl sm:text-2xl font-light tracking-wide mb-3 sm:mb-4 block">
            Reservierung
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Erleben Sie authentische indische Küche
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 px-4">
            Reservieren Sie noch heute Ihren Tisch und genießen Sie ein unvergessliches
            kulinarisches Erlebnis in unserem Restaurant.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Link
              href="https://reservation.dish.co/landingPage/hydra-82fbb0fc-e083-4e9e-b131-a196d1651064"
              className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-primary text-black font-medium text-base sm:text-lg transition-all duration-300 backdrop-blur-sm border border-primary/50 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                Jetzt reservieren
              </span>
              <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
              <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
            </Link>

            <Link
              href="/Speisekarte.pdf"
              target="_blank"
              className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 text-white font-medium text-base sm:text-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                Speisekarte herunterladen
              </span>
              <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
              <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
