import React from "react";
import Navbar from "../navbar";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import Footer from "../footer";

export default function Portfolio() {
  const deved = require("../../public/images/dev-ed-wave.png");
  return (
    <>
      <Navbar />
      <div className="max-w-[100%] md:w-[73.3%] px-[20px] text-gray-300 mx-auto h-full mt-[50px]">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-400 text-transparent bg-clip-text  ">
            <h2 className="font-medium text-5xl">Hassan Khan</h2>
          </div>
          <h3 className="mt-2 text-gray-300 text-[21px] font-semibold font-mulish ">
            Web & App Developer.
          </h3>
          <p className="text-gray-300 leading-8 mx-auto max-w-[100%] w-[340px] mt-4 text-[18px] ">
            Freelancer providing services for pragramming. Join me down below
            and let's get cracking!
          </p>
          <div className="text-5xl flex flex-row items-center justify-center gap-10 md:gap-16 text-zinc-500 transition-all rounded-full cursor-pointer mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100070670619148"
              target="_blank"
            >
              <BsFacebook className="hover:text-zinc-300 transition-all " />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan-khanmv-a8b382260/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-zinc-300 transition-all " />
            </a>
            <a href="https://github.com/mhassankhanw3" target="_blank">
              <AiFillGithub className="hover:text-zinc-300 transition-all" />
            </a>
          </div>
          <div className="mx-auto flex items-center justify-center bg-gradient-to-b from-zinc-700 to-gray-900 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-80 md:w-80">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="mt-20 max-w-[100%] md:w-[70%] mb-10 ">
          <h3 className="text-3xl py-1  ">Services I offer</h3>
          <p className="text-md py-2 leading-6 ">
            As a seasoned developer, my journey has been marked by diverse
            experiences and successful ventures. Through{" "}
            <span className="text-teal-500">internships</span>, and
            collaborative projects, I have honed my skills to deliver
            exceptional digital products tailored for both business and consumer
            needs.
          </p>
          <h3 className="text-2xl mt-10 mb-4 ">
            My comprehensive range of services includes:
          </h3>
          <p className="mt-1">
            <span className="font-bold">Web and Mobile App Development: </span>
            Proficient in <span className="text-teal-500">
              JavaScript
            </span>, <span className="text-teal-500">ReactJS</span>,
            <span className="text-teal-500"> Next.js</span>, and{" "}
            <span className="text-teal-500"> React Native</span>, I specialize
            in crafting seamless and user-centric web and mobile applications.
          </p>
          <p className="mt-1">
            <span className="font-bold">Brand Design: </span>
            With a keen eye for aesthetics and a creative mindset, I offer brand
            design services that resonate with your audience and embody your
            unique identity.
          </p>
        </div>
        <div className="lg:flex flex-wrap md:gap-10 w-[100%]">
          <div className="flex-1 text-center max-w-[100%] w-[100%] box p-10 rounded-xl my-10 ">
            <img
              className="w-[140px] max-w-[100%] mx-auto"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/design-QXgcSyXZ3vPlscE.png"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs and vedios suited for your needs
              following core design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-400 py-1">Canva</p>
            <p className="text-gray-400 py-1">Figma</p>
            <p className="text-gray-400 py-1">Filmora</p>
          </div>
          <div className="flex-1 text-center max-w-[100%] w-[100%] box p-10 rounded-xl my-10">
            <img
              className="w-[140px] max-w-[100%] mx-auto"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/code-g8R6w9xBWrol4wc.png"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600">Development Tools I Use</h4>
            <p className="text-gray-400 py-1">HTML, CSS, JavaScript</p>
            <p className="text-gray-400 py-1">ReactJS, Next.js</p>
            <p className="text-gray-400 py-1">React Native</p>
            <p className="text-gray-400 py-1">Version Control (Git)</p>
          </div>
          <div className="flex-1 text-center max-w-[100%] w-[100%] box p-10 rounded-xl my-10 ">
            <img
              className="w-[140px] max-w-[100%] mx-auto"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/consulting-VS2VF3S7ZXHzWoU.png"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-gray-400 py-1">Visual Studio Code</p>
            <p className="text-gray-400 py-1">Command Line</p>
            <p className="text-gray-400 py-1">Git & GitHub</p>
            <p className="text-gray-400 py-1">VSCode Extensions</p>
          </div>
        </div>
        <div className=" max-w-[100%] md:w-[800px] ">
          <h3 className="text-3xl my-6 ">Portfolio</h3>
          <p className="mt-4 text-gray-300 font-poppins font-thin ">
            As a web and app developer, I possess a diverse skill set in
            programming languages and a commitment to delivering exceptional
            user experiences through innovative solutions.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-[32px]">My Latest Work</h2>
          <p className="font-poppins font-thin">
            Recently I was working on Ecommerce project for my practicing.
          </p>
          <h4 className="mt-4 text-[18px]">Tools I used in this project:</h4>
          <span className="font-poppins font-thin">
            <span className="text-teal-400">Nextjs</span>,{" "}
            <span className="text-teal-400"> Database (MongoDB)</span>,
            <span className="text-teal-400"> NextAuth</span>,
            <span className="text-teal-400"> Tailwindcss</span>,
            <span className="text-teal-400"> AntDesign</span>
          </span>
          <span className="block">
            Proper Admin and front End setup in this project .
          </span>
        </div>
        <div className="flex flex-col gap-10 py-10 mt-4 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-xl object-cover"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/ecommerrcefront-puCqTbgrwdFqSGb.png"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/screenshot-2023-07-25-191222-2t0tt3Daeta3SRo.png"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/screenshot-2023-07-25-191331-AKiMPYcsr2COICj.png"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              src="https://d5hdtqvs98ocz.cloudfront.net/cdn/asdd/screenshot-2023-07-25-191403-04vY3JrwW5Qs2Dx.png"
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              src=""
              layout="responsive"
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              src=""
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="md:w-[73.3%] w-[100%] mx-auto">
        <Footer />
      </div>
    </>
  );
}
