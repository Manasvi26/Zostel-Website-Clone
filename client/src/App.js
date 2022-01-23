import OtpVerification from "./Components/Pages/Otp/OtpVerification";
import React from "react";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./login";
import Mainpage from "./main";
import Home from "./Components/Pages/Home/Home";
import {DirectRoutes} from './Components/Router/Routes'

// user ? <Mainpage /> : <Login />

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
       <DirectRoutes />
    </div>
  );
}

export default App;