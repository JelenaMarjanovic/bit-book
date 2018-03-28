import { Post } from './Post';

class TextPost extends Post {
    constructor({ commentsNum, dateCreated, id, text, type, userDisplayName, userId }) {
        super({ commentsNum, dateCreated, id, type, userDisplayName, userId });
        this.text = text;
    }
}

export { TextPost };