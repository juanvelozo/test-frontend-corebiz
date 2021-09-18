import React from "react";

export const Carousel = () => {
  return (
    <div className="w-full h-auto bg-black text-white font-nunito flex relative">
      <div className="absolute inset-x-0 bottom-0 flex justify-center m-4 text-6xl select-none">
        <span className="text-custom-red">.</span>
        <span className="text-custom-gray-2">.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <div className="w-6/12 flex justify-center">
        <div className="w-2/3 flex flex-col justify-center items-start">
          <h1 className="font-semibold text-3xl my-2">
            ¡Hola! ¿Qué es lo que buscas?
          </h1>
          <h1 className="font-extrabold text-5xl my-2">
            ¿Crear o migrar tu comercio electrónico?
          </h1>
        </div>
      </div>

      <div className="w-6/12 flex">
        <img
          src="https://pixabay.com/get/g0bd4d20cb9246b811f5e656eae54a9052cf66bfde1c97168fd774b3b96dad5e638bfa4fe1278f9648fd2540900116f78_1920.jpg"
          alt="img"
          className="bg-contain bg-no-repeat h-full"
        />
      </div>
    </div>
  );
};
