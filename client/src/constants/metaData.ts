/*
 * File name: metaData.ts
 * Purpose: Application related meta data
 * -- All these content ideally should pick from a meta data api as external data set
 * Created on Sun Nov 26 2023
 *
 * Copyright (c) 2023 Shelan Cooray
 * Author: shlncooray@gmail.com
 */

import { MainCategory, RoomCategory } from 'models/categories';
import { Language } from 'models/metaData';

const languages: Language[] = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'de',
    label: 'German',
  },
];

const productCategories: MainCategory[] = [
  {
    imageUrl:
      'https://images.prismic.io/home24-production/95e21c70-4ded-4b42-9cc2-fd9224fd1cc5_hp-nav-sofas.jpg',
    title: 'Furniture',
    id: '156126',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/d069b7da-194b-4888-9772-32906e39d704_hp-nav-lampen.jpg',
    title: 'Lamps',
    id: '177557',
  },
  {
    imageUrl:
      'https://cdn1.home24.net/images/media/catalog/product/350x350/jpg/8/0/80a9744c07ba48d9846c1573da34ad48.jpg',
    title: 'Nursery',
    id: '2021100101',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/25397d98-302b-4189-b4dd-8ad62b008716_tile_750x500_accessoires.jpg',
    title: 'Accessoires',
    id: '156130',
  },
  {
    imageUrl:
      'https://cdn1.home24.net/images/media/catalog/product/350x350/png/-/1/-1000335671-220215-010-IMAGE-P000000001000335671.jpg',
    title: 'Kitchen',
    id: '2021091701',
  },
  {
    imageUrl:
      'https://cdn1.home24.net/images/media/catalog/product/650x650/png/k/i/kissen-limes-webstoff-senf-5133144.avif',
    title: 'Textile',
    id: '156194',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/95e21c70-4ded-4b42-9cc2-fd9224fd1cc5_hp-nav-sofas.jpg',
    title: 'Furniture',
    id: '156124',
  },
];

const roomCategories: RoomCategory[] = [
  {
    imageUrl:
      'https://images.prismic.io/home24-production/594e2380-5b77-43fe-a6c2-4943caa4224b_visualNavi_Spring_wohnen.jpg',
    title: 'Living Room',
    id: '1',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/b8458c51-9a1b-45eb-b8aa-aec3ea053d09_visualNavi_Spring_schlafen.jpg',
    title: 'Bed Room',
    id: '2',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/816d0b5f-1c44-412d-be53-159f90c33017_visualNavi_Spring_essen.jpg',
    title: 'Dining Room',
    id: '3',
  },
  {
    imageUrl:
      'https://images.prismic.io/home24-production/816d0b5f-1c44-412d-be53-159f90c33017_visualNavi_Spring_essen.jpg',
    title: 'Dining Room',
    id: '4',
  },
];

const homePageBanner = {
  topLabel: 'Bis zum 23. November',
  mainTitle: 'This is fantastic!',
  description: 'Bis zum 23. November',
  button: 'Nicht verpassen',
  imgPath:
    'https://images.prismic.io/home24-production/7e3ef0ce-a799-4bc1-b9b0-3017465f8b42_DE_RTT_4176x1182_BM_W4_vp.jpg?auto=compress,format&rect=0,0,4176,1182&w=2784&h=788',
};

export { productCategories, roomCategories, languages, homePageBanner };
