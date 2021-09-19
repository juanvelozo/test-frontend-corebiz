import React from "react";

export const Carousel = () => {
  return (
    <div className=" h-auto  text-white font-nunito lg:flex relative">
      <div className="absolute inset-x-0 bottom-0 flex justify-center m-4 text-6xl select-none">
        <span className="text-custom-red">.</span>
        <span className="text-custom-gray-2">.</span>
        <span>.</span>
        <span>.</span>
      </div>
      <div className="lg:w-6/12 flex lg:justify-center lg:items-center w-auto bg-black mobile:bg-opacity-40 mobile:absolute lg:h-auto h-full">
        <div className="lg:w-2/3 flex flex-col justify-center lg:items-start px-4 ">
          <h1 className="font-semibold lg:text-3xl text-xl my-2">
            ¡Hola! ¿Qué es lo que buscas?
          </h1>
          <h1 className="font-extrabold lg:text-5xl text-4xl my-2">
            ¿Crear o migrar tu comercio electrónico?
          </h1>
        </div>
      </div>
      <div className="lg:w-6/12 flex w-auto">
        <img
          src="https://cdn.pixabay.com/photo/2017/08/07/19/45/ecommerce-2607114_960_720.jpg"
          alt="img"
          className="bg-contain bg-no-repeat h-full"
        />
      </div>
    </div>
  );
};
