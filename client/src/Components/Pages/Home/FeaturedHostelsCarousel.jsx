import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import featured_hostels1 from "../../../Assets/images/featured_hostels1.png";
import featured_hostels2 from "../../../Assets/images/featured_hostels2.png";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const FeaturedCarouselStyles = styled.div`
  .outerBox {
    }
  }
`;

const FeaturedHostelsCarousel = () => {
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
    <FeaturedCarouselStyles>
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
          <div
            style={{ color: "#474B4B", fontWeight: "750", fontSize: "23px" }}
          >
            FEATURED HOSTELS
          </div>
          <div
            style={{
              color: "#474B4B",
              fontWeight: "600",
              fontSize: "20px",
              marginLeft: "925px",
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
            width: "85%",
            height: "330px",
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
              style={{ width: "646px", marginTop: "-10px" }}
            >
              <img src={featured_hostels1} alt="img1" />
            </div>

            <div
              className="innerBox"
              style={{ width: "646px", marginLeft: "484px" }}
            >
              <img src={featured_hostels2} alt="img2" />
            </div>
          </Carousel>
        </div>
      </div>
    </FeaturedCarouselStyles>
  );
};

export default FeaturedHostelsCarousel;
