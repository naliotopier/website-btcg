import React from "react";
import $ from "jquery";

import HomeIntro from "./home-components/HomeIntro";
import HomeAbout from "./home-components/HomeAbout";
import HomePartners from "./home-components/HomePartners";

function HomePage() {
  document.title = "BTCG – Home";
  // console.log("hi2");

  return (
    <div>
      <HomeIntro />
      <HomeAbout />
      <HomePartners />
      {/* {console.log("HomePage loaded")} */}
    </div>
  );
}

export default HomePage;
