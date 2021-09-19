import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const ProductCard = ({ data }) => {
  return (
    <div className="lg:p-4 p-2">
      <div className="flex items-center justify-center">
        <div className="w-60 h-auto bg-white overflow-hidden duration-500 transform transition  hover:bg-custom-gray-2">
          <img src={data.imageUrl} alt="img" className="w-full" />
          <div className="flex flex-col items-center justify-center p-4 space-y-3">
            <h1 className="tracking-tighter truncate text-xs font-bold uppercase text-custom-gray-6">
              {data.productName}
            </h1>
            <div className="flex justify-center items-center m-2 ">
              {[...Array(5)].map((star, index) => {
                index += 1;
                const rating = data.stars;
                return (
                  <div key={index}>
                    {index <= rating ? (
                      <AiFillStar className="text-custom-red" />
                    ) : (
                      <AiOutlineStar className="text-custom-red" />
                    )}
                  </div>
                );
              })}
            </div>
            {data.listPrice ? (
              <h1 className="text-xs font-bold uppercase text-custom-gray-6">
                de {Intl.NumberFormat().format(data.listPrice)}$
              </h1>
            ) : (
              <h1 className="text-xs font-bold uppercase text-custom-gray-6">
                n/a
              </h1>
            )}
            <p className="text-lg font-semibold text-gray-600">
              por {Intl.NumberFormat().format(data.price)}$
            </p>
            <h1 className="text-xs font-bold uppercase text-custom-gray-6">
              o en {data.installments.quantity}x de R ${data.installments.value}
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
