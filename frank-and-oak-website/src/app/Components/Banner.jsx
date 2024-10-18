"use client";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-[#f0f0ee] h-[88vh] p-[0_80px] grid grid-cols-[2fr_2fr] mt-[50px]">
      <div className="flex items-center flex-col justify-center gap-[40px]">
        <div className="w-full text-[72px] font-[600] text-left leading-[80px] ">
          The <br />
          Stockroom Sale
        </div>
        <div className="w-full flex gap-[50px]">
          <button className="border-2 border-black w-[170px] h-[50px] p-[10px] text-[18px] font-[500]">
            Women
          </button>
          <button className="border-2 border-black w-[170px] h-[50px] p-[10px] text-[18px] font-[500]">
            Men
          </button>
        </div>
      </div>
      <div className="object-contain flex items-center justify-center">
        <Image
          src="/Stockroom_sale_homepage.webp"
          alt="banner img"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
export default Banner;
