import React from "react";
import Header from "../header/Header";
import Item from "../item/Item";
import Footer from "../footer/Footer";
import bodez from "../../assets/BodezLogo.png";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-rose-50 to-gray-200  flex flex-col justify-center items-center overflow-hidden">
      <section>
        <Header />
      </section>
      <img
        src={bodez}
        alt=""
        className="fixed top-0 bottom-0 left-0 right-0 m-auto size-64 z-0 pointer-events-none "
      />
      <p className="fixed top-60 bottom-0 left-0 right-0 m-auto size-64 pointer-events-none z-0 text-black w-fit flex justify-center items-center -tracking-[-0.45em]  font-extralight text-2xl jomolhari-regular">
        {" "}
        B O D E Z
      </p>

      <Item />
      <section className="w-full mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Dashboard;
