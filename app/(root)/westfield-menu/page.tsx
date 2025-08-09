import { Metadata } from 'next';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import MenuPDF from './components/MenuPDF';
import MenuPreview from './components/MenuPreview';

export const metadata: Metadata = {
  title: 'Speisekarte Westfield - Cardamom Hamburg | Authentische Indische Küche by Susko',
  description:
    'Entdecken Sie unsere authentische indische Speisekarte im Cardamom Westfield Hamburg-Überseequartier by Susko. Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.',
  keywords:
    'Cardamom, Speisekarte, Westfield, Hamburg, Überseequartier, indisches Restaurant, authentische indische Küche, Curry, Tandoori, Gewürze, Menu, susko, susko menu, susko westfield, susko hamburg',
  authors: [{ name: 'Susko', url: 'https://susko.de' }],
  creator: 'Susko',
  publisher: 'Susko - Cardamom Hamburg',
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
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Speisekarte Westfield - Cardamom Hamburg by Susko',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen im Westfield Hamburg-Überseequartier by Susko.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Susko - Cardamom Hamburg',
    url: 'https://cardamom-hamburg.de/westfield-menu',
    images: [
      {
        url: '/images/cardamom-westfield-menu-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Westfield Speisekarte - Authentische Indische Küche',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speisekarte Westfield - Cardamom Hamburg',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen im Westfield Hamburg-Überseequartier.',
    images: ['/images/cardamom-westfield-menu-twitter.jpg'],
  },
  alternates: {
    canonical: '/westfield-menu',
  },
};

export default function WestfieldMenuPage() {
  return (
    <main className="bg-card">
      <HeroSection />
      <MenuPreview />
      <MenuPDF />
      <CTASection />
    </main>
  );
}
