"use client";
import Container from "../Container";
import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed w-full bg-white shadow-sm z-10">
      <div className="border-b-[1px] py-4">
        <Container>
          <div className="flex flex-column  sm:flex justify-between items-center  gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
