import React from "react";

export default function Layout({ children }) {
  return (
    <div className="custom-scrollbar">
      <div className="bg-[#0F172A] py-4 max-w-[100%] w-[100%] ">{children}</div>
    </div>
  );
}
