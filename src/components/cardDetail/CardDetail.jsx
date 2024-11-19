import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import InfoHome from "../infoHome/InfoHome";
import Map from "../map/Map";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import DeleteProperty from "../deleteProperty/DeleteProperty";
import { API_BASE_URL } from "../../api";
import useToast from "../../hooks/useToast";
import UpdateProperty from "../updateProperty/UpdateProperty";

const CardDetail = () => {
  const locationHook = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

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
    const cleanedEntity = JSON.parse(JSON.stringify(updatedEntity));
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
            <h1>{`$${value}`}</h1>
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
        <div>
          <picture>
            <img
              src={
                imagePaths[0] != "string"
                  ? imagePaths[0]
                  : "https://images.milenio.com/cm_IBp9n8hYdIiXP7JwfMN3jN9I=/942x532/uploads/media/2020/03/20/comprar-casa-campo-posibilidades-debes.jpg"
              }
              alt="FotoDeLaCasa"
              className=" w-full  mx-auto object-cover mt-10 max-w-[1103px]"
            />
          </picture>
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
