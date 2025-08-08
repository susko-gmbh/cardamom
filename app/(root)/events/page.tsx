import { Metadata } from 'next';
import ContactSection from './components/ContactSection';
import EventDetails from './components/EventDetails';
import EventsCTASection from './components/EventsCTASection';
import EventsHeroSection from './components/EventsHeroSection';
import EventsShowcase from './components/EventsShowcase';

export const metadata: Metadata = {
  title: 'Events & Catering - Cardamom Hamburg | Unvergessliche Events',
  description:
    'Erleben Sie außergewöhnliche Events und Catering-Services mit unserer authentischen indischen Küche. Von privaten Feiern bis hin zu geschäftlichen Events.',
  keywords:
    'Cardamom, Events, Catering, Hamburg, indisches Restaurant, private Events, Business Events, Hochzeiten, Geburtstage, Geschäftsveranstaltungen',
  openGraph: {
    title: 'Events & Catering - Cardamom Hamburg',
    description:
      'Erleben Sie außergewöhnliche Events und Catering-Services mit unserer authentischen indischen Küche.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: '/events',
  },
};

export default function EventsPage() {
  return (
    <main className="bg-card">
      <EventsHeroSection />
      <EventsShowcase />
      <EventDetails />
      <ContactSection />
      <EventsCTASection />
    </main>
  );
}
