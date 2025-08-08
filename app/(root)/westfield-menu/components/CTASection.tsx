import Link from 'next/link';

const CTASection = () => {
  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: 'url(/home/location02.jpg)' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-32">
          <div className="text-center max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Besuchen Sie uns im Westfield
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-3xl mx-auto mb-8">
              Erleben Sie authentische indische Küche in moderner Atmosphäre. Reservieren Sie noch heute Ihren Tisch oder laden Sie unsere komplette Speisekarte herunter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://reservation.dish.co/landingPage/hydra-00847480-0346-11f0-bea1-b9a5dc15ca0b"
                className="group relative overflow-hidden bg-primary border border-primary text-white px-8 py-3 font-light text-lg capitalize hover:bg-primary/90 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                  Jetzt reservieren
                </span>
                <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
              </Link>
              <Link
                href="/Speisekarte Westfield.pdf"
                target="_blank"
                className="group relative overflow-hidden bg-transparent border border-primary text-primary px-8 py-3 font-light text-lg capitalize hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                  Speisekarte herunterladen
                </span>
                <div className="absolute top-1/2 left-0 -translate-y-px bg-primary h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;