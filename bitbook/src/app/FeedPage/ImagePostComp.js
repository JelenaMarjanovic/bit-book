import React from 'react';
import PropTypes from 'prop-types';
import { DeleteItemComp } from '../FeedPage/DeleteItemComp';

const ImagePostComp = ({ postData, profileId }) => {

    const { id, imageUrl, type, commentsNum, userId } = postData;


    return (
        <div className="card" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={imageUrl} alt="" />
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span>{(profileId === userId) ? <DeleteItemComp postId={id} /> : ""}<span className="right">{commentsNum} comments</span></p>
            </div>
        </div>
    );
};

export { ImagePostComp };

ImagePostComp.propTypes = {
    postData: PropTypes.object
}