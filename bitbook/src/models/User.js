import { utils } from '../shared/utils';

class User {
    constructor({ id, name, aboutShort, lastPostDate, avatarUrl }) {
        this.userId = id;
        this.name = name;
        this.aboutShort = aboutShort;
        this.lastPostDate = new Date(lastPostDate) || new Date();
        this.avatarUrl = avatarUrl || 'http://via.placeholder.com/250';
    }

    getDate = () => {
        const lastPost = this.lastPostDate;
        const isToday = utils.isSameDay(lastPost);
        
        if (isToday) {
            return `Last post at: ${utils.formatTime(lastPost)}`;
        } else {
            return `Last post at: ${utils.formatDate(lastPost)} ${utils.formatTime(lastPost)}`;
        }
    }
}

export { User };