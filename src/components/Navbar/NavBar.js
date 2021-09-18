import React from "react";
import { Search } from "./Search";
import { ReactComponent as LogoBlack } from "../../static/logoBlack.svg";
import { Chart } from "../Chart/Chart";
import { FaRegUser } from "react-icons/fa";

export const NavBar = () => {
  return (
    <div className="bg-white flex justify-around items-center bg-clip-padding bg-no-repeat h-20 w-full shadow-md">
      <div className="container flex justify-around items-center">
        <LogoBlack />
        <Search />
        <div className="flex items-center ">
          <button className="font-nunito mx-3 flex items-center justify-between">
            <FaRegUser /> Mi cuenta
          </button>
          <Chart />
        </div>
      </div>
    </div>
  );
};
