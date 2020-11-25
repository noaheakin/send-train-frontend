import React from 'react';
import {Link} from 'react-router-dom';

const LogIn = ({handleLogIn}) => {
    return (
        <div className='login'>
            <form onSubmit={handleLogIn}>
                <h3>Log In:</h3>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required></input><br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required></input><br></br><br></br>
                <input type="submit" id="login-submit" name="login-submit"></input>
                <Link to='/sign-up'>Not a User? Sign Up!</Link>
            </form>
        </div>
    )
}

export default LogIn