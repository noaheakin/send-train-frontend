import React from 'react';

const ClimbCard = ({ handleClick, addWishClimb, addCompletedClimb, deleteCompletedClimb, completedClimbs, climb, user }) => {
    if (user !== null) {
        if (completedClimbs !== []) {
            let filtClimbs = completedClimbs.map(c => c.mp_id)
            console.log(filtClimbs)
            return (
                <div onClick={() => handleClick(climb)} className="climbCard">
                    {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                    <h2>{climb.name}</h2>
                    <h3><em>{climb.rating}</em></h3>
                    {filtClimbs.includes(climb.id) ?  <i onClick={(e) => deleteCompletedClimb(e, climb)} className="complete" class="green large check circle icon"></i> : <i onClick={(e) => addCompletedClimb(e, climb)}class="green large check circle outline icon"></i>}

                    {/* <i onClick={(e) => addWishClimb(e, climb)} class="blue large list alternate outline icon"></i>
                    <i onClick={(e) => addCompletedClimb(e, climb)}class="green large check circle outline icon"></i> */}
                </div>
            )} else {
                return (
                    <div onClick={() => handleClick(climb)} className="climbCard">
                        {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                        <h2>{climb.name}</h2>
                        <h3><em>{climb.rating}</em></h3>
                        <i onClick={(e) => addWishClimb(e, climb)} class="blue large list alternate outline icon"></i>
                        <i onClick={(e) => addCompletedClimb(e, climb)}class="green large check circle outline icon"></i>
                    </div>
                )
            }
    } else {
        return (
            <div onClick={() => handleClick(climb)} className="climbCard">
                {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                <h2>{climb.name}</h2>
                <h3><em>{climb.rating}</em></h3>
            </div>
        )
    }
}

export default ClimbCard