import React from "react";

document.title = "404 Error: Not A Page";

function Error() {
  return (
    <div className="error-div">
      <div className="text-container">
        <h2>Oops! Looks like the page you were looking for does not exist.</h2>
        <br></br>
        <a href="/">
          <h3> Return Home </h3>
        </a>
      </div>
    </div>
  );
}

export default Error;
