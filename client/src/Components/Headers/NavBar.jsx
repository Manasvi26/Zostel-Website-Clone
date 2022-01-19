import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
const NavStyle = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 54px;
  //   border: 2px solid red;
  padding: 7px 14px;

  img {
    width: 182.5px;
    height: 51px;
  }

  .navContentOuterContainer {
    display: flex;

    width: 1080px;
    gap: 3px;

    height: 57px;
    // border: 2px solid green;
    margin-left: 422px;

    div {
      height: 48px;
      display: flex;
      gap: 7px;
      font-weight: 400;
      font-size: large;
      //   border: 2px solid blue;
      padding-top: 8px;

      //   padding-left: 7px;
      padding-right: 19px;
      // background-color: yellow;
    }
    div:hover {
      height: 48px;
      display: flex;
      gap: 7px;
      font-weight: 400;
      font-size: large;
      //   border: 2px solid blue;
      padding-top: 8px;
      padding-left: 7px;

      padding-right: 19px;

      cursor: pointer;
      background-color: #393939;
      color: #e9e1e1;
    }
  }
`;

const NavBar = () => {
  const zostelLogo =
    "https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.png";

  return (
    <NavStyle>
      <img src={zostelLogo} alt="zostelLogo" />
      <div className="navContentOuterContainer">
        <div>
          HOSTELS
          <span
            style={{ height: "15px", marginTop: "3.5px" }}
            className="arrowIcon"
          >
            <AiFillCaretDown />
          </span>
        </div>
        <div>
          ZOSTEL HOMES
          <span
            style={{ height: "15px", marginTop: "3.5px" }}
            className="arrowIcon"
          >
            <AiFillCaretDown />
          </span>
        </div>
        <div>TRAVEL FOR TOMMORROW</div>
        <div>LONGSTAYS</div>
        <div>BOOK NOW</div>
        <div>CAREERS</div>
        <div>FRANCHISE</div>
        <div>BLOGS</div>
      </div>
    </NavStyle>
  );
};

export default NavBar;
