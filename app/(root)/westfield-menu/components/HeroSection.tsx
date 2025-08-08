import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[60vh] flex items-center justify-center py-20 px-4"
      style={{
        backgroundImage: 'url(/home/location.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <span className="inline-block text-sm md:text-base font-medium text-yellow-400 mb-4 tracking-wider uppercase">
          Speisekarte
        </span>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Cardamom
        </h1>
        
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-yellow-400">
          Westfield
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          Entdecken Sie unsere authentische indische Küche mit modernen Akzenten im Westfield Hamburg-Überseequartier. Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://reservation.dish.co/landingPage/hydra-00847480-0346-11f0-bea1-b9a5dc15ca0b"
            className="inline-flex items-center justify-center px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Tisch reservieren
          </a>
          <a
            href="/Speisekarte Westfield.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Speisekarte herunterladen
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;