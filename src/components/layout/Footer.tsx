'use client';

import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const menu = ['Home', 'Tours', 'Blog', 'Purchase Theme'];
export const social = [
  { color: '#2D5F9A', icon: <FacebookOutlinedIcon /> },
  { color: '#00C3F3', icon: <TwitterIcon /> },
  { color: '#cc181e', icon: <YouTubeIcon /> },
  { color: '#bd081c', icon: <PinterestIcon /> },
  { color: '#405de6', icon: <InstagramIcon /> },
];
const images = [
  'https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg',
  'https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg',
  'https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg',
  'https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg',
  'https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg',
  'https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg',
];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.ppb_wrapper}>
        <div className={styles.award}>
          <h2>Our Awards</h2>
          <p>
            London is a megalopolis of people, ideas and frenetic energy. The
            capital and largest city of the United Kingdom.
          </p>
          <Image
            width={246}
            height={113}
            src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png"
            alt=""
          />
        </div>
        <div className={styles.info}>
          <h2>Contact Info</h2>
          <div className={styles.contact}>
            <p>
              <PhoneIphoneIcon />
              <span>1-567-124-44227</span>
            </p>
            <p>
              <LocationOnOutlinedIcon />
              <span>184 Main Street East Perl Habour 8007</span>
            </p>
            <p>
              <AccessAlarmOutlinedIcon />
              <span>Mon - Sat 8.00 - 18.00 Sunday CLOSED</span>
            </p>
          </div>
          <div className={styles.social}>
            {social.map((item, idx) => (
              <span
                key={idx}
                style={{ backgroundColor: item.color }}
                className={styles.icon}
              >
                {item.icon}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.recent}>
          <h2>Recent Trips</h2>
          <div className={styles.img_recent}>
            {images.map(item => (
              <Image
                key={item}
                width={200}
                height={200}
                src={item}
                alt=""
                className={styles.img}
              />
            ))}
          </div>
        </div>
      </div>
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
