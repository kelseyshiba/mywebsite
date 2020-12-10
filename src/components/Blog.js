import React from 'react';
import { Button } from 'react-bootstrap';

const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>I have lots of content for someone beginning their software engineering journey.
            I'm also happy to have a few publications available in The Startup!</p>
            <Button className='cardButton' href='https://www.medium.com/@kelsey-shiba'>Go To Blog</Button>
        </div>
    )
}

export default Blog;