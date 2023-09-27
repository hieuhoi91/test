import Title from '@/components/common/Title';
import React from 'react';
import styles from './besttrip.module.scss';
import CardTrip from '@/components/common/CardTrip';
import { bestTrip } from '@/data/data';

const BestValueTrips = () => {
  return (
    <div className={styles.wrapper}>
      <Title title="Best Value Trips" description="Best offers trips from us" />
      <div className={styles.list_card}>
        {bestTrip.map(item => (
          <CardTrip key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BestValueTrips;
