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
    <section className="bg-background py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center  pb-12 md:pb-32">
          <h2 className="miniver-regular text-primary  md:text-lg mb-4">Unsere Standorte</h2>
          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold">
            Zwei Locations, Ein Erlebnis
          </h1>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {locations.map((location) => (
            <div key={location.id} className="group relative">
              {/* Location Number */}
              <div className="flex items-center justify-between px-8 py-10">
                <div className="">
                  <h1 className="text-5xl text-white">{location.title}</h1>
                  <h1 className="uppercase tracking-[0.3em] font-light ps-1.5 text-white pt-2">
                    {location.subtitle}
                  </h1>
                </div>
                <div className=" ">
                  <span className="text-6xl md:text-7xl lg:text-6xl font-light text-muted-foreground/30">
                    {location.id}
                  </span>
                </div>
              </div>

              {/* Location Card */}
              <div className="relative bg-card rounded-none h-[26rem] overflow-hidden shadow-xl">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <p className="text-sm lg:text-base text-gray-200 mb-4 leading-relaxed">
                      {location.description}
                    </p>

                    <div className="flex items-center text-sm lg:text-base text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{location.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Button */}
              <div className="p-6 lg:p-8">
                <Link
                  href={location.href}
                  className="inline-flex items-center justify-center w- border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 px-8 py-3 text-sm lg:text-base font-medium tracking-wider uppercase"
                >
                  <span>Mehr Erfahren</span>
                  <span className="ml-4 text-xl">—</span>
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
