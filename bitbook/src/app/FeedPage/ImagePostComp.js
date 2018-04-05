import React from 'react';
import PropTypes from 'prop-types';
import { DeleteItemComp } from '../FeedPage/DeleteItemComp';
import M from 'materialize-css'

const ImagePostComp = ({ postData, profileId, reload }) => {

    const { id, imageUrl, type, commentsNum, userId } = postData;
    const showDelete = (profileId === userId) ? <DeleteItemComp postId={id} reload={reload} /> : "";

    const openPreviewMode = (e) => {
        e.preventDefault()
        var elem = document.querySelector(`img[data-instance='${id}']`);
        var instance = M.Materialbox.init(elem);

        if (instance.$el[0].className.includes("active")) {
            instance.destroy();
        } else {
            instance.open();
        }
    }

    return (
        <div className="card" id={id}>
            <div onClick={openPreviewMode} className="card-image waves-effect waves-block waves-light">
                <img className="activator materialboxed" data-instance={id} src={imageUrl} alt="" />
            </div>
            <div className="card-content light-blue accent-3 white-text">
                <p><span>{type} post</span>{showDelete}<span className="right">{commentsNum} comments</span></p>
            </div>
        </div>
    );
};

export { ImagePostComp };

ImagePostComp.propTypes = {
    postData: PropTypes.object
}