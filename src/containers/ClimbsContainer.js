import React from 'react';
import ClimbCard from '../components/ClimbCard';
import RangeSlider from '../components/filters/RangeSlider';
import DisciplineSelect from '../components/filters/DisciplineSelect';
import SortSelect from '../components/filters/SortSelect';
import TestSlider from '../components/filters/TestSlider';

const ClimbsContainer = ({ climbs, handleClick, addWishClimb, addCompletedClimb, user }) => {
    return (
        <div>
            {(climbs.length > 0) ? [
                <div className='select-discipline'>
                    <DisciplineSelect />
                </div>,
                <div>
                    <SortSelect />
                </div>,
                <div>
                    {/* <Typography id="range-slider" gutterBottom>
                        Temperature range
                    </Typography> */}
                    <RangeSlider />
                </div>,
                <div>
                    <TestSlider />
                </div>
            ] : null}
            <div className="climbContainer">
                {climbs.map(climb => <ClimbCard key={climb.id} climb={climb} handleClick={handleClick} addWishClimb={addWishClimb} addCompletedClimb={addCompletedClimb} user={user}/>)}
            </div>
        </div>
    )
}

export default ClimbsContainer