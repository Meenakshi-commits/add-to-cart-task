import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = useState([]);

  // Add to cart handler
  const addToCart = (product) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === product.id);
      if (item) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from cart handler
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Define routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsPage addToCart={addToCart} />,
    },
    {
      path: "/cart",
      element: <CartPage cart={cart} removeFromCart={removeFromCart} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
