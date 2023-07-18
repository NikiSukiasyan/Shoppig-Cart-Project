import React, { useState } from "react";
import Main from "./components/main/Main.jsx";
import Drawer from "./components/drawer/Drawer.jsx";
import { ProductProvider } from "./components/main/ProductContext";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedCartProducts = cartProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <ProductProvider>
        <Main addToCart={addToCart} />
        <Drawer cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </ProductProvider>
    </>
  );
}

export default App;
