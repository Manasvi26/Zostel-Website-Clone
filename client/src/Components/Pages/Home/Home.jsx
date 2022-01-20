import React from "react";
import NavBar from "../../Headers/NavBar";
import Banner from "./Banner";
import ZostelHomeCard from "./ZostelHomeCard";

const Home = () => {
  return (
    <div style={{ height: "600vh" }}>
      <NavBar />
      <Banner />
      <ZostelHomeCard />
    </div>
  );
};

export default Home;
