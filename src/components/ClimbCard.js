import React from 'react';

const ClimbCard = ({ handleClick, climb }) => {
    return (
        <div onClick={() => handleClick(climb)} className="climbCard">
            {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
            <h2>{climb.name}</h2>
            <h3><em>{climb.rating}</em></h3>
        </div>
    )
}

export default ClimbCard