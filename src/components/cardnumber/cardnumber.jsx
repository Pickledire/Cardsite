import React from 'react';
import carddata from '../../carddata';

const CardNumber = ({ cardNumber }) => {
    const totalCards = carddata.length;
    return (
        <div className="card-number">
            {cardNumber} / {carddata.length}
        </div>
    );
};

export default CardNumber;