import React from 'react';
import { Link } from 'react-router-dom';



const SearchBar = ( { handleSearchSubmit, user, climbs } ) => {
    return (
        <div style={{marginTop: '60px'}}>
            {/* <div>{(!user) ? null : <h2>Welcome, {user}!</h2>}
            </div> */}
            <span className="mainSearch">
            <img className="logo" height="150" width="150" src={process.env.PUBLIC_URL + '/images/sendtrain_logo.jpeg'}/>
            <span className="searchBar">
            <form class="ui action input" onSubmit={handleSearchSubmit}>
                <input type="text" id="crag-search" name="crag" placeholder="Search for a crag" required />
                <button class="ui blue button" type="submit" id="crag-search-submit" name="crag-search-submit">Search</button>
            </form>
            </span>
            </span>
        </div>
    )
}

export default SearchBar