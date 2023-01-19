import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
    <div className="home-container">
     
      <Link to="/restaurant" className="order-btn">
        <i className="fa fa-cutlery"></i>Order Now
      </Link>
      

      
    </div>
  );
}
export default Home;
