import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InfoHome from "../infoHome/InfoHome";
import Map from "../map/Map";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import DeleteProperty from "../deleteProperty/DeleteProperty";
import { API_BASE_URL, API_BASE } from "../../api";
import useToast from "../../hooks/useToast";
import UpdateProperty from "../updateProperty/UpdateProperty";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const cleanEntity = (entity) => {
  const cleaned = {};
  for (const key in entity) {
    if (Object.prototype.hasOwnProperty.call(entity, key)) {
      const value = entity[key];
      if (typeof value !== "object" || value === null) {
        cleaned[key] = value;
      } else if (Array.isArray(value)) {
        cleaned[key] = [...value];
      } else if (
        typeof value === "object" &&
        !value.constructor.name.includes("HTML")
      ) {
        cleaned[key] = { ...value };
      }
    }
  }
  return cleaned;
};

const CustomPrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700"
    >
      <IconChevronLeft size={24} />
    </button>
  );
};

const CustomNextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-700"
    >
      <IconChevronRight size={24} />
    </button>
  );
};

const CardDetail = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const mainSliderRef = useRef(null);
  const thumbnailSliderRef = useRef(null);

  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  useEffect(() => {
    setMainSlider(mainSliderRef.current);
    setThumbnailSlider(thumbnailSliderRef.current);
  }, []);

  const [isVisibleDelete, setIsVisibleDelete] = useState(false);
  const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);

  const deleteProperty = async () => {
    navigate("/home");
    try {
      await fetch(`${API_BASE_URL}/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      showToast("la propiedad fue eliminada con exito", true);
    } catch (err) {
      showToast(err.message, false);
    }
    return;
  };

  const updateProperty = async (updatedEntity) => {
    const cleanedEntity = cleanEntity(updatedEntity);
    try {
      await fetch(`${API_BASE_URL}/property/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(cleanedEntity),
      });
      showToast("la propiedad fue actualizada con exito", true);
    } catch (err) {
      showToast(err.message, false);
    }
    return;
  };

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    asNavFor: thumbnailSliderRef.current || null,
  };

  const thumbnailSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: mainSliderRef.current || null,
  };

  const changeUpdateVisibility = () => {
    setIsVisibleUpdate(!isVisibleUpdate);
  };

  const changeDeleteVisibility = () => {
    setIsVisibleDelete(!isVisibleDelete);
  };

  const {
    id,
    name,
    description,
    value,
    bedrooms,
    bathrooms,
    rooms,
    status,
    type,
    m2,
    country,
    regionState,
    city,
    address,
    builtIn,
    listedAt,
    lastUpdatedAt,
    garage,
    floor,
    numberFloor,
    isAvailable,
    linkMap,
    imagePaths,
  } = locationHook.state || {};

  const props = locationHook.state || {};

  const priceDotted = (price) => {
    return price.toLocaleString("es-ES"); // 'es-ES' usa puntos como separador de miles
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" mx-auto flex flex-col text-black w-[95%] xm:w-[65%] newMd:w-[65%] xxl:w-[50%]">
        <div className="flex my-5 justify-center flex-col sm:flex-row ">
          <div className="sm:w-[600px] flex-col justify-start">
            <h1 className="text-3xl font-semibold sm:truncate">{name}</h1>
            <h2 className="text-gray-400 mt-2 text-lg">{`${address}, ${city}, ${regionState}, ${country}`}</h2>
          </div>
          <div className="text-3xl font-semibold sm:w-[500px] items-center sm:items-start flex justify-start sm:justify-end mt-2 sm:m-0">
            <h1>{`$${priceDotted(value)}`}</h1>
          </div>
        </div>
        <div>
          <button
            onClick={changeDeleteVisibility}
            className=" px-2 py-2 size-12 bg-red-900 fixed left-0 top-[47%] m-auto ml-2 font-semibold text-lg text-white rounded-lg hover:scale-110 duration-300 transition-all ease-in-out active:ring-2 ring-red-400 hover:bg-[#5f1e1e] active:bg-[#451616]"
          >
            <p className="mx-auto ml-1">
              <IconTrash stroke={2} />
            </p>
          </button>
          <button
            onClick={changeUpdateVisibility}
            className=" px-2 py-2 size-12 bg-red-900 fixed left-0 top-[53%] m-auto ml-2 font-semibold text-lg text-white rounded-lg hover:scale-110 duration-300 transition-all ease-in-out active:ring-2 ring-red-400 hover:bg-[#5f1e1e] active:bg-[#451616]"
          >
            <p className="mx-auto ml-1">
              <IconEdit stroke={2} />
            </p>
          </button>
        </div>
        <div className="max-w-[1103px] mx-auto ">
          <Slider {...mainSliderSettings} ref={mainSliderRef}>
            {imagePaths.map((image, index) => (
              <div key={index}>
                <picture>
                  <img
                    src={`${API_BASE}${image}`}
                    alt={`Property image ${index + 1}`}
                    className=" w-full  mx-auto object-cover mt-10 max-w-[1103px] max-h-[800px]  h-[800px]"
                  />
                </picture>
              </div>
            ))}
          </Slider>
          {/* Slider de miniaturas */}
          <div className="">
            <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
              {imagePaths.map((image, index) => (
                <div key={index} className="max-w-[1103px] w-full">
                  <img
                    src={`${API_BASE}${image}`}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-72 h-36 object-cover  mx-auto cursor-pointer"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <hr className="border-gray-400 mt-20" />
        <h1 className="flex text-2xl font-semibold mt-20 xxs:justify-start mb-20 xxs:mb-5 justify-center animate-shake">
          Descripción
        </h1>
        <div className=" mx-auto ">
          <InfoHome
            baths={bathrooms}
            beds={bedrooms}
            description={`${description}`}
            id={id}
            state={status}
            type={type}
            key={id}
            m2={m2}
            builtIn={builtIn}
            createdAt={listedAt}
            garage={garage}
            updatedAt={lastUpdatedAt}
          />
        </div>
        <hr className="border-gray-400 mt-20" />
        <div>
          <h1 className="flex text-2xl font-semibold mt-20 mb-20 xxs:mb-5 xxs:justify-start justify-center">
            Mapa
          </h1>
          <Map link={linkMap} />
          <div className="mb-20 sm:mb-0"></div>
        </div>
        {isVisibleDelete && (
          <DeleteProperty
            isVisible={isVisibleDelete}
            onClose={changeDeleteVisibility}
            DeleteProperty={deleteProperty}
          />
        )}
        {isVisibleUpdate && (
          <UpdateProperty
            isVisible={isVisibleUpdate}
            onClose={changeUpdateVisibility}
            updateProperty={updateProperty}
            props={props}
          />
        )}
      </div>
    </>
  );
};

export default CardDetail;
