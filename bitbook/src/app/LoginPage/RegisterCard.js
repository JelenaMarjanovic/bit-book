import React, { Component } from "react"

import { utils } from './../../shared/utils'

class RegisterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            registerEmail: "",
            registerPass: "",
            registerName: "",
            isValidEmail: false,
            isValidPass: false,
            isValidName: false, 
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }

    isValidForm = () => {
        const { isValidEmail, isValidPass, isValidName } = this.state;
        return isValidEmail && isValidPass && isValidName
    }

    validateEmail = () => {
        const valid = utils.isValidEmail(this.state.registerEmail)
        this.setState({ isValidEmail: valid})
    }

    validatePass = () => {
        const valid = utils.isValidPass(this.state.registerPass)
        this.setState({ isValidPass: valid})
    }

    validateName = () => {
        const valid = utils.isValidName(this.state.registerName)
        this.setState({ isValidName: valid})
    }

    isValid = () => (!this.isValidForm()) ? "disabled" : "";

    showError = (validate, value) => {
        const error = (!validate && value !== "") ? true : false
        return (error) ? "isInvalid" : "isValid"
    };

    render() {
        const { registerEmail, registerPass, registerName, isValidEmail, isValidPass, isValidName } = this.state

        return (
            <div id="register" className="col s12">
                <div className="input-field col s12">
                    <input onChange={this.handleChange} onBlur={this.validateName} value={registerName} type="password" id="registerName" />
                    <label htmlFor="registerName">name</label>
                    <p className={this.showError(isValidName, registerName)}>Name must start with capital letter and not be longer then 30 characters</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} onBlur={this.validateEmail} value={registerEmail} type="email" id="registerEmail" />
                    <label htmlFor="registerEmail">email</label>
                    <p className={this.showError(isValidEmail, registerEmail)}>Please enter a valid email</p>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} onBlur={this.validatePass} value={registerPass} type="password" id="registerPass" />
                    <label htmlFor="registerPass">password</label>
                    <p className={this.showError(isValidPass, registerPass)}>Password must be at least 8 characters long, include 1 lowercase, 1 capital letter, 1 number, 1 special character</p>
                </div>
                <a className={`light-blue accent-3 btn col s12 ${this.isValid()}`}>Login</a>
            </div>
        )
    }
}

export { RegisterCard }