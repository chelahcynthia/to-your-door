import React from "react";
import "./Profile.css";

function Profile({ user }) {
  return (
    <div className="prof-card3">
      <div div className="prof-container">
      <img src="https://res.cloudinary.com/dphlf7a8o/image/upload/v1674199555/770117_people_512x512_tu1kuc.webp"></img>
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
      <h2>Welcome back, {user}!</h2>
    </div>
  );
}

export default Profile;
