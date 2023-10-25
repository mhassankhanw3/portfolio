import React from "react";
import Navbar from "../navbar";
import { AiFillFacebook, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Image from "next/image";
import Footer from "../footer";
import Card from "../../components/Card";

export default function Portfolio() {
  const deved = require("../../public/images/dev-ed-wave.png");
  const cardsArray = {
    designs: ["Canva", "Figma", "Filmora"],
    codes: [
      "HTML , CSS, JavaScript",
      "ReactJS, Next.js",
      "React Native",
      "Version Control (Git)",
    ],
    develop: [
      "Visual Studio Code",
      "Command Line",
      "Git & GitHub",
      "VSCode Extensions",
    ],
    tools: [
      "Nextjs, ",
      "Database (MongoDB), ",
      "NextAuth, ",
      "Tailwindcss, ",
      "AntDesign, ",
    ],
  };

  const workExp = [
    require("../../assets/images/adminOne.png"),
    require("../../assets/images/adminFour.png"),
    require("../../assets/images/adminThree.png"),
    require("../../assets/images/adminTwo.png"),
  ];
  const Skills = {
    skill: [
      {
        img: require("../../assets/images/html.png"),
        text: "HTML",
      },
      {
        img: require("../../assets/images/javascript.png"),
        text: "JavaScript",
      },
      {
        img: require("../../assets/images/react.png"),
        text: "React.js",
      },
      {
        img: require("../../assets/images/nextjs.png"),
        text: "Next.js",
      },
      {
        img: require("../../assets/images/native.png"),
        text: "React Native",
      },
      {
        img: require("../../assets/images/TailwindCss.png"),
        text: "Tailwind Css",
      },
      {
        img: require("../../assets/images/nextui.png"),
        text: "NextUI",
      },
      {
        img: require("../../assets/images/shadcn.png"),
        text: "Shadcn",
      },
      {
        img: require("../../assets/images/bootTwo.png"),
        text: "Bootstrap",
      },
    ],
  };

  const imgOne = require("../../assets/images/design.png");
  return (
    <>
      <Navbar />
      <div className="max-w-[100%] md:w-[73.3%] px-[20px] text-gray-300 mx-auto h-full mt-[50px]">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text  ">
            <h2 className="font-bold text-[60px]">Hassan Khan</h2>
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
              href="https://www.linkedin.com/in/hassan-khan-0b0508233/"
              target="_blank"
            >
              <AiFillLinkedin className="hover:text-zinc-300 transition-all " />
            </a>
            <a href="https://github.com/mhassankhanw3" target="_blank">
              <AiFillGithub className="hover:text-zinc-300 transition-all" />
            </a>
          </div>
          <div className="mx-auto flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-800 rounded-full w-64 h-64 relative overflow-hidden mt-20 md:h-80 md:w-80">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="mt-20 max-w-[100%] md:w-[70%] mb-10">
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
        <div className="lg:flex flex-wrap md:gap-4 w-[100%]">
          <Card
            img={require("../../assets/images/design.png")}
            title={"Beautiful Designs"}
            desc={
              "Creating elegant designs and vedios suited for your needs following core design theory."
            }
            title_sec="Design Tools I Use"
            cardsArray={cardsArray.designs}
          />
          <Card
            img={require("../../assets/images/code.png")}
            title={"Code your dream project"}
            desc={
              "Do you have an idea for your next great website? Let's make it a reality."
            }
            title_sec="Development Tools I Use"
            cardsArray={cardsArray.codes}
          />
          <Card
            img={require("../../assets/images/consulting.png")}
            title={"Consulting"}
            desc={
              "Are you interested in feedback for your current project? I can give you tips and tricks to level it up."
            }
            title_sec="Programming Tools I Use"
            cardsArray={cardsArray.develop}
          />
        </div>
        <div className="mb-10">
          <h2 className="font-medium text-3xl">My Skills:</h2>
          <div className="flex flex-wrap items-center sm:justify-normal max-w-full w-[90%] justify-center mt-4 gap-4">
            {Skills?.skill?.map((i) => (
              <div className="bg-[#1E293B] p-2 max-w-full w-44 flex-col items-center justify-center rounded-md border border-[#334155]">
                <div className="flex items-center">
                  <Image src={i.img} alt="" />
                  <h4 className="ml-2">{i.text}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" max-w-[100%] md:w-[800px] ">
          <h3 className="text-3xl mt-6 mb-1 ">Portfolio</h3>
          <p className="text-gray-300 font-poppins font-normal ">
            As a web and app developer, I possess a diverse skill set in
            programming languages and a commitment to delivering exceptional
            user experiences through innovative solutions.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-[32px]">My Latest Work</h2>
          <p className="font-poppins font-thin">
            I Created an Ecommerce project for my practicing.
          </p>
          <h4 className="mt-4 text-[18px]">Tools I used in this project:</h4>
          <span className="font-poppins font-thin">
            {cardsArray.tools.map((i) => (
              <span className="text-teal-400">{i}</span>
            ))}
          </span>
          <span className="block">
            Admin and frontend setup in this project.
          </span>
        </div>
        <div className="flex flex-col gap-4 py-10 mt-4 mb-10 lg:flex-row lg:flex-wrap">
          {workExp.map((i) => (
            <div className="basis-1/3 flex-1 transition-all p-2 hover:p-0 shadow-2xl ">
              <Image
                className="rounded-xl object-cover"
                src={i}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[73.3%] w-[100%] mx-auto">
        <Footer />
      </div>
    </>
  );
}
