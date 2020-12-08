import React from 'react';

const Profile = ({user, displayEditPage}) => {

    return (
        <div class="ui three column doubling stackable center aligned grid container">
        <div className="profileContainer" class="ui items">
            <div class="item">
                <div class="column">
                <div class="image">
                    {user.profile_pic == "" ? <img className="profilePicBorder" height="300" width="300" src={process.env.PUBLIC_URL + '/images/default_profile.jpg'}/> : <img className="profilePicBorder" height="300" width="300" src={user.profile_pic}></img>}
                </div>
                </div>
                <div class="profileInfo">
                <div className="userInfoContainer" class="content">
                    <div class="header"><h2>{user.username}</h2></div>
                    <div class="meta">
                        <span><em>{user.name}</em></span>
                    </div>
                    <div class="description">{user.bio}</div>
                    <div class="extra">
                        <p>{user.location}</p>
                    </div>
                </div>
                </div>
                <button class="ui right floated orange button" onClick={() => displayEditPage()}>Edit Profile</button>
            </div>
        </div>
        </div>
    )
}

export default Profile