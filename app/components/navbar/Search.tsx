"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";
function Search() {
  return (
    <div
      className="border-[1px] bg-white py-2 
       rounded-full w-full  transition
       shadow-sm hover:shadow-md md:w-auto  cursor-pointer"
    >
      <div className="flex flex-row  justify-between items-center">
        <div className="font-semibold text-sm px-6 order-">Anywhere</div>
        <div className="font-semibold hidden sm:block  text-sm border-x-[1px] px-6 flex-1 text-center">
          Any week
        </div>
        <div className="flex flex-row justify-between items-center pl-6 pr-2">
          <div className="hiddden sm:block font-semibold text-sm px-6 text-gray-600 ">
            Add guest
          </div>
          <div className="rounded-[50%] font-bold  text-white p-2 bg-rose-500">
            <BiSearch size={10} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
