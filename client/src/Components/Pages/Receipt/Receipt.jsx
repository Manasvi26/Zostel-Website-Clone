import React from "react";
import { Footer } from "../SelectedDestination/Footer/Footer";
import NavBar from "../../Headers/NavBar";
import "./Receipt.css";
import { useSelector } from "react-redux";

export function Receipt() {
  const { loading, items, total, error } = useSelector((state) => {
    return {
      loading: state.cart.loading,
      items: state.cart.items,
      total: state.cart.total,
      error: state.cart.error,
    };
  });
  console.log(items);

  const room1 = items.rooms[0].title;
  // console.log(room1);
  const room2 = items.rooms[1].title;
  // const room3 = items.rooms[2].title;
  // console.log(room2);

  const formData = useSelector((state) => state.form.formData);
  const firstName = formData.firstname;
  const lastName = formData.lastname;
  const phoneNumber = formData.phone;

  return (
    <div>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="Contain">
        <div
          className="journey"
          style={{ boxShadow: "5px 3px 5px 3px rgb(245, 238, 238)" }}
        >
          <h1>Zostel Shimla (KOTKHAI)</h1>
          <h4 style={{ color: "grey" }}>
            {items.rooms.map((el) => (
              <div>{el.title}</div>
            ))}
          </h4>
        </div>
        <div
          className="GuestDetails"
          style={{
            boxShadow: "5px 3px 5px 3px rgb(245, 238, 238)",
            height: "140px",
            paddingTop: "27px",
          }}
        >
          <h2 style={{ marginLeft: "-440px" }}>Guest Details</h2>
          <p style={{ marginLeft: "-460px", color: "grey", fontWeight: "649" }}>
            Guest Name:
          </p>
          <p
            style={{
              marginLeft: "407px",
              marginTop: "-6%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            {firstName + " " + lastName}
          </p>
          <p style={{ marginLeft: "-475px", color: "grey", fontWeight: "649" }}>
            Phone no:
          </p>
          <p
            style={{
              marginLeft: "407px",
              marginTop: "-5%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            {phoneNumber}
          </p>
        </div>
        <div
          style={{
            boxShadow: "5px 3px 5px 3px rgb(245, 238, 238)",
            height: "276px",
            paddingTop: "27px",
          }}
        >
          <h2 style={{ marginLeft: "-410px" }}>Booking Summary</h2>
          <p
            style={{
              marginLeft: "-407px",
              color: "grey",
              fontSize: "medium",
              fontWeight: "649",
            }}
          >
            Zostel Status - Confirmed{" "}
          </p>
          <p
            style={{
              marginLeft: "380px",
              marginTop: "-6%",
              marginBottom: "3%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            Your reservation is confirmed
          </p>
          <p></p>
          <p
            style={{
              marginLeft: "-480px",
              color: "grey",
              fontSize: "medium",
              fontWeight: "649",
            }}
          >
            Date & Time
          </p>
          <p
            style={{
              marginLeft: "380px",
              marginTop: "-6%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            25 Jan 2022 (Check in: 11AM)
          </p>

          <p
            style={{
              marginLeft: "-520px",
              color: "grey",
              fontSize: "medium",
              fontWeight: "649",
            }}
          >
            Guests
          </p>
          <p
            style={{
              marginLeft: "380px",
              marginTop: "-6%",
              marginBottom: "3%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            {items.rooms[0].person} Guests
          </p>

          <p
            style={{
              marginLeft: "-520px",
              color: "grey",
              fontSize: "medium",
              fontWeight: "649",
            }}
          >
            Name
          </p>
          <p
            style={{
              marginLeft: "380px",
              marginTop: "-6%",
              marginBottom: "1%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            {firstName + " " + lastName}
          </p>

          <p
            style={{
              marginLeft: "-540px",
              color: "grey",
              fontSize: "medium",
              fontWeight: "649",
            }}
          >
            ID
          </p>
          <p
            style={{
              marginLeft: "380px",
              marginTop: "-6%",
              marginBottom: "2%",
              fontWeight: "649",
              color: "#43474b",
            }}
          >
            DO13501014
          </p>
        </div>
      </div>
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
