import { Metadata } from 'next';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import MenuPDF from './components/MenuPDF';
import MenuPreview from './components/MenuPreview';

export const metadata: Metadata = {
  title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg | Authentische Indische Küche  ',
  description:
    'Entdecken Sie unsere authentische indische Speisekarte im Cardamom Hohe Bleichen  . Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.',
  keywords:
    'Cardamom, Speisekarte, Hohe Bleichen, Hamburg, indisches Restaurant, authentische indische Küche, Curry, Tandoori, Gewürze, Menu, susko, susko menu, susko hohe bleichen, susko hamburg',
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg  ',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen  .',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Susko - Cardamom Hamburg',
    url: 'https://cardamom-hamburg.de/hohe-bleichen-menu',
    images: [
      {
        url: 'https://cardamom-hamburg.de/hohe-bleichen/menu-preview.jpg',
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
    images: ['https://cardamom-hamburg.de/hohe-bleichen/menu-preview.jpg'],
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
