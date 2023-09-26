import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Badge, makeStyles, Theme } from '@mui/material';

const listMenu: string[] = [
  'Home',
  'Tours',
  'Booking',
  'Destinations',
  'Pages',
  'Blog',
  'Shortcodes',
  'Shop',
];

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        width={92}
        height={22}
        alt=""
        src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
      />
      <div className={styles.menu}>
        {listMenu.map(item => (
          <Link key={item} href="/" className={styles.menu_item}>
            {item}
            <KeyboardArrowDownIcon className={styles.icon} />
          </Link>
        ))}
        <div className={styles.right_button}>
          <MenuOutlinedIcon className={styles.icon} />
          <div className={styles.badge}>
            <span className={styles.badge_content}>0</span>
            <ShoppingCartOutlinedIcon className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
