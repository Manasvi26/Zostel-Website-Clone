import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import Calender from "./Calender";
import DestinationsCarousel from "./DestinationsCarousel";
import SelectionBox from "./SelectionBox";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelHomesCarousel from "./ZostelHomesCarousel";

export const Home = () => {
  console.log("44444444");
  return (
    <div style={{ height: "600vh" }}>
      <NavBar />
      <Banner />
      <br />
      <br />
      <br />
      <br />
      <SelectionBox />
      <br />
      <br />
      <br />
      <br />
      <DestinationsCarousel />
      <br />
      <br />
      <br />

      <br />
      <WhatsNewCarousel />

      <br />
      <br />
      <br />
      <br />

      <ZostelHomesCarousel />
      <br />
      <br />
    </div>
  );
};