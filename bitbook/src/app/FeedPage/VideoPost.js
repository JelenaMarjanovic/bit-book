import React from 'react';

const VideoPost = () => {
    return (
        <div className="card">
            <div id="yt-frame">
                <iframe width="100%" height="100%"
                    src="https://www.youtube.com/embed/ncijv1WCnVk" frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>Video post</span><span className="right">15 comments</span></p>
            </div>
        </div >
    );
};

export { VideoPost };