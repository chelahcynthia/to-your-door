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
<<<<<<< HEAD
      <Link to="/restaurants" className="order-btn">
=======
    
      <Link to="/restaurant" className="order-btn">
>>>>>>> 5fab2015ea8f0fc19cfd3e575a6c069a41412689
        <i className="fa fa-cutlery"></i>Order Now
      </Link>

      <a href="/food">food</a>
    </div>
  );
}

export default Home;
