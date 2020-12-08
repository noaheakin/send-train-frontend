import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        const { handleSignUp } = this.props
        return (
            <div className="overlay">
            <div class="ui middle aligned center aligned grid">
            <div className="signupWindow">
                <form class="ui large form" onSubmit={(e) => handleSignUp(e)}>
                    <div class="ui stacked segment">
                    <h3>
                        Sign Up
                    </h3>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="*Enter a username..." required/>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="*Enter a password..." required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" name="full_name" placeholder="Enter your full name..." />
                        </div>
                        <div class="field">
                            <input type="text" name="profile_pic" placeholder="Enter profile pic URL..." />
                        </div>
                        <div class="field">
                            <input type="text" name="location" placeholder="Enter your base location..." />
                        </div>
                        <div class="field">
                                <textarea type="text" name="bio" placeholder="Write about yourself..." />
                        </div>
                        <input type="submit" id="login-submit" name="login-submit" class="ui fluid large orange submit button" />
                    </div>  
                    <div class="ui error message"></div>
                </form>
                <div class="ui message">
                    Already have an account? <Link to='/log-in'>Log In</Link>
                </div>
            </div>
            </div>
        </div>

            // <div className="login">
            //     <form onSubmit={(e) =>handleSignUp(e)}>
            //         <h2>Sign Up:</h2>
            //         <label htmlFor="username">Name:</label>
            //         <input type="text" id="name" name="name" /><br></br>
            //         <label htmlFor="username">Username:</label>
            //         <input type="text" id="username" name="username" required /><br></br>
            //         <label htmlFor="password">Password:</label>
            //         <input type="password" id="password" name="password" required /><br></br>
            //         <label htmlFor="profile_pic">Profile Pic URL:</label>
            //         <input type="profile_pic" id="profile_pic" name="profile_pic" /><br></br>
            //         <label htmlFor="bio">Bio:</label>
            //         <input type="bio" id="bio" name="bio" /><br></br>
            //         <label htmlFor="location">Location:</label>
            //         <input type="location" id="location" name="location" /><br></br>
            //         <input type="submit" id="login-submit" name="login-submit"></input>
            //         <Link to='/log-in'> Have an Account? Log In Here</Link>
            //     </form>
            // </div>
        )
    }  
}

export default SignUp