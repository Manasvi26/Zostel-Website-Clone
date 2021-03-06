import { Route, Routes } from "react-router-dom";
import { PreSelDestination } from "../Pages/PreSelectedDestination/PreSelDestination";
import { SelectedDestination } from "../Pages/SelectedDestination/SelectedDest";
import Home from "../Pages/Home/Home";
import { Details } from "../Pages/Details/Details";
import { OtpPage } from "../Pages/Otppage/OtpPage";
import { Receipt } from "../Pages/Receipt/Receipt";

export const DirectRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/predestination" element={<PreSelDestination />}></Route>
      <Route path="/destination" element={<SelectedDestination />}></Route>
      <Route path="/details" element={<Details />}></Route>
      <Route path="/otp-page" element={<OtpPage />}></Route>
      <Route path="/receipt" element={<Receipt />}></Route>
    </Routes>
  );
};
