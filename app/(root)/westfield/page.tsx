import CTASection from '@/app/(root)/westfield/components/CTASection';
import HeroSection from '@/app/(root)/westfield/components/HeroSection';
import LocationShowcase from '@/app/(root)/westfield/components/LocationShowcase';
import OpeningHours from '@/app/(root)/westfield/components/OpeningHours';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardamom Westfield - Progressive Indian Dining | Hamburg',
  description:
    'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Westfield Hamburg-Überseequartier. Cardamom Westfield verbindet traditionelle Aromen mit moderner Präsentation für ein unvergessliches kulinarisches Erlebnis.',
  keywords:
    'Cardamom, Westfield, Hamburg, Überseequartier, indisches Restaurant, progressive indische Küche, elegante Atmosphäre, Tisch reservieren, authentische Gewürze, moderne Präsentation, HafenCity, Speisekarte, cardamom westfield, cardamom hamburg, cardamom restaurant',
  authors: [{ name: 'Cardamom Restaurant', url: 'https://www.cardamom-hamburg.de' }],
  creator: 'Cardamom Restaurant',
  publisher: 'Cardamom Restaurant Hamburg',
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
    maximumScale: 5,
  },
  openGraph: {
    title: 'Cardamom Westfield - Progressive Indian Dining | Hamburg',
    siteName: 'Cardamom Restaurant',
    description:
      'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Westfield Hamburg-Überseequartier. Authentische Aromen treffen auf moderne Präsentation.',
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.cardamom-hamburg.de/westfield',
    images: [
      {
        url: '/westfield/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Westfield Restaurant Interior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardamom Westfield - Progressive Indian Dining',
    description:
      'Progressive indische Küche im Westfield Hamburg-Überseequartier. Reservieren Sie jetzt!',
    images: ['/westfield/hero-image.jpg'],
    creator: '@cardamom_hamburg',
    site: '@cardamom_hamburg',
  },
  alternates: {
    canonical: '/westfield',
  },
};

export default function WestfieldPage() {
  return (
    <main className="bg-card">
      <HeroSection />
      <LocationShowcase />
      <OpeningHours />
      <CTASection />
    </main>
  );
}
