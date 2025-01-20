import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  const { id, title, price, quantity } = item;

  return (
    <div className="flex justify-between items-center border p-4 rounded">
      <div>
        <h2 className="font-bold">{title}</h2>
        <p>
          ${price} x {quantity} = ${(price * quantity).toFixed(2)}
        </p>
      </div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => removeFromCart(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
