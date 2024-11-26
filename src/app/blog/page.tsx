import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'BLOG',
  },
};

export default function Blog() {
  return <h1>My blog</h1>;
}
