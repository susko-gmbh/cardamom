const HeroSection = () => {
  return (
    <section
      className="relative bg-gray-900 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/home/location.jpg)' }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative container mx-auto px-10">
        <div className="flex items-center py-40">
          <div className="w-full lg:w-2/3">
            <div className="text-foreground">
              <span className="text-primary text-lg font-medium mb-4 block">Willkommen bei</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground">
                Cardamom
              </h1>
              <h2 className="miniver-regular text-2xl md:text-3xl font-semibold mb-6 text-primary">
                Über Uns
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-foreground max-w-2xl">
                Entdecken Sie unsere Geschichte und die Leidenschaft hinter der authentischen
                indischen Küche. Bei Cardamom verbinden wir traditionelle Rezepte mit moderner
                Eleganz und schaffen ein unvergessliches kulinarisches Erlebnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
