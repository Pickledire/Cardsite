import React from 'react';
import Card from '../components/cards/card';
import '../index.css';
import cardData from '../carddata';
import { useState } from 'react';


const SiteMain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevCard = () => { setCurrentIndex(i => Math.max(0, i - 1)) }
    const nextCard = () => { setCurrentIndex(i => Math.min(cardData.length - 1, i + 1)) }

    return (
        <div className="site-main">
            <Card info={cardData[currentIndex]} />
            <div className="button-container">  
                <button className="button" onClick={prevCard}>Previous</button>
                <button className="button" onClick={nextCard}>Next</button>
            </div>
        </div>
    );
};

export default SiteMain;