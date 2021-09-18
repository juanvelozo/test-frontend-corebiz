import React from "react";
import { MdEmail, MdHeadsetMic } from "react-icons/md";
import { ReactComponent as LogoWhite } from "../../static/logoWhite.svg";
import { ReactComponent as Vtex } from "../../static/Vtex.svg";
import { NewsLetter } from "../Newsletter/NewsLetter";

export const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="top-0 h-52  bg-black text-white font-nunito flex justify-center items-center">
        <div className="flex justify-around w-full">
          <div className="flex flex-col m-10">
            <h1 className="text-lg">Ubicación</h1>
            <h1 className="text-xs my-1">
              Avenida Andrômeda, 2000. Bloco 6 e 8{" "}
            </h1>
            <h1 className="text-xs my-1">Alphavile SP</h1>
            <h1 className="text-xs my-1">brasil@corebiz.ag </h1>
            <h1 className="text-xs my-1">+55 11 3090 1039</h1>
          </div>
          <div className="flex flex-col justify-center items-center text-sm">
            <button className="bg-white text-black font-bold rounded-md uppercase flex items-center justify-evenly w-60 h-10 text-center my-2">
              <MdEmail />
              contáctanos
            </button>
            <button className="bg-white text-black font-bold rounded-md uppercase flex items-center justify-evenly w-60 h-10 text-center my-2">
              <MdHeadsetMic />
              habla con un consultor
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="m-2">
              <h1>Desarrollado por</h1>
              <LogoWhite />
            </div>
            <div className="m-2">
              <h1>Powered by</h1>
              <Vtex />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
