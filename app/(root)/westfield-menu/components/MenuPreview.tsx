import Image from 'next/image';

const MenuPreview = () => {
  return (
    <>
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <Image
                src="/home/location02.jpg"
                alt="Cardamom Westfield Restaurant Interior"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>

            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <span className="text-primary text-base sm:text-lg font-medium mb-3 sm:mb-4 block">Unsere Küche</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                  Authentische indische Aromen
                </h2>
                <div className="w-12 sm:w-16 h-px bg-primary mb-6 sm:mb-8"></div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Im Herzen von Hamburg-Überseequartier servieren wir Ihnen die authentischsten
                  indischen Gerichte mit einem modernen Touch. Unsere Küche vereint traditionelle
                  Rezepte mit frischen, lokalen Zutaten.
                </p>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Von aromatischen Currys bis hin zu knusprigen Tandoor-Spezialitäten - jedes
                  Gericht wird mit Leidenschaft und den feinsten Gewürzen zubereitet, um Ihnen ein
                  unvergessliches kulinarisches Erlebnis zu bieten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPreview;
