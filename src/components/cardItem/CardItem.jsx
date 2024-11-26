import { IconChevronRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../../api";

const CardItem = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/Property/${props.id}`, {
      state: {
        ...props,
      },
    });
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
    imagePaths,
    linkMap,
  } = props;

  const textBathroom = bathrooms > 1 ? "Baños" : "Baño";
  const textBedroom = bedrooms > 1 ? "Dormitorios" : "Dormitorio";

  return (
    <div
      className="flex flex-col max-w-[384px] max-h-[430px] sm:min-h-[430px] sm:min-w-[384px] bg-white rounded-sm mx-auto justify-evenly z-10 shadow-2xl"
      onClick={clickHandler}
    >
      {" "}
      <div className="relative w-full mb-1 ">
        <img
          src={`${API_BASE}${imagePaths[0]}`}
          alt=""
          className="w-[368px] h-[247px] m-auto object-cover  mt-0 hover:opacity-80 opacity-100 hover:cursor-pointer transition-all ease-in-out duration-300 "
        />
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
          {status}
        </div>
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded">
          {type}
        </div>
        <div className="absolute bottom-2 left-3  text-white px-2  text-lg font-bold ">
          ${value}
        </div>
      </div>
      <div className="flex flex-col mb-3">
        <div className="m-3">
          <h1 className="font-semibold text-[#212]">{name}.</h1>
          <h2 className="font-normal text-gray-500 h-[48px]">
            {`${address}, ${city}, ${regionState}, ${country}`}.
          </h2>
        </div>
        <div className="flex justify-between mx-3">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[#212]">
              {" "}
              {textBedroom}: {bedrooms} {textBathroom}: {bathrooms}
            </h2>

            <h2 className="font-semibold text-[#212]">{type}</h2>
          </div>
          <div className="py-2 px-4 flex gap-1 bg-[#730000] rounded-lg  items-center hover:bg-[#5c0000] hover:cursor-pointer transition-all ease-in-out duration-300 active:bg-[#420000] active:translate-y-[1px]">
            <p className="my-auto text-white font-semibold">Detalles</p>
            <IconChevronRight stroke={2} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
