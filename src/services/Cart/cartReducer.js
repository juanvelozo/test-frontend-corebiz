const localStorageItems = (cartItems) => {
  const cart = cartItems.length > 0 ? cartItems : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const sumItems = (cartItems) => {
  localStorageItems(cartItems);
  return {
    itemCount: cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    ),
    total: cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ),
  };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addItem":
      if (!state.cartItems.find((item) => item.id === action.payload)) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        cartItems: [...state.cartItems],
        ...sumItems(state.cartItems),
      };
    default:
      return state;
  }
};

export default cartReducer;
