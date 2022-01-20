// import styled from "styled-components";
import React from "react";

import { bannerData } from "../../../Constants/data";
import { makeStyles } from "@mui/styles";
import Carousel from "react-material-ui-carousel";

// const NavStyle = styled.div``;

const useStyle = makeStyles({
  image: {
    width: "100%",
    height: "85%",
  },
  carousel: {
    marginTop: 0,
  },
});

const Banner = () => {
  const classes = useStyle();
  return (
    <div>
      <Carousel
        autoPlay={true}
        animation="fade"
        indicators={false}
        navButtonsAlwaysInVisible={true}
        cycleNavigation={true}
        interval={3000}
        navButtonsProps={{
          style: {
            color: "#494949",
            backgroundColor: "#FFFFFF",
            borderRadius: 0,
            margin: 0,
            width: 50,
          },
        }}
        className={classes.carousel}
      >
        {bannerData.map((image) => (
          <img src={image} className={classes.image} alt="carousel" />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
