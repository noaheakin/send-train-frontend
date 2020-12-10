import React, { Component } from 'react';

class ClimbSearch extends Component {
    
    state = {
        climbSearch: ""
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.filterClimbByName(this.state)
    }

    handleChange = e => {
        let {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    render () {
        return (
            <form class="ui action input">
                <input type="text" id="climb-search" name="climbSearch" value={this.state.username} onChange={this.handleChange} placeholder="Find climb by name..." required />
                <button class="ui blue button" type="submit" id="climb-search-submit" name="climb-search-submit">Search</button>
            </form>
        )
    }
}

export default ClimbSearch