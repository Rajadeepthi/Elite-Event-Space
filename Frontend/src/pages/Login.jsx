import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });

      alert("Login Successful");

      navigate("/dashboard");

    } catch (err) {

      alert("Invalid Email or Password");

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="overlay">

          <h1>Elite Event Spaces</h1>

          <h2>
            Welcome Back
          </h2>

          <p>
            Book premium convention halls for weddings,
            receptions, meetings and unforgettable events.
          </p>

          <div className="auth-features">

            <div>✔ Premium Halls</div>

            <div>✔ Instant Booking</div>

            <div>✔ Secure Payments</div>

            <div>✔ 24/7 Support</div>

          </div>

        </div>

      </div>

      <div className="auth-right">

        <div className="login-card">

          <h1>Login</h1>

          <p>Sign in to continue</p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <span>
            Don't have an account?
            <Link to="/register">
              Register
            </Link>
          </span>

        </div>

      </div>

    </div>
  );
}

export default Login;