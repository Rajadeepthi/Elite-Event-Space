import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Elite Event Spaces</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/halls">Halls</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;