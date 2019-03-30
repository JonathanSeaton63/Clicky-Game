import React from "react";
import "./Navbar.css";

function Nav(props) {
    return (
        <div>
        <nav className="navbar">
        <h4>Clicky Game!</h4>
        <h2>Click an image to begin!</h2>
        <h4>Score: {props.score} | Top Score: {props.topScore} </h4>
        </nav>
        </div>
    )
}

export default Nav