"use client";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
const Menuitem = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="hidden md:block font-semibold text-sm  px-6 flex-1 text-center">
        Airbnb your home
      </div>
      <div
        className=" hidden  md:flex md:flex-row p-4 md:py-1 md:px-2 py-3  border-[1px]  
          rounded-full  gap-3 items-center relative"
      >
        <AiOutlineMenu />
        <div className="hidden md:block"></div>
        <Avatar />
      </div>
    </div>
  );
};

export default Menuitem;
