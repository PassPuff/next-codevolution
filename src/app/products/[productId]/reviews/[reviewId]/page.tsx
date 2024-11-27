// import { notFound } from 'next/navigation';

type Props = Promise<{
  reviewId: string;
  productId: string;
}>;

function getRandomInit(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewId({ params }: { params: Props }) {
  const { reviewId } = await params;
  const { productId } = await params;
  const random = getRandomInit(2);

  if (random === 1) {
    throw new Error('что то пошло не так');
  }

  // if (parseInt(reviewId) >= 1000) notFound();

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
