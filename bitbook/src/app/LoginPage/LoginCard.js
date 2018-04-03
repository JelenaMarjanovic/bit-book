import React, { Component } from "react"

class LoginCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            loginEmail: "",
            loginPass: "",
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({[id]: value })
    }

    render () {
        return (
            <div id="login" className="col s12">
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={this.state.loginEmail} type="text" id="loginEmail" className="validate"/>
                    <label htmlFor="loginEmail">email</label>
                </div>
                <div className="input-field col s12">
                    <input onChange={this.handleChange} value={this.state.loginPass} type="password" id="loginPass" className="validate"/>
                    <label htmlFor="loginPass">password</label>
                </div>
                <a className="light-blue accent-3 btn col s12">Login</a>
            </div>
        )
    }
}

export { LoginCard }