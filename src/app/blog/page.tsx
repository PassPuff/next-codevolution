import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'BLOG',
  },
};

export default async function Blog() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      <h1>My blog</h1>
    </div>
  );
}
