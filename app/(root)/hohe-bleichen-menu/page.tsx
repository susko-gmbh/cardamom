import { Metadata } from 'next';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import MenuPDF from './components/MenuPDF';
import MenuPreview from './components/MenuPreview';

export const metadata: Metadata = {
  title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg | Authentische Indische Küche',
  description:
    'Entdecken Sie unsere authentische indische Speisekarte im Cardamom Hohe Bleichen Hamburg. Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.',
  keywords:
    'Cardamom, Speisekarte, Hohe Bleichen, Hamburg, indisches Restaurant, authentische indische Küche, Curry, Tandoori, Gewürze, Menu, cardamom menu, cardamom hohe bleichen, cardamom hamburg',
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
    title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Cardamom Hamburg',
    url: 'https://www.cardamom-hamburg.de/hohe-bleichen-menu',
    images: [
      {
        url: 'https://www.cardamom-hamburg.de/hohe-bleichen/menu-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Hohe Bleichen Speisekarte - Authentische Indische Küche',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen.',
    images: ['https://www.cardamom-hamburg.de/hohe-bleichen/menu-preview.jpg'],
  },
  alternates: {
    canonical: '/hohe-bleichen-menu',
  },
};

export default function HoheBleichenMenuPage() {
  return (
    <main className="bg-card">
      <HeroSection />
      <MenuPreview />
      <MenuPDF />
      <CTASection />
    </main>
  );
}
