import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import zostel_reviews1 from "../../../Assets/images/zostel_reviews1.png";
import zostel_reviews2 from "../../../Assets/images/zostel_reviews2.png";

import { FaChevronRight } from "react-icons/fa";

const GuestReviews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
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
          GUEST REVIEWS
        </div>
      </div>

      <div
        style={{
          width: "85%",
          height: "380px",
          margin: "auto",
          // border: "2px solid red",
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
          <div
            className="innerBox"
            style={{ width: "646px", marginTop: "-7px" }}
          >
            <img src={zostel_reviews1} alt="img1" />
          </div>

          <div
            className="innerBox"
            style={{ width: "646px", marginLeft: "590px", marginTop: "-10px" }}
          >
            <img src={zostel_reviews2} alt="img2" />
          </div>
          <div
            className="innerBox"
            style={{ width: "646px", marginLeft: "590px", marginTop: "-7px" }}
          >
            <img src={zostel_reviews1} alt="img1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default GuestReviews;
