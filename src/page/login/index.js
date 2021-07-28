import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("ini data e ", e.target.username.value);

    const { login } = this.props;
    console.log("data login.length", login.length);

    for (let i = 0; i < login.length; i++) {
      console.log("data login.for", login[i]);

      let usernameValue = e.target.username.value;

      if (!usernameValue) {
        return alert("username salah");
      } else if (!e.target.password.value) {
        return alert("Password salah");
      } else if (
        usernameValue === login[i].username &&
        e.target.password.value === login[i].password
      ) {
        console.log(login[i]);
        const { loginPage } = this.props;
        loginPage("userList");
        return alert("Successfully login");
      }
    }

    return alert("salah username password");
  };

  moveToRegister = (e) => {
    e.preventDefault();
    this.props.loginPage("register");
  };

  moveToHome = (e) => {
    e.preventDefault();
    this.props.loginPage("home");
  };
  render() {
    return (
      <>
        <button className="btn1-home" onClick={this.moveToHome}>
          Home
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="App">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <button className="btn1">Sign In</button>
            <button className="btn1" onClick={this.moveToRegister}>
              REGISTER
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
