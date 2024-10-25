import React from "react";
import logoCrema from "../../assets/BodezLogoCrema.png";
import logo from "../../assets/BodezLogo.png";

const Footer = () => {
  return (
    <div className="relative bottom-0 py-8 footer:py-5 w-full bg-[#330000] bg-opacity-95 flex flex-col footer:flex-row justify-center items-center gap-8 footer:gap-48 ">
      <div className="flex flex-col gap-6 items-center">
        <div>
          <img src={logoCrema} alt="" className="size-40 my-0" />
        </div>
        <div>
          <h1 className="-tracking-[-0.55em] text-[#FFEFD1] font-extralight text-2xl jomolhari-regular">
            BODEZ
          </h1>
        </div>
      </div>
      <div>
        <p className="text-[#FFEFD1] max-w-[80%] m-auto sm:max-w-[450px] text-md ">
          Asesoramiento inmobiliario integral - Jurídico - Arquitectónico
          brindado por profesionales especializados. <br />
          <br />
          <div className=" border border-b-[#FFEFD1]"></div>
          <br />
          Contacto Cel.:341-6059288 - bodezconsultora@gmail.com Gruning Rosas
          9002 - Rosario (C.P. 2000)
        </p>
      </div>
    </div>
  );
};

export default Footer;
