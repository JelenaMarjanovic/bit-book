import React from 'react';

const ImagePost = () => {
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="http://via.placeholder.com/300x100/fff" alt="" />
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>Image post</span><span className="right">15 comments</span></p>
            </div>
        </div>
    );
};

export { ImagePost };