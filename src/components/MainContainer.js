import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainContainer = () => {
    return (
        <div>
        <Container>
        <Row>
            <Col>
                <Card className='mainCard'>
                    <Button as={Link} to='/about' className='cardButton'>About</Button>  
                </Card>
            </Col>
            <Col>
                <Card className='mainCard'>
                    <Button as={Link} to='/projects' className='cardButton'>Projects</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='mainCard'>
                    <Button as={Link} to='/blog' className='cardButton'>Blog</Button>
                </Card>
            </Col>
            <Col>
                <Card className='mainCard'>
                    <Button as={Link} to='/contact' className='cardButton'>Contact</Button>
                </Card>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default MainContainer;