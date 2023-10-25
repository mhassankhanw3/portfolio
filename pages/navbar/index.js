import Link from "next/link";
import React from "react";
// import portfolio from "../../components/portfolio/index";
import { AiFillLinkedin } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="flex flex-row flex-wrap items-center justify-between bg-[#1E293B] shadow-xl border border-[#334155] rounded-2xl py-[10px] max-w-[100%] md:px-10 px-10 md:w-[70%] mx-auto ">
      <div>
        <a
          href="/"
          className="text-gray-300 text-[16px] leading-tight cursor-pointer font-semibold font-poppins"
        >
          hassankhanw3.
        </a>
      </div>
      {/* <div>
        <ul className="flex flex-row flex-wrap items-center gap-5 justify-center">
          <li>
            <Link href="/" legacyBehavior>
              <a className="font-poppins text-gray-300 hover:text-gray-200 transition-all ">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a
                href="/about"
                className="font-poppins text-gray-300 hover:text-gray-200 transition-all "
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a
                href="/"
                className="font-poppins text-gray-300 hover:text-gray-200 transition-all "
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" legacyBehavior>
              <a className="font-poppins text-gray-300 hover:text-gray-200 transition-all ">
                Portfolio
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" legacyBehavior>
              <a
                href="/"
                className="font-poppins text-gray-300 hover:text-gray-200 transition-all "
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div> */}
      <a
        href="https://www.linkedin.com/in/hassan-khan-0b0508233/"
        target="_blank"
        className="bg-[#475569] hover:bg-[#334155] py-2 px-4 flex items-center justify-center gap-1 rounded-[6px] text-gray-200 transition-all duration-400   "
      >
        let's Connect{" "}
      </a>
    </nav>
  );
}
