import Image from 'next/image';

const NavigationCard = ({
  title,
  imageUrl,
  imageAlt,
  gradientColors,
}: {
  title: string;
  imageAlt: string;
  imageUrl: string;
  gradientColors: string;
}) => {
  return (
    <div className="group cursor-pointer border pb-4">
      <div className={`aspect-square bg-gradient-to-br ${gradientColors} overflow-hidden mb-4`}>
        <Image
          width={600}
          height={500}
          src={imageUrl ? imageUrl : '/home/westfield.jpg'}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-medium text-center group-hover:text-[#c6a87d] transition-colors">
        {title}
      </h3>
    </div>
  );
};

export default NavigationCard;
