import React from 'react';

const CardNumber = ({ cardNumber }) => {
    return (
        <div className="card-number">
            {cardNumber} / 8
        </div>
    );
};

export default CardNumber;