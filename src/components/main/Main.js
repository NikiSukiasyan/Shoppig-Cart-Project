export const handleSizeToggle = (size, setSelectedSizes, selectedSizes) => {
  setSelectedSizes((prevSelectedSizes) => {
    if (prevSelectedSizes.includes(size)) {
      return prevSelectedSizes.filter((selectedSize) => selectedSize !== size);
    } else {
      return [...prevSelectedSizes, size];
    }
  });
};

export const filteredProducts = (selectedSizes, products) =>
  selectedSizes.length
    ? products.filter((product) =>
        product.sizes.some((size) => selectedSizes.includes(size))
      )
    : products;
