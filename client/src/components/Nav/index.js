import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavContainer extends Component {
    render() {

        return(<Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Google Books Search</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/saved">Saved Books</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>)
    }
}

export default NavContainer;