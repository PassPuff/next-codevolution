import Link from 'next/link';

const Products = () => {
  const productsName = 'laser-welding';

  return (
    <div>
      <Link href="/">Blog</Link>
      <h1>All Products</h1>
      <ul>
        <li>
          <Link href={`products/${productsName}`}>Product {productsName}</Link>
        </li>
        <li>
          <Link href="products/2">Product 2</Link>
        </li>
        <li>
          <Link href="products/3" replace>
            Product 3
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;
