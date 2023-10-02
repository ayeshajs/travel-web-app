import React from "react";
import { icon1, icon2, icon3 } from "../utils/asset";

const Aboutus = () => {
  const chooseItems = [
    {
      icon: icon1,
      title: "Best Price",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: icon2,
      title: "Property Insurance",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: icon3,
      title: "Quick Process",
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div className="app-container grid items-center gap-11">
          <div className="flex items-center justify-center flex-col gap-5 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Why People Choose Us?</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto gap-11">
            {chooseItems.map((value, index) => (
              <div
                key={index}
                className="ring-1 ring-slate-100 shadow-md shadow-slate-100 bg-slate-100/10 px-5 py-7 rounded-lg grid items-center justify-items-center text-center gap-5"
              >
                <img
                  src={value.icon}
                  alt={value.title}
                  className="w-14 h-14 object-contain"
                />
                <h1 className="text-2xl font-bold text-black">{value.title}</h1>
                <p className="">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
