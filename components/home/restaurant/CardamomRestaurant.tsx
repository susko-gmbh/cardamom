import HeroSection from './HeroSection';
import NavigationSection from './NavigationSection';
import PhilosophySection from './PhilosophySection';

export default function CardamomRestaurant() {
  return (
    <div className="bg-card text-white">
      <HeroSection />
      <NavigationSection />
      <PhilosophySection />

      {/* Footer spacing */}
      <div className="h-16"></div>
    </div>
  );
}
