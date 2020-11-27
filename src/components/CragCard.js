import React from 'react';

const CragCard = ({ handleClick, crag }) => {
    return (
        <div onClick={() => handleClick(crag)} className="cragCard">
            <h2>{crag.name}</h2>
            <h3><em>{crag.location}</em></h3>
        </div>
    )
}

export default CragCard