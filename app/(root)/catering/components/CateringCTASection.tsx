import Link from 'next/link';

export default function CateringCTASection() {
  return (
    <section className="min-h-80 sm:min-h-96 relative flex items-center justify-center">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/home/westfield03.jpg')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 py-8 sm:py-12">
        {/* Header Text */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight px-2">
            Bereit für Ihr Catering-Event?
          </h1>
          <p className="text-white/80 text-base sm:text-lg font-light italic mb-3 sm:mb-4 px-2">
            Kontaktieren Sie uns für ein individuelles Angebot und lassen Sie sich von unserem
            professionellen Catering-Service überzeugen.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
          <Link
            href="tel:+494080080418"
            className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-primary text-black font-medium text-base sm:text-lg transition-all duration-300 backdrop-blur-sm border border-primary/50 flex items-center justify-center gap-2"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Jetzt anrufen
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </Link>

          <Link
            href="mailto:kontakt@cardamom-hamburg.de"
            className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover:bg-white/10 text-white font-medium text-base sm:text-lg transition-all duration-300 backdrop-blur-sm border border-white/30 flex items-center justify-center gap-2"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Email senden
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
