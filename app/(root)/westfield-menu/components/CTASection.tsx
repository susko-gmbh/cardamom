import React from 'react';

const CTASection = () => {
  return (
    <section 
      className="relative py-20 px-4 text-white text-center"
      style={{
        backgroundImage: 'url(/home/location.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Bereit für ein kulinarisches Abenteuer?
        </h3>
        
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200 max-w-2xl mx-auto">
          Reservieren Sie jetzt Ihren Tisch und erleben Sie die authentische indische Küche in eleganter Atmosphäre.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://reservation.dish.co/landingPage/hydra-00847480-0346-11f0-bea1-b9a5dc15ca0b"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-300 shadow-lg"
          >
            Jetzt reservieren
          </a>
          
          <a
            href="/Speisekarte Westfield.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Speisekarte herunterladen
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;