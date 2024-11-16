import React, { useState } from "react";
import useApi from "../../hooks/useApi";
import { API_BASE_URL } from "../../api";
import useToast from "../../hooks/useToast";

const PropertyForm = () => {
  const { showToast } = useToast();
  const [name, setName] = useState("string");
  const [description, setDescription] = useState("string");
  const [value, setValue] = useState(1000);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [rooms, setRooms] = useState(2);
  const [m2, setM2] = useState(1500);
  const [type, setType] = useState("Casa");
  const [state, setState] = useState("Nuevo");
  const [country, setCountry] = useState("Argentina");
  const [province, setProvince] = useState("Santa fe");
  const [city, setCity] = useState("Rosario");
  const [address, setAddress] = useState("Donado 622 Bis");
  const [floor, setFloor] = useState(0);
  const [numberFloor, setNumberFloor] = useState(1);
  const [map, setMap] = useState(
    "https://www.google.com.ar/maps/place/YPF/@-32.951237,-60.7066817,14z/data=!4m6!3m5!1s0x95b7acd1cc989913:0x60f8dfc626b6d455!8m2!3d-32.9480672!4d-60.7108303!16s%2Fg%2F1hc1m078f?entry=ttu&g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"
  );
  const [builtIn, setBuiltIn] = useState(2011);
  const [images, setImages] = useState(["string"]);
  const [garage, setGarage] = useState(true);

  const labelStyle = "block mb-2 font-semibold";
  const inputStyle =
    "w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-200";

  const { data, loading, error, createEntity } = useApi("property");

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

  const changeImagesHandler = (e) => {
    setImages(e.target.value);
  };

  const changeGarageHandler = (e) => {
    setGarage(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/Property`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          value: value,
          bathrooms: bathrooms,
          bedrooms: bedrooms,
          rooms: rooms,
          m2: m2,
          type: type,
          status: state,
          country: country,
          regionState: province,
          city: city,
          address: address,
          floor: floor,
          numberFloors: numberFloor,
          linkMap: map,
          garage: garage,
          builtIn: builtIn,
          imagePaths: images,
        }),
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
            onChange={changeNameHandler}
            required
          />
        </div>
        <div>
          <label className={labelStyle}>Descripción:</label>
          <textarea
            className={inputStyle}
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
            type="number"
            name="bathrooms"
            min={0}
            value={bathrooms}
            onChange={changeBathroomsHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Habitaciones:</label>
          <input
            className={inputStyle}
            type="number"
            min={0}
            name="bedrooms"
            value={bedrooms}
            onChange={changeBedroomsHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Salas:</label>
          <input
            className={inputStyle}
            type="number"
            min={1}
            name="rooms"
            value={rooms}
            onChange={changeRoomsHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>M2:</label>
          <input
            className={inputStyle}
            type="number"
            name="m2"
            min={0}
            value={m2}
            onChange={changeM2Handler}
          />
        </div>
        <div>
          <label className={labelStyle}>Tipo:</label>
          <input
            className={inputStyle}
            type="text"
            name="type"
            value={type}
            onChange={changeTypeHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Estado:</label>
          <input
            className={inputStyle}
            type="text"
            name="status"
            value={state}
            onChange={changeStateHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>País:</label>
          <input
            className={inputStyle}
            type="text"
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
            name="numberFloor"
            value={numberFloor}
            onChange={changeNumberFloorHandler}
          />
        </div>
        <div>
          <label className={labelStyle}>Link de Mapa:</label>
          <input
            className={inputStyle}
            type="url"
            name="Map"
            value={map}
            onChange={changeMapHandler}
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
