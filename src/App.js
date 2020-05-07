import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumn from "react-bootstrap/CardColumns";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./NavbarComponent";
import ProductList from "./ProductList";
import axios from "axios";
import SideNav from "./SideNav";
import Footer from "./Footer";

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get("https://192.168.1.5:3002/api/products/get").then(res => {
      const products = res.data;
      console.log("product list: ", products);
      this.setState({ products });
    });
  }

  render() {
    return (
      <Container fluid={true}>
        <Navbar />
        <h1 style={{ marginTop: "5vh", marginLeft: "10vw" }}>Random Header</h1>
        <Row
          style={{
            marginTop: "10vh",
            maxWidth: "80%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Col xs="3">
            <p style={{ fontWeight: "bolder", fontSize: "1.3em" }}>
              All mens clothes
            </p>
            <SideNav />
          </Col>

          <Col>
            <p style={{ fontSize: "2em" }}>Mens T-Shirts</p>
            <CardColumn>
              <ProductList products={this.state.products} />
            </CardColumn>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
