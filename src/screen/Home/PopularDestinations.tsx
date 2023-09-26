import CardSmall from '@/components/common/CardSmall';
import Title from '@/components/common/Title';
import { imagePopular } from '@/data/data';
import React from 'react';
import styles from './popular.module.scss';

const PopularDestinations = () => {
  return (
    <div className={styles.wrapper}>
      <Title
        title="Popular Destinations"
        description="World's best tourist destinations"
      />
      <div className={styles.list_card}>
        {imagePopular.map(item => (
          <CardSmall key={item.name} src={item.src} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
