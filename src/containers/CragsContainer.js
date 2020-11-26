import React from 'react';
import CragCard from '../components/CragCard';

const CragsContainer = ({ handleClick, searchTerm, crags }) => {
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard crag={crag} handleClick={handleClick} searchTerm={searchTerm}/>)}
        </div>
    )
}

export default CragsContainer