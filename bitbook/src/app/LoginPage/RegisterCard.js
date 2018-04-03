import React, { Component } from "react"

class RegisterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            registerName: "",
            registerEmail: "",
            registerPass: "",
        }
    }

    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({[id]: value })
    }

    render () {
        return (
            <div id="register" className="col s12">
                <div className="input-field col s12">
                    <input id="registerName" onChange={this.handleChange} value={this.state.registerName} className="validate" type="text" />
                    <label htmlFor="registerName">name</label>
                </div>
                <div className="input-field col s12">
                    <input id="registerEmail" onChange={this.handleChange} value={this.state.registerEmail} className="validate" type="text" />
                    <label htmlFor="registerEmail">email</label>
                </div>
                <div className="input-field col s12">
                    <input id="registerPass" onChange={this.handleChange} value={this.state.registerPass} className="validate" type="password" />
                    <label htmlFor="registerPass">password</label>
                </div>
                <a className="light-blue accent-3 btn col s12">Register</a>
            </div>
        )
    }
}

export { RegisterCard }