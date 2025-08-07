import AngebotSection from '@/components/home/AngebotSection';
import Banner from '@/components/home/Banner';
import Location from '@/components/home/Loaction';
import CardamomRestaurant from '@/components/home/restaurant/CardamomRestaurant';

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Location />
      <CardamomRestaurant />
      <AngebotSection />
    </main>
  );
}
