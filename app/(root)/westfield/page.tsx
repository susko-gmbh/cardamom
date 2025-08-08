import CTASection from '@/app/(root)/westfield/components/CTASection';
import HeroSection from '@/app/(root)/westfield/components/HeroSection';
import LocationShowcase from '@/app/(root)/westfield/components/LocationShowcase';
import OpeningHours from '@/app/(root)/westfield/components/OpeningHours';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cardamom Westfield - Progressive Indian Dining | Hamburg',
  description:
    'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Westfield Hamburg-Überseequartier. Cardamom Westfield verbindet traditionelle Aromen mit moderner Präsentation.',
  keywords:
    'Cardamom, Westfield, Hamburg, Überseequartier, indisches Restaurant, progressive indische Küche, elegante Atmosphäre, Tisch reservieren',
  openGraph: {
    title: 'Cardamom Westfield - Progressive Indian Dining',
    description:
      'Erleben Sie progressive indische Küche in eleganter Atmosphäre im Westfield Hamburg-Überseequartier.',
    type: 'website',
    locale: 'de_DE',
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
