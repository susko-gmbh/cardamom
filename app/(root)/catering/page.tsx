import { Metadata } from 'next';
import CateringCTASection from './components/CateringCTASection';
import CateringHeroSection from './components/CateringHeroSection';
import CateringMenu from './components/CateringMenu';
import CateringProcess from './components/CateringProcess';
import CateringServices from './components/CateringServices';

export const metadata: Metadata = {
  title: 'Catering Services - Cardamom Hamburg | Professionelles Indisches Catering  ',
  description:
    'Bringen Sie die authentische indische Küche zu Ihrem Event mit  Catering. Unser professionelles Catering-Service bietet maßgeschneiderte Menüs für jeden Anlass - von privaten Feiern bis hin zu geschäftlichen Events.',
  keywords:
    'Catering Hamburg, Indisches Catering, Event Catering, Business Catering, Private Events, Cardamom Hamburg, Westfield Hamburg, Hohe Bleichen, Authentische indische Küche, Catering Service Hamburg,  catering,  hamburg,  events',
  authors: [{ name: 'Susko', url: 'https://susko.de' }],
  creator: 'Susko',
  publisher: ' Cardamom Hamburg',
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
  openGraph: {
    title: 'Catering Services - Cardamom Hamburg | Professionelles Indisches Catering  ',
    description:
      'Bringen Sie die authentische indische Küche zu Ihrem Event mit  Catering. Unser professionelles Catering-Service bietet maßgeschneiderte Menüs für jeden Anlass - von privaten Feiern bis hin zu geschäftlichen Events.',
    type: 'website',
    siteName: 'Cardamom Hamburg',
    locale: 'de_DE',
    url: 'https://cardamom-hamburg.de/catering',
    images: [
      {
        url: 'https://cardamom-hamburg.de/catering/catering-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardamom Hamburg Catering Services - Authentische indische Küche',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catering Services - Cardamom Hamburg',
    description: 'Professionelles indisches Catering für alle Anlässe in Hamburg  ',
    images: ['https://cardamom-hamburg.de/catering/catering-hero.jpg'],
    creator: '@susko',
    site: '@susko',
  },
};

const CateringMainPage = () => {
  return (
    <main className="">
      <CateringHeroSection />
      <CateringServices />
      <CateringMenu />
      <CateringProcess />
      <CateringCTASection />
    </main>
  );
};

export default CateringMainPage;
