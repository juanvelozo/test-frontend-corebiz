import { createContext, useReducer } from "react";
import cartReducer, { sumItems } from "./cartReducer";

export const CartContext = createContext();
const cartCheck = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const init = { cartItems: cartCheck, ...sumItems(cartCheck) };

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, init);
  const addProduct = (product) => {
    dispatch({
      type: "addItem",
      payload: product,
    });
  };
  const contextValues = {
    ...state,
    addProduct,
  };
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
