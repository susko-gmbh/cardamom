import Image from 'next/image';

const MenuPreview = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Section */}
            <div className="relative">
              <Image
                src="/home/location02.jpg"
                alt="Cardamom Westfield Restaurant Interior"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <div>
                <span className="text-primary text-lg font-medium mb-4 block">Unsere Küche</span>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Authentische indische Aromen
                </h2>
                <div className="w-16 h-px bg-primary mb-8"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Im Herzen von Hamburg-Überseequartier servieren wir Ihnen die authentischsten
                  indischen Gerichte mit einem modernen Touch. Unsere Küche vereint traditionelle
                  Rezepte mit frischen, lokalen Zutaten.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
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
