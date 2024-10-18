import React from "react";

const page = () => {
  return (
    <div className="mt-[50px] p-[10px] box-border">
      <form
        method="post"
        className="w-[600px] mx-auto my-[10px] p-[20px] box-border"
      >
        <h1 className="text-[30px] my-[5px]">Forgot Password?</h1>
        <span className="text-[14px] my-[15px] leading-[1.3em] tracking-tighter">
          Please enter your email below and we will send you a link to reset
          your password.
        </span>
        <label
          htmlFor="email"
          className="block text-[13px] mt-[10px] font-[600]"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-black focus:outline-none text-[14px] w-full p-[10px]"
        />
        <button className="bg-black text-white h-[40px] w-[150px] my-[20px] text-[14px]">
          Send
        </button>
      </form>
    </div>
  );
};

export default page;
