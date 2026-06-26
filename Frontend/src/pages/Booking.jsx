import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Booking() {
  const [booking, setBooking] = useState({
    name: "",
    hallName: "",
    eventDate: "",
    guests: ""
  });

  const handleChange = (e) => {
    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/bookings",
        booking
      );

      alert("Booking Submitted Successfully!");

      setBooking({
        name: "",
        hallName: "",
        eventDate: "",
        guests: ""
      });

    } catch (error) {
      console.log(error);

      alert("Booking Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">
        <div className="booking-form">
          <h1>Book Your Hall</h1>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={booking.name}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="hallName"
              placeholder="Hall Name"
              value={booking.hallName}
              onChange={handleChange}
              required
            />

            <input
              type="date"
              name="eventDate"
              value={booking.eventDate}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="guests"
              placeholder="Guests"
              value={booking.guests}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Book Now
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Booking;