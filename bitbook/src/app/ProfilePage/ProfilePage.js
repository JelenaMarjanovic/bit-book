import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

class ProfilePage extends Component {

    constructor() {
        super();
        this.state = {
            singleUser: null
        }
    }

    componentDidMount() {

        const prefix = 'profile';
        postServices.getRequest(prefix)
            .then(response => {
                const singleUser = utils.createSingleUser(response);
                this.setState({ singleUser: singleUser })
            })
    }

    render() {
        if (!this.state.singleUser) {
            return <h1>Loading...</h1>
        }

        const { name, about, avatarUrl, postsCount, commentsCount } = this.state.singleUser;

        return (
            <div className="row">
                <div className="col s8 offset-s2">
                    <div className="profile center">
                        <div className="profile-avatar">
                            <img className="circle responsive-img" src={avatarUrl} alt="" />
                        </div>
                        <h3>{name}</h3>
                        <div>
                            <p>{about}</p>
                        </div>
                        <hr />
                        <div>
                            <span className="profile-details light-blue accent-3 white-text left">{postsCount} Posts</span>
                            <span className="profile-details light-blue accent-3 white-text right">{commentsCount} Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { ProfilePage };