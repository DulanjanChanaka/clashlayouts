import React from "react";


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