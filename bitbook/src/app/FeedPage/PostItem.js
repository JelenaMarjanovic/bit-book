import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { ImagePostComp } from './ImagePostComp';
import { VideoPostComp } from './VideoPostComp';
import { TextPostComp } from './TextPostComp';


const PostItem = ({ postData, profileId }) => {

    const { type, id } = postData

    const setItem = () => {
        if (type === "image") {
            return <ImagePostComp profileId={profileId} postData={postData} />
        } else if (type === "video") {
            return <VideoPostComp profileId={profileId} postData={postData} />
        } else if (type === "text") {
            return <TextPostComp profileId={profileId} postData={postData} />
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
