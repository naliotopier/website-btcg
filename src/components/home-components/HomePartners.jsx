import React from "react";
import $ from "jquery";

function HomePartners() {
  moveCarousel();

  return (
    <div className="partners-div">
      <div className="partners-text">
        <h2 className="partners-title-text">Industry Partners:</h2>
        <div>
          <p className="partners-body-text">
            BTCG proudly partners with industry leaders that provide valuable mentoring, resources, and support.
            Jointly, we host tailored casing sessions, networking events, and in-person firm visits!
          </p>
        </div>
      </div>

      <div className="carousel">
        <div className="carousel-border carousel-left"></div>
        <div id="Flex1" className="single-carousel-container">
          <a href="https://www.bain.com/" target="_blank">
            <img className="partner-logo" src="images/bain-logo.png" />
          </a>
          <a href="https://entrepreneurship.brown.edu/" target="_blank">
            <img className="partner-logo" src="images/nelson-center-logo.png" />
          </a>
          <a href="https://www.mckinsey.com/" target="_blank">
            <img className="partner-logo" src="images/mckinsey-logo.png" />
          </a>
          <a href="https://www2.deloitte.com/global/en/services/consulting-deloitte.html" target="_blank">
            <img className="partner-logo" src="images/deloitte-logo.png" />
          </a>
          <a href="https://www.ey.com/en_us/strategy/about-ey-parthenon" target="_blank">
            <img className="partner-logo" src="images/eyp-logo.png" />
          </a>
        </div>
        <div className="carousel-border carousel-right"></div>
      </div>
    </div>
  );
}

var widthBeforeChange;

//start borrowed code: https://javascript.plainenglish.io/javascript-slow-down-for-loop-9d1caaeeeeed
var imgsHaveLoaded;

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const moveCarousel = async () => {
  widthBeforeChange = null;
  imgsHaveLoaded = false;

  while (!imgsHaveLoaded) {
    await sleep(100);
    if ($("#Flex1 img").width() > 10) {
      imgsHaveLoaded = true;
      startMovement();
    }
  }
};

//end borrowed code

function startMovement() {
  // console.log($("#Flex1 img").width());
  // console.log("doc ready (carousel.js)");

  widthBeforeChange = $(window).width();
  createFlex2();
  createCarousel();

  $(window).on("resize", function () {
    // $("#Flex2").remove();
    createCarousel();
  });
}

function createCarousel() {
  followOtherElem("Flex2", "Flex1");

  var f1Interval = myMove(0, 18, "Flex1", "Flex2");
  var f1Width = $("#Flex1").width();
  var f2Interval = myMove(f1Width, 18, "Flex2", "Flex1");
  return [f1Interval, f2Interval];
}

// Create a second flex-div/element (which is an exact copy of the first, with the exception of the "id)
// This will help our looping visual
function createFlex2() {
  var f2 = $("#Flex1").clone();
  $(f2).attr("id", "Flex2");
  $("#Flex1").after(f2);
}

// Move a flex-div/element
function myMove(myPos, mySpeed, myElem, otherElem) {
  var elem = document.getElementById(myElem);

  var myInterval = setInterval(frame, mySpeed);

  var offScreenOffset = -$(elem).width();

  var pixelChange = -1;

  // myPos = ($(elem).position().left / widthBeforeChange) * $(window).width();
  // console.log(myPos);
  var originalURLPath = window.location.pathname;

  function frame() {
    if (myPos <= offScreenOffset) {
      myPos = followOtherElem(myElem, otherElem);
    } else {
      myPos += pixelChange;
      elem.style.left = myPos + "px";
    }

    // when url changes, stop this function
    var currURLPath = window.location.pathname;
    if (originalURLPath !== currURLPath) {
      clearInterval(myInterval);
    }
  }

  // when mouse is over, slow the carousel's scroll
  $(".carousel").on("mouseover", function () {
    pixelChange = -0.2;
  });

  // when mouse is not over, return the carousel's scroll to normal speed
  $(".carousel").on("mouseleave", function () {
    pixelChange = -1;
  });

  // when window size changes, clear this time interval
  $(window).on("resize", function () {
    clearInterval(myInterval);
  });

  widthBeforeChange = $(window).width();
  // console.log(widthBeforeChange);
}

// Objects move from right to left. They move towards the left hand screen.
function followOtherElem(following, leader) {
  following = "#" + following;
  leader = "#" + leader;

  var leaderPos = $(leader).position();
  var leadLeftPos = leaderPos.left;
  var leaderWidth = $(leader).width();
  var newPos = leadLeftPos + leaderWidth;
  $(following).offset({ left: newPos });
  return newPos;
}

export default HomePartners;
