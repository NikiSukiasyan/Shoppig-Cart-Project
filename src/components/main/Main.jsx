import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./Main.scss";

function Main() {
  const products = useContext(ProductContext);

  return (
    <>
      <p className="products-quantity">{products.length} Product(s) found</p>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <div className="shipping">
              <p>Free Shipping</p>
            </div>
            <p className="title">{product.title}</p>
            <div className="price-container">
              <p>
                $ <b>{product.price}</b>
                {product.cents}
              </p>
              {product.orPrice && (
                <span>
                  or <b>{product.orPrice}</b>
                </span>
              )}
            </div>
            <button className="add-btn">Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
