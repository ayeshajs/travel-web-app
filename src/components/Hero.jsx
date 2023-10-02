import React from "react";
import { heroimg } from "../utils/asset";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="relative flex items-center">
        <img
          src={heroimg}
          alt="hero/img"
          className="h-[65vh] md:h-[75] lg:h-[95vh] w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 right-0 h-[65vh] md:h-[75] lg:h-[95vh] flex items-center justify-center bg-gradient-to-b from-black/20 to-slate-900/10">
        <div className="grid items-center justify-items-center gap-5 max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Discover A Place You'll Love To Live
          </h1>
          <p className="text-sm md:text-lg text-white">
            Find the comfort in the house with us, wants to find a home? we are
            ready to help you whole heartedly based on what you need.
          </p>
          <button
            type="button"
            className="bg-gradient-to-b from-slate-200 to-white px-7 md:px-11 py-2 rounded-lg mt-7 transition-all active:scale-110"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
