import React from "react";
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
    <div className="home-container">

        <h1 id="homepage-title">To Your Door</h1>
        <p id="homepage-intro">Choose your restaurant & order favourite food anytime, anywhere from the comfort of your home</p>
        <p id='variety'>"Variety is the spice of life"</p>
        <cite>- Gordon Ramsay</cite>
        <Link to="/restaurant" className="order-btn">
          <i className="fa fa-cutlery"></i>Order Now
        </Link>
      

      
    </div>
  );
}
export default Home;