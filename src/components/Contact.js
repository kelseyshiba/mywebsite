import { Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
//import React from 'react';
const url = (/^.*localhost.*$/).test(window.location.href) ? 'http://localhost:3002' : 'https://powerful-tor-63835.herokuapp.com'
const Contact = () => {
    const initialState = {name: '', email: '', message: ''}
    const [eachEntry, setEachEntry] = useState(initialState)
    const {name, email, message} = eachEntry

    const handleOnChange = e => {
        setEachEntry({...eachEntry, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault()
        fetch(url + '/send', {
            method: "POST",
            body: JSON.stringify(eachEntry),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
            ).then((response)=> {
            if (response.status === 'success') {
                alert("Message Sent."); 
                setEachEntry({...eachEntry, [e.target.name]: ''})
            } else if(response.status === 'fail') {
                alert("Message failed to send.")
            }
        })
        
    }

    return (
        <div>
            <h1>Contact</h1><br></br>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                onChange={handleOnChange} 
                value={name} 
                name='name' 
                type="text" 
                placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                onChange={handleOnChange} 
                value={email} 
                name='email' 
                type="email" 
                placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicTextField">
                <Form.Label>Message</Form.Label>
              <Form.Control 
                onChange={handleOnChange}
                value={message}
                name='message'
                as='textarea' 
                rows={3} 
                type="message" 
                placeholder="Enter a Message" />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
            </Form><br></br>
        <p>Or send me an email at developerkelseyshiba@gmail.com.</p>
        </div>
   
    )
}

export default Contact;