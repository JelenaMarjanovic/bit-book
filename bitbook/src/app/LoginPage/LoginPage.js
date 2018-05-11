import React, { Component } from 'react';

import M from 'materialize-css';
import './LoginPage.css';

import LoginCard from './LoginCard';
import RegisterCard from './RegisterCard';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: null,
            activeTabName: "Login"
        }
    }

    componentDidMount = () => {
        let el = document.querySelector("#tabs-swipe-demo");

        const instance = M.Tabs.init(el, {
            onShow: this.toggleTabName
        });
        
        this.setState({
            activeTab: instance
        });
    }

    toggleTabName = () => {
        const registerIsActive = this.state.activeTab.index;
        const tabName = (registerIsActive) ? "Register" : "Login";

        this.setState({
            activeTabName: tabName
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row loginPage">
                    <div className="col s12 m12 l8">
                        <h2>BitBook {this.state.activeTabName}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis efficitur nulla. Curabitur nec turpis at nisl fermentum fringilla at quis erat. Proin suscipit imperdiet ipsum, non dignissim nisi feugiat sit amet. Nunc aliquam aliquam porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque aliquam, ante eget rutrum pellentesque, tellus magna consequat velit, eget congue dui purus vel sem. Nunc posuere, dolor at mollis imperdiet, lorem lacus ultrices justo, at molestie sapien felis a elit. Nam ultricies purus nunc, ut tristique sem dignissim dignissim. In bibendum purus eu tellus porta laoreet. Nullam hendrerit tellus id odio ornare, quis commodo nulla lobortis. Nam libero lacus, vulputate a ex ac, dapibus placerat sem.</p>
                    </div>
                    <div className="loginRegister col s12 m12 l4">
                        <ul id="tabs-swipe-demo" className="tabs">
                            <li className="tab col s6"><a className="active" href="#login">Login</a></li>
                            <li className="tab col s6"><a href="#register">Register</a></li>
                        </ul>
                        <LoginCard />
                        <RegisterCard activeTab={this.state.activeTab} />
                    </div>
                </div>
            </div>
        )
    }
}

export { LoginPage }