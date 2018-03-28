import React from 'react';
import PropTypes from 'prop-types';


const TextPostComp = ({ postData }) => {

    const { type, text, commentsNum } = postData;

    return (
        <div className="card">
            <div className="card-content center">
                <p> {text} </p>
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span><span className="right">{commentsNum} comments</span></p>
            </div>
        </div>
    );
};

export { TextPostComp };

TextPostComp.propTypes = {
    postData: PropTypes.object
}