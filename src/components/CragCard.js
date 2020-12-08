import React from 'react';

const CragCard = ({ handleClick, handleAddFavorite, handleDeleteFavorite, userCrags, crag, user }) => {
    if (user !== null) {
        if (userCrags) {
            let filtCrags = userCrags.map(crag => `crag_id: ${crag.id}`)
        return (
            <div onClick={() => handleClick(crag)} class="card">
                <h2>{crag.name}  </h2>
                <h3><em>{crag.location}</em></h3>
                {filtCrags.includes(`crag_id: ${crag.id}`) ?  <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="red large heart icon"></i> : <i onClick={(e) => handleAddFavorite(e, crag)} class="black large heart outline icon"></i>}
            </div>
        )
        } else {
            return (
                <div onClick={() => handleClick(crag)} class="card">
                    <h2> {crag.name}  </h2>
                    <h3><em>{crag.location}</em></h3>
                    <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="red large heart icon"></i>
                </div>
                )
        }
    } else {
        return (
            <div onClick={() => handleClick(crag)} class="card">
                <h2>{crag.name}  </h2>
                <h3><em>{crag.location}</em></h3>
            </div>
        )
    }
}

export default CragCard