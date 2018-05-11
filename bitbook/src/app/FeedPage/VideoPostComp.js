import React from 'react';
import PropTypes from 'prop-types';

import { utils } from '../../shared/utils';

import { DeleteItemComp } from './DeleteItemComp';

const VideoPostComp = ({ postData, profileId, reload }) => {
    const { id, type, commentsNum, videoUrl, userId } = postData;
    const filteredURl = utils.filterYouTube(videoUrl);

    const showDelete = (profileId === userId) ? <DeleteItemComp postId={id} reload={reload} /> : "";

    return (
        <div className="card" id={id}>
            <div id="yt-frame">
                <iframe title="video" width="100%" height="100%"
                    src={filteredURl} frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span>{showDelete}<span className="right">{commentsNum} comments</span></p>
            </div>
        </div >
    );
};

export { VideoPostComp };

VideoPostComp.propTypes = {
    postData: PropTypes.object
}