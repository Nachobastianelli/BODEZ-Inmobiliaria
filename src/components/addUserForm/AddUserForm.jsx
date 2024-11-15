import React, { useState } from "react";
import { API_BASE_URL } from "../../api";

const AddUserForm = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("string");
  const [role, setRole] = useState("Admin");

  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const changeRoleHandler = (e) => {
    setRole(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
      role: role,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/User`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error("Error al crear la propiedad");
      alert("propiedad agregada correctamente");
    } catch (error) {
      console.error("Error al crear propiedad:", error);
    }
  };

  return (
    <div className=" min-h-screen bg-[#222] text-white m-auto flex justify-center items-center flex-col">
      <h1 className="p-5 font-bold text-2xl">Crear un usuario</h1>
      <form action="POST" onSubmit={submitHandler}>
        <div className="flex flex-col m-2">
          <label htmlFor="" className="text-lg">
            Email:
          </label>
          <input
            type="text"
            className="text-black"
            placeholder="user@gmail.com"
            onChange={changeEmailHandler}
            value={email}
          />
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="" className="text-lg">
            Password:
          </label>
          <input
            className="text-black"
            type="password"
            placeholder="*********"
            onChange={changePasswordHandler}
            value={password}
          />
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="" className="text-lg">
            Role:
          </label>
          <input
            type="text"
            placeholder="Admin"
            className="text-black"
            onChange={changeRoleHandler}
            value={role}
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 rounded-lg font-semibold text-lg mx-auto flex m-5"
        >
          Enviar formulario
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
