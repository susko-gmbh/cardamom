'use client';

import {
  Clock,
  GlassWater,
  Leaf,
  Lightbulb,
  MapPin,
  Phone,
  Star,
  Users,
  Utensils,
} from 'lucide-react';
import Image from 'next/image';

const LocationShowcase = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="miniver-regular text-primary/80 text-2xl font-light tracking-wide mb-4 block">
            Hohe Bleichen
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entdecken Sie unsere Location
          </h2>
          <div className="w-24 h-px bg-primary mx-auto"></div>
        </div>

        {/* Interior Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-36">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/home/westfield02.jpg"
                alt="Cardamom Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-primary/80 miniver-regular text-2xl font-light tracking-wide mb-4 block">
                Interior
              </span>
              <h3 className="text-3xl lg:text-5xl font-bold text-foreground mb-10">
                Elegante Atmosphäre
              </h3>
              <div className="w-16 h-px bg-primary mb-10"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unser Restaurant in der Hohe Bleichen 10 bietet eine einzigartige Kombination aus
              moderner Eleganz und authentischer indischer Gastronomie. Die sorgfältig gestaltete
              Innenarchitektur schafft eine warme, einladende Atmosphäre, die sowohl für
              geschäftliche Treffen als auch für romantische Abende perfekt ist.
            </p>
            <div className="space-y-4 ">
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-foreground">80 Sitzplätze in gemütlicher Atmosphäre</span>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Star className="h-5 w-5 text-primary" />
                <span className="text-foreground">Elegantes Design mit warmen Akzenten</span>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Lightbulb className="h-5 w-5 text-primary" />
                <span className="text-foreground">Perfekte Beleuchtung für jede Tageszeit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen & Bar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-36">
          <div className="space-y-6">
            <div>
              <span className="miniver-regular text-primary/80 text-2xl font-light tracking-wide mb-4 block">
                Küche & Bar
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground  mb-10">
                Moderne Ausstattung
              </h3>
              <div className="w-16 h-px bg-primary  mb-10"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unsere moderne Küche ist mit hochwertiger Ausstattung ausgestattet und bietet unseren
              erfahrenen Köchen die perfekte Umgebung, um traditionelle indische Rezepte mit
              zeitgemäßer Präsentation zu kreieren. Die angeschlossene Bar serviert eine sorgfältig
              kuratierte Auswahl an Getränken.
            </p>
            <div className="space-y-4  w-11/12">
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Utensils className="h-5 w-5 text-primary" />
                <span className="text-foreground">Professionelle Küchenausstattung</span>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <GlassWater className="h-5 w-5 text-primary" />
                <span className="text-foreground">Stylische Bar mit Premium-Getränken</span>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Leaf className="h-5 w-5 text-primary" />
                <span className="text-foreground">Frische Zutaten & authentische Gewürze</span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/home/westfield03.jpg"
                alt="Cardamom Kitchen & Bar"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Location & Address */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/3]  overflow-hidden">
              <Image
                src="/home/location.jpg"
                alt="Cardamom Location"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 flex items-center justify-between left-0 bg-card/90 backdrop-blur-sm p-6 w-full">
                <div className="">
                  <h4 className="text-2xl font-semibold text-foreground mb-1">Hohe Bleichen 10</h4>
                  <p className="text-muted-foreground mb-2">20354 Hamburg</p>
                </div>
                <button className="group relative overflow-hidden bg-transparent border border-primary text-primary px-6 py-2 font-light text-sm capitalize hover:bg-primary hover:text-white transition-all duration-500 flex items-center justify-center gap-2">
                  <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-11">
                    Zentrale Lage
                  </span>
                  <div className="absolute top-1/2 left-0 -translate-y-px bg-primary h-px w-0 opacity-0 transition-all duration-500 group-hover:w-7 group-hover:opacity-100 group-hover:translate-x-7"></div>
                  <div className="bg-primary h-px w-7 opacity-100 ml-4 transition-all duration-500 group-hover:scale-100 group-hover:opacity-0"></div>
                </button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-primary/80 text-lg font-light tracking-wide mb-4 block">
                Lage
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Zentrale Position
              </h3>
              <div className="w-16 h-px bg-primary mb-6"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Unsere Location befindet sich im Herzen Hamburgs, in der eleganten Hohe Bleichen
              Straße. Die zentrale Lage macht uns zum idealen Treffpunkt für Geschäftsleute,
              Touristen und Einheimische gleichermaßen. Einfach erreichbar mit öffentlichen
              Verkehrsmitteln und in unmittelbarer Nähe zu wichtigen Sehenswürdigkeiten.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground block">Adresse:</strong>
                  <span className="text-muted-foreground">Hohe Bleichen 10, 20354 Hamburg</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground block">Telefon:</strong>
                  <span className="text-muted-foreground">+49 40 80 08 04 18</span>
                </div>
              </div>
              <div className="flex items-center gap-4 py-4 bg-card px-6 border-s-6 border-primary">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-foreground block">Öffnungszeiten:</strong>
                  <span className="text-muted-foreground">
                    Mo-Fr: 11:30-22:30 | Sa-So: 12:00-22:30
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationShowcase;
