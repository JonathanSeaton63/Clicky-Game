import React from "react";
import "../Header/Header";
import "../Nav/Navbar";
import "./Characters.css";


function CharacterCard(props) {
    return (
        <div className="card">
            <div className="container">
            <div className="img-container">
                <div className="row">
                    <div className="col-sm">
                        <img alt={props.name} src={props.image} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterCard