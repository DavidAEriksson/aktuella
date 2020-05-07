import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Badge from "react-bootstrap/Badge";

export class SideNav extends Component {
  render() {
    return (
      <Nav className="flex-column">
        <Nav.Link href="#" style={{ color: "black", fontWeight: "bold" }}>
          T-shirts
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Shirts
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Sweaters & Hoodies
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Jackets
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Jeans
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Pants & Shorts
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Suits
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Underwear
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Socks
        </Nav.Link>
        <Nav.Link style={{ color: "black" }} href="#">
          Work out clothes
        </Nav.Link>
        <Nav.Link style={{ color: "black", fontStyle: "italic" }} href="#">
          Styles of the season <Badge variant="danger">New!</Badge>
        </Nav.Link>
      </Nav>
    );
  }
}

export default SideNav;
