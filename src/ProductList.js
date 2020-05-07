import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

export class ProductList extends Component {
  render() {
    return this.props.products.map(product => (
      <ProductItem key={product._id} product={product} />
    ));
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
