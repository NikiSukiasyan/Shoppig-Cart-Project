import React, { useState, useEffect } from "react";
import "./Drawer.scss";
import CartImage from "../../images/cartImage.png";

function Drawer({ cartProducts, setCartProducts }) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    if (cartProducts.length > 0) {
      setIsOpen(true);
      initializeQuantities();
    }
  }, [cartProducts]);

  const initializeQuantities = () => {
    const initialQuantities = cartProducts.map((product) => {
      const existingQuantity = quantities.find(
        (quantityProduct) => quantityProduct.id === product.id
      );
      return existingQuantity ? existingQuantity.quantity : 1;
    });
    setQuantities(initialQuantities);
  };

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const decreaseQuantity = (index) => {
    if (quantities[index] > 1) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = quantities[index] - 1;
      setQuantities(updatedQuantities);
    }
  };

  const increaseQuantity = (index) => {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = quantities[index] + 1;
    setQuantities(updatedQuantities);
  };

  const removeProduct = (index) => {
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts.splice(index, 1);
    setCartProducts(updatedCartProducts);
    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities.splice(index, 1);
      return updatedQuantities;
    });
  };

  const calculateCurrentPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartProducts.length; i++) {
      const product = cartProducts[i];
      const quantity = quantities[i];
      totalPrice += product.price * quantity + product.cents * quantity;
    }
    return totalPrice.toFixed(2);
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
                    onClick={() => removeProduct(index)}
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
                    onClick={() => decreaseQuantity(index)}
                    className={quantities[index] <= 1 ? "disabled" : ""}
                  >
                    -
                  </button>
                  <button onClick={() => increaseQuantity(index)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="subtotal-container">
        <div>
          <p>SUBTOTAL</p>
          <span>${calculateCurrentPrice()}</span>
        </div>
        <button>CHECKOUT</button>
      </div>
    </div>
  );
}

export default Drawer;
