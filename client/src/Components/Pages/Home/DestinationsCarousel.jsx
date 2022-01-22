import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import alleppey from "../../../Assets/images/Alleppey.svg";
import aurangabad from "../../../Assets/images/aurangabad.svg";
import bangalore from "../../../Assets/images/Bangalore.svg";
import barot from "../../../Assets/images/barot.svg";
import manali from "../../../Assets/images/Manali.svg";
import mashobra from "../../../Assets/images/Mashobra.svg";
import mcleod from "../../../Assets/images/mcledo.svg";
import mumbai from "../../../Assets/images/mumbai.svg";
import bir from "../../../Assets/images/bir.svg";
import kinnaur from "../../../Assets/images/kinnaur.svg";
import assam from "../../../Assets/images/Assam.svg";
import coorg from "../../../Assets/images/coorg.svg";
import mysore from "../../../Assets/images/mysore.svg";
import salmer from "../../../Assets/images/jaisalmer.svg";
import munroe from "../../../Assets/images/munroe.svg";
import chennai from "../../../Assets/images/chennai.svg";
import styled from "styled-components";
import { FaChevronRight } from "react-icons/fa";

const DestinationsCarouselStyles = styled.div`
  .outerBox {
    // border: 1px solid blue;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 17px;
    // margin-top: 20px;

    .innerBox {
      display: flex;
      flex-direction: column;
      justifly-content: center;
      align-items: center;
      background-color: #ffffff;
      // border: 1px solid red;
      width: 244px;
      height: 218px;
      box-shadow: 4px 2px 8px 1px rgb(233 235 235 / -22);

      img {
        width: 244px;
        height: 162px;
      }

      div {
        font-size: 23px;
        color: #808382;
        margin-top: 12px;
      }
    }
  }
`;

const DestinationsCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
  console.log("3333333");
  return (
    <DestinationsCarouselStyles>
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
            style={{ color: "#474B4B", fontWeight: "600", fontSize: "30px" }}
          >
            ZOSTEL DESTINATIONS
          </div>
          <div
            style={{
              color: "#474B4B",
              fontWeight: "600",
              fontSize: "20px",
              marginLeft: "1188px",
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
            height: "474px",
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
            infinite={true}
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
            <div className="outerBox">
              <div className="innerBox">
                <img src={alleppey} alt="" />
                <div>ALLEPPEY</div>
              </div>
              <div className="innerBox">
                <img src={mashobra} alt="" />
                <div>MASHOBARA</div>
              </div>
            </div>

            <div className="outerBox">
              <div className="innerBox">
                <img src={aurangabad} alt="" />
                <div>AURANGABAD</div>
              </div>

              <div className="innerBox">
                <img src={mcleod} alt="" />
                <div>MCLEOD</div>
              </div>
            </div>

            <div className="outerBox">
              <div className="innerBox">
                <img src={bangalore} alt="" />
                <div>BANGALORE</div>
              </div>

              <div className="innerBox">
                <img src={assam} alt="" />
                <div>ASSAM</div>
              </div>
            </div>

            <div className="outerBox">
              <div className="innerBox">
                <img src={kinnaur} alt="" />
                <div>KINNAUR</div>
              </div>

              <div className="innerBox">
                <img src={mumbai} alt="" />
                <div>MUMBAI</div>
              </div>
            </div>

            <div className="outerBox">
              <div className="innerBox">
                <img src={bir} alt="" />
                <div>BIR</div>
              </div>

              <div className="innerBox">
                <img src={mysore} alt="" />
                <div>MYSORE</div>
              </div>
            </div>

            <div className="outerBox">
              <div className="innerBox">
                <img src={chennai} alt="" />
                <div>CHENNAI</div>
              </div>

              <div className="innerBox">
                <img src={salmer} alt="" />
                <div>SALMER</div>
              </div>
            </div>
            <div className="outerBox">
              <div className="innerBox">
                <img src={manali} alt="" />
                <div>MANALI</div>
              </div>

              <div className="innerBox">
                <img src={coorg} alt="" />
                <div>COORG</div>
              </div>
            </div>
            <div className="outerBox">
              <div className="innerBox">
                <img src={barot} alt="" />
                <div>BAROT</div>
              </div>

              <div className="innerBox">
                <img src={munroe} alt="" />
                <div>MUNROE</div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </DestinationsCarouselStyles>
  );
};

export default DestinationsCarousel;
