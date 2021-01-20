import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Download from './Download.js';


const About = () => {
    return (
        <div id='bio' className='container text-left'>
            <h1 className='text-center'>Biography</h1>
            <Row>
                <Col>
                    <Image 
                        className='bio-img text-center' 
                        src='/images/shiba-bricks.jpg'
                        alt='kelsey shiba profile'/>
                </Col>
                <Col>
                    <p><strong>Kelsey Shiba</strong> is a full stack software engineer, experienced administrator, project manager, designer, and musician who is known for her expertise in personalization, organization, and optimization. Kelsey thrives supporting visionaries and curious minds. She enjoys helping create new and exciting products and programs for her clients and customers in a collaborative way.</p>
                    <p>As an administrator, she served as the Managing Producer of the UNC/Greeley Jazz Festival for one year and the Associate Director of Jazz Studies for seven years at the University of Northern Colorado. During her tenure, the jazz program garnered multiple awards, hosted international guest artists, toured internationally with student groups, and maintained recognition as one of the best jazz programs in the nation.</p>
                    <p>As a musician, Kelsey has worked as a lead singer and pianist in both the jazz and pop industries. She has worked with many artists and companies across Colorado and prides herself in being able to fit into nearly any musical situation.</p>
                    <p>Kelsey is a lifetime learner and curious mind. In addition to her master’s degree, she has two certificates in Adobe software, two certificates in auto mechanics, and recently completed a certificate in Software Engineering from Flat Iron School. Kelsey is eager to join the world of technology to serve as many people and purposes as possible with her diverse skill sets.</p>
                    <Download />
                </Col>
            </Row>
        </div>
    )
}

export default About;