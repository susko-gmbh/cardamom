import AngebotSection from '@/components/home/AngebotSection';
import Banner from '@/components/home/Banner';
import ContactSection from '@/components/home/ContactSection';
import FAQSection from '@/components/home/FAQSection';
import Location from '@/components/home/Loaction';
import CardamomRestaurant from '@/components/home/restaurant/CardamomRestaurant';
import RestaurantReservation from '@/components/home/RestaurantReservation';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Location />
      <CardamomRestaurant />
      <AngebotSection />
      <RestaurantReservation />
      <ContactSection />
      <FAQSection />
      <TestimonialsSection />
    </main>
  );
}
