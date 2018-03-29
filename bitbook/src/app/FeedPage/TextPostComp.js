import React from 'react';
import PropTypes from 'prop-types';
import { DeleteItemComp } from '../FeedPage/DeleteItemComp'

const TextPostComp = ({ postData, profileId }) => {

    const { id, type, text, commentsNum, userId } = postData;
    console.log(profileId);
    return (
        <div className="card" id={id}>
            <div className="card-content center">
                <p> {text} </p>
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span>{(profileId === userId) ? <DeleteItemComp postId={id} /> : ""}<span className="right">{commentsNum} comments</span></p>
            </div>
        </div>
    );
};

export { TextPostComp };

TextPostComp.propTypes = {
    postData: PropTypes.object
}