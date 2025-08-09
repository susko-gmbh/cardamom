'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const OpeningHours = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <span className="miniver-regular text-primary/80 text-xl sm:text-2xl font-light tracking-wide mb-3 sm:mb-4 block">
            Öffnungszeiten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Wir freuen uns auf Sie
          </h2>
          <div className="w-12 sm:w-16 h-px bg-primary mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Besuchen Sie uns zu unseren Öffnungszeiten und genießen Sie authentische indische
            Küche in gemütlicher Atmosphäre. Reservierungen sind empfohlen.
          </p>
        </div>

        {/* Opening Hours Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="bg-card p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-border">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Montag - Freitag</h3>
            <p className="text-xl sm:text-2xl font-light text-primary">11:30 - 22:30 Uhr</p>
          </div>
          <div className="bg-card p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300 border border-border">
            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Samstag - Sonntag</h3>
            <p className="text-xl sm:text-2xl font-light text-primary">12:00 - 22:30 Uhr</p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Telefon</h3>
            <Link
              href="tel:+494080080418"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              +49 40 80 08 04 18
            </Link>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Email</h3>
            <Link
              href="mailto:kontakt@cardamom-hamburg.de"
              className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors cursor-pointer break-all"
            >
              kontakt@cardamom-hamburg.de
            </Link>
          </div>

          <div className="text-center sm:col-span-2 md:col-span-1">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Adresse</h3>
            <div className="text-sm sm:text-base text-muted-foreground">
              <p>Hohe Bleichen 10</p>
              <p>20354 Hamburg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
