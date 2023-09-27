import React, { FC } from 'react';
import styles from './cardarticles.module.scss';
import Image from 'next/image';
import { articlesProps } from '@/data/data';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export interface CardtripProps {
  item: articlesProps;
}

const CardArticles: FC<CardtripProps> = props => {
  return (
    <div className={styles.card_trip}>
      <div className={styles.card_img}>
        <Image
          width={500}
          height={500}
          src={props.item.img}
          alt=""
          className={styles.img}
        />
      </div>
      <div className={styles.content}>
        <h5>{props.item.timer}</h5>
        <h4>{props.item.title}</h4>
        <p>{props.item.content}</p>
        <button className={styles.sub}>
          <span>Read More</span>
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default CardArticles;
