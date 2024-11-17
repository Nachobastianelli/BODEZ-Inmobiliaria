import { div } from "framer-motion/client";
import React from "react";

const UpdateProperty = ({ isVisible, onClose, updateProperty }) => {
  return (
    <div
      id="popup-modal"
      className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <button
          className="py-2 px-4 font-semibold text-lg bg-red-900"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default UpdateProperty;
