"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";

const JITCards = ({ img, hoverImg }) => {
  const [hover, setHover] = useState(false);
  const [radio, setRadio] = useState(false);
  const [sizes, setSizes] = useState(false);

  return (
    <div
      className="min-w-[300px] min-h-[400px] relative object-contain"
      onMouseOver={() => setRadio(true)}
      onMouseOut={() => setRadio(false)}
    >
      <div className="overflow-hidden h-[400px]">
        <Image
          src={hover ? hoverImg : img}
          alt="carousel"
          width={300}
          height={300}
          className="cursor-pointer"
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
      </div>

      <span
        className={
          radio
            ? "w-[270px] h-[50px] p-[12px] box-border rounded-[5px] bg-[rgba(255,255,255,0.9)] text-[#303640] text-center absolute bottom-[25%] left-[50%] translate-x-[-50%] cursor-pointer"
            : "hidden"
        }
        onMouseOver={() => setSizes(true)}
        onMouseOut={() => setSizes(false)}
      >
        {sizes ? (
          <span className="bg-white w-[270px] p-[12px] box-border rounded-[5px] text-[#303640] absolute bottom-0 left-[50%] translate-x-[-50%] cursor-pointer flex gap-[10px]">
            <span className="hover:bg-black hover:text-white cursor-pointer w-[35px] h-[30px] p-[5px_8px] rounded-md text-[14px]">
              S
            </span>
            <span className="hover:bg-black hover:text-white cursor-pointer w-[30px] h-[30px] p-[5px] rounded-md text-[14px]">
              md
            </span>
            <span className="hover:bg-black hover:text-white cursor-pointer w-[35px] h-[30px] p-[5px] rounded-md text-[14px]">
              lg
            </span>
            <span className="hover:bg-black hover:text-white cursor-pointer w-[35px] h-[30px] p-[5px] rounded-md text-[14px]">
              xl
            </span>
            <span className="hover:bg-black hover:text-white cursor-pointer w-[35px] h-[30px] p-[5px] rounded-md text-[14px]">
              xxl
            </span>
            <span className="hover:bg-black hover:text-white cursor-pointer w-[35px] h-[30px] p-[5px] rounded-md text-[14px]">
              xxxl
            </span>
          </span>
        ) : (
          "Quick Add"
        )}
      </span>
      <span className="absolute top-[6px] right-[6px] bg-black text-white text-[10px] p-[3px_6px] uppercase">
        Best Seller
      </span>
      <div className="w-full">
        <span className="h-[50px] font-[400] flex align-middle justify-between text-[12px] py-[8px]">
          The SeaCell™ Crewneck Cardigan in Dark Chocolate
          <CiHeart className="w-[20px] h-[20px] rounded-[50%] hover:bg-slate-300 cursor-pointer" />
        </span>
        <span className="text-[12px] block h-[40px] py-[8px]">$149</span>
        <span className="text-[12px] text-[#303640]">
          {radio ? (
            <input type="radio" className="accent-[#555] cursor-pointer" />
          ) : (
            "1 color"
          )}
        </span>
      </div>
    </div>
  );
};

export default JITCards;
