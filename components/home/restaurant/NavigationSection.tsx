import NavigationCard from './NavigationCard';

const NavigationSection = () => {
  const cards = [
    {
      title: 'Tisch reservieren',
      imageAlt: 'Table reservation',
      imageUrl: '/home/reserveTable.jpg',
      gradientColors: 'from-amber-100 to-amber-200',
    },
    {
      title: 'Unser Angebot',
      imageAlt: 'Our offerings',
      imageUrl: '/home/ourRange.jpg',

      gradientColors: 'from-yellow-100 to-yellow-200',
    },
    {
      title: 'Kontakt',
      imageAlt: 'Contact',
      imageUrl: '/home/contact.jpg',

      gradientColors: 'from-orange-100 to-orange-200',
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <NavigationCard
            key={index}
            title={card.title}
            imageAlt={card.imageAlt}
            imageUrl={card.imageUrl}
            gradientColors={card.gradientColors}
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationSection;
