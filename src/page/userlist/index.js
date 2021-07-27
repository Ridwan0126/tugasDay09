import React, { Component } from "react";
import "./userlist.css";
import StudentList from "./StudentList.jsx";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.dataList,
    };
    console.log("data userlist :", this.state);
  }

  moveToLogin = () => {
    this.props.loginPage("login");
    return alert("logout");
  };

  render() {
    const { dataList, deleteList, editList, registerPage } = this.props;

    return (
      <>
        <button className="btn1" onClick={this.moveToLogin}>
          LOGOUT
        </button>
        <br />
        <br />

        <h1>List Data</h1>
        <button className="btn1" onClick={this.addNewStudent}>
          Add New
        </button>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for names.."
          title="Type in a name"
        />

        <table border="0" id="employeeList" className="tbl">
          <thead className="tbl-header">
            <tr>
              <th width="270px">Name</th>
              <th width="250px">Username</th>
              <th width="150px">Password</th>
              <th width="250px">Address</th>
              <th width="200px">Action</th>
            </tr>
          </thead>
          <StudentList
            deleteStudent={deleteList}
            studentList={dataList}
            editStudentSubmit={editList}
            registerPage={registerPage}
            statusEdit={this.props.statusEdit}
            // loggedUser={this.props.loggedUser}  masih error
          />
        </table>
        <div id="demo" className="pagination">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>Next</span>
          <span>Last Page</span>
        </div>
      </>
    );
  }
}

export default UserList;
