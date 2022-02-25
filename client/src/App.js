import React from "react";
import { auth } from "./Components/Pages/Otppage/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./Components/Pages/Otppage/login";
import Mainpage from "./Components/Pages/Otppage/main";
import Home from "./Components/Pages/Home/Home";
import { DirectRoutes } from "./Components/Router/Routes";

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
