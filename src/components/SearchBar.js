import React from 'react';
import { Link } from 'react-router-dom';
import RangeSlider from './RangeSlider';


const SearchBar = ( { handleSearchSubmit, user, climbs } ) => {
    return (
        <div>
            <div>{(!user) ? null : <h2>Welcome, {user}!</h2>}
            </div>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" id="crag-search" name="crag" placeholder="Search for a crag" required />
                <input type="submit" id="crag-search-submit" name="crag-search-submit"></input>
            </form>
            {(climbs.length > 0) ? [
                <div className='select-discipline'>
                <label for="disciplines">Select Discipline:</label>
                    <select id="disciplines" name="disciplines" form="disciplines-form">
                      <option value="boulder">Boulder</option>
                      <option value="sport">Sport</option>
                      <option value="trad">Trad</option>
                      <option value="alpine">Alpine</option>
                    </select>
                </div>,
                <div>
                    {/* <Typography id="range-slider" gutterBottom>
                        Temperature range
                    </Typography> */}
                    <RangeSlider />
                </div>
            ] : null}
        </div>
    )
}

export default SearchBar