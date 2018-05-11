import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { utils } from './../../shared/utils';
import { postServices } from './../../services/postServices';

class RegisterCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEmail: "",
            registerPass: "",
            registerName: "",
            isValidEmail: false,
            isValidPass: false,
            isValidName: false,
            usernameExist: false, 
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target;
        this.setState({
            [id]: value
        });

        const funcName = "validate" + id;
        this[funcName](value);
    }

    isValidForm = () => {
        const { isValidEmail, isValidPass, isValidName } = this.state;

        return isValidEmail && isValidPass && isValidName;
    }

    validateregisterEmail = (value) => {
        const valid = utils.isValidEmail(value);

        this.setState({
            isValidEmail: valid
        });
    }

    validateregisterPass = (value) => {
        const valid = utils.isValidPass(value);

        this.setState({
            isValidPass: valid
        });
    }

    validateregisterName = (value) => {
        const valid = utils.isValidName(value);

        this.setState({
            isValidName: valid
        });
    }

    isValid = () => (!this.isValidForm()) ? "disabled" : "";

    showError = (validate, value) => {
        const error = (!validate && value !== "") ? true : false;

        return (error) ? "isInvalid" : "isValid";
    }

    registerRequest = () => {
        const data = {
            "username": this.state.registerName,
            "password": this.state.registerPass,
            "name": this.state.registerName,
            "email":this.state.registerEmail
        };

        postServices.createRegisterRequest(data)
            .then(res => {
                this.props.history.push('/');
                this.props.activeTab.select("login");
            })
            .catch(error => {
                this.setState({
                    usernameExist: true
                });
                console.log(error);
            });
    }

    nameAlreadyExist = () => {
        return (this.state.usernameExist) ? "isInvalid" : "isValid";
    }

    render() {
        const { registerEmail, registerPass, registerName, isValidEmail, isValidPass, isValidName } = this.state;

        return (
            <div id="register" className="col s12">
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={registerName} type="text" id="registerName" />
                    <label htmlFor="registerName">username</label>
                    <p className={this.showError(isValidName, registerName)}>Username must start with capital letter and not be longer then 30 characters</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={registerEmail} type="email" id="registerEmail" />
                    <label htmlFor="registerEmail">email</label>
                    <p className={this.showError(isValidEmail, registerEmail)}>Please enter a valid email</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={registerPass} type="password" id="registerPass" />
                    <label htmlFor="registerPass">password</label>
                    <p className={this.showError(isValidPass, registerPass)}>Password must be at least 8 characters long, include 1 lowercase, 1 capital letter, 1 number, 1 special character</p>
                </div>
                <p className={this.nameAlreadyExist()}>That username is already taken</p>
                <a className={`light-blue accent-3 btn col s12 ${this.isValid()}`} onClick={this.registerRequest}>Register</a>
            </div>
        )
    }
}

export default withRouter(RegisterCard)