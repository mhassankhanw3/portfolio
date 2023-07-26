import Link from "next/link";
import React from "react";
// import portfolio from "../../components/portfolio/index";
export default function Navbar() {
  return (
    <nav className="flex flex-row flex-wrap items-center justify-between  py-[20px] max-w-[100%] md:px-0 px-10 md:w-[70%] mx-auto ">
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
      <Link href="/portfolio" legacyBehavior>
        <a className="bg-gradient-to-l from-[#282828] to-zinc-600 hover:bg-gradient-to-r py-2 px-4 rounded-[10px] text-gray-200 transition-all duration-400   ">
          Resume
        </a>
      </Link>
    </nav>
  );
}
