import React from 'react';
import Header from './Header';
import style from './layout.module.scss';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={style.layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
