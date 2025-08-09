const MenuPDF = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block text-primary text-xl sm:text-2xl miniver-regular font-medium tracking-wide mb-3 sm:mb-4">
            Speisekarte
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Unsere komplette Speisekarte
          </h2>
          <div className="w-20 sm:w-24 h-[1px] bg-primary mx-auto" />
        </div>

        {/* PDF Container */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Show download button */}
          <div className="block sm:hidden">
            <div className="bg-background/60 shadow-2xl p-6 text-center">
              <div className="mb-6">
                <svg className="w-16 h-16 mx-auto text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-foreground mb-2">Speisekarte herunterladen</h3>
                <p className="text-muted-foreground mb-6">Laden Sie unsere komplette Speisekarte als PDF herunter</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/Speisekarte Westfield.pdf"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  PDF ansehen
                </a>
                <a
                  href="/Speisekarte Westfield.pdf"
                  download="Cardamom-Westfield-Speisekarte.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/90 transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  PDF herunterladen
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Show iframe */}
          <div className="hidden sm:block">
            <div className="bg-background/60 shadow-2xl overflow-hidden p-6 lg:p-10">
              <iframe
                src="/Speisekarte Westfield.pdf"
                width="100%"
                height="800px"
                className="border-none lg:h-[1000px]"
                title="Cardamom Speisekarte Westfield"
                loading="lazy"
              />
              <div className="text-center text-muted-foreground p-8 hidden">
                Ihr Browser unterstützt keine PDF-Anzeige.
                <a
                  href="/Speisekarte Westfield.pdf"
                  target="_blank"
                  className="text-primary hover:underline ml-2"
                >
                  Klicken Sie hier, um die Speisekarte herunterzuladen.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPDF;
