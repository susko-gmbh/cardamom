'use client';

import Link from 'next/link';

const CateringHeroSection = () => {
  return (
    <section
      className="relative bg-background bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/home/location.jpg)' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center py-20 sm:py-32 lg:py-40">
          <div className="w-full lg:w-2/3">
            <div className="text-foreground">
              <span className="text-primary text-base sm:text-lg font-medium mb-3 sm:mb-4 block">Catering Services</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 text-foreground">
                Cardamom
              </h1>
              <h2 className="miniver-regular text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-primary">
                Professionelles Catering
              </h2>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-foreground max-w-2xl mb-6 sm:mb-8 px-2 sm:px-0">
                Bringen Sie die authentische indische Küche zu Ihrem Event.
                Unser professionelles Catering-Service bietet maßgeschneiderte
                Menüs für jeden Anlass - von privaten Feiern bis hin zu
                geschäftlichen Events.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md sm:max-w-none">
                <Link
                  href="/kontakt"
                  className="group relative overflow-hidden bg-primary border border-primary text-white px-6 py-3 sm:px-8 font-light text-base sm:text-lg capitalize hover:bg-primary/90 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Kontakt
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </Link>
                <Link
                  href="/events"
                  className="group relative overflow-hidden bg-transparent border border-primary text-primary px-6 py-3 sm:px-8 font-light text-base sm:text-lg capitalize hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Event Services
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

export default CateringHeroSection;