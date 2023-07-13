import React from "react";
import "./Sizes.scss";

function Sizes() {
  const Sizes = ["XS", "S", "M", "ML", "L", "Xl", "XXL"];
  return (
    <>
      <p className="size">Sizes:</p>
      <div className="sizes-container">
        {Sizes.map((size, index) => (
          <button key={index} className="sizes">
            {size}
          </button>
        ))}
      </div>
      <p className="company-name">Re:Educate</p>
    </>
  );
}

export default Sizes;
