import { Metadata } from 'next';
import ContactSection from './components/ContactSection';
import EventDetails from './components/EventDetails';
import EventsCTASection from './components/EventsCTASection';
import EventsHeroSection from './components/EventsHeroSection';
import EventsShowcase from './components/EventsShowcase';

export const metadata: Metadata = {
  title: 'Events & Catering - Cardamom Hamburg | Unvergessliche Events',
  description:
    'Erleben Sie außergewöhnliche Events und Catering-Services mit unserer authentischen indischen Küche. Von privaten Feiern bis hin zu geschäftlichen Events - perfekt für Hochzeiten, Geburtstage und Business-Events in Hamburg.',
  keywords:
    'Cardamom, Events, Catering, Hamburg, indisches Restaurant, private Events, Business Events, Hochzeiten, Geburtstage, Geschäftsveranstaltungen, Event-Location, indische Küche, Firmenveranstaltungen, Privatfeiern, cardamom events, cardamom catering, cardamom hamburg',
  authors: [{ name: 'Cardamom Restaurant', url: 'https://www.cardamom-hamburg.de' }],
  creator: 'Cardamom Restaurant',
  publisher: 'Cardamom Hamburg',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Events & Catering - Cardamom Hamburg | Unvergessliche Events',
    siteName: 'Cardamom Hamburg',
    description:
      'Erleben Sie außergewöhnliche Events und Catering-Services mit unserer authentischen indischen Küche. Von privaten Feiern bis hin zu geschäftlichen Events.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.cardamom-hamburg.de/events',
    images: [
      {
        url: '/events/events-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Hamburg Events & Catering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Catering - Cardamom Hamburg',
    description:
      'Erleben Sie außergewöhnliche Events und Catering-Services mit unserer authentischen indischen Küche.',
    images: ['/events/events-hero.jpg'],
    creator: '@cardamom_hamburg',
    site: '@cardamom_hamburg',
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
