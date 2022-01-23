import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import safari_details1 from "../../../Assets/images/safari_details1.png";
import safari_details2 from "../../../Assets/images/safari_details2.png";

import { FaChevronRight } from "react-icons/fa";
// import rightArrow from "../../../../public/icons/rightArrow.svg";
import { ZostelEscape } from "../../../Constants/data";

const ZostelEscapeCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div>
      <div
        style={{
          width: "85%",
          margin: "auto",
          display: "flex",
          justifyContent: "centre",
          textAlign: "center",
          alignItems: "center",
          gap: "20px",
          // border: "1px solid red",
          color: "##474B4B",
          height: "70px",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#474B4B", fontWeight: "750", fontSize: "23px" }}>
          ZOSTEL ESCAPE
        </div>
        <div
          style={{
            color: "#474B4B",
            fontWeight: "600",
            fontSize: "20px",
            marginLeft: "1013px",
          }}
        >
          Explore
          <span style={{ verticalAlign: "middle" }}>
            <FaChevronRight />
          </span>
        </div>
      </div>

      <div
        style={{
          margin: "auto",
          width: "85%",

          //   border: "1px solid red",
          backgroundColor: "#EDEEEA", //grey background
        }}
      >
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          centerMode={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={10000}
          keyBoardControl={false}
          showDots={false}
          containerClass="carousel-container"
          // customRightArrow={}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {ZostelEscape.map((item) => {
            return (
              <Card
                key={new Date().getTime().toString()}
                sx={{
                  maxWidth: 350,
                  padding: "8px",
                  paddingTop: "0px",
                  height: "377px",
                  borderBottom: "0.1px solid #F1563F",
                  boxShadow: "15px 5px 5px #EFEFEC",
                  marginRight: "15px",
                }}
              >
                <CardMedia
                  component="img"
                  height="185"
                  marginTop="0px"
                  paddingTop="0px"
                  image="https://img.cdn.zostel.com/cache/_2da25d3a2dc0b7260c1bcc77af8d0d64/Jaisalmer_desert_safari_500x400.jpg"
                  alt="image"
                />
                <CardContent style={{ paddingBottom: "0px" }}>
                  <Box>
                    <img
                      style={{ width: "300px" }}
                      src={safari_details1}
                      alt="details"
                    />
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    style={{
                      backgroundColor: "#F1563F",
                      width: "373px",
                      height: "40px",
                      borderRadius: "none",
                      fontSize: "14px",
                    }}
                    variant="contained"
                    size="large"
                  >
                    EXPLORE
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ZostelEscapeCarousel;
