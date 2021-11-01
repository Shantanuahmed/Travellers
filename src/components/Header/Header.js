import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="container-fluid bg-dark">
            <h1 className="text-center p-2 bg-secondary text-info fw-bold"> Travellers</h1>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto p-2 header">
                            <Nav.Link className="text-white" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="text-white" as={Link} to="/services">Packages</Nav.Link>
                            {user?.email ? <Nav.Link className="text-white" as={Link} to="/bookings">My Bookings</Nav.Link> : ''}
                            {user?.email ? <Nav.Link className="text-white" as={Link} to="/allbookings">All bookings</Nav.Link> : ''}
                            <Nav.Link className="text-white" as={Link} to="/aboutus">About Us</Nav.Link>
                            {user?.email ? <Button onClick={logOut} variant="light">Logout</Button>
                                : <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
                            <Navbar.Text className="ms-2">{user?.email ? "Welcome:" : ""} <a href="">{user?.displayName}</a> </Navbar.Text>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;