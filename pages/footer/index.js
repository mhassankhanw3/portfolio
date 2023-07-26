import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex w-[100%] md:px-0 px-[10px] mx-auto max-w-[100%] flex-wrap md:mb-0 mb-2 flex-row items-center justify-center md:justify-between ">
      <div>
        <p className="text-zinc-400 flex flex-row flex-wrap justify-center md:justify-normal text-center">
          here you can find me:{" "}
          <span className="text-zinc-200 md:ml-[4px]">
            {" "}
            mhassankhanw3@gmail.com.
          </span>
        </p>
      </div>
      <div className="flex flex-row items-center gap-4 md:my-0 my-4 md:justify-normal mx-auto md:mx-0 justify-center ">
        <a
          href="https://www.facebook.com/profile.php?id=100070670619148"
          target="_blank"
        >
          <FaFacebookF className="text-gray-500 hover:text-gray-300 hover:text-[20px] transition-all text-[18px]" />
        </a>
        {/* <a href="https://www.instagram.com/hassankhanw3/" target="_blank">
          <BsInstagram className="text-gray-500 hover:text-gray-300 hover:text-[20px] transition-all text-[18px]" />
        </a> */}
        <a
          href="https://www.linkedin.com/in/hassan-khanmv-a8b382260/"
          target="_blank"
        >
          <FaLinkedinIn className="text-gray-500 hover:text-gray-300  hover:text-[20px] transition-all text-[18px]" />
        </a>
        <a href="https://github.com/mhassankhanw3" target="_blank">
          <BsGithub className="text-gray-500 hover:text-gray-300 hover:text-[20px] transition-all text-[18px]" />
        </a>
      </div>
    </div>
  );
}
