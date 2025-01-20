import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const ProductsPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from Fake Store API
  useEffect(() => {
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
      <div className="h-[calc(100vh-120px)] overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow-md bg-white hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h2 className="font-bold text-sm truncate">{product.title}</h2>
              <p className="text-gray-600">${product.price}</p>
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
    </div>
  );
};

export default ProductsPage;
