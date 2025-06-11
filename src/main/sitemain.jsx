import React from 'react';
import Card from '../components/card/card';
import '../index.css';
import cardData from '../carddata';
import { useState } from 'react';
import CardNumber from '../components/cardnumber/cardnumber';
import './main.css';
import '../components/canvas/canvascss.css';
import Canvas from '../components/canvas/canvas';

const SiteMain = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const flipAndChangeCard = (changeFn) => {
        setIsFlipped(true); // flip to back
        setTimeout(() => {
            changeFn(); // change card while back is showing
            setIsFlipped(false); // flip to front
        }, 500); // half the duration of the CSS transition
    };

    const prevCard = () => flipAndChangeCard(() => setCurrentIndex(i => Math.max(0, i - 1)));
    const nextCard = () => flipAndChangeCard(() => setCurrentIndex(i => Math.min(cardData.length - 1, i + 1)));

    return (
        <div className="site-main">
            <Canvas />
            <CardNumber cardNumber={cardData[currentIndex].cardNumber} />
            <Card info={cardData[currentIndex]} isFlipped={isFlipped} />
            <div className="button-container">  
                <button className="button" onClick={prevCard}>Previous</button>
                <button className="button" onClick={nextCard}>Next</button>
            </div>
        </div>
    );
};

export default SiteMain;