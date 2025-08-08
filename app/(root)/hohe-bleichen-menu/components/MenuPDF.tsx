'use client';

const MenuPDF = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-2xl miniver-regular font-medium tracking-wide mb-4">
            Speisekarte
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere komplette Speisekarte
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </div>

        {/* PDF Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/60  shadow-2xl overflow-hidden p-10">
            <iframe
              src="/Speisekarte.pdf"
              width="100%"
              height="1000px"
              className="border-none"
              title="Cardamom Speisekarte Hohe Bleichen"
              loading="lazy"
            >
              <p className="text-center text-muted-foreground p-8">
                Ihr Browser unterstützt keine PDF-Anzeige.
                <a
                  href="/Speisekarte.pdf"
                  target="_blank"
                  className="text-primary hover:underline ml-2"
                >
                  Klicken Sie hier, um die Speisekarte herunterzuladen.
                </a>
              </p>
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPDF;
