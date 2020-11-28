import React from 'react';
import StarRating from './StarRating'

const ClimbInfo = ({ climb }) => {
    return (
        <div className="selectedClimb">
            <h2>{climb.name}</h2><h3><em>{climb.rating}</em></h3>
            <StarRating stars={climb.stars} starVotes={climb.starVotes}/>
            <img src={climb.imgMedium} />
        </div>
    )
}

export default ClimbInfo