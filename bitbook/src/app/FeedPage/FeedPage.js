import React, { Component, Fragment } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

import { CreatePost } from './CreatePost/CreatePost'
import { PostItem } from './PostItem';

class FeedPage extends Component {
    constructor() {
        super()
        this.state = {
            postItems: ""
        }
    }

    componentDidMount() {

        const prefix = 'Posts'
        postServices.getPosts(prefix)
            .then(response => {
                const data = utils.checkPostTypeAndCreate(response);
                const postItems = data.map((post, i) => {
                    return <PostItem key={i} postData={post} />
                })
                this.setState({ postItems: postItems })
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