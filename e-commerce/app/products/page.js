// app/products/page.js
import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
  { id: 3, name: 'Product 3', price: '$30' },
];

export default function Products() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <li key={product.id} className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-200">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-lg text-gray-600">{product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
