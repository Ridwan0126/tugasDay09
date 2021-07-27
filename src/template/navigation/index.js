import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkActivePage = (activePage) => {
    const page = this.props.page;

    if (activePage === page) return "active";

    return "";
  };

  render() {
    return <div></div>;
  }
}

export default Nav;
