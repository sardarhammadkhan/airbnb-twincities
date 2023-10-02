'use client'
import React from 'react'
import Image from "next/image";

function Avatar() {
  return (
    
    <Image
    className=" rounded-full cursor-pointer"
    alt="logo"
    height="30"
    width="30"
    src="/avtar.jpg"
  />
  )
}

export default Avatar
