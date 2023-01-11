import React from "react";
import { Link } from "react-router-dom";
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <Link to="/about" className="delivery-btn">
        <i className="fa fa-map-marker"></i>
          Enter Delivery Address
      </Link>
      <Link to="/restaurants" className="order-btn">
        <i className="fa fa-cutlery"></i>Order Now
      </Link>

      <a href="/food">food</a>
    </div>
  );
}

export default Home;
