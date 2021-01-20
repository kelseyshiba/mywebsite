import React from 'react';
import { Link } from 'react-router-dom';

const notFound = () => {
    return (
        <div>
            <h1>Sorry, this address does not exist!</h1>
            <Link to='/'>Go Home</Link>
        </div>
        
    )
}

export default notFound;