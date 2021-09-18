import React from "react";

export const ProductCard = () => {
  return (
    <div className="lg:p-10 p-2">
      <div className="flex items-center justify-center">
        <div className="w-60 h-auto bg-white overflow-hidden duration-500 transform transition  hover:bg-custom-gray-2">
          <img
            src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80"
            alt="img"
          />
          <div className="p-4 text-center mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
            <h1 className="text-xs font-bold uppercase text-custom-gray-6">
              zapato flotador negro
            </h1>
            <h1 className="text-xs font-bold uppercase text-custom-gray-6">
              de $400
            </h1>
            <p className="mt-2 text-lg font-semibold text-gray-600">
              por $ 259.00
            </p>
            <h1 className="text-xs font-bold uppercase text-custom-gray-6">
              o en 9x de R $ 28,87
            </h1>
            <button className="bg-black py-2 px-8 m-2 rounded-md text-white">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
