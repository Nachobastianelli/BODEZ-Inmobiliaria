import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { API_BASE_URL } from "../../api";
import useToast from "../../hooks/useToast";

const PropertyForm = () => {
  const { showToast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [rooms, setRooms] = useState();
  const [m2, setM2] = useState();
  const [type, setType] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("Argentina");
  const [province, setProvince] = useState("Santa Fe");
  const [city, setCity] = useState("Rosario");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState();
  const [numberFloor, setNumberFloor] = useState();
  const [map, setMap] = useState("");
  const [builtIn, setBuiltIn] = useState();
  const [images, setImages] = useState([]);
  const [garage, setGarage] = useState(false);

  const labelStyle = "block mb-2 font-semibold";
  const inputStyle =
    "w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-200";

  const { data, loading, error, createEntity, uploadFiles } =
    useApi("property");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const changeValueHandler = (e) => {
    setValue(e.target.value);
  };

  const changeBedroomsHandler = (e) => {
    setBedrooms(e.target.value);
  };

  const changeBathroomsHandler = (e) => {
    setBathrooms(e.target.value);
  };

  const changeRoomsHandler = (e) => {
    setRooms(e.target.value);
  };

  const changeM2Handler = (e) => {
    setM2(e.target.value);
  };

  const changeTypeHandler = (e) => {
    setType(e.target.value);
  };

  const changeStateHandler = (e) => {
    setState(e.target.value);
  };

  const changeCountryHandler = (e) => {
    setCountry(e.target.value);
  };

  const changeProvinceHandler = (e) => {
    setProvince(e.target.value);
  };

  const changeCityHandler = (e) => {
    setCity(e.target.value);
  };

  const changeAddressHandler = (e) => {
    setAddress(e.target.value);
  };

  const changeFloorHandler = (e) => {
    setFloor(e.target.value);
  };

  const changeNumberFloorHandler = (e) => {
    setNumberFloor(e.target.value);
  };

  const changeMapHandler = (e) => {
    setMap(e.target.value);
  };

  const changeBuiltInHandler = (e) => {
    setBuiltIn(e.target.value);
  };

  const imagesHandler = (e) => {
    console.log(Array.from(e.target.files));
    setImages(Array.from(e.target.files));
  };

  const changeGarageHandler = (e) => {
    setGarage(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imagePaths = await uploadFiles(images);
      console.log(imagePaths);
      const newProperty = {
        name,
        description,
        value: parseFloat(value, 10),
        bathrooms: parseInt(bathrooms, 10),
        bedrooms: parseInt(bedrooms, 10),
        rooms: parseInt(rooms, 10),
        m2: parseFloat(m2, 10),
        type,
        status: state,
        country,
        regionState: province,
        city,
        address,
        floor: parseInt(floor, 10),
        numberFloors: parseInt(numberFloor, 10),
        linkMap: map,
        garage,
        builtIn: parseInt(builtIn, 10),
        imagePaths: imagePaths,
      };

      console.log(newProperty);

      const response = await fetch(`${API_BASE_URL}/Property`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProperty),
      });
      if (!response.ok) throw new Error("Error al crear la propiedad");
      showToast("propiedad agregada correctamente", true);
    } catch (error) {
      console.error("Error al crear propiedad:", error);
      showToast("Error al crear propiedad:", false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="mx-auto absolute top-[100px] bottom-0 right-0 left-0  p-6 bg-white shadow-lg rounded-lg m-10 max-h-screen max-w-[80%] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-10">Crear Propiedad</h2>
        <div>
          <label className={labelStyle}>Nombre:</label>
          <input
            className={inputStyle}
            type="text"
            name="name"
            value={name}
            placeholder="Condominio palos verdes"
            onChange={changeNameHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Descripción:</label>
          <textarea
            className={inputStyle}
            placeholder="Descripcion..."
            name="description"
            value={description}
            onChange={changeDescriptionHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Valor:</label>
          <input
            className={inputStyle}
            placeholder="10000"
            type="number"
            min={1}
            name="value"
            value={value}
            onChange={changeValueHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Baños:</label>
          <input
            className={inputStyle}
            placeholder="2"
            type="number"
            name="bathrooms"
            min={0}
            max={10}
            value={bathrooms}
            onChange={changeBathroomsHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Habitaciones:</label>
          <input
            className={inputStyle}
            placeholder="3"
            type="number"
            min={0}
            max={10}
            name="bedrooms"
            value={bedrooms}
            onChange={changeBedroomsHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Salas:</label>
          <input
            className={inputStyle}
            placeholder="5"
            type="number"
            min={1}
            max={20}
            name="rooms"
            value={rooms}
            onChange={changeRoomsHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>M2:</label>
          <input
            className={inputStyle}
            placeholder="1255"
            type="number"
            name="m2"
            min={0}
            max={10000}
            value={m2}
            onChange={changeM2Handler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Tipo:</label>
          <select
            className={inputStyle}
            name="type"
            value={type}
            onChange={changeTypeHandler}
          >
            <option value="" disabled></option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Dpto</option>
            <option value="Condominio">Condominio</option>
          </select>
        </div>
        <div>
          <label className={labelStyle}>Estado:</label>
          <select
            className={inputStyle}
            name="status"
            value={state}
            onChange={changeStateHandler}
          >
            <option value="" disabled></option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>
        </div>
        <div>
          <label className={labelStyle}>País:</label>
          <input
            className={inputStyle}
            type="text"
            required
            name="country"
            value={country}
            onChange={changeCountryHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Estado/Región:</label>
          <input
            className={inputStyle}
            type="text"
            required
            name="regionState"
            value={province}
            onChange={changeProvinceHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Ciudad:</label>
          <input
            className={inputStyle}
            type="text"
            required
            name="city"
            value={city}
            onChange={changeCityHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Dirección:</label>
          <input
            className={inputStyle}
            type="text"
            name="address"
            placeholder="Donado 643 Bis"
            required
            value={address}
            onChange={changeAddressHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Piso:</label>
          <input
            className={inputStyle}
            type="number"
            min={0}
            required
            placeholder="3 - Piso({3})"
            name="floor"
            value={floor}
            onChange={changeFloorHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Cantidad de pisos:</label>
          <input
            className={inputStyle}
            type="number"
            min={1}
            placeholder="2: Casa de 2 pisos"
            required
            name="numberFloor"
            value={numberFloor}
            onChange={changeNumberFloorHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Constuida en:</label>
          <input
            className={inputStyle}
            type="number"
            min={1900}
            placeholder="2011"
            required
            name="builtIn"
            value={builtIn}
            onChange={changeBuiltInHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Link de Mapa:</label>
          <input
            className={inputStyle}
            type="text"
            placeholder="https://google.maps.api/ASDasdahy3e2df44sbjdASD"
            name="Map"
            value={map}
            onChange={changeMapHandler}
          />
        </div>
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Images:
          </label>
          <input
            id="images"
            type="file"
            multiple
            onChange={imagesHandler}
            className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="flex items-center m-auto space-x-2 my-auto">
          <label className={`${labelStyle}`}>Garaje:</label>
          <input
            className="items-center rounded border-gray-300 focus:ring-blue-500  mb-1"
            type="checkbox"
            name="garage"
            checked={garage}
            onChange={changeGarageHandler}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex ml-auto m-5 px-4 py-2 bg-red-900 font-semibold text-lg text-white rounded-lg border-2  focus:border-red-500 hover:bg-[#6b2121] cursor-pointer active:translate-y-1 transition-all duration-300 ease-in-out"
        >
          {loading ? "Enviando..." : "Crear Propiedad"}
        </button>
      </form>
    </div>
  );
};

export default PropertyForm;
