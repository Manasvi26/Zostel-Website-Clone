import OtpVerification from "./Components/Pages/Otp/OtpVerification";
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import Mainpage from "./main";
import NavBar from "./Components/Headers/NavBar";

function App() {
  const [user] = useAuthState(auth);
  // user ? <Mainpage /> : <Login />

  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}

export default App;
