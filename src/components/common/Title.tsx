import React, { FC } from 'react';
import styles from './title.module.scss';

interface TitleProps {
  title: string;
  description: string;
}

const Title: FC<TitleProps> = props => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.description}>{props.description}</span>
    </div>
  );
};

export default Title;
