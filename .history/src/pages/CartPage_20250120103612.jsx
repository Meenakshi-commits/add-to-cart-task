import React from "react";
import { Link } from "react-router";
import CartItem from "../components/CartItem";

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discountPrice = totalPrice * 0.9;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block"
      >
        Back to Products
      </Link>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <div className="mt-6">
        <p className="text-lg">Total: ${totalPrice.toFixed(2)}</p>
        <p className="text-lg font-bold">
          Final Price (10% discount): ${discountPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
