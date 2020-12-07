import React from 'react';

const EditProfile = ({user, editProfile}) => {

    return (
        <div>
            <form onSubmit={editProfile}>
            <h2>Edit {user.username}:</h2>
                
                <label htmlFor="name">Name:</label>
                <input type="name" id="name" name="name" defaultValue={user.name} ></input><br></br>
                <label htmlFor="username">Username:</label>
                <input type="username" id="username" name="username" defaultValue={user.username} required></input><br></br>
                <label htmlFor="profile_pic">Profile Pic URL:</label>
                <input type="profile_pic" id="profile_pic" name="profile_pic" defaultValue={user.profile_pic} ></input><br></br>
                <label htmlFor="bio">Bio:</label>
                <input type="bio" id="bio" name="bio" defaultValue={user.bio} ></input><br></br>
                <label htmlFor="location">Location:</label>
                <input type="location" id="location" name="location" defaultValue={user.location} ></input><br></br>
                <input type="submit"></input>
            </form>
        </div>
    )
}

export default EditProfile