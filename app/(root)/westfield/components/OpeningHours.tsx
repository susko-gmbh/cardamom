'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const OpeningHours = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-16">
            <span className="miniver-regular text-primary/80 text-2xl font-light tracking-wide mb-4 block">
              Öffnungszeiten
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Besuchen Sie uns
            </h2>
            <div className="w-24 h-px bg-primary mx-auto"></div>
          </div>

          {/* Opening Hours Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-background  p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">Montag - Freitag</h3>
              <p className="text-2xl font-light text-primary">11:30 - 22:30 Uhr</p>
            </div>
            <div className="bg-background  p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-foreground mb-4">Samstag - Sonntag</h3>
              <p className="text-2xl font-light text-primary">12:00 - 22:30 Uhr</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Telefon</h3>
              <Link
                href="tel:+494080080418"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                +49 40 80 08 04 18
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <Link
                href="mailto:kontakt@cardamom-hamburg.de"
                className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                kontakt@cardamom-hamburg.de
              </Link>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Adresse</h3>
              <div className="text-muted-foreground">
                <p>Überseeboulevard 7</p>
                <p>20457 Hamburg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;