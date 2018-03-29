import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

import { CreatePost } from './CreatePost/CreatePost'
import { PostItem } from './PostItem';

class FeedPage extends Component {
    constructor() {
        super()
        this.state = {
            postItems: "",
            profileId: ""
        }
    }

    componentDidMount() {

        const postPrefix = 'Posts'
        this.getPost(postPrefix);

        const profilePrefix = 'profile'
        this.getProfile(profilePrefix);
    }

    getPost = (prefix) => {
        postServices.getRequest(prefix)
            .then(response => {
                const data = utils.checkPostTypeAndCreate(response);
                const postItems = data.map((post, i) => {
                    return <PostItem key={i} postData={post} profileId={this.state.profileId} />
                })
                this.setState({ postItems: postItems })
            })
    }

    getProfile = (prefix) => {

        postServices.getRequest(prefix)
            .then((response) => {
                this.setState({
                    profileId: response.userId
                })
            })
    }

    render() {
        return (
            <div className="container">
                <CreatePost />
                {this.state.postItems}
            </div>
        );
    }
}

export { FeedPage };