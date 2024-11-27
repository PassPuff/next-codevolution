'use client';

import { notFound } from 'next/navigation';

import { use } from 'react';

type Props = Promise<{
  reviewId: string;
  productId: string;
}>;

// function getRandomInit(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default function ReviewId({ params }: { params: Props }) {
  const { reviewId } = use(params);
  const { productId } = use(params);

  // const random = getRandomInit(2);
  //
  // if (random === 1) {
  //   throw new Error('что то пошло не так');
  // }

  if (parseInt(reviewId) >= 1000) notFound();

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
