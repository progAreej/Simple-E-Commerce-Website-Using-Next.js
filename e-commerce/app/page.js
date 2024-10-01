"use client"; // Since we're using interactivity (Cart), this becomes a client component
import { useState, useEffect } from "react";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 10 },
  });
  return res.json();
}

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products when the component is mounted
    const fetchProducts = async () => {
      const productData = await getProducts();
      setProducts(productData);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center">Home Page (ISR)</h1>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{product.name}</h2>
            <p className="text-lg font-medium text-gray-600 mb-4">
              ${product.price}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
