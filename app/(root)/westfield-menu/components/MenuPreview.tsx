import React from 'react';

const MenuPreview = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="/images/Cardamom05-12-23_10.avif"
                alt="Cardamom Menu"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium text-yellow-400 tracking-wider uppercase">
                Unsere Speisekarte
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Authentische Indische Küche
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Entdecken Sie unsere sorgfältig kuratierte Speisekarte für das Westfield Hamburg-Überseequartier, die traditionelle indische Aromen mit moderner Präsentation verbindet. Von würzigen Curries bis hin zu frischen Tandoori-Gerichten - jede Speise wird mit den feinsten Gewürzen und Zutaten zubereitet.
                </p>
                
                <p>
                  Unsere neue Location im Westfield bietet eine perfekte Balance zwischen authentischen Rezepten und zeitgemäßen Interpretationen, um Ihnen ein unvergessliches kulinarisches Erlebnis zu bieten.
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="w-16 h-1 bg-yellow-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;