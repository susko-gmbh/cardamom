import { Metadata } from 'next';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import MenuPDF from './components/MenuPDF';
import MenuPreview from './components/MenuPreview';

export const metadata: Metadata = {
  title: 'Speisekarte Westfield - Cardamom Hamburg | Authentische Indische Küche',
  description:
    'Entdecken Sie unsere authentische indische Speisekarte im Cardamom Westfield Hamburg-Überseequartier. Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.',
  keywords:
    'Cardamom, Speisekarte, Westfield, Hamburg, Überseequartier, indisches Restaurant, authentische indische Küche, Curry, Tandoori, Gewürze, Menu',
  openGraph: {
    title: 'Speisekarte Westfield - Cardamom Hamburg',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen im Westfield Hamburg-Überseequartier.',
    type: 'website',
    locale: 'de_DE',
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
