// app/api/products/route.js
export async function GET() {
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 150 },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
  });
}
