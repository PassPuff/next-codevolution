import { ReactNode } from 'react';

function getRandomInit(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const random = getRandomInit(2);

  if (random === 1) {
    throw new Error('Опять беда, нужно что то делать');
  }

  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
