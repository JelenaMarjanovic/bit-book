import React, { Component, Fragment } from 'react';

import { ImagePost } from './ImagePost';
import { TextPost } from './TextPost';
import { VideoPost } from './VideoPost';
import { CreatePost } from './CreatePost/CreatePost'

class FeedPage extends Component {

    render() {
        return (
            <Fragment>
                <div className="container">
                    <ImagePost />
                    <TextPost />
                    <VideoPost />
                    <CreatePost />
                </div>
            </Fragment>
        );
    }
}

export { FeedPage };