import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    status,
    saleType,
    imageUrl,
  } = locationHook.state || {};

  return (
    <>
      <div className=" mx-auto flex flex-col text-black w-[50%]">
        <div className="flex m-5 justify-center ">
          <div className="w-[500px] flex-col">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h2 className="text-gray-400 mt-2">{location}</h2>
          </div>
          <div className="text-2xl font-semibold w-[500px] items-center sm:items-start flex justify-end">
            <h1>{price}</h1>
          </div>
        </div>
        <div>
          <picture>
            <img
              src={imageUrl}
              alt="FotoDeLaCasa"
              className="w-[800px] mx-auto h-[500px] my-4"
            />
          </picture>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
