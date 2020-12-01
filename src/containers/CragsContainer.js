import React from 'react';
import CragCard from '../components/CragCard';

const CragsContainer = ({ handleClick, handleAddFavorite, handleDeleteFavorite, userCrags, crags, user }) => {
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard key={crag.name} crag={crag} handleClick={handleClick} handleAddFavorite={handleAddFavorite} handleDeleteFavorite={handleDeleteFavorite} userCrags={userCrags} user={user} />)}
        </div>
    )
}

export default CragsContainer