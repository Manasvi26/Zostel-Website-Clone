import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import Calender from "./Calender";
import DestinationsCarousel from "./DestinationsCarousel";
import FeaturedHostels from "./FeatureHostels";
import GuestReviews from "./GuestReviewsCarousel";
import LiveItNow from "./LiveItNow";
import SelectionBox from "./SelectionBox";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelEscapeCarousel from "./ZostelEscapeCarousel";
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
      <ZostelEscapeCarousel />
      <br />
      <br />
      <br />
      <br />
      <FeaturedHostels />
      <br />
      <br />
      <br />
      <br />
      <GuestReviews />
    </div>
  );
};

export default Home;
