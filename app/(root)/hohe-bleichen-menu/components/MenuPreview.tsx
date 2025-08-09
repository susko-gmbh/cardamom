'use client';

import Image from 'next/image';

const MenuPreview = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative h-80 sm:h-96 lg:h-[450px] overflow-hidden shadow-xl ">
              <Image src="/home/location02.jpg" alt="Cardamom Menu" fill className="object-cover" />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block text-primary text-xl sm:text-2xl miniver-regular font-medium tracking-wide mb-3 sm:mb-4">
                Unsere Speisekarte
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Authentische Indische Küche
              </h2>
              <div className="w-20 sm:w-24 h-[1px] bg-primary mb-6 sm:mb-8" />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Entdecken Sie unsere sorgfältig kuratierte Speisekarte, die traditionelle indische
                Aromen mit moderner Präsentation verbindet. Von würzigen Curries bis hin zu frischen
                Tandoori-Gerichten - jede Speise wird mit den feinsten Gewürzen und Zutaten
                zubereitet.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Unsere Küche bietet eine perfekte Balance zwischen authentischen Rezepten und
                zeitgemäßen Interpretationen, um Ihnen ein unvergessliches kulinarisches Erlebnis zu
                bieten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
