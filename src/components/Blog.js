import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


const Blog = () => {
    return(
        <div className='container'>
            <h1>Blog</h1>
            <p>I have lots of content for someone beginning their software engineering journey.
            I'm also happy to have a few published. </p>
            <a href='https://kelsey-shiba.medium.com' target='_blank' rel='noreferrer'>
                <Button className='cardButton'>Go To Blog</Button>
            </a><br></br><br></br>
            <h2>Publications</h2>
            <Row>
                <Col>
                <Card style={{ width: '18rem', color: 'black' }}>
                    <Card.Img variant="top" src="/images/easyalgorithms.jpeg" alt='algorithms'/>
                    <Card.Body>
                        <Card.Title>Easy Algorithms Tips & Tricks</Card.Title>
                        <Card.Text>Published by The Startup</Card.Text>
                    <a href='https://medium.com/swlh/easy-algorithm-tips-tricks-da30063999f8' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img variant="top" src="/images/linkedlists.jpeg" alt='linked lists' />
                    <Card.Body>
                        <Card.Title>Linked Lists for Visual Learners</Card.Title>
                        <Card.Text>Published by The Startup</Card.Text>
                    <a href='https://medium.com/swlh/linked-lists-for-visual-learners-75985f60ce49' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row><br></br>
            <Row>
                <Col>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img variant="top" src="/images/javascriptinterview.jpeg" alt='javascript interview' />
                    <Card.Body>
                        <Card.Title>Reflections from a Javascript Interview</Card.Title>
                        <Card.Text>Published by Javascript in Plain English</Card.Text>
                    <a href='https://medium.com/javascript-in-plain-english/reflections-from-a-javascript-interview-181d4bad00af' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img variant="top" src="/images/BFS.png" alt='breadth first search'/>
                    <Card.Body>
                        <Card.Title>A Simple Guide to Breadth First Search in JavaScript</Card.Title>
                        <Card.Text>Published by Javascript in Plain English</Card.Text>
                <a href='https://medium.com/javascript-in-plain-english/breadth-first-breath-first-search-482eb6ec7c3c' target='blank' rel='noreferrer'>
                <Button variant="primary">Read It</Button>
                </a>
                </Card.Body>
                </Card>
                </Col>
            </Row><br></br><br></br>
            <Row>
                <Col>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img variant="top" src="/images/dictionaryofterms.jpeg" alt='dictionary of terms'/>
                    <Card.Body>
                        <Card.Title>Dictionary of Terms for New Developers</Card.Title>
                        <Card.Text>Published by The Startup</Card.Text>
                    <a href='https://medium.com/swlh/dictionary-of-terms-for-new-developers-6c7ab55f2c6c' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem', color: 'black'}}>
                    <Card.Img variant="top" src="/images/nontechnical.jpeg" alt='non-technical'/>
                    <Card.Body>
                        <Card.Title>Dictionary of Terms for New Developers</Card.Title>
                        <Card.Text>Published by Level Up Coding</Card.Text>
                    <a href='https://kelsey-shiba.medium.com/non-technical-questions-at-my-technical-interview-9f9e31b630a2' target='_blank' rel='noreferrer'>
                    <Button variant="primary">Read It</Button>
                    </a>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Blog;