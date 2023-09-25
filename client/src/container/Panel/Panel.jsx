import React from "react";
import "./panel.scss";
import { Link } from 'react-router-dom';


const Panel = () => {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="header-navbar">
          <div className="header-navbar__logo">
          <Link to="/"> <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='logo' /></Link>
          </div>
        </div>

        <div className="panel-header-content">
          <h1>Unlocking the Future of Digital Credentials</h1>
        </div>
      </div>

      <div className="options">
        
        <div className="option1">
          <h1>Issue A Certificate</h1>
          <Link to='/login'>Click Here</Link>
        </div>

        <div className="option2">
          <h1>Verify A Certificate</h1>
          <Link to='/login'>Click Here</Link>
        </div>
      </div>
    </div>
  );
};

export default Panel;
