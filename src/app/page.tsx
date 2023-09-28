import styles from './page.module.scss';
import Thumbnail from '@/screen/Home/Thumbnail';
import PopularDestinations from '@/screen/Home/PopularDestinations';
import BestValueTrips from '@/screen/Home/BestValueTrips';
import WhyChooseUs from '@/screen/Home/WhyChooseUs';
import Image from 'next/image';
import Articles from '@/screen/Home/Articles';
import ImageParalax from '@/screen/Home/ImageParalax';

export default function Home() {
  return (
    <main className={styles.main}>
      <Thumbnail />
      <PopularDestinations />
      <BestValueTrips />
      <WhyChooseUs />
      <ImageParalax />
      <Articles />
    </main>
  );
}
