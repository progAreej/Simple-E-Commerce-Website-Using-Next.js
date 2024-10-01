// app/products/page.js
import Cart from '../components/Cart';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1>Products List (SSR)</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
};

export default ProductsPage;
