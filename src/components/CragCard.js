import React from 'react';

const CragCard = ({ handleClick, handleAddFavorite, handleDeleteFavorite, userCrags, crag, user }) => {
    if (user !== null) {
        if (userCrags) {
            let filtCrags = userCrags.map(crag => `crag_id: ${crag.id}`)
        return (
            <div onClick={() => handleClick(crag)} class="card">
                <div class="content">
                    <div class="header">{crag.name}  </div>
                    <div class="meta"><em>{crag.location}</em></div>
                    <div class="extra content">
                        <span class="center floated">
                            {filtCrags.includes(`crag_id: ${crag.id}`) ?  <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="red large heart icon"></i> : <i onClick={(e) => handleAddFavorite(e, crag)} class="black large heart outline icon"></i>}
                        </span>
                    </div>
                </div>
            </div>
        )
        } else {
            return (
                <div onClick={() => handleClick(crag)} class="card">
                    <div class="content">
                    <div class="header">{crag.name}  </div>
                    <div class="meta"><em>{crag.location}</em></div>
                    <div class="extra content">
                        <span class="center floated">
                            <i onClick={(e) => handleDeleteFavorite(e, crag)} className="favorite" class="red large heart icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                )
        }
    } else {
        return (
            <div onClick={() => handleClick(crag)} class="card">
                <div class="content">
                    <div class="header">{crag.name}  </div>
                    <div class="meta"><em>{crag.location}</em></div>
                </div>
            </div>
        )
    }
}

export default CragCard