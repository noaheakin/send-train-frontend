import React from 'react';

const CragCard = ({ handleClick, crag }) => {
    return (
        <div onClick={() => handleClick(crag)} className="cragCard">
            <h2>{crag.name} <i class="compass outline icon"></i><i class="heart outline icon"></i></h2>
            <h3><em>{crag.location}</em></h3>
        </div>
    )
}

export default CragCard