class User {
    constructor({ userId, name, aboutShort, lastPostDate, avatarUrl }) {
        this.userId = userId;
        this.name = name;
        this.aboutShort = aboutShort;
        this.lastPostDate = new Date(lastPostDate);
        this.avatarUrl = avatarUrl;
    }
}

export { User };