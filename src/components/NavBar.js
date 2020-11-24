import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavLink to='/' exact>Home</NavLink>   
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </Nav>
        </div>
    )    
}

export default NavBar;