import { Calendar, Leaf, Star } from 'lucide-react';
import Image from 'next/image';

export default function EventDetails() {
  const services = [
    {
      icon: Calendar,
      title: 'Individuelle Planung',
      description: 'Jedes Event wird maßgeschneidert nach Ihren Wünschen geplant und umgesetzt.',
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Professionelle Betreuung und erstklassiger Service für Ihr perfektes Event.',
    },
    {
      icon: Leaf,
      title: 'Authentische Küche',
      description:
        'Frische, authentische indische Küche für ein unvergessliches kulinarisches Erlebnis.',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <span className="inline-block text-primary text-xl sm:text-2xl miniver-regular font-medium tracking-wide mb-3 sm:mb-4">
            Event-Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Professionelle Event-Gestaltung
          </h2>
          <div className="w-16 sm:w-24 h-[1px] bg-primary mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Image Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[700px] overflow-hidden shadow-xl">
              <Image
                src="/home/westfield02.jpg"
                alt="Cardamom Events"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 sm:space-y-10 lg:space-y-14 order-1 lg:order-2">
            {/* Description */}
            <div>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Bei Cardamom verstehen wir, dass jedes Event einzigartig ist. Unsere erfahrenen
                Event-Manager arbeiten eng mit Ihnen zusammen, um Ihre Vision zum Leben zu erwecken.
                Von der ersten Planung bis zur letzten Note - wir sorgen für ein unvergessliches
                Erlebnis.
              </p>
            </div>

            {/* Services Grid */}
            <div className="space-y-4 sm:space-y-6">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4 bg-card p-6 sm:p-8 lg:p-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
