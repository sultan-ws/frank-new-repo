"use client";
import Image from "next/image";
import React from "react";
import { CiInstagram, CiTwitter, CiMail } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full p-[70px_50px] bg-black text-white grid grid-cols-[15%_15%_15%_15%_auto] gap-[30px]">
      <ul className="list-none w-full flex flex-col gap-[30px] p-[5px] box-border ">
        <li className="object-contain">
          <Image
            src="/Logo_Footer.png"
            alt="Logo_footer"
            width={80}
            height={80}
          />
        </li>
        <li className="flex gap-[10px] ">
          <CiInstagram className="text-[25px]" />
          <SlSocialFacebook className="text-[25px]" />
          <CiTwitter className="text-[25px]" />
          <IoLogoPinterest className="text-[25px]" />
          <CiMail className="text-[25px]" />
          <FaXTwitter className="text-[25px]" />
        </li>
        <li className="object-contain">
          <Image
            src="/B_Corporation.png"
            alt="certification"
            width={80}
            height={80}
          />
        </li>
      </ul>
      <ul className="list-none flex flex-col gap-[20px] text-[13px]">
        <span className="text-[18px]"> Our Story</span>
        <li>Who we are</li>
        <li>Sustainable practices</li>
        <li>Design Ideology </li>
        <li>Fabrics</li>
        <li>Circular denim™</li>
        <li>Partners and factories</li>
      </ul>
      <ul className="list-none flex flex-col gap-[20px] text-[13px]">
        <span className="text-[18px]">Discover</span>
        <li>Gift Cards</li>
        <li>Frank Rewards</li>
        <li>Give $15, Get $15</li>
        <li>Affiliate</li>
        <li>Blog</li>
        <li>Work with us</li>
        <li>Our Stores</li>
      </ul>
      <ul className="list-none flex flex-col gap-[20px] text-[13px]">
        <span className="text-[18px]">Customer Care</span>
        <li>Shipping Information</li>
        <li>Returns & Exchanges</li>
        <li>Coupon Codes</li>
        <li>F.A.Q. </li>
        <li>Terms & Conditions</li>
        <li>Refund Policy</li>
        <li>Privacy policy</li>
        <li>Accessibility Statement</li>
        <li> Customer Data Requests</li>
      </ul>
      <div className="w-full">
        <span className="block text-[18px] mb-[10px]">Stay in touch</span>
        <p className="text-[12px] mb-[20px] box-border">
          Join our newsletter and stay in the know about new collections, outfit
          inspiration, sales, and more.
        </p>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="border bg-[#1f2322] p-[12px] m-[8px_0px] w-full text-[14px] focus:outline-none"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border bg-[#1f2322] p-[12px] m-[8px_0px] w-full text-[14px] focus:outline-none"
          />
          <div className="flex w-full flex-row  text-[13px] my-[10px] items-center justify-evenly">
            <span>I shop for</span>
            <input
              type="radio"
              value="men"
              name="shopFor"
              className="accent-[#fff] w-[16px] h-[16px] cursor-pointer"
            />
            <span>Women</span>
            <input
              type="radio"
              value="women"
              name="shopFor"
              className="accent-[#fff] w-[16px] h-[16px] cursor-pointer"
            />
            <span>Men</span>
            <input
              type="radio"
              value="all"
              name="shopFor"
              className="accent-[#fff] w-[16px] h-[16px] cursor-pointer"
            />
            <span>All</span>
          </div>
          <div className="w-full p-[5px] my-[20px]">
            <button className="w-full p-[10px] border text-[13px]">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Footer;
