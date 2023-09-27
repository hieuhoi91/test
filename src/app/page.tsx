import styles from './page.module.scss';
import Thumbnail from '@/screen/Home/Thumbnail';
import PopularDestinations from '@/screen/Home/PopularDestinations';
import BestValueTrips from '@/screen/Home/BestValueTrips';
import WhyChooseUs from '@/screen/Home/WhyChooseUs';
import Image from 'next/image';
import Articles from '@/screen/Home/Articles';

export default function Home() {
  return (
    <main className={styles.main}>
      <Thumbnail />
      <PopularDestinations />
      <BestValueTrips />
      <WhyChooseUs />
      <div className={styles.bg}>
        <Image
          width={2000}
          height={1000}
          alt=""
          src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg"
          className={styles.image}
        />
      </div>
      <Articles />
    </main>
  );
}
