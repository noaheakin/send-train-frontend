import React from 'react';
import CragCard from '../components/CragCard';

const CragsContainer = ({ handleClick, handleLocalClick, handleFavoriteClick, crags }) => {
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard key={crag.name} crag={crag} handleClick={handleClick} handleLocalClick={handleLocalClick} handleFavoriteClick={handleFavoriteClick}/>)}
        </div>
    )
}

export default CragsContainer