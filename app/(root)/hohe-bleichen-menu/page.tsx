import { Metadata } from 'next';
import CTASection from './components/CTASection';
import HeroSection from './components/HeroSection';
import MenuPDF from './components/MenuPDF';
import MenuPreview from './components/MenuPreview';

export const metadata: Metadata = {
  title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg | Authentische Indische Küche',
  description:
    'Entdecken Sie unsere authentische indische Speisekarte im Cardamom Hohe Bleichen. Von traditionellen Curries bis hin zu zeitgemäßen Kreationen - jedes Gericht erzählt eine Geschichte von Aromen und Gewürzen.',
  keywords:
    'Cardamom, Speisekarte, Hohe Bleichen, Hamburg, indisches Restaurant, authentische indische Küche, Curry, Tandoori, Gewürze, Menu',
  openGraph: {
    title: 'Speisekarte Hohe Bleichen - Cardamom Hamburg',
    description:
      'Entdecken Sie unsere authentische indische Speisekarte mit traditionellen Curries und zeitgemäßen Kreationen.',
    type: 'website',
    locale: 'de_DE',
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
