import React from 'react';
import { Nav, Container,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../image/mazharultech-logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <img className="main-logo" src={logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">About</Nav.Link>
                    <Nav.Link href="#link">Courses</Nav.Link>
                    <Nav.Link href="#link">Tutorials</Nav.Link>
                    <Nav.Link href="#link">Blog</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;