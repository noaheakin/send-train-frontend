import React from 'react';

const CragCard = ({ handleClick, handleAddFavorite, handleDeleteFavorite, userCrags, crag }) => {
    if (userCrags) {
        let filtCrags = userCrags.map(crag => `crag_id: ${crag.crag_id}`)
    return (
        <div onClick={() => handleClick(crag)} className="cragCard">
            <h2>{crag.name} {filtCrags.includes(`crag_id: ${crag.id}`) ?  <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="heart icon"></i> : <i onClick={(e) => handleAddFavorite(e, crag)} class="heart outline icon"></i>} </h2>
            <h3><em>{crag.location}</em></h3>
        </div>
    )
    } else {
        return (
            <div onClick={() => handleClick(crag)} className="cragCard">
                <h2> {crag.name} <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="heart icon"></i> </h2>
                <h3><em>{crag.location}</em></h3>
            </div>
            )
    }
}

export default CragCard