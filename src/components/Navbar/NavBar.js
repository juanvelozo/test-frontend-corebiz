import React, { useState } from "react";
import { Search } from "./Search";
import { ReactComponent as LogoBlack } from "../../static/logoBlack.svg";
import { Chart } from "../Chart/Chart";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleNavBar = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="max-w-72 mx-auto overflow-x-hidden">
      <div className="flex justify-around md:justify-around items-center h-auto my-4">
        {/* mobile */}
        <div>
          <div className="md:hidden flex text-2xl" onClick={handleNavBar}>
            {open ? <IoCloseOutline /> : <GiHamburgerMenu />}
          </div>
        </div>

        {/* NavBar */}
        <div className="transform scale-150">
          <LogoBlack />
        </div>
        <div className="hidden md:flex">
          <Search />
        </div>
        <div className="flex items-center space-x-2">
          <button className="hidden md:flex items-center space-x-2">
            <FaRegUser />
            <p>Mi cuenta</p>
          </button>
          <Chart />
        </div>
      </div>
      <div className="md:hidden flex m-5">
        <Search />
      </div>
      {/* Navbar menu */}
      {open && (
        <div className="bg-white h-screen w-full absolute flex flex-col py-5 z-50 overflow-y-hidden">
          <button className="flex justify-center items-center space-x-2 py-2 border">
            <FaRegUser />
            <p>Mi cuenta</p>
          </button>
        </div>
      )}
    </div>
  );
};
