import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';

const Footer = () => {
    return(
        <div id='footer'>
            <Row>
            <Col><Image href='https://www.github.com/kelseyshiba' src='/images/github-logo.webp'/></Col>
            <Col>© Kelsey Shiba 2020</Col>
            <Col><Image href='https://www.linkedin.com/in/kelsey-shiba' src='/images/linkedin-logo.png'/></Col>
            </Row>
        </div>
    )
}

export default Footer;