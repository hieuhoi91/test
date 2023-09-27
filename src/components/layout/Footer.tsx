import React from 'react';
import styles from './footer.module.scss';

const menu = ['Home', 'Tours', 'Blog', 'Purchase Theme'];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ppb_wrapper}></div>
      <div className={styles.bar_wrapper}>
        <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
        <div className={styles.menu}>
          {menu.map(item => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
