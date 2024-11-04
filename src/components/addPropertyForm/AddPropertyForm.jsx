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
    imageUrl: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Property data:", formData);
    // Aquí podrías hacer una llamada a la API para enviar los datos
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg"
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
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        placeholder="Precio de la propiedad"
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

      <label className="block mb-2 font-semibold">URL de Imagen</label>
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
        className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
        placeholder="URL de la imagen de la propiedad"
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
        className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Agregar Propiedad
      </button>
    </form>
  );
};

export default AddPropertyForm;
