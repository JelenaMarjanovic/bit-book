import React, { Component, Fragment } from 'react';
import { ImagePost } from './ImagePost';
import { TextPost } from './TextPost';
import { VideoPost } from './VideoPost';



class FeedPage extends Component {


    render() {
        return (
            <div className="container">
                <ImagePost />
                <TextPost />
                <VideoPost />
            </div>
        );
    }
}

export { FeedPage };