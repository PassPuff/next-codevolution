import { notFound } from "next/navigation";

const ReviewId = async ({params}: {params: {
    reviewId: string;
    productId: string;
  }}) => {
  const {reviewId} = await params;
  const {productId} = await params

  if(parseInt(params.reviewId) >= 1000) {
    notFound()
  }
  return (
    <div>
      <h1>Review {reviewId} for product {productId}</h1>
    </div>
  );
};

export default ReviewId;