import React, { Component } from "react";
import { UserList, Home, Login, Register } from "../../page";

let studentList = [];

if (localStorage.getItem("students") === null)
  localStorage.setItem("students", JSON.stringify(studentList));

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      statusEdit: false,
      index: 0,
    };
    console.log("isi data userlist : ", this.state.studentList);
  }
  componentWillMount = () => {
    studentList = JSON.parse(localStorage.getItem("students"));

    this.setState((prevState, props) => ({
      studentList: studentList,
    }));
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          studentList: json.map((user) => {
            return {
              id: user.id,
              name: user.name,
              username: user.username,
              password: "1234567890",
              address: user.address.city,
            };
          }),
        });
      });
  };

  deleteStudent = (id) => {
    let r = window.confirm("Apakah Anda Benar Benar Ingin Menghapus Data?");
    if (r === true) {
      let filteredStudentList = this.state.studentList.filter(
        (x) => x.id !== id
      );

      this.setState((prevState, props) => ({
        studentList: filteredStudentList,
      }));
      localStorage.setItem("students", JSON.stringify(filteredStudentList));
    }
  };

  editStudentSubmit = (id, name, username, address, password) => {
    let studentListCopy = this.state.studentList.map((student) => {
      if (student.id === id) {
        student.name = name;
        student.username = username;
        student.password = password;
        student.address = address;
      }
      return student;
    });
    this.setState((prevState, props) => ({
      studentList: studentListCopy,
    }));
    localStorage.setItem("students", JSON.stringify(studentListCopy));
  };

  addNewStudent = (newUser) => {
    console.log("new data add", newUser);
    console.log(this.state.studentList);

    let copyStudent = this.state.studentList;
    newUser.id = copyStudent.length + 1;

    copyStudent.push(newUser);

    this.setState({
      studentList: copyStudent,
    });

    localStorage.setItem("students", JSON.stringify(copyStudent));
  };

  statusEdit = (id) => {
    this.setState({
      statusEdit: true,
      index: id,
    });
  };

  editStudentExist = (newUser) => {
    console.log("new data edit", newUser);
    console.log(this.state.studentList);

    let copyStudent = this.state.studentList;
    console.log("copying data : ", copyStudent);

    copyStudent.splice(this.state.index, 1, newUser);
    this.setState({
      studentList: copyStudent,
    });

    localStorage.setItem("students", JSON.stringify(copyStudent));
  };

  moveToLogin = () => {
    this.props.loginPage("login");
  };

  renderPage = () => {
    const page = this.props.page;
    const loginPage = this.props.goToPage;
    const registerPage = this.props.goToPage;
    if (page === "userList")
      return (
        <UserList
          dataList={this.state.studentList}
          deleteList={this.deleteStudent}
          editList={this.editStudentSubmit}
          loginPage={loginPage}
          registerPage={registerPage}
          statusEdit={this.statusEdit}
        />
      );

    if (page === "register")
      return (
        <Register
          registerHandler={this.addNewStudent}
          loginPage={loginPage}
          statusEdit={this.state.statusEdit}
          editStudentExist={this.editStudentExist}
        />
      );
    if (page === "login")
      return (
        <Login
          login={this.state.studentList}
          loginPage={loginPage}
          registerPage={registerPage}
        />
      );

    return <Home loginPage={loginPage} />;
  };

  render() {
    console.log("new state", this.state);
    return <div className="body">{this.renderPage()}</div>;
  }
}

export default Body;
