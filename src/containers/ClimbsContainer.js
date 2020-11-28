import React from 'react';
import ClimbCard from '../components/ClimbCard';

const ClimbsContainer = ({ climbs, handleClick }) => {
    return (
        <div className="climbContainer">
            {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} />)}
        </div>
    )
}

export default ClimbsContainer