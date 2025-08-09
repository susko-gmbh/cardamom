import { Briefcase, CalendarCheck, Utensils } from 'lucide-react';

const CateringServices = () => {
  const services = [
    {
      icon: Utensils,
      title: 'Private Events',
      description:
        'Perfekt für Geburtstage, Hochzeiten und Familienfeiern. Wir erstellen maßgeschneiderte Menüs für Ihre besonderen Anlässe.',
    },
    {
      icon: Briefcase,
      title: 'Business Events',
      description:
        'Professionelle Catering-Services für Meetings, Konferenzen und Firmenveranstaltungen mit eleganter Präsentation.',
    },
    {
      icon: CalendarCheck,
      title: 'Spezialanlässe',
      description:
        'Von Weihnachtsfeiern bis Sommerfeste - wir sorgen für unvergessliche kulinarische Erlebnisse bei jedem Anlass.',
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary text-xl sm:text-2xl miniver-regular font-medium mb-3 sm:mb-4 block">
            Unsere Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Professionelle Catering-Lösungen
          </h2>
          <div className="w-16 sm:w-24 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-card p-6 sm:p-8 border border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 border border-primary group-hover:shadow-2xl group-hover:shadow-primary/15 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-all duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CateringServices;
