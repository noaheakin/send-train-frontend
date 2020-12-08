import React from 'react';
import CragCard from '../components/CragCard';

const CragsContainer = ({ handleClick, handleAddFavorite, handleDeleteFavorite, userCrags, crags, user }) => {
    if (crags.length === 0) {
        return (
            <div>
                <img height="425" width="340" src={process.env.PUBLIC_URL + '/images/no_crags.jpg'}/>
                <h2>No luck... try a different search! </h2>
            </div>
        )
    } else {
        return (
            <div class="ui link cards">
                {crags.map(crag => <CragCard key={crag.id} crag={crag} handleClick={handleClick} handleAddFavorite={handleAddFavorite} handleDeleteFavorite={handleDeleteFavorite} userCrags={userCrags} user={user} />)}
            </div>
        )
    }
}

export default CragsContainer