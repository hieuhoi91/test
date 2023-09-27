import Title from '@/components/common/Title';
import React from 'react';
import styles from './whychooseus.module.scss';
import { reason } from '@/data/data';
import CardReason from '@/components/common/CardReason';

const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper}>
      <Title
        title="Why Choose Us"
        description="Here are reasons you should plan trip with us"
      />
      <div className={styles.list_card}>
        {reason.map(item => (
          <CardReason key={item.img} item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
