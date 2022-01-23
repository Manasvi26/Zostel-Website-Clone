import "./RangeSelector.css";
import {
  faUser,
  faKey,
  faHotTub,
  faWifi,
  faTv,
  faDumpster,
  faMountain,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { MdArrowRightAlt, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addItemError,
  addItemLoading,
  addItemSuccess,
} from "../../../../Features/Cart/Actions";

export const RangeSelector = () => {
  return (
    <>
      <div className="bookYourStay-container">
        <BookYourStay />
        <DifferentRange />
      </div>
    </>
  );
};

const BookYourStay = () => {
  const datesGot = {
    dayF: "Sat",
    dateF: "25",
    monthF: "Jan",
    yearF: "2022",
    dayT: "Fri",
    dateT: "26",
    monthT: "Jan",
    yearT: "2022",
  };

  return (
    <>
      <div className="bookYourStay-head">
        <div className="bookYourStay">
          <div className="bkYrSt-chield-one">
            <div className="bkYrSt-chld-one-chld-one">
              <h1 style={{ fontSize: "28px", fontWeight: "900" }}>
                Book your stay
              </h1>
              <p>Select from a range of beautiful rooms</p>
            </div>
            <div className="bkYrSt-chld-one-chld-two">
              <div className="date-selctor">
                <span className="dateFrom">
                  {datesGot.dayF} {datesGot.dateF} {datesGot.monthF}{" "}
                  {datesGot.yearF}
                </span>
                <span className="dateSep">{"-->"}</span>
                <span className="dateTo">
                  {datesGot.dayT} {datesGot.dateT} {datesGot.monthT}{" "}
                  {datesGot.yearT}
                </span>
              </div>
            </div>
          </div>
          <div className="bkYrSt-chield-two">
            <h1 style={{ fontSize: "28px", fontWeight: "900" }}>Summary</h1>1
            night starting from{" "}
            <span style={{ fontWeight: "600" }}>
              {datesGot.dayF} {datesGot.dateF} {datesGot.yearF}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const DifferentRange = () => {
  const roomsAva = [
    {
      id: "1",
      title: "2 Bed Mixed Dorm (with Shared Bathroom)",
      person: 1,
      description: "A bed in 2 Bed Mixed Dorm (with Shared Bathroom)",
      price: "549",
      image:
        "https://img.cdn.zostel.com/zostel/gallery/images/s40gOMmTTraGlABTpUKs1w/superior-2-bed-mixed-dorm-with-shared-bathr_23DXLDc.jpg?w=200",
    },
    {
      id: "2",
      title: "4 Bed Female Dorm",
      person: 1,
      description: "A bed in 4 Bed Female Dorm",
      price: "549",
      image:
        "https://img.cdn.zostel.com/zostel/gallery/images/Q4GAzC9eRrmTBTUc7mycPw/superior-4-bed-female-dorm-20201112102615.jpg?w=200",
    },
    {
      id: "3",
      title: "4 Bed Mixed Dorm (with Shared Bathroom)",
      person: 1,
      description: "A bed in 4 Bed Mixed Dorm (with Shared Bathroom)",
      price: "499",
      image:
        "https://img.cdn.zostel.com/zostel/gallery/images/YUSRXG_USES7akqW0Fmi1A/superior-4-bed-mixed-dorm-with-shared-bathr_3RgVTuk.jpg?w=200",
    },
    {
      id: "4",
      title: "Deluxe Private Room",
      person: 2,
      description: "A Deluxe Private Room with double bed.",
      price: "2199",
      image:
        "https://img.cdn.zostel.com/zostel/gallery/images/637ioYdjRjuxfmFycddzHA/deluxe-private-room-20201112102620.jpg?w=200",
    },
  ];

  const [avalDates, setAvalDates] = useState({});
  const [selRoomCount, setSelRoomCount] = useState(1);
  const [isSelecteRoom, setIsSelecteRoom] = useState(false);
  const [selectedRoomsIs, setselectedroomIs] = useState({
    rooms: [],
  });
  const [totalAmountIs, setTotalAmountis] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const avalDatesDetails = [
    {
      day: "Sat",
      month_date: "Jan 22",
      price: 599,
      units: 2,
    },
    {
      day: "Sun",
      month_date: "Jan 23",
      price: 599,
      units: 2,
    },
    {
      day: "Mon",
      month_date: "Jan 24",
      price: 599,
      units: 3,
    },
    {
      day: "Thue",
      month_date: "Jan 25",
      price: 599,
      units: 2,
    },
    {
      day: "Wed",
      month_date: "Jan 26",
      price: 599,
      units: 1,
    },
    {
      day: "Thus",
      month_date: "Jan 27",
      price: 599,
      units: 3,
    },
    {
      day: "Fri",
      month_date: "Jan 28",
      price: 599,
      units: 3,
    },
  ];

  const handleRoomsSelect = (el) => {
    setSelRoomCount(1);
    setIsSelecteRoom(true);
    document.getElementById(el.id).style.display = "none";
    document.getElementById(`${el.id}range`).style.display = "block";

    const checkExist = selectedRoomsIs.rooms.map((ele) => ele.id);

    if (!checkExist.includes(el.id))
      setselectedroomIs({
        ...selectedRoomsIs,
        rooms: [...selectedRoomsIs.rooms, el],
      });
  };

  useEffect(() => {
    roomsAva.forEach((el) => {
      avalDates[`${el.id}avalDates`] = false;
    });

    if (selectedRoomsIs.rooms)
      setTotalAmountis(
        selectedRoomsIs.rooms.reduce(function (tot, rooms) {
          return tot + parseInt(rooms.price);
        }, 0)
      );

    dispatch(addItemSuccess({ selectedRoomsIs, totalAmountIs }));
  }, [selectedRoomsIs, totalAmountIs]);

  const handleRemoveSelectedRoom = (el) => {
    setselectedroomIs({
      ...selectedRoomsIs,
      rooms: selectedRoomsIs.rooms.filter((elm) => {
        return el.id !== elm.id;
      }),
    });
    document.getElementById(`${el.id}range`).style.display = "none";
    document.getElementById(el.id).style.display = "block";
  };

  const handleRoomCound = (count, el) => {
    setSelRoomCount((prev) => {
      if (prev === 0) {
        document.getElementById(`${el.id}range`).style.display = "none";
        document.getElementById(el.id).style.display = "block";
        setIsSelecteRoom(false);
        return 1;
      }
      return prev + count;
    });
    document.getElementById(`${el.id}txt`).textContent = selRoomCount;
  };

  const handleTggleAvalDatesDiv = (id) => {
    if (avalDates[`${id}avalDates`] == false) {
      setAvalDates({
        ...avalDates,
        [`${id}avalDates`]: true,
      });
      document.getElementById(`${id}avalDates`).style.display = "block";
    } else {
      setAvalDates({
        ...avalDates,
        [`${id}avalDates`]: false,
      });
      document.getElementById(`${id}avalDates`).style.display = "none";
    }
  };

  return (
    <>
      <div className="diffRooms-container">
        <div className="diffRooms-parent">
          {roomsAva.map((el) => {
            return (
              <>
                <div className="room-on-view-parent">
                  <div className="room-on-view">
                    <div
                      className="room-on-view-img"
                      style={{
                        background: `url("${el.image}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                    <div className="room-on-view-details">
                      <div className="d-c-r-title-price">
                        <div className="dcr-t">
                          <span className="dcr-t-span">{el.title}</span>
                        </div>
                        <div className="dcr-p">
                          {" "}
                          <span className="dcr-p-p">
                            <span className="dcr-p-1">₹{el.price}/</span>{" "}
                            <span className="dcr-p-2">night</span>
                          </span>
                        </div>
                      </div>
                      <div className="d-c-r-user-option">
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> x{" "}
                        {el.person}
                      </div>
                      <div className="dcr-desc">{el.description}</div>
                      <div className="service-icons">
                        <span>
                          <FontAwesomeIcon icon={faKey}></FontAwesomeIcon>
                        </span>{" "}
                        <span>
                          <FontAwesomeIcon icon={faHotTub}></FontAwesomeIcon>
                        </span>{" "}
                        <span>
                          <FontAwesomeIcon icon={faWifi}></FontAwesomeIcon>
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faTv}></FontAwesomeIcon>
                        </span>{" "}
                        <span>
                          <FontAwesomeIcon icon={faDumpster}></FontAwesomeIcon>
                        </span>{" "}
                        <span>
                          <FontAwesomeIcon icon={faMountain}></FontAwesomeIcon>
                        </span>
                      </div>
                      <div className="dcr-selectRoom-availability">
                        <div className="dcr-sel-ava-parent">
                          <div
                            onClick={() => {
                              handleTggleAvalDatesDiv(el.id);
                            }}
                            className="dcr-availability"
                          >
                            <span className="dcr-availability-span">
                              Availability calender
                            </span>
                          </div>
                          <div className="dcr-button-sel">
                            <span id={el.id} className="dcr-button-sel-span">
                              {" "}
                              <button
                                onClick={() => {
                                  handleRoomsSelect(el);
                                }}
                                className="dcr-button"
                              >
                                Select unit
                              </button>
                            </span>
                            <span
                              className="dcr-button-sel-span"
                              style={{ display: "none" }}
                              id={`${el.id}range`}
                            >
                              <button
                                onClick={() => {
                                  handleRoomCound(-1, el);
                                }}
                                className="reduce-room-count-btn"
                              >
                                -
                              </button>
                              <span
                                id={`${el.id}txt`}
                                className="dcr-selected-room-number"
                              >
                                1
                              </span>{" "}
                              <button
                                onClick={() => {
                                  handleRoomCound(1, el);
                                }}
                                className="increase-room-count-btn"
                              >
                                +
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id={`${el.id}avalDates`}
                    style={{ display: "none" }}
                    className="available-date-for-room-container"
                  >
                    <div className="available-date-for-room">
                      {avalDatesDetails.map((el) => {
                        return (
                          <>
                            <div>
                              <div className="a-d-f-r-day">{el.day}</div>
                              <div className="a-d-f-r-date">
                                {el.month_date}
                              </div>
                              <div className="a-d-f-r-price">
                                <span>₹</span>
                                <span>{el.price}</span>
                              </div>
                              <div className="a-d-f-r-units">
                                {el.units} Units
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="aval-dates-scroll">
                      <MdArrowRightAlt size="20px" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div style={{ width: "25%" }} className="rooms-summary-div-container">
        {!isSelecteRoom ? (
          <div id="roomNotSel" className="r-s-no-room-sel">
            <img
              className="r-s-no-room-sel-img"
              src="https://book.zostel.com/static/media/gray-zobu.018014d9.svg"
              alt=""
            />
            <div className="r-s-no-room-txt">No room selected</div>
          </div>
        ) : (
          <div className="sel-room-detail-price-container">
            {selectedRoomsIs.rooms.map((el) => {
              return (
                <>
                  <div className="selected-rooms-details">
                    <div className="summary-div-indi">
                      <div className="summary-div-indi-title">
                        <span>{el.title}</span>
                      </div>
                      <div className="summary-div-indi-price">
                        <span
                          onClick={() => {
                            handleRemoveSelectedRoom(el);
                          }}
                        >
                          <MdDelete className="sel-room-delete" size="17px" />
                        </span>
                      </div>
                    </div>
                    <div className="summary-div-indi">
                      <div className="summary-div-indi-title">
                        {" "}
                        <span>
                          <span>₹{el.price}</span> <span>x</span>
                          <span>1</span>{" "}
                        </span>
                      </div>
                      <div className="summary-div-indi-price">
                        <span>
                          <span>₹</span>
                          <span></span>
                          {el.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}

            {totalAmountIs ? (
              <div className="total-price-all-rooms">
                <div className="sumy-bookNow-common-1">
                  <div className="sumy-bookNow-common-2">
                    <span>Tax</span>
                  </div>
                  <div className="sumy-bookNow-common-3">
                    <span>₹0</span>
                  </div>
                </div>
                <div className="sumy-bookNow-common-1">
                  <div className="sumy-bookNow-common-2">
                    <span>total(tax incl.)</span>
                  </div>
                  <div className="sumy-bookNow-common-3">
                    <span>
                      <span>₹</span>
                      <span>{totalAmountIs}</span>
                    </span>
                  </div>
                </div>
                <div className="sumy-bookNow-common-1">
                  <div className="sumy-bookNow-common-2">
                    <span>payable now</span>
                  </div>
                  <div className="sumy-bookNow-common-3">
                    <span>
                      <span>₹</span>
                      <span></span>
                      {totalAmountIs}
                    </span>
                  </div>
                </div>
                <div className="des-booknow-btn-final-container">
                  <button
                    onClick={() => {
                      navigate("/details");
                    }}
                    className="des-booknow-btn-final"
                  >
                    Book now
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};
