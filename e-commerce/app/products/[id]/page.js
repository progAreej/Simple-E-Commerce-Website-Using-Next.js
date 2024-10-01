// app/products/[id]/page.js
async function getProduct(id) {
    const res = await fetch('http://localhost:3000/api/products');
    const products = await res.json();
    return products.find((product) => product.id === parseInt(id));
  }
  
  const ProductDetail = async ({ params }) => {
    const product = await getProduct(params.id);
  
    if (!product) {
      return <div>Product not found</div>;
    }
  
    return (
      <div>
        <h1>{product.name}</h1>
        <p>Price: ${product.price}</p>
      </div>
    );
  };
  
  export default ProductDetail;
  