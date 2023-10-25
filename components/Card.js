import Image from "next/image";
import React from "react";

export default function Card({ img, title, desc, title_sec, cardsArray }) {
  return (
    <div className="flex-1 text-center max-w-[100%] w-[100%] bg-[#1E293B] shadow-xl border border-[#334155] p-10 rounded-xl my-10 ">
      <Image className="w-[100px] max-w-[100%] mx-auto" src={img} />
      <h3 className="text-[16px] font-medium pt-8 pb-2">{title}</h3>
      <p className="py-2 text-[16px]">{desc}</p>
      <h4 className="pt-1 pb-1 text-teal-600">{title_sec}</h4>
      {cardsArray.map((i) => (
        <p className="text-gray-400 font-normal py-1">{i}</p>
      ))}
    </div>
  );
}
