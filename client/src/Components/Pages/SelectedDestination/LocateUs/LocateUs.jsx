import "./LocateUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export const LocateUs = () => {
  let [wrap, setWrap] = useState(false);

  return (
    <>
      <div className="locate-us-container">
        <div className="locate-us-parent">
          <div className="heading">
            {" "}
            <h3 className="common-heading">Locate Us</h3>
          </div>
          <div className="address-parent-div">
            <div className="address-info-div">
              <div className="title-comman">Address:</div>
              <div>
                Manu Temple Road, Old Shimla, Shimla, Himachal Pradesh - 175131
              </div>
              <div>
                <span className="title-comman">Contact: </span>{" "}
                <a className="number" href="tel:02248962265">
                  <span>02248962265</span>
                </a>
              </div>
              <div className="whatapp-direction-div">
                <div className="whatsapp-btn">
                  <a
                    className="tst"
                    href="https://api.whatsapp.com/send?phone=919289229822&text=Hi%20Zostel"
                    target="blank_"
                  >
                    <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>{" "}
                    WhatsApp Us
                  </a>
                </div>
                <div>
                  <div
                    onClick={() => {
                      if (!wrap) {
                        setWrap(true);
                      } else {
                        setWrap(false);
                      }
                    }}
                    className="direction-info"
                  >
                    <span className="Direction-heading">Directions</span>{" "}
                    <span>
                      <FontAwesomeIcon
                        className="downarroy"
                        icon={faArrowDown}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <div className="direction-details">
                    <div
                      style={
                        !wrap
                          ? { display: "none" }
                          : { display: "block", border: "1px solid #e1e1eb" }
                      }
                    >
                      <p className="dir-details-txt">
                        Located in Old Shimla, which is at a distance of 3 km
                        from the very popular Shimla town, our hostel can be
                        reached by taking in a taxi or a tuk-tuk from Shimla.
                        The hostel is located on the far end of old Shimla
                        village and getting here can be an experience in itself.
                        Upon reaching Old Shimla, at the main Old Shimla Road,
                        also known as Manu Temple Road, the property is 200 m
                        from the extremely popular Drifters' cafe. Those
                        travelling by private vehicles can park their cars at
                        the parking close to the cafe. We would be absolutely
                        glad to guide you from the same place, so don't hesitate
                        in giving us a call. Or even simply, take the lane on
                        the right next to cafe Bean and Gone and in 200 m, which
                        would include passing by a Shimlaball court and narrow
                        village roads, you'll reach Zostel Shimla.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="getdirection-btn">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=32.256084,77.178838"
                    target="blank_"
                  >
                    <FontAwesomeIcon icon={faMap} /> Get directions
                  </a>
                </div>
              </div>
            </div>
            <div className="address-map-div">
              <div>
                <img
                  className="map-image"
                  src="https://www.linkpicture.com/q/Screenshot-19_5.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="policy-div">
            <div className="colid-policy-div div-seperator">
              <div>
                <h3 className="common-heading">COVID Policy</h3>
              </div>
              <div className="title-seperator">
                <p>
                  - At the time of check-in, all guests are required to present
                  either a negative RT-PCR report not older than 72 hours, or a
                  double-vaccination certificate.
                </p>
                <p>
                  - Well-equipped first-aid and Covid-19 observation kits are
                  available at this hostel in case of a medical emergency.
                </p>
                <p>
                  - This hostel follows universal hygiene guidelines and a
                  strict sanitisation protocol. Moreover, travellers and staff
                  regularly undergo temperature checks to curtail any health
                  lapses.
                </p>
                <p>
                  - While most staff members stay at the hostel itself, outsider
                  staff undergo a strict thermal check and periodic testing
                  regime.
                </p>
                <p>
                  - This hostel is equipped with a sanitisation counter where
                  travellers can disinfect any outside materials such as
                  parcels, bags, etc.
                </p>
              </div>
            </div>
            <div className="property-policy-div div-seperator">
              <div>
                <h3 className="common-heading">Property Policy</h3>
              </div>
              <div className="title-seperator">
                <p>
                  - Guests are required to pay a 100% advance at the time of
                  booking itself.
                </p>
                <p>
                  - We strictly DO NOT allow a group of more than 4 people. In
                  case of a group of 3 or more, you might be purposefully
                  allotted different dorm rooms. Further, if the group behaviour
                  is deemed unfit at the property, the Zostel Property Manager,
                  upon subjective evaluation, retains the full right to take
                  required action which may also result in an on-spot
                  cancellation without refunds.
                </p>
                <p>
                  - Children below 18 years of age are not permitted entry/stay
                  at any of our hostels, with or without guardians. We do not
                  recommend families.
                </p>
                <p>
                  - Our standard check-in time is 12 PM and the standard
                  check-out time is 10 AM
                </p>
                <p>
                  - We only accept a government ID as valid identification
                  proof. No local IDs shall be accepted at the time of check-in.
                </p>
                <p>
                  - Guests are not permitted to bring outsiders inside the
                  hostel campus.
                </p>
                <p>
                  - We believe in self-help and do not provide luggage
                  assistance or room services.
                </p>
                <p>
                  - Drugs and any substance abuse is strictly banned inside and
                  around the property.
                </p>
                <p>
                  - Alcohol consumption is strictly prohibited in and around the
                  property premises.
                </p>
                <p>- Right to admission reserved. </p>
              </div>
            </div>
            <div className="cancellation-policy-div div-seperator">
              <div>
                <h3 className="common-heading">Cancellation Policy</h3>
              </div>
              <div className="title-seperator">
                <p>
                  - All booking requests will be confirmed at a 100% advance
                  payment at the time of booking.
                </p>
                <p>
                  - We will be providing full credits on any cancellations
                  received more than 7 days prior to the arrival date. You will
                  be able to avail the credited amount for any future booking at
                  any of our properties.
                </p>
                <p>
                  - If informed within 7 days of the standard check-in time (12
                  pm), the amount shall be adjusted against the cancellation
                  fee.
                </p>
                <p>
                  - In case the property is not able to host you due to any
                  local or subjective circumstances, we will provide you with a
                  credit of the same amount. You will be able to avail the
                  credited amount for any future booking at any of our
                  properties.
                </p>
              </div>
            </div>
            <div className="ending-txt">
              For any other queries, please reach out to us at
              reservations@zostel.com.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
