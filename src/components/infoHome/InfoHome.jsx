import { div } from "framer-motion/client";
import React from "react";
import {
  IconHomeFilled,
  IconCalendar,
  IconMeterSquare,
  IconBathFilled,
  IconPointFilled,
  IconBedFilled,
} from "@tabler/icons-react";

const InfoHome = ({
  state,
  beds,
  baths,
  m2,
  type,
  createdAt,
  description,
  id,
  updatedAt,
}) => {
  return (
    <>
      <div className=" bg-transparent text-black max-w-[916px]">
        <div className="flex sm:flex-row flex-col   w-[100%] footer:w-[100%] gap-7 footer:gap-32   ">
          <div className="sm:flex sm:flex-col gap-4 sm:justify-start grid grid-cols-2 xxs:grid-cols-3  mx-auto">
            <div className="flex items-center  gap-3">
              <IconMeterSquare stroke={2} size={30} />
              <p className="font-semibold ">{m2} sqft</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconBathFilled stroke={2} size={30} />
              <p className="font-semibold truncate ">{baths} Bath</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconBedFilled stroke={2} size={30} />
              <p className="font-semibold truncate ">{beds} Beds</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconCalendar stroke={2} size={30} />
              <p className="font-semibold truncate ">Built in {createdAt}</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconHomeFilled stroke={2} size={30} />
              <p className="font-semibold truncate">{type}</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconPointFilled stroke={2} size={30} />
              <p className="font-semibold truncate">{state}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full max-w-[100%]">
            <div className="flex items-start  leading-10 ">
              <p>{description}</p>
            </div>
            <div className="flex justify-around">
              <p className="flex justify-center">ID: {id} </p>
              <p className="flex justify-center">Created at: {createdAt}</p>
              <p className="flex justify-center">Updated at: {updatedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHome;
