import React from "react";

function setDate() {
  var currDate = new Date();
  const year = currDate.getFullYear();
  const month = currDate.toLocaleString("default", { month: "long" });
  const day = currDate.getDate();
  const myDate = month + " " + day + ", " + year + ".";

  return myDate;
}

function Footer() {
  return (
    <footer>
      <div className="footer-background"></div>
      <p className="copyright">Copyright © Nicholas J. Alioto-Pier. {setDate()}</p>
    </footer>
  );
}

export default Footer;
