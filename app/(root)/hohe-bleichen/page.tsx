import CTASection from '@/components/hohe-bleichen/CTASection';
import HeroSection from '@/components/hohe-bleichen/HeroSection';
import LocationShowcase from '@/components/hohe-bleichen/LocationShowcase';
import OpeningHours from '@/components/hohe-bleichen/OpeningHours';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardamom Hohe Bleichen - Progressive Indian Dining | Hamburg',
  description:
    'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Herzen Hamburgs. Cardamom Hohe Bleichen verbindet traditionelle Aromen mit moderner Präsentation.',
  keywords:
    'Cardamom, Hohe Bleichen, Hamburg, indisches Restaurant, progressive indische Küche, elegante Atmosphäre, Tisch reservieren',
  openGraph: {
    title: 'Cardamom Hohe Bleichen - Progressive Indian Dining',
    description:
      'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Herzen Hamburgs.',
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: '/hohe-bleichen',
  },
};

export default function HoheBleichenPage() {
  return (
    <main className="bg-card">
      <HeroSection />
      <LocationShowcase />
      <OpeningHours />
      <CTASection />
    </main>
  );
}
