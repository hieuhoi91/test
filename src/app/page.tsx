import Image from 'next/image';
import styles from './page.module.css';
import Thumbnail from '@/screen/Home/Thumbnail';
import PopularDestinations from '@/screen/Home/PopularDestinations';

export default function Home() {
  return (
    <main className={styles.main}>
      <Thumbnail />
      <PopularDestinations />
    </main>
  );
}
