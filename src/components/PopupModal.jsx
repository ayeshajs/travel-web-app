import React from "react";

const PopupModal = () => {
  return (
    <>
      <div className="bg-white/70 fixed top-24 right-24 opacity-100 z-50 rounded-lg border border-green-500 border-dashed backdrop-blur">
        <nav className="grid items-center gap-1">
          <li className="grid items-center py-2.5 px-5 hover:bg-green-500 hover:text-white list-none first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg">
            <a href="#">Places to stay</a>
          </li>
          <li className="grid items-center py-2.5 px-5 hover:bg-green-500 hover:text-white list-none first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg">
            <a href="#">Experiences</a>
          </li>
          <li className="grid items-center py-2.5 px-5 hover:bg-green-500 hover:text-white list-none first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg">
            <a href="#">Online Business</a>
          </li>
          <li className="grid items-center py-2.5 px-5 hover:bg-green-500 hover:text-white list-none first:rounded-tl-lg first:rounded-tr-lg last:rounded-bl-lg last:rounded-br-lg">
            <a href="#">Become a host</a>
          </li>
        </nav>
      </div>
    </>
  );
};

export default PopupModal;
