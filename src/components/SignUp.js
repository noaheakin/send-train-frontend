import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        const { handleSignUp } = this.props
        return (
            <div className="login">
                <form onSubmit={(e) =>handleSignUp(e)}>
                    <h2>Sign Up:</h2>
                    <label htmlFor="username">Name:</label>
                    <input type="text" id="name" name="name" /><br></br>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" require /><br></br>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" require /><br></br>
                    <label htmlFor="profile_pic">Profile Pic URL:</label>
                    <input type="profile_pic" id="profile_pic" name="profile_pic" /><br></br>
                    <label htmlFor="bio">Bio:</label>
                    <input type="bio" id="bio" name="bio" /><br></br>
                    <label htmlFor="location">Location:</label>
                    <input type="location" id="location" name="location" /><br></br>
                    <input type="submit" id="login-submit" name="login-submit"></input>
                </form>
            </div>
        )
    }  
}

export default SignUp