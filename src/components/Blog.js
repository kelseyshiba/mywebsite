import React from 'react';
import { Button } from 'react-bootstrap';


const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>I have lots of content for someone beginning their software engineering journey.
            I'm also happy to have a few publications available in The Startup!</p>
            <a href='https://kelsey-shiba.medium.com' target='_blank' rel='noreferrer'>
                <Button className='cardButton'>Go To Blog</Button>
            </a>
        </div>
    )
}

export default Blog;