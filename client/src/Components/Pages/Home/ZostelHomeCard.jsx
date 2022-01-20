import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

import { ZostelHomes } from "../../../Constants/data";

const ZostelHomeCard = () => {
  return (
    <div>
      <h1></h1>
      <div
        style={{
          display: "grid",
          gap: "100px",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginLeft: 170,
          marginTop: 100,
        }}
        className="zostelHomes"
      >
        {ZostelHomes.map((item) => {
          return (
            <Card
              sx={{
                maxWidth: 385,
                padding: "8px",
                height: "473px",
                borderBottom: "0.1px solid #F1563F",
              }}
            >
              <CardMedia
                component="img"
                height="240"
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
                    height: "120px",
                    fontWeight: 400,
                    fontSize: "17px",
                    color: "#43474b",
                    lineHeight: "23px",

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
      </div>
    </div>
  );
};

export default ZostelHomeCard;
