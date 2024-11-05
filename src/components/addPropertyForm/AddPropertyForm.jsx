import { div } from "framer-motion/client";
import React, { useState } from "react";

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    propertyType: "",
    status: "",
    saleType: "",
    propertyLink: "",
    images: [],
    description: "",
    area: "", // Área en m2
    amenities: "", // Comodidades (por ejemplo, piscina, gimnasio, etc.)
    garageSpaces: "", // Espacios de estacionamiento
    constructionYear: "", // Año de construcción
  });

  const handleChange = (e) => {
    if (e.target.value < 0) return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: Array.from(e.target.files) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property data:", formData);
    // Aquí podrías hacer una llamada a la API para enviar los datos
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className=" mx-auto absolute top-[100px] bottom-0 right-0 left-0  p-6 bg-white shadow-lg rounded-lg m-10 max-h-screen max-w-[80%] overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-6">Agregar Propiedad</h2>

        <label className="block mb-2 font-semibold">Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Título de la propiedad"
        />

        <label className="block mb-2 font-semibold">Ubicación</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Dirección de la propiedad"
        />

        <label className="block mb-2 font-semibold">Precio</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Precio de la propiedad"
        />

        <label className="block mb-2 font-semibold">Área (m²)</label>
        <input
          type="number"
          name="area"
          value={formData.area}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Área en metros cuadrados"
        />

        <label className="block mb-2 font-semibold">Dormitorios</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Cantidad de dormitorios"
        />

        <label className="block mb-2 font-semibold">Baños</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Cantidad de baños"
        />

        <label className="block mb-2 font-semibold">
          Espacios de Estacionamiento
        </label>
        <input
          type="number"
          name="garageSpaces"
          value={formData.garageSpaces}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Número de espacios de estacionamiento"
        />

        <label className="block mb-2 font-semibold">Tipo de Propiedad</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">Seleccione el tipo</option>
          <option value="Departamento">Departamento</option>
          <option value="Casa">Casa</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Duplex">Duplex</option>
        </select>

        <label className="block mb-2 font-semibold">Año de Construcción</label>
        <input
          type="number"
          name="constructionYear"
          value={formData.constructionYear}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Año de construcción"
        />

        <label className="block mb-2 font-semibold">Comodidades</label>
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Comodidades (por ej., piscina, gimnasio)"
        />

        <label className="block mb-2 font-semibold">Estado</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">Seleccione el estado</option>
          <option value="DESTACADO">DESTACADO</option>
          <option value="NUEVO">NUEVO</option>
        </select>

        <label className="block mb-2 font-semibold">Tipo de Venta</label>
        <select
          name="saleType"
          value={formData.saleType}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        >
          <option value="">Seleccione el tipo de venta</option>
          <option value="VENTA">VENTA</option>
          <option value="ALQUILER">ALQUILER</option>
        </select>

        <label className="block mb-2 font-semibold">Enlace de Mapa</label>
        <input
          type="text"
          name="propertyLink"
          value={formData.propertyLink}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="URL de mapa (Google Maps)"
        />

        <label className="block mb-2 font-semibold">
          Imágenes de la Propiedad
        </label>
        <input
          type="file"
          name="images"
          multiple
          onChange={handleFileChange}
          className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        />

        <label className="block mb-2 font-semibold">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-6 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
          placeholder="Descripción de la propiedad"
        />

        <button
          type="submit"
          className="w-full py-2 text-white bg-red-950 rounded-md hover:scale-105 ease-in-out duration-300 transition-transform font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Agregar Propiedad
        </button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
