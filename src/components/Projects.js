import React from 'react';
import ReactPlayer from 'react-player';
import { Col, Row } from 'react-bootstrap';

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1><br></br>
        <Row>
            <Col>
                <ReactPlayer url='https://www.youtube.com/watch?v=I0xN36SJCnA'/>
            </Col>
            <Col>
                <ReactPlayer url='https://www.youtube.com/watch?v=bKAk5CGD6nA'/>
            </Col>
        </Row><br></br>
        <Row>
            <Col>
                <ReactPlayer url='https://www.youtube.com/watch?v=_P8QUEXldCQ&t=4s'/>
            </Col>
            <Col>
                <ReactPlayer />
            </Col>
        </Row>
        </div>
    )
}

export default Projects;