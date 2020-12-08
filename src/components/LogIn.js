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
            <div className="overlay">
                <div class="ui middle aligned center aligned grid">
                <div className="loginWindow">
                    <form class="ui large form" onSubmit={this.handleLogin}>
                        <div class="ui stacked segment">
                        <h3>
                            Log In to your account
                        </h3>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                            </div>
                            <input type="submit" value="Log In" class="ui fluid large orange submit button" />
                        </div>  
                        <div class="ui error message"></div>
                    </form>
                    <div class="ui message">
                        New to us? <Link to='/sign-up'>Sign Up!</Link>
                    </div>
                </div>
                </div>
            </div>

            // <div className='login'>
            //     <form onSubmit={this.handleLogin}>
            //         <h3>Log In:</h3>
            //         <label htmlFor="username">Username:</label>
            //         <input type="text" name="username" value={this.state.username} onChange={this.handleChange} required /><br></br>
            //         <label htmlFor="password">Password:</label>
            //         <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required /><br></br><br></br>
            //         <input type="submit" value="Log In"></input>
            //         <Link to='/sign-up'> Not a User? Sign Up!</Link>
            //     </form>
            // </div>
        )
    } 
}

export default LogIn