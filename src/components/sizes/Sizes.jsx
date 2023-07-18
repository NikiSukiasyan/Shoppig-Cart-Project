import React, { memo } from "react";
import "./Sizes.scss";
import { handleSizeButtonClick, isSizeSelected } from "./Size";

const Sizes = memo(({ selectedSizes, onSizeToggle }) => {
  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];

  return (
    <>
      <p className="size">Sizes:</p>
      <div className="sizes-container">
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`sizes ${
              isSizeSelected(selectedSizes, size) ? "selected" : ""
            }`}
            onClick={() => handleSizeButtonClick(onSizeToggle, size)}
          >
            {size}
          </button>
        ))}
      </div>
      <p className="company-name">Re:Educate</p>
    </>
  );
});

export default memo(Sizes);
