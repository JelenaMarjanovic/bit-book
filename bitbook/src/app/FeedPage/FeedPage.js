import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

import { CreatePost } from './CreatePost/CreatePost'
import { PostItem } from './PostItem';

class FeedPage extends Component {
    constructor() {
        super()
        this.state = {
            postItems: [],
            profileId: ""
        }
    }

    componentDidMount() {
        const profilePrefix = 'profile'
        this.getProfile(profilePrefix)
            .then(() => {
                this.getPost();
            })
    }

    getPost = () => {
        const postPrefix = 'Posts'
        return postServices.getRequest(postPrefix)
            .then(response => {
                const data = utils.checkPostTypeAndCreate(response);
                this.setState({ postItems: data })
            })
    }

    getProfile = (prefix) => {
        return postServices.getRequest(prefix)
            .then((response) => {
                this.setState({
                    profileId: response.userId
                })
            })
    }

    render() {
        const postItems = this.state.postItems.map((post, i) => {
            return <PostItem key={i} postData={post} profileId={this.state.profileId} reload={this.getPost} />
        })

        return (
            <div className="container">
                <CreatePost reload={this.getPost} />
                {postItems}
            </div>
        );
    }
}

export { FeedPage };