import { notFound } from 'next/navigation';

export default async function ReviewId({
  params,
}: {
  params: {
    reviewId: string;
    productId: string;
  };
}) {
  const { reviewId } = await params;
  const { productId } = await params;

  if (parseInt(reviewId) >= 1000) notFound();

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
