import React, { useState } from "react";
import "./Drawer.scss";
import CartImage from "../../images/cartImage.png";

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="cart-count">
        <img src={CartImage} />
        <p>Cart</p>
        <div className="second-count">0</div>
      </div>
      <button onClick={toggleDrawer} className="open-drawer-btn">
        {isOpen ? (
          <span className="close">X</span>
        ) : (
          <img src={CartImage} alt="Cart" />
        )}
        {!isOpen && <div className="count">0</div>}
      </button>
      <p className="add-text">Add some products to the cart :)</p>
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
