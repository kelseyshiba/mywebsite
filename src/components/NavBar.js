import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function NavBar(){
    return (
        <div>
            <Nav>
                <Nav.Link>Home</Nav.Link>   
                <Nav.Link as={NavLink}>About</Nav.Link>
                <Nav.Link as={NavLink}>Projects</Nav.Link>
                <Nav.Link as={NavLink}>Blog</Nav.Link>
                <Nav.Link as={NavLink}>Contact</Nav.Link>
            </Nav>
        </div>
    )    
}

export default NavBar;