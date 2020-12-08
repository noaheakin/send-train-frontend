import React from 'react';
import StarRating from './StarRating'

const ClimbInfo = ({ climb }) => {
    return (
        
        <div className="selectedClimb">
        
            <div className="climbImageContainer">
            <img className="climbImage"src={climb.imgMedium} />
            </div>
            <div class="climbInfo">
            <div class="ui card">
            <div class="content">
            <h2><div class="header">{climb.name}</div></h2>
            <h3><div class="meta"><em>{climb.rating}</em></div></h3>
            <StarRating stars={climb.stars} starVotes={climb.starVotes}/>
            </div>
            <div class="content">
                <a href={climb.url} target="_blank">More info from MountainProject</a>
            </div>
            </div>
        </div>
        </div>
    )
}

export default ClimbInfo