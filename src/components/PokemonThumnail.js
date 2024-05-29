import React from "react";
import { Link } from "react-router-dom";

import '../App.css';

const PokemonThumnail = ({ id, name, image, type }) => {
    return (
        <div className="thumb-container">
            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <Link to={`/pokemon/${id}`}>More</Link>
            </div>
        </div>
    );
}

export default PokemonThumnail;