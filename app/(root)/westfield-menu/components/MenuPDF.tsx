import React from 'react';

const MenuPDF = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-yellow-400 tracking-wider uppercase mb-4">
            Speisekarte
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Unsere komplette Speisekarte
          </h2>
          
          {/* Decorative element */}
          <div className="w-16 h-1 bg-yellow-400 rounded mx-auto"></div>
        </div>
        
        {/* PDF Container */}
        <div className="bg-gray-800 rounded-lg p-4 shadow-2xl">
          <iframe
            src="/Speisekarte Westfield.pdf"
            width="100%"
            height="800"
            className="rounded-lg border-none"
            title="Cardamom Westfield Speisekarte"
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
          >
            <p className="text-center text-gray-400 py-8">
              Ihr Browser unterstützt keine PDF-Anzeige. 
              <a 
                href="/Speisekarte Westfield.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline ml-1"
              >
                Klicken Sie hier, um die Speisekarte herunterzuladen
              </a>
              .
            </p>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default MenuPDF;