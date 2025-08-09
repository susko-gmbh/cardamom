import BottomRightImage from '@/components/shared/BottomRightImage';
import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import ScrollContext from '@/components/shared/ScrollContext';
import ScrollToTop from '@/components/shared/ScrollToTop';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="text-primary">
      <Navbar />

      <ScrollContext>{children}</ScrollContext>

      <Footer />
      <ScrollToTop />
      <BottomRightImage />
    </div>
  );
};

export default layout;
