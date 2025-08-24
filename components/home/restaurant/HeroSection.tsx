import LazyImage from '@/components/ui/lazy-image';
import ReservationButton from '@/components/shared/navbar/ReservationButton';

// Hero Image Grid Component
const HeroImageGrid = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-2 sm:gap-4">
        <div className="space-y-2 sm:space-y-4">
          <div className="aspect-[4/3] bg-card overflow-hidden">
            <LazyImage
              width={600}
              height={500}
              src="/home/westfield.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover opacity-90"
              priority
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              quality={90}
              aspectRatio="aspect-[4/3]"
            />
          </div>
          <div className="aspect-square bg-card from-orange-600 to-red-600 overflow-hidden">
            <LazyImage
              width={600}
              height={500}
              src="/home/westfield02.jpg"
              alt="Chef cooking"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              quality={85}
              aspectRatio="square"
            />
          </div>
        </div>
        <div className="pt-4 sm:pt-8">
          <div className="aspect-[3/4] bg-card from-green-700 to-teal-600 overflow-hidden">
            <LazyImage
              width={600}
              height={500}
              src="/home/westfield03.jpg"
              alt="Food presentation"
              className="w-full h-full object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              quality={85}
              aspectRatio="aspect-[3/4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div>
              <p className="text-[#c6a87d] text-base sm:text-lg lg:text-xl font-light tracking-wide mb-2 miniver-regular">
                Neu In Hamburg
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light mb-4 sm:mb-6 leading-tight">
                Cardamom Westfield
              </h1>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg">
                Wir freuen uns, die Eröffnung unseres zweiten Standorts im Westfield
                Hamburg-Überseequartier anzukündigen. Erleben Sie progressive indische Küche in
                einer neuen, stilvollen Umgebung.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-medium">Besuchen Sie uns</h3>
              <div className="text-gray-300 text-sm sm:text-base">
                <p>Überseeboulevard 7</p>
                <p>20457 Hamburg</p>
              </div>

              <ReservationButton />
            </div>
          </div>

          {/* Right Images */}
          <div className="order-1 lg:order-2">
            <HeroImageGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
