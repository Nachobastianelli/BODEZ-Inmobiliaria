import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const useToast = () => {
  const showToast = (message, type) => {
    const styleToats = type ? "#48bb78" : "#f56565";

    Toastify({
      text: message,
      duration: 1000,
      gravity: "top",
      position: "center",
      style: {
        background: styleToats,
        color: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        textAlign: "center",
        maxWidth: "300px",
        margin: "0 auto",
      },
      onClick: function () {},
    }).showToast();
  };

  return { showToast };
};

export default useToast;
