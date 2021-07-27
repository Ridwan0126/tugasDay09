import React, { Component } from "react";
import "./register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // editStudentSubmit = () => {
  //   const { id } = this.props.student;
  //   this.setState((prevState, props) => ({
  //     isEdit: !prevState.isEdit,
  //   }));
  //   this.props.editStudentSubmit(
  //     id,
  //     this.nameInput.value,
  //     this.usernameInput.value,
  //     this.schoolInput.value
  //   );
  // };

  registerHandler = (e) => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      username: e.target[1].value,
      password: e.target[2].value,
      address: e.target[3].value,
    };
    console.log(user);
    if (this.props.statusEdit) {
      this.props.editStudentExist(user);
      const { loginPage } = this.props;
      loginPage("userList");
    } else {
      this.props.registerHandler(user);
      alert("success register");
      this.props.loginPage("login");
    }

    console.log("data registrasi", user);
  };

  moveToLogin = () => {
    this.props.loginPage("login");
  };

  moveToHome = (e) => {
    e.preventDefault();
    this.props.loginPage("home");
  };
  render() {
    const statusEdit = this.props.statusEdit;
    return (
      <>
        <button className="btn1-home" onClick={this.moveToHome}>
          Home
        </button>
        <br />
        <br />
        <br />
        <br />

        <div className="App">
          <form className="form" onSubmit={this.registerHandler}>
            <div className="input-group">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="input-group">
              <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <input type="text" name="address" placeholder="Address" />
            </div>
            {statusEdit ? (
              <button className="btn1" type="submit">
                SAVE
              </button>
            ) : (
              <>
                <button className="btn1" type="submit">
                  SIGN UP
                </button>
                <button className="btn1" onClick={this.moveToLogin}>
                  LOGIN
                </button>
              </>
            )}
          </form>
        </div>
      </>
    );
  }
}

export default Register;
