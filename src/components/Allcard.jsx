import React from "react";
import "./Allcard.css"

const Allcard = ({ image ,index}) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={index} />
            </div>
    
        </div>
    );
};

export default Allcard;