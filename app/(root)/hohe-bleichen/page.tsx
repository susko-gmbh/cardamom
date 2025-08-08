import CTASection from '@/app/(root)/hohe-bleichen/components/CTASection';
import HeroSection from '@/app/(root)/hohe-bleichen/components/HeroSection';
import LocationShowcase from '@/app/(root)/hohe-bleichen/components/LocationShowcase';
import OpeningHours from '@/app/(root)/hohe-bleichen/components/OpeningHours';
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
