import React, { useEffect } from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Drawer from '@mui/material/Drawer';
import { social } from './Footer';

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

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props: any) => {
  const [isOnTop, setIsOnTop] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsOnTop(true);
      } else {
        setIsOnTop(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [window.scrollY]);

  const toggleDrawer = () => {
    setIsDrawer(false);
  };

  return (
    <div className={styles.header}>
      <HideOnScroll {...props}>
        <Toolbar
          className={styles.header}
          style={{
            backgroundColor: isOnTop ? '#fff' : 'transparent',
            color: isOnTop ? '#000' : '#fff',
          }}
        >
          <div className={styles.navbar}>
            {isOnTop ? (
              <Image
                width={92}
                height={22}
                alt=""
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png"
              />
            ) : (
              <Image
                width={92}
                height={22}
                alt=""
                src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png"
              />
            )}
            <div className={styles.menu}>
              {listMenu.map(item => (
                <Link key={item} href="/" className={styles.menu_item}>
                  {item}
                  <KeyboardArrowDownIcon className={styles.icon} />
                </Link>
              ))}
              <div className={styles.right_button}>
                <button
                  className={styles.btn}
                  onClick={() => setIsDrawer(true)}
                >
                  <MenuOutlinedIcon className={styles.icon} />
                </button>
                <Drawer
                  anchor="right"
                  sx={{
                    '& .MuiDrawer-paper': {
                      boxSizing: 'border-box',
                      width: 250,
                      display: 'flex',
                      padding: '20px 30px',
                    },
                  }}
                  open={isDrawer}
                  onClose={() => toggleDrawer()}
                >
                  {listMenu.map(item => (
                    <Link key={item} href="/" className={styles.menu_drawer}>
                      {item}
                    </Link>
                  ))}
                </Drawer>
                <div className={styles.badge}>
                  <span className={styles.badge_content}>0</span>
                  <ShoppingCartOutlinedIcon className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </Toolbar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
