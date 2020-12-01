import React from 'react';
import ClimbCard from '../components/ClimbCard';

const ClimbsContainer = ({ climbs, handleClick, addWishClimb, addCompletedClimb }) => {
    return (
        <div className="climbContainer">
            {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} addWishClimb={addWishClimb} addCompletedClimb={addCompletedClimb} />)}
        </div>
    )
}

export default ClimbsContainer