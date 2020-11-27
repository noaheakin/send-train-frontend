import React from 'react';
import CragCard from '../components/CragCard';

const CragsContainer = ({ handleClick, crags }) => {
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard key={crag.name} crag={crag} handleClick={handleClick} />)}
        </div>
    )
}

export default CragsContainer