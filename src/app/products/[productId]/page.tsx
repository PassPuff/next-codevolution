import { Metadata } from 'next';

type Props = Promise<{
  productId: string;
}>;

export const generateMetadata = async ({
  params,
}: {
  params: Props;
}): Promise<Metadata> => {
  const { productId } = await params;

  const title = await new Promise((resolve) =>
    setTimeout(() => {
      resolve(`iPhone ${productId}`);
    }, 100)
  );

  return {
    title: `Product ${title}`,
  };
};

export default async function ProductDetails({ params }: { params: Props }) {
  const { productId } = await params; // `params` синхронно доступен здесь
  return <h1>Details about product {productId}</h1>;
}
