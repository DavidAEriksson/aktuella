import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export class NavbarComponent extends Component {
  render() {
    return (
      <Navbar expand="xl" bg="dark" variant="dark">
        <Navbar.Brand>Fictional Company</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link style={{ color: "#5EB1BF" }}>Man</Nav.Link>
          <Nav.Link>Woman</Nav.Link>
          <Nav.Link>Kids</Nav.Link>
          <Nav.Link>Outlet</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="search"
            className="mr-sm-2"
          ></FormControl>
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavbarComponent;
