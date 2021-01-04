import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => (
    <Navbar>
        <Navbar.Brand href="/">
            <img
                src="img/logo.png"
                width="112"
                height="100"
                className="d-inline-block align-top"
                alt="Hafs logo"
            />
        </Navbar.Brand>
        <Nav className="mr-auto nav__list">
            <Nav.Link className="nav__item" href="">Home</Nav.Link>
            <Nav.Link className="nav__item" href="">Articles</Nav.Link>
            <Nav.Link className="nav__item" href="">Pricing</Nav.Link>
            <Nav.Link className="nav__item" href="">Games</Nav.Link>
        </Nav>
    </Navbar>
)

export default Navigation;