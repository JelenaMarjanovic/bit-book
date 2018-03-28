import { Post } from './Post';

class ImagePost extends Post {
    constructor({ commentsNum, dateCreated, id, imageUrl, type, userDisplayName, userId }) {
        super({ commentsNum, dateCreated, id, type, userDisplayName, userId });
        this.imageUrl = imageUrl;
    }
}

export { ImagePost };