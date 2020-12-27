import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div id='footer'>
            <Row>
            <Col>
                <a href='https://github.com/kelseyshiba'>
                    <Image src='/images/github-logo.webp'/>  
                </a>  
            </Col>
            <Col className='footerText'>© Kelsey Shiba 2020</Col>
            <Col>
                <a href='https://www.linkedin.com/in/kelsey-shiba'>
                    <Image src='/images/linkedin-logo.png'/>
                </a>
            </Col>
            </Row>
        </div>
    )
}

export default Footer;