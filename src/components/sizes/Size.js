export const handleSizeButtonClick = (onSizeToggle, size) => {
  onSizeToggle(size);
};

export const isSizeSelected = (selectedSizes, size) => {
  return selectedSizes.includes(size);
};
