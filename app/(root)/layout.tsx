import Navbar from '@/components/shared/navbar/Navbar';
import ScrollToTop from '@/components/shared/ScrollToTop';

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="text-primary">
      <Navbar />

      {children}
      <ScrollToTop />
    </div>
  );
};

export default layout;
