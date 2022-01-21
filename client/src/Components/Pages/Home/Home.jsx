import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import Calender from "./Calender";
import SelectionBox from "./SelectionBox";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelHomesCarousel from "./ZostelHomesCarousel";

const Home = () => {
  return (
    <div style={{ height: "600vh" }}>
      <NavBar />
      <Banner />
      <br />
      <br />
      <SelectionBox />
      <br />
      <br />

      <ZostelHomesCarousel />
      <WhatsNewCarousel />

      <br />
      <br />
    </div>
  );
};

export default Home;
