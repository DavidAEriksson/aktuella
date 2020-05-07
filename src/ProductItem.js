import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export class ProductItem extends Component {
  render() {
    const {
      productName,
      productContent,
      productImage,
      productPrice
    } = this.props.product;

    return (
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={productImage} />
          <Card.Title style={{ marginTop: "2vh" }}>{productName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {productPrice}
          </Card.Subtitle>
          <Card.Text>{productContent}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductItem;
