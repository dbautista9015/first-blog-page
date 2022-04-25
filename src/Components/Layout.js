import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Link to="/" className="navbar-brand">Blogs</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/SecondPage" className="nav-link">Dashboard</Link>
                            <Link to="/ThirdPage" className="nav-link">Login</Link>
                            <Link to="/FourthPage" className="nav-link">Create Account</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet />
        </>
    )
}