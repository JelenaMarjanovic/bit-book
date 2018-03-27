import React from 'react';

const VideoPost = () => {
    return (
        <div className="card">
            <video className="responsive-video" controls>
                <source src="movie.mp4" type="video/mp4" />
            </video>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>Video post</span><span className="right">15 comments</span></p>
            </div>
        </div>
    );
};

export { VideoPost };