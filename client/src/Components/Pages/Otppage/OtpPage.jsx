import React from "react";
import { firebase, auth } from "./firebase";
import { useState } from "react";
import "./OtpPage.css";
import { useSelector } from "react-redux";
import NavBar from "../../Headers/NavBar";
import { Footer } from "../SelectedDestination/Footer/Footer";
import { useNavigate } from "react-router-dom";

function OtpPage() {
  const Navigate = useNavigate();
  // const [phoneNumber, setPhoneNumber] = useState("");
  // Inputs
  const [mynumber, setnumber] = useState("+91");
  const [otp, setotp] = useState("");
  const [show, setshow] = useState(false);
  const [final, setfinal] = useState("");

  // Sent OTP
  const signin = () => {
    if (mynumber === "" || mynumber.length < 10) return;

    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setfinal(result);
        alert("code sent");
        setshow(true);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };

  // Validate OTP
  const ValidateOtp = () => {
    console.log(final);
    if (otp === null || final === null) return;
    final
      .confirm(otp)
      .then((result) => {
        console.log(result);
        if (result) {
          Navigate("/receipt");
        }
        // success
      })
      .catch((err) => {
        alert("Wrong code");
      });
  };

  const { loading, items, total, error } = useSelector((state) => {
    // console.log(state.cart);
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
          OTP verification
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
            1 Guests
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

        <div style={{ display: !show ? "block" : "none" }}>
          <h6
            className="otp"
            style={{
              marginTop: "28px",
              marginBottom: "15px",
              marginLeft: "116px",
            }}
          >
            Enter your mobile number:
          </h6>
          <input
            id="inp"
            className="input2"
            style={{ marginLeft: "78px" }}
            value={mynumber}
            onChange={(e) => {
              setnumber(e.target.value);
            }}
            placeholder="phone number"
          />
          <br />
          <br />
          <div style={{ marginLeft: "60px" }} id="recaptcha-container"></div>
          <button
            className="buttons"
            style={{
              marginLeft: "78px",
              marginBottom: "50px",
              width: "270px",
              backgroundColor: "#de533d",
            }}
            onClick={signin}
          >
            Send OTP
          </button>
        </div>
        <div style={{ display: show ? "block" : "none" }}>
          <input
            type="text"
            id="inp"
            className="input2"
            style={{ marginLeft: "78px", marginTop: "20px" }}
            placeholder={"Enter your OTP"}
            onChange={(e) => {
              setotp(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <button
            className="buttons"
            style={{
              marginLeft: "78px",
              marginBottom: "20px",
              width: "270px",
              backgroundColor: "#de533d",
            }}
            onClick={ValidateOtp}
          >
            Verify
          </button>
        </div>
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
