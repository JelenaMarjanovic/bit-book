import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { utils } from './../../shared/utils';
import { postServices } from '../../services/postServices';

class LoginCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: "",
            loginPass: "",
            isValidName: false,
            isValidPass: false,
            failedLogin: false,
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
        const { isValidName, isValidPass } = this.state;

        return isValidName && isValidPass;
    }

    validateloginName = (value) => {
        const valid = utils.isValidName(value);

        this.setState({
            isValidName: valid
        });
    }

    validateloginPass = (value) => {
        const valid = utils.isValidPass(value);

        this.setState({
            isValidPass: valid
        });
    }

    isValid = () => (!this.isValidForm()) ? "disabled" : "";

    showError = (validate, value) => {
        const error = (!validate && value !== "") ? true : false;

        return (error) ? "isInvalid" : "isValid";
    };

    isIncorrectLogin = () => {
        return (this.state.failedLogin) ? "isInvalid" : "isValid";
    }

    loginRequest = () => {
        const data = {
            "username": this.state.loginName,
            "password": this.state.loginPass
        };

        postServices.createLoginRequest(data)
            .then(res => {
                utils.setSessionId(res.data.sessionId);
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({
                    failedLogin: true
                });
                console.log(error);
            });
    }

    render() {
        const { loginName, loginPass, isValidName, isValidPass } = this.state;

        return (
            <div id="login" className="col s12">
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={loginName} type="text" id="loginName" />
                    <label htmlFor="loginName">username</label>
                    <p className={this.showError(isValidName, loginName)}>Username must start with capital letter</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={loginPass} type="password" id="loginPass" />
                    <label htmlFor="loginPass">password</label>
                    <p className={this.showError(isValidPass, loginPass)}>Password must be at least 8 characters long, include 1 lowercase, 1 capital letter, 1 number, 1 special character</p>
                </div>
                <p className={this.isIncorrectLogin()}>Username or Password is incorrect</p>
                <a className={`light-blue accent-3 btn col s12 ${this.isValid()}`} onClick={this.loginRequest}>Login</a>
            </div>
        )
    }
}

export default withRouter(LoginCard)