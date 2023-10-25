import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { SiReplit } from "react-icons/si";
import { profile } from "../../assets/images/portfolioProfile.jpeg";

export default function Hero() {
  const img = require("../../assets/images/profilepic.jpeg");
  return (
    <div className="lg:flex h-screen items-center gap-10">
      {/* Mobile View */}
      <div className="flex-1 text-center md:text-left md:shadow-none p-10 rounded-xl my-10 ">
        {/* Image */}
        <div className="md:hidden mx-auto mb-6 bg-gradient-to-b from-zinc-800 rounded-full h-64 w-64 md:w-80 md:h-80 relative overflow-hidden">
          <img
            src={"../assets/portfolioProfile.jpeg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Content */}
        <div>
          <h2 className="text-[22px] text-slate-300 font-poppins font-semibold mb-0 pb-0 underline">
            Hello, it's me
          </h2>
          <h2 className="md:text-[44px] text-[26px] text-slate-200 font-poppins font-semibold ml-2">
            Hassan Khan
          </h2>
          <div className="bg-gradient-to-r from-pink-900 to-purple-400 text-transparent bg-clip-text">
            <span className="md:text-[34px] text-[24px] font-poppins font-semibold text-gray-300 pt-0">
              I am
            </span>{" "}
            <span className="md:text-[34px] text-[22px] font-poppins font-semibold">
              | Web & App{" "}
            </span>
            <h2 className="md:text-[28px] text-[20px] md:ml-[135px] ml-10  font-poppins font-semibold -mt-[10px]">
              Developer |
            </h2>
          </div>
          <p className="mt-4 text-gray-300 font-poppins font-thin max-w-[100%] md:w-[460px]">
            As a Web and App developer, I possess a diverse skill set in
            programming languages and a commitment to delivering exceptional
            user experiences through innovative solutions.
          </p>
          <div className="mt-3 flex flex-row items-center md:justify-normal justify-center md:mx-0 mx-auto gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=100070670619148"
              target="_blank"
              className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] transition-all hover:shadow-gray-950 shadow-xl border border-[#334155] "
            >
              <FaFacebookF className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
            </a>
            <a
              href="https://replit.com/@mhassankhanw3"
              target="_blank"
              className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] p-1 transition-all hover:shadow-gray-950 shadow-xl border border-[#334155] "
            >
              <SiReplit className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-khan-0b0508233/"
              target="_blank"
              className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] p-1 transition-all hover:shadow-gray-950 shadow-xl border border-[#334155] "
            >
              <FaLinkedinIn className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
            </a>
            <a
              href="https://github.com/mhassankhanw3"
              target="_blank"
              className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] p-1 transition-all hover:shadow-gray-950 shadow-xl border border-[#334155] "
            >
              <BsGithub className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
            </a>
          </div>
          <div className="mt-14">
            {/* Resume link */}
            <Link href="/portfolio" legacyBehavior>
              <a className="bg-[#1E293B] hover:bg-gray-700 border border-[#334155] transition-all rounded-lg py-3 px-6 text-gray-300 font-poppins">
                Portfolio
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="flex-1 hidden md:block">
        <div className="mx-auto bg-gradient-to-b from-gray-950 rounded-full  relative mr-0 mt-0 overflow-hidden md:h-80 md:w-80">
          <Image src={img} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>

    // <div className="flex flex-row-reverse md:flex-row flex-wrap items-center justify-between max-w-[100%] w-[100%] my-48  mx-auto">
    //   <div className="">
    //     <div>
    //       <h2 className="text-[22px] text-slate-300 font-poppins font-semibold mb-0 pb-0 underline ">
    //         Hello, it's me
    //       </h2>
    //       <h2 className="text-[44px] text-slate-200 font-poppins font-semibold ml-2">
    //         Hassan Khan
    //       </h2>
    //       <div className="bg-gradient-to-r from-pink-900 to-purple-400 text-transparent bg-clip-text">
    //         <span className="text-[34px] font-poppins font-semibold text-gray-300 pt-0 ">
    //           I am
    //         </span>{" "}
    //         <span className="text-[34px] font-poppins font-semibold">
    //           | Web & App{" "}
    //         </span>
    //         <h2 className="text-[28px] ml-[135px] font-poppins font-semibold -mt-[10px]">
    //           Developer |
    //         </h2>
    //       </div>
    //       <p className="mt-4 text-gray-300 font-poppins font-thin max-w-[100%] md:w-[460px] ">
    //         As a web and app developer, I possess a diverse skill set in
    //         programming languages and a commitment to delivering exceptional
    //         user experiences through innovative solutions.{" "}
    //       </p>
    //     </div>
    //     <div className="mt-3 flex flex-row items-center gap-2">
    //       <a
    //         href="https://www.facebook.com/profile.php?id=100070670619148"
    //         target="_blank"
    //         className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] transition-all hover:shadow-gray-800 shadow-xl border-2 border-zinc-700 "
    //       >
    //         <FaFacebookF className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
    //       </a>
    //       <a
    //         href="https://www.instagram.com/hassankhanw3/"
    //         target="_blank"
    //         className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] transition-all hover:shadow-gray-800 shadow-xl border-2 border-zinc-700 "
    //       >
    //         <BsInstagram className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
    //       </a>
    //       <a
    //         href="https://www.linkedin.com/in/hassan-khanmv-a8b382260/"
    //         target="_blank"
    //         className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] transition-all hover:shadow-gray-800 shadow-xl border-2 border-zinc-700 "
    //       >
    //         <FaLinkedinIn className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
    //       </a>
    //       <a
    //         href="https://github.com/mhassankhanw3"
    //         target="_blank"
    //         className="rounded-[50px] flex flex-row items-center justify-center w-[40px] h-[40px] transition-all hover:shadow-gray-800 shadow-xl border-2 border-zinc-700 "
    //       >
    //         <BsGithub className="text-zinc-400 shadow-zinc-700 shadow-2xl text-[16px]" />
    //       </a>
    //  </div>
    //     <div className="mt-14">
    //       <Link href="/" legacyBehavior>
    //         <a className="bg-gradient-to-l from-[#282828] to-zinc-600 shadow-zinc-700 shadow-2xl hover:shadow-xl transition-all rounded-[50px] py-3 px-6 text-gray-300 font-poppins ">
    //           Resume
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="">
    //     <div className="mx-auto bg-gradient-to-b from-zinc-800 rounded-full w-80 h-80 relative mr-0 mt-0 overflow-hidden md:h-80 md:w-80">
    //       <Image src={img} layout="fill" objectFit="cover" />
    //     </div>
    //   </div>
    // </div>
  );
}
