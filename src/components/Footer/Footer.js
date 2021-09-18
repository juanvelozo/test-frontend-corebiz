import React from "react";
import { MdEmail, MdHeadsetMic } from "react-icons/md";
import { ReactComponent as LogoWhite } from "../../static/logoWhite.svg";
import { ReactComponent as Vtex } from "../../static/Vtex.svg";
import { NewsLetter } from "../Newsletter/NewsLetter";

export const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="top-0 w-full h-52  bg-black text-white font-nunito ">
        <div className="flex justify-around ">
          <div className="flex flex-col items-center">
            <div>
              <h1>Ubicacion</h1>
              <h1>Avenida Andrômeda, 2000. Bloco 6 e 8 </h1>
              <h1>Alphavile SP</h1>
              <h1>brasil@corebiz.ag </h1>
              <h1>+55 11 3090 1039</h1>
            </div>
          </div>
          <div className="flex flex-col justify-around items-center">
            <button className="bg-white text-black rounded-md uppercase flex items-center justify-evenly w-56 h-8 text-center">
              <MdEmail />
              contáctanos
            </button>
            <button className="bg-white text-black rounded-md uppercase flex items-center justify-evenly w-56 h-8 text-center">
              <MdHeadsetMic />
              contáctanos
            </button>
          </div>
          <div className="flex">
            <div>
              <h1>Desarrollado por</h1>
              <LogoWhite className="w-20 h-8 " />
            </div>
            <div>
              <h1>Powered by</h1>
              <Vtex className="w-20 h-8  " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
