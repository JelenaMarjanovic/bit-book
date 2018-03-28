import { User } from "./User";

class Profile extends User {
    constructor({ userId, name, email, aboutShort, about, avatarUrl, postsCount, commentCount }) {
        super(userId, name, aboutShort, avatarUrl);
        this.email = email;
        this.about = about;
        this.postsCount = postsCount;
        this.commentCount = commentCount;
    }
}

export { Profile };