import React from "react";

function HomeIntro() {
  return (
    <div className="intro-div container-fluid">
      <img className="bkg-img1" src="images/university.jpg" alt="Picture of Brown University's campus." />
      <div id="Title" className="title-container">
        <div className="nav-bar-offset"></div>
        <div className="title-logo">
          <img className="logo-for-intro" src="images/logo.jpeg" alt="Brown Technology Consulting Group (BTCG) logo." />
          <h1 className="title-for-intro">
            <div className="BT">
              <span className="capital-letter-title">B</span>ROWN <span className="capital-letter-title">T</span>
              ECHNOLOGY
            </div>
            <div className="CG">
              <span className="capital-letter-title">C</span>ONSULTING <span className="capital-letter-title">G</span>
              ROUP
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

// $(window).scrollTop();

export default HomeIntro;
