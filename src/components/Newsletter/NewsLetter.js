import React, { useContext, useState } from "react";
import { NewsLetterContext } from "../../services/NewsLetter/Context";
import mailService from "../../services/NewsLetter/services";

export const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const { user, dispatch } = useContext(NewsLetterContext);
  const handleNewsLetter = async (e) => {
    e.preventDefault();
    try {
      const suscribe = await mailService.mail({ email, name });
      dispatch({
        type: "mailTrue",
        payload: {
          email: email,
          name: name,
        },
      });
      setEmail(suscribe);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" bg-custom-gray-1 font-nunito px-3 w-auto flex justify-center items-center py-10">
      <form
        className="mobile:flex mobile:flex-col space-y-4 lg:space-x-3"
        onSubmit={handleNewsLetter}
      >
        <h1 className="text-2xl font-bold lg:text-center">
          ¡Únete a nuestras novedades y promociones!
        </h1>
        <input
          type="name"
          placeholder="Ingresa tu nombre"
          className="focus:outline-none rounded-md text-sm font-lato text-custom-gray-7 p-3 lg:w-64"
          onChange={({ target }) => setName(target.value)}
        />
        <input
          type="email"
          placeholder="Ingresa tu mail"
          className="focus:outline-none rounded-md text-sm font-lato text-custom-gray-7 p-3 lg:w-64"
          onChange={({ target }) => setEmail(target.value)}
        />
        <button
          type="submit"
          className={
            user.auth
              ? "bg-green-800 rounded-md text-sm font-lato font-semibold text-white p-3 cursor-not-allowed"
              : "bg-black rounded-md text-sm font-lato font-semibold text-white p-3"
          }
        >
          {user.auth ? "¡Suscripto exitosamente!" : "Suscribirme"}
        </button>
      </form>
    </div>
  );
};
