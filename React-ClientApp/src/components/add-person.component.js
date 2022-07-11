import React, { Component } from "react";
import PersonDataService from "../services/person.service";

class AddPerson extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.saveInformation = this.saveInformation.bind(this);
    this.newInformation = this.newInformation.bind(this);
    this.state = {
      id: null,
      userName: "",
      userPassword: "", 
      userEmail: ""
    };
  }
  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  onChangeUserPassword(e) {
    this.setState({
      userPassword: e.target.value
    });
  }
  onChangeUserEmail(e) {
    this.setState({
      userEmail: e.target.value
    });
  }
  saveInformation() {
    var data = {
      username: this.state.userName,
      userPassword: this.state.userPassword,
      userEmail: this.state.userEmail
    };
    PersonDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          userName: response.data.userName,
          userPassword: response.data.userPassword,
          userEmail: response.data.userEmail,
        });
        alert("saved successfully.");
      })
      .catch(e => {
        debugger;
        alert(e);
      });
  }
  newInformation() {
    this.setState({
      id: null,
      userName: "",
      userPassword: "",
      userEmail: ""
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newInformation}>
              Add
            </button>
          </div>
        ) : (
          <div className = "container">
            <div className = "col-md-6">
              <div className="form-group">
              <label htmlFor="userName">UserName</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                required
                value={this.state.userName} 
                onChange={this.onChangeUserName}
                name="userName"
              />
              </div>
              <div className="form-group">
              <label htmlFor="userPassword">User Password</label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                required
                value={this.state.userPassword}
                onChange={this.onChangeUserPassword}
                name="userPassword"
              />
              </div>
              <div className="form-group">
              <label htmlFor="userEmail">User Email</label>
              <input
                type="text"
                className="form-control"
                id="userEmail"
                required
                value={this.state.userEmail}
                onChange={this.onChangeUserEmail}
                name="userEmail"
              />
              </div>
            <button onClick={this.saveInformation} className="btn btn-success">
              Submit
            </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddPerson;