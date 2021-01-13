import React from 'react';
import PDF from '../KelseyShiba_Resume.pdf'
import { Button } from 'react-bootstrap';


const Download = () => {
    return (
        <div>
            <a href={PDF} target='_blank' rel='noreferrer'>
                <Button>Resume</Button>
            </a>
        </div>
    )
}

export default Download;