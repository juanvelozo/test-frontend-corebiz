import React from "react";

export const NewsLetter = () => {
  return (
    <div className="w-full h-40 py-10 text-center bg-custom-gray-1 text-white font-nunito flex items-center justify-center">
      <form>
        <h1 className="text-black font-lato text-xl py-2">
          ¡Únete a nuestras novedades y promociones!
        </h1>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          className="focus:outline-none w-64 p-3 rounded-md m-2 text-sm font-lato text-custom-gray-7"
        />
        <input
          type="email"
          placeholder="Ingresa tu mail"
          className="focus:outline-none w-64 p-3 rounded-md m-2 text-sm font-lato text-custom-gray-7"
        />
        <button
          type="submit"
          className="bg-black w-32 rounded-md p-3 m-2 text-sm font-lato font-semibold text-white"
        >
          Suscribirme
        </button>
      </form>
    </div>
  );
};
