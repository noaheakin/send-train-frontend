import React from 'react';

const ClimbCard = ({ handleClick, climb }) => {
    return (
        <div onClick={() => handleClick(climb)} className="climbCard">
            <h2>{climb.name}</h2>
            <h3><em>{climb.rating}</em></h3>
        </div>
    )
}

export default ClimbCard