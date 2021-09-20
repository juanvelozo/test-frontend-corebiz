import React from "react";
import { TiShoppingCart } from "react-icons/ti";

export const Cart = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <TiShoppingCart />
        <span className="bg-custom-red rounded-full text-white select-none h-4 w-4 flex items-center justify-center text-xs">
          0
        </span>
      </div>
    </>
  );
};
