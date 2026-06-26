import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Halls() {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/halls")
      .then((res) => {
        setHalls(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="halls-container">
        <h1>Our Convention Halls</h1>

        <p className="hall-subtitle">
          Choose from our premium collection of halls for weddings,
          receptions, conferences and special events.
        </p>

        <div className="hall-grid">
          {halls.map((hall) => (
            <div className="hall-card" key={hall._id}>
              <img
                src={hall.image}
                alt={hall.name || hall.hallName}
              />

              <div className="hall-content">
                <h2>{hall.name || hall.hallName}</h2>

                <p>
                  <strong>Location:</strong> {hall.location}
                </p>

                <p>
                  <strong>Capacity:</strong> {hall.capacity}
                </p>

                <h3>₹ {hall.price}</h3>

                <Link to={`/hall/${hall._id}`}>
                  <button className="view-btn">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Halls;