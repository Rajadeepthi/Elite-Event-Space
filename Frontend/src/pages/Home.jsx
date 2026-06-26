import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <h1>
            Find The Perfect
            <br />
            <span>Convention Hall</span>
            <br />
            For Your Event
          </h1>

          <p>
            Discover and book the best convention halls for weddings,
            meetings, parties and corporate events.
          </p>

          <div className="hero-buttons">
            <Link to="/halls">
              <button className="btn-primary">
                Explore Halls
              </button>
            </Link>

            <Link to="/booking">
              <button className="btn-secondary">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
            alt="Hall"
          />
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🏛 Premium Halls</h3>
          <p>Well maintained halls with top facilities.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Trusted Service</h3>
          <p>Trusted by thousands of happy customers.</p>
        </div>

        <div className="feature-card">
          <h3>💰 Best Price</h3>
          <p>Affordable prices without hidden charges.</p>
        </div>

        <div className="feature-card">
          <h3>📞 24/7 Support</h3>
          <p>We are here to help anytime.</p>
        </div>
      </section>

      <section className="popular-halls">
        <h2>Popular Convention Halls</h2>

        <div className="hall-grid">
          <div className="hall-card">
            <img
              src="https://media.istockphoto.com/id/2167797465/photo/empty-convention-hall-center-the-backdrop-for-exhibition-stands-booth-elements-meeting-room.jpg?s=612x612&w=0&k=20&c=JA2uLhIzYBVueNNsxmdfbDR54Xtz4YvG_mBApacQ3gw="
              alt=""
            />
            <h3>S Conventions</h3>
            <p>Visakhapatnam</p>
          </div>

          <div className="hall-card">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865"
              alt=""
            />
            <h3>Grand Arena</h3>
            <p>Hyderabad</p>
          </div>

          <div className="hall-card">
            <img
              src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
              alt=""
            />
            <h3>Elite Convention</h3>
            <p>Bangalore</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;