import React from 'react';

const Profile = ({user}) => {
    console.log(user)
    return (
        <div>
            {user.profile_pic == "" ? <img height="300" width="300" src={process.env.PUBLIC_URL + '/images/default_profile.jpg'}/> : <img height="300" width="300" src={user.profile_pic}></img>}
            <h2>{user.username}</h2>
            <h3><em>{user.name}</em></h3>
            <h4>{user.bio}</h4>
            <h3>{user.location}</h3>
        </div>
    )
}

export default Profile