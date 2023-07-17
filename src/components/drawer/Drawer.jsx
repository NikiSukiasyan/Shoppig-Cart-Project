import React, { useState } from "react";
import "./Drawer.scss";
import CartImage from "../../images/cartImage.png";
import CroppedStayGroovyoffwhite from "../../images/CroppedStayGroovyoffwhite.png";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [secondCount, setSecondCount] = useState(1);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-count">
        <img src={CartImage} alt="Cart" />
        <p>Cart</p>
        <div className="second-count">{secondCount}</div>
      </div>
      <button onClick={toggleDrawer} className="open-drawer-btn">
        {isOpen ? (
          <span className="close">X</span>
        ) : (
          <img src={CartImage} alt="Cart" />
        )}
        {!isOpen && <div className="count">{secondCount}</div>}
      </button>
      <p className={`add-text ${secondCount > 0 ? "hidden" : ""}`}>
        Add some products to the cart :)
      </p>
      <div className="cart-products-container">
        <div className="each-product">
          <img src={CroppedStayGroovyoffwhite} alt="Product" />
          <div className="product-name">
            <p>Basic Cactus White T-shirt</p>
            <div className="product-information">
              <span>X | Wine</span>
              <span>Quantity: 2</span>
            </div>
            <p className="price">$25.90</p>
            <div className="button-container">
              <button>-</button>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>
      <div className="subtotal-container">
        <div>
          <p>SUBTOTAL</p>
          <span>$0.00</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Drawer;
