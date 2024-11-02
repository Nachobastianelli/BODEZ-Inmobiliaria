import React from "react";
import Header from "../header/Header";
import CardDetail from "../cardDetail/CardDetail";
import Footer from "../footer/Footer";

const OnArticle = () => {
  return (
    <div className="min-h-screen bg-gray-200  flex flex-col overflow-hidden ">
      <Header />

      <CardDetail />
      <section className="w-full mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default OnArticle;
