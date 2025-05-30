import React from 'react';


const Card = (info) => {
    return (
        <div className="card">
            <div className="card-header">
                <h1>{info.name}</h1>
            </div>
            <div className="card-body">
                <h2>{info.img}</h2>
            </div>
            <div className="card-description">
                <h3>{info.description}</h3>
            </div>
        </div>
    );
};

export default Card;