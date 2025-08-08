'use client';

import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/home/location02.jpg)' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-40">
          <div className="w-full lg:w-2/3">
            <div className="text-foreground">
              <span className="text-primary text-lg font-medium mb-4 block">Speisekarte</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
                Cardamom
              </h1>
              <h2 className="miniver-regular text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Hohe Bleichen
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-2xl mb-8">
                Entdecken Sie unsere authentische indische Küche mit modernenx Akzenten. Von
                traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt
                eine Geschichte von Aromen und Gewürzen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://reservation.dish.co/landingPage/hydra-82fbb0fc-e083-4e9e-b131-a196d1651064"
                  className="group relative overflow-hidden bg-primary border border-primary text-white px-8 py-3 font-light text-lg capitalize hover:bg-primary/90 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Tisch reservieren
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </Link>
                <Link
                  href="/Speisekarte.pdf"
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
      </div>
    </section>
  );
};

export default HeroSection;
