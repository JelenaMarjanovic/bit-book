import React, { Component } from 'react';

import { postServices } from '../../services/postServices';
import { utils } from '../../shared/utils';

import { CreatePost } from './CreatePost/CreatePost'
import { PostItem } from './PostItem';
import { FilterPosts } from './FilterPosts';

class FeedPage extends Component {
    constructor() {
        super()
        this.state = {
            postItems: [],
            profileId: "",
            postType: "all"
        }
    }

    componentDidMount() {
        const profilePrefix = 'profile'
        this.getProfile(profilePrefix)
            .then(() => {
                this.getPost();
            })
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.setState()
        return true;
    }

    getPost = () => {
        const postPrefix = 'Posts'
        return postServices.getRequest(postPrefix)
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
            <React.Fragment>
                <FilterPosts handleState={this.handleState} />
                <div className="container">
                    <CreatePost reload={this.getPost} />
                    {postItems}
                </div>
            </React.Fragment>
        );
    }
}

export { FeedPage };