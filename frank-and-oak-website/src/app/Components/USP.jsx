import Image from "next/image";
import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { RxReload } from "react-icons/rx";
const USP = () => {
  return (
    <div className="w-full h-[50px] bg-black flex flex-row text-white items-center justify-center gap-[80px]">
      <span className="flex items-center justify-center font-light text-[14px] gap-[10px]">
        <CiDeliveryTruck className="text-[18px]"/>
        <span>Free Shipping over $99</span>
      </span>
      <span className="flex items-center justify-center font-light text-[14px] gap-[10px]">
        <RxReload />
        <span>Free Returns</span>
      </span>
      <span className="flex items-center justify-center font-light text-[14px] gap-[10px] object-contain">
        <Image
          src="/loyalty_logo_light.webp"
          alt="loyalty program logo"
          width={20}
          height={20}
        />
        <span>Earn Points</span>
      </span>
      <span className="flex items-center justify-center font-light text-[14px] gap-[10px]">
        <Image
          src="/Sezzle.webp"
          alt="pay after delivery"
          width={20}
          height={20}
        />
        <span>Buy Now, Pay Later</span>
      </span>
    </div>
  );
};
export default USP;
