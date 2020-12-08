import React from 'react';

const NotFound = () => {
    return (
        <div>
            <img height="480" width="640" src={process.env.PUBLIC_URL + '/images/not_found.jpg'}/>
            <h2>Well this is awkward! Looks like the page you're looking for isn't here... </h2>
        </div>
    )
}

export default NotFound