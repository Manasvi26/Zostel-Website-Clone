import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import Calender from "./Calender";

const SelectionBoxStyle = styled.div`
  .innerContainer {
    widht: 98%;
    height: 97%;
    // border: 2px solid blue;

    .upperBigDiv {
      // border: 1px solid yellow;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 47%;
      margin-bottom: 5px;

      .zostelDiv {
        width: 49%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 1px solid pink;
        margin: auto;
        // text-align: center;
        color: #ffffff;
        font-weight: 500;
        font-size: 20px;
      }
    }
    .lowerBigDiv {
      // border: 1px solid yellow;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 45%;
      margin-top: 10px;

      .innerBoxLowerDiv {
        display: flex;
        // border: 1px solid red;
        width: 32.5%;
        color: #f1563f;
        background-color: #ffffff;
        font-weight: 380;
        font-size: 20px;
        // justify-content: center;
        align-items: center;
      }
    }
  }
`;

const SelectionBox = () => {
  console.log("5555555");
  return (
    <SelectionBoxStyle>
      <div>
        <div
          className="outerContainer"
          style={{
            width: "70%",
            height: "140px",
            // border: "2px solid red",
            margin: "auto",
            padding: "10px",
            backgroundColor: "#28190c",
          }}
        >
          <div className="innerContainer">
            <div className="upperBigDiv" style={{}}>
              <div className="zostelDiv" style={{ backgroundColor: "#f1563f" }}>
                ZOSTEL
              </div>
              <div
                className="zostelDiv"
                style={{ borderBottom: "3px solid white" }}
              >
                ZOSTEL HOMES
              </div>
            </div>
            <div className="lowerBigDiv">
              <div className="innerBoxLowerDiv">
                <div style={{ marginLeft: "130px" }}>SELECT DESTINATION</div>
                <div style={{ marginTop: "6px", marginLeft: "73px" }}>
                  <AiFillCaretDown />
                </div>
              </div>
              <div className="innerBoxLowerDiv" style={{ width: "16%" }}>
                <Calender />
              </div>
              <div className="innerBoxLowerDiv" style={{ width: "16%" }}>
                <Calender />
              </div>
              <div
                className="innerBoxLowerDiv"
                style={{ backgroundColor: "#f1563f" }}
              >
                <div
                  style={{
                    marginLeft: "160px",

                    color: "#ffffff",
                  }}
                >
                  BOOK NOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SelectionBoxStyle>
  );
};

export default SelectionBox;
