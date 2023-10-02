import React from "react";
import { hostingimg } from "../utils/asset";

const Advertise = () => {
  return (
    <>
      <div className="app-container relative">
        <div className="flex items-center">
          <img
            src={hostingimg}
            alt="hosting/img"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="absolute top-1/3 left-11 grid gap-5 justify-items-start items-center">
          <h1 className="text-black font-semibold text-4xl">Try Hosting</h1>
          <p className="text-black font-normal max-w-md">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <button
            type="button"
            className="bg-gradient-to-b from-slate-900 to-gray-900 text-white px-7 py-1.5 rounded-lg shadow-sm shadow-black active:scale-110 transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Advertise;
