// app/products/[id]/page.js
"use client"; // Marking this component as a Client Component

import Image from 'next/image';

// Sample product data (Replace this with your actual data fetching logic)
const products = [
  { id: '1', name: 'Product 1', price: '$10', description: 'Description of Product 1' },
  { id: '2', name: 'Product 2', price: '$20', description: 'Description of Product 2' },
  { id: '3', name: 'Product 3', price: '$30', description: 'Description of Product 3' },
];

// The function will receive params from the URL
export default function ProductPage({ params }) {
  const { id } = params; // Get the id from the params

  // Find the product by ID
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div className="p-8">Product not found</div>; // Handle product not found
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <Image
        src="https://st3.depositphotos.com/1688079/17322/i/450/depositphotos_173224464-stock-photo-e-commerce-special-blue-round.jpg" // Use a placeholder image or valid image URL
        alt={product.name}
        width={500}
        height={300}
        className="rounded-lg shadow-md mb-4"
      />
      <p className="text-lg font-semibold">Price: {product.price}</p>
      <p className="mt-2">{product.description}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200">
        Add to Cart
      </button>
    </div>
  );
}
