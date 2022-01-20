import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelHomesCarousel from "./ZostelHomesCarousel";

const Home = () => {
  return (
    <div style={{ height: "600vh" }}>
      <NavBar />
      <Banner />

      <ZostelHomesCarousel />
      <WhatsNewCarousel />
    </div>
  );
};

export default Home;
