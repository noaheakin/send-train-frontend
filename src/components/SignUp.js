import React from 'react';

const SignUp = ({ handleSignUp}) => {
    return (
        <div className="login">
            <form onSubmit={handleSignUp}>
                <h2>Sign Up:</h2>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username"></input><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"></input><br></br>
                <label htmlFor="profile_pic">Profile Pic URL:</label>
                <input type="profile_pic" id="profile_pic" name="profile_pic"></input><br></br>
                <label htmlFor="bio">Bio:</label>
                <input type="bio" id="bio" name="bio"></input><br></br>
                <label htmlFor="location">Location:</label>
                <input type="location" id="location" name="location"></input><br></br>
                <input type="submit" id="login-submit" name="login-submit"></input>
            </form>
        </div>
    )
}

export default SignUp