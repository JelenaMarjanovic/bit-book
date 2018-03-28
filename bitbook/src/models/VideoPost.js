import { Post } from './Post';

class VideoPost extends Post {
    constructor({ commentsNum, dateCreated, id, videoUrl, type, userDisplayName, userId }) {
        super({ commentsNum, dateCreated, id, type, userDisplayName, userId });
        this.videoUrl = videoUrl;
    }
}

export { VideoPost };