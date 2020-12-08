import React from 'react';

const EditProfile = ({user, editProfile}) => {

    return (
        <div className="overlay">
            <div class="ui middle aligned center aligned grid">
            <div className="signupWindow">
                <form class="ui large form" onSubmit={editProfile}>
                    <div class="ui stacked segment">
                    <h3>
                        Edit Profile
                    </h3>
                        <div class="field">
                        <label>Username:</label>
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" defaultValue={user.username} required/>
                            </div>
                        </div>
                        <div class="field">
                            <label>Full Name:</label>
                            <input type="text" name="full_name" defaultValue={user.name} />
                        </div>
                        <div class="field">
                            <label>Profile Pic URL:</label>
                            <input type="text" name="profile_pic" defaultValue={user.profile_pic} />
                        </div>
                        <div class="field">
                            <label>Location:</label>
                            <input type="text" name="location" defaultValue={user.location} />
                        </div>
                        <div class="field">
                            <label>Bio:</label>
                            <textarea type="text" name="bio" defaultValue={user.bio} />
                        </div>
                        <input type="submit" id="login-submit" name="login-submit" class="ui fluid large orange submit button"></input>
                    </div>  
                    <div class="ui error message"></div>
                </form>
            </div>
            </div>
        </div>
        
        
        // <div>
        //     <form onSubmit={editProfile}>
        //     <h2>Edit {user.username}:</h2>
                
        //         <label htmlFor="name">Name:</label>
        //         <input type="name" id="name" name="name" defaultValue={user.name} ></input><br></br>
        //         <label htmlFor="username">Username:</label>
        //         <input type="username" id="username" name="username" defaultValue={user.username} required></input><br></br>
        //         <label htmlFor="profile_pic">Profile Pic URL:</label>
        //         <input type="profile_pic" id="profile_pic" name="profile_pic" defaultValue={user.profile_pic} ></input><br></br>
        //         <label htmlFor="bio">Bio:</label>
        //         <input type="bio" id="bio" name="bio" defaultValue={user.bio} ></input><br></br>
        //         <label htmlFor="location">Location:</label>
        //         <input type="location" id="location" name="location" defaultValue={user.location} ></input><br></br>
        //         <input type="submit"></input>
        //     </form>
        // </div>
    )
}

export default EditProfile