import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const MainContainer = () => {
    return (
        <div>
        <Container>
        <Row>
            <Col>
                <Card className='mainCard'>
                    <Button href='/about' className='cardButton'>About</Button>
                </Card>
            </Col>
            <Col>
                <Card className='mainCard'>
                    <Button href='/projects' className='cardButton'>Projects</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card className='mainCard'>
                    <Button href='/blog' className='cardButton'>Blog</Button>
                </Card>
            </Col>
            <Col>
                <Card className='mainCard'>
                    <Button href='/contact' className='cardButton'>Contact</Button>
                </Card>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default MainContainer;