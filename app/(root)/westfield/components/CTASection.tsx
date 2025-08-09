'use client';

import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="min-h-96 relative flex items-center justify-center">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed "
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/home/westfield03.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-8">
        {/* Header Text */}
        <div className="mb-12">
          <p className="text-white/80 text-lg font-light italic mb-4">Reservierung</p>
          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-6">
            Bereit für ein unvergessliches Erlebnis?
          </h2>
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            Reservieren Sie jetzt Ihren Tisch und erleben Sie die perfekte Mischung aus
            traditioneller indischer Küche und moderner Eleganz.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://reservation.dish.co/landingPage/hydra-00847480-0346-11f0-bea1-b9a5dc15ca0b"
            className="group relative overflow-hidden px-8 py-4 bg-white hover:bg-primary text-black font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-primary/50 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Jetzt reservieren
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </Link>

          <Link
            href="/Speisekarte Westfield.pdf"
            target="_blank"
            className="group relative overflow-hidden px-8 py-4 bg-transparent hover:bg-white/10 text-white font-medium text-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Speisekarte herunterladen
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
