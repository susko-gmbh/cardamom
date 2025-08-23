import Image from 'next/image';
import React from 'react';

// TypeScript interfaces
interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AngebotSectionProps {
  className?: string;
}

// Service Item Component
const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 group">
      {/* Icon Circle */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 border-2 border-[#c6a87d] rounded-full flex items-center justify-center group-hover:bg-[#c6a87d] transition-all duration-300">
        <div className="text-[#c6a87d] group-hover:text-[#080b0e] transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-medium text-white">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

// Icons Components
const VeganIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12l2 2 4-4" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AuthenticIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="7" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="10" strokeWidth={1} />
  </svg>
);

const CocktailIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 12V7a1 1 0 011-1h4l2-3h2l2 3h4a1 1 0 011 1v5M5 12l3 7h8l3-7M5 12h14"
    />
    <circle cx="12" cy="15" r="2" strokeWidth={1.5} />
  </svg>
);

const SeatingIcon: React.FC = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

// Main Angebot Section Component
const AngebotSection: React.FC<AngebotSectionProps> = ({ className = '' }) => {
  // Service data with TypeScript typing
  const services: Omit<ServiceItemProps, 'icon'>[] = [
    {
      title: 'Vegane Gerichte',
      description:
        'In unserem Streben nach kulinarischer Vielfalt bieten wir eine exquisite Auswahl an veganen Gerichten an, die Geschmack und Kreativität ohne Kompromisse vereinen.',
    },
    {
      title: 'Authentisch und modern',
      description:
        'Tapas-basiert konzeptioniert, mit vielen Tellern zum teilen, um den authentischen Geschmack und die Qualität der indischen Küche zu gewähren.',
    },
    {
      title: 'Exklusive Getränke',
      description:
        'Genießen Sie bei uns spannende, exklusive Cocktails und ausgewählte Spitzenweine - sorgfältig zubereitet, um Ihren Gaumen mit frischen Aromen zu verwöhnen.',
    },
    {
      title: '100 Sitzplätze',
      description:
        'Wir streben danach, ein unvergessliches Erlebnis mit räumiger Ambiente und herzlichen Service zu bieten.',
    },
  ];

  // Icons array matching the services
  const icons: React.ReactNode[] = [
    <VeganIcon key="vegan" />,
    <AuthenticIcon key="authentic" />,
    <CocktailIcon key="cocktail" />,
    <SeatingIcon key="seating" />,
  ];

  return (
    <section className={`relative min-h-screen lg:h-screen w-full ${className}`}>
      {/* Split Background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Left Side - Dark Background */}
        <div className="w-full lg:w-1/2 bg-[#080b0e] min-h-[50vh] lg:min-h-full"></div>

        {/* Right Side - Full Image */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/home/offer.webp"
            alt="Restaurant dishes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={85}
            priority
          />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
          {/* Header Section */}
          <div className="mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left">
            <p className="text-[#c6a87d] text-xs sm:text-2xl  font-light tracking-wide mb-2 sm:mb-4 miniver-regular">
              Angebot
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight max-w-2xl mx-auto lg:mx-0">
              Entdecken Sie unser Angebot
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto bg-card px-4 sm:px-8 lg:px-14 py-8 sm:py-12 lg:py-20">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                icon={icons[index]}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AngebotSection;

// Export types for external use
export type { AngebotSectionProps, ServiceItemProps };
