import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    // Fetch Bookings
    axios
      .get("http://localhost:5000/api/bookings")
      .then((res) => {
        setBookings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch Halls
    axios
      .get("http://localhost:5000/api/halls")
      .then((res) => {
        setHalls(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Total Guests
  const totalGuests = bookings.reduce(
    (sum, booking) => sum + Number(booking.guests || 0),
    0
  );

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <h1>Dashboard Overview</h1>

        <div className="stats-grid">

          <div className="stat-card">
            <h2>{bookings.length}</h2>
            <p>Total Bookings</p>
          </div>

          <div className="stat-card">
            <h2>{halls.length}</h2>
            <p>Available Halls</p>
          </div>

          <div className="stat-card">
            <h2>{totalGuests}</h2>
            <p>Total Guests</p>
          </div>

          <div className="stat-card">
            <h2>Active</h2>
            <p>Booking Status</p>
          </div>

        </div>

        <div className="recent-bookings">
          <h2>Recent Bookings</h2>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Hall</th>
                <th>Date</th>
                <th>Guests</th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.name}</td>
                    <td>{booking.hallName}</td>
                    <td>{booking.eventDate}</td>
                    <td>{booking.guests}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No Bookings Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;