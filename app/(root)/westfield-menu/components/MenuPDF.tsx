const MenuPDF = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere komplette Speisekarte
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unser vollständiges Angebot an authentischen indischen Gerichten
          </p>
        </div>

        {/* PDF Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-background/60  shadow-2xl overflow-hidden p-10">
            <iframe
              src="/Speisekarte Westfield.pdf"
              width="100%"
              height="1000px"
              className="border-none"
              title="Cardamom Speisekarte Hohe Bleichen"
              loading="lazy"
            ></iframe>
          </div>
          {/* <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">Können Sie die Speisekarte nicht sehen?</p>
            <a
              href="/Speisekarte Westfield.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Speisekarte herunterladen
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MenuPDF;
