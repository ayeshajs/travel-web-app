import React, { useEffect, useState } from "react";
import {
  GlobeAsiaAustraliaIcon,
  Bars4Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import PopupModal from "./PopupModal";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [popupModalState, setPopupModalState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 100) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 right-0 opacity-100 z-40 ${
          navState ? "bg-white/25 backdrop-blur-md top-0 py-5 border-b border-black/20" : "bg-transparent top-11"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between app-container">
          <a href="/" className="flex items-center">
            <img src={logo} alt="logo/img" className="w-32 h-9" />
          </a>
          <ul className="flex items-center gap-7">
            <li className="hidden lg:flex items-center">
              <a
                href="#"
                className={`${
                  navState ? "text-black" : "text-white"
                } text-sm md:text-lg`}
              >
                Places to stay
              </a>
            </li>
            <li className="hidden lg:flex items-center">
              <a
                href="#"
                className={`${
                  navState ? "text-black" : "text-white"
                } text-sm md:text-lg`}
              >
                Experiences
              </a>
            </li>
            <li className="hidden lg:flex items-center">
              <a
                href="#"
                className={`${
                  navState ? "text-black" : "text-white"
                } text-sm md:text-lg`}
              >
                Online Business
              </a>
            </li>
          </ul>
          <ul className="flex items-center gap-5">
            <li className="hidden lg:flex items-center">
              <a
                href="#"
                className={`${
                  navState ? "text-black" : "text-white"
                } text-sm md:text-lg`}
              >
                Become a host
              </a>
            </li>
            <li className="grid items-center">
              <a href="#">
                <GlobeAsiaAustraliaIcon
                  className={`w-7 h-7 ${
                    navState ? "text-black" : "text-white"
                  }`}
                />
              </a>
            </li>
            <li className="grid items-center">
              <button
                className={`flex items-center gap-2 ${
                  navState ? "bg-black" : "bg-white"
                } p-1.5 rounded-full`}
                onClick={()=> setPopupModalState(!popupModalState)}
              >
                <Bars4Icon
                  className={`flex lg:hidden w-7 h-7 ${
                    navState ? "text-white" : "text-black"
                  }`}
                />
                <UserCircleIcon
                  className={`w-7 h-7 ${
                    navState ? "text-white" : "text-black"
                  }`}
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {popupModalState && <PopupModal />}
    </>
  );
};

export default Navbar;
