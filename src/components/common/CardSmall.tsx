import Image from 'next/image';
import React, { FC } from 'react';
import styles from './cardsmall.module.scss';

export interface ImageProps {
  src: string;
  name: string;
}

const CardSmall: FC<ImageProps> = props => {
  return (
    <div className={styles.wrapper}>
      <Image
        width={500}
        height={300}
        src={props.src}
        alt=""
        className={styles.img}
      />
      <span className={styles.name}>{props.name}</span>
    </div>
  );
};

export default CardSmall;
