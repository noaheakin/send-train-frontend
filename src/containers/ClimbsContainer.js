import React from 'react';
import ClimbCard from '../components/ClimbCard';
import RangeSlider from '../components/filters/RangeSlider';
import DisciplineSelect from '../components/filters/DisciplineSelect';
import SortSelect from '../components/filters/SortSelect';
import TestSlider from '../components/filters/TestSlider';
import MoreTesting from '../components/filters/MoreTesting';

const ClimbsContainer = ({ climbs, handleClick, addWishClimb, deleteCompletedClimb, addCompletedClimb, completedClimbs, filterClimbsSubmit, handleSelectChange, handleDisciplineChange, user }) => {
    return (
        <div>
            {(climbs.length > 0) ? [
                <form onSubmit={filterClimbsSubmit}>
                    <input type="text" id="crag-search" name="crag" placeholder="Search for a climb" required />
                    <input type="submit" id="crag-search-submit" name="crag-search-submit"></input>
                </form>,
                <div className='select-discipline'>
                    <DisciplineSelect handleDisciplineChange={handleDisciplineChange} />
                </div>,
                // <div>
                //     <SortSelect />
                // </div>,
                <div>
                    {/* <Typography id="range-slider" gutterBottom>
                        Temperature range
                    </Typography> */}
                    <RangeSlider />
                </div>,
                <div>
                    <MoreTesting climbs={climbs} handleSelectChange={handleSelectChange}/>
                </div>,
                // <div>
                //     <TestSlider />
                // </div>,
            ] : null}
            <div className="climbContainer">
                {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} addWishClimb={addWishClimb} addCompletedClimb={addCompletedClimb} deleteCompletedClimb={deleteCompletedClimb} completedClimbs={completedClimbs} user={user}/>)}
            </div>
        </div>
    )
}

export default ClimbsContainer