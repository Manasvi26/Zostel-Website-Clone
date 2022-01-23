import React from "react";
import LandingPageFooter from "../../Footers/LandingPageFooter";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import Calender from "./Calender";
import DestinationsCarousel from "./DestinationsCarousel";
import FeaturedHostels from "./FeaturedHostelsCarousel";
import GuestReviewsCarousel from "./GuestReviewsCarousel";
import LiveItNow from "./LiveItNow";
import SelectionBox from "./SelectionBox";
import WhatsNewCarousel from "./WhatsNewCarousel";
import ZostelHomesCarousel from "./ZostelHomesCarousel";

const Home = () => {
  return (
    <div style={{ height: "458vh" }}>
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
      <FeaturedHostels />
      <br />
      <br />
      <br />
      <br />
      <GuestReviewsCarousel />
      <br />
      <br />
      <br />
      <br />
      <LandingPageFooter />
    </div>
  );
};

export default Home;
