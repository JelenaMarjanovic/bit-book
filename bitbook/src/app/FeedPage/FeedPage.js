import React, { Component, Fragment } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

import { CreatePost } from './CreatePost/CreatePost'
import { PostItem } from './PostItem';
import { FilterPosts } from './FilterPosts';
import { myConst } from '../../shared/constants';

class FeedPage extends Component {
    constructor() {
        super()
        this.state = {
            postItems: [],
            ownerId: "",
            postType: "all"
        }
    }

    componentDidMount() {
        this.getOwner()
            .then(() => {
                this.getPost();
            })
    }

    getPost = () => {
        return postServices.getRequest(myConst.postsUrl)
            .then(response => {
                const filteredResponse = this.handleFilter(response)
                this.resetState();
                const data = utils.checkPostTypeAndCreate(filteredResponse);
                this.setState({ postItems: data })
            })
    }

    handleFilter = (response) => {
        if (this.state.postType === "all") {
            return response;
        } else {
            return response.filter((post) => {
                return (post.type === this.state.postType)
            })
        }
    }

    resetState = () => {
        this.setState({
            postType: "all"
        })
    }

    handleState = (state) => {
        this.setState({
            postType: state
        })
        this.getPost()
    }

    getOwner = () => {
        return postServices.getRequest(myConst.profileUrl)
            .then(response => {
                this.setState({
                    ownerId: response.userId
                })
            })
    }



    render() {
        const postItems = this.state.postItems.map((post, i) => {
            return <PostItem key={i} postData={post} profileId={this.state.ownerId} reload={this.getPost} />
        })
        return (
            <Fragment>
                <FilterPosts handleState={this.handleState} />
                <div className="container">
                    <CreatePost reload={this.getPost} />
                    {postItems}
                </div>
            </Fragment>
        );
    }
}

export { FeedPage };