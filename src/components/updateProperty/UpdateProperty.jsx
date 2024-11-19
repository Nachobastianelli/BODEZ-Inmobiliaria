import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast";
import { nav } from "framer-motion/client";

const UpdateProperty = ({ isVisible, onClose, updateProperty, props = {} }) => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const labelStyle = "block mb-2 font-semibold text-white";
  const inputStyle =
    "w-[90%] px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 ";

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
    garage,
    numberFloor,
    imagePaths,
  } = props || {};

  const [nameInput, setName] = useState(name);
  const [descriptionInput, setDescription] = useState(description);
  const [valueInput, setValue] = useState(value);
  const [bathroomsInput, setBathrooms] = useState(bathrooms);
  const [bedroomsInput, setBedrooms] = useState(bedrooms);
  const [roomsInput, setRooms] = useState(rooms);
  const [m2Input, setM2] = useState(m2);
  const [garageInput, setGarage] = useState(garage);
  const [typeInput, setType] = useState(type);
  const [statusInput, setStatus] = useState(status);
  const [numberFloorsInput, setNumberFloors] = useState(numberFloor);
  const [imagePathsInput, setImagePaths] = useState(imagePaths);

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

  const changeStatusHandler = (e) => {
    setStatus(e.target.value);
  };

  const changeNumberFloorHandler = (e) => {
    setNumberFloors(e.target.value);
  };
  const changeImagesHandler = (e) => {
    setImagePaths(e.target.value);
  };

  const changeGarageHandler = (e) => {
    setGarage(e.target.checked);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedProperty = {
      name: nameInput,
      description: descriptionInput,
      value: valueInput,
      bathrooms: bathroomsInput,
      bedrooms: bedroomsInput,
      rooms: roomsInput,
      m2: parseInt(m2Input),
      garage: garageInput,
      type: typeInput,
      status: statusInput,
      numberFloors: numberFloorsInput,
      imagePaths: imagePaths,
    };

    try {
      await updateProperty(updatedProperty);
      console.log(updatedProperty);
      showToast("Se actualizo la propiedad", true);
      onClose();
      navigate("/home");
    } catch (err) {
      showToast(`Error: ${err}`, false);
      console.log(err);
      onClose();
      navigate("/home");
    }
  };

  return (
    <div
      id="popup-modal"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[60] flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50`}
    >
      <div className="relative p-4 max-w-[600px] w-full  max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 right-2.5 mr-5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <h3 className="justify-center text-2xl text-blue-200 font-bold mx-auto flex  pt-10 pb-3 ">
            Update property
          </h3>
          <form
            className="p-4 md:p-5 text-center overflow-y-auto max-h-[700px] "
            onSubmit={submitHandler}
          >
            <div>
              <label className={labelStyle}>Nombre:</label>
              <input
                className={inputStyle}
                type="text"
                name="name"
                value={nameInput}
                onChange={changeNameHandler}
                required
              />
            </div>
            <div>
              <label className={labelStyle}>Descripción:</label>
              <textarea
                className={inputStyle}
                name="description"
                value={descriptionInput}
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
                value={valueInput}
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
                value={bathroomsInput}
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
                value={bedroomsInput}
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
                value={roomsInput}
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
                value={m2Input}
                onChange={changeM2Handler}
              />
            </div>
            <div>
              <label className={labelStyle}>Pisos:</label>
              <input
                className={inputStyle}
                type="number"
                name="floors"
                min={0}
                value={numberFloorsInput}
                onChange={changeNumberFloorHandler}
              />
            </div>
            <div>
              <label className={labelStyle}>Tipo:</label>
              <input
                className={inputStyle}
                type="text"
                name="type"
                value={typeInput}
                onChange={changeTypeHandler}
              />
            </div>
            <div>
              <label className={labelStyle}>Estado:</label>
              <input
                className={inputStyle}
                type="text"
                name="status"
                value={statusInput}
                onChange={changeStatusHandler}
              />
            </div>
            <div className="flex items-center m-auto justify-center mb-10 space-x-2 my-auto">
              <label className={`${labelStyle}`}>Garaje:</label>
              <input
                className="items-center rounded border-gray-300 focus:ring-blue-500  mb-1"
                type="checkbox"
                name="garage"
                checked={garageInput}
                onChange={changeGarageHandler}
              />
            </div>
            <button
              onClick={updateProperty}
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Update property
            </button>
            <button
              type="button"
              onClick={onClose}
              className="py-2.5 px-5 ml-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
