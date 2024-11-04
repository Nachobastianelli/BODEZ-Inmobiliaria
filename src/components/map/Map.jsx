import React from "react";

const Map = ({ link }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "56.25%",
        position: "relative",
      }}
    >
      <iframe
        src={link}
        title="Property Location"
        style={{
          border: 100,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",

          height: "250px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
