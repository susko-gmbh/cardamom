import Image from 'next/image';

export default function EventsShowcase() {
  const eventTypes = [
    {
      title: 'Private Events',
      description:
        'Feiern Sie Ihre besonderen Momente in exklusiver Atmosphäre. Von Geburtstagen bis Hochzeiten - wir gestalten Ihr perfektes Event.',
      image: '/home/westfield02.jpg',
      features: ['Bis zu 80 Personen', 'Individuelle Menüs', 'Professioneller Service'],
    },
    {
      title: 'Business Events',
      description:
        'Professionelle Catering-Services für Ihre Geschäftsveranstaltungen. Von Meetings bis Konferenzen - wir sorgen für den kulinarischen Erfolg.',
      image: '/events/event1.png',
      features: ['Flexible Gruppengrößen', 'Business-Menüs', 'Pünktlicher Service'],
    },
    {
      title: 'Catering Services',
      description:
        'Professionelles Catering für Ihre Veranstaltungen vor Ort. Wir bringen die authentische indische Küche zu Ihnen.',
      image: '/events/event2.png',
      features: ['Vor-Ort-Service', 'Komplette Ausstattung', 'Frische Zubereitung'],
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block miniver-regular text-primary text-2xl font-medium tracking-wide  mb-4">
            Events
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Unsere Event-Services
          </h2>
          <div className="w-24 h-[1px] bg-primary mx-auto" />
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="bg-background rounded- border border-primary/20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Event Content */}
              <div className="p-10 bg-border">
                <h3 className="text-2xl font-bold text-foreground mb-6 uppercase">{event.title}</h3>
                <p className="text-white/80 mb-10 leading-relaxed">{event.description}</p>

                {/* Event Features */}
                <div className="space-y-3">
                  {event.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className=" bg-primary/10 text-primary border border-primary/20 px-6 py-3 rounded-full text-sm font-medium mr-2 mb-2"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
