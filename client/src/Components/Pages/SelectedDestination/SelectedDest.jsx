import { LocateUs } from "./LocateUs/LocateUs";
import { Footer } from "./Footer/Footer";
import { RangeSelector } from "./RangeSelector/RangeSelector";
import { UpperDescription } from "./UpperDescription/UpperDescription";
import NavBar from "../../Headers/NavBar";

export const SelectedDestination = () => {
  return (
    <>
      <NavBar />
      <UpperDescription />
      <RangeSelector />
      <LocateUs />
      <Footer />
    </>
  );
};
