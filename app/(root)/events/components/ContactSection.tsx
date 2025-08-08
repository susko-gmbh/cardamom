import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12">
            <span className="inline-block text-primary text-2xl miniver-regular font-medium tracking-wide  mb-4">
              Kontakt
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Event anfragen</h2>
            <div className="w-24 h-[1px] bg-primary mx-auto" />
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Phone Contact */}
            <div className="bg-background  px-8 py-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Telefon</h3>
                <a
                  href="tel:+494080080418"
                  className="text-lg text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                >
                  +49 40 80 08 04 18
                </a>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-background  px-8 py-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Email</h3>
                <a
                  href="mailto:kontakt@cardamom-hamburg.de"
                  className="text-lg text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                >
                  kontakt@cardamom-hamburg.de
                </a>
              </div>
            </div>
          </div>

          {/* Contact Message */}
          <div className=" p-8 ">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kontaktieren Sie uns für ein persönliches Gespräch über Ihre Event-Wünsche. Wir
              beraten Sie gerne und erstellen ein maßgeschneidertes Angebot für Ihr Event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
