'use client';

import React, { useEffect, useState } from 'react';
import Header from './Header';
import styles from './layout.module.scss';
import Footer from './Footer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const [isOnTop, setIsOnTop] = useState(false);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    });
  }, [window.scrollY]);

  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
      <Footer />
      {isOnTop ? (
        <span className={styles.scroll} onClick={handleScroll}>
          <KeyboardArrowUpIcon />
        </span>
      ) : null}
    </div>
  );
};

export default Layout;
