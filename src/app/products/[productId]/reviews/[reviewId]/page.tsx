 const ReviewId = async ({params}: {params: {
    reviewId: string;
    productId: string;
  }}) => {
  const {reviewId} = await params;
  const {productId} = await params

  return (
    <div>
      <h1>Review {reviewId} for product {productId}</h1>
    </div>
  );
};

export default ReviewId;