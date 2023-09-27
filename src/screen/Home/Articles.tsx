import Title from '@/components/common/Title';
import React from 'react';
import styles from './articles.module.scss';
import { articles } from '@/data/data';
import CardArticles from '@/components/common/CardArticles';

const Articles = () => {
  return (
    <div className={styles.wrapper}>
      <Title
        title="Articles & Tips"
        description="Explore some of the best tips from around the world"
      />
      <div className={styles.list_card}>
        {articles.map(item => (
          <CardArticles key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
