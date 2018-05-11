import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ImagePostComp } from './ImagePostComp';
import { VideoPostComp } from './VideoPostComp';
import { TextPostComp } from './TextPostComp';

const PostItem = ({ postData, profileId, reload }) => {
    const { type, id } = postData;

    const setItem = () => {
        if (type === "image") {
            return <ImagePostComp profileId={profileId} postData={postData} reload={reload} />;
        } else if (type === "video") {
            return <VideoPostComp profileId={profileId} postData={postData} reload={reload} />;
        } else if (type === "text") {
            return <TextPostComp profileId={profileId} postData={postData} reload={reload} />;
        }
    }

    return (
        <Link to={`/feeds/${id}/${type}`} >{setItem()} </Link >
    );
};

export { PostItem };

PostItem.propTypes = {
    postData: PropTypes.object
}