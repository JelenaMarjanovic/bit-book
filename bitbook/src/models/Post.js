class Post {
    constructor({ commentsNum, dateCreated, id, type, userDisplayName, userId }) {
        this.id = id;
        this.dateCreated = new Date(dateCreated);
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export { Post };