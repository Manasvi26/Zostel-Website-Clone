import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import Login from "./login";
import Mainpage from "./main";
import { Receipt } from "../Receipt/Receipt";
import { OtpPage } from "./OtpPage";

const RedirectPage = () => {
  return (
    <div>
      <h1>Redirect Page Component</h1>
      {user ? <Mainpage /> : <OtpPage />}
    </div>
  );
};

export default RedirectPage;
