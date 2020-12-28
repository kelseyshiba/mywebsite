import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const Blog = () => {
    return(
        <div>
            <h1>Blog</h1>
            <p>I have lots of content for someone beginning their software engineering journey.
            I'm also happy to have a few publications available in The Startup!</p>
            <a href='https://kelsey-shiba.medium.com' target='_blank' rel='noreferrer'>
                <Button className='cardButton'>Go To Blog</Button>
            </a>
            <h2>Publications</h2>
            <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/images/linkedlists.jpeg" />
                    <Card.Body>
                        <Card.Title>Linked Lists for Visual Learners</Card.Title>
                        <Card.Text>Published by The Startup
                        </Card.Text>
                    <a href='https://medium.com/swlh/linked-lists-for-visual-learners-75985f60ce49' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card></Card>
                </Col>
            </Row>
        </div>
    )
}

export default Blog;