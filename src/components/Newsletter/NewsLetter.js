import React from "react";

export const NewsLetter = () => {
  return (
    <div className=" bg-custom-gray-1 font-nunito px-3 w-auto flex justify-center items-center py-10">
      <form className="mobile:flex mobile:flex-col space-y-4 lg:space-x-3">
        <h1 className="text-2xl font-bold lg:text-center">
          ¡Únete a nuestras novedades y promociones!
        </h1>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="focus:outline-none rounded-md text-sm font-lato text-custom-gray-7 p-3 lg:w-64"
        />
        <input
          type="email"
          placeholder="Ingresa tu mail"
          className="focus:outline-none rounded-md text-sm font-lato text-custom-gray-7 p-3 lg:w-64"
        />
        <button
          type="submit"
          className="bg-black rounded-md text-sm font-lato font-semibold text-white p-3"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};
