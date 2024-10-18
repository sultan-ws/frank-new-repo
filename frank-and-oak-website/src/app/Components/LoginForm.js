"use client";
// import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight, FaHeart, FaTag } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { BiLogoFacebook } from "react-icons/bi";
import Link from "next/link";

const LoginForm = ({ close }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const [formData, setFormData] = useState({});

  return (
    <div className="w-[600px]  p-[30px] h-[650px] bg-white absolute top-[20px] left-[50%] translate-x-[-50%] overflow-y-scroll">
      <div className="w-[95%] p-[10px] box-border bg-[#f9f9f9] mx-auto">
        <span
          className="absolute  top-[8px] right-[20px] text-[20px] cursor-pointer"
          onClick={() => close(false)}
        >
          X
        </span>
        <span className="block text-[25px] text-center">Welcome Back!</span>
        <span className="block text-center text-[14px]">
          Log in to enjoy your perks
        </span>
        <ul className="list-none flex w-full my-[50px] gap-[30px] ">
          <li className="w-full grid grid-flow-row place-content-center gap-[15px]">
            <span className="block mx-auto">
              {/* <Image
              src="/favicon.ico"
              alt="frank and oak"
              width={20}
              height={20}
              className="text-center"
            /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
              >
                <g clip-path="url(#clip0_2406_20469)">
                  <path
                    d="M18.9397 16.0898C18.9397 15.7398 18.8797 15.3898 18.7697 15.0498C18.7397 14.9398 18.6997 14.8298 18.6497 14.7298C18.3397 13.9998 17.7997 13.3998 17.1097 13.0298C16.9097 12.9298 16.7097 12.8398 16.4897 12.7798C16.2697 12.7098 16.0497 12.6698 15.8197 12.6498C15.5897 12.6298 15.3497 12.6298 15.1197 12.6498C14.8897 12.6798 14.6697 12.7198 14.4597 12.7998C14.3497 12.8398 14.2497 12.8798 14.1497 12.9198C13.7097 13.1098 13.3197 13.3998 12.9997 13.7598C12.6797 14.1198 12.4297 14.5398 12.2797 15.0098C12.1297 15.4698 12.0697 15.9598 12.1097 16.4498C12.1497 16.9398 12.2897 17.4098 12.5297 17.8298C12.5497 17.8598 12.5697 17.8998 12.5897 17.9298C12.6497 18.0198 12.7097 18.1198 12.7697 18.1998C13.1997 18.7898 13.7997 19.2298 14.4897 19.4598C15.1797 19.6798 15.9197 19.6798 16.5997 19.4398C17.2797 19.2098 17.8797 18.7598 18.2997 18.1498C18.7197 17.5498 18.9397 16.8298 18.9297 16.0898V16.0698L18.9397 16.0898Z"
                    fill="black"
                  ></path>
                  <path
                    d="M8.08 3.31982L0 6.02982L5.66 23.6598C10.35 19.3498 11.28 11.8198 8.08 3.31982Z"
                    fill="black"
                  ></path>
                  <path
                    d="M21.8598 0.000234375L11.2598 0.150234C11.3498 6.14023 16.1598 10.9202 22.0198 10.8302L21.8698 -0.00976562L21.8598 0.000234375Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2406_20469">
                    <rect width="22.02" height="23.66" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="text-[14px] text-center">
              Frank's Club Earn points, get rewards
            </span>
          </li>
          <li className="w-full grid grid-flow-row place-content-center gap-[20px]">
            <span>
              <FaHeart className="block mx-auto text-[20px]" />
            </span>
            <span className="text-[14px] text-center">
              Wishlist Save your favourites
            </span>
          </li>
          <li className="w-full grid grid-flow-row place-content-center gap-[20px]">
            <span>
              <FaTag className="block mx-auto text-[20px]" />
            </span>
            <span className="text-[14px] text-center">
              Early access Exclusive sale perks
            </span>
          </li>
        </ul>
      </div>
      {/* Login Form */}
      <div className="w-[95%] my-[20px]">
        {signUp ? (
          <div className="w-full p-[15px]">
            <div className="w-[95%] mx-auto border-t-[1px] mt-[20px] relative">
              <span className="text-[12px] absolute top-[-12px] left-[50%] translate-x-[-50%] bg-white w-[250px] text-center">
                <strong>Already have an account?</strong>{" "}
                <span
                  className="ml-[10px] border-b-[1px] border-black cursor-pointer"
                  onClick={() => setSignUp(false)}
                >
                  Log in <FaArrowRight className="inline-block" />
                </span>
              </span>
            </div>
            <form method="post" className="my-[30px] relative">
              <div className="grid grid-cols-[2fr_2fr] gap-[20px] my-[10px]">
                <div className="relative">
                  
                  <input
                    type="text"
                    name="f_name"
                    placeholder="First Name"
                    value={formData.f_name}
                    className="p-[10px] focus:outline-none w-full border border-black text-[14px]"
                    onChange={(e) => { setFormData({ ...formData, f_name: e.target.value }) }}
                  />
                </div>

                <div className="relative">
                 
                  <input
                    type="text"
                    name="l_name"
                    placeholder="Last Name"
                    value={formData.l_name}
                    className="p-[10px] focus:outline-none w-full border border-black text-[14px]"
                    onChange={(e) => { setFormData({ ...formData, l_name: e.target.value }) }}
                  />
                </div>
              </div>
             
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="p-[10px] focus:outline-none w-full border border-black text-[14px] my-[10px]"
                onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
                value={formData.email}
              />

              
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="p-[10px] focus:outline-none w-full border border-black text-[14px] my-[10px]"
                onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}
                value={formData.password}
              />
              <span
                className="absolute top-[180px] font-[500] right-[30px] cursor-pointer text-[12px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
              {/* <div className="flex gap-[20px] my-[15px] text-[12px]">
                <label htmlFor="gender" className="mr-[20px]">
                  I shop for
                </label>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="accent-slate-800 cursor-pointer"
                />
                <span>Men</span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="accent-slate-800 cursor-pointer"
                />
                <span>Women</span>
                <input
                  type="radio"
                  name="gender"
                  id="gender"
                  className="accent-slate-800 cursor-pointer"
                />
                <span>All</span>
              </div> */}
              {/* <div className="flex gap-[20px] my-[30px] text-[12px] align-middle justify-between">
                <input
                  type="checkbox"
                  className="accent-slate-800 cursor-pointer mr-[20px]"
                />
                <span>
                  <strong>Yes,</strong> sign me up to the Frank And Oak
                  newsletter to never miss out on product launches and exclusive
                  promotions.
                </span>
              </div> */}
              <button
                type="button" className="w-full h-[40px] bg-black text-white"
              >
                Genrate OTP
              </button>
            </form>
          </div>
        ) : (
          <form
            method="post"
            className="p-[10px] flex flex-col gap-[20px] relative"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-[10px] focus:outline-none w-full border border-black text-[14px]"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="p-[10px] focus:outline-none w-full border border-black text-[14px]"
            />
            <span
              className="absolute top-[85px] font-[500] right-[30px] cursor-pointer text-[12px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
            <Link href="./account/login/recover">
              <span className="underline font-[500] text-[14px] cursor-pointer">
                Forgot Password?
              </span>
            </Link>
            <button className="w-full h-[40px] bg-black text-white">
              Log In
            </button>
          </form>
        )}

        <div className="w-[95%] mx-auto border-t-[1px] mt-[20px] relative">
          <span className="text-[12px] absolute top-[-12px] left-[50%] translate-x-[-50%] bg-white w-[80px] text-center">
            Social login
          </span>
          <div className="w-full flex gap-[20px] p-[20px]">
            <button className="border border-black h-[40px] w-[50%] text-[14px] font-[500] grid grid-cols-[auto_3fr] place-content-center px-[10px]">
              <BiLogoFacebook className=" text-[20px]" />

              <span>Sign in with Facebook</span>
            </button>
            <button className="border border-black h-[40px] w-[50%] text-[14px] font-[500] grid grid-cols-[auto_3fr] place-content-center px-[10px]">
              <SiGoogle className="text-[18px]" />
              <span>Sign in with Google</span>
            </button>
          </div>
        </div>
        <div className="w-[95%] mx-auto border-t-[1px] my-[30px] relative mb-[50px] ">
          <span className="block text-[12px] absolute top-[-12px] left-[50%] translate-x-[-50%] bg-white text-center">
            {signUp ? (
              <span className="text-[10px] w-full">
                By joining, you agree to Frank And Oak’s Terms & Conditions and
                Privacy Policy and to receive Frank And Oak’s electronic
                communications.
              </span>
            ) : (
              "Create an account"
            )}
          </span>
          <span
            className={
              signUp ? "hidden" : "text-[12px] text-center block my-[20px]"
            }
          >
            <strong>Don&apos;t have an account</strong>{" "}
            <span
              className="border-b-[1px] border-black ml-[10px] cursor-pointer"
              onClick={() => setSignUp(true)}
            >
              {" "}
              Sign up <FaArrowRight className="inline-block" />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;