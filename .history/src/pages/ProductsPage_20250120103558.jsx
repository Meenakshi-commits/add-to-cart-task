import React from "react";
import { Link } from "react-router";

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link
        to="/cart"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4 inline-block"
      >
        Go to Cart
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
