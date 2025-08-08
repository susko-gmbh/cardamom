import { Metadata } from 'next';
import CateringCTASection from './components/CateringCTASection';
import CateringHeroSection from './components/CateringHeroSection';
import CateringMenu from './components/CateringMenu';
import CateringProcess from './components/CateringProcess';
import CateringServices from './components/CateringServices';

export const metadata: Metadata = {
  title: 'Catering Services - Cardamom Hamburg | Professionelles Indisches Catering',
  description:
    'Bringen Sie die authentische indische Küche zu Ihrem Event. Unser professionelles Catering-Service bietet maßgeschneiderte Menüs für jeden Anlass - von privaten Feiern bis hin zu geschäftlichen Events.',
  keywords:
    'Catering Hamburg, Indisches Catering, Event Catering, Business Catering, Private Events, Cardamom Hamburg',
  openGraph: {
    title: 'Catering Services - Cardamom Hamburg',
    description: 'Professionelles indisches Catering für alle Anlässe in Hamburg',
    type: 'website',
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
