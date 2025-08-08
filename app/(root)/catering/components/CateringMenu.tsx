import Image from 'next/image';
import Link from 'next/link';

const CateringMenu = () => {
  const menuTypes = [
    {
      image: '/home/westfield02.jpg',
      title: 'Klassische Menüs',
      description:
        'Traditionelle indische Gerichte in ihrer authentischsten Form. Perfekt für Gäste, die die ursprünglichen Aromen Indiens erleben möchten.',
      features: ['Curries & Tandoori', 'Biryani & Naan', 'Desserts'],
    },
    {
      image: '/home/location.jpg',
      title: 'Fusion Menüs',
      description:
        'Moderne Interpretationen indischer Küche mit internationalen Einflüssen. Kreative Kombinationen für anspruchsvolle Gäste.',
      features: ['Fusion Curries', 'Internationale Beilagen', 'Moderne Präsentation'],
    },
    {
      image: '/home/westfield03.jpg',
      title: 'Premium Menüs',
      description:
        'Exklusive Menüs mit den feinsten Zutaten und aufwendigen Zubereitungsmethoden. Für besondere Anlässe und anspruchsvolle Events.',
      features: ['Premium Zutaten', 'Aufwendige Zubereitung', 'Elegante Präsentation'],
    },
  ];

  return (
    <section className="bg-muted/30 py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-lg font-medium mb-4 block">Catering Menüs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Maßgeschneiderte kulinarische Erlebnisse
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {menuTypes.map((menu, index) => (
            <div
              key={index}
              className="bg-card  shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image src={menu.image} alt={menu.title} fill className="object-cover" />
              </div>
              <div className="p-12">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{menu.title}</h3>
                <p className="text-foreground mb-10 leading-relaxed">{menu.description}</p>
                <div className="flex flex-wrap gap-2">
                  {menu.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-6 py-3 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            Alle Menüs werden individuell nach Ihren Wünschen angepasst und berücksichtigen
            besondere Ernährungsbedürfnisse, Allergien und persönliche Vorlieben.
          </p>
          <Link
            href="mailto:kontakt@cardamom-hamburg.de"
            className="group relative overflow-hidden bg-primary border border-primary text-white px-8 py-3 font-light text-lg capitalize hover:bg-primary/90 transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer inline-flex"
          >
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
              Menü anfragen
            </span>
            <div className="absolute top-1/2 left-0 -translate-y-px bg-white h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
            <div className="bg-white h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CateringMenu;
