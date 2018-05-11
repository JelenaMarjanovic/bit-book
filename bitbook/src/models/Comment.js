import { utils } from '../shared/utils';

class Comment {
    constructor({ id, dateCreated, body, postId, authorName, authorId }) {
        this.id = id;
        this.dateCreated = new Date(dateCreated);
        this.body = body;
        this.postId = postId;
        this.authorName = authorName;
        this.authorId = authorId;
    }

    getDate = () => {
        const date = this.dateCreated;

        return `created at: ${utils.formatDate(date)} ${utils.formatTime(date)}`;
    }
}

export { Comment };