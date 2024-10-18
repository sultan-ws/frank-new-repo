"use client";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { BsHeart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Offcanvas from "./Offcanvas";
const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  return (
    <header className="w-full h-[50px] border-b grid grid-cols-[10%_70%_20%] p-[0_30px] justify-between fixed top-0 z-50 bg-white">
      <div>
        <Link href="/">
          <span className="font-extrabold flex h-full items-center justify-center cursor-pointer ">
            Frank and Oak
          </span>
        </Link>
      </div>
      <div>
        <ul className="list-none w-full flex h-full items-center gap-[25px] px-[25px] ">
          <li className="text-[#ed2e00] cursor-pointer">The Stockroom Sale</li>
          <li className=" cursor-pointer">Women</li>
          <li className=" cursor-pointer">Men</li>
          <li className=" cursor-pointer">Our Story</li>
        </ul>
      </div>
      <div>
        <ul className="list-none w-full flex h-full items-center justify-end gap-[25px]  px-[20px]">
          <li className="cursor-pointer text-[20px]">
            <GoSearch />
          </li>
          <li className="cursor-pointer text-[20px]">
            <VscAccount onClick={() => setShowLogin(true)} />
          </li>
          <li className="cursor-pointer text-[20px]">
            <BsHeart />
          </li>
          <li className="cursor-pointer text-[20px]">
            <IoBagOutline onClick={() => setShowOffcanvas(true)} />
          </li>
        </ul>
      </div>
      {/* Login Modal */}
      <div
        className={
          showLogin
            ? "w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] z-50 p-0 m-0 absolute"
            : "hidden"
        }
      >
        <LoginForm close={setShowLogin} />
      </div>
      {/* Offcanvas */}
      <div
        className={
          showOffcanvas
            ? "w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)] z-50 p-0 m-0 absolute"
            : "hidden"
        }
      >
        <Offcanvas close={setShowOffcanvas} />
      </div>
    </header>
  );
};

export default Header;
