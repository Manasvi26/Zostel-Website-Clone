import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavStyle = styled.div`
  display: flex;
  margin: auto;
  width: 98%;
  height: 43px;
  // border: 2px solid red;
  padding: 7px 14px;

  img {
    width: 161.5px;
    height: 42px;
  }

  .navContentOuterContainer {
    display: flex;

    // width: 1080px;
    gap: 3px;

    height: 57px;
    // border: 2px solid green;
    margin-left: 345px;

    .navInnerContent {
      height: 48px;
      display: flex;
      gap: 7px;
      font-weight: 400;
      font-size: 16px;
      // border: 1px solid blue;
      padding-top: 8px;

      padding-right: 19px;
      // background-color: yellow;
    }
    .navInnerContent:hover {
      height: 48px;
      display: flex;
      gap: 7px;
      font-weight: 400;
      font-size: 16px;
      //   border: 2px solid blue;
      padding-top: 8px;

      padding-right: 19px;

      cursor: pointer;
      background-color: #393939;
      color: #e9e1e1;
    }
  }
`;

const dropDownStyle = styled.div`
  .dropDownCont {
    margin-top: 100px;
    display: flex;
    height: 400px;
    border: 2px solid red;
  }

  .dropDown {
  }
`;

const NavBar = () => {
  const Navigate = useNavigate();

  const zostelLogo =
    "https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.png";

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
      }}
    >
      <NavStyle>
        <img onClick={() => Navigate("/")} src={zostelLogo} alt="zostelLogo" />
        <div className="navContentOuterContainer">
          <div className="navInnerContent">
            HOSTELS
            <span
              style={{ height: "15px", marginTop: "3.5px" }}
              className="arrowIcon"
            >
              <AiFillCaretDown />
            </span>
          </div>
          <div className="navInnerContent">
            ZOSTEL HOMES
            <span
              style={{ height: "15px", marginTop: "3.5px" }}
              className="arrowIcon"
            >
              <AiFillCaretDown />
            </span>
          </div>
          <div className="navInnerContent">TRAVEL FOR TOMMORROW</div>
          <div className="navInnerContent">LONGSTAYS</div>
          <div className="navInnerContent">BOOK NOW</div>
          <div className="navInnerContent">CAREERS</div>
          <div className="navInnerContent">FRANCHISE</div>
          <div className="navInnerContent">BLOGS</div>
        </div>
      </NavStyle>
      {/* <dropDownStyle>
        <div className="dropDownCont">
          <div className="dropDown">
            <ul>Alleppey</ul>
            <ul>Aurangabad</ul>
            <ul>Bangalore</ul>
            <ul>Barot (Rajgundha)</ul>
            <ul>BIR 2.0</ul>
            <ul>Chennai</ul>
            <ul>Chitkul</ul>
            <ul>Coorg</ul>
            <ul>Dalhousie</ul>
            <ul>Delhi</ul>
            <ul>Gangtok</ul>
            <ul>Gokarna</ul>
            <ul>Jaipur</ul>
          </div>
          <div className="dropDown">
            <ul>Jaisalmer</ul>
            <ul>Jodhpur</ul>
            <ul>Kathmandu</ul>
            <ul>Kochi</ul>
            <ul>Kodaikanal</ul>
            <ul>Kolad</ul>
            <ul>Leh</ul>
            <ul>Manali</ul>
            <ul>Mcleodganj</ul>
            <ul>Mukteshwar</ul>
            <ul>Mumbai</ul>
            <ul>Munnar</ul>
            <ul>Mussorie</ul>
          </div>
          <div className="dropDown">
            <ul>Mysore</ul>
            <ul>Ooty</ul>
            <ul>Panchgani</ul>
            <ul>Pokhra</ul>
            <ul>Pushkar</ul>
            <ul>Rishikesh 2.0</ul>
            <ul>Shangarh</ul>
            <ul>Sissu</ul>
            <ul>Spiti</ul>
            <ul>Udaipur</ul>
            <ul>Vagamon</ul>
            <ul>Varkala</ul>
            <ul>Wayanad</ul>
          </div>
        </div>
      </dropDownStyle> */}
    </div>
  );
};

export default NavBar;

//  <div className="dropDownCont">
//    <div className="dropDown">
//      <ul>Alleppey</ul>
//      <ul>Aurangabad</ul>
//      <ul>Bangalore</ul>
//      <ul>Barot (Rajgundha)</ul>
//      <ul>BIR 2.0</ul>
//      <ul>Chennai</ul>
//      <ul>Chitkul</ul>
//      <ul>Coorg</ul>
//      <ul>Dalhousie</ul>
//      <ul>Delhi</ul>
//      <ul>Gangtok</ul>
//      <ul>Gokarna</ul>
//      <ul>Jaipur</ul>
//    </div>
//    <div className="dropDown">
//      <ul>Jaisalmer</ul>
//      <ul>Jodhpur</ul>
//      <ul>Kathmandu</ul>
//      <ul>Kochi</ul>
//      <ul>Kodaikanal</ul>
//      <ul>Kolad</ul>
//      <ul>Leh</ul>
//      <ul>Manali</ul>
//      <ul>Mcleodganj</ul>
//      <ul>Mukteshwar</ul>
//      <ul>Mumbai</ul>
//      <ul>Munnar</ul>
//      <ul>Mussorie</ul>
//    </div>
//    <div className="dropDown">
//      <ul>Mysore</ul>
//      <ul>Ooty</ul>
//      <ul>Panchgani</ul>
//      <ul>Pokhra</ul>
//      <ul>Pushkar</ul>
//      <ul>Rishikesh 2.0</ul>
//      <ul>Shangarh</ul>
//      <ul>Sissu</ul>
//      <ul>Spiti</ul>
//      <ul>Udaipur</ul>
//      <ul>Vagamon</ul>
//      <ul>Varkala</ul>
//      <ul>Wayanad</ul>
//    </div>
//  </div>;
