var widthBeforeChange = null;

$(".partner-logo").onload = console.log("test1");

$(function () {
  console.log("doc ready (carousel.js)");

  widthBeforeChange = $(window).width();
  createFlex2();
  createCarousel();

  $(window).on("resize", function () {
    // $("#Flex2").remove();
    createCarousel();
  });
});

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

  function frame() {
    if (myPos <= offScreenOffset) {
      myPos = followOtherElem(myElem, otherElem);
    } else {
      myPos += pixelChange;
      elem.style.left = myPos + "px";
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

// $(document).ready(function () {
//   $(".partner-logo").on("mouseover", function (event) {
//     console.log(event);
//     $(event.target).css("background-color", "red");
//   });

//   // when mouse is not over, return the carousel's scroll to normal speed
//   $(".partner-logo").on("mouseleave", function (event) {
//     console.log(event);
//     $(event.target).css("background-color", "transparent");
//   });
// });

// console.log($("body"));
