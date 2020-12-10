import React from 'react';
import ClimbCard from '../components/ClimbCard';
import RangeSlider from '../components/filters/RangeSlider';
import DisciplineSelect from '../components/filters/DisciplineSelect';
import SortSelect from '../components/filters/SortSelect';
import TestSlider from '../components/filters/TestSlider';
import MoreTesting from '../components/filters/MoreTesting';
import ClimbSearch from '../components/filters/ClimbSearch';

const ClimbsContainer = ({ climbs, handleClick, addWishClimb, deleteWishClimb, wishClimbs, deleteCompletedClimb, addCompletedClimb, completedClimbs, filterClimbsSubmit, handleSelectChange, handleDisciplineChange, user }) => {
    
    return (
        <div>
            {(climbs.length > 0) ? [
                <div className="sortMenu">
                
                <div className='select-discipline'>
                    <DisciplineSelect handleDisciplineChange={handleDisciplineChange} />
                </div>
                <div>
                    <MoreTesting climbs={climbs} handleSelectChange={handleSelectChange}/>
                </div>
                <div>
                    <ClimbSearch />
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