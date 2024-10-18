import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoLockClosedOutline } from "react-icons/io5";
import PopularOffcanvasCards from "./PopularOffcanvasCards";

const Offcanvas = ({ close }) => {
  const [controlBtn, setControlBtn] = useState(false);

  const handlePrevBtn = () => {
    const box = window.document.querySelector("#box");
    const width = box.clientWidth;
    box.scrollLeft -= width;
    if (box.scrollLeft === 0 || box.scrollLeft < width) setControlBtn(false);
  };
  const handleNextBtn = () => {
    const box = window.document.querySelector("#box");
    const width = box.clientWidth;
    box.scrollLeft += width;
    setControlBtn(true);
  };

  return (
    <div className="w-[600px] h-[100vh] absolute right-0 top-0 bg-white">
      <span className="block h-[40px] px-[10px] bg-[#f9f9f9]">
        <FaArrowLeft
          className="inline-block cursor-pointer mr-[20px] h-full text-[12px] font-thin"
          onClick={() => close(false)}
        />
        <span className="text-[14px]">Continue Shopping</span>
      </span>
      <span className="block bg-black text-white text-center text-[12px] h-[30px] py-[5px] box-border font-[500]">
        Free shipping on orders $99+ and free returns
      </span>

      <div className="w-full my-[50px] relative">
        <span className="block bg-[#f9f9f9] h-[40px] p-[8px_30px]">
          Most popular right now
        </span>
        <div
          className="w-full px-[20px] h-[30vh] overflow-hidden scroll-smooth mx-auto mt-[10px] grid grid-flow-col gap-[50px]"
          id="box"
        >
          <FaArrowLeft
            className={`absolute top-[50%] w-[30px] h-[30px] font-thin p-[5px] rounded-[50%] z-50 text-[#303640] bg-white left-[10px] shadow-lg cursor-pointer ${
              controlBtn ? "flex" : "hidden"
            }`}
            onClick={handlePrevBtn}
          />
          <FaArrowRight
            className="absolute top-[50%] w-[30px] h-[30px] font-thin p-[5px] rounded-[50%] z-50 text-[#303640] bg-white right-[10px] shadow-lg cursor-pointer"
            onClick={handleNextBtn}
          />
          <PopularOffcanvasCards
            img={"/JITIMG1.jpg"}
            content={"The SeaCell™ Crewneck Cardigan in Dark Chocolate"}
            price={"$149"}
            sizes={["XXS", "XS", "S", "M", "L", "XL"]}
          />

          <PopularOffcanvasCards
            img={"/JITIMG2.webp"}
            content={"The Zip Up Bomber Jacket in Light Beige"}
            price={"$149"}
            sizes={["XXS", "XS", "S", "M", "L", "XL"]}
          />
          <PopularOffcanvasCards
            img={"/JITIMG3.webp"}
            content={"The Button-Up Sweater Vest in Space Blue"}
            price={"$89.50"}
            sizes={["XXS", "XS", "S", "M", "L", "XL"]}
          />
          <PopularOffcanvasCards
            img={"/JITIMG.webp"}
            content={"The French Terry Overshirt in Coronet Blue"}
            price={"$79.99"}
            sizes={["XXS", "XS", "S", "M", "L", "XL"]}
          />
          <PopularOffcanvasCards
            img={"/JITIMG4.webp"}
            content={"The Fluid Camp Collar Blouse in White"}
            price={"$79.50"}
            sizes={["XXS", "XS", "S", "M", "L", "XL"]}
          />
        </div>
      </div>

      <div className="w-[90%] absolute bottom-[10px] left-[50%] translate-x-[-50%] ">
        <div className="w-full bg-[#f9f9f9] h-[40px] flex items-center justify-between mb-[10px] px-[10px]">
          <span>
            Subtotal <span className="text-[#7c7c7c]">(0 items)</span>
          </span>
          <span>$0.00</span>
        </div>
        <button className="flex gap-[20px] items-center justify-center text-white text-[20px] w-full h-[60px] cursor-pointer bg-[#7c7c7c] ">
          <span>Secure Checkout</span>
          <IoLockClosedOutline className="inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Offcanvas;
