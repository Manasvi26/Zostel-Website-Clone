import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { whatsNewData } from "../../../Constants/data";

const WhatsNewCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
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
  console.log("6666666");
  return (
    <div>
      <div
        style={{
          width: "86%",
          margin: "auto",
          display: "flex",
          justifyContent: "centre",
          textAlign: "center",
          alignItems: "center",
          gap: "20px",
          //   border: "1px solid red",
          color: "##474B4B",
          height: "70px",
          marginTop: "20px",
        }}
      >
        <div style={{ color: "#474B4B", fontWeight: "600", fontSize: "30px" }}>
          WHAT'S NEW
        </div>
      </div>

      <div
        style={{
          margin: "auto",

          width: "86%",
          // border: "1px solid red",
          backgroundColor: "#EDEEEA",
        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          centerMode={true}
          infinite={false}
          autoPlay={false}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
          // customRightArrow={}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {whatsNewData.map((item) => {
            return (
              <div
                className="whatsNewCard"
                style={{
                  width: "535px",

                  display: "flex",
                  gap: "0px",

                  // border: "1px solid yellow",
                  height: "315px",
                  borderBottom: "0.1px solid orange",
                  marginLeft: "0px",
                }}
              >
                <img
                  src={item.imageUrl}
                  style={{ width: "277px" }}
                  alt="image"
                />
                <div
                  style={{
                    display: "grid",
                    // border: "1px solid green",
                    backgroundColor: "#ffffff",
                    padding: "5px 5px",
                    paddingTop: "25px",
                    paddingLeft: "13px",
                  }}
                >
                  <div style={{ color: "#897967", fontWeight: 500 }}>
                    LAUNCH
                  </div>
                  <h3 style={{ color: "#43505B" }}>{item.title}</h3>
                  <div
                    style={{
                      fontWeight: 400,
                      fontSize: "17px",
                      color: "#43474b",
                      lineHeight: "25px",
                    }}
                  >
                    {item.text}
                  </div>
                  <button
                    style={{
                      color: "#F8F9F5",
                      backgroundColor: "#F1563F",
                      fontSize: "17px",
                      border: "none",
                      height: "46px",
                    }}
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default WhatsNewCarousel;

// https://img.cdn.zostel.com/cache/_63c53f45137e478cbf5830dd327da511/4_233x260.jpg

// https://img.cdn.zostel.com/cache/_7f057ea6f7e23b3841eb793d88fb9ae3/RoamOkPlease_233x260.jpg

// https://img.cdn.zostel.com/cache/_7ae4c3cd5e2b39a512bbf05ac0053ea9/2_233x260.jpg
