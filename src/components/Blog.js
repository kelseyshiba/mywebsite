import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>I have lots of content for someone beginning their software engineering journey.
            I'm also happy to have a few publications available in The Startup!</p>
            <Button as={Link} className='cardButton' to='https://kelsey-shiba.medium.com' target='_blank'>Go To Blog</Button>
        </div>
    )
}

export default Blog;