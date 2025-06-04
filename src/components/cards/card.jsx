import React from 'react';
import './cardcss.css';

// Keyword descriptions for tooltips
const keywordDescriptions = {
    Trample: "If this creature would assign enough damage to its blockers to destroy them, it can assign the rest of its damage to the player or planeswalker it's attacking.",
    Haste: "This creature can attack as soon as it comes under your control.",
    Flying: "This creature can't be blocked except by creatures with flying or reach.",
    Reach: "This creature can block creatures with flying.",
    Hexproof: "This creature can't be affected by spells or abilities that target creatures.",
    Deathtouch: "Any creature will die if attacking or blocking this creature.",
    // Add more as needed
};

const Card = ({ info, isFlipped }) => {
    return (
        <div className={`card-3d-container`}>
            <div className={`card-3d${isFlipped ? ' flipped' : ''}`}>
                <div className="card-front">
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
                        <div className="card-description-keywords">
                            {info.keywords && info.keywords.split(',').map((kw, i) => {
                                const keyword = kw.trim();
                                return (
                                    <abbr key={keyword} title={keywordDescriptions[keyword] || keyword} style={{cursor: 'help', marginRight: 8}}>
                                        {keyword}
                                    </abbr>
                                );
                            })}
                        </div>
                    </div>
                    <div className="card-footer">
                        <h5 className="card-footer-text">{info.power}/{info.toughness}</h5>
                    </div>
                </div>
                <div className="card-back">
                    <div className="card-back-content">Feign</div>
                </div>
            </div>
        </div>
    );
};

export default Card;