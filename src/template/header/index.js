import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h1 className="header">G2 Academy</h1>
        <p>Tugas ReactJS </p>
      </>
    );
  }
}

export default Header;
