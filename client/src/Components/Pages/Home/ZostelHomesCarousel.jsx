import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { FaChevronRight } from "react-icons/fa";
// import rightArrow from "../../../../public/icons/rightArrow.svg";
import { ZostelHomes } from "../../../Constants/data";

const ZostelHomesCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
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
  console.log("77777777");

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
        <div style={{ color: "#474B4B", fontWeight: "600", fontSize: "30px" }}>
          ZOSTEL HOMES
        </div>
        <div
          style={{
            color: "#474B4B",
            fontWeight: "600",
            fontSize: "20px",
            marginLeft: "1290px",
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
          // border: "1px solid red",
          backgroundColor: "#EDEEEA", //grey background
        }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={false}
          draggable={false}
          centerMode={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={10000}
          keyBoardControl={true}
          showDots={false}
          containerClass="carousel-container"
          // customRightArrow={}
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {ZostelHomes.map((item) => {
            return (
              <Card
                key={new Date().getTime().toString()}
                sx={{
                  maxWidth: 385,
                  padding: "8px",
                  paddingTop: "0px",
                  height: "446px",
                  borderBottom: "0.1px solid #F1563F",
                  // boxShadow: "15px 5px 5px #EFEFEC",
                  marginRight: "20px",
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  marginTop="0px"
                  paddingTop="0px"
                  image={item.imageUrl}
                  alt="image"
                />
                <CardContent style={{ paddingBottom: "0px" }}>
                  <Typography
                    gutterBottom
                    style={{
                      fontWeight: 800,
                      fontSize: "20px",
                      color: "#616161",
                      lineHeight: "27px",
                    }}
                    component="div"
                  >
                    {item.place}
                  </Typography>
                  <Typography
                    style={{
                      height: "96px",
                      fontWeight: 400,
                      fontSize: "17px",
                      color: "#43474b",
                      lineHeight: "23px",
                      // border: "1px solid blue",
                      overflow: "hidden",
                    }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    style={{
                      backgroundColor: "#F1563F",
                      width: "373px",
                      height: "48px",
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

export default ZostelHomesCarousel;

// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import { ZostelHomes } from "../../../Constants/data";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 3, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

// const ZostelHomeCard = () => {
//   return (
//     <div>
//       <div
//         style={{
//           display: "grid",
//           gap: "100px",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           marginLeft: 170,
//           marginTop: 100,
//         }}
//         className="zostelHomes"
//       >
//         {ZostelHomes.map((item) => {
//           return (
//             <Card
//               sx={{
//                 maxWidth: 385,
//                 padding: "8px",
//                 height: "446px",
//                 borderBottom: "0.1px solid #F1563F",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="240"
//                 image={item.imageUrl}
//                 alt="image"
//               />
//               <CardContent style={{ paddingBottom: "0px" }}>
//                 <Typography
//                   gutterBottom
//                   style={{
//                     fontWeight: 800,
//                     fontSize: "20px",
//                     color: "#616161",
//                     lineHeight: "27px",
//                   }}
//                   component="div"
//                 >
//                   {item.place}
//                 </Typography>
//                 <Typography
//                   style={{
//                     height: "96px",
//                     fontWeight: 400,
//                     fontSize: "17px",
//                     color: "#43474b",
//                     lineHeight: "23px",
//                     // border: "1px solid blue",
//                     overflow: "hidden",
//                   }}
//                   variant="body2"
//                   color="text.secondary"
//                 >
//                   {item.description}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   style={{
//                     backgroundColor: "#F1563F",
//                     width: "373px",
//                     height: "48px",
//                   }}
//                   variant="contained"
//                   size="large"
//                 >
//                   EXPLORE
//                 </Button>
//               </CardActions>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ZostelHomeCard;
