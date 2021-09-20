import React from "react";
import { useContext } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../services/Cart/CartContext";

export const Cart = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <>
      <div className="flex items-center justify-center">
        <TiShoppingCart />
        {itemCount > 0 ? (
          <span className="bg-custom-red rounded-full text-white select-none h-5 w-5 flex items-center justify-center text-sm">
            {itemCount}
          </span>
        ) : null}
      </div>
    </>
  );
};
