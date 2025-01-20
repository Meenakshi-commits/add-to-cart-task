import React from "react";

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountPrice = totalPrice * 0.9;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded">
            <div>
              <h2 className="font-bold">{item.title}</h2>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
        <p className="text-lg font-bold">Final Price (10% discount): ${discountPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
