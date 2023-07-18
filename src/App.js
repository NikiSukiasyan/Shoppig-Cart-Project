import React, { useState } from "react";
import Main from "./components/main/Main.jsx";
import Drawer from "./components/drawer/Drawer.jsx";
import { ProductProvider } from "./components/main/ProductContext";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
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
