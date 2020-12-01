import React from 'react';
import CragCard from '../components/CragCard';

const UserCragsContainer = ({ handleClick, handleDeleteFavorite, crags, user }) => {
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard key={crag.name} crag={crag} handleClick={handleClick} handleDeleteFavorite={handleDeleteFavorite} user={user} />)}
        </div>
    )
}

export default UserCragsContainer