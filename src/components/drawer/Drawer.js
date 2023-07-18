export function initializeQuantities(cartProducts) {
  const initialQuantities = cartProducts.map((product) => product.quantity);
  return initialQuantities;
}

export function decreaseQuantity(quantities, index) {
  if (quantities[index] > 1) {
    const updatedQuantities = [...quantities];
    updatedQuantities[index] = quantities[index] - 1;
    return updatedQuantities;
  }
  return quantities;
}

export function increaseQuantity(quantities, index) {
  const updatedQuantities = [...quantities];
  updatedQuantities[index] = quantities[index] + 1;
  return updatedQuantities;
}

export function removeProduct(
  cartProducts,
  setCartProducts,
  quantities,
  setQuantities,
  index
) {
  const updatedCartProducts = [...cartProducts];
  updatedCartProducts.splice(index, 1);
  setCartProducts(updatedCartProducts);
  setQuantities((prevQuantities) => {
    const updatedQuantities = [...prevQuantities];
    updatedQuantities.splice(index, 1);
    return updatedQuantities;
  });
}

export function calculateCurrentPrice(cartProducts, quantities) {
  let totalPrice = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    const product = cartProducts[i];
    const quantity = quantities[i];
    totalPrice += product.price * quantity + product.cents * quantity;
  }
  return totalPrice.toFixed(2);
}
