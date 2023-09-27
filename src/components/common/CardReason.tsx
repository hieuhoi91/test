import React from 'react';
import styles from './cardreason.module.scss';
import Image from 'next/image';
import { reasonProps } from '@/data/data';

interface CardReasonProps {
  item: reasonProps;
}

const CardReason = (props: CardReasonProps) => {
  return (
    <div className={styles.wrapper}>
      <Image
        height={150}
        width={150}
        alt=""
        src={props.item.img}
        className={styles.img}
      />
      <span>{props.item.title}</span>
      <p>{props.item.content}</p>
    </div>
  );
};

export default CardReason;
