import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  moveToLogin = (e) => {
    e.preventDefault();
    this.props.loginPage("register");
  };
  moveToRegister = (e) => {
    e.preventDefault();
    this.props.loginPage("login");
  };

  render() {
    const Hallo = "Welcome To Bootcamp,Coy!!!!!!";
    return (
      <>
        <div id="buton">
          <button className="btn1" onClick={this.moveToLogin}>
            REGISTER
          </button>
          <button className="btn1" onClick={this.moveToRegister}>
            LOGIN
          </button>
        </div>
        <div className="pag">
          <h1 className="nnv">Bootcamp</h1>

          <p>
            Nama : Muhamad Nur Ridwan <br />
            <br />
            Kelas : Bootcamp 3 Mei 2021 <br />
            <br />
            Instruktur : Wawan S. <br />
            <br />
            Materi : Html, Css, JavaScript, ReactJS dan React Native <br />
          </p>
        </div>
      </>
    );
  }
}

export default Home;
