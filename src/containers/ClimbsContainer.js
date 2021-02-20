import React from 'react';
import ClimbCard from '../components/ClimbCard';
import DisciplineSelect from '../components/filters/DisciplineSelect';
import ClimbAttributeSort from '../components/filters/ClimbAttributeSort';
import ClimbSearch from '../components/filters/ClimbSearch';


// add climb discipline filter


const ClimbsContainer = ({ climbs, handleClick, addWishClimb, deleteWishClimb, wishClimbs, deleteCompletedClimb, addCompletedClimb, completedClimbs, filterClimbsSubmit, handleSelectChange, handleDisciplineChange, user }) => {
    
    return (
        <div>
            {(climbs.length > 0) ? [
                <div className="sortMenu">
                
                <div className='select-discipline'>
                    <DisciplineSelect handleDisciplineChange={handleDisciplineChange} />
                </div>
                <div>
                    <ClimbAttributeSort climbs={climbs} handleSelectChange={handleSelectChange}/>
                </div>
                <span>
                    <div>
                        <ClimbSearch />
                    </div>
                </span>
                </div>
            ] : null}
            <div class="ui link cards">
                {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} addWishClimb={addWishClimb} deleteWishClimb={deleteWishClimb} wishClimbs={wishClimbs} addCompletedClimb={addCompletedClimb} deleteCompletedClimb={deleteCompletedClimb} completedClimbs={completedClimbs} user={user}/>)}
            </div>
        </div>
    )
}

export default ClimbsContainer