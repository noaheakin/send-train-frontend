import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LogIn extends Component {

    state = {
        username: "",
        password: ""
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.handleLogIn(this.state)
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <div className='login'>
                <form onSubmit={this.handleLogin}>
                    <h3>Log In:</h3>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required /><br></br>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br></br><br></br>
                    <input type="submit" value="Log In"></input>
                    <Link to='/sign-up'>Not a User? Sign Up!</Link>
                </form>
            </div>
        )
    } 
}

export default LogIn