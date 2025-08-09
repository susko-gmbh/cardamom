import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Location = () => {
  const locations = [
    {
      id: '01',
      title: 'Cardamom',
      subtitle: 'HOHE BLEICHEN',
      image: '/home/location.jpg',
      description: 'Progressive indische Küche in eleganter Atmosphäre',
      address: 'Hohe Bleichen 10, 20354 Hamburg',
      href: '/hohe-bleichen',
    },
    {
      id: '02',
      title: 'Cardamom',
      subtitle: 'WESTFIELD',
      image: '/home/location02.jpg',
      description: 'Neue Location im Westfield Hamburg-Überseequartier',
      address: 'Überseeboulevard 7, 20457 Hamburg',
      href: '/westfield',
    },
  ];

  return (
    <section className="bg-background py-8 sm:py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center pb-8 sm:pb-12 md:pb-32">
          <h2 className="miniver-regular text-primary text-sm sm:text-base md:text-lg mb-2 sm:mb-4">Unsere Standorte</h2>
          <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Zwei Locations, Ein Erlebnis
          </h1>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {locations.map((location) => (
            <div key={location.id} className="group relative">
              {/* Location Number */}
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                <div className="">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white">{location.title}</h1>
                  <h1 className="uppercase tracking-[0.2em] sm:tracking-[0.3em] font-light ps-1 sm:ps-1.5 text-white pt-1 sm:pt-2 text-sm sm:text-base">
                    {location.subtitle}
                  </h1>
                </div>
                <div className="">
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light text-muted-foreground/30">
                    {location.id}
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div className="relative bg-card rounded-none h-[20rem] sm:h-[24rem] lg:h-[26rem] overflow-hidden shadow-xl">
                {/* Image Container - Fixed Height */}
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    fill
                    src={location.image}
                    alt={`${location.title} ${location.subtitle}`}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
                    <p className="text-xs sm:text-sm lg:text-base text-gray-200 mb-3 sm:mb-4 leading-relaxed">
                      {location.description}
                    </p>

                    <div className="flex items-center text-xs sm:text-sm lg:text-base text-gray-300">
                      <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="leading-tight">{location.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="p-4 sm:p-6 lg:p-8">
                <Link
                  href={location.href}
                  className="group relative overflow-hidden inline-flex items-center justify-center w-full sm:w-auto border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm lg:text-base font-medium tracking-wider uppercase"
                >
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Mehr Erfahren
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-black h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-foreground h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
