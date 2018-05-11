import React from 'react';

import { Comment } from '../../../models/Comment';
import { CommentItem } from './CommentItem';

const CommentsList = ({ comments }) => {
    const commentEntities = comments.map((comment) => {
        return new Comment(comment);
    })

    const commentItems = commentEntities.map((comment,i) => {
        return <CommentItem key={i} commentData={comment} />;
    })

    return (
        <ul className="collection">
            {commentItems}
        </ul>
    );
};

export { CommentsList };