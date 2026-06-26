import React from "react";
import { Link } from "react-router-dom";

function HallCard({ hall }) {
  return (
    <div className="card">
      <img
        src={hall.image}
        alt={hall.name}
        width="100%"
        height="200"
      />

      <h3>{hall.name}</h3>

      <p>{hall.location}</p>

      <p>Capacity : {hall.capacity}</p>

      <p>₹ {hall.price}</p>

      <Link to={`/hall/${hall.id}`}>
        <button className="btn">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default HallCard;