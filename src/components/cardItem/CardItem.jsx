import { IconChevronRight } from "@tabler/icons-react";
const CardItem = () => {
  return (
    <div className="flex flex-col w-[384px] h-[430px] bg-white rounded-sm">
      {" "}
      <div className="relative w-full ">
        <img
          src="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/large_jpg/_FI.jpg?1563747560"
          alt=""
          className="w-[95%] m-auto mt-2 rounded-md"
        />
        <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
          DESTACADO
        </div>
        <div className="absolute top-4 right-4 bg-gray-800 text-white px-2 py-1 text-xs font-semibold rounded">
          VENTA
        </div>
        <div className="absolute bottom-2 left-3  text-white px-2  text-lg font-bold ">
          U$S 78.000
        </div>
      </div>
      <div className="flex flex-col">
        <div className="m-3">
          <h1 className="font-semibold text-[#212]">
            Venta - Los Pasos Condominios.
          </h1>
          <h2 className="font-normal text-gray-500">
            Ing. Leon Migilerini 600, Santa Fe, Argentina
          </h2>
        </div>
        <div className="flex justify-between mx-3">
          <div className="flex flex-col">
            <h2 className="font-semibold text-[#212]">
              {" "}
              Dormitorios: 2 Banio: 1
            </h2>

            <h2 className="font-semibold text-[#212]">Departamento</h2>
          </div>
          <div className="py-2 px-4 flex gap-1 bg-[#730000] rounded-lg  items-center hover:bg-[#5c0000] hover:cursor-pointer">
            <p className="my-auto text-white font-semibold">Detalles</p>
            <IconChevronRight stroke={2} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
