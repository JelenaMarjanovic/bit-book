import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';
import { EditProfile } from './EditProfile/EditProfile'
import M from 'materialize-css'
import { myConst } from '../../shared/constants';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            singleUser: null,
            isOwner: false,
        }
    }

    componentDidMount() {
        this.checkOwnerAndFetch();
    }

    checkOwnerAndFetch = () => {
        const currentUrl = this.props.location.pathname;

        if (currentUrl === '/profile/') {
            this.getProfile(myConst.profileUrl);
            this.setState({ isOwner: true })
        } else {
            const userUrl = this.getUserUrl(currentUrl);

            this.getProfile(userUrl);
            this.setState({ isOwner: false })
        }
    }

    getUserUrl = (string) => {
        const stringArr = string.split("/");
        const id = stringArr[2];

        return `users/${id}`
    }

    getProfile = (url) => {
        postServices.getRequest(url)
            .then(response => {
                const singleUser = utils.createSingleUser(response);
                this.setState({ singleUser: singleUser })
            })
    }

    openModal = () => {
        const elem = document.querySelector(`#editProfile`);
        const instance = M.Modal.init(elem);
        instance.options.preventScrolling = false;
        instance.open();
    }

    closeModal = () => {
        const elem = document.querySelector(`#editProfile`);
        const instance = M.Modal.init(elem);
        instance.close();
    }

    render() {
        if (!this.state.singleUser) {
            return <h1>Loading...</h1>
        }

        const { isOwner } = this.state

        const { name, about, avatarUrl, postsCount, commentsCount } = this.state.singleUser;

        return (
            <React.Fragment>
                <EditProfile closeModal={this.closeModal} reload={this.checkOwnerAndFetch} />
                <div className="row">
                    <div className="col s8 offset-s2">
                        <div className="profile center">
                            <div className="profile-avatar">
                                <img className="circle responsive-img" src={avatarUrl} alt="" />
                            </div>
                            <h3>{name}</h3>
                            {
                                isOwner &&
                                <a onClick={this.openModal} className="light-blue btn">Edit Profile</a>
                            }
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
            </React.Fragment>
        );
    }
}

export { ProfilePage };