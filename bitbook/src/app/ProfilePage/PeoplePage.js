import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';
import { UserItem } from './UserItem'


class PeoplePage extends Component {
    constructor() {
        super()
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {
        this.getFeedData();
    }

    getFeedData = () => {
        const prefix = 'users'

        return postServices.getRequest(prefix)
            .then(response => {
                const usersList = response.map(user => utils.createUser(user))
                this.setState({ usersList: usersList })
            })
    }

    createUserItems = () => {
        const { usersList } = this.state

        return usersList.map((user, i) => <UserItem user={user} key={i} />)
    }

    render() {
        return (
            <div className="container">
                <ul className="collection">
                    {this.createUserItems()}
                </ul>
            </div>
        );
    }
}

export { PeoplePage };