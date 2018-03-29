import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';
import { UserItem } from './UserItem'
import { Search } from './Search'

class PeoplePage extends Component {
    constructor() {
        super()
        this.state = {
            usersList: [],
            filteredUsers: [],
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
                this.setState({ usersList: usersList, filteredUsers: usersList })
            })
    }

    createUserItems = () => {
        return this.state.filteredUsers.map((user, i) => <UserItem user={user} key={i} />)
    }

    filterUsers = (valueToSearch) => {
        const { usersList } = this.state
        const matchedUsers = utils.searchUsersByName(usersList, valueToSearch);
    
        this.setState({ filteredUsers: matchedUsers });
    }

    render() {
        return (
            <div className="container">
                <Search filterUsers = {this.filterUsers}/>
                <ul className="collection">
                    {this.createUserItems()}
                </ul>
            </div>
        );
    }
}

export { PeoplePage };