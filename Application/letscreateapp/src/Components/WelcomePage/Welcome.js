import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="main-bg-div">
      <div className="simple-bg-div">
        <div className="Nav-buttons">
          <div className="Nav-signup-link">
            <a href="/signup">
              <button className="Nav-buttons-link">Signup</button>
            </a>
          </div>
          <div className="Nav-login-link">
            <a href="/login">
              <button className="Nav-buttons-link">Login</button>
            </a>
          </div>
        </div>
        <div className="Title-bg-div">
          <div className="Title-div">Welcome To LetsCreate App</div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
