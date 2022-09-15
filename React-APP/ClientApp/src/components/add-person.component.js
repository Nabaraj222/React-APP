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
                    id: '',
                    userName: '',
                    userPassword: '',
                    userEmail: '',
                });
                alert(response.data.userName + " saved successfully.");
            })
            .catch(e => {
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
            <div>
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newInformation}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div className="container">
                        <br />
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Add new Person</h5>
                                <form>
                                    <div class="form-group">
                                        <label for="userName">User Name</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="userName"
                                            required
                                            value={this.state.userName}
                                            onChange={this.onChangeUserName}
                                            name="userName"
                                            placeholder="Enter name.."
                                        />
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="userPassword">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            id="userPassword"
                                            required
                                            value={this.state.userPassword}
                                            onChange={this.onChangeUserPassword}
                                            name="userPassword"
                                            placeholder="Enter password.."
                                        />
                                        <small id="passwordHelp" class="form-text text-muted">The password must be at least 8 digits with the at least one Alpha Numeric and Special character.</small>
                                    </div>

                                    <div class="form-group">
                                        <label htmlFor="userEmail">User Email</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="userEmail"
                                            required
                                            value={this.state.userEmail}
                                            onChange={this.onChangeUserEmail}
                                            name="userEmail"
                                            placeholder="Enter email.."
                                        />
                                    </div>
                                    <br />
                                    <div class="form-group">
                                        <button onClick={this.saveInformation} class="btn btn-success">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AddPerson;