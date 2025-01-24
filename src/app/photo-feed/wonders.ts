import { StaticImageData } from 'next/image';

export type WonderImage = {
  id: number;
  slug: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

import photo1 from './photos/1.jpg';
import photo2 from './photos/2.jpg';
import photo3 from './photos/3.jpg';
import photo4 from './photos/4.jpg';
import photo5 from './photos/5.jpg';
import photo6 from './photos/6.jpg';
import photo7 from './photos/7.jpg';

export const wondersImages: WonderImage[] = [
  {
    id: 1,
    slug: 'the-colosseum',
    name: 'The Colosseum',
    src: photo1,
    photographer: 'The Colosseum',
    location: 'Rome, Italy',
  },
  {
    id: 2,
    slug: 'the-great-wall-of-china',
    name: 'The Great Wall of China',
    src: photo2,
    photographer: 'The Great Wall of China',
    location: 'China',
  },
  {
    id: 3,
    slug: 'the-eiffel-tower',
    name: 'The Eiffel Tower',
    src: photo3,
    photographer: 'The Eiffel Tower',
    location: 'Paris, France',
  },
  {
    id: 4,
    slug: 'the-taj-mahal',
    name: 'The Taj Mahal',
    src: photo4,
    photographer: 'The Taj Mahal',
    location: 'Agra, India',
  },
  {
    id: 5,
    slug: 'the-great-pyramid-of-giza',
    name: 'The Great Pyramid of Giza',
    src: photo5,
    photographer: 'The Great Pyramid of Giza',
    location: 'Giza, Egypt',
  },
  {
    id: 6,
    slug: 'the-louvre-museum',
    name: 'The Louvre Museum',
    src: photo6,
    photographer: 'The Louvre Museum',
    location: 'Paris, France',
  },
  {
    id: 7,
    slug: 'the-great-wall-of-china',
    name: 'The Great Wall of China',
    src: photo7,
    photographer: 'The Great Wall of China',
    location: 'China',
  },
];
