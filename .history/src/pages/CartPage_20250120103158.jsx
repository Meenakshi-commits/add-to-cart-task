import React from "react";
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
