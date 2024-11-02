import React from "react";

const Header = () => {
  const styleButton =
    "relative inline cursor-pointer before:bg-red-900  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100";

  return (
    <div className="flex bg-white w-screen justify-around lg:justify-evenly items-center sm:gap-42 top-0 shadow-lg">
      <a className="flex " href="/home">
        <img
          src="https://541401084b.clvaw-cdnwnd.com/e227045f27697d1ac9f8a9900bcb2384/200000003-2b9e52b9e7/450/WhatsApp%20Image%202024-01-19%20at%2016.16.58.webp?ph=541401084b"
          alt=""
          className="size-20 "
        />
        <div className="flex flex-col my-auto ">
          <h1 className="font-bold text-lg">Bodez</h1>
          <p className="text-xs">Consultoria Juridica</p>
        </div>
      </a>
      <div className="flex  gap-8 font-semibold">
        <a className={styleButton} href="/home">
          Home
        </a>
        <a className={styleButton} href="/aboutUs">
          About us
        </a>
        <a className={styleButton} href="/login">
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
