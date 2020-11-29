import React from 'react';

const UserProfile = ({ user }) => {
    return (
        <div className="userProfile">
            <h2>{user.name} <i class="compass outline icon"></i><i class="heart outline icon"></i></h2>
            <h3><em>{crag.location}</em></h3>
        </div>
    )
}

export default CragCard