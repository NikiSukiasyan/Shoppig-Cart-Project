import React, { useState, useEffect, memo } from "react";
import "./Drawer.scss";
import CartImage from "../../images/cartImage.png";
import {
  initializeQuantities,
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
  calculateCurrentPrice,
} from "./Drawer.js";

const Drawer = memo(({ cartProducts, setCartProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      setIsOpen(true);
      setQuantities(initializeQuantities(cartProducts));
    }
  }, [cartProducts]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleDecreaseQuantity = (index) => {
    setQuantities(decreaseQuantity(quantities, index));
  };

  const handleIncreaseQuantity = (index) => {
    setQuantities(increaseQuantity(quantities, index));
  };

  const handleRemoveProduct = (index) => {
    removeProduct(
      cartProducts,
      setCartProducts,
      quantities,
      setQuantities,
      index
    );
  };

  const handleCheckout = () => {
    if (cartProducts.length === 0) {
      alert("დაამატეთ პროდუქტები კალათაში :)");
    } else {
      const totalPrice = calculateCurrentPrice(cartProducts, quantities);
      alert(`სულ გადასახდელია $${totalPrice}`);
    }
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-count">
        <img src={CartImage} alt="Cart" />
        <p>Cart</p>
        <div className="second-count">{cartProducts.length}</div>
      </div>
      <button onClick={toggleDrawer} className="open-drawer-btn">
        {isOpen ? (
          <span className="close">X</span>
        ) : (
          <img src={CartImage} alt="Cart" />
        )}
        {!isOpen && <div className="count">{cartProducts.length}</div>}
      </button>
      <p className={`add-text ${cartProducts.length > 0 ? "hidden" : ""}`}>
        Add some products to the cart :)
      </p>
      <div className="cart-products-container">
        <div className="scrollable">
          {cartProducts.map((product, index) => (
            <div key={index} className="each-product">
              <img src={product.image} alt="Product" />
              <div className="product-name">
                <p>{product.title}</p>
                <div className="product-information">
                  <button
                    className="cancel"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    x
                  </button>
                  <span>
                    {product.sizes[0]} | {product.description}
                  </span>
                  <span>Quantity: {quantities[index]}</span>
                </div>
                <p className="price">
                  $ {product.price}
                  {product.cents}
                </p>
                <div className="button-container">
                  <button
                    onClick={() => handleDecreaseQuantity(index)}
                    className={quantities[index] <= 1 ? "disabled" : ""}
                  >
                    -
                  </button>
                  <button onClick={() => handleIncreaseQuantity(index)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="subtotal-container">
        <div>
          <p>SUBTOTAL</p>
          <span>${calculateCurrentPrice(cartProducts, quantities)}</span>
        </div>
        <button onClick={handleCheckout}>CHECKOUT</button>
      </div>
    </div>
  );
});

export default memo(Drawer);
