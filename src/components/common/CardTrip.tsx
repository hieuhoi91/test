import React, { FC } from 'react';
import styles from './cardtrip.module.scss';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CardProps } from '@/data/data';

export interface CardtripProps {
  item: CardProps;
}

const CardTrip: FC<CardtripProps> = props => {
  return (
    <div className={styles.card_trip}>
      <div className={styles.card_img}>
        <Image
          width={500}
          height={500}
          src={props.item.src}
          alt=""
          className={styles.img}
        />
        <div className={styles.price}>
          {props.item.sale ? <p>${props.item.sale}</p> : null}
          <span>${props.item.price}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h4>{props.item.name}</h4>
        <p>{props.item.address}</p>
        <div className={styles.sub_infor}>
          <div className={styles.rating}>
            <Rating size="small" value={4} />
            <span>4 reviews</span>
          </div>
          <div className={styles.time}>
            <AccessTimeIcon fontSize="small" />
            <span>5 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTrip;
