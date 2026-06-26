import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function HallDetails() {
  const { id } = useParams();

  const halls = [
    {
      name: "Royal Palace",
      location: "Visakhapatnam",
      price: "₹50,000",
      capacity: "1000 Guests",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      description:
        "A luxurious convention hall suitable for weddings, receptions and large-scale events."
    },
    {
      name: "Grand Arena",
      location: "Hyderabad",
      price: "₹75,000",
      capacity: "1500 Guests",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
      description:
        "Modern hall with premium interiors and corporate event facilities."
    },
    {
      name: "Elite Convention",
      location: "Bangalore",
      price: "₹60,000",
      capacity: "1200 Guests",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      description:
        "Elegant venue ideal for conferences, meetings and celebrations."
    }
  ];

  const hall = halls[id];

  return (
    <>
      <Navbar />

      <div className="details-container">
        <div className="details-card">
          <img src={hall.image} alt={hall.name} />

          <div className="details-content">
            <h1>{hall.name}</h1>

            <p>
              <strong>Location:</strong> {hall.location}
            </p>

            <p>
              <strong>Capacity:</strong> {hall.capacity}
            </p>

            <p>
              <strong>Price:</strong> {hall.price}
            </p>

            <p>{hall.description}</p>

            <button className="book-btn">
              Book This Hall
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HallDetails;