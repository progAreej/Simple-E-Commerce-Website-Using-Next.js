
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
        Welcome to Our E-Commerce Website!
      </h1>
      <p className="text-lg text-center text-gray-700 max-w-md">
        Your one-stop shop for amazing products.
      </p>
      <a
        href="/products"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Shop Now
      </a>
    </div>
  );
}

