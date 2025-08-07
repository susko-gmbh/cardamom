import Navbar from '@/components/shared/navbar/Navbar';
import ScrollContext from '@/components/shared/ScrollContext';
import ScrollToTop from '@/components/shared/ScrollToTop';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="text-primary">
      <Navbar />

      <ScrollContext>{children}</ScrollContext>
      <ScrollToTop />
    </div>
  );
};

export default layout;
