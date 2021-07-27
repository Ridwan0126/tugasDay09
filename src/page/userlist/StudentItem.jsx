import React, { Component } from "react";

export default class StudentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }

  editStudent(e) {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.statusEdit(e.target.id);

    this.props.registerPage("register");
  }

  editStudentSubmit() {
    const { id } = this.props.student;
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit,
    }));
    this.props.editStudentSubmit(
      id,
      this.nameInput.value,
      this.usernameInput.value,
      this.schoolInput.value,
      this.passwordInput.value,
      this.addressInput.value
    );
  }

  render() {
    const { name, username, address, password, id } = this.props.student;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>
          <input
            ref={(nameInput) => (this.nameInput = nameInput)}
            defaultValue={name}
          />
        </td>
        <td>
          <input
            defaultValue={username}
            ref={(usernameInput) => (this.usernameInput = usernameInput)}
          />
        </td>
        <td>
          <input
            ref={(passwordInput) => (this.passwordInput = passwordInput)}
            defaultValue={password}
          />
        </td>
        <td>
          <input
            ref={(addressInput) => (this.addressInput = addressInput)}
            defaultValue={address}
          />
        </td>
        <td>
          <button onClick={this.editStudentSubmit}></button>
          <i className="far fa-save" onClick={this.editStudentSubmit}></i>
        </td>
        <td>
          <i className="fas fa-trash"></i>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{name}</td>
        <td>{username}</td>
        <td>{password}</td>
        <td>{address}</td>
        <td>
          <button
            id={this.props.index}
            className="far fa-edit"
            onClick={this.editStudent}
          >
            Edit
          </button>
          <button className="fas fa-trash" onClick={this.deleteStudent}>
            delete
          </button>
        </td>
      </tr>
    );
  }
}
