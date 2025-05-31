import React from 'react';
import './cardcss.css';
import cardData from '../../carddata';


const Card = ({ info }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h1 className="card-title">{info.name}</h1>
                <h2 className="card-cost">{info.cost}</h2>
            </div>
            <div className="card-body">
                <img src={info.image} alt={info.name} className="card-image" />
            </div>
            <div className="card-description">
                <h3 className="card-description-type">{info.type}</h3>
                <h3 className="card-description-text">{info.description}</h3>
            </div>
            <div className="card-footer">
                <h5 className="card-footer-text">{info.power}/{info.toughness}</h5>
            </div>
        </div>
    );
};

export default Card;