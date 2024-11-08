import React from "react";
import logoCrema from "../../assets/BodezLogoCrema.png";
import logo from "../../assets/BodezLogo.png";

const Footer = () => {
  return (
    <div className="relative bottom-0 py-8 footer:py-5 w-full bg-[#330000] bg-opacity-100 flex flex-col footer:flex-row justify-center items-center gap-8 footer:gap-48 z-50 ">
      <div className="flex flex-col gap-6 items-center">
        <div>
          <img src={logoCrema} alt="Bodez logo" className="size-40 my-0" />
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
          brindado por profesionales especializados.
        </p>
        <br />
        <hr className="bg-[#FFEFD1] h-0.5 border-0 w-3/4 m-auto" />
        <br />
        <p className="text-[#FFEFD1] max-w-[80%] m-auto sm:max-w-[450px] text-md ">
          Contacto Cel.: 341-6059288 - bodezconsultora@gmail.com{" "}
          <a
            className="hover:underline underline-offset-4 "
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com.ar/maps/@-32.9103358,-60.7602196,3a,75y,327.71h,82.38t/data=!3m7!1e1!3m5!1s5aB9mswuS8GkzxsvJPoC9A!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D7.619361412533124%26panoid%3D5aB9mswuS8GkzxsvJPoC9A%26yaw%3D327.70625377903036!7i16384!8i8192?coh=205410&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D"
          >
            Gruning Rosas 9002 - Rosario (C.P. 2000)
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
