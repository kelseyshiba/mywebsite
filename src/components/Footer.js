import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div id='footer'>
            <Row>
            <Col>
                <Image src='/images/github-logo.webp'/>  
            </Col>
            <Col className='footerText'>© Kelsey Shiba 2020</Col>
            <Col>
                <Link to='https://www.linkedin.com/in/kelsey-shiba'>
                    <Image src='/images/linkedin-logo.png'/>
                </Link>
            </Col>
            </Row>
        </div>
    )
}

export default Footer;