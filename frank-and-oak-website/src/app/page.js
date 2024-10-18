"use client";
// import Header from "./Components/Header";
import Image from "next/image";
import Banner from "./Components/Banner";
import USP from "./Components/USP";
import { RxReload } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import JITCards from "./Components/JITCards";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Testimonial from "./Components/Testimonial";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
// import Footer from "./Components/Footer";

export default function Home() {
  const [showLatestBtn, setShowLatestBtn] = useState(false);
  const [showTestimonialBtn, setShowTestimonialBtn] = useState(false);

  const handleNext = () => {
    const box = window.document.querySelector("#box");
    const width = box.clientWidth;
    box.scrollLeft += width;
    setShowLatestBtn(true);
  };
  const handlePrev = () => {
    const box = window.document.querySelector("#box");
    const width = box.clientWidth;
    box.scrollLeft -= width;
    if (box.scrollLeft === 0 || box.scrollLeft < width) setShowLatestBtn(false);
  };

  const handleTestimonialNextBtn = () => {
    const testimonialContainer = window.document.querySelector("#testimonial");
    const testimonialWidth = testimonialContainer.clientWidth;
    testimonialContainer.scrollLeft += testimonialWidth;
    console.log(testimonialContainer.scrollLeft);
    setShowTestimonialBtn(true);
  };

  const handleTestimonialPrevBtn = () => {
    const testimonialContainer = window.document.querySelector("#testimonial");
    const testimonialWidth = testimonialContainer.clientWidth;
    testimonialContainer.scrollLeft -= testimonialWidth;
    if (
      testimonialWidth.scrollLeft === 0 ||
      testimonialContainer.scrollLeft < testimonialWidth
    )
      setShowTestimonialBtn(false);
  };


 
  return (
    <div>
      {/* <span className="text-black mt-[60px] text-[30px] bg-red-600 block">
        {process.env.NEXT_PUBLIC_SAMPLE}
      </span> */}
      <Banner />
      <USP />
      <div className="w-full h-[100vh] py-[30px] box-border">
        <h2 className="m-[30px] text-[30px]">Featured Categories</h2>
        <div className="w-full flex flex-row gap-[20px] items-center justify-evenly">
          <span className="flex flex-col">
            <Image
              src="/thumbnail_image1.webp"
              alt="thumbnail"
              width={300}
              height={450}
            />
            <span>Women&apos; Denim</span>
          </span>

          <span className="flex flex-col">
            <Image
              src="/thumbnail_image2.webp"
              alt="thumbnail"
              width={300}
              height={450}
            />
            <span>Women&apos; Jackets</span>
          </span>
          <span className="flex flex-col">
            <Image
              src="/thumbnail_image3.webp"
              alt="thumbnail"
              width={300}
              height={450}
            />
            <span>Men&apos; Denim</span>
          </span>
          <span className="flex flex-col">
            <Image
              src="/thumbnail_image4.webp"
              alt="thumbnail"
              width={300}
              height={450}
            />
            <span>Men&apos; Jackets</span>
          </span>
        </div>
      </div>
      <div className="w-full h-[100vh] py-[30px] box-border relative">
        <span className="m-[30px] text-[30px]">This Just In</span>

        <div
          className="w-full h-[80vh] p-[0px_20px] my-[20px] box-border grid grid-flow-col gap-[20px] overflow-hidden scroll-smooth "
          id="box"
        >
          <FaArrowLeftLong
            className={`w-[40px] h-[40px] rounded-[50%] bg-white p-[10px] font-light absolute top-[50%] z-50 left-[25px] text-[#303640] shadow-lg cursor-pointer ${
              showLatestBtn ? "flex" : "hidden"
            }`}
            onClick={handlePrev}
          />
          <FaArrowRight
            className="w-[40px] h-[40px] rounded-[50%] bg-white p-[10px] font-light  absolute top-[50%] z-50 right-[25px] text-[#303640] shadow-lg cursor-pointer"
            onClick={handleNext}
          />
          <JITCards img={"/JITIMG1.jpg"} hoverImg={"/JITIMG1HOVER.webp"} />
          <JITCards img={"/JITIMG2.webp"} hoverImg={"/JITIMG2HOVER.webp"} />
          <JITCards img={"/JITIMG3.webp"} hoverImg={"/JITIMG3HOVER.webp"} />
          <JITCards img={"/JITIMG4.webp"} hoverImg={"/JITIMG4HOVER.webp"} />
          <JITCards img={"/JITIMG5.webp"} hoverImg={"/JITIMG5HOVER.webp"} />
          <JITCards img={"/JITIMG6.webp"} hoverImg={"/JITIMG6HOVER.webp"} />
          <JITCards img={"/JITIMG7.webp"} hoverImg={"/JITIMG7HOVER.webp"} />
          <JITCards img={"/JITIMG8.webp"} hoverImg={"/JITIMG8HOVER.webp"} />
          <JITCards img={"/JITIMG9.webp"} hoverImg={"/JITIMG9HOVER.webp"} />
        </div>
      </div>

      <div className="w-full h-[100vh] py-[30px] box-border bg-[#f9f9f9] px-[20px] relative">
        <span className="block my-[30px] text-center text-[30px]">
          You didn&apos;t hear it from us
        </span>

        <div
          className="w-full h-[60vh] box-border bg-[#f9f9f9] px-[20px] overflow-hidden grid grid-flow-col gap-[50px] scroll-smooth"
          id="testimonial"
        >
          <FaArrowLeftLong
            className={`w-[40px] h-[40px] rounded-[50%] bg-white p-[10px] font-light absolute top-[50%] z-50 left-[25px] text-[#303640] shadow-lg cursor-pointer ${
              showTestimonialBtn ? "flex" : "hidden"
            }`}
            onClick={handleTestimonialPrevBtn}
          />
          <FaArrowRight
            className="w-[40px] h-[40px] rounded-[50%] bg-white p-[10px] font-light  absolute top-[50%] z-50 right-[25px] text-[#303640] shadow-lg cursor-pointer"
            onClick={handleTestimonialNextBtn}
          />
          <Testimonial
            Content={
              "This is a simple vest but it looks expensive and falls nicely on the body! Soft and simple."
            }
            client={"Emily H."}
            img={"/Testimonial1.webp"}
          />
          <Testimonial
            Content={
              "I have this shirt in 4 other colours. It fits great and can easily be dressed down or up depending on what you’re doing."
            }
            client={"Scott R."}
            img={"/Testimonial2.webp"}
          />
          <Testimonial
            Content={"Great staple wardrobe piece and a flattering fit."}
            client={"Lee-Anne D."}
            img={"/Testimonial3.webp"}
          />
          <Testimonial
            Content={
              "Just an all around great shirt, fits amazing. Stylish and cozy."
            }
            client={"Nick M."}
            img={"/Testimonial1.webp"}
          />
          <Testimonial
            Content={
              "Love these pants — they're fitted and give outfits a clean look, but they're also very stretchy and non-constrictive."
            }
            client={"Chris O."}
            img={"/Testimonial5.webp"}
          />
          <Testimonial
            Content={"Great fit and cut. Love the chic looseness."}
            client={"Hilda H."}
            img={"/Testimonial6.webp"}
          />
        </div>
      </div>

      <div className="w-full grid grid-cols-[2fr_2fr] min-h-[100vh] py-[30px] px-[30px] box-border">
        <div className="w-full flex flex-col gap-[20px] px-[80px] py-[150px] box-border">
          <span className="text-[45px] capitalize font-[600]">
            Inspire better living.
          </span>
          <span className="text-[25px] text-[#303640]">
            Born in Canada, we are grounded on innovation, our community, and
            respecting the planet we all call home.
          </span>
          <span className="text-[30px] text-black underline">Who We Are</span>
        </div>
        <div className="w-full flex flex-col gap-[20px]">
          <div className="w-full h-[50%] grid grid-cols-[2fr_2fr] gap-[30px]">
            <div className="border relative">
              <div className=" img_container1"></div>
              <span className="absolute bottom-[15px] left-[15px] text-white text-[20px] font-semibold">
                Sustainable Practices
              </span>
            </div>
            <div className="border relative">
              <div className=" img_container2"></div>
              <span className="absolute bottom-[15px] left-[15px] text-white text-[20px] font-semibold">
                Design Philosophy
              </span>
            </div>
          </div>
          <div className="w-full h-[50%] grid grid-cols-[2fr_2fr] gap-[30px]">
            <div className="border relative">
              <div className=" img_container3"></div>
              <span className="absolute bottom-[15px] left-[15px] text-white text-[20px] font-semibold">
                Fabrics Innovation
              </span>
            </div>
            <div className="border relative">
              <div className=" img_container4"></div>
              <span className="absolute bottom-[15px] left-[15px] text-white text-[20px] font-semibold">
                Partners & Factories
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5">
        <button 
        className="p-[10px_40px] bg-[skyblue] rounded-lg"
        // onClick={handlePurchase}
        >Buy Now</button>
      </div>
      <div className="w-full h-[250px] bg-black flex flex-row text-white items-center justify-center gap-[150px]">
        <span className="flex flex-col items-center justify-center font-light text-[14px] gap-[10px]">
          <CiDeliveryTruck className="text-[50px]" />
          <span>Free Shipping over $99</span>
          <span>On orders over $99.</span>
        </span>
        <span className="flex flex-col items-center justify-center font-light text-[14px] gap-[10px]">
          <RxReload className="text-[30px]" />
          <span>Free Returns</span>
          <span>Only keep what you love.</span>
        </span>
        <span className="flex flex-col items-center justify-center font-light text-[14px] gap-[10px] object-contain">
          <Image
            src="/loyalty_logo_light.webp"
            alt="loyalty program logo"
            width={30}
            height={30}
          />
          <span>Earn Points</span>
          <span>Earn points and get rewards. </span>
        </span>
        <span className="flex flex-col items-center justify-center font-light text-[14px] gap-[10px]">
          <Image
            src="/Sezzle.webp"
            alt="pay after delivery"
            width={30}
            height={30}
          />
          <span>Buy Now, Pay Later</span>
          <span>Select Klarna at checkout.</span>
        </span>
      </div>
    </div>
  );
}
