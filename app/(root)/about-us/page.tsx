import PhilosophySection from '@/components/home/restaurant/PhilosophySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import HeroSection from './components/HeroSection';

const AboutMainPage = () => {
  return (
    <main className="">
      <HeroSection />
      <div className="pt-20 bg-card">
        <PhilosophySection />
      </div>
      <TestimonialsSection />
    </main>
  );
};

export default AboutMainPage;
