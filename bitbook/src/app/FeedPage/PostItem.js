import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { ImagePostComp } from './ImagePostComp';
import { VideoPostComp } from './VideoPostComp';
import { TextPostComp } from './TextPostComp';


const PostItem = ({ postData }) => {

    const { type, id } = postData

    const setItem = () => {
        if (type === "image") {
            return <ImagePostComp postData={postData} />
        } else if (type === "video") {
            return <VideoPostComp postData={postData} />
        } else if (type === "text") {
            return <TextPostComp postData={postData} />
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
