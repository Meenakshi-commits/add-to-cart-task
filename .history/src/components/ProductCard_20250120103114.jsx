import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const { id, title, price, description, image } = product;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover mb-2" />
      <h2 className="font-bold">{title}</h2>
      <p>${price}</p>
      <p className="text-sm text-gray-600">{description.slice(0, 50)}...</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
