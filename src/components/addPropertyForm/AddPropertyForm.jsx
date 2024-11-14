import React, { useState } from "react";
import useApi from "./hooks/useApi";

const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    value: "",
    bathrooms: "",
    bedrooms: "",
    rooms: "",
    m2: "",
    type: "",
    status: "",
    country: "",
    regionState: "",
    city: "",
    address: "",
    floor: "",
    numberFloor: "",
    linkMap: "",
    builtIn: "",
    listedAt: "",
    updatedAt: "",
    images: [],
    garage: "",
  });

  const { data, loading, error, refetch } = useApi(
    "/property",
    "POST",
    formData
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await refetch();
  };

  return (
    <div>
      <h2>Crear Propiedad</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Valor:</label>
          <input
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Baños:</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Habitaciones:</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Salas:</label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>M2:</label>
          <input
            type="number"
            name="m2"
            value={formData.m2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado:</label>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>País:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Estado/Región:</label>
          <input
            type="text"
            name="regionState"
            value={formData.regionState}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Ciudad:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Piso:</label>
          <input
            type="text"
            name="floor"
            value={formData.floor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Número de Piso:</label>
          <input
            type="number"
            name="numberFloor"
            value={formData.numberFloor}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Link de Mapa:</label>
          <input
            type="url"
            name="linkMap"
            value={formData.linkMap}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Año de Construcción:</label>
          <input
            type="text"
            name="builtIn"
            value={formData.builtIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Listado:</label>
          <input
            type="date"
            name="listedAt"
            value={formData.listedAt}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha de Actualización:</label>
          <input
            type="date"
            name="updatedAt"
            value={formData.updatedAt}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Garaje:</label>
          <input
            type="text"
            name="garage"
            value={formData.garage}
            onChange={handleChange}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Crear Propiedad"}
        </button>
      </form>

      {/* Mensajes de éxito o error */}
      {data && <p>Propiedad creada con éxito.</p>}
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </div>
  );
};

export default PropertyForm;
