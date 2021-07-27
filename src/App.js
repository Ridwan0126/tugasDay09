import React, { Component } from "react";
import { Header, Nav, Body, Footer } from "./template";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }

  changePage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  loginUserHandler = (user) => {
    this.setState({
      loginUser: user,
    });
  };

  render() {
    return (
      <>
        <Header />
        <hr />
        <Nav page={this.state.currentPage} goToPage={this.changePage} />
        <Body page={this.state.currentPage} goToPage={this.changePage} />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }
}

export default App;
