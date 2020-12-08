import React from 'react';

const ClimbCard = ({ handleClick, addWishClimb, deleteWishClimb, wishClimbs, addCompletedClimb, deleteCompletedClimb, completedClimbs, climb, user }) => {
    if (user !== null) {
        if (completedClimbs.length !== 0) {
            let filtClimbs = completedClimbs.map(c => c.mp_id)
            if (wishClimbs.length !== 0) {
                let filtWishClimbs = wishClimbs.map(c => c.mp_id)
                return (
                    <div onClick={() => handleClick(climb)} class="card">
                        {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                        <h2>{climb.name}</h2>
                        <h3><em>{climb.rating}</em></h3>
                        {filtClimbs.includes(climb.id) ?  [(filtWishClimbs.includes(climb.id) ? <i onClick={(e) => deleteWishClimb(e, climb)} title="Remove from Wish List" class="blue large list alternate icon"></i> : <i onClick={(e) => addWishClimb(e, climb)} title= "Add to Wish List" class="blue large list alternate outline icon"></i>), <i onClick={(e) => deleteCompletedClimb(e, climb)} title="Remove from Completed" className="complete" class="green large check circle icon"></i>] : [(filtWishClimbs.includes(climb.id) ? <i onClick={(e) => deleteWishClimb(e, climb)} title="Remove from Wish List" class="blue large list alternate icon"></i> : <i onClick={(e) => addWishClimb(e, climb)} title="Add to Wish List" class="blue large list alternate outline icon"></i>), <i onClick={(e) => addCompletedClimb(e, climb)} title="Mark as Completed" class="green large check circle outline icon"></i>]}
                    </div>
                )
            } else {
                return (
                    <div onClick={() => handleClick(climb)} class="card">
                        {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                        <h2>{climb.name}</h2>
                        <h3><em>{climb.rating}</em></h3>
                {filtClimbs.includes(climb.id) ?  [<i onClick={(e) => addWishClimb(e, climb)} title="Add to Wish List" class="blue large list alternate outline icon"></i>, <i onClick={(e) => deleteCompletedClimb(e, climb)} title="Remove from Completed" className="complete" class="green large check circle icon"></i>] : [<i onClick={(e) => addWishClimb(e, climb)} title="Add to Wish List" class="blue large list alternate outline icon"></i>, <i onClick={(e) => addCompletedClimb(e, climb)} title="Mark as Completed" class="green large check circle outline icon"></i>]}
                    </div>
                )
            }
        } else {
            if (wishClimbs.length !== 0) {
                let filtWishClimbs = wishClimbs.map(c => c.mp_id)
                return (
                    <div onClick={() => handleClick(climb)} class="card">
                        {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                        <h2>{climb.name}</h2>
                        <h3><em>{climb.rating}</em></h3>
                        {filtWishClimbs.includes(climb.id) ? [<i onClick={(e) => deleteWishClimb(e, climb)} title="Remove from Wish List" class="blue large list alternate icon"></i>, <i onClick={(e) => addCompletedClimb(e, climb)} title="Mark as Completed" class="green large check circle outline icon"></i>] : [<i onClick={(e) => addWishClimb(e, climb)} title="Add to Wish List" class="blue large list alternate outline icon"></i>, <i onClick={(e) => addCompletedClimb(e, climb)} title="Mark as Completed" class="green large check circle outline icon"></i>]}
                    </div>
                )
            } else {
                return (
                    <div onClick={() => handleClick(climb)} class="card">
                        {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                        <h2>{climb.name}</h2>
                        <h3><em>{climb.rating}</em></h3>
                        <i onClick={(e) => addWishClimb(e, climb)} title="Add to Wish List" class="blue large list alternate outline icon"></i>
                        <i onClick={(e) => addCompletedClimb(e, climb)} title="Mark as Completed" class="green large check circle outline icon"></i>
                    </div>
                )
            }
        } 
    } else {
        return (
            <div onClick={() => handleClick(climb)} class="card">
                {(climb.imgSqSmall === "") ? <img height="100" width="100" src={process.env.PUBLIC_URL + '/images/climb_default_img.jpeg'} alt="No Climb Pic Available" /> : <img src={climb.imgSqSmall} alt={`Pic of ${climb.name}`} />}
                <h2>{climb.name}</h2>
                <h3><em>{climb.rating}</em></h3>
            </div>
        )
    }
}

export default ClimbCard