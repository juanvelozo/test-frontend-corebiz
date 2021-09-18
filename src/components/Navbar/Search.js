import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  return (
    <div className="">
      <form className="border-b-2 flex w-customsearchbar">
        <input
          type="text"
          placeholder="¿Qué estás buscando?"
          className="w-full focus:outline-none focus:bg-custom-gray-2"
        />
        <button type="submit" className="bg-transparent">
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
};
