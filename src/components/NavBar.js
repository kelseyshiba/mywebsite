import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <Nav className='justify-content-center' defaultActiveKey='/' as="ul">
            <Nav.Item as="li">
                <Nav.Link className='navlink' as={Link} to='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className='navlink' as={Link} to='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className='navlink' as={Link} to='/projects'>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className='navlink' as={Link} to='/blog'>Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link className='navlink' as={Link} to='/contact'>Contact</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )    
}

export default NavBar;