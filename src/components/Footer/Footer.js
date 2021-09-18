import React from "react";
import { MdEmail, MdHeadsetMic } from "react-icons/md";
import { ReactComponent as LogoWhite } from "../../static/logoWhite.svg";
import { ReactComponent as Vtex } from "../../static/Vtex.svg";
import { NewsLetter } from "../Newsletter/NewsLetter";

export const Footer = () => {
  return (
    <>
      <NewsLetter />
      <div className="bg-black text-white font-nunito px-5 py-10">
        <div className="space-y-10 flex mobile:flex-col lg:justify-around lg:items-center">
          <div className="space-y-3 text-sm">
            <h1 className="text-2xl font-semibold">Ubicación</h1>
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag </p>
            <p>+55 11 3090 1039</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-10">
            <button className="bg-white text-black font-bold rounded-md uppercase flex items-center justify-items-start w-60 h-10  text-2xl">
              <div className=" flex items-center justify-around w-full">
                <MdEmail />
                <h1 className="text-xs">contáctanos</h1>
              </div>
            </button>
            <button className="bg-white text-black font-bold rounded-md uppercase flex items-center justify-items-start w-60 h-10  text-2xl">
              <div className=" flex items-center justify-around w-full">
                <MdHeadsetMic />
                <h1 className="text-xs">habla con un consultor</h1>
              </div>
            </button>
          </div>
          <div className="flex justify-between items-start mx-4 ">
            <div>
              <h1>Desarrollado por</h1>
              <LogoWhite />
            </div>
            <div>
              <h1>Powered by</h1>
              <Vtex />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
