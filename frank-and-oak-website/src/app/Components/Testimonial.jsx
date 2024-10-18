import Image from "next/image";
import React from "react";

const Testimonial = ({ Content, client, img }) => {
  return (
    <div className="w-[600px] min-h-[300px] grid grid-cols-[2fr_2fr]">
      <div className="bg-white grid place-content-center relative">
        <span className="mx-[25px] font-[500] text-balance">{Content}</span>
        <span className="text-[#303640] m-[25px]">{client}</span>

        <span className="absolute left-[25px] bottom-[20px] underline cursor-pointer font-[500]">
          Shop now
        </span>
      </div>
      <div className="object-contain">
        <Image src={img} alt="testimonial" width={300} height={450} />
      </div>
    </div>
  );
};

export default Testimonial;
