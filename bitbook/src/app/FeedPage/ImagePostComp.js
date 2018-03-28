import React from 'react';
import PropTypes from 'prop-types';

const ImagePostComp = ({postData}) => {

    const { imageUrl, type, commentsNum } = postData;

    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={imageUrl} alt="" />
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span><span className="right">{commentsNum} comments</span></p>
            </div>
        </div>
    );
};

export { ImagePostComp };

ImagePostComp.propTypes = {
    postData: PropTypes.object
}