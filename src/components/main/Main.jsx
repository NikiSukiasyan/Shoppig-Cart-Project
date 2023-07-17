import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import "./Main.scss";
import Sizes from "../sizes/Sizes";
import { handleSizeToggle, filteredProducts } from "./Main";

function Main() {
  const products = useContext(ProductContext);
  const [selectedSizes, setSelectedSizes] = useState([]);

  return (
    <>
      <p className="products-quantity">
        {filteredProducts(selectedSizes, products).length} Product(s) found
      </p>
      <Sizes
        selectedSizes={selectedSizes}
        onSizeToggle={(size) =>
          handleSizeToggle(size, setSelectedSizes, selectedSizes)
        }
      />
      <div className="product-container">
        {filteredProducts(selectedSizes, products).map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt={product.title}
              onMouseOver={(e) => {
                e.currentTarget.src = product.hoverImage;
              }}
              onMouseOut={(e) => {
                e.currentTarget.src = product.image;
              }}
            />
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
