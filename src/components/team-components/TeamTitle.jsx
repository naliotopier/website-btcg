import React from "react";

function TeamTitle() {
  return (
    <div className="teams-intro-div">
      <div className="intro-div container-fluid">
        <img className="bkg-img1" src="images/university-snow.png" alt="Picture of Brown University's campus." />
        <div id="Title" className="title-container">
          <div className="nav-bar-offset"></div>
          <div className="title-logo">
            <img
              className="logo-for-intro"
              src="images/logo.jpeg"
              alt="Brown Technology Consulting Group (BTCG) logo."
            />
            <h1 className="title-for-intro">Meet The Team!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamTitle;
