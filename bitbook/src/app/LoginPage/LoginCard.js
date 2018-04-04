import React, { Component } from "react"

import { utils } from './../../shared/utils'

class LoginCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginEmail: "",
            loginPass: "",
            isValidEmail: false,
            isValidPass: false,
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }

    isValidForm = () => {
        const { isValidEmail, isValidPass } = this.state;
        return isValidEmail && isValidPass
    }

    validateEmail = () => {
        const valid = utils.isValidEmail(this.state.loginEmail)
        this.setState({ isValidEmail: valid})
    }

    validatePass = () => {
        const valid = utils.isValidPass(this.state.loginPass)
        this.setState({ isValidPass: valid})
    }

    isValid = () => (!this.isValidForm()) ? "disabled" : "";
    showError = (validate, value) => {
        const error = (!validate && value !== "") ? true : false
        return (error) ? "isInvalid" : "isValid"
    };

    render() {
        const { loginEmail, loginPass, isValidEmail, isValidPass } = this.state

        return (
            <div id="login" className="col s12">
                <div className="input-field col s12">
                    <input onChange={this.handleChange} onBlur={this.validateEmail} value={loginEmail} type="email" id="loginEmail" />
                    <label htmlFor="loginEmail">email</label>
                    <p className={this.showError(isValidEmail, loginEmail)}>Please enter a valid email</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} onBlur={this.validatePass} value={loginPass} type="password" id="loginPass" />
                    <label htmlFor="loginPass">password</label>
                    <p className={this.showError(isValidPass, loginPass)}>Password must be at least 8 characters long, include 1 lowercase, 1 capital letter, 1 number, 1 special character</p>
                </div>
                <a className={`light-blue accent-3 btn col s12 ${this.isValid()}`}>Login</a>
            </div>
        )
    }
}

export { LoginCard }