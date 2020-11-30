import React from 'react';
import CragCard from '../components/CragCard';

const UserCragsContainer = ({ handleClick, handleDeleteFavorite, crags }) => {
    console.log(handleDeleteFavorite)
    return (
        <div className="cragContainer">
            {crags.map(crag => <CragCard key={crag.name} crag={crag} handleClick={handleClick} handleDeleteFavorite={handleDeleteFavorite} />)}
        </div>
    )
}

export default UserCragsContainer