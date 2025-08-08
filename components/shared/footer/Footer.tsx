import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface NavigationLink {
  href: string;
  label: string;
}

interface ContactInfo {
  phone: string;
  email: string;
  addresses: string[];
}

interface OpeningHours {
  days: string;
  hours: string;
}

const Footer: React.FC = () => {
  const navigationLinks: NavigationLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'Über Uns' },
    { href: '/events', label: 'Events' },
    { href: '/catering', label: 'Catering' },
    { href: '/hohe-bleichen-menu', label: 'Hohe Bleichen' },
    { href: '/westfield-menu', label: 'Westfield' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/impressum', label: 'Impressum' },
  ];

  const contactInfo: ContactInfo = {
    phone: '+49 40 80 08 04 18',
    email: 'kontakt@cardamom-hamburg.de',
    addresses: ['Hohe Bleichen 10, 20354 Hamburg', 'Überseeboulevard 7, 20457 Hamburg'],
  };

  const openingHours: OpeningHours[] = [
    { days: 'Montag - Freitag', hours: '11.30 - 22.30' },
    { days: 'Samstag - Sonntag', hours: '12.00 - 22.30' },
  ];

  return (
    <footer className="bg-background text-gray-300 relative mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Links Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-8">Links</h4>
              <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                {navigationLinks.map((link, index) => (
                  <div key={index} className="relative">
                    <Link
                      href={link.href}
                      className="inline-flex items-center text-gray-300 hover:text-primary transition-colors duration-300 pl-4 relative group"
                    >
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white mb-8">Kontakt</h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </Link>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-white transition-colors duration-300 break-all"
                  >
                    {contactInfo.email}
                  </Link>
                </div>

                {contactInfo.addresses.map((address, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{address}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours Section */}
            <div className="space-y-6 md:col-span-2 xl:col-span-1">
              <h4 className="text-2xl font-bold text-white mb-8">Öffnungszeiten</h4>
              <div className="space-y-4">
                {openingHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0"
                  >
                    <span className="text-gray-300 font-medium">{schedule.days}</span>
                    <span className="text-white font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center">
            <span className="text-white">Design: Susko GmbH</span>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
