import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100px",
          width: "100%",
          backgroundColor: "#343a40",
          margin: "0px",
          marginTop: "5vh",
          textAlign: "center"
        }}
      >
        <p
          style={{
            marginBottom: "0px",
            color: "white"
          }}
        >
          © Fictional Company, Inc.
        </p>
        <p
          style={{
            marginBottom: "0px",
            color: "white"
          }}
        >
          Another p-tag
        </p>
      </div>
    );
  }
}

export default Footer;
