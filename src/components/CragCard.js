import React from 'react';

const CragCard = ({ handleClick, handleLocalClick, handleFavoriteClick, crag }) => {
    return (
        <div onClick={() => handleClick(crag)} className="cragCard">
            <h2>{crag.name} <i onClick={(e) => handleLocalClick(e, crag)} class="compass outline icon"></i><i onClick={(e) => handleFavoriteClick(e, crag)} className="favorite" class="heart outline icon"></i></h2>
            <h3><em>{crag.location}</em></h3>
        </div>
    )
}

export default CragCard