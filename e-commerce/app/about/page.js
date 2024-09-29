// app/about/page.js
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">About Us</h1>
      <Image 
        src="https://st3.depositphotos.com/1688079/17322/i/450/depositphotos_173224464-stock-photo-e-commerce-special-blue-round.jpg" 
        alt="About Us" 
        width={500} 
        height={300} 
        className="rounded-lg mb-4" 
      />
      <p className="text-lg text-gray-700 max-w-xl">
        We are dedicated to providing the best products and service.
      </p>
    </div>
  );
}
