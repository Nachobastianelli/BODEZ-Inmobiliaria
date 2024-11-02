import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InfoHome from "../infoHome/InfoHome";

const CardDetail = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();

  const {
    id,
    title,
    location,
    price,
    bedrooms,
    bathrooms,
    propertyType,
    description,
    status,
    saleType,
    imageUrl,
  } = locationHook.state || {};

  return (
    <>
      <div className=" mx-auto flex flex-col text-black w-[95%] xm:w-[45%] footer:w-[65%] xxl:w-[40%]">
        <div className="flex m-5 justify-center flex-col sm:flex-row ">
          <div className="sm:w-[500px] flex-col">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h2 className="text-gray-400 mt-2">{location}</h2>
          </div>
          <div className="text-2xl font-semibold sm:w-[500px] items-center sm:items-start flex justify-start sm:justify-end mt-2 sm:m-0">
            <h1>{price}</h1>
          </div>
        </div>
        <div>
          <picture>
            <img
              src={imageUrl}
              alt="FotoDeLaCasa"
              className="max-w-[900px] w-full  mx-auto object-cover mt-10"
            />
          </picture>
        </div>
        <hr className="border-gray-400 mt-20" />
        <div className=" mx-auto mt-20">
          <InfoHome
            baths={bathrooms}
            beds={bedrooms}
            description={description}
            id={id}
            state={status}
            type={saleType}
            key={id}
            m2={1200}
            createdAt={2011}
            updatedAt={"Now"}
          />
        </div>
        <hr className="border-gray-400 mt-20" />
      </div>
    </>
  );
};

export default CardDetail;
