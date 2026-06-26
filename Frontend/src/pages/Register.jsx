import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      alert("Registration Failed");

    }
  };

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}

      <div className="auth-left">

        <div className="overlay">

          <h1>Elite Event Spaces</h1>

          <h2>Create Your Account</h2>

          <p>
            Join thousands of customers who trust us for booking
            premium convention halls for weddings, conferences,
            parties and memorable celebrations.
          </p>

          <div className="auth-features">

            <div>🏛 Premium Convention Halls</div>

            <div>📅 Easy Online Booking</div>

            <div>💜 Trusted by Hundreds</div>

            <div>⭐ 24×7 Customer Support</div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="auth-right">

        <div className="login-card">

          <h1>Create Account</h1>

          <p>Register to start booking</p>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />

            <button type="submit">
              Create Account
            </button>

          </form>

          <span>
            Already have an account?
            <Link to="/login">
              Login
            </Link>
          </span>

        </div>

      </div>

    </div>
  );
}

export default Register;