import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const MainContainer = () => {
    return (
        <div>
        <header>
            <h1 className='text-center'>Kelsey Shiba</h1>
        </header>
        <Container className='justify-content-center'>
        <Row>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Title>About</Card.Title>
                    <Card.Text>More About Me</Card.Text>
                    <Button href='/about' variant="primary">Learn More</Button>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Title>Projects</Card.Title>
                    <Card.Text>See Some of My Creations</Card.Text>
                    <Button href='/about' variant="primary">Learn More</Button>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Title>Blog</Card.Title>
                    <Card.Text>Read My Technical Blog Posts</Card.Text>
                    <Button href='/about' variant="primary">Learn More</Button>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '25rem', height: '15rem' }}>
                    <Card.Title>Contact</Card.Title>
                    <Card.Text>Get In Touch</Card.Text>
                    <Button href='/about' variant="primary">Learn More</Button>
                </Card>
            </Col>
        </Row>
        </Container>
        </div>
    )
}

export default MainContainer;