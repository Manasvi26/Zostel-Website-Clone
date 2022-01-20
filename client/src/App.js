import OtpVerification from "./Components/Pages/Otp/OtpVerification";
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import Mainpage from "./main";
import Home from "./Components/Pages/Home/Home";

// user ? <Mainpage /> : <Login />

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
