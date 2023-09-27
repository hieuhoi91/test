import { ImageProps } from '@/components/common/CardSmall';

export const months = [
  'Any Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const sorted = [
  'Sort By Date',
  'Price Low To High',
  'Price High To Low',
  'Sort By Name',
  'Sort By Popularity',
  'Sort By Review Score',
];

export const categories = [
  'All Categories',
  'Moutain',
  'Rural',
  'Snow & Ice',
  'Wildlife',
];

export const destination = [
  'Any Destinations',
  'Tokyo',
  'Kyoto',
  'Osaka',
  'Hokkaido',
  'Okinawa',
  'London',
  'Venice',
  'Miami',
];

export const imagePopular: ImageProps[] = [
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg',
    name: 'Tokyo',
  },
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg',
    name: 'Seoul',
  },
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg',
    name: 'Paris',
  },
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg',
    name: 'London',
  },
];

export interface CardProps {
  src: string;
  name: string;
  address: string;
  price: string;
  sale?: string;
}

export const bestTrip: CardProps[] = [
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg',
    name: 'French Autumn',
    address: 'City Tours, Urban',
    price: '5,000',
  },
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg',
    name: 'Grand Switzerland',
    address: 'Shopping, Mountain, Snow & Ice',
    price: '6,000',
  },
  {
    src: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg',
    name: 'Discover Japan',
    address: 'City Tours, Iconic',
    price: '2,500',
    sale: '3,000',
  },
];

export interface reasonProps {
  img: string;
  title: string;
  content: string;
}

export const reason: reasonProps[] = [
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png',
    title: 'Handpicked Hotels',
    content:
      'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png',
    title: 'World Class Service',
    content:
      'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png',
    title: 'Best Price Guarantee',
    content:
      'Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa',
  },
];

export interface articlesProps {
  img: string;
  timer: string;
  title: string;
  content: string;
}

export const articles: articlesProps[] = [
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg',
    timer: 'DECEMBER 10, 2016',
    title: 'Memorial Day to Someone Told Me to Travel',
    content:
      'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
  },
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg',
    timer: 'DECEMBER 10, 2016',
    title: '7 Tips For Nomads On A Budget Trips',
    content:
      'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
  },
  {
    img: 'https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg',
    timer: 'DECEMBER 10, 2016',
    title: 'Taking A Travel Blog Victory Lap',
    content:
      'Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...',
  },
];
