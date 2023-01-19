import React from "react";
import "./Profile.css";

function Profile({ user }) {
  return (
    <div className="prof-card3">
      <h2>Welcome, {user}!</h2>
      <div className="icons">
        <a href="https://twitter.com" target="_blank">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="https://facebook.com" target="_blank">
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
        <a href="https://pinterest.com" target="_blank">
          <i class="fa fa-pinterest-square" aria-hidden="true"></i>
        </a>
        <a href="https://pinterest.com" target="_blank">
          <i class="fa fa-google" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}

export default Profile;
