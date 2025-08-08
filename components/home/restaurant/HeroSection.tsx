// Hero Image Grid Component
const HeroImageGrid = () => {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="aspect-[4/3] bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800  overflow-hidden">
            <img
              src="/home/westfield.jpg"
              alt="Restaurant interior"
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="aspect-square bg-gradient-to-br from-orange-600 to-red-600  overflow-hidden">
            <img
              src="/home/westfield02.jpg"
              alt="Chef cooking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="pt-8">
          <div className="aspect-[3/4] bg-gradient-to-br from-green-700 to-teal-600  overflow-hidden">
            <img
              src="/home/westfield03.jpg"
              alt="Food presentation"
              className="w-full h-full object-cover"
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
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-[#c6a87d] text-xl font-light tracking-wide mb-2 miniver-regular">
                Neu In Hamburg
              </p>
              <h1 className="text-5xl lg:text-6xl font-light mb-6 leading-tight">
                Cardamom Westfield
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Wir freuen uns, die Eröffnung unseres zweiten Standorts im Westfield
                Hamburg-Überseequartier anzukündigen. Erleben Sie progressive indische Küche in
                einer neuen, stilvollen Umgebung.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium">Besuchen Sie uns</h3>
              <div className="text-gray-300">
                <p>Überseeboulevard 7</p>
                <p>20457 Hamburg</p>
              </div>

              <button className="group relative overflow-hidden border border-[#c6a87d] text-[#c6a87d] px-8 py-3 mt-6 hover:bg-[#c6a87d] hover:text-[#080b0e] transition-all duration-300 tracking-wide flex items-center justify-center gap-2">
                <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                  Jetzt Tisch Reservieren
                </span>
                <div className="absolute top-1/2 left-0 -translate-y-px bg-[#c6a87d] h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                <div className="bg-[#c6a87d] h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
              </button>
            </div>
          </div>

          {/* Right Images */}
          <HeroImageGrid />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
