import React from "react";
import { useState } from "react";
import "./OtpPage.css";
import { useSelector } from "react-redux";
import NavBar from "../../Headers/NavBar";
import { Footer } from "../SelectedDestination/Footer/Footer";
import { useNavigate } from "react-router-dom";

function OtpPage() {
  const Navigate = useNavigate();
  // const [phoneNumber, setPhoneNumber] = useState("");

  const { loading, items, total, error } = useSelector((state) => {
    console.log(state.cart);

    return {
      loading: state.cart.loading,
      items: state.cart.items,
      total: state.cart.total,
      error: state.cart.error,
    };
  });

  const number = useSelector((state) => state.form.formData.phone);
  // console.log(number);

  return (
    <div>
      <NavBar />

      <div className="page" style={{ marginTop: "10%", marginLeft: "35%" }}>
        <h3
          style={{
            marginTop: "20px",
            marginLeft: "141px",
            marginBottom: "30px",
          }}
        >
          Enter OTP to confirm
        </h3>
        <div className="info">
          <img
            className="imgs"
            src="https://img.cdn.zostel.com/zostel/gallery/images/s40gOMmTTraGlABTpUKs1w/superior-2-bed-mixed-dorm-with-shared-bathr_23DXLDc.jpg?w=64"
            alt=""
          />
          <h4
            className="ghouse"
            style={{ marginTop: "0%", marginLeft: "19px" }}
          >
            The Green House
          </h4>
          <h5 className="lake">&nbsp;Sait Lake</h5>
          <p className="guest" style={{ color: "grey", marginLeft: "127px" }}>
            2 Guests
          </p>
          <div
            style={{
              fontWeight: "600",
              fontSize: "16px",
              marginTop: "7px",
              paddingTop: "12px",
              marginLeft: "125px",
            }}
          >
            Payble Amount : {total}/-
          </div>
        </div>
        <h6
          className="otp"
          style={{
            marginTop: "28px",
            marginBottom: "15px",
            marginLeft: "116px",
          }}
        >
          Enter OTP sent to {number}
        </h6>
        <input
          required
          id="inp"
          className="input2"
          type="text"
          name="OTP"
          placeholder="enter otp"
          style={{ marginLeft: "78px" }}
        />

        <button
          onClick={() => Navigate("/receipt")}
          className="buttons"
          style={{
            marginLeft: "78px",
            width: "270px",
            backgroundColor: "#de533d",
          }}
        >
          Confirm
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export { OtpPage };
