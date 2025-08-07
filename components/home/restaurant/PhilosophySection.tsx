import Image from 'next/image';
import { ReactNode } from 'react';

const FeatureItem = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 bg-[#c6a87d] rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-medium mb-2">{title}</h4>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const checkIcon = (
  <svg className="w-4 h-4 text-[#080b0e]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const circleCheckIcon = (
  <svg className="w-4 h-4 text-[#080b0e]" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);
const PhilosophySection = () => {
  const features = [
    {
      title: 'Vegane Küche',
      description: 'Veganer Genuss, einfach lecker im Cardamom.',
      icon: checkIcon,
    },
    {
      title: 'Einzigartige Atmosphäre',
      description: 'Gemütlich und einladend mit stilvollem Design.',
      icon: circleCheckIcon,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center justify-center">
        {/* Left Image */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <Image
              width={500}
              height={500}
              src="/home/traditionMeets.png"
              alt="Signature dish"
              className="w-3/4"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <div>
            <p className="text-[#c6a87d] text-sm font-light tracking-wide mb-4">
              Cardamom – Progressive Indian Dining
            </p>
            <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6">
              Wo Tradition auf Innovation trifft, und Geschmack zu einer Reise wird.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Bei uns geht es nicht nur um Mahlzeiten; es geht um eine Reise durch die Aromen und
              Gewürze, die die Vielfalt Indiens repräsentieren. Unser Restaurant lädt Sie ein, die
              Magie von Cardamom zu erleben, wo jede Mahlzeit mit Liebe zubereitet wird und jede
              Geschmacksnote eine Geschichte erzählt. Tauchen Sie ein in die Welt der exquisiten
              indischen Küche und lassen Sie sich von unseren Gerichten verzaubern, die sowohl die
              Essenz der Tradition als auch die Raffinesse der Moderne einfangen.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
