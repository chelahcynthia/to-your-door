import React from "react";
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <button className="delivery-btn">
        <i className="fa fa-map-marker"></i>
          Enter Delivery Address
      </button>
      <button className="order-btn">
        <i className="fa fa-cutlery"></i>Order Now
      </button>
    </div>
  );
}

export default Home;
