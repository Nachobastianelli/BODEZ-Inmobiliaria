import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const changeState = () => {
    setIsOpen(!isOpen);
  };

  const styleButton =
    "py-2 px-4 border-b border-gray-300 hover:bg-gray-300 hover:text-red-900 md:hover:text-black md:hover:bg-transparent md:border-none md:py-0 md:px-0 md:relative md:inline md:cursor-pointer md:before:bg-red-900  md:before:absolute md:before:-bottom-1 md:before:block md:before:h-[2px] md:before:w-full md:before:origin-bottom-right md:before:scale-x-0 md:before:transition md:before:duration-300 md:before:ease-in-out md:hover:before:origin-bottom-left md:hover:before:scale-x-100";

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={changeState}
        />
      )}

      <div className="flex bg-white w-screen justify-between  xxs:mx-0 xxs:justify-around md:justify-evenly items-center sm:gap-42 top-0 shadow-lg z-30 relative">
        <Link className="flex" to="/home">
          <img
            src="https://541401084b.clvaw-cdnwnd.com/e227045f27697d1ac9f8a9900bcb2384/200000003-2b9e52b9e7/450/WhatsApp%20Image%202024-01-19%20at%2016.16.58.webp?ph=541401084b"
            alt=""
            className="size-20"
          />
          <div className="flex flex-col my-auto">
            <h1 className="font-bold text-md">Bodez</h1>
            <p className="text-xs">Consultoria Juridica</p>
          </div>
        </Link>
        <button
          className="block md:hidden p-2 focus:outline-none mr-5 xxs:mr-0 border z-50 border-gray-300 rounded-md hover:bg-gray-200 hover:text-red-900 active:bg-gray-300 active:scale-95 ease-in-out duration-300"
          onClick={changeState}
        >
          <IconMenu2 stroke={2} />
        </button>
        <div
          className={`flex-col md:flex md:flex-row md:gap-8 justify-center text-center font-semibold absolute md:static top-[80px] w-full md:w-auto right-0 bg-white shadow-md md:shadow-none transition-transform duration-300 z-50 ease-in-out ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <Link to="/home" className={styleButton}>
            Home
          </Link>
          <Link to="/aboutUs" className={styleButton}>
            About Us
          </Link>
          <Link to="/login" className={styleButton}>
            Login
          </Link>
          <Link to="/box" className={styleButton}>
            Add property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
