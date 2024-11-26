import { div } from "framer-motion/client";
import React from "react";
import {
  IconHomeFilled,
  IconCalendar,
  IconMeterSquare,
  IconBathFilled,
  IconPointFilled,
  IconBedFilled,
  IconCarSuvFilled,
} from "@tabler/icons-react";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

const InfoHome = ({
  state,
  beds,
  baths,
  m2,
  type,
  createdAt,
  description,
  builtIn,
  id,
  updatedAt,
  garage,
}) => {
  const garageText = garage == true ? "Si" : "No";

  const customLocale = {
    ...es,
    formatDistance: (token, count, options) => {
      const translations = {
        lessThanXSeconds: `menos de ${count} segundos`,
        xSeconds: `${count} segundos`,
        halfAMinute: "30 segundos",
        lessThanXMinutes: `menos de ${count} minutos`,
        xMinutes: `${count} minutos`,
        aboutXHours: `${count} horas`,
        xHours: `${count} horas`,
        xDays: `${count} días`,
        aboutXMonths: `${count} meses`,
        xMonths: `${count} meses`,
        aboutXYears: `${count} años`,
        xYears: `${count} años`,
        overXYears: `más de ${count} años`,
        almostXYears: `casi ${count} años`,
      };

      return translations[token].replace(/^alrededor de\s/, ""); // Elimina "alrededor de"
    },
  };

  function timeAgo(dateString) {
    const date = new Date(dateString);
    return `hace ${formatDistanceToNow(date, {
      addSuffix: false,
      locale: customLocale,
    })}`;
  }

  return (
    <>
      <div className=" bg-transparent text-black max-w-[916px]">
        <div className="flex sm:flex-row flex-col   w-[100%] footer:w-[100%] gap-7 footer:gap-32   ">
          <div className="sm:flex sm:flex-col gap-4 sm:justify-start grid grid-cols-2 xxs:grid-cols-3  mx-auto">
            <div className="flex items-center  gap-3">
              <IconMeterSquare stroke={2} size={30} />
              <p className="font-semibold ">{m2}</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconBathFilled stroke={2} size={30} />
              <p className="font-semibold truncate ">{baths} Baños</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconBedFilled stroke={2} size={30} />
              <p className="font-semibold truncate ">{beds} Habitaciones</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconCalendar stroke={2} size={30} />
              <p className="font-semibold truncate ">
                Construida en: {builtIn}
              </p>
            </div>
            <div className="flex  items-center gap-3">
              <IconHomeFilled stroke={2} size={30} />
              <p className="font-semibold truncate">{type}</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconPointFilled stroke={2} size={30} />
              <p className="font-semibold truncate ">{state.toUpperCase()}</p>
            </div>
            <div className="flex  items-center gap-3">
              <IconCarSuvFilled stroke={2} size={30} />
              <p className="font-semibold truncate">Garage: {garageText}</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full max-w-[100%]">
            <div className="flex items-start  leading-10 ">
              <p>{description}</p>
            </div>
            <div className="flex justify-around gap-3">
              <p className="flex justify-center gap-2">
                <span className="font-semibold">ID: </span> {id}{" "}
              </p>
              <p className="flex justify-center gap-2">
                <span className="font-semibold">Publicada: </span>{" "}
                {timeAgo(createdAt)}
              </p>
              <p className="flex justify-center gap-2">
                <span className="font-semibold">Actualizada: </span>{" "}
                {timeAgo(updatedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoHome;
