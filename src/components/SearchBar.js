import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ( { handleSearchSubmit, user, searchTerm, history } ) => {
    console.log(history)
    return (
        <div>
            <div>{(!user) ? null : <h2>Welcome, {user}!</h2>}
            </div>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" id="crag-search" name="crag" placeholder="Search for a crag" required />
                <input type="submit" id="crag-search-submit" name="crag-search-submit"></input>
            </form>
        </div>
    )
}

export default SearchBar