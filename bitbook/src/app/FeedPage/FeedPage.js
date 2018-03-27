import React, { Component, Fragment } from 'react';
import { ImagePostComp } from './ImagePostComp';
import { TextPost } from './TextPostComp';
import { VideoPost } from './VideoPostComp';
import { postServices } from '../../services/postServices';
import { myConstants } from '../../shared/constants';

class FeedPage extends Component {
    // constructor() {
    //     this.state = {

    //     }
    // }

    componentDidMount() {

        const prefix = 'Posts'
        postServices.getPosts(prefix)
            .then(response => console.log(response.data))
    }

    render() {
        return (
            <div className="container">
                {/* <ImagePost />
                <TextPost />
                <VideoPost /> */}
            </div>
        );
    }
}

export { FeedPage };