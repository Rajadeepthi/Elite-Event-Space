import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Halls from "./pages/Halls";
import HallDetails from "./pages/HallDetails";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/halls" element={<Halls />} />
      <Route path="/hall/:id" element={<HallDetails />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;