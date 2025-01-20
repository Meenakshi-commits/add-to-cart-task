import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const router = createBrowserRouter([
    { path: "/", element: <ProductsPage addToCart={addToCart} /> },
    { path: "/cart", element: <CartPage cart={cart} removeFromCart={removeFromCart} /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
