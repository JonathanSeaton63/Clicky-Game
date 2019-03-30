import React from "react";
import "../Nav/Navbar";
import "../Nav/Navbar.css"
import "../Header/Header.css"

function Header() {
   return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Clicky Game!</h1>
      <p className="lead">Click on an image, earn points! Don't click on one more than once!</p>
    </div>
  </div>
   )
};

export default Header