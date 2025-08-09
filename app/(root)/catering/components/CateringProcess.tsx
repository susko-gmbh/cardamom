const CateringProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Beratung',
      description: 'Wir besprechen Ihre Wünsche, Anforderungen und den Rahmen Ihrer Veranstaltung.',
    },
    {
      number: '02',
      title: 'Menüplanung',
      description:
        'Gemeinsam erstellen wir ein maßgeschneidertes Menü, das perfekt zu Ihrem Event passt.',
    },
    {
      number: '03',
      title: 'Zubereitung',
      description:
        'Unsere erfahrenen Köche bereiten alle Gerichte frisch und mit Liebe zum Detail zu.',
    },
    {
      number: '04',
      title: 'Service',
      description:
        'Wir sorgen für einen reibungslosen Ablauf und ein unvergessliches kulinarisches Erlebnis.',
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xl sm:text-2xl font-medium mb-3 sm:mb-4 miniver-regular block">
            Unser Prozess
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            So funktioniert unser Catering
          </h2>
          <div className="w-16 sm:w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-8 sm:top-10 left-0 right-0 h-px bg-primary/30 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group lg:px-4">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:border-primary/80 transition-all duration-300 relative z-20">
                    <span className="text-xl sm:text-2xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Mobile connecting line */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden w-px h-6 sm:h-8 bg-primary/30 mx-auto"></div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base px-2 sm:px-0">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CateringProcess;
