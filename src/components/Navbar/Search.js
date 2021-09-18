import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <div className="w-full lg:w-customsearchbar">
      <form className="border-b-2 flex justify-between ">
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="w-full focus:outline-none"
        />
        <button type="submit" className="bg-transparent">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};
