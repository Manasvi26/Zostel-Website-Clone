import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import Calender from "./Calender";
import DestinationsCarousel from "./DestinationsCarousel";
import LiveItNow from "./LiveItNow";
import SelectionBox from "./SelectionBox";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelHomesCarousel from "./ZostelHomesCarousel";

const Home = () => {
  return (
    <div style={{ height: "600vh" }}>
      <NavBar />

      <Banner />

      <SelectionBox />
      <br />
      <br />
      <LiveItNow />
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
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
