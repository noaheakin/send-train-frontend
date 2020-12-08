import React from 'react';
import ClimbCard from '../components/ClimbCard';
import RangeSlider from '../components/filters/RangeSlider';
import DisciplineSelect from '../components/filters/DisciplineSelect';
import SortSelect from '../components/filters/SortSelect';
import TestSlider from '../components/filters/TestSlider';
import MoreTesting from '../components/filters/MoreTesting';

const ClimbsContainer = ({ climbs, handleClick, addWishClimb, deleteWishClimb, wishClimbs, deleteCompletedClimb, addCompletedClimb, completedClimbs, filterClimbsSubmit, handleSelectChange, handleDisciplineChange, user }) => {
    return (
        <div>
            {(climbs.length > 0) ? [
                <div className="sortMenu">
                {/* <form onSubmit={filterClimbsSubmit}>
                    <input type="text" id="crag-search" name="crag" placeholder="Search for a climb" required />
                    <input type="submit" id="crag-search-submit" name="crag-search-submit"></input>
                </form>, */}
                <div className='select-discipline'>
                    <DisciplineSelect handleDisciplineChange={handleDisciplineChange} />
                </div>,
                <div>
                    <MoreTesting climbs={climbs} handleSelectChange={handleSelectChange}/>
                </div>
                </div>
            ] : null}
            <div class="ui link cards">
                {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} addWishClimb={addWishClimb} deleteWishClimb={deleteWishClimb} wishClimbs={wishClimbs} addCompletedClimb={addCompletedClimb} deleteCompletedClimb={deleteCompletedClimb} completedClimbs={completedClimbs} user={user}/>)}
            </div>
        </div>
    )
}

export default ClimbsContainer