import React from "react";
import Header from "../header/Header";
import Item from "../item/Item";
import Footer from "../footer/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-200  flex flex-col justify-center items-center overflow-hidden">
      <section>
        <Header />
      </section>

      <Item />
      <section className="w-full mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default Dashboard;
